// --- Logic สำหรับหน้า vocabulary.html ---

// หมวดหมู่
const categories = ['ทั้งหมด', ...Array.from(new Set(window.vocabData.map(v => v.cat)))];
let favList = JSON.parse(localStorage.getItem('vocabFavs') || '[]');
let currentCategory = 'ทั้งหมด';
let currentList = window.vocabData;

// สร้างไอคอนสำหรับแต่ละหมวดหมู่
function getCategoryIcon(category) {
    const icons = {
        'ทั้งหมด': 'fa-border-all',
        'ชีวิตประจำวัน': 'fa-calendar-day',
        'อาหาร': 'fa-utensils',
        'สถานที่': 'fa-map-marker-alt',
        'ท่องเที่ยว': 'fa-plane',
        'การเรียน': 'fa-book',
        'อาชีพ': 'fa-briefcase',
        'ครอบครัว': 'fa-users',
        'ร่างกาย': 'fa-user',
        'เตรียมสอบ': 'fa-graduation-cap'
    };
    
    return icons[category] || 'fa-tag';
}

// แสดงหมวดหมู่ในรูปแบบ dropdown
function renderCategories() {
    const categorySelect = document.querySelector('.vocab-category-filter');
    categorySelect.innerHTML = '';
    
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.text = cat;
        option.selected = cat === currentCategory;
        categorySelect.appendChild(option);
    });
    
    categorySelect.onchange = (e) => {
        currentCategory = e.target.value;
        filterVocab();
    };
}

function filterVocab() {
    if (currentCategory === 'ทั้งหมด') {
        currentList = window.vocabData;
    } else {
        currentList = window.vocabData.filter(v => v.cat === currentCategory);
    }
    renderVocabList(currentList);
}

function renderVocabList(list) {
    const container = document.querySelector('.vocab-list');
    container.innerHTML = '';
    list.forEach(vocab => {
        const card = document.createElement('div');
        card.className = 'vocab-card flashcard';
        card.innerHTML = `
            <div class="jp-word">${vocab.jp}</div>
            <div class="romaji">${vocab.romaji}</div>
            <div class="meaning">${vocab.th}</div>
            <button class="fav-btn" title="เพิ่ม/ลบคำโปรด">${favList.includes(vocab.jp) ? '★' : '☆'}</button>
        `;
        // เสียงถูกลบออกแล้ว
        // โปรด
        card.querySelector('.fav-btn').onclick = (e) => {
            e.stopPropagation();
            toggleFav(vocab.jp);
            renderVocabList(currentList);
        };
        // modal
        card.onclick = (e) => {
            if (e.target.classList.contains('audio-btn') || e.target.classList.contains('fav-btn')) return;
            showVocabModal(vocab);
        };
        container.appendChild(card);
    });
}

function showVocabModal(vocab) {
    const modal = document.getElementById('vocab-modal');
    const body = modal.querySelector('.vocab-modal-body');
    body.innerHTML = `
        ${vocab.furigana ? `<div class='furigana'>${vocab.furigana}</div>` : ''}
        <div class="jp-word">${vocab.jp}</div>
        <div class="romaji">${vocab.romaji}</div>
        <div class="meaning">${vocab.th}</div>
        <button class="fav-btn" title="เพิ่ม/ลบคำโปรด">${favList.includes(vocab.jp) ? '★' : '☆'}</button>
    `;
    // เสียงถูกลบออกแล้ว
    body.querySelector('.fav-btn').onclick = (e) => {
        e.stopPropagation();
        toggleFav(vocab.jp);
        showVocabModal(vocab);
    };
    modal.style.display = 'flex';
}

// ปิด modal
const modal = document.getElementById('vocab-modal');
if (modal) {
    modal.querySelector('.vocab-modal-close').onclick = () => modal.style.display = 'none';
    modal.querySelector('.vocab-modal-bg').onclick = () => modal.style.display = 'none';
}

function speakJP(text) {
    if ('speechSynthesis' in window) {
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'ja-JP';
        window.speechSynthesis.speak(utter);
    } else {
        alert('เบราว์เซอร์ของคุณไม่รองรับเสียงพูด');
    }
}

