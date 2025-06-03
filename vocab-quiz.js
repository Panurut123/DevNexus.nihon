// เริ่มต้น quiz
function startVocabQuiz() {
    let modeBtn = document.querySelector('.mode-btn.active');
    let mode = modeBtn ? modeBtn.dataset.mode : 'easy';
    const level = document.getElementById('vocab-level-select').value;
    const format = document.getElementById('vocab-question-format').value;
    
    // ตรวจสอบข้อมูลคำศัพท์
    if (!window.vocabData || !Array.isArray(window.vocabData) || window.vocabData.length === 0) {
        alert('ไม่พบข้อมูลคำศัพท์');
        return;
    }
    
    // ตรวจสอบว่าเป็นโหมด Infinity หรือไม่
    const isInfinity = mode === 'infinity';
    let questions;
    let inputType = '';
    
    if (isInfinity) {
        // สำหรับโหมด Infinity ใช้เพียง 1 คำถาม
        questions = generateVocabQuestions(level, 1, format);
        
        // เลือกรูปแบบการตอบสำหรับโหมด Infinity
        const infinityInputType = document.querySelector('input[name="infinity-input-type"]:checked');
        inputType = infinityInputType ? infinityInputType.value : 'multiple-choice';
    } else {
        // สำหรับโหมดปกติ
        const questionCount = parseInt(document.getElementById('vocab-question-count').value);
        questions = generateVocabQuestions(level, questionCount, format);
    }
    
    // สร้าง quiz state
    window.vocabQuiz = {
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
    
    if (isInfinity) {
        window.vocabQuiz.stats = {
            totalQuestions: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            answerHistory: []
        };
        
        // ซ่อนข้อมูลความผิดพลาดในโหมด Infinity
        document.querySelector('.mistakes-container').style.display = 'none';
        
        // แสดงปุ่มสถิติในโหมด Infinity
        document.querySelector('.show-stats-btn').style.display = 'block';
    } else {
        // แสดงข้อมูลความผิดพลาดในโหมดปกติ
        document.querySelector('.mistakes-container').style.display = 'flex';
        
        // ซ่อนปุ่มสถิติในโหมดปกติ
        document.querySelector('.show-stats-btn').style.display = 'none';
    }
    
    // ซ่อนแผงสถิติเมื่อเริ่มเกม
    const statsPanel = document.querySelector('.infinity-stats-panel');
    if (statsPanel) {
        statsPanel.style.display = 'none';
    }
    
    // แสดงหน้าคำถาม
    document.getElementById('vocab-quiz-setup').style.display = 'none';
    document.getElementById('vocab-quiz-questions').style.display = 'block';
    
    // แสดง/ซ่อนส่วนต่างๆ ตามโหมด
    document.querySelector('.infinity-stats').style.display = mode === 'infinity' ? 'block' : 'none';
    document.querySelector('.mistakes-left').style.display = mode === 'infinity' ? 'none' : 'block';
    
    showVocabQuestion();
}

// สุ่มข้อสอบ
function generateVocabQuestions(level, count, format) {
    let vocabList = window.vocabData;
    if (level !== 'all') {
        vocabList = vocabList.filter(v => v.level === level);
    }
    // สุ่มคำศัพท์ไม่ซ้ำ
    const shuffled = vocabList.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, count);
    return selected.map(vocab => {
        let question, answer;
        if (format === 'japanese-meaning') {
            question = vocab.word;
            answer = vocab.meaning;
        } else if (format === 'meaning-japanese') {
            question = vocab.meaning;
            answer = vocab.word;
        } else {
            // สุ่มรูปแบบคำถาม
            const isJapaneseToMeaning = Math.random() > 0.5;
            question = isJapaneseToMeaning ? vocab.word : vocab.meaning;
            answer = isJapaneseToMeaning ? vocab.meaning : vocab.word;
        }
        return { question, answer, vocab };
    });
}

// แสดงคำถาม
function showVocabQuestion() {
    const quiz = window.vocabQuiz;
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
        showVocabMultipleChoice(currentQuestion);
    } else {
        showVocabTextInput();
    }
    
    // เริ่มจับเวลาในโหมดยาก
    if (quiz.mode === 'hard') {
        startVocabTimer();
    }
}

