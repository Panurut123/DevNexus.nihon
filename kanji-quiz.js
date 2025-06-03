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
            answerHistory: []
        };
        document.querySelector('.mistakes-left').style.display = 'none';
    } else {
        document.querySelector('.mistakes-left').style.display = 'flex';
    }
    
    // แสดงหน้าคำถาม
    document.getElementById('kanji-quiz-setup').style.display = 'none';
    document.getElementById('kanji-quiz-questions').style.display = 'block';
    
    document.querySelector('.mistakes-left').style.display = mode === 'infinity' ? 'none' : 'block';
    
    showQuestion();
}

// สุ่มข้อสอบ
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
    const acceptedAnswers = currentQuestion.kanji.acceptedAnswers || [correctAnswer];
    
    const isCorrect = acceptedAnswers.some(answer => 
        cleanString(userAnswer) === cleanString(answer)
    );
    
    console.log('User Answer:', userAnswer, 'Correct Answer:', correctAnswer, 'Is Correct:', isCorrect);
    
    if (quiz.isInfinity) {
        quiz.stats.totalQuestions++;
        const answerRecord = {
            question: currentQuestion.question,
            correctAnswer: correctAnswer,
            userAnswer: userAnswer,
            isCorrect: isCorrect,
            kanji: currentQuestion.kanji
        };
        quiz.stats.answerHistory.unshift(answerRecord);
        if (quiz.stats.answerHistory.length > 50) {
            quiz.stats.answerHistory = quiz.stats.answerHistory.slice(0, 50);
        }
        if (isCorrect) {
            quiz.stats.correctAnswers++;
        } else {
            quiz.stats.wrongAnswers++;
        }
        updateInfinityStats();
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
        showQuestion();
    } else {
        quiz.mistakes++;
        if (!quiz.isInfinity) {
            if (quiz.mistakes >= quiz.maxMistakes) {
                endQuiz();
                return;
            }
            document.querySelector('.mistakes-count').textContent = quiz.maxMistakes - quiz.mistakes;
        }
        if (quiz.mode === 'easy' || (quiz.isInfinity && quiz.inputType === 'multiple-choice')) {
            const buttons = document.querySelectorAll('.choice-btn');
            buttons.forEach(btn => {
                if (acceptedAnswers.some(answer => cleanString(decodeURIComponent(btn.dataset.answer)) === cleanString(answer))) {
                    btn.classList.add('correct');
                }
                if (cleanString(decodeURIComponent(btn.dataset.answer)) === cleanString(userAnswer)) {
                    btn.classList.add('wrong');
                }
                btn.disabled = true;
            });
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
            }, 1000);
        } else {
            alert(`คำตอบที่ถูกต้องคือ: ${correctAnswer}\nคุณตอบ: ${userAnswer}`);
            document.querySelector('.text-input input').value = '';
            if (quiz.isInfinity) {
                const newQuestion = generateQuestions(quiz.level, 1, quiz.format);
                quiz.questions = newQuestion;
                quiz.currentIndex = 0;
                showQuestion();
            }
        }
    }
}

