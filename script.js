/* ===== ตัวแปรและการตั้งค่าพื้นฐาน ===== */
:root {
    --primary-color: #ff6b6b;
    --secondary-color: #4ecdc4;
    --accent-color: #ff9f43;
    --dark-color: #2d3436;
    --light-color: #f9f9f9;
    --font-jp: 'Noto Sans JP', sans-serif;
    --font-th: 'Noto Sans Thai', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-th);
    background-color: var(--light-color);
    color: var(--dark-color);
    overflow-x: hidden;
    position: relative;
}

/* ===== อนิเมชั่นและเอฟเฟกต์ ===== */
/* ---- อนิเมชั่นดอกซากุระ ---- */
.sakura-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    overflow: hidden;
}

@keyframes falling {
    0% {
        transform: translateY(-10%) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
    }
}

.sakura {
    position: absolute;
    background-color: #ffd7e9;
    border-radius: 50% 0 50% 50%;
    animation: falling linear infinite;
}

/* ===== อนิเมชั่นเปลี่ยนหน้า ===== */
@keyframes pageTransition {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.page-transition {
    animation: pageTransition 0.8s ease-out forwards;
}

/* อนิเมชั่นเฉพาะสำหรับแต่ละหน้า */
@keyframes characterPageEnter {
    0% {
        opacity: 0;
        transform: translateX(-50px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes vocabularyPageEnter {
    0% {
        opacity: 0;
        transform: scale(0.9);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes kanjiPageEnter {
    0% {
        opacity: 0;
        transform: translateY(-30px) scale(0.95);
    }
    100% {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

@keyframes grammarPageEnter {
    0% {
        opacity: 0;
        transform: translateX(50px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

.character-page-enter {
    animation: characterPageEnter 0.8s ease-out forwards;
}

.vocabulary-page-enter {
    animation: vocabularyPageEnter 0.8s ease-out forwards;
}

.kanji-page-enter {
    animation: kanjiPageEnter 0.8s ease-out forwards;
}

.grammar-page-enter {
    animation: grammarPageEnter 0.8s ease-out forwards;
}

/* ---- Animations ---- */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.fade-in {
    opacity: 0;
    animation: fadeIn 1s forwards;
}

.delay-1 {
    animation-delay: 0.3s;
}

.delay-2 {
    animation-delay: 0.6s;
}

.delay-3 {
    animation-delay: 0.9s;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.slide-up {
    opacity: 0;
    animation: slideUp 0.8s forwards;
}

/* ===== คอมโพเนนต์หลัก ===== */
/* ---- Header & Navigation ---- */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 5%;
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

.logo h1 {
    font-size: 1.8rem;
    font-weight: 700;
}

.logo-dev {
    color: var(--dark-color);
}

.logo-nihon {
    color: var(--primary-color);
}

nav ul {
    display: flex;
    list-style: none;
    gap: 2rem;
}

nav a {
    text-decoration: none;
    color: var(--dark-color);
    font-weight: 500;
    position: relative;
    padding: 0.5rem 0;
    transition: color 0.3s;
}

nav a:hover, nav a.active {
    color: var(--primary-color);
}

nav a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: width 0.3s;
}

nav a:hover::after, nav a.active::after {
    width: 100%;
}

/* ---- ปุ่มและองค์ประกอบการโต้ตอบ ---- */
.btn {
    display: inline-block;
    padding: 0.8rem 1.8rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
    border: 2px solid transparent;
}

.btn.primary {
    background-color: var(--primary-color);
    color: white;
}

.btn.primary:hover {
    background-color: transparent;
    border-color: var(--primary-color);
    color: var(--primary-color);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(255, 107, 107, 0.2);
}

.btn.secondary {
    background-color: transparent;
    border-color: var(--secondary-color);
    color: var(--secondary-color);
}

.btn.secondary:hover {
    background-color: var(--secondary-color);
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(78, 205, 196, 0.2);
}

.btn-small {
    display: inline-block;
    padding: 0.5rem 1.2rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
    background-color: var(--light-color);
    color: var(--dark-color);
    border: 1px solid #ddd;
}

.btn-small:hover {
    background-color: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
}

/* ---- แท็บและแผงควบคุม ---- */
.tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
}

.tab-btn {
    padding: 0.8rem 2rem;
    background-color: transparent;
    border: none;
    border-bottom: 3px solid #ddd;
    font-family: var(--font-th);
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
}

.tab-btn.active {
    border-color: var(--primary-color);
    color: var(--primary-color);
}

.tab-content {
    max-width: 800px;
    margin: 0 auto;
}

.tab-pane {
    display: none;
    animation: fadeIn 0.5s;
}

.tab-pane.active {
    display: block;
}

/* ---- การ์ดและคอนเทนเนอร์ ---- */
.card {
    background-color: white;
    border-radius: 15px;
    padding: 2rem;
    width: 300px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.card-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    font-size: 2rem;
    color: white;
}

.card-icon.easy {
    background-color: var(--secondary-color);
}

.card-icon.medium {
    background-color: var(--accent-color);
}

.card-icon.hard {
    background-color: var(--primary-color);
}

.card h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.card p {
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

/* ===== ส่วนต่างๆ ของหน้าเว็บ ===== */
/* ---- Hero Section ---- */
.hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 80vh;
    padding: 0 5%;
    background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%);
}

.hero-content {
    flex: 1;
    max-width: 600px;
}

.hero h2 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    line-height: 1.2;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #555;
}

.accent {
    color: var(--primary-color);
    position: relative;
    display: inline-block;
}

.accent::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
    height: 8px;
    background-color: rgba(255, 107, 107, 0.3);
    z-index: -1;
}

.cta-buttons {
    display: flex;
    gap: 1rem;
}

.hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.hero-image img {
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    transform: perspective(1000px) rotateY(-10deg);
    transition: transform 0.5s;
}

.hero-image img:hover {
    transform: perspective(1000px) rotateY(0deg);
}

/* ---- Features Section ---- */
.features {
    padding: 5rem 5%;
    background-color: white;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: var(--primary-color);
}

.feature-cards {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
}

/* ---- Preview Section ---- */
.preview {
    padding: 5rem 5%;
    background-color: #f5f7fa;
}

.character-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.character-item {
    background-color: white;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    text-align: center;
    transition: transform 0.3s;
    cursor: pointer;
}

.character-item:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.character {
    font-family: var(--font-jp);
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.romaji {
    font-size: 0.9rem;
    color: #666;
}

.tab-pane .btn {
    display: block;
    width: fit-content;
    margin: 0 auto;
}

/* ---- ส่วนคำศัพท์และไวยากรณ์ ---- */
.vocabulary {
    padding: 5rem 5%;
    background-color: white;
}

.vocab-item {
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px dashed #eee;
}

.vocab-item:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
}

.japanese {
    font-family: var(--font-jp);
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
}

.romaji {
    font-style: italic;
    color: #666;
    margin-bottom: 0.3rem;
}

.meaning {
    font-weight: 500;
    color: var(--dark-color);
}

/* ---- ส่วนคำศัพท์ภาษาญี่ปุ่น ---- */
.vocabulary-section {
    padding: 2rem;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    margin-bottom: 2rem;
}

.vocabulary-title {
    font-size: 1.8rem;
    color: var(--dark-color);
    margin-bottom: 1.5rem;
    border-bottom: 2px solid var(--accent-color);
    padding-bottom: 0.5rem;
    text-align: center;
}

.vocabulary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
}

.vocab-card {
    background-color: #f9f9f9;
    border-radius: 10px;
    padding: 1.5rem;
    border-left: 4px solid var(--accent-color);
    transition: transform 0.3s, box-shadow 0.3s;
}

.vocab-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.vocab-term {
    font-family: var(--font-jp);
    font-size: 1.5rem;
    color: var(--dark-color);
    margin-bottom: 0.5rem;
}

.vocab-reading {
    font-family: var(--font-jp);
    font-size: 1rem;
    color: #555;
    margin-bottom: 0.5rem;
}

.vocab-meaning {
    font-size: 1rem;
    color: #333;
}

/* ---- ส่วนคันจิภาษาญี่ปุ่น ---- */
.kanji-section {
    padding: 2.5rem;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    margin-bottom: 2.5rem;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}

.kanji-title {
    font-size: 2rem;
    color: var(--dark-color);
    margin-bottom: 2rem;
    border-bottom: 2px solid var(--secondary-color);
    padding-bottom: 0.8rem;
    text-align: center;
    position: relative;
}

.kanji-title::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background-color: var(--secondary-color);
}

.kanji-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1.8rem;
    margin: 0 auto;
}

.kanji-card {
    background-color: white;
    border-radius: 12px;
    padding: 1.8rem 1.2rem;
    text-align: center;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
    border: 1px solid #f0f0f0;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
}

.kanji-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: var(--secondary-color);
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.kanji-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(78, 205, 196, 0.15);
}

.kanji-card:hover::before {
    transform: scaleX(1);
}

.kanji-character {
    font-family: var(--font-jp);
    font-size: 3.5rem;
    color: var(--dark-color);
    margin-bottom: 1rem;
    line-height: 1.2;
    display: block;
}

.kanji-readings {
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 0.8rem;
    margin-bottom: 0.8rem;
}

.kanji-reading {
    font-size: 0.95rem;
    color: #555;
    margin-bottom: 0.5rem;
    display: block;
}

.kanji-reading-label {
    font-weight: 600;
    color: var(--secondary-color);
    font-size: 0.8rem;
    margin-right: 0.3rem;
}

.kanji-meaning {
    font-size: 1rem;
    color: #333;
    font-weight: 500;
    border-top: 1px dashed #eee;
    padding-top: 0.8rem;
}

/* ---- ส่วนฝึกฝนทักษะภาษาญี่ปุ่น ---- */
.practice-section {
    padding: 4rem 5%;
    background-color: #e8ecf1;
    text-align: center;
    margin: 0 auto;
}

.practice-container {
    max-width: 1200px;
    margin: 0 auto;
}

.practice-title {
    font-size: 2.2rem;
    color: var(--dark-color);
    margin-bottom: 2.5rem;
    position: relative;
}

.practice-title::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: var(--primary-color);
}

.practice-description {
    font-size: 1.1rem;
    color: #555;
    max-width: 800px;
    margin: 0 auto 3rem auto;
    line-height: 1.7;
}

.practice-options {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1000px;
}

.practice-card {
    background-color: white;
    border-radius: 15px;
    padding: 2.5rem 2rem;
    width: 300px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
}

.practice-card::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
    transform: scaleX(0);
    transition: transform 0.4s ease;
    transform-origin: left;
}

.practice-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.practice-card:hover::after {
    transform: scaleX(1);
}

.practice-card-icon {
    font-size: 2.8rem;
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    background-color: rgba(255, 107, 107, 0.1);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    transition: all 0.3s ease;
}

.practice-card:hover .practice-card-icon {
    background-color: var(--primary-color);
    color: white;
    transform: scale(1.1);
}

.practice-card h3 {
    font-size: 1.5rem;
    color: var(--dark-color);
    margin-bottom: 1rem;
}

.practice-card p {
    font-size: 1rem;
    color: #666;
    line-height: 1.7;
    margin-bottom: 1.8rem;
}

.practice-card .btn-small {
    padding: 0.7rem 1.5rem;
    font-weight: 600;
    transition: all 0.3s ease;
}

.practice-card:hover .btn-small {
    background-color: var(--primary-color);
    color: white;
}

/* ---- ส่วนไวยากรณ์ภาษาญี่ปุ่น ---- */
.grammar-section {
    padding: 2.5rem;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    margin-bottom: 2.5rem;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
}

.grammar-title {
    font-size: 1.8rem;
    color: var(--dark-color);
    margin-bottom: 2rem;
    border-bottom: 2px solid var(--primary-color);
    padding-bottom: 0.8rem;
    position: relative;
}

.grammar-title::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 80px;
    height: 2px;
    background-color: var(--primary-color);
}

