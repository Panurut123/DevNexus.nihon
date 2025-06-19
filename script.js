/**
 * Devnexus.nihon - เว็บไซต์เรียนรู้ภาษาญี่ปุ่นออนไลน์
 * ไฟล์ JavaScript หลัก
 */

// เริ่มต้นการทำงานเมื่อโหลด DOM เสร็จสมบูรณ์
document.addEventListener('DOMContentLoaded', function() {
    // สร้างดอกซากุระ
    createSakura();
    
    // จัดการแท็บ
    setupTabs();
    
    // เพิ่มคลาส active ให้กับลิงก์นำทางตามตำแหน่งปัจจุบัน
    highlightNavigation();
    
    // เพิ่ม event listener สำหรับการเลื่อนหน้า
    window.addEventListener('scroll', function() {
        animateOnScroll();
        highlightNavigation();
    });

    // เพิ่มการจัดการอนิเมชั่นเปลี่ยนหน้า
    setupPageTransitions();
});

/**
 * จัดการอนิเมชั่นเมื่อเปลี่ยนหน้า
 */
function setupPageTransitions() {
    // เพิ่ม event listener สำหรับลิงก์นำทาง
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // ตรวจสอบว่าเป็นลิงก์ไปยังหน้าอื่นหรือไม่ (ไม่ใช่ลิงก์ภายในหน้าเดียวกัน)
            const href = this.getAttribute('href');
            if (href.indexOf('#') !== 0 && !href.includes(window.location.pathname)) {
                e.preventDefault();
                
                // เพิ่มเอฟเฟกต์การเปลี่ยนหน้า
                const body = document.querySelector('body');
                body.style.opacity = '0';
                body.style.transition = 'opacity 0.3s ease';
                
                // หน่วงเวลาเล็กน้อยก่อนไปยังหน้าใหม่
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    });
    
    window.addEventListener('load', function() {
        const currentPath = window.location.pathname;
        const mainContent = document.querySelector('main');
        
        if (mainContent) {
            // ลบคลาสอนิเมชั่นทั้งหมดก่อน
            mainContent.classList.remove(
                'page-transition',
                'character-page-enter',
                'vocabulary-page-enter',
                'kanji-page-enter',
                'grammar-page-enter'
            );
            
            // เพิ่มคลาสอนิเมชั่นตามหน้าปัจจุบัน
            if (currentPath.includes('characters.html')) {
                mainContent.classList.add('character-page-enter');
            } else if (currentPath.includes('vocabulary.html')) {
                mainContent.classList.add('vocabulary-page-enter');
            } else if (currentPath.includes('kanji.html')) {
                mainContent.classList.add('kanji-page-enter');
            } else if (currentPath.includes('grammar.html')) {
                mainContent.classList.add('grammar-page-enter');
            } else {
                mainContent.classList.add('page-transition');
            }
        }
    });
}

/**
 * สร้างดอกซากุระสำหรับพื้นหลัง
 */
function createSakura() {
    const container = document.querySelector('.sakura-container');
    const sakuraCount = 20;
    
    for (let i = 0; i < sakuraCount; i++) {
        const sakura = document.createElement('div');
        sakura.classList.add('sakura');
        
        const size = Math.random() * 15 + 5;
        sakura.style.width = `${size}px`;
        sakura.style.height = `${size}px`;
        
        sakura.style.left = `${Math.random() * 100}%`;
        
        const duration = Math.random() * 10 + 10;
        sakura.style.animationDuration = `${duration}s`;
        
        sakura.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(sakura);
    }
}

/**
 * จัดการแท็บให้ทำงานแยกตามกลุ่ม
 */
function setupTabs() {
    // หาทุกกลุ่มแท็บในหน้า
    const tabGroups = document.querySelectorAll('.tabs');
    
    tabGroups.forEach(group => {
        const tabButtons = group.querySelectorAll('.tab-btn');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // ลบคลาส active จากปุ่มในกลุ่มเดียวกันเท่านั้น
                tabButtons.forEach(btn => btn.classList.remove('active'));
                
                // เพิ่มคลาส active ให้กับปุ่มที่ถูกคลิก
                this.classList.add('active');
                
                // หา parent container ที่ใกล้ที่สุดที่มี tab-content
                const tabContentContainer = group.nextElementSibling;
                
                if (tabContentContainer && tabContentContainer.classList.contains('tab-content')) {
                    // ซ่อนเนื้อหาแท็บทั้งหมดในกลุ่มเดียวกันเท่านั้น
                    const tabPanes = tabContentContainer.querySelectorAll('.tab-pane');
                    tabPanes.forEach(pane => pane.classList.remove('active'));
                    
                    // แสดงเนื้อหาแท็บที่เกี่ยวข้อง
                    const tabId = this.getAttribute('data-tab');
                    const targetPane = document.getElementById(`${tabId}-content`);
                    if (targetPane) {
                        targetPane.classList.add('active');
                    }
                }
            });
        });
    });
    
    // ตั้งค่าเริ่มต้นให้แท็บแรกของแต่ละกลุ่มเป็น active
    tabGroups.forEach(group => {
        const firstButton = group.querySelector('.tab-btn');
        if (firstButton) {
            firstButton.click();
        }
    });
}

