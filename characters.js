// ข้อมูลตัวอักษรญี่ปุ่น
const characterData = {
    hiragana: {
    basic: [
        { char: 'あ', romaji: 'a' },
        { char: 'い', romaji: 'i' },
        { char: 'う', romaji: 'u' },
        { char: 'え', romaji: 'e' },
        { char: 'お', romaji: 'o' }
    ],
    k: [
        { char: 'か', romaji: 'ka' },
        { char: 'き', romaji: 'ki' },
        { char: 'く', romaji: 'ku' },
        { char: 'け', romaji: 'ke' },
        { char: 'こ', romaji: 'ko' }
    ],
        g: [
        { char: 'が', romaji: 'ga' },
        { char: 'ぎ', romaji: 'gi' },
        { char: 'ぐ', romaji: 'gu' },
        { char: 'げ', romaji: 'ge' },
        { char: 'ご', romaji: 'go' }
    ],
    s: [
        { char: 'さ', romaji: 'sa' },
        { char: 'し', romaji: 'shi' },
        { char: 'す', romaji: 'su' },
        { char: 'せ', romaji: 'se' },
        { char: 'そ', romaji: 'so' }
    ],
        z: [
        { char: 'ざ', romaji: 'za' },
        { char: 'じ', romaji: 'ji' },
        { char: 'ず', romaji: 'zu' },
        { char: 'ぜ', romaji: 'ze' },
        { char: 'ぞ', romaji: 'zo' }
    ],
    t: [
        { char: 'た', romaji: 'ta' },
        { char: 'ち', romaji: 'chi' },
        { char: 'つ', romaji: 'tsu' },
        { char: 'て', romaji: 'te' },
        { char: 'と', romaji: 'to' }
    ],
        d: [
        { char: 'だ', romaji: 'da' },
        { char: 'ぢ', romaji: 'ji' },
        { char: 'づ', romaji: 'zu' },
        { char: 'で', romaji: 'de' },
        { char: 'ど', romaji: 'do' }
    ],
    n: [
        { char: 'な', romaji: 'na' },
        { char: 'に', romaji: 'ni' },
        { char: 'ぬ', romaji: 'nu' },
        { char: 'ね', romaji: 'ne' },
        { char: 'の', romaji: 'no' }
    ],
    h: [
        { char: 'は', romaji: 'ha' },
        { char: 'ひ', romaji: 'hi' },
        { char: 'ふ', romaji: 'fu' },
        { char: 'へ', romaji: 'he' },
        { char: 'ほ', romaji: 'ho' }
    ],
        b: [
        { char: 'ば', romaji: 'ba' },
        { char: 'び', romaji: 'bi' },
        { char: 'ぶ', romaji: 'bu' },
        { char: 'べ', romaji: 'be' },
        { char: 'ぼ', romaji: 'bo' }
    ],
        p: [
        { char: 'ぱ', romaji: 'pa' },
        { char: 'ぴ', romaji: 'pi' },
        { char: 'ぷ', romaji: 'pu' },
        { char: 'ぺ', romaji: 'pe' },
        { char: 'ぽ', romaji: 'po' }
    ],
    m: [
        { char: 'ま', romaji: 'ma' },
        { char: 'み', romaji: 'mi' },
        { char: 'む', romaji: 'mu' },
        { char: 'め', romaji: 'me' },
        { char: 'も', romaji: 'mo' }
    ],
    y: [
        { char: 'や', romaji: 'ya' },
        { char: 'ゆ', romaji: 'yu' },
        { char: 'よ', romaji: 'yo' }
    ],
    r: [
        { char: 'ら', romaji: 'ra' },
        { char: 'り', romaji: 'ri' },
        { char: 'る', romaji: 'ru' },
        { char: 'れ', romaji: 're' },
        { char: 'ろ', romaji: 'ro' }
    ],
    w: [
        { char: 'わ', romaji: 'wa' },
            { char: 'を', romaji: 'wo' },
        { char: 'ん', romaji: 'n' }
        ],
        yoon: [
            { char: 'きゃ', romaji: 'kya' },
            { char: 'きゅ', romaji: 'kyu' },
            { char: 'きょ', romaji: 'kyo' },
            { char: 'しゃ', romaji: 'sha' },
            { char: 'しゅ', romaji: 'shu' },
            { char: 'しょ', romaji: 'sho' },
            { char: 'ちゃ', romaji: 'cha' },
            { char: 'ちゅ', romaji: 'chu' },
            { char: 'ちょ', romaji: 'cho' },
            { char: 'にゃ', romaji: 'nya' },
            { char: 'にゅ', romaji: 'nyu' },
            { char: 'にょ', romaji: 'nyo' },
            { char: 'ひゃ', romaji: 'hya' },
            { char: 'ひゅ', romaji: 'hyu' },
            { char: 'ひょ', romaji: 'hyo' },
            { char: 'みゃ', romaji: 'mya' },
            { char: 'みゅ', romaji: 'myu' },
            { char: 'みょ', romaji: 'myo' },
            { char: 'りゃ', romaji: 'rya' },
            { char: 'りゅ', romaji: 'ryu' },
            { char: 'りょ', romaji: 'ryo' },
            { char: 'ぎゃ', romaji: 'gya' },
            { char: 'ぎゅ', romaji: 'gyu' },
            { char: 'ぎょ', romaji: 'gyo' },
            { char: 'じゃ', romaji: 'ja' },
            { char: 'じゅ', romaji: 'ju' },
            { char: 'じょ', romaji: 'jo' },
            { char: 'びゃ', romaji: 'bya' },
            { char: 'びゅ', romaji: 'byu' },
            { char: 'びょ', romaji: 'byo' },
            { char: 'ぴゃ', romaji: 'pya' },
            { char: 'ぴゅ', romaji: 'pyu' },
            { char: 'ぴょ', romaji: 'pyo' }
        ]
    },
    katakana: {
    basic: [
        { char: 'ア', romaji: 'a' },
        { char: 'イ', romaji: 'i' },
        { char: 'ウ', romaji: 'u' },
        { char: 'エ', romaji: 'e' },
        { char: 'オ', romaji: 'o' }
    ],
    k: [
        { char: 'カ', romaji: 'ka' },
        { char: 'キ', romaji: 'ki' },
        { char: 'ク', romaji: 'ku' },
        { char: 'ケ', romaji: 'ke' },
        { char: 'コ', romaji: 'ko' }
    ],
        g: [
        { char: 'ガ', romaji: 'ga' },
        { char: 'ギ', romaji: 'gi' },
        { char: 'グ', romaji: 'gu' },
        { char: 'ゲ', romaji: 'ge' },
        { char: 'ゴ', romaji: 'go' }
    ],
    s: [
        { char: 'サ', romaji: 'sa' },
        { char: 'シ', romaji: 'shi' },
        { char: 'ス', romaji: 'su' },
        { char: 'セ', romaji: 'se' },
        { char: 'ソ', romaji: 'so' }
    ],
        z: [
        { char: 'ザ', romaji: 'za' },
        { char: 'ジ', romaji: 'ji' },
        { char: 'ズ', romaji: 'zu' },
        { char: 'ゼ', romaji: 'ze' },
        { char: 'ゾ', romaji: 'zo' }
    ],
    t: [
        { char: 'タ', romaji: 'ta' },
        { char: 'チ', romaji: 'chi' },
        { char: 'ツ', romaji: 'tsu' },
        { char: 'テ', romaji: 'te' },
        { char: 'ト', romaji: 'to' }
    ],
        d: [
        { char: 'ダ', romaji: 'da' },
        { char: 'ヂ', romaji: 'ji' },
        { char: 'ヅ', romaji: 'zu' },
        { char: 'デ', romaji: 'de' },
        { char: 'ド', romaji: 'do' }
    ],
    n: [
        { char: 'ナ', romaji: 'na' },
        { char: 'ニ', romaji: 'ni' },
        { char: 'ヌ', romaji: 'nu' },
        { char: 'ネ', romaji: 'ne' },
        { char: 'ノ', romaji: 'no' }
    ],
    h: [
        { char: 'ハ', romaji: 'ha' },
        { char: 'ヒ', romaji: 'hi' },
        { char: 'フ', romaji: 'fu' },
        { char: 'ヘ', romaji: 'he' },
        { char: 'ホ', romaji: 'ho' }
    ],
        b: [
        { char: 'バ', romaji: 'ba' },
        { char: 'ビ', romaji: 'bi' },
        { char: 'ブ', romaji: 'bu' },
        { char: 'ベ', romaji: 'be' },
        { char: 'ボ', romaji: 'bo' }
    ],
        p: [
        { char: 'パ', romaji: 'pa' },
        { char: 'ピ', romaji: 'pi' },
        { char: 'プ', romaji: 'pu' },
        { char: 'ペ', romaji: 'pe' },
        { char: 'ポ', romaji: 'po' }
    ],
    m: [
        { char: 'マ', romaji: 'ma' },
        { char: 'ミ', romaji: 'mi' },
        { char: 'ム', romaji: 'mu' },
        { char: 'メ', romaji: 'me' },
        { char: 'モ', romaji: 'mo' }
    ],
    y: [
        { char: 'ヤ', romaji: 'ya' },
        { char: 'ユ', romaji: 'yu' },
        { char: 'ヨ', romaji: 'yo' }
    ],
    r: [
        { char: 'ラ', romaji: 'ra' },
        { char: 'リ', romaji: 'ri' },
        { char: 'ル', romaji: 'ru' },
        { char: 'レ', romaji: 're' },
        { char: 'ロ', romaji: 'ro' }
    ],
    w: [
        { char: 'ワ', romaji: 'wa' },
            { char: 'ヲ', romaji: 'wo' },
        { char: 'ン', romaji: 'n' }
        ],
        yoon: [
            { char: 'キャ', romaji: 'kya' },
            { char: 'キュ', romaji: 'kyu' },
            { char: 'キョ', romaji: 'kyo' },
            { char: 'シャ', romaji: 'sha' },
            { char: 'シュ', romaji: 'shu' },
            { char: 'ショ', romaji: 'sho' },
            { char: 'チャ', romaji: 'cha' },
            { char: 'チュ', romaji: 'chu' },
            { char: 'チョ', romaji: 'cho' },
            { char: 'ニャ', romaji: 'nya' },
            { char: 'ニュ', romaji: 'nyu' },
            { char: 'ニョ', romaji: 'nyo' },
            { char: 'ヒャ', romaji: 'hya' },
            { char: 'ヒュ', romaji: 'hyu' },
            { char: 'ヒョ', romaji: 'hyo' },
            { char: 'ミャ', romaji: 'mya' },
            { char: 'ミュ', romaji: 'myu' },
            { char: 'ミョ', romaji: 'myo' },
            { char: 'リャ', romaji: 'rya' },
            { char: 'リュ', romaji: 'ryu' },
            { char: 'リョ', romaji: 'ryo' },
            { char: 'ギャ', romaji: 'gya' },
            { char: 'ギュ', romaji: 'gyu' },
            { char: 'ギョ', romaji: 'gyo' },
            { char: 'ジャ', romaji: 'ja' },
            { char: 'ジュ', romaji: 'ju' },
            { char: 'ジョ', romaji: 'jo' },
            { char: 'ビャ', romaji: 'bya' },
            { char: 'ビュ', romaji: 'byu' },
            { char: 'ビョ', romaji: 'byo' },
            { char: 'ピャ', romaji: 'pya' },
            { char: 'ピュ', romaji: 'pyu' },
            { char: 'ピョ', romaji: 'pyo' }
        ]
    }
};

