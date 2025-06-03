// ข้อมูลตัวอักษรฮิรากะนะ
const hiraganaData = {
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
    k_dakuten: [
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
    s_dakuten: [
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
    t_dakuten: [
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
    h_dakuten: [
        { char: 'ば', romaji: 'ba' },
        { char: 'び', romaji: 'bi' },
        { char: 'ぶ', romaji: 'bu' },
        { char: 'べ', romaji: 'be' },
        { char: 'ぼ', romaji: 'bo' }
    ],
    h_maru: [
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
        { char: 'を', romaji: 'wo' }
    ],
    other: [
        { char: 'ん', romaji: 'n' }
    ]
};

const katakanaData = {
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
    k_dakuten: [
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
    s_dakuten: [
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
    t_dakuten: [
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
    h_dakuten: [
        { char: 'バ', romaji: 'ba' },
        { char: 'ビ', romaji: 'bi' },
        { char: 'ブ', romaji: 'bu' },
        { char: 'ベ', romaji: 'be' },
        { char: 'ボ', romaji: 'bo' }
    ],
    h_maru: [
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
        { char: 'ヲ', romaji: 'wo' }
    ],
    other: [
        { char: 'ン', romaji: 'n' }
    ]
};

// ชื่อกลุ่มตัวอักษรภาษาไทย
const groupNames = {
    basic: 'พื้นฐาน (a, i, u, e, o)',
    k: 'กลุ่ม K (ka, ki, ku, ke, ko)',
    k_dakuten: 'กลุ่ม K + ゛ (ga, gi, gu, ge, go)',
    s: 'กลุ่ม S (sa, shi, su, se, so)',
    s_dakuten: 'กลุ่ม S + ゛ (za, ji, zu, ze, zo)',
    t: 'กลุ่ม T (ta, chi, tsu, te, to)',
    t_dakuten: 'กลุ่ม T + ゛ (da, ji, zu, de, do)',
    n: 'กลุ่ม N (na, ni, nu, ne, no)',
    h: 'กลุ่ม H (ha, hi, fu, he, ho)',
    h_dakuten: 'กลุ่ม H + ゛ (ba, bi, bu, be, bo)',
    h_maru: 'กลุ่ม H + ゜ (pa, pi, pu, pe, po)',
    m: 'กลุ่ม M (ma, mi, mu, me, mo)',
    y: 'กลุ่ม Y (ya, yu, yo)',
    r: 'กลุ่ม R (ra, ri, ru, re, ro)',
    w: 'กลุ่ม W (wa, wo)',
    other: 'อื่นๆ (n)'
};

// ตัวแปรสำหรับเก็บสถานะปัจจุบัน
let currentCharacterType = 'hiragana';
let currentTestLevel = '';
let currentTestGroup = '';
let currentTestIndex = 0;
let currentTestQuestions = [];
let currentScore = 0;
let userProgress = {
    hiragana: {
        easy: { completed: false, score: 0 },
        medium: { completed: false, score: 0 },
        hard: { completed: false, score: 0 }
    },
    katakana: {
        easy: { completed: false, score: 0 },
        medium: { completed: false, score: 0 },
        hard: { completed: false, score: 0 }
    }
};

// ตัวแปรสำหรับการเรียน
let currentGroup = 'basic';
let currentMode = 'easy';
let mistakes = 0;
let maxMistakes = 10;
let timer = null;
let timeLeft = 0;

// ตัวแปรสำหรับเก็บลำดับตัวอักษรและข้อที่ผิด
let learningOrder = [];
let learningIndex = 0;
let wrongAnswers = [];

// ฟังก์ชันเริ่มต้นเมื่อโหลดหน้า
document.addEventListener('DOMContentLoaded', function() {
    // เริ่มต้นแสดงตารางฮิรากะนะ
    initializeCharacterTable();
    
    // เพิ่ม event listeners สำหรับปุ่มแท็บ
    document.querySelectorAll('.tab-btn').forEach(button => {
        button.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            switchCharacterType(type);
        });
    });
    
    // เพิ่ม event listeners สำหรับปุ่มเลือกประเภทตัวอักษร
    document.querySelectorAll('.character-type-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // อัพเดทสถานะปุ่ม
            document.querySelectorAll('.character-type-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // อัพเดทประเภทตัวอักษร
            currentCharacterType = btn.dataset.type;
        });
    });

    // เพิ่ม event listeners สำหรับปุ่มกลุ่มตัวอักษร
    document.querySelectorAll('.character-group-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // อัพเดทสถานะปุ่ม
            document.querySelectorAll('.character-group-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // อัพเดทกลุ่มที่เลือก
            currentGroup = btn.dataset.group;
        });
    });

    // เพิ่ม event listeners สำหรับปุ่มโหมดการเรียน
    document.querySelectorAll('.test-mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const mode = btn.dataset.mode;
            startLearning(currentGroup, mode);
        });
    });

    // เพิ่ม event listeners สำหรับปุ่มออกจากการทดสอบ
    document.querySelector('.test-exit-btn').addEventListener('click', exitTest);
    
    // เพิ่ม event listeners สำหรับปุ่มถัดไป
    document.querySelector('.test-next-btn').addEventListener('click', nextQuestion);
    
    // เพิ่ม event listeners สำหรับปุ่มลองใหม่และกลับ
    document.querySelector('.test-retry-btn').addEventListener('click', retryTest);
    document.querySelector('.test-back-btn').addEventListener('click', exitTest);
    
    // โหลดความก้าวหน้าจาก localStorage ถ้ามี
    loadProgress();
    
    // อัพเดทแถบความก้าวหน้า
    updateProgressBar();
});

