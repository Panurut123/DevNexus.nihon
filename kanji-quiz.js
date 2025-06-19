// เริ่มต้น quiz
function startKanjiQuiz() {
    let modeBtn = document.querySelector('.mode-btn.active');
    let mode = modeBtn ? modeBtn.dataset.mode : 'easy';
    const level = document.getElementById('kanji-level-select').value;
    const format = document.getElementById('kanji-question-format').value;
    
    // ตรวจสอบข้อมูลคันจิ
    if (!window.kanjiData || !Array.isArray(window.kanjiData) || window.kanjiData.length === 0) {
        alert('ไม่พบข้อมูลคันจิ');
        return;
    }
    
    // ตรวจสอบว่าเป็นโหมด Infinity หรือไม่
    const isInfinity = mode === 'infinity';
    let questions;
    let inputType = '';
    
    if (isInfinity) {
        questions = generateQuestions(level, 1, format);
        const infinityInputType = document.getElementById('infinity-input-type');
        inputType = infinityInputType ? infinityInputType.value : 'multiple-choice';
    } else {
        const questionCount = parseInt(document.getElementById('kanji-question-count').value);
        questions = generateQuestions(level, questionCount, format);
    }
    
    // สร้าง quiz state
    window.kanjiQuiz = {
        mode,
        level,
        format,
        questions,
        currentIndex: 0,
        score: 0,
        mistakes: 0,
        maxMistakes: isInfinity ? Infinity : 3,
        timer: null,
        timeLeft: isInfinity ? Infinity : 15,
        isInfinity: isInfinity,
        inputType: inputType
    };
    
    // เพิ่มข้อมูลสถิติสำหรับโหมด Infinity
    if (isInfinity) {
        window.kanjiQuiz.stats = {
            totalQuestions: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            answerHistory: [],
            wrongKanjiFrequency: {},
            correctKanjiFrequency: {}
        };
        document.querySelector('.mistakes-left').style.display = 'none';
        document.querySelector('.infinity-stats-button').style.display = 'block';
    } else {
        document.querySelector('.mistakes-left').style.display = 'flex';
        document.querySelector('.infinity-stats-button').style.display = 'none';
    }
    
    // แสดงหน้าคำถาม
    document.getElementById('kanji-quiz-setup').style.display = 'none';
    document.getElementById('kanji-quiz-questions').style.display = 'block';
    
    showQuestion();
}

function generateQuestions(level, count, format) {
    let kanjiList = window.kanjiData;
    if (level !== 'all') {
        kanjiList = kanjiList.filter(k => k.level === level);
    }
    const shuffled = kanjiList.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, count);
    return selected.map(kanji => {
        let question, answer;
        if (format === 'kanji-meaning') {
            question = kanji.char;
            answer = kanji.meaning;
        } else if (format === 'meaning-kanji') {
            question = kanji.meaning;
            answer = kanji.char;
        } else {
            const isKanjiToMeaning = Math.random() > 0.5;
            question = isKanjiToMeaning ? kanji.char : kanji.meaning;
            answer = isKanjiToMeaning ? kanji.meaning : kanji.char;
        }
        return { question, answer, kanji };
    });
}

// แสดงคำถาม
function showQuestion() {
    const quiz = window.kanjiQuiz;
    const currentQuestion = quiz.questions[quiz.currentIndex];
    
    if (quiz.isInfinity) {
        document.querySelector('.question-number').textContent = `ข้อที่ ${quiz.stats.totalQuestions + 1}`;
        document.querySelector('.progress').style.width = '100%';
    } else {
        document.querySelector('.question-number').textContent = `ข้อที่ ${quiz.currentIndex + 1}/${quiz.questions.length}`;
        document.querySelector('.progress').style.width = `${(quiz.currentIndex / quiz.questions.length) * 100}%`;
        document.querySelector('.mistakes-count').textContent = quiz.maxMistakes - quiz.mistakes;
    }
    
    document.querySelector('.question-text').textContent = currentQuestion.question;
    
    if (quiz.mode === 'easy' || (quiz.isInfinity && quiz.inputType === 'multiple-choice')) {
        showMultipleChoice(currentQuestion);
    } else {
        showTextInput();
    }
    
    if (quiz.mode === 'hard') {
        startTimer();
    }
}