// ตัวแปรสำหรับเก็บสถานะการเรียน
let currentMode = 'easy';
let currentCharacterType = 'hiragana';
let currentGroup = 'basic';
let questionCount = 10;
let questionFormat = 'character-to-romaji';
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
    wrongCharactersFrequency: {},
    correctCharactersFrequency: {}
};

// อ้างอิง HTML elements
const setupSection = document.getElementById('character-setup');
const questionsSection = document.getElementById('character-questions');
const resultsSection = document.getElementById('character-results');

// ฟังก์ชันทำความสะอาดข้อความ
function cleanString(str) {
    return str.toLowerCase().trim().replace(/\s+/g, ' ');
}

// ฟังก์ชันตรวจสอบคำตอบ
function isAnswerCorrect(userAnswer, correctData) {
    const cleanUserAnswer = cleanString(userAnswer);
    
    // ตรวจสอบโรมาจิ
    if (cleanString(correctData.romaji) === cleanUserAnswer) {
        return true;
    }
    
    // ตรวจสอบตัวอักษรญี่ปุ่น
    if (cleanString(correctData.char) === cleanUserAnswer) {
        return true;
    }
    
    return false;
}

// Event Listeners สำหรับโหมดความยาก
document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
        document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        currentMode = btn.dataset.mode;
        
        const questionCountSetting = document.querySelector('.question-count-setting');
        const infinityInputTypeSetting = document.querySelector('.infinity-input-type-setting');
        
        if (currentMode === 'infinity') {
            isInfinity = true;
            questionCountSetting.style.display = 'none';
            infinityInputTypeSetting.style.display = 'flex';
            mistakesLeft = Infinity;
        } else {
            isInfinity = false;
            questionCountSetting.style.display = 'flex';
            infinityInputTypeSetting.style.display = 'none';
            
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

// Event Listeners สำหรับประเภทตัวอักษร
document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        currentCharacterType = btn.dataset.tab;
        });
    });

