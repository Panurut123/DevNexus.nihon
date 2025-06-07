// ใช้ข้อมูลคำศัพท์จาก vocabulary.js
const vocabData = window.vocabData || [];

// ตัวแปรสำหรับเก็บสถานะ Quiz
let currentMode = 'easy';
let currentCategory = 'all';
let selectedVocabs = [];
let questionCount = 10;
let questionFormat = 'mix';
let currentQuestion = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let mistakesLeft = 10;
let timer = null;
let timeLeft = 15;
let quizQuestions = [];
let isInfinity = false;
let infinityInputType = 'multiple-choice';
let infinityStats = {
    totalQuestions: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    answerHistory: [],
    wrongWordsFrequency: {},
    correctWordsFrequency: {}
};

// เพิ่มตัวแปรอ้างอิง section ต่างๆ
const setupSection = document.getElementById('quiz-setup');
const questionsSection = document.getElementById('quiz-questions');
const resultsSection = document.getElementById('quiz-results');

// ฟังก์ชันสำหรับทำความสะอาดข้อความ (เอาช่องว่างและเปลี่ยนเป็นตัวพิมพ์เล็ก)
function cleanString(str) {
    return str.toLowerCase().trim().replace(/\s+/g, ' ');
}

// ฟังก์ชันตรวจสอบคำตอบหลายรูปแบบ
function isAnswerCorrect(userAnswer, correctData) {
    const cleanUserAnswer = cleanString(userAnswer);
    
    // ตรวจสอบโรมาจิ
    if (cleanString(correctData.romaji) === cleanUserAnswer) {
        return true;
    }
    
    // ตรวจสอบภาษาญี่ปุ่น
    if (cleanString(correctData.jp) === cleanUserAnswer) {
        return true;
    }
    
    // ตรวจสอบความหมายไทย (ถ้าคำถามเป็นญี่ปุ่น -> ไทย)
    if (Array.isArray(correctData.th)) {
        // ถ้า th เป็น array ให้ตรวจสอบทุกความหมาย
        for (let meaning of correctData.th) {
            if (cleanString(meaning) === cleanUserAnswer) {
                return true;
            }
        }
    } else {
        if (cleanString(correctData.th) === cleanUserAnswer) {
            return true;
        }
    }
    
    return false;
}

// โหมดความยาก
document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentMode = btn.dataset.mode;
        
        // ซ่อน/แสดงตัวเลือกตามโหมด
        const questionCountSetting = document.querySelector('.question-count-setting');
        const infinityInputTypeSetting = document.querySelector('.infinity-input-type-setting');
        
        if (currentMode === 'infinity') {
            isInfinity = true;
            questionCountSetting.style.display = 'none';
            infinityInputTypeSetting.style.display = 'flex';
            mistakesLeft = Infinity; // ไม่จำกัดการตอบผิด
        } else {
            isInfinity = false;
            questionCountSetting.style.display = 'flex';
            infinityInputTypeSetting.style.display = 'none';
            
            // อัพเดทจำนวนการตอบผิดสูงสุดตามโหมด
            switch(currentMode) {
                case 'easy':
                    mistakesLeft = 10;
                    break;
                case 'medium':
                    mistakesLeft = 5;
                    break;
                case 'hard':
                    mistakesLeft = 3;
                    break;
            }
        }
    });
});

// เลือกรูปแบบการตอบสำหรับโหมด Infinity
document.getElementById('infinity-input-type')?.addEventListener('change', (e) => {
    infinityInputType = e.target.value;
});

// แท็บการเลือกคำศัพท์
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
        document.getElementById(`${btn.dataset.tab}-tab`).classList.add('active');
        
        currentCategory = btn.dataset.tab;
    });
});

// สร้างรายการหมวดหมู่
function renderCategories() {
    const categories = ['ทั้งหมด', ...Array.from(new Set(vocabData.map(v => v.cat)))];
    const categoryList = document.querySelector('.category-list');
    categoryList.innerHTML = '';
    
    categories.forEach(cat => {
        const div = document.createElement('div');
        div.className = 'category-item';
        div.textContent = cat;
        div.onclick = () => {
            document.querySelectorAll('.category-item').forEach(i => i.classList.remove('active'));
            div.classList.add('active');
            selectedVocabs = cat === 'ทั้งหมด' ? vocabData : vocabData.filter(v => v.cat === cat);
        };
        categoryList.appendChild(div);
    });
}