.grammar-item {
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 1px dashed #eee;
}

.grammar-item:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
}

.grammar-item h3 {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-bottom: 1.2rem;
    display: flex;
    align-items: center;
}

.grammar-item h3::before {
    content: '文法';
    font-family: var(--font-jp);
    font-size: 0.8rem;
    background-color: var(--primary-color);
    color: white;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    margin-right: 0.8rem;
}

.grammar-pattern {
    background-color: #f9f9f9;
    padding: 1.8rem;
    border-radius: 10px;
    border-left: 4px solid var(--secondary-color);
    margin-bottom: 1.5rem;
}

.pattern {
    font-family: var(--font-jp);
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 500;
    color: var(--dark-color);
    border-bottom: 1px dashed #ddd;
    padding-bottom: 0.8rem;
}

.pattern-romaji {
    font-style: italic;
    color: #666;
    margin-bottom: 0.5rem;
    font-size: 1rem;
}

.explanation {
    color: #444;
    margin-bottom: 1.5rem;
    font-size: 1.05rem;
    line-height: 1.7;
}

.grammar-notes {
    background-color: rgba(255, 159, 67, 0.1);
    border-left: 3px solid var(--accent-color);
    padding: 1.2rem;
    border-radius: 0 8px 8px 0;
    margin-bottom: 1.5rem;
}