// ฟังก์ชันทำความสะอาดสตริง
const cleanString = str => str.replace(/\s+/g, ' ').trim().toLowerCase();

// ฟังก์ชันตรวจสอบคำตอบหลายรูปแบบ
function isKanjiAnswerCorrect(userAnswer, kanji, correctAnswer) {
    const cleanUserAnswer = cleanString(userAnswer);
    
    // ตรวจสอบคำตอบหลัก
    if (cleanString(correctAnswer) === cleanUserAnswer) {
        return true;
    }
    
    // ตรวจสอบคำตอบที่ยอมรับได้ (ถ้ามี)
    if (kanji.acceptedAnswers && Array.isArray(kanji.acceptedAnswers)) {
        return kanji.acceptedAnswers.some(answer => 
            cleanString(answer) === cleanUserAnswer
        );
    }
    
    return false;
}

// แสดงตัวเลือก 4 ตัวเลือก
function showMultipleChoice(questionObj) {
    const container = document.querySelector('.multiple-choice');
    container.style.display = 'grid';
    document.querySelector('.text-input').style.display = 'none';
    
    const allKanji = window.kanjiData;
    const currentLevel = document.getElementById('kanji-level-select').value;
    
    const sameLevelKanji = currentLevel === 'all' 
        ? allKanji 
        : allKanji.filter(k => k.level === currentLevel);
    
    const isKanjiToMeaning = questionObj.question === questionObj.kanji.char;
    
    let wrongAnswers = [];
    let candidates = sameLevelKanji
        .filter(k => isKanjiToMeaning 
            ? (k.char !== questionObj.kanji.char) 
            : (k.meaning !== questionObj.kanji.meaning))
        .sort(() => 0.5 - Math.random());
    
    if (candidates.length < 3) {
        const otherLevelsKanji = allKanji
            .filter(k => isKanjiToMeaning 
                ? (k.char !== questionObj.kanji.char && !sameLevelKanji.includes(k))
                : (k.meaning !== questionObj.kanji.meaning && !sameLevelKanji.includes(k)))
            .sort(() => 0.5 - Math.random())
            .slice(0, 3 - candidates.length);
        
        candidates = [...candidates, ...otherLevelsKanji];
    }
    
    wrongAnswers = candidates
        .slice(0, 3)
        .map(k => isKanjiToMeaning ? k.meaning : k.char);
    
    const choices = [...wrongAnswers, questionObj.answer]
        .sort(() => 0.5 - Math.random());
    
    container.innerHTML = choices.map(choice => `
        <button class="choice-btn" data-answer="${encodeURIComponent(choice)}">
            ${choice}
        </button>
    `).join('');
    
    container.querySelectorAll('.choice-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            checkAnswer(decodeURIComponent(this.dataset.answer));
        });
        // รีเซ็ตสีปุ่ม
        btn.classList.remove('correct', 'wrong');
        btn.disabled = false;
    });
}

// แสดงช่องพิมพ์คำตอบ
function showTextInput() {
    const container = document.querySelector('.text-input');
    container.style.display = 'flex';
    document.querySelector('.multiple-choice').style.display = 'none';
    const input = container.querySelector('input');
    input.value = '';
    input.focus();
    container.querySelector('.submit-btn').onclick = () => {
        const answer = input.value.trim();
        if (answer) checkAnswer(answer);
    };
}