// สร้างรายการคำศัพท์สำหรับเลือกเอง
function renderVocabCheckboxes() {
    const container = document.querySelector('.vocab-checkboxes');
    container.innerHTML = '';
    
    vocabData.forEach(vocab => {
        const div = document.createElement('div');
        div.className = 'vocab-checkbox-item';
        div.innerHTML = `
            <input type="checkbox" id="vocab-${vocab.jp}" value="${vocab.jp}">
            <label for="vocab-${vocab.jp}">
                <span class="jp-word">${vocab.jp}</span>
                <span class="meaning">${vocab.th}</span>
            </label>
        `;
        container.appendChild(div);
    });
}

// ค้นหาคำศัพท์
document.querySelector('.vocab-search')?.addEventListener('input', (e) => {
    const search = e.target.value.toLowerCase();
    document.querySelectorAll('.vocab-checkbox-item').forEach(item => {
        const jp = item.querySelector('.jp-word').textContent;
        const th = item.querySelector('.meaning').textContent;
        item.style.display = jp.includes(search) || th.includes(search) ? 'flex' : 'none';
    });
});

// ตั้งค่าเพิ่มเติม
document.getElementById('question-count')?.addEventListener('change', (e) => {
    questionCount = Math.min(Math.max(1, parseInt(e.target.value) || 10), 50);
});

document.getElementById('question-format')?.addEventListener('change', (e) => {
    questionFormat = e.target.value;
});

// เริ่ม Quiz
document.getElementById('start-quiz')?.addEventListener('click', () => {
    // ตรวจสอบการเลือกคำศัพท์
    if (currentCategory === 'custom') {
        selectedVocabs = Array.from(document.querySelectorAll('.vocab-checkbox-item input:checked'))
            .map(input => vocabData.find(v => v.jp === input.value));
    } else if (currentCategory === 'all') {
        selectedVocabs = vocabData;
    } else if (currentCategory === 'category') {
        const activeCat = document.querySelector('.category-item.active');
        if (activeCat) {
            const cat = activeCat.textContent;
            selectedVocabs = cat === 'ทั้งหมด' ? vocabData : vocabData.filter(v => v.cat === cat);
        } else {
            selectedVocabs = [];
        }
    }

    if (selectedVocabs.length === 0) {
        alert('กรุณาเลือกคำศัพท์ที่ต้องการทดสอบ');
        return;
    }
    
    // สร้างคำถาม
    generateQuestions();
    
    // แสดงหน้า Quiz
    setupSection.style.display = 'none';
    questionsSection.style.display = 'block';
    
    // เริ่มคำถามแรก
    showQuestion();
});

// สร้างคำถาม
function generateQuestions() {
    quizQuestions = [];
    const shuffled = [...selectedVocabs].sort(() => Math.random() - 0.5);
    
    if (isInfinity) {
        const vocab = shuffled[0];
        const type = questionFormat === 'mix' ? 
            (Math.random() < 0.5 ? 'jp-th' : 'th-romaji') : 
            questionFormat;
            
        quizQuestions.push({
            vocab,
            type,
            question: type === 'jp-th' ? vocab.jp : vocab.th
        });
        
        infinityStats = {
            totalQuestions: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            answerHistory: [],
            wrongWordsFrequency: {},
            correctWordsFrequency: {}
        };
    } else {
        const count = Math.min(questionCount, shuffled.length);
        
        for (let i = 0; i < count; i++) {
            const vocab = shuffled[i];
            const type = questionFormat === 'mix' ? 
                (Math.random() < 0.5 ? 'jp-th' : 'th-romaji') : 
                questionFormat;
                
            quizQuestions.push({
                vocab,
                type,
                question: type === 'jp-th' ? vocab.jp : vocab.th
            });
        }
    }
}