// จบ quiz และแสดงผลลัพธ์
function endQuiz() {
    const quiz = window.kanjiQuiz;
    clearInterval(quiz.timer);
    
    if (!quiz.isInfinity) {
        document.getElementById('kanji-quiz-questions').style.display = 'none';
        document.getElementById('kanji-quiz-results').style.display = 'block';
        
        const percent = Math.round((quiz.score / quiz.questions.length) * 100);
        document.querySelector('.score-percent').textContent = `${percent}%`;
        document.querySelector('.correct-count').textContent = quiz.score;
        document.querySelector('.wrong-count').textContent = quiz.questions.length - quiz.score;
        
        let feedback = '';
        if (percent >= 80) feedback = 'เยี่ยมมาก! คุณเก่งมาก';
        else if (percent >= 60) feedback = 'ดีมาก! พยายามต่อไป';
        else feedback = 'ไม่เป็นไร ลองใหม่อีกครั้ง';
        document.querySelector('.feedback-message').textContent = feedback;
        
        const answersList = document.querySelector('.answers-list');
        answersList.innerHTML = quiz.questions.map((q, index) => {
            const isCorrect = q.userAnswer ? cleanString(q.userAnswer) === cleanString(q.answer) : false;
            return `
                <div class="answer-item">
                    <div class="answer-status ${isCorrect ? 'correct' : 'wrong'}">
                        ${isCorrect ? '✓' : '✗'}
                    </div>
                    <div class="answer-content">
                        <div class="answer-text">${q.question} → ${q.answer}</div>
                        <div class="answer-details">
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

// อัพเดทข้อมูลสถิติในโหมด Infinity
function updateInfinityStats() {
    const quiz = window.kanjiQuiz;
    if (!quiz.isInfinity) return;
    const totalQ = document.querySelector('.total-questions');
    if (totalQ) totalQ.textContent = quiz.stats.totalQuestions;
    const correctA = document.querySelector('.correct-answers');
    if (correctA) correctA.textContent = quiz.stats.correctAnswers;
    const wrongA = document.querySelector('.wrong-answers');
    if (wrongA) wrongA.textContent = quiz.stats.wrongAnswers;
    const accuracy = quiz.stats.totalQuestions > 0 
        ? Math.round((quiz.stats.correctAnswers / quiz.stats.totalQuestions) * 100) 
        : 0;
    const accuracyElem = document.querySelector('.accuracy-percent');
    if (accuracyElem) accuracyElem.textContent = `${accuracy}%`;
    const recentAnswersContainer = document.querySelector('.recent-answers');
    if (recentAnswersContainer) {
        recentAnswersContainer.innerHTML = '';
        const recentAnswers = quiz.stats.answerHistory.slice(0, 5);
        recentAnswers.forEach(record => {
            const answerRecord = document.createElement('div');
            answerRecord.className = 'answer-record';
            answerRecord.innerHTML = `
                <div class="answer-status ${record.isCorrect ? 'correct' : 'wrong'}"></div>
                <div class="answer-details">
                    <div class="answer-question">${record.question} → ${record.correctAnswer}</div>
                    <div class="answer-response">
                        ${record.isCorrect ? 'ตอบถูก' : `ตอบผิด: ${record.userAnswer}`}
                    </div>
                </div>
            `;
            recentAnswersContainer.appendChild(answerRecord);
        });
    }
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

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const isInfinityMode = btn.dataset.mode === 'infinity';
            const questionCountContainer = document.querySelector('.question-count-container');
            if (questionCountContainer) {
                questionCountContainer.style.display = isInfinityMode ? 'none' : 'block';
            }
            const infinityInputContainer = document.querySelector('.infinity-input-type');
            if (infinityInputContainer) {
                infinityInputContainer.style.display = isInfinityMode ? 'block' : 'none';
            }
        };
    });
    
    const showStatsBtn = document.querySelector('.show-stats-btn');
    if (showStatsBtn) {
        showStatsBtn.addEventListener('click', function() {
            const statsPanel = document.querySelector('.infinity-stats-panel');
            if (statsPanel) {
                statsPanel.style.display = 'flex';
                updateInfinityStats();
            }
        });
    }
    
    const closeStatsBtn = document.querySelector('.close-stats-btn');
    if (closeStatsBtn) {
        closeStatsBtn.addEventListener('click', function() {
            const statsPanel = document.querySelector('.infinity-stats-panel');
            if (statsPanel) {
                statsPanel.style.display = 'none';
            }
        });
    }
    
    const continueBtn = document.querySelector('.continue-btn');
    if (continueBtn) {
        continueBtn.addEventListener('click', function() {
            const statsPanel = document.querySelector('.infinity-stats-panel');
            if (statsPanel) {
                statsPanel.style.display = 'none';
            }
        });
    }
    
    const endInfinityBtn = document.querySelector('.end-infinity-btn');
    if (endInfinityBtn) {
        endInfinityBtn.addEventListener('click', function() {
            endQuiz();
        });
    }
});