// ตรวจคำตอบ
function checkAnswer(userAnswer) {
    const quiz = window.kanjiQuiz;
    const currentQuestion = quiz.questions[quiz.currentIndex];
    const correctAnswer = currentQuestion.answer;
    const kanji = currentQuestion.kanji;
    
    // บันทึกคำตอบของผู้ใช้และผลลัพธ์
    currentQuestion.userAnswer = userAnswer;

    const isCorrect = isKanjiAnswerCorrect(userAnswer, kanji, correctAnswer);
    currentQuestion.isCorrect = isCorrect;
    
    console.log('User Answer:', userAnswer, 'Correct Answer:', correctAnswer, 'Is Correct:', isCorrect);
    
    if (quiz.isInfinity) {
        updateKanjiInfinityStats(isCorrect, currentQuestion, userAnswer);
    }

    // แสดงผลสีบนปุ่มตัวเลือก (สำหรับโหมด multiple choice)
    if (quiz.mode === 'easy' || (quiz.isInfinity && quiz.inputType === 'multiple-choice')) {
        const buttons = document.querySelectorAll('.choice-btn');
        buttons.forEach(btn => {
            btn.disabled = true;
            const btnAnswer = decodeURIComponent(btn.dataset.answer);
            
            // ตรวจสอบว่าปุ่มนี้เป็นคำตอบที่ถูกหรือไม่
            if (isKanjiAnswerCorrect(btnAnswer, kanji, correctAnswer)) {
                btn.classList.add('correct');
            }
            
            // ถ้าเป็นปุ่มที่ผู้ใช้กดและตอบผิด
            if (btnAnswer === userAnswer && !isCorrect) {
                btn.classList.add('wrong');
            }
        });
    }

    if (isCorrect) {
        quiz.score++;
        quiz.currentIndex++;
        if (!quiz.isInfinity) {
            if (quiz.currentIndex >= quiz.questions.length) {
                endQuiz();
                return;
            }
        } else {
            const newQuestion = generateQuestions(quiz.level, 1, quiz.format);
            quiz.questions = newQuestion;
            quiz.currentIndex = 0;
        }
        
        // แสดงผลลัพธ์สั้น ๆ ก่อนไปคำถามถัดไป
        showAnswerResult(true, correctAnswer);
        setTimeout(() => {
        showQuestion();
        }, 1500);
    } else {
        quiz.mistakes++;
        if (!quiz.isInfinity) {
            if (quiz.mistakes >= quiz.maxMistakes) {
                endQuiz();
                return;
            }
            document.querySelector('.mistakes-count').textContent = quiz.maxMistakes - quiz.mistakes;
        }
        
        // แสดงผลลัพธ์สั้น ๆ ก่อนไปคำถามถัดไป
        showAnswerResult(false, correctAnswer);
        
            setTimeout(() => {
                if (!quiz.isInfinity) {
                    quiz.currentIndex++;
                    if (quiz.currentIndex >= quiz.questions.length) {
                        endQuiz();
                        return;
                    }
                } else {
                    const newQuestion = generateQuestions(quiz.level, 1, quiz.format);
                    quiz.questions = newQuestion;
                    quiz.currentIndex = 0;
                }
                showQuestion();
        }, 2000);
    }
}

// แสดงผลคำตอบ
function showAnswerResult(isCorrect, correctAnswer) {
    const resultElement = document.createElement('div');
    resultElement.className = `answer-result ${isCorrect ? 'correct' : 'wrong'}`;
    resultElement.innerHTML = isCorrect ? 
        '<i class="fas fa-check"></i> ถูกต้อง!' : 
        `<i class="fas fa-times"></i> ผิด! คำตอบที่ถูกคือ: ${correctAnswer}`;
    document.getElementById('kanji-quiz-questions').appendChild(resultElement);
    
    setTimeout(() => {
        resultElement.remove();
    }, isCorrect ? 1500 : 2000);
}

// อัพเดทสถิติสำหรับโหมด Infinity
function updateKanjiInfinityStats(isCorrect, question, userAnswer) {
    const quiz = window.kanjiQuiz;
    if (!quiz.isInfinity) return;
    
    quiz.stats.totalQuestions++;
    
    const kanji = question.kanji;
    const kanjiKey = `${kanji.char} (${kanji.meaning})`;
    
    if (isCorrect) {
        quiz.stats.correctAnswers++;
        quiz.stats.correctKanjiFrequency[kanjiKey] = (quiz.stats.correctKanjiFrequency[kanjiKey] || 0) + 1;
    } else {
        quiz.stats.wrongAnswers++;
        quiz.stats.wrongKanjiFrequency[kanjiKey] = (quiz.stats.wrongKanjiFrequency[kanjiKey] || 0) + 1;
    }
    
    quiz.stats.answerHistory.unshift({
        question: question.question,
        correctAnswer: question.answer,
        userAnswer: userAnswer,
        isCorrect: isCorrect,
        kanji: kanji
    });
    
    if (quiz.stats.answerHistory.length > 50) {
        quiz.stats.answerHistory = quiz.stats.answerHistory.slice(0, 50);
    }
}