// แสดงคำถาม
function showQuestion() {
    const question = quizQuestions[currentQuestion];
    const questionText = document.querySelector('.question-text');
    const multipleChoice = document.querySelector('.multiple-choice');
    const textInput = document.querySelector('.text-input');
    
    if (isInfinity) {
        document.querySelector('.question-number').textContent = `ข้อที่ ${infinityStats.totalQuestions + 1}`;
    } else {
        document.querySelector('.question-number').textContent = `ข้อที่ ${currentQuestion + 1}/${quizQuestions.length}`;
    }
    
    if (isInfinity) {
        document.querySelector('.mistakes-left').style.display = 'none';
        document.querySelector('.infinity-stats-button').style.display = 'block';
        document.querySelector('.quiz-footer').style.display = 'flex';
    } else {
        document.querySelector('.mistakes-left').style.display = 'flex';
        document.querySelector('.infinity-stats-button').style.display = 'none';
        document.querySelector('.quiz-footer').style.display = 'flex';
        document.querySelector('.mistakes-count').textContent = mistakesLeft;
    }
    
    questionText.textContent = question.question;
    
    if (!isInfinity) {
        const progress = ((currentQuestion) / quizQuestions.length) * 100;
        document.querySelector('.progress').style.width = `${progress}%`;
    } else {
        document.querySelector('.progress').style.width = '0%';
    }
    
    if (currentMode === 'easy' || (isInfinity && infinityInputType === 'multiple-choice')) {
        multipleChoice.style.display = 'grid';
        textInput.style.display = 'none';
        
        const choices = generateChoices(question);
        multipleChoice.innerHTML = choices.map((choice, i) => `
            <button class="choice-btn" data-answer="${choice}">${choice}</button>
        `).join('');
        
        multipleChoice.querySelectorAll('.choice-btn').forEach(btn => {
            btn.onclick = () => checkAnswer(btn.dataset.answer);
            // รีเซ็ตสีปุ่ม
            btn.classList.remove('correct', 'wrong');
            btn.disabled = false;
        });
    } else {
        multipleChoice.style.display = 'none';
        textInput.style.display = 'flex';
        
        textInput.querySelector('input').value = '';
        textInput.querySelector('input').focus();
        
        textInput.querySelector('.submit-btn').onclick = () => {
            const answer = textInput.querySelector('input').value.trim();
            if (answer) checkAnswer(answer);
        };
        
        textInput.querySelector('input').onkeypress = (e) => {
            if (e.key === 'Enter') {
                const answer = e.target.value.trim();
                if (answer) checkAnswer(answer);
            }
        };
    }
    
    if (currentMode === 'hard') {
        startTimer();
    }
}

// สร้างตัวเลือกสำหรับโหมดง่าย
function generateChoices(question) {
    const vocab = question.vocab;
    let correctAnswer;
    
    if (question.type === 'jp-th') {
        correctAnswer = Array.isArray(vocab.th) ? vocab.th[0] : vocab.th;
    } else {
        correctAnswer = vocab.romaji;
    }
    
    const choices = [correctAnswer];
    
    while (choices.length < 4) {
        const randomVocab = selectedVocabs[Math.floor(Math.random() * selectedVocabs.length)];
        let randomAnswer;
        
        if (question.type === 'jp-th') {
            randomAnswer = Array.isArray(randomVocab.th) ? randomVocab.th[0] : randomVocab.th;
        } else {
            randomAnswer = randomVocab.romaji;
        }
        
        if (!choices.includes(randomAnswer) && randomAnswer !== correctAnswer) {
            choices.push(randomAnswer);
        }
    }
    
    return choices.sort(() => Math.random() - 0.5);
}

// เริ่มนับถอยหลัง
function startTimer() {
    clearInterval(timer);
    timeLeft = 15;
    document.querySelector('.timer').textContent = timeLeft;
    
    timer = setInterval(() => {
        timeLeft--;
        document.querySelector('.timer').textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            checkAnswer('');
        }
    }, 1000);
}

// อัพเดทสถิติสำหรับโหมด Infinity
function updateInfinityStats(isCorrect, question, answer) {
    infinityStats.totalQuestions++;
    
    const vocab = question.vocab;
    const wordKey = `${vocab.jp} (${vocab.th})`;
    
    if (isCorrect) {
        infinityStats.correctAnswers++;
        infinityStats.correctWordsFrequency[wordKey] = (infinityStats.correctWordsFrequency[wordKey] || 0) + 1;
    } else {
        infinityStats.wrongAnswers++;
        infinityStats.wrongWordsFrequency[wordKey] = (infinityStats.wrongWordsFrequency[wordKey] || 0) + 1;
    }
    
    infinityStats.answerHistory.unshift({
        question: question.question,
        userAnswer: answer,
        isCorrect: isCorrect,
        type: question.type,
        vocab: vocab
    });
    
    if (infinityStats.answerHistory.length > 10) {
        infinityStats.answerHistory.pop();
    }
    
    updateInfinityStatsDisplay();
}