// แสดงตัวเลือก 4 ตัวเลือก
function showVocabMultipleChoice(questionObj) {
    const container = document.querySelector('.multiple-choice');
    container.style.display = 'grid';
    document.querySelector('.text-input').style.display = 'none';
    
    const allVocab = window.vocabData;
    const currentLevel = document.getElementById('vocab-level-select').value;
    
    // กรองคำศัพท์ในระดับเดียวกันก่อน
    const sameLevelVocab = currentLevel === 'all' 
        ? allVocab 
        : allVocab.filter(v => v.level === currentLevel);
    
    // ถ้าคำถามเป็น word->meaning หรือ meaning->word
    const isJapaneseToMeaning = questionObj.question === questionObj.vocab.word;
    
    // หาตัวเลือกที่ผิด (wrong answers)
    let wrongAnswers = [];
    
    // 1. ลองหาตัวเลือกจากระดับเดียวกันก่อน
    let candidates = sameLevelVocab
        .filter(v => isJapaneseToMeaning 
            ? (v.word !== questionObj.vocab.word) 
            : (v.meaning !== questionObj.vocab.meaning))
        .sort(() => 0.5 - Math.random());
    
    // 2. ถ้าในระดับเดียวกันมีไม่พอ 3 ตัว (ไม่รวมคำตอบที่ถูก) ให้เพิ่มจากระดับอื่น
    if (candidates.length < 3) {
        const otherLevelsVocab = allVocab
            .filter(v => isJapaneseToMeaning 
                ? (v.word !== questionObj.vocab.word && !sameLevelVocab.includes(v))
                : (v.meaning !== questionObj.vocab.meaning && !sameLevelVocab.includes(v)))
            .sort(() => 0.5 - Math.random())
            .slice(0, 3 - candidates.length);
        
        candidates = [...candidates, ...otherLevelsVocab];
    }
    
    // 3. จำกัดจำนวนตัวเลือกผิดให้ไม่เกิน 3 ตัว
    wrongAnswers = candidates
        .slice(0, 3)
        .map(v => isJapaneseToMeaning ? v.meaning : v.word);
    
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
            checkVocabAnswer(this.dataset.answer);
        });
    });
}

// แสดงช่องพิมพ์คำตอบ
function showVocabTextInput() {
    const container = document.querySelector('.text-input');
    container.style.display = 'flex';
    document.querySelector('.multiple-choice').style.display = 'none';
    
    const input = container.querySelector('input');
    input.value = '';
    input.focus();
    
    // เพิ่ม event listener สำหรับการกด Enter
    input.onkeypress = function(e) {
        if (e.key === 'Enter') {
            checkVocabAnswer(this.value);
        }
    };
    
    // เพิ่ม event listener สำหรับปุ่มตอบ
    container.querySelector('.submit-btn').onclick = function() {
        checkVocabAnswer(input.value);
    };
}

// ตรวจคำตอบ
function checkVocabAnswer(userAnswer) {
    const quiz = window.vocabQuiz;
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
            vocab: currentQuestion.vocab
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
        updateVocabInfinityStats();
    }

    if (isCorrect) {
        quiz.score++;
        quiz.currentIndex++;
            
        // สำหรับโหมดทั่วไป
        if (!quiz.isInfinity) {
            // ถ้าตอบครบทุกข้อแล้ว
            if (quiz.currentIndex >= quiz.questions.length) {
                endVocabQuiz();
                return;
            }
        } else {
            // สำหรับโหมด Infinity สร้างคำถามใหม่
            const newQuestion = generateVocabQuestions(quiz.level, 1, quiz.format);
            quiz.questions = newQuestion;
            quiz.currentIndex = 0;
        }
            
        showVocabQuestion();
    } else {
        quiz.mistakes++;
            
        // สำหรับโหมดทั่วไป
        if (!quiz.isInfinity) {
            // ถ้าตอบผิดเกินจำนวนที่กำหนด
            if (quiz.mistakes >= quiz.maxMistakes) {
                endVocabQuiz();
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
                        endVocabQuiz();
                        return;
                    }
                } else {
                    // สำหรับโหมด Infinity สร้างคำถามใหม่
                    const newQuestion = generateVocabQuestions(quiz.level, 1, quiz.format);
                    quiz.questions = newQuestion;
                    quiz.currentIndex = 0;
                }
                showVocabQuestion();
            }, 1000);
        }
    }
}