// ฟังก์ชันไฮไลท์เมนูนำทาง
function highlightNavigation() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ฟังก์ชันอนิเมชันเมื่อเลื่อนหน้า
function animateOnScroll() {
    const elements = document.querySelectorAll('.slide-up, .fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// ฟังก์ชันจัดการโหมดการเรียนรู้
function setupLearningModes() {
    const modeButtons = document.querySelectorAll('.btn-small');
    
    modeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // ดึงโหมดจากปุ่มที่ถูกคลิก
            const mode = this.parentElement.querySelector('h3').textContent;
            
            // แสดงข้อความแจ้งเตือน
            alert(`คุณเลือกโหมด ${mode} - ระบบกำลังพัฒนา จะเปิดให้ใช้งานเร็วๆ นี้!`);
        });
    });
}

// ฟังก์ชันจัดการการโต้ตอบกับตัวอักษร
function setupCharacterInteraction() {
    const characterItems = document.querySelectorAll('.character-item');
    
    characterItems.forEach(item => {
        item.addEventListener('click', function() {
            const character = this.querySelector('.character').textContent;
            const romaji = this.querySelector('.romaji').textContent;
            
            // สร้างป็อปอัพแสดงข้อมูลตัวอักษร
            showCharacterPopup(character, romaji);
        });
    });
}

// ฟังก์ชันแสดงป็อปอัพข้อมูลตัวอักษร
function showCharacterPopup(character, romaji) {
    // ลบป็อปอัพเดิมถ้ามี
    const existingPopup = document.querySelector('.character-popup');
    if (existingPopup) {
        existingPopup.remove();
    }
    
    // สร้างป็อปอัพใหม่
    const popup = document.createElement('div');
    popup.classList.add('character-popup');
    
    popup.innerHTML = `
        <div class="popup-content">
            <span class="close-popup">&times;</span>
            <div class="large-character">${character}</div>
            <div class="character-info">
                <p class="romaji-large">${romaji}</p>
                <p class="pronunciation">การออกเสียง: ${getPronunciation(romaji)}</p>
                <div class="example">
                    <p>ตัวอย่างคำศัพท์:</p>
                    <p>${getExampleWord(character, romaji)}</p>
                </div>
            </div>
        </div>
    `;
    
    // เพิ่มป็อปอัพเข้าไปในเอกสาร
    document.body.appendChild(popup);
    
    // จัดการการปิดป็อปอัพ
    const closeButton = popup.querySelector('.close-popup');
    closeButton.addEventListener('click', function() {
        popup.remove();
    });
    
    // ปิดป็อปอัพเมื่อคลิกนอกพื้นที่
    window.addEventListener('click', function(e) {
        if (e.target === popup) {
            popup.remove();
        }
    });
}

// ฟังก์ชันสำหรับการออกเสียง (ตัวอย่าง)
function getPronunciation(romaji) {
    const pronunciations = {
        'a': 'อะ', 'i': 'อิ', 'u': 'อุ', 'e': 'เอะ', 'o': 'โอะ'
    };
    
    return pronunciations[romaji] || romaji;
}

// ฟังก์ชันสำหรับตัวอย่างคำศัพท์ (ตัวอย่าง)
function getExampleWord(character, romaji) {
    const examples = {
        'あ': 'あめ (ame) - ฝน',
        'い': 'いぬ (inu) - สุนัข',
        'う': 'うみ (umi) - ทะเล',
        'え': 'えき (eki) - สถานี',
        'お': 'おと (oto) - เสียง',
        'か': 'かばん (kaban) - กระเป๋า',
        'き': 'きって (kitte) - แสตมป์',
        'く': 'くつ (kutsu) - รองเท้า',
        'け': 'けいたい (keitai) - โทรศัพท์มือถือ',
        'こ': 'こども (kodomo) - เด็ก',
        'さ': 'さくら (sakura) - ดอกซากุระ',
        'し': 'しんぶん (shinbun) - หนังสือพิมพ์',
        'す': 'すし (sushi) - ซูชิ',
        'せ': 'せんせい (sensei) - ครู',
        'そ': 'そら (sora) - ท้องฟ้า',
        'ア': 'アイス (aisu) - ไอศกรีม',
        'イ': 'イス (isu) - เก้าอี้',
        'ウ': 'ウミ (umi) - ทะเล',
        'エ': 'エキ (eki) - สถานี',
        'オ': 'オト (oto) - เสียง',
        'カ': 'カメラ (kamera) - กล้อง',
        'キ': 'キーボード (kiiboodo) - แป้นพิมพ์',
        'ク': 'クラス (kurasu) - ชั้นเรียน',
        'ケ': 'ケーキ (keeki) - เค้ก',
        'コ': 'コーヒー (koohii) - กาแฟ',
        'サ': 'サッカー (sakkaa) - ฟุตบอล',
        'シ': 'シャツ (shatsu) - เสื้อเชิ้ต',
        'ス': 'スマホ (sumaho) - สมาร์ทโฟน',
        'セ': 'セーター (seetaa) - เสื้อกันหนาว',
        'ソ': 'ソファ (sofa) - โซฟา'
    };
    
    return examples[character] || `${character} (${romaji}) - ไม่มีตัวอย่าง`;
}