// อัพเดทการแสดงสถิติสำหรับโหมด Infinity
function updateInfinityStatsDisplay() {
    const statsPanel = document.getElementById('infinity-stats-panel');
    if (!statsPanel) return;
    
    document.getElementById('infinity-total-questions').textContent = infinityStats.totalQuestions;
    document.getElementById('infinity-correct-answers').textContent = infinityStats.correctAnswers;
    document.getElementById('infinity-wrong-answers').textContent = infinityStats.wrongAnswers;
    
    const accuracy = infinityStats.totalQuestions > 0 ? 
        Math.round((infinityStats.correctAnswers / infinityStats.totalQuestions) * 100) : 0;
    document.getElementById('infinity-accuracy').textContent = `${accuracy}%`;
    
    const historyContainer = document.getElementById('infinity-answer-history');
    if (historyContainer) {
        historyContainer.innerHTML = '';
        
        infinityStats.answerHistory.forEach(item => {
            const historyItem = document.createElement('div');
            historyItem.className = `history-item ${item.isCorrect ? 'correct' : 'wrong'}`;
            
            let correctAnswerText = '';
            if (item.type === 'jp-th') {
                correctAnswerText = Array.isArray(item.vocab.th) ? item.vocab.th[0] : item.vocab.th;
            } else {
                correctAnswerText = item.vocab.romaji;
            }
            
            historyItem.innerHTML = `
                <div class="question">${item.question}</div>
                <div class="answer-details">
                    <span class="${item.isCorrect ? 'correct-text' : 'wrong-text'}">
                        ${item.isCorrect ? 
                            `<i class="fas fa-check"></i> ${item.userAnswer}` : 
                            `<i class="fas fa-times"></i> ${item.userAnswer} (ถูก: ${correctAnswerText})`
                        }
                    </span>
                </div>
            `;
            historyContainer.appendChild(historyItem);
        });
    }
}

// สร้างคำถามใหม่สำหรับโหมด Infinity
function generateNextInfinityQuestion() {
    let shuffled = [...selectedVocabs].sort(() => Math.random() - 0.5);
    
    if (infinityStats.answerHistory.length > 0 && shuffled.length > 1) {
        const lastQuestion = infinityStats.answerHistory[0].question;
        shuffled = shuffled.filter(vocab => 
            (vocab.jp !== lastQuestion && vocab.th !== lastQuestion) || shuffled.length <= 1
        );
    }
    
    const vocab = shuffled[0];
    const type = questionFormat === 'mix' ? 
        (Math.random() < 0.5 ? 'jp-th' : 'th-romaji') : 
        questionFormat;
        
    quizQuestions[0] = {
        vocab,
        type,
        question: type === 'jp-th' ? vocab.jp : vocab.th
    };
    
    currentQuestion = 0;
}

// ตรวจสอบคำตอบ
function checkAnswer(answer) {
    clearInterval(timer);
    
    const question = quizQuestions[currentQuestion];
    const vocab = question.vocab;
    const isCorrect = isAnswerCorrect(answer, vocab);
    
    // บันทึกคำตอบของผู้ใช้และผลลัพธ์
    question.userAnswer = answer;
    question.isCorrect = isCorrect;
    
    if (isInfinity) {
        updateInfinityStats(isCorrect, question, answer);
    } else {
        if (isCorrect) {
            correctAnswers++;
        } else {
            wrongAnswers++;
            mistakesLeft--;
        }
    }
    
    // แสดงผลสีบนปุ่มตัวเลือก (สำหรับโหมด multiple choice)
    if (currentMode === 'easy' || (isInfinity && infinityInputType === 'multiple-choice')) {
        const buttons = document.querySelectorAll('.choice-btn');
        buttons.forEach(btn => {
            btn.disabled = true;
            const btnAnswer = btn.dataset.answer;
            
            // ตรวจสอบว่าปุ่มนี้เป็นคำตอบที่ถูกหรือไม่
            if (isAnswerCorrect(btnAnswer, vocab)) {
                btn.classList.add('correct');
            }
            
            // ถ้าเป็นปุ่มที่ผู้ใช้กดและตอบผิด
            if (btnAnswer === answer && !isCorrect) {
                btn.classList.add('wrong');
            }
        });
    }
    
    // แสดงผลคำตอบแบบ popup
    let correctAnswerText = '';
    if (question.type === 'jp-th') {
        correctAnswerText = Array.isArray(vocab.th) ? vocab.th.join(', ') : vocab.th;
    } else {
        correctAnswerText = `${vocab.romaji} (${vocab.jp})`;
    }
    
    showAnswerResult(isCorrect, correctAnswerText);
    
    setTimeout(() => {
        if (isInfinity) {
            generateNextInfinityQuestion();
            showQuestion();
        } else {
            if (mistakesLeft <= 0) {
                endQuiz('mistakes');
            } else if (currentQuestion + 1 >= quizQuestions.length) {
                endQuiz('complete');
            } else {
                currentQuestion++;
                showQuestion();
            }
        }
    }, isCorrect ? 1500 : 2000);
}