// ฟังก์ชันแสดงสถิติเชิงลึกสำหรับโหมด Infinity
function showKanjiDetailedStats() {
    const quiz = window.kanjiQuiz;
    if (!quiz.isInfinity) return;
    
    const modal = document.createElement('div');
    modal.className = 'infinity-stats-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>สถิติเชิงลึก - โหมด Infinity (คันจิ)</h3>
                <button class="close-modal">&times;</button>
            </div>
            <div class="modal-body">
                <div class="stats-section">
                    <h4>สรุปโดยรวม</h4>
                    <div class="stats-summary">
                        <div class="stat-item">
                            <span class="stat-label">ทำทั้งหมด:</span>
                            <span class="stat-value">${quiz.stats.totalQuestions} ข้อ</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">ตอบถูก:</span>
                            <span class="stat-value correct">${quiz.stats.correctAnswers} ข้อ</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">ตอบผิด:</span>
                            <span class="stat-value wrong">${quiz.stats.wrongAnswers} ข้อ</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">ความแม่นยำ:</span>
                            <span class="stat-value">${quiz.stats.totalQuestions > 0 ? Math.round((quiz.stats.correctAnswers / quiz.stats.totalQuestions) * 100) : 0}%</span>
                        </div>
                    </div>
                </div>
                
                <div class="stats-section">
                    <h4>คันจิที่ตอบผิดบ่อยที่สุด</h4>
                    <div class="words-frequency wrong-words">
                        ${Object.entries(quiz.stats.wrongKanjiFrequency)
                            .sort((a, b) => b[1] - a[1])
                            .slice(0, 5)
                            .map(([kanji, count]) => `
                                <div class="frequency-item wrong">
                                    <span class="word">${kanji}</span>
                                    <span class="count">${count} ครั้ง</span>
                                </div>
                            `).join('') || '<p class="no-data">ยังไม่มีข้อมูล</p>'}
                    </div>
                </div>
                
                <div class="stats-section">
                    <h4>คันจิที่ตอบถูกบ่อยที่สุด</h4>
                    <div class="words-frequency correct-words">
                        ${Object.entries(quiz.stats.correctKanjiFrequency)
                            .sort((a, b) => b[1] - a[1])
                            .slice(0, 5)
                            .map(([kanji, count]) => `
                                <div class="frequency-item correct">
                                    <span class="word">${kanji}</span>
                                    <span class="count">${count} ครั้ง</span>
                                </div>
                            `).join('') || '<p class="no-data">ยังไม่มีข้อมูล</p>'}
                    </div>
                </div>
                
                <div class="stats-section">
                    <h4>ประวัติการตอบล่าสุด (10 ข้อ)</h4>
                    <div class="recent-history">
                        ${quiz.stats.answerHistory.slice(0, 10).map(item => `
                            <div class="history-detail-item ${item.isCorrect ? 'correct' : 'wrong'}">
                                <div class="question-text">${item.question}</div>
                                <div class="answer-info">
                                    <span class="user-answer ${item.isCorrect ? 'correct' : 'wrong'}">
                                        คำตอบ: ${item.userAnswer}
                                    </span>
                                    ${!item.isCorrect ? `<span class="correct-answer">ถูกต้อง: ${item.correctAnswer}</span>` : ''}
                                    ${item.kanji.furigana ? `<span class="furigana">อ่าน: ${item.kanji.furigana}</span>` : ''}
                                    ${item.kanji.example ? `<span class="example">ตัวอย่าง: ${item.kanji.example}</span>` : ''}
                                </div>
                            </div>
                        `).join('') || '<p class="no-data">ยังไม่มีข้อมูล</p>'}
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
        endQuiz();
    };
    
    // ปิด modal เมื่อคลิกนอก content
    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };
}