.grammar-notes h4 {
    color: var(--accent-color);
    margin-bottom: 0.8rem;
    font-size: 1.1rem;
}

.grammar-notes p {
    color: #555;
    font-size: 0.95rem;
    line-height: 1.6;
}

.example {
    background-color: rgba(78, 205, 196, 0.1);
    padding: 1.5rem;
    border-radius: 8px;
    margin-top: 1.5rem;
    border: 1px solid rgba(78, 205, 196, 0.2);
}

.example-title {
    font-weight: 600;
    color: var(--secondary-color);
    margin-bottom: 1rem;
    font-size: 1.1rem;
    border-bottom: 1px dashed rgba(78, 205, 196, 0.3);
    padding-bottom: 0.5rem;
}

.japanese {
    font-family: var(--font-jp);
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: var(--dark-color);
}

.romaji {
    font-style: italic;
    color: #666;
    margin-bottom: 0.5rem;
    font-size: 1rem;
}

.meaning {
    font-weight: 500;
    color: var(--dark-color);
    font-size: 1.05rem;
}

.usage-notes {
    margin-top: 1.5rem;
    background-color: #f9f9f9;
    padding: 1.2rem;
    border-radius: 8px;
}

.usage-notes h4 {
    color: var(--dark-color);
    margin-bottom: 0.8rem;
    font-size: 1.1rem;
}