// Event Listeners สำหรับกลุ่มตัวอักษร
document.querySelectorAll('.group-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.group-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        currentGroup = item.dataset.group;
        });
    });

// Event Listeners สำหรับการตั้งค่า
document.getElementById('question-count')?.addEventListener('change', (e) => {
    questionCount = Math.min(Math.max(1, parseInt(e.target.value) || 10), 50);
});

document.getElementById('question-format')?.addEventListener('change', (e) => {
    questionFormat = e.target.value;
});

document.getElementById('infinity-input-type')?.addEventListener('change', (e) => {
    infinityInputType = e.target.value;
});

// เริ่มการเรียน
document.getElementById('start-character-quiz')?.addEventListener('click', () => {
    const selectedCharacters = characterData[currentCharacterType][currentGroup];
    
    if (!selectedCharacters || selectedCharacters.length === 0) {
        alert('ไม่พบตัวอักษรในกลุ่มที่เลือก');
        return;
    }

    // รีเซ็ตตัวแปร
    currentQuestion = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    quizQuestions = [];
    
    if (isInfinity) {
        infinityStats = {
            totalQuestions: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            answerHistory: [],
            wrongCharactersFrequency: {},
            correctCharactersFrequency: {}
        };
    }
        
        // สร้างคำถาม
    generateQuestions(selectedCharacters);
    
    // เปลี่ยนไปหน้าคำถาม
    setupSection.style.display = 'none';
    questionsSection.style.display = 'block';
    
    // เริ่มคำถามแรก
    showQuestion();
});
        
        // สร้างคำถาม
