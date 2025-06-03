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
        // สำหรับโหมด Infinity ใช้เพียง 1 คำถาม
        questions = generateQuestions(level, 1, format);
        
        // อ่านค่ารูปแบบการตอบจาก infinity-input-type
        const infinityInputType = document.getElementById('infinity-input-type');
        inputType = infinityInputType ? infinityInputType.value : 'multiple-choice';
    } else {
        // สำหรับโหมดปกติ
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
    
    // แสดง/ซ่อนส่วนต่างๆ ตามโหมด
    // document.querySelector('.infinity-stats').style.display = mode === 'infinity' ? 'block' : 'none';
    document.querySelector('.mistakes-left').style.display = mode === 'infinity' ? 'none' : 'block';
    
    showQuestion();
}

// สุ่มข้อสอบ
function generateQuestions(level, count, format) {
    let kanjiList = window.kanjiData;
    if (level !== 'all') {
        kanjiList = kanjiList.filter(k => k.level === level);
    }
    // สุ่มคันจิไม่ซ้ำ
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
            // สุ่มรูปแบบคำถาม
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
    
    // แสดงข้อมูลคำถามตามโหมด
    if (quiz.isInfinity) {
        document.querySelector('.question-number').textContent = `ข้อที่ ${quiz.stats.totalQuestions + 1}`;
        document.querySelector('.progress').style.width = '100%';
    } else {
        document.querySelector('.question-number').textContent = `ข้อที่ ${quiz.currentIndex + 1}/${quiz.questions.length}`;
        document.querySelector('.progress').style.width = `${(quiz.currentIndex / quiz.questions.length) * 100}%`;
        document.querySelector('.mistakes-count').textContent = quiz.maxMistakes - quiz.mistakes;
    }
    
    document.querySelector('.question-text').textContent = currentQuestion.question;
    
    // แสดงตัวเลือกหรือช่องพิมพ์คำตอบตามโหมด
    if (quiz.mode === 'easy' || (quiz.isInfinity && quiz.inputType === 'multiple-choice')) {
        showMultipleChoice(currentQuestion);
    } else {
        showTextInput();
    }
    
    // เริ่มจับเวลาในโหมดยาก
    if (quiz.mode === 'hard') {
        startTimer();
    }
}