// แสดงผลคำตอบแบบ popup
function showAnswerResult(isCorrect, correctAnswer) {
    const resultElement = document.createElement('div');
    resultElement.className = `answer-result ${isCorrect ? 'correct' : 'wrong'}`;
    resultElement.innerHTML = isCorrect ? 
        '<i class="fas fa-check"></i> ถูกต้อง!' : 
        `<i class="fas fa-times"></i> ผิด! คำตอบที่ถูกคือ: ${correctAnswer}`;
    document.getElementById('quiz-questions').appendChild(resultElement);
    
    setTimeout(() => {
        resultElement.remove();
    }, isCorrect ? 1500 : 2000);
}

// จบ Quiz
function endQuiz(reason) {
    if (isInfinity) {
        // โหมด Infinity - แสดงสรุปผลและกลับไปหน้า setup
        const totalQuestions = infinityStats.totalQuestions;
        const correctAnswers = infinityStats.correctAnswers;
        const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
        
        alert(`สรุปผลการทดสอบโหมด Infinity:\nจำนวนข้อทั้งหมด: ${totalQuestions}\nตอบถูก: ${correctAnswers}\nตอบผิด: ${totalQuestions - correctAnswers}\nความแม่นยำ: ${accuracy}%`);
        
        // กลับไปหน้า setup
        questionsSection.style.display = 'none';
        setupSection.style.display = 'block';
        return;
    }
    
    // โหมดปกติ - แสดงหน้าผลการทดสอบ
    if (reason === 'mistakes') {
        alert('คุณตอบผิดเกินจำนวนที่กำหนดแล้ว!');
    }
    
    showResults();
    questionsSection.style.display = 'none';
    resultsSection.style.display = 'block';
}

// แสดงผลลัพธ์
function showResults() {
    const total = quizQuestions.length;
    const actualCorrect = quizQuestions.filter(q => q.isCorrect).length;
    const actualWrong = total - actualCorrect;
    const score = total > 0 ? Math.round((actualCorrect / total) * 100) : 0;
    
    document.querySelector('.score-percent').textContent = `${score}%`;
    document.querySelector('.correct-count').textContent = actualCorrect;
    document.querySelector('.wrong-count').textContent = actualWrong;
    
    const feedback = document.querySelector('.feedback-message');
    if (score >= 80) {
        feedback.textContent = 'เยี่ยมมาก! คุณเก่งมากเลย';
    } else if (score >= 60) {
        feedback.textContent = 'ดีมาก! ยังมีที่ต้องพัฒนาอีกนิด';
    } else {
        feedback.textContent = 'ไม่เป็นไร ลองฝึกฝนเพิ่มเติมนะ';
    }
    
    const answersList = document.querySelector('.answers-list');
    answersList.innerHTML = quizQuestions.map((q, i) => `
        <div class="answer-item">
            <div class="answer-status ${q.isCorrect ? 'correct' : 'wrong'}">
                ${q.isCorrect ? '✓' : '✗'}
            </div>
            <div class="answer-content">
                <div class="answer-text">
                    ${q.type === 'jp-th' ? 
                        `${q.vocab.jp} → ${Array.isArray(q.vocab.th) ? q.vocab.th.join(', ') : q.vocab.th}` : 
                        `${q.vocab.th} → ${q.vocab.romaji} (${q.vocab.jp})`}
                </div>
                <div class="answer-details">
                    ${q.userAnswer ? `คำตอบ: ${q.userAnswer}` : 'ไม่ได้ตอบ'} | 
                    ${q.type === 'jp-th' ? 
                        `คำอ่าน: ${q.vocab.romaji}` : 
                        `คำศัพท์: ${q.vocab.jp}`}
                </div>
            </div>
        </div>
    `).join('');
}

// ปุ่มลองใหม่
document.querySelector('.retry-btn')?.addEventListener('click', () => {
    currentQuestion = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    mistakesLeft = currentMode === 'easy' ? 10 : currentMode === 'medium' ? 5 : 3;
    
    resultsSection.style.display = 'none';
    questionsSection.style.display = 'block';
    
    generateQuestions();
    showQuestion();
});