function generateQuestions(characters) {
    const targetCount = isInfinity ? 1 : questionCount;
    
    for (let i = 0; i < targetCount; i++) {
        const character = characters[Math.floor(Math.random() * characters.length)];
        const format = questionFormat === 'mix' ? 
            (Math.random() < 0.5 ? 'character-to-romaji' : 'romaji-to-character') : 
            questionFormat;
            
        quizQuestions.push({
            character: character,
            format: format,
            question: format === 'character-to-romaji' ? character.char : character.romaji,
            answer: format === 'character-to-romaji' ? character.romaji : character.char
        });
    }
}

// แสดงคำถาม
function showQuestion() {
    if (!isInfinity && currentQuestion >= quizQuestions.length) {
        endQuiz('completed');
        return;
    }
    
    if (isInfinity && currentQuestion >= quizQuestions.length) {
        // สร้างคำถามใหม่สำหรับโหมด infinity
        const characters = characterData[currentCharacterType][currentGroup];
        generateQuestions(characters);
    }
    
    const question = quizQuestions[currentQuestion];
    
    // อัพเดทข้อมูลคำถาม
    document.querySelector('.question-number').textContent = 
        isInfinity ? `ข้อที่ ${currentQuestion + 1}` : `ข้อที่ ${currentQuestion + 1}/${quizQuestions.length}`;
    
    document.querySelector('.question-text').textContent = question.question;
    
    // อัพเดท progress bar
    if (!isInfinity) {
        const progress = ((currentQuestion) / quizQuestions.length) * 100;
        document.querySelector('.progress').style.width = progress + '%';
    }
    
    // อัพเดทจำนวนผิดที่เหลือ
    document.querySelector('.mistakes-count').textContent = 
        isInfinity ? '∞' : mistakesLeft;
    
    // แสดงรูปแบบการตอบตามโหมด
    const multipleChoice = document.querySelector('.multiple-choice');
    const textInput = document.querySelector('.text-input');
    
    if (currentMode === 'easy' || (isInfinity && infinityInputType === 'multiple-choice')) {
        multipleChoice.style.display = 'grid';
        textInput.style.display = 'none';
        generateChoices(question);
    } else {
        multipleChoice.style.display = 'none';
        textInput.style.display = 'flex';
        setupTextInput();
    }
    
    // เริ่มจับเวลาถ้าเป็นโหมดยาก
    if (currentMode === 'hard') {
        startTimer();
    }
}