// ฟังก์ชันสร้างตารางตัวอักษร
function initializeCharacterTable() {
    const tableContainer = document.querySelector('.character-table-container');
    tableContainer.innerHTML = '';
    
    const data = currentCharacterType === 'hiragana' ? hiraganaData : katakanaData;
    
    // สร้างตารางสำหรับแต่ละกลุ่ม
    for (const group in data) {
        // สร้างหัวข้อกลุ่ม
        const groupTitle = document.createElement('h3');
        groupTitle.className = 'character-group-title';
        groupTitle.textContent = groupNames[group];
        tableContainer.appendChild(groupTitle);
        
        // สร้างตาราง
        const table = document.createElement('table');
        table.className = 'character-table';
        
        // สร้างแถวตัวอักษร
        const charRow = document.createElement('tr');
        
        // เพิ่มตัวอักษรแต่ละตัวในกลุ่ม
        data[group].forEach(item => {
            const cell = document.createElement('td');
            
            const charSpan = document.createElement('span');
            charSpan.className = 'character';
            charSpan.textContent = item.char;
            
            const romajiSpan = document.createElement('span');
            romajiSpan.className = 'romaji';
            romajiSpan.textContent = item.romaji;
            
            cell.appendChild(charSpan);
            cell.appendChild(romajiSpan);
            charRow.appendChild(cell);
        });
        
        table.appendChild(charRow);
        tableContainer.appendChild(table);
    }
}