.usage-notes ul {
    padding-left: 1.5rem;
}

.usage-notes li {
    margin-bottom: 0.5rem;
    color: #555;
    line-height: 1.6;
}

/* ปรับแต่งสำหรับอุปกรณ์มือถือ */
@media (max-width: 768px) {
    .kanji-grid {
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        gap: 1.2rem;
    }
    
    .kanji-character {
        font-size: 2.8rem;
    }
    
    .practice-card {
        width: 100%;
        max-width: 350px;
    }
    
    .grammar-pattern {
        padding: 1.2rem;
    }
    
    .pattern {
        font-size: 1.3rem;
    }
    
    .japanese {
        font-size: 1.1rem;
    }
}

@media (max-width: 480px) {
    .kanji-grid {
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    }
    
    .kanji-character {
        font-size: 2.5rem;
    }
    
    .practice-title, .kanji-title, .grammar-title {
        font-size: 1.6rem;
    }
    
    .practice-card-icon {
        width: 60px;
        height: 60px;
        font-size: 2rem;
    }
}

/* ---- Footer ---- */
footer {
    background-color: var(--dark-color);
    color: white;
    padding: 4rem 5% 2rem;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 3rem;
}

.footer-logo h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
}

.footer-logo p {
    color: #aaa;
}

.footer-links h3, .footer-contact h3 {
    margin-bottom: 1.2rem;
    font-size: 1.2rem;
}