// แสดงตัวเลือก 4 ตัวเลือก
function showMultipleChoice(questionObj) {
    const container = document.querySelector('.multiple-choice');
    container.style.display = 'grid';
    document.querySelector('.text-input').style.display = 'none';
    
    const allKanji = window.kanjiData;
    const currentLevel = document.getElementById('kanji-level-select').value;
    
    // กรองคันจิในระดับเดียวกันก่อน
    const sameLevelKanji = currentLevel === 'all' 
        ? allKanji 
        : allKanji.filter(k => k.level === currentLevel);
    
    // ถ้าคำถามเป็น char->meaning หรือ meaning->char
    const isKanjiToMeaning = questionObj.question === questionObj.kanji.char;
    
    // หาตัวเลือกที่ผิด (wrong answers)
    let wrongAnswers = [];
    
    // 1. ลองหาตัวเลือกจากระดับเดียวกันก่อน
    let candidates = sameLevelKanji
        .filter(k => isKanjiToMeaning 
            ? (k.char !== questionObj.kanji.char) 
            : (k.meaning !== questionObj.kanji.meaning))
        .sort(() => 0.5 - Math.random());
    
    // 2. ถ้าในระดับเดียวกันมีไม่พอ 3 ตัว (ไม่รวมคำตอบที่ถูก) ให้เพิ่มจากระดับอื่น
    if (candidates.length < 3) {
        const otherLevelsKanji = allKanji
            .filter(k => isKanjiToMeaning 
                ? (k.char !== questionObj.kanji.char && !sameLevelKanji.includes(k))
                : (k.meaning !== questionObj.kanji.meaning && !sameLevelKanji.includes(k)))
            .sort(() => 0.5 - Math.random())
            .slice(0, 3 - candidates.length);
        
        candidates = [...candidates, ...otherLevelsKanji];
    }
    
    // 3. จำกัดจำนวนตัวเลือกผิดให้ไม่เกิน 3 ตัว
    wrongAnswers = candidates
        .slice(0, 3)
        .map(k => isKanjiToMeaning ? k.meaning : k.char);
    
    // 4. ผสมคำตอบที่ถูกกับคำตอบที่ผิด และสลับลำดับ
    const choices = [...wrongAnswers, questionObj.answer]
        .sort(() => 0.5 - Math.random());
    
    // แสดงตัวเลือก
    container.innerHTML = choices.map(choice => `
        <button class="choice-btn" data-answer="${choice.replace(/"/g, '&quot;')}">
            ${choice}
        </button>
    `).join('');
    
    // เพิ่ม event listener ให้กับปุ่มตัวเลือก
    container.querySelectorAll('.choice-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            checkAnswer(this.dataset.answer);
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
    // เพิ่ม event listener
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
    const isCorrect = userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
        
    // สำหรับโหมด Infinity ให้บันทึกสถิติ
    if (quiz.isInfinity) {
        quiz.stats.totalQuestions++;
            
        // บันทึกประวัติการตอบ
        const answerRecord = {
            question: currentQuestion.question,
            correctAnswer: correctAnswer,
            userAnswer: userAnswer,
            isCorrect: isCorrect,
            kanji: currentQuestion.kanji
        };
            
        // เพิ่มประวัติการตอบไปยังสถิติ
        quiz.stats.answerHistory.unshift(answerRecord); // เพิ่มไปที่ต้นรายการ
            
        // จำกัดประวัติไม่ให้มีมากเกินไป
        if (quiz.stats.answerHistory.length > 50) {
            quiz.stats.answerHistory = quiz.stats.answerHistory.slice(0, 50);
        }
            
        if (isCorrect) {
            quiz.stats.correctAnswers++;
        } else {
            quiz.stats.wrongAnswers++;
        }
            
        // อัพเดทข้อมูลสถิติใน UI
        updateInfinityStats();
    }

    if (isCorrect) {
        quiz.score++;
        quiz.currentIndex++;
            
        // สำหรับโหมดทั่วไป
        if (!quiz.isInfinity) {
            // ถ้าตอบครบทุกข้อแล้ว
            if (quiz.currentIndex >= quiz.questions.length) {
                endQuiz();
                return;
            }
        } else {
            // สำหรับโหมด Infinity สร้างคำถามใหม่
            const newQuestion = generateQuestions(quiz.level, 1, quiz.format);
            quiz.questions = newQuestion;
            quiz.currentIndex = 0;
        }
            
        showQuestion();
    } else {
        quiz.mistakes++;
            
        // สำหรับโหมดทั่วไป
        if (!quiz.isInfinity) {
            // ถ้าตอบผิดเกินจำนวนที่กำหนด
            if (quiz.mistakes >= quiz.maxMistakes) {
                endQuiz();
                return;
            }
            document.querySelector('.mistakes-count').textContent = quiz.maxMistakes - quiz.mistakes;
        }
            
        // แสดงคำตอบที่ถูกต้อง
        if (quiz.mode === 'easy' || (quiz.isInfinity && quiz.inputType === 'multiple-choice')) {
            // ในโหมดง่าย จะไฮไลท์ตัวเลือกที่ถูกต้องและที่ผู้ใช้เลือก
            const buttons = document.querySelectorAll('.choice-btn');
            buttons.forEach(btn => {
                if (btn.textContent.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
                    btn.classList.add('correct');
                }
                if (btn.textContent.trim().toLowerCase() === userAnswer.trim().toLowerCase()) {
                    btn.classList.add('wrong');
                }
                btn.disabled = true;
            });
                
            // รอ 1 วินาทีแล้วไปข้อถัดไป
            setTimeout(() => {
                if (!quiz.isInfinity) {
                    quiz.currentIndex++;
                    if (quiz.currentIndex >= quiz.questions.length) {
                        endQuiz();
                        return;
                    }
                } else {
                    // สำหรับโหมด Infinity สร้างคำถามใหม่
                    const newQuestion = generateQuestions(quiz.level, 1, quiz.format);
                    quiz.questions = newQuestion;
                    quiz.currentIndex = 0;
                }
                showQuestion();
            }, 1000);
        } else {
            // ในโหมดกลางและยาก จะแสดงคำตอบที่ถูกต้อง
            alert(`คำตอบที่ถูกต้องคือ: ${correctAnswer}`);
            document.querySelector('.text-input input').value = '';
                
            if (quiz.isInfinity) {
                // สำหรับโหมด Infinity สร้างคำถามใหม่
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
    
    // สำหรับโหมดทั่วไป
    if (!quiz.isInfinity) {
        document.getElementById('kanji-quiz-questions').style.display = 'none';
        document.getElementById('kanji-quiz-results').style.display = 'block';
        
        // คำนวณคะแนน
        const percent = Math.round((quiz.score / quiz.questions.length) * 100);
        document.querySelector('.score-percent').textContent = `${percent}%`;
        document.querySelector('.correct-count').textContent = quiz.score;
        document.querySelector('.wrong-count').textContent = quiz.questions.length - quiz.score;
        
        // แสดงข้อความ feedback
        let feedback = '';
        if (percent >= 80) feedback = 'เยี่ยมมาก! คุณเก่งมาก';
        else if (percent >= 60) feedback = 'ดีมาก! พยายามต่อไป';
        else feedback = 'ไม่เป็นไร ลองใหม่อีกครั้ง';
        document.querySelector('.feedback-message').textContent = feedback;
        
        // แสดงเฉลย
        const answersList = document.querySelector('.answers-list');
        answersList.innerHTML = quiz.questions.map((q, index) => {
            const isCorrect = q.userAnswer === q.answer;
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
        // สำหรับโหมด Infinity กลับไปหน้าตั้งค่า
        document.getElementById('kanji-quiz-questions').style.display = 'none';
        document.getElementById('kanji-quiz-setup').style.display = 'block';
        
        // แสดงข้อความสรุปผลการทดสอบ
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
    // อัพเดทตัวเลขสถิติ
    const totalQ = document.querySelector('.total-questions');
    if (totalQ) totalQ.textContent = quiz.stats.totalQuestions;
    const correctA = document.querySelector('.correct-answers');
    if (correctA) correctA.textContent = quiz.stats.correctAnswers;
    const wrongA = document.querySelector('.wrong-answers');
    if (wrongA) wrongA.textContent = quiz.stats.wrongAnswers;
    // คำนวณความแม่นยำ
    const accuracy = quiz.stats.totalQuestions > 0 
        ? Math.round((quiz.stats.correctAnswers / quiz.stats.totalQuestions) * 100) 
        : 0;
    const accuracyElem = document.querySelector('.accuracy-percent');
    if (accuracyElem) accuracyElem.textContent = `${accuracy}%`;
    // อัพเดทประวัติการตอบล่าสุด
    const recentAnswersContainer = document.querySelector('.recent-answers');
    if (recentAnswersContainer) {
        recentAnswersContainer.innerHTML = '';
        // แสดงประวัติการตอบล่าสุด 5 ข้อ
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
    // เพิ่ม event listeners สำหรับปุ่มโหมดต่างๆ
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const isInfinityMode = btn.dataset.mode === 'infinity';
            const questionCountContainer = document.querySelector('.question-count-container');
            if (questionCountContainer) {
                questionCountContainer.style.display = isInfinityMode ? 'none' : 'block';
            }
            // เพิ่ม logic แสดง/ซ่อน infinity-input-type
            const infinityInputContainer = document.querySelector('.infinity-input-type');
            if (infinityInputContainer) {
                infinityInputContainer.style.display = isInfinityMode ? 'block' : 'none';
            }
        };
    });
    
    // เพิ่ม event listeners สำหรับปุ่มในสถิติโหมด Infinity
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