// จบ quiz และแสดงผลลัพธ์
function endQuiz() {
    const quiz = window.kanjiQuiz;
    clearInterval(quiz.timer);
    
    if (!quiz.isInfinity) {
        document.getElementById('kanji-quiz-questions').style.display = 'none';
        document.getElementById('kanji-quiz-results').style.display = 'block';
        
        const actualCorrect = quiz.questions.filter(q => q.isCorrect).length;
        const actualWrong = quiz.questions.length - actualCorrect;
        const percent = quiz.questions.length > 0 ? Math.round((actualCorrect / quiz.questions.length) * 100) : 0;
        
        document.querySelector('.score-percent').textContent = `${percent}%`;
        document.querySelector('.correct-count').textContent = actualCorrect;
        document.querySelector('.wrong-count').textContent = actualWrong;
        
        let feedback = '';
        if (percent >= 80) feedback = 'เยี่ยมมาก! คุณเก่งมาก';
        else if (percent >= 60) feedback = 'ดีมาก! พยายามต่อไป';
        else feedback = 'ไม่เป็นไร ลองใหม่อีกครั้ง';
        document.querySelector('.feedback-message').textContent = feedback;
        
        const answersList = document.querySelector('.answers-list');
        answersList.innerHTML = quiz.questions.map((q, index) => {
            const isCorrect = q.isCorrect || false;
            return `
                <div class="answer-item">
                    <div class="answer-status ${isCorrect ? 'correct' : 'wrong'}">
                        ${isCorrect ? '✓' : '✗'}
                    </div>
                    <div class="answer-content">
                        <div class="answer-text">${q.question} → ${q.answer}</div>
                        <div class="answer-details">
                            ${q.userAnswer ? `คำตอบ: ${q.userAnswer}` : 'ไม่ได้ตอบ'} | 
                            <span style='color:#ffb3b3;'>${q.kanji.furigana ? q.kanji.furigana : ''}</span>
                            ${q.kanji.example ? `<span style='color:#888; margin-left:1em;'>${q.kanji.example}</span>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        document.querySelector('.retry-btn').onclick = () => {
            document.getElementById('kanji-quiz-results').style.display = 'none';
            document.getElementById('kanji-quiz-setup').style.display = 'block';
        };
        document.querySelector('.back-btn').onclick = () => {
            window.location.href = 'kanji.html';
        };
    } else {
        document.getElementById('kanji-quiz-questions').style.display = 'none';
        document.getElementById('kanji-quiz-setup').style.display = 'block';
        
        const totalQuestions = quiz.stats.totalQuestions;
        const correctAnswers = quiz.stats.correctAnswers;
        const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
        
        alert(`สรุปผลการทดสอบโหมด Infinity:\nจำนวนข้อทั้งหมด: ${totalQuestions}\nตอบถูก: ${correctAnswers}\nตอบผิด: ${totalQuestions - correctAnswers}\nความแม่นยำ: ${accuracy}%`);
    }
}

// อัพเดทข้อมูลสถิติในโหมด Infinity (เก่า - ไม่ใช้แล้ว)
function updateInfinityStats() {
    // Function เก่า - ใช้ updateKanjiInfinityStats แทน
}

function startTimer() {
    const quiz = window.kanjiQuiz;
    clearInterval(quiz.timer);
    quiz.timeLeft = 15;
    document.querySelector('.timer').textContent = quiz.timeLeft;
    quiz.timer = setInterval(() => {
        quiz.timeLeft--;
        document.querySelector('.timer').textContent = quiz.timeLeft;
        if (quiz.timeLeft <= 0) {
            clearInterval(quiz.timer);
            quiz.mistakes++;
            if (quiz.mistakes >= quiz.maxMistakes) {
                endQuiz();
            } else {
                quiz.currentIndex++;
                if (quiz.currentIndex >= quiz.questions.length) {
                    endQuiz();
                } else {
                    showQuestion();
                }
            }
        }
    }, 1000);
}

document.getElementById('start-kanji-quiz').addEventListener('click', startKanjiQuiz);

// Event listener สำหรับปุ่มสถิติเชิงลึก
document.getElementById('show-kanji-detailed-stats')?.addEventListener('click', showKanjiDetailedStats);

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const isInfinityMode = btn.dataset.mode === 'infinity';
            const questionCountContainer = document.querySelector('.question-count-setting');
            if (questionCountContainer) {
                questionCountContainer.style.display = isInfinityMode ? 'none' : 'block';
            }
            const infinityInputContainer = document.querySelector('.infinity-input-type');
            if (infinityInputContainer) {
                infinityInputContainer.style.display = isInfinityMode ? 'block' : 'none';
            }
        };
    });
});