// จบการทดสอบ
function endVocabQuiz() {
    const quiz = window.vocabQuiz;
    clearInterval(quiz.timer);
    
    // แสดงผลลัพธ์
    document.getElementById('vocab-quiz-questions').style.display = 'none';
    document.getElementById('vocab-quiz-results').style.display = 'block';
    
    // คำนวณคะแนน
    const score = quiz.score;
    const total = quiz.questions.length;
    const percentage = Math.round((score / total) * 100);
    
    // แสดงคะแนน
    document.querySelector('.score-circle').textContent = `${score}/${total}`;
    document.querySelector('.score-percentage').textContent = `${percentage}%`;
    
    // แสดงข้อความตามคะแนน
    let feedback = '';
    if (percentage >= 90) {
        feedback = 'เยี่ยมมาก! คุณเก่งมากเลย';
    } else if (percentage >= 70) {
        feedback = 'ดีมาก! เกือบจะสมบูรณ์แล้ว';
    } else if (percentage >= 50) {
        feedback = 'พยายามได้ดี! ยังมีที่ต้องพัฒนาอีกนิด';
    } else {
        feedback = 'ไม่เป็นไร ลองใหม่อีกครั้งนะ';
    }
    document.querySelector('.feedback-message').textContent = feedback;
    
    // แสดงคำตอบทั้งหมด
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
                        <span style='color:#ffb3b3;'>${q.vocab.furigana ? q.vocab.furigana : ''}</span>
                        ${q.vocab.example ? `<span style='color:#888; margin-left:1em;'>${q.vocab.example}</span>` : ''}
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    document.querySelector('.retry-btn').onclick = () => {
        document.getElementById('vocab-quiz-results').style.display = 'none';
        document.getElementById('vocab-quiz-setup').style.display = 'block';
    };
    document.querySelector('.back-btn').onclick = () => {
        window.location.href = 'vocab.html';
    };
}

// อัพเดทสถิติโหมด Infinity
function updateVocabInfinityStats() {
    const quiz = window.vocabQuiz;
    const stats = quiz.stats;
    
    // อัพเดทตัวเลขสถิติ
    document.querySelector('.total-questions').textContent = stats.totalQuestions;
    document.querySelector('.correct-answers').textContent = stats.correctAnswers;
    document.querySelector('.wrong-answers').textContent = stats.wrongAnswers;
    
    // คำนวณความแม่นยำ
    const accuracy = stats.totalQuestions > 0 
        ? Math.round((stats.correctAnswers / stats.totalQuestions) * 100) 
        : 0;
    document.querySelector('.accuracy-percent').textContent = `${accuracy}%`;
    
    // แสดงคำตอบล่าสุด
    const recentAnswers = document.querySelector('.recent-answers');
    recentAnswers.innerHTML = stats.answerHistory
        .slice(0, 5)
        .map(record => `
            <div class="recent-answer-item ${record.isCorrect ? 'correct' : 'wrong'}">
                <div class="recent-question">${record.question}</div>
                <div class="recent-answer">
                    <span class="correct-answer">${record.correctAnswer}</span>
                    ${!record.isCorrect ? `<span class="user-answer">${record.userAnswer}</span>` : ''}
                </div>
            </div>
        `)
        .join('');
}

// เริ่มจับเวลา
function startVocabTimer() {
    const quiz = window.vocabQuiz;
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
                endVocabQuiz();
            } else {
                quiz.currentIndex++;
                if (quiz.currentIndex >= quiz.questions.length) {
                    endVocabQuiz();
                } else {
                    showVocabQuestion();
                }
            }
        }
    }, 1000);
}

// เพิ่ม event listener สำหรับปุ่มเริ่มทดสอบ
document.getElementById('start-vocab-quiz').addEventListener('click', startVocabQuiz); 
