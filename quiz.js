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
    answerHistory: []
};

// เพิ่มตัวแปรอ้างอิง section ต่างๆ
const setupSection = document.getElementById('quiz-setup');
const questionsSection = document.getElementById('quiz-questions');
const resultsSection = document.getElementById('quiz-results');

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
    } else {
        selectedVocabs = vocabData.filter(v => v.cat === currentCategory);
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
    questionsSection.classList.remove('fade-in');
    void questionsSection.offsetWidth; // trigger reflow
    questionsSection.classList.add('fade-in');
    
    // เริ่มคำถามแรก
    showQuestion();
});

// สร้างคำถาม
function generateQuestions() {
    quizQuestions = [];
    const shuffled = [...selectedVocabs].sort(() => Math.random() - 0.5);
    
    if (isInfinity) {
        // สำหรับโหมด Infinity จะสร้างแค่คำถามแรก
        const vocab = shuffled[0];
        const type = questionFormat === 'mix' ? 
            (Math.random() < 0.5 ? 'jp-th' : 'th-romaji') : 
            questionFormat;
            
        quizQuestions.push({
            vocab,
            type,
            correct: type === 'jp-th' ? vocab.th : vocab.romaji,
            question: type === 'jp-th' ? vocab.jp : vocab.th
        });
        
        // รีเซ็ตสถิติสำหรับโหมด Infinity
        infinityStats = {
            totalQuestions: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            answerHistory: []
        };
    } else {
        // สำหรับโหมดปกติ
        const count = Math.min(questionCount, shuffled.length);
        
        for (let i = 0; i < count; i++) {
            const vocab = shuffled[i];
            const type = questionFormat === 'mix' ? 
                (Math.random() < 0.5 ? 'jp-th' : 'th-romaji') : 
                questionFormat;
                
            quizQuestions.push({
                vocab,
                type,
                correct: type === 'jp-th' ? vocab.th : vocab.romaji,
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
    
    // อัพเดทข้อมูลคำถาม
    if (isInfinity) {
        document.querySelector('.question-number').textContent = `ข้อที่ ${infinityStats.totalQuestions + 1}`;
    } else {
        document.querySelector('.question-number').textContent = `ข้อที่ ${currentQuestion + 1}/${quizQuestions.length}`;
    }
    
    // แสดงจำนวนการตอบผิดที่เหลือ
    if (isInfinity) {
        // ซ่อนการแสดงจำนวนการตอบผิดในโหมด Infinity
        document.querySelector('.quiz-footer').style.display = 'none';
    } else {
        document.querySelector('.quiz-footer').style.display = 'flex';
        document.querySelector('.mistakes-count').textContent = mistakesLeft;
    }
    
    questionText.textContent = question.question;
    
    // อัพเดทแถบความคืบหน้า
    if (!isInfinity) {
        const progress = ((currentQuestion) / quizQuestions.length) * 100;
        document.querySelector('.progress').style.width = `${progress}%`;
    } else {
        // ในโหมด Infinity ไม่มีแถบความคืบหน้า
        document.querySelector('.progress').style.width = '0%';
    }
    
    // แสดงตัวเลือกหรือช่องกรอกตามโหมด
    if (currentMode === 'easy' || (isInfinity && infinityInputType === 'multiple-choice')) {
        multipleChoice.style.display = 'grid';
        textInput.style.display = 'none';
        
        // สร้างตัวเลือก
        const choices = generateChoices(question);
        multipleChoice.innerHTML = choices.map((choice, i) => `
            <button class="choice-btn" data-answer="${choice}">${choice}</button>
        `).join('');
        
        // เพิ่ม event listener
        multipleChoice.querySelectorAll('.choice-btn').forEach(btn => {
            btn.onclick = () => checkAnswer(btn.dataset.answer);
        });
    } else {
        multipleChoice.style.display = 'none';
        textInput.style.display = 'flex';
        
        // รีเซ็ตช่องกรอก
        textInput.querySelector('input').value = '';
        textInput.querySelector('input').focus();
        
        // เพิ่ม event listener
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
    
    // เริ่มนับถอยหลังสำหรับโหมดยาก
}

// สร้างตัวเลือกสำหรับโหมดง่าย
function generateChoices(question) {
    const correctAnswer = question.correct;
    const choices = [correctAnswer];
    
    // สร้างตัวเลือกที่ไม่ซ้ำกัน 3 ตัวเลือก
    while (choices.length < 4) {
        const randomVocab = selectedVocabs[Math.floor(Math.random() * selectedVocabs.length)];
        const randomAnswer = question.type === 'jp-th' ? randomVocab.th : randomVocab.romaji;
        
        if (!choices.includes(randomAnswer) && randomAnswer !== correctAnswer) {
            choices.push(randomAnswer);
        }
    }
    
    // สลับตำแหน่งตัวเลือก
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
            checkAnswer(''); // ส่งคำตอบว่างเพื่อนับเป็นตอบผิด
        }
    }, 1000);
}

// อัพเดทสถิติสำหรับโหมด Infinity
function updateInfinityStats(isCorrect, question, answer) {
    infinityStats.totalQuestions++;
    
    if (isCorrect) {
        infinityStats.correctAnswers++;
    } else {
        infinityStats.wrongAnswers++;
    }
    
    // เก็บประวัติคำตอบล่าสุด 10 ข้อ
    infinityStats.answerHistory.unshift({
        question: question.question,
        correctAnswer: question.correct,
        userAnswer: answer,
        isCorrect: isCorrect,
        type: question.type
    });
    
    // จำกัดประวัติให้เก็บแค่ 10 รายการล่าสุด
    if (infinityStats.answerHistory.length > 10) {
        infinityStats.answerHistory.pop();
    }
    
    // อัพเดทแสดงสถิติ
    updateInfinityStatsDisplay();
}

// อัพเดทการแสดงสถิติสำหรับโหมด Infinity
function updateInfinityStatsDisplay() {
    const statsPanel = document.getElementById('infinity-stats-panel');
    if (!statsPanel) return;
    
    // อัพเดทสถิติรวม
    document.getElementById('infinity-total-questions').textContent = infinityStats.totalQuestions;
    document.getElementById('infinity-correct-answers').textContent = infinityStats.correctAnswers;
    document.getElementById('infinity-wrong-answers').textContent = infinityStats.wrongAnswers;
    
    // คำนวณเปอร์เซ็นต์ความแม่นยำ
    const accuracy = infinityStats.totalQuestions > 0 ? 
        Math.round((infinityStats.correctAnswers / infinityStats.totalQuestions) * 100) : 0;
    document.getElementById('infinity-accuracy').textContent = `${accuracy}%`;
    
    // อัพเดทประวัติคำตอบ
    const historyContainer = document.getElementById('infinity-answer-history');
    historyContainer.innerHTML = '';
    
    infinityStats.answerHistory.forEach(item => {
        const historyItem = document.createElement('div');
        historyItem.className = `history-item ${item.isCorrect ? 'correct' : 'wrong'}`;
        historyItem.innerHTML = `
            <div class="question">${item.question}</div>
            <div class="answer-details">
                <span class="${item.isCorrect ? 'correct-text' : 'wrong-text'}">
                    ${item.isCorrect ? 
                        `<i class="fas fa-check"></i> ${item.userAnswer}` : 
                        `<i class="fas fa-times"></i> ${item.userAnswer} (ถูก: ${item.correctAnswer})`
                    }
                </span>
            </div>
        `;
        historyContainer.appendChild(historyItem);
    });
}

// สร้างคำถามใหม่สำหรับโหมด Infinity
function generateNextInfinityQuestion() {
    // สุ่มคำศัพท์ที่ไม่ซ้ำกับคำถามล่าสุด (ถ้าเป็นไปได้)
    let shuffled = [...selectedVocabs].sort(() => Math.random() - 0.5);
    
    // หลีกเลี่ยงการถามคำถามซ้ำ
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
        correct: type === 'jp-th' ? vocab.th : vocab.romaji,
        question: type === 'jp-th' ? vocab.jp : vocab.th
    };
    
    // รีเซ็ตคำถามปัจจุบัน
    currentQuestion = 0;
}

// ตรวจสอบคำตอบ
function checkAnswer(answer) {
    clearInterval(timer); // หยุดนับถอยหลัง
    
    const question = quizQuestions[currentQuestion];
    const isCorrect = answer.toLowerCase() === question.correct.toLowerCase();
    
    if (isInfinity) {
        // อัพเดทสถิติสำหรับโหมด Infinity
        updateInfinityStats(isCorrect, question, answer);
    } else {
        // อัพเดทคะแนนและการตอบผิดสำหรับโหมดปกติ
        if (isCorrect) {
            correctAnswers++;
        } else {
            wrongAnswers++;
            mistakesLeft--;
        }
    }
    
    // แสดงผลลัพธ์
    const resultElement = document.createElement('div');
    resultElement.className = `answer-result ${isCorrect ? 'correct' : 'wrong'}`;
    resultElement.innerHTML = isCorrect ? 
        '<i class="fas fa-check"></i> ถูกต้อง!' : 
        `<i class="fas fa-times"></i> ผิด! คำตอบที่ถูกคือ: ${question.correct}`;
    document.getElementById('quiz-questions').appendChild(resultElement);
    
    // ลบผลลัพธ์หลังจาก 2 วินาที
    setTimeout(() => {
        resultElement.remove();
        
        if (isInfinity) {
            // สร้างคำถามใหม่สำหรับโหมด Infinity
            generateNextInfinityQuestion();
            showQuestion();
        } else {
            // ตรวจสอบว่าจบ Quiz หรือไม่สำหรับโหมดปกติ
            if (mistakesLeft <= 0) {
                endQuiz('mistakes');
            } else if (currentQuestion + 1 >= quizQuestions.length) {
                endQuiz('complete');
            } else {
                // ไปยังคำถามถัดไป
                currentQuestion++;
                showQuestion();
            }
        }
    }, 2000);
}

// แสดงผลลัพธ์
function showResults() {
    questionsSection.style.display = 'none';
    resultsSection.style.display = 'block';
    resultsSection.classList.remove('fade-in');
    void resultsSection.offsetWidth;
    
    // คำนวณคะแนน
    const total = quizQuestions.length;
    const score = Math.round((correctAnswers / total) * 100);
    
    // แสดงคะแนน
    document.querySelector('.score-percent').textContent = `${score}%`;
    document.querySelector('.correct-count').textContent = correctAnswers;
    document.querySelector('.wrong-count').textContent = wrongAnswers;
    
    // แสดงข้อความให้กำลังใจ
    const feedback = document.querySelector('.feedback-message');
    if (score >= 80) {
        feedback.textContent = 'เยี่ยมมาก! คุณเก่งมากเลย';
    } else if (score >= 60) {
        feedback.textContent = 'ดีมาก! ยังมีที่ต้องพัฒนาอีกนิด';
    } else {
        feedback.textContent = 'ไม่เป็นไร ลองฝึกฝนเพิ่มเติมนะ';
    }
    
    // แสดงเฉลย
    const answersList = document.querySelector('.answers-list');
    answersList.innerHTML = quizQuestions.map((q, i) => `
        <div class="answer-item">
            <div class="answer-status ${i < correctAnswers ? 'correct' : 'wrong'}">
                ${i < correctAnswers ? '✓' : '✗'}
            </div>
            <div class="answer-content">
                <div class="answer-text">
                    ${q.type === 'jp-th' ? 
                        `${q.vocab.jp} → ${q.vocab.th}` : 
                        `${q.vocab.th} → ${q.vocab.romaji}`}
                </div>
                <div class="answer-details">
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
    // รีเซ็ตค่าต่างๆ
    currentQuestion = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    mistakesLeft = currentMode === 'easy' ? 10 : currentMode === 'medium' ? 5 : 3;
    
    // สลับกลับไปหน้า Quiz
    resultsSection.style.display = 'none';
    questionsSection.style.display = 'block';
    questionsSection.classList.remove('fade-in');
    void questionsSection.offsetWidth;
    questionsSection.classList.add('fade-in');
    
    // สร้างคำถามใหม่และเริ่ม
    generateQuestions();
    showQuestion();
});

// ปุ่มกลับไปหน้าเรียน
document.querySelector('.back-btn')?.addEventListener('click', () => {
    resultsSection.style.display = 'none';
    setupSection.style.display = 'block';
    setupSection.classList.remove('fade-in');
    void setupSection.offsetWidth;
    setupSection.classList.add('fade-in');
});

// โหลดข้อมูลเริ่มต้น
window.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderVocabCheckboxes();
}); 