// ปุ่มกลับไปหน้าเรียน
document.querySelector('.back-btn')?.addEventListener('click', () => {
    resultsSection.style.display = 'none';
    setupSection.style.display = 'block';
});

// ฟังก์ชันแสดงสถิติเชิงลึกสำหรับโหมด Infinity
function showInfinityDetailedStats() {
    if (!isInfinity) return;
    
    const modal = document.createElement('div');
    modal.className = 'infinity-stats-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>สถิติเชิงลึก - โหมด Infinity</h3>
                <button class="close-modal">&times;</button>
            </div>
            <div class="modal-body">
                <div class="stats-section">
                    <h4>สรุปโดยรวม</h4>
                    <div class="stats-summary">
                        <div class="stat-item">
                            <span class="stat-label">ทำทั้งหมด:</span>
                            <span class="stat-value">${infinityStats.totalQuestions} ข้อ</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">ตอบถูก:</span>
                            <span class="stat-value correct">${infinityStats.correctAnswers} ข้อ</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">ตอบผิด:</span>
                            <span class="stat-value wrong">${infinityStats.wrongAnswers} ข้อ</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">ความแม่นยำ:</span>
                            <span class="stat-value">${Math.round((infinityStats.correctAnswers / infinityStats.totalQuestions) * 100)}%</span>
                        </div>
                    </div>
                </div>
                
                <div class="stats-section">
                    <h4>คำศัพท์ที่ตอบผิดบ่อยที่สุด</h4>
                    <div class="words-frequency wrong-words">
                        ${Object.entries(infinityStats.wrongWordsFrequency)
                            .sort((a, b) => b[1] - a[1])
                            .slice(0, 5)
                            .map(([word, count]) => `
                                <div class="frequency-item wrong">
                                    <span class="word">${word}</span>
                                    <span class="count">${count} ครั้ง</span>
                                </div>
                            `).join('') || '<p class="no-data">ยังไม่มีข้อมูล</p>'}
                    </div>
                </div>
                
                <div class="stats-section">
                    <h4>คำศัพท์ที่ตอบถูกบ่อยที่สุด</h4>
                    <div class="words-frequency correct-words">
                        ${Object.entries(infinityStats.correctWordsFrequency)
                            .sort((a, b) => b[1] - a[1])
                            .slice(0, 5)
                            .map(([word, count]) => `
                                <div class="frequency-item correct">
                                    <span class="word">${word}</span>
                                    <span class="count">${count} ครั้ง</span>
                                </div>
                            `).join('') || '<p class="no-data">ยังไม่มีข้อมูล</p>'}
                    </div>
                </div>
                
                <div class="stats-section">
                    <h4>ประวัติการตอบล่าสุด (10 ข้อ)</h4>
                    <div class="recent-history">
                        ${infinityStats.answerHistory.map(item => {
                            let correctAnswerText = '';
                            if (item.type === 'jp-th') {
                                correctAnswerText = Array.isArray(item.vocab.th) ? item.vocab.th[0] : item.vocab.th;
                            } else {
                                correctAnswerText = item.vocab.romaji;
                            }
                            
                            return `
                                <div class="history-detail-item ${item.isCorrect ? 'correct' : 'wrong'}">
                                    <div class="question-text">${item.question}</div>
                                    <div class="answer-info">
                                        <span class="user-answer ${item.isCorrect ? 'correct' : 'wrong'}">
                                            คำตอบ: ${item.userAnswer}
                                        </span>
                                        ${!item.isCorrect ? `<span class="correct-answer">ถูกต้อง: ${correctAnswerText}</span>` : ''}
                                    </div>
                                </div>
                            `;
                        }).join('') || '<p class="no-data">ยังไม่มีข้อมูล</p>'}
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="continue-quiz-btn">ทำต่อ</button>
                <button class="end-quiz-btn">จบการทดสอบ</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Event listeners สำหรับ modal
    modal.querySelector('.close-modal').onclick = () => modal.remove();
    modal.querySelector('.continue-quiz-btn').onclick = () => modal.remove();
    modal.querySelector('.end-quiz-btn').onclick = () => {
        modal.remove();
        endQuiz('infinity');
    };
    
    // ปิด modal เมื่อคลิกนอก content
    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };
}

// Event listener สำหรับปุ่มสถิติเชิงลึก
document.getElementById('show-detailed-stats')?.addEventListener('click', showInfinityDetailedStats);

// โหลดข้อมูลเริ่มต้น
window.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderVocabCheckboxes();
});