// สร้างตัวเลือกสำหรับโหมดง่าย
function generateChoices(question) {
    const choices = [question.answer];
    const allCharacters = Object.values(characterData[currentCharacterType]).flat();
    
    // เพิ่มตัวเลือกผิด
    while (choices.length < 4) {
        const randomChar = allCharacters[Math.floor(Math.random() * allCharacters.length)];
        const wrongAnswer = question.format === 'character-to-romaji' ? 
            randomChar.romaji : randomChar.char;
            
        if (!choices.includes(wrongAnswer)) {
            choices.push(wrongAnswer);
        }
    }
    
    // สุ่มลำดับ
    choices.sort(() => Math.random() - 0.5);
    
    // สร้าง HTML
    const multipleChoice = document.querySelector('.multiple-choice');
    multipleChoice.innerHTML = '';
    
    choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = choice;
        btn.addEventListener('click', () => checkAnswer(choice));
        multipleChoice.appendChild(btn);
    });
}

// ตั้งค่าช่องพิมพ์คำตอบ
function setupTextInput() {
    const input = document.querySelector('.text-input input');
    const submitBtn = document.querySelector('.submit-btn');
    
    input.value = '';
    input.disabled = false;
    submitBtn.disabled = false;
    
    // Event listener สำหรับปุ่ม Enter
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkAnswer(input.value);
        }
    });
    
    submitBtn.addEventListener('click', () => {
        checkAnswer(input.value);
    });
    
    input.focus();
}

// เริ่มจับเวลา
function startTimer() {
    timeLeft = 15;
    document.querySelector('.timer').textContent = timeLeft;
    
    timer = setInterval(() => {
        timeLeft--;
        document.querySelector('.timer').textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            checkAnswer(''); // ตอบผิดเมื่อหมดเวลา
        }
    }, 1000);
}

// ตรวจสอบคำตอบ
function checkAnswer(answer) {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
    
    const question = quizQuestions[currentQuestion];
    const isCorrect = isAnswerCorrect(answer, {
        char: question.character.char,
        romaji: question.character.romaji
    });
    
    // อัพเดทสถิติ
    if (isCorrect) {
        correctAnswers++;
        if (isInfinity) {
            infinityStats.correctAnswers++;
            infinityStats.correctCharactersFrequency[question.character.char] = 
                (infinityStats.correctCharactersFrequency[question.character.char] || 0) + 1;
        }
        } else {
        wrongAnswers++;
        if (!isInfinity) {
            mistakesLeft--;
        }
        if (isInfinity) {
            infinityStats.wrongAnswers++;
            infinityStats.wrongCharactersFrequency[question.character.char] = 
                (infinityStats.wrongCharactersFrequency[question.character.char] || 0) + 1;
        }
    }
    
    if (isInfinity) {
        infinityStats.totalQuestions++;
        infinityStats.answerHistory.push({
            question: question.question,
            userAnswer: answer,
            correctAnswer: question.answer,
            isCorrect: isCorrect
        });
    }
    
    // แสดงผลคำตอบ
    showAnswerResult(isCorrect, question.answer);
    
    // ปิดใช้งานปุ่มตัวเลือก
    document.querySelectorAll('.choice-btn').forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === question.answer) {
            btn.classList.add('correct');
        } else if (btn.textContent === answer && !isCorrect) {
            btn.classList.add('wrong');
        }
    });
    
    // ปิดใช้งานช่องพิมพ์
    const input = document.querySelector('.text-input input');
    const submitBtn = document.querySelector('.submit-btn');
    if (input) input.disabled = true;
    if (submitBtn) submitBtn.disabled = true;
    
    // ตรวจสอบเงื่อนไขจบเกม
    if (!isInfinity && mistakesLeft <= 0) {
        setTimeout(() => endQuiz('failed'), 1500);
        return;
    }

    // ไปคำถามถัดไป
    setTimeout(() => {
        currentQuestion++;
        showQuestion();
    }, 1500);
}