// ฟังก์ชันสลับประเภทตัวอักษร (ฮิรากะนะ/คาตาคานะ)
function switchCharacterType(type) {
    // อัพเดทสถานะปุ่มแท็บ
    document.querySelectorAll('.tab-btn').forEach(button => {
        if (button.getAttribute('data-type') === type) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
    
    // อัพเดทประเภทตัวอักษรปัจจุบัน
    currentCharacterType = type;
    
    // สร้างตารางตัวอักษรใหม่
    initializeCharacterTable();
    
    // อัพเดทแถบความก้าวหน้า
    updateProgressBar();
    
    // อัพเดทชื่อปุ่มทดสอบ
    document.querySelectorAll('.test-level-btn').forEach(button => {
        const level = button.getAttribute('data-level');
        button.textContent = `ระดับ${level === 'easy' ? 'ง่าย' : level === 'medium' ? 'กลาง' : 'ยาก'}`;
    });
}

// ฟังก์ชันเริ่มการทดสอบตามระดับความยาก
function startTest(level) {
    // ตรวจสอบว่ามีการเลือกประเภทตัวอักษรหรือไม่
    if (!currentCharacterType) {
        alert('กรุณาเลือกประเภทตัวอักษรก่อนเริ่มการทดสอบ');
        return;
    }

    currentTestLevel = level;
    currentTestGroup = '';
    
    // สร้างคำถามสำหรับการทดสอบ
    generateTestQuestions(level);
    
    // แสดงส่วนทดสอบ
    document.querySelector('.character-selection').style.display = 'none';
    document.querySelector('.test-section').style.display = 'block';
    
    // อัพเดทชื่อการทดสอบ
    const levelName = level === 'easy' ? 'ง่าย' : level === 'medium' ? 'กลาง' : 'ยาก';
    document.querySelector('.test-title').textContent = `ทดสอบ${currentCharacterType === 'hiragana' ? 'ฮิรากะนะ' : 'คาตาคานะ'} - ระดับ${levelName}`;
    
    // เริ่มแสดงคำถามแรก
    showQuestion(0);
}

// ฟังก์ชันสร้างคำถามสำหรับการทดสอบตามระดับความยาก
function generateTestQuestions(level) {
    currentTestQuestions = [];
    currentTestIndex = 0;
    currentScore = 0;
    
    const data = currentCharacterType === 'hiragana' ? hiraganaData : katakanaData;
    let allCharacters = [];
    
    // รวมตัวอักษรทั้งหมด
    for (const group in data) {
        allCharacters = allCharacters.concat(data[group]);
    }
    
    // สุ่มตัวอักษรตามจำนวนที่ต้องการ
    const questionCount = level === 'easy' ? 10 : level === 'medium' ? 20 : 30;
    
    // สร้างคำถามแบบสุ่ม
    for (let i = 0; i < questionCount; i++) {
        // สุ่มตัวอักษรที่จะถาม
        const targetIndex = Math.floor(Math.random() * allCharacters.length);
        const targetChar = allCharacters[targetIndex];
        
        // สร้างตัวเลือก
        let options = [targetChar.romaji];
        
        // สุ่มตัวเลือกอื่นๆ
        while (options.length < 4) {
            const randomIndex = Math.floor(Math.random() * allCharacters.length);
            const randomChar = allCharacters[randomIndex];
            
            if (!options.includes(randomChar.romaji)) {
                options.push(randomChar.romaji);
            }
        }
        
        // สลับตำแหน่งตัวเลือก
        options = shuffleArray(options);
        
        // สร้างคำถาม
        const questionType = Math.random() > 0.5 ? 'char-to-romaji' : 'romaji-to-char';
        
        if (questionType === 'char-to-romaji') {
            currentTestQuestions.push({
                question: targetChar.char,
                options: options,
                answer: targetChar.romaji,
                type: questionType
            });
        } else {
            // สร้างตัวเลือกเป็นตัวอักษร
            const charOptions = options.map(romaji => {
                const matchingChar = allCharacters.find(char => char.romaji === romaji);
                return matchingChar ? matchingChar.char : '';
            });
            
            currentTestQuestions.push({
                question: targetChar.romaji,
                options: charOptions,
                answer: targetChar.char,
                type: questionType
            });
        }
    }
}

// ฟังก์ชันสร้างคำถามสำหรับการทดสอบตามกลุ่มตัวอักษร
function generateGroupTestQuestions(group) {
    currentTestQuestions = [];
    currentTestIndex = 0;
    currentScore = 0;
    
    const data = currentCharacterType === 'hiragana' ? hiraganaData : katakanaData;
    const groupCharacters = data[group];
    
    // สร้างคำถามสำหรับทุกตัวอักษรในกลุ่ม
    groupCharacters.forEach(targetChar => {
        // สร้างตัวเลือก
        let options = [targetChar.romaji];
        
        // สุ่มตัวเลือกอื่นๆ
        while (options.length < 4) {
            const randomGroup = Object.keys(data)[Math.floor(Math.random() * Object.keys(data).length)];
            const randomIndex = Math.floor(Math.random() * data[randomGroup].length);
            const randomChar = data[randomGroup][randomIndex];
            
            if (!options.includes(randomChar.romaji)) {
                options.push(randomChar.romaji);
            }
        }
        
        // สลับตำแหน่งตัวเลือก
        options = shuffleArray(options);
        
        // สร้างคำถาม
        const questionType = Math.random() > 0.5 ? 'char-to-romaji' : 'romaji-to-char';
        
        if (questionType === 'char-to-romaji') {
            currentTestQuestions.push({
                question: targetChar.char,
                options: options,
                answer: targetChar.romaji,
                type: questionType
            });
        } else {
            // สร้างตัวเลือกเป็นตัวอักษร
            const allCharacters = [];
            for (const g in data) {
                allCharacters.push(...data[g]);
            }
            
            const charOptions = options.map(romaji => {
                const matchingChar = allCharacters.find(char => char.romaji === romaji);
                return matchingChar ? matchingChar.char : '';
            });
            
            currentTestQuestions.push({
                question: targetChar.romaji,
                options: charOptions,
                answer: targetChar.char,
                type: questionType
            });
        }
    });
    
    // สลับคำถาม
    currentTestQuestions = shuffleArray(currentTestQuestions);
}

// ฟังก์ชันสลับตำแหน่งอาร์เรย์
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// ฟังก์ชันแสดงคำถาม
function showQuestion(index) {
    if (index >= currentTestQuestions.length) {
        // จบการทดสอบ
        showTestResult();
        return;
    }
    
    const question = currentTestQuestions[index];
    
    // อัพเดทความก้าวหน้า
    document.querySelector('.test-progress').textContent = `${index + 1}/${currentTestQuestions.length}`;
    
    // แสดงคำถาม
    const testContent = document.querySelector('.test-content');
    const testResult = document.querySelector('.test-result');
    
    testContent.style.display = 'block';
    testResult.style.display = 'none';    
    // แสดงตัวอักษรหรืุโรมาจิ
    const testCharacter = document.querySelector('.test-character');
    testCharacter.textContent = question.question;
    
    // แสดงคำถาม
    const testQuestion = document.querySelector('.test-question');
    if (question.type === 'char-to-romaji') {
        testQuestion.textContent = 'ตัวอักษรนี้อ่านว่าอะไร?';
    } else {
        testQuestion.textContent = 'โรมาจินี้ตรงกับตัวอักษรใด?';
    }
    
    // แสดงตัวเลือก
    const testOptions = document.querySelector('.test-options');
    testOptions.innerHTML = '';
    
    question.options.forEach((option, i) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'test-option';
        optionDiv.textContent = option;
        optionDiv.setAttribute('data-index', i);
        
        optionDiv.addEventListener('click', function() {
            selectOption(this, question.answer);
        });
        
        testOptions.appendChild(optionDiv);
    });
    
    // ซ่อนผลลัพธ์
    document.querySelector('.test-feedback').style.display = 'none';
    
    // ปิดปุ่มถัดไป
    const nextButton = document.querySelector('.test-next-btn');
    nextButton.disabled = true;
}

// ฟังก์ชันเลือกตัวเลือก
function selectOption(optionElement, correctAnswer) {
    if (document.querySelector('.test-option.selected')) {
        return;
    }
    optionElement.classList.add('selected');
    const isCorrect = optionElement.textContent === correctAnswer;
    // เก็บ userAnswer
    const question = currentTestQuestions[currentTestIndex];
    question.userAnswer = optionElement.textContent;
    // แสดงผลลัพธ์
    const feedback = document.querySelector('.test-feedback');
    feedback.style.display = 'block';
    
    if (isCorrect) {
        feedback.innerHTML = '<i class="fas fa-check-circle"></i> ถูกต้อง!';
        feedback.className = 'test-feedback feedback-correct';
        currentScore++;
        
        // บันทึกความก้าวหน้าของตัวอักษรนี้
        const charKey = question.type === 'char-to-romaji' ? question.question : question.answer;
        userProgress[currentCharacterType][currentTestLevel].characters[charKey] = true;
    } else {
        feedback.innerHTML = `<i class="fas fa-times-circle"></i> ไม่ถูกต้อง! คำตอบที่ถูกต้อง: ${correctAnswer}`;
        feedback.className = 'test-feedback feedback-incorrect';
        currentMistakes++;
        
        // ตรวจสอบว่าเกินจำนวนครั้งที่ผิดได้หรือไม่
        if (currentMistakes >= maxMistakes) {
            showTestFailure();
            return;
        }
    }
    
    // หยุดตัวจับเวลา
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    // เปิดปุ่มถัดไป
    const nextButton = document.querySelector('.test-next-btn');
    nextButton.disabled = false;
}

// ฟังก์ชันเลือกตัวเลือก
function selectOption(optionElement, correctAnswer) {
    if (document.querySelector('.test-option.selected')) {
        return;
    }
    optionElement.classList.add('selected');
    const isCorrect = optionElement.textContent === correctAnswer;
    // เก็บ userAnswer
    const question = currentTestQuestions[currentTestIndex];
    question.userAnswer = optionElement.textContent;
    // แสดงผลลัพธ์
    const feedbackElement = document.querySelector('.test-feedback');
    const correctFeedback = document.querySelector('.feedback-correct');
    const incorrectFeedback = document.querySelector('.feedback-incorrect');
    const correctAnswerElement = document.querySelector('.correct-answer');
    
    feedbackElement.style.display = 'block';
    
    if (isCorrect) {
        // ถ้าตอบถูก
        optionElement.classList.add('correct');
        correctFeedback.style.display = 'block';
        incorrectFeedback.style.display = 'none';
        currentScore++;
    } else {
        // ถ้าตอบผิด
        optionElement.classList.add('incorrect');
        correctFeedback.style.display = 'none';
        incorrectFeedback.style.display = 'block';
        correctAnswerElement.textContent = correctAnswer;
        
        // เน้นตัวเลือกที่ถูกต้อง
        document.querySelectorAll('.test-option').forEach(option => {
            if (option.textContent === correctAnswer) {
                option.classList.add('correct');
            }
        });
    }
    
    // เปิดปุ่มถัดไป
    document.querySelector('.test-next-btn').disabled = false;
}

// ฟังก์ชันไปยังคำถามถัดไป
function nextQuestion() {
    currentTestIndex++;
    showQuestion(currentTestIndex);
}

// ฟังก์ชันแสดงผลการทดสอบ
function showTestResult() {
    const testContent = document.querySelector('.test-content');
    const testResult = document.querySelector('.test-result');
    testContent.style.display = 'none';
    testResult.style.display = 'block';
    const percentage = Math.round((currentScore / currentTestQuestions.length) * 100);
    document.querySelector('.score-number').textContent = percentage;
    document.querySelector('.correct-count').textContent = currentScore;
    document.querySelector('.total-count').textContent = currentTestQuestions.length;
    const resultFeedback = document.querySelector('.result-feedback');
    if (percentage >= 80) {
        resultFeedback.textContent = 'ยอดเยี่ยม! คุณเข้าใจตัวอักษรได้ดีมาก';
    } else if (percentage >= 60) {
        resultFeedback.textContent = 'ดีมาก! คุณกำลังเรียนรู้ได้ดี';
    } else if (percentage >= 40) {
        resultFeedback.textContent = 'ไม่เลว! แต่ยังต้องฝึกฝนเพิ่มเติม';
    } else {
        resultFeedback.textContent = 'ยังต้องฝึกฝนอีกมาก ลองทำแบบทดสอบอีกครั้ง';
    }
    // เฉลยคำตอบ
    const answersList = document.querySelector('.answers-list');
    if (answersList) {
        answersList.innerHTML = currentTestQuestions.map((q, i) => `
            <div class="answer-item">
                <div class="answer-status ${q.userAnswer === q.answer ? 'correct' : 'wrong'}">
                    ${q.userAnswer === q.answer ? '✓' : '✗'}
                </div>
                <div class="answer-content">
                    <div class="answer-text">${q.question} → ${q.answer}</div>
                    <div class="answer-details">
                        ${q.romaji ? `<span style='color:#ffb3b3;'>${q.romaji}</span>` : ''}
                        ${q.userAnswer ? `<span style='color:#888; margin-left:1em;'>คำตอบของคุณ: ${q.userAnswer}</span>` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }
    // บันทึกความก้าวหน้า
    if (currentTestLevel) {
        userProgress[currentCharacterType][currentTestLevel] = {
            completed: true,
            score: percentage
        };
        
        // บันทึกลงใน localStorage
        saveProgress();
        
        // อัพเดทแถบความก้าวหน้า
        updateProgressBar();
    }
}

// ฟังก์ชันออกจากการทดสอบ
function exitTest() {
    document.querySelector('.character-selection').style.display = 'block';
    document.querySelector('.test-section').style.display = 'none';
}

// ฟังก์ชันลองทำแบบทดสอบใหม่
function retryTest() {
    if (currentTestLevel) {
        startTest(currentTestLevel);
    } else if (currentTestGroup) {
        startGroupTest(currentTestGroup);
    } else {
        exitTest();
    }
}

// ฟังก์ชันบันทึกความก้าวหน้า
function saveProgress() {
    localStorage.setItem('japaneseCharactersProgress', JSON.stringify(userProgress));
}

// ฟังก์ชันโหลดความก้าวหน้า
function loadProgress() {
    const savedProgress = localStorage.getItem('japaneseCharactersProgress');
    if (savedProgress) {
        userProgress = JSON.parse(savedProgress);
    }
}

// ฟังก์ชันอัพเดทแถบความก้าวหน้า
function updateProgressBar() {
    const progress = userProgress[currentCharacterType];
    
    // ตรวจสอบระดับที่ผ่านแล้ว
    let completedLevels = 0;
    let totalScore = 0;
    
    for (const level in progress) {
        if (progress[level].completed) {
            completedLevels++;
            totalScore += progress[level].score;
            
            // อัพเดทสถานะระดับ
            const levelStatus = document.querySelector(`.progress-level:nth-child(${getLevelIndex(level)}) .level-status`);
            levelStatus.textContent = `ผ่านแล้ว (${progress[level].score}%)`;
            levelStatus.classList.add('completed');
        } else {
            // รีเซ็ตสถานะระดับที่ยังไม่ผ่าน
            const levelStatus = document.querySelector(`.progress-level:nth-child(${getLevelIndex(level)}) .level-status`);
            levelStatus.textContent = 'ยังไม่ผ่าน';
            levelStatus.classList.remove('completed');
        }
    }
    
    // คำนวณเปอร์เซ็นต์ความก้าวหน้ารวม
    const totalPercentage = completedLevels > 0 ? Math.round(totalScore / completedLevels) : 0;
    
    // อัพเดทแถบความก้าวหน้า
    document.querySelector('.progress-percentage').textContent = `${totalPercentage}%`;
    document.querySelector('.progress-bar').style.width = `${totalPercentage}%`;
}

// ฟังก์ชันหาลำดับของระดับ
function getLevelIndex(level) {
    switch (level) {
        case 'easy': return 1;
        case 'medium': return 2;
        case 'hard': return 3;
        default: return 1;
    }
}

// ฟังก์ชันจัดการกับคำตอบที่ผิด
function handleWrongAnswer() {
    // แสดงผลตอบกลับว่าผิด
    const correctAnswer = currentTestQuestions[currentTestIndex].answer;
    showFeedback(false, correctAnswer);
    
    wrongAnswerCount++;
    
    // ตรวจสอบว่าผิดเกินจำนวนที่กำหนดหรือไม่
    if (wrongAnswerCount >= maxWrongAnswers) {
        // แสดงผลว่าไม่ผ่าน
        showFailResult();
    } else {
        // เปิดปุ่มถัดไป
        document.querySelector('.test-next-btn').disabled = false;
    }
}

// ตัวแปรสำหรับเก็บจำนวนครั้งที่ผิดพลาด
let mistakeCount = 0;

// ฟังก์ชันเริ่มการทดสอบใหม่
function startNewTest() {
    // รีเซ็ตสถานะการทดสอบ
    mistakeCount = 0;
    currentScore = 0;
    currentQuestionIndex = 0;
    document.querySelector('.test-result').style.display = 'none';
    document.querySelector('.test-content').style.display = 'block';
    document.querySelector('.feedback-correct').style.display = 'none';
    document.querySelector('.feedback-incorrect').style.display = 'none';
    loadNextQuestion();
}

// ฟังก์ชันสำหรับการเริ่มการทดสอบใหม่
function checkAnswer(userAnswer, correctAnswer) {
    if (userAnswer === correctAnswer) {
        currentScore++;
        document.querySelector('.feedback-correct').style.display = 'block';
        document.querySelector('.feedback-incorrect').style.display = 'none';
    } else {
        mistakeCount++;
        document.querySelector('.feedback-correct').style.display = 'none';
        document.querySelector('.feedback-incorrect').style.display = 'block';
        document.querySelector('.correct-answer').textContent = correctAnswer;
    }

    // ตรวจสอบจำนวนครั้งที่ผิดพลาด
    const maxMistakes = currentTestLevel === 'easy' ? 10 : currentTestLevel === 'medium' ? 5 : 3;
    if (mistakeCount >= maxMistakes) {
        showTestResult(false);
        return;
    }

    // เปิดปุ่มถัดไป
    const nextButton = document.querySelector('.test-next-btn');
    nextButton.disabled = false;
}

// ฟังก์ชันแสดงผลการทดสอบ
function showTestResult(isPassed) {
    const testContent = document.querySelector('.test-content');
    const testResult = document.querySelector('.test-result');

    testContent.style.display = 'none';
    testResult.style.display = 'block';

    const scorePercent = Math.round((currentScore / currentTestQuestions.length) * 100);
    document.querySelector('.score-number').textContent = currentScore;
    document.querySelector('.score-percent').textContent = `${scorePercent}%`;
    document.querySelector('.correct-count').textContent = currentScore;
    document.querySelector('.total-count').textContent = currentTestQuestions.length;

    if (isPassed) {
        document.querySelector('.result-feedback').textContent = 'คุณผ่านการทดสอบ!';
    } else {
        document.querySelector('.result-feedback').textContent = 'ยังต้องฝึกฝนเพิ่มเติม! ลองทำแบบทดสอบอีกครั้ง';
    }
}


function updateProgress() {
    if (currentTestLevel) {
        userProgress[currentCharacterType][currentTestLevel].completed = true;
        userProgress[currentCharacterType][currentTestLevel].score = currentScore;
    }
    // อัพเดทแถบความก้าวหน้า
    updateProgressBar();
}

// ฟังก์ชันแสดงผลการทดสอบ
function showTestResult() {
    const resultSection = document.querySelector('.test-result');
    const scoreNumber = resultSection.querySelector('.score-number');
    const correctCount = resultSection.querySelector('.correct-count');
    const totalCount = resultSection.querySelector('.total-count');

    scoreNumber.textContent = currentScore;
    correctCount.textContent = currentTestQuestions.length;
    totalCount.textContent = currentTestQuestions.length;

    // อัพเดทสถานะการทดสอบ
    updateProgress();

    resultSection.style.display = 'block';
}

// ฟังก์ชันเริ่มการเรียน
function startLearning(group, mode) {
    currentGroup = group;
    currentMode = mode;
    mistakes = 0;
    wrongAnswers = [];
    const data = currentCharacterType === 'hiragana' ? hiraganaData : katakanaData;
    let groupChars = [...data[group]];
    let numQuestions = 10;
    if (mode === 'medium') numQuestions = 20;
    if (mode === 'hard') numQuestions = 30;
    // สร้าง learningOrder ตามจำนวนข้อ
    if (groupChars.length >= numQuestions) {
        learningOrder = shuffleArray(groupChars).slice(0, numQuestions);
    } else {
        // ถ้าน้อยกว่าจำนวนข้อ ให้สุ่มซ้ำ
        learningOrder = [];
        while (learningOrder.length < numQuestions) {
            const shuffled = shuffleArray(groupChars);
            for (let i = 0; i < shuffled.length && learningOrder.length < numQuestions; i++) {
                learningOrder.push(shuffled[i]);
            }
        }
    }
    learningIndex = 0;
    switch(mode) {
        case 'easy':
            maxMistakes = 10;
            timeLeft = 0;
            break;
        case 'medium':
            maxMistakes = 5;
            timeLeft = 0;
            break;
        case 'hard':
            maxMistakes = 3;
            timeLeft = 60;
            break;
    }
    document.querySelector('.character-selection').style.display = 'none';
    document.querySelector('.test-section').style.display = 'block';
    const typeName = currentCharacterType === 'hiragana' ? 'ฮิรากะนะ' : 'คาตาคานะ';
    document.querySelector('.test-title').textContent = `เรียน${typeName} - ${groupNames[group]}`;
    updateTestInfo();
    if (timeLeft > 0) {
        startTimer();
    }
    generateQuestion();
}

// ฟังก์ชันอัพเดทข้อมูลการเรียน
function updateTestInfo() {
    // อัปเดตจำนวนข้อ
    const currentQ = document.querySelector('.current-question');
    const totalQ = document.querySelector('.total-questions');
    if (currentQ && totalQ) {
        currentQ.textContent = learningIndex + 1;
        totalQ.textContent = learningOrder.length;
    }
    // อัปเดตจำนวนผิด
    const mistakesCount = document.querySelector('.mistakes-count');
    const maxMistakesSpan = document.querySelector('.max-mistakes');
    if (mistakesCount && maxMistakesSpan) {
        mistakesCount.textContent = mistakes;
        maxMistakesSpan.textContent = maxMistakes;
    }
    // อัปเดต timer ถ้ามี
    const timerElement = document.querySelector('.test-timer');
    if (timerElement) {
        if (timeLeft > 0) {
            timerElement.innerHTML = `<i class="fas fa-clock"></i> ${timeLeft}s`;
            timerElement.style.display = 'flex';
        } else {
            timerElement.style.display = 'none';
        }
    }
}

// ฟังก์ชันจับเวลา
function startTimer() {
    if (timer) clearInterval(timer);
    
    timer = setInterval(() => {
        timeLeft--;
        updateTestInfo();
        
        if (timeLeft <= 10) {
            document.querySelector('.test-timer').classList.add('time-low');
        }
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            endTest();
        }
    }, 1000);
}

// ฟังก์ชันสร้างคำถาม
function generateQuestion() {
    const characterElement = document.querySelector('.test-character');
    const questionElement = document.querySelector('.test-question');
    const optionsContainer = document.querySelector('.test-options');
    const inputContainer = document.querySelector('.test-input-container');
    if (learningIndex >= learningOrder.length) {
        endTest();
        return;
    }
    const correctChar = learningOrder[learningIndex];
    const questionType = 'char-to-romaji';
    window.currentQuestionType = questionType;
    window.currentCorrectChar = correctChar;
    characterElement.textContent = correctChar.char;
    questionElement.textContent = 'ตัวอักษรนี้อ่านว่าอะไร?';
    if (currentMode === 'easy') {
        optionsContainer.style.display = 'grid';
        inputContainer.style.display = 'none';
        const data = currentCharacterType === 'hiragana' ? hiraganaData : katakanaData;
        const options = generateOptions(correctChar, data);
        optionsContainer.innerHTML = options.map(opt => 
            `<button class=\"test-option\" onclick=\"checkAnswer('${opt.romaji}')\">${opt.romaji}</button>`
        ).join('');
    } else {
        optionsContainer.style.display = 'none';
        inputContainer.style.display = 'flex';
        const input = inputContainer.querySelector('input');
        input.value = '';
        input.focus();
        const submitBtn = inputContainer.querySelector('.test-submit-btn');
        submitBtn.onclick = function() {
            checkAnswer(input.value.trim());
        };
        input.onkeypress = function(e) {
            if (e.key === 'Enter') {
                checkAnswer(input.value.trim());
            }
        };
    }
    document.querySelector('.current-question').textContent = learningIndex + 1;
    document.querySelector('.total-questions').textContent = learningOrder.length;
}

// ฟังก์ชันสร้างตัวเลือกสำหรับโหมดง่าย
function generateOptions(correctChar, data) {
    const options = [correctChar];
    const allChars = Object.values(data).flat();
    
    while (options.length < 4) {
        const randomChar = allChars[Math.floor(Math.random() * allChars.length)];
        if (!options.find(opt => opt.char === randomChar.char)) {
            options.push(randomChar);
        }
    }
    
    return shuffleArray(options);
}

// ฟังก์ชันตรวจคำตอบ
function checkAnswer(answer) {
    const correctChar = window.currentCorrectChar;
    const questionType = window.currentQuestionType;
    let isCorrect = false;
    if (questionType === 'char-to-romaji') {
        if (currentMode === 'easy') {
            isCorrect = (answer.toLowerCase() === correctChar.romaji);
        } else {
            isCorrect = (answer.toLowerCase() === correctChar.romaji);
        }
    } else {
        // romaji-to-char
        if (currentMode === 'easy') {
            isCorrect = (answer === correctChar.char);
        } else {
            isCorrect = (answer === correctChar.char);
        }
    }
    if (isCorrect) {
        showFeedback(true);
    } else {
        mistakes++;
        wrongAnswers.push({
            char: correctChar.char,
            romaji: correctChar.romaji,
            user: answer
        });
        updateTestInfo();
        showFeedback(false);
    }
    setTimeout(() => {
        learningIndex++;
        generateQuestion();
    }, 1000);
}

// ฟังก์ชันแสดงผลลัพธ์
function showFeedback(isCorrect) {
    const feedback = document.querySelector('.test-feedback');
    feedback.textContent = isCorrect ? 'ถูกต้อง!' : 'ผิด! ลองใหม่';
    feedback.className = `test-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedback.style.display = 'block';
    
    setTimeout(() => {
        feedback.style.display = 'none';
    }, 1000);
}

// ฟังก์ชันจบการเรียน
function endTest() {
    if (timer) clearInterval(timer);
    // เก็บ userAnswer ของทุกข้อ
    if (!window.learningAnswers) window.learningAnswers = [];
    // ถ้ายังไม่มี ให้สร้างใหม่
    if (window.learningAnswers.length !== learningOrder.length) {
        window.learningAnswers = learningOrder.map((item, idx) => {
            // หาคำตอบที่ผู้ใช้ตอบ (ถ้าตอบผิดจะอยู่ใน wrongAnswers)
            const wrong = wrongAnswers.find(w => w.char === item.char);
            return {
                char: item.char,
                romaji: item.romaji,
                user: wrong ? wrong.user : item.romaji // ควยบัค
            };
        });
    }
    
    let modal = document.getElementById('learning-result-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'learning-result-modal';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100vw';
        modal.style.height = '100vh';
        modal.style.background = 'rgba(0,0,0,0.4)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '9999';
        document.body.appendChild(modal);
    }
    const pass = wrongAnswers.length === 0;
    let html = `<div style='background:#fff;padding:2.5rem 2rem;border-radius:18px;max-width:420px;width:100%;box-shadow:0 8px 32px rgba(0,0,0,0.18);text-align:center;'>`;
    html += `<h2 style='color:${pass ? '#4ecdc4' : '#ff6b6b'};margin-bottom:1rem;'>${pass ? 'ผ่านการเรียน!' : 'ยังมีข้อผิดพลาด'}</h2>`;
    html += `<div style='font-size:1.2rem;margin-bottom:1rem;'>คะแนน: ${learningOrder.length - wrongAnswers.length}/${learningOrder.length}</div>`;
    html += `<div style='font-size:1rem;margin-bottom:1rem;'>ผิด ${wrongAnswers.length} ตัว</div>`;
    
    html += `<div style='text-align:left;margin-bottom:1rem;max-height:180px;overflow:auto;'><b>เฉลยคำตอบ:</b><ul style='padding-left:1.2em;margin:0;'>`;
    window.learningAnswers.forEach((ans, idx) => {
        const isCorrect = ans.user && ans.user.toLowerCase() === ans.romaji.toLowerCase();
        html += `<li style='margin-bottom:0.3em;display:flex;align-items:center;'>`;
        html += `<span style='font-weight:bold;font-size:1.1em;margin-right:0.5em;'>${ans.char}</span>`;
        html += `<span style='color:#888;margin-right:0.5em;'>(${ans.romaji})</span>`;
        html += isCorrect
            ? `<span style='color:#4ecdc4;font-weight:bold;margin-right:0.5em;'>✓</span>`
            : `<span style='color:#ff6b6b;font-weight:bold;margin-right:0.5em;'>✗</span>`;
        html += `<span style='color:#888;'>คำตอบของคุณ: <b>${ans.user || '-'}</b></span>`;
        html += `</li>`;
    });
    html += `</ul></div>`;
    html += `<button style='margin-top:1rem;padding:0.7rem 2rem;background:#4ecdc4;color:#fff;border:none;border-radius:50px;font-size:1.1rem;cursor:pointer;' onclick='document.getElementById("learning-result-modal").remove();startLearning(currentGroup, currentMode);'>ลองใหม่</button>`;
    html += `<button style='margin-top:1rem;margin-left:1rem;padding:0.7rem 2rem;background:#eee;color:#333;border:none;border-radius:50px;font-size:1.1rem;cursor:pointer;' onclick='document.getElementById("learning-result-modal").remove();document.querySelector(".character-selection").style.display = "block";document.querySelector(".test-section").style.display = "none";'>กลับไปเลือกกลุ่ม</button>`;
    html += `</div>`;
    modal.innerHTML = html;
}