.footer-links ul {
    list-style: none;
}

.footer-links a {
    color: #aaa;
    text-decoration: none;
    display: block;
    margin-bottom: 0.8rem;
    transition: color 0.3s;
}

.footer-links a:hover {
    color: var(--primary-color);
}

.footer-contact p {
    color: #aaa;
    margin-bottom: 1rem;
}

.social-icons {
    display: flex;
    gap: 1rem;
}

.social-icons a {
    color: white;
    background-color: rgba(255, 255, 255, 0.1);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
}

.social-icons a:hover {
    background-color: var(--primary-color);
    transform: translateY(-3px);
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: #aaa;
    font-size: 0.9rem;
}

/* ---- Animations ---- */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.fade-in {
    opacity: 0;
    animation: fadeIn 1s forwards;
}

.delay-1 {
    animation-delay: 0.3s;
}

.delay-2 {
    animation-delay: 0.6s;
}

.delay-3 {
    animation-delay: 0.9s;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.slide-up {
    opacity: 0;
    animation: slideUp 0.8s forwards;
}

@media (max-width: 992px) {
    .hero {
        flex-direction: column;
        text-align: center;
        gap: 3rem;
    }
    
    .cta-buttons {
        justify-content: center;
    }
    
    .hero-image img {
        transform: none;
    }
    
    .feature-cards {
        gap: 1.5rem;
    }
}

@media (max-width: 768px) {
    header {
        flex-direction: column;
        gap: 1rem;
    }
    
    nav ul {
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .hero h2 {
        font-size: 2.5rem;
    }
    
    .footer-content {
        flex-direction: column !important;
        align-items: flex-start !important;
        gap: 2rem !important;
    }
    
    .footer-links, .footer-contact {
        margin-top: 1.5rem !important;
        width: 100% !important;
        text-align: left !important;
    }
    
    .footer-logo {
        margin-bottom: 1rem !important;
    }
    
    .social-icons {
        justify-content: center;
    }
    
    .vocabulary-grid {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
    
    .kanji-grid {
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    }
    
    .kanji-character {
        font-size: 2.5rem;
    }
    
    .practice-card {
        width: 100%;
    }
}

@media (max-width: 480px) {
    .hero h2 {
        font-size: 2rem;
    }
    
    .cta-buttons {
        flex-direction: column;
        gap: 1rem;
    }
    
    .card {
        width: 100%;
    }
    
    .vocabulary-title, .kanji-title, .practice-title {
        font-size: 1.6rem;
    }
    
    .practice-title {
        font-size: 1.8rem;
    }
    
    .vocab-term {
        font-size: 1.3rem;
    }
    
    .footer-content {
        gap: 1rem !important;
        padding: 1.2rem 0.5rem !important;
    }
    
    .footer-logo h2 {
        font-size: 1.2rem !important;
    }
    
    .footer-logo p {
        font-size: 0.9rem !important;
    }
}

.learning-hero {
    background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%);
    padding: 6rem 5%;
    text-align: center;
    position: relative;
    overflow: hidden;
    margin-top: 4rem;
}

@media (max-width: 768px) {
    .learning-hero {
        margin-top: 2.5rem;
    }
}