// แสดงผลคำตอบ
function showAnswerResult(isCorrect, correctAnswer) {
    const resultDiv = document.querySelector('.answer-result');
    const correctDiv = resultDiv.querySelector('.correct');
    const wrongDiv = resultDiv.querySelector('.wrong');
    
    if (isCorrect) {
        correctDiv.style.display = 'block';
        wrongDiv.style.display = 'none';
    } else {
        correctDiv.style.display = 'none';
        wrongDiv.style.display = 'block';
        wrongDiv.querySelector('.correct-answer').textContent = correctAnswer;
    }
    
    resultDiv.style.display = 'block';
    
    setTimeout(() => {
        resultDiv.style.display = 'none';
    }, 1500);
}

// จบการเรียน
function endQuiz(reason) {
    questionsSection.style.display = 'none';
    resultsSection.style.display = 'block';
    
    showResults(reason);
}

// แสดงผลลัพธ์
function showResults(reason) {
    const totalQuestions = isInfinity ? infinityStats.totalQuestions : quizQuestions.length;
    const correctCount = isInfinity ? infinityStats.correctAnswers : correctAnswers;
    const wrongCount = isInfinity ? infinityStats.wrongAnswers : wrongAnswers;
    const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
    
    // อัพเดทคะแนน
    document.querySelector('.score-percent').textContent = percentage + '%';
    document.querySelector('.correct-count').textContent = correctCount;
    document.querySelector('.wrong-count').textContent = wrongCount;
    
    // ข้อความตอบรับ
    const feedbackMessage = document.querySelector('.feedback-message');
    let message = '';
    
    if (reason === 'failed') {
        message = 'ตอบผิดเกินจำนวนที่กำหนด ลองใหม่อีกครั้งนะ!';
    } else if (percentage >= 90) {
        message = 'ยอดเยี่ยม! คุณเก่งมาก!';
    } else if (percentage >= 70) {
        message = 'ดีมาก! แต่ยังสามารถทำได้ดีกว่านี้!';
    } else if (percentage >= 50) {
        message = 'พอใช้ ควรทบทวนและฝึกฝนเพิ่มเติม';
        } else {
        message = 'ต้องฝึกฝนเพิ่มเติม ลองทำอีกครั้ง!';
    }
    
    feedbackMessage.textContent = message;
    
    // แสดงเฉลยคำตอบ
    showAnswersReview();
}

// แสดงเฉลยคำตอบ
function showAnswersReview() {
    const answersList = document.querySelector('.answers-list');
    answersList.innerHTML = '';
    
    const questionsToShow = isInfinity ? 
        infinityStats.answerHistory.slice(-10) : // แสดง 10 ข้อล่าสุดสำหรับโหมด infinity
        quizQuestions.map((q, index) => ({
            question: q.question,
            correctAnswer: q.answer,
            // ในการใช้งานจริงควรเก็บคำตอบของผู้ใช้ไว้
            userAnswer: '',
            isCorrect: true // ต้องปรับปรุงให้เก็บข้อมูลจริง
        }));
    
    questionsToShow.forEach((item, index) => {
        const answerItem = document.createElement('div');
        answerItem.className = 'answer-item';
        
        answerItem.innerHTML = `
            <div class="answer-content">
                <div class="answer-text">${item.question} → ${item.correctAnswer}</div>
                <div class="answer-details">คำตอบที่ถูก: ${item.correctAnswer}</div>
            </div>
            <div class="answer-status ${item.isCorrect ? 'correct' : 'wrong'}">
                ${item.isCorrect ? 'ถูก' : 'ผิด'}
            </div>
        `;
        
        answersList.appendChild(answerItem);
    });
}

// Event Listeners สำหรับปุ่มผลลัพธ์
document.querySelector('.retry-btn')?.addEventListener('click', () => {
    resultsSection.style.display = 'none';
    setupSection.style.display = 'block';
});

document.querySelector('.back-btn')?.addEventListener('click', () => {
    resultsSection.style.display = 'none';
    setupSection.style.display = 'block';
});

// Event Listeners สำหรับปุ่มผลลัพธ์
document.querySelector('.retry-btn')?.addEventListener('click', () => {
    resultsSection.style.display = 'none';
    setupSection.style.display = 'block';
});

document.querySelector('.back-btn')?.addEventListener('click', () => {
    resultsSection.style.display = 'none';
    setupSection.style.display = 'block';
});

// เริ่มต้นเมื่อโหลดหน้า
window.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('fade-in-page');
});