function toggleFav(jp) {
    if (favList.includes(jp)) {
        favList = favList.filter(x => x !== jp);
    } else {
        favList.push(jp);
    }
    localStorage.setItem('vocabFavs', JSON.stringify(favList));
}

// ค้นหา
const searchInput = document.querySelector('.vocab-search');
if (searchInput) {
    searchInput.addEventListener('input', e => {
        const q = e.target.value.trim();
        filterVocab();
        if (q) {
            currentList = currentList.filter(v => v.jp.includes(q) || v.romaji.includes(q) || v.th.includes(q));
        }
        renderVocabList(currentList);
    });
}

// สุ่มคำศัพท์
const randomBtn = document.querySelector('.vocab-random-btn');
let currentRandomWord = null;

function showRandomWord() {
    if (currentList.length === 0) return;
    currentRandomWord = currentList[Math.floor(Math.random() * currentList.length)];
    showVocabModal(currentRandomWord);
}

if (randomBtn) {
    randomBtn.onclick = (e) => {
        e.preventDefault();
        showRandomWord();
    };
}

// เพิ่มปุ่ม Next สำหรับสุ่มคำถัดไป
function addRandomNavigationButtons() {
    const modal = document.getElementById('vocab-modal');
    if (!modal) return;
    
    // เพิ่มปุ่ม Next ถ้ายังไม่มี
    if (!modal.querySelector('.random-next-btn')) {
        const nextBtn = document.createElement('button');
        nextBtn.className = 'random-next-btn';
        nextBtn.innerHTML = 'ถัดไป &rarr;';
        nextBtn.onclick = (e) => {
            e.stopPropagation();
            showRandomWord();
        };
        modal.querySelector('.vocab-modal-content').appendChild(nextBtn);
    }
}

// เรียกเมื่อโหลดหน้าเว็บ
addRandomNavigationButtons();

// ดูคำโปรดในหน้าต่างป๊อปอัพ
function showFavoritesModal() {
    const modal = document.getElementById('favorites-modal');
    const list = modal.querySelector('.favorites-list');
    list.innerHTML = '';
    
    const favoriteItems = window.vocabData.filter(v => favList.includes(v.jp));
    
    if (favoriteItems.length === 0) {
        list.innerHTML = '<p class="no-favorites">คุณยังไม่มีคำศัพท์ที่ชอบ</p>';
    } else {
        favoriteItems.forEach(vocab => {
            const card = document.createElement('div');
            card.className = 'vocab-card flashcard';
            card.innerHTML = `
                <div class="jp-word">${vocab.jp}</div>
                <div class="romaji">${vocab.romaji}</div>
                <div class="meaning">${vocab.th}</div>
                <button class="fav-btn" title="เพิ่ม/ลบคำโปรด">★</button>
            `;
            
            // โปรด
            card.querySelector('.fav-btn').onclick = (e) => {
                e.stopPropagation();
                toggleFav(vocab.jp);
                showFavoritesModal(); // อัปเดตรายการโปรดทันที
            };
            
            // modal
            card.onclick = (e) => {
                if (e.target.classList.contains('fav-btn')) return;
                modal.style.display = 'none'; // ปิด favorites modal
                showVocabModal(vocab); // เปิด vocab modal
            };
            
            list.appendChild(card);
        });
    }
    
    modal.style.display = 'flex';
}

// ปุ่มดูคำโปรด
const favBtn = document.querySelector('.vocab-fav-btn');
if (favBtn) {
    favBtn.onclick = () => {
        showFavoritesModal();
    };
}

// ปิด favorites modal
const favoritesModal = document.getElementById('favorites-modal');
if (favoritesModal) {
    favoritesModal.querySelector('.vocab-modal-close').onclick = () => favoritesModal.style.display = 'none';
    favoritesModal.querySelector('.vocab-modal-bg').onclick = () => favoritesModal.style.display = 'none';
}

// ปุ่มไปทำแบบทดสอบ
const goQuizBtn = document.querySelector('.go-quiz-btn');
if (goQuizBtn) {
    goQuizBtn.onclick = () => {
        window.location.href = 'quiz.html';
    };
}

// โหลดเริ่มต้น
window.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderVocabList(window.vocabData);
}); 
