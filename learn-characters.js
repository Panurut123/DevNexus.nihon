// ข้อมูลตัวอักษรญี่ปุ่นแบบละเอียด
const characterData = {
    hiragana: {
        basic: [
            { char: 'あ', romaji: 'a', meaning: 'สระ "อะ"', tip: 'คล้ายตัว A ที่มีขีดข้าง', example: 'あり (มด)' },
            { char: 'い', romaji: 'i', meaning: 'สระ "อิ"', tip: 'คล้ายตัว E ที่หัน', example: 'いけ (บ่อ)' },
            { char: 'う', romaji: 'u', meaning: 'สระ "อุ"', tip: 'คล้ายตัว U ที่มีหาง', example: 'うみ (ทะเล)' },
            { char: 'え', romaji: 'e', meaning: 'สระ "เอะ"', tip: 'คล้ายรูปนก', example: 'えき (สถานี)' },
            { char: 'お', romaji: 'o', meaning: 'สระ "โอะ"', tip: 'คล้ายรูปตะขอ', example: 'おかし (ขนม)' }
        ],
        k_group: [
            { char: 'か', romaji: 'ka', meaning: 'เสียง "กะ"', tip: 'มีส่วนของ "力" (แรง)', example: 'かみ (กระดาษ/เทพ)' },
            { char: 'き', romaji: 'ki', meaning: 'เสียง "กิ"', tip: 'คล้ายกุญแจ', example: 'きれい (สวย)' },
            { char: 'く', romaji: 'ku', meaning: 'เสียง "กุ"', tip: 'คล้ายปาก', example: 'くるま (รถ)' },
            { char: 'け', romaji: 'ke', meaning: 'เสียง "เกะ"', tip: 'คล้ายรูปเก', example: 'けが (บาดเจ็บ)' },
            { char: 'こ', romaji: 'ko', meaning: 'เสียง "โกะ"', tip: 'มีสองขีด', example: 'ここ (ที่นี่)' }
        ],
        s_group: [
            { char: 'さ', romaji: 'sa', meaning: 'เสียง "ซะ"', tip: 'คล้ายงู', example: 'さかな (ปลา)' },
            { char: 'し', romaji: 'shi', meaning: 'เสียง "ชิ"', tip: 'คล้ายตัว C ที่มีหาง', example: 'しお (เกลือ)' },
            { char: 'す', romaji: 'su', meaning: 'เสียง "ซุ"', tip: 'คล้ายรูปหงส์', example: 'すし (ซูชิ)' },
            { char: 'せ', romaji: 'se', meaning: 'เสียง "เซะ"', tip: 'คล้ายรูปเส', example: 'せんせい (ครู)' },
            { char: 'そ', romaji: 'so', meaning: 'เสียง "โซะ"', tip: 'คล้ายตัว Z ที่ผกผัน', example: 'そら (ท้องฟ้า)' }
        ],
        t_group: [
            { char: 'た', romaji: 'ta', meaning: 'เสียง "ตะ"', tip: 'มีเส้นตรงข้าม', example: 'たべる (กิน)' },
            { char: 'ち', romaji: 'chi', meaning: 'เสียง "จิ"', tip: 'คล้ายตัวเลข 5', example: 'ちいさい (เล็ก)' },
            { char: 'つ', romaji: 'tsu', meaning: 'เสียง "ซุ"', tip: 'คล้ายรูปน้ำ', example: 'つき (ดวงจันทร์)' },
            { char: 'て', romaji: 'te', meaning: 'เสียง "เตะ"', tip: 'คล้ายมือ', example: 'て (มือ)' },
            { char: 'と', romaji: 'to', meaning: 'เสียง "โตะ"', tip: 'คล้ายตัว C ที่มีขีด', example: 'とり (นก)' }
        ],
        n_group: [
            { char: 'な', romaji: 'na', meaning: 'เสียง "นะ"', tip: 'คล้ายตัว N ที่โค้ง', example: 'なまえ (ชื่อ)' },
            { char: 'に', romaji: 'ni', meaning: 'เสียง "นิ"', tip: 'คล้ายตัวเลข 2', example: 'にほん (ญี่ปุ่น)' },
            { char: 'ぬ', romaji: 'nu', meaning: 'เสียง "นุ"', tip: 'คล้ายสุนัข', example: 'ぬし (เจ้าของ)' },
            { char: 'ね', romaji: 'ne', meaning: 'เสียง "เนะ"', tip: 'คล้ายแมว', example: 'ねこ (แมว)' },
            { char: 'の', romaji: 'no', meaning: 'เสียง "โนะ"', tip: 'คล้ายเป็นวงกลม', example: 'の (ของ)' }
        ],
        h_group: [
            { char: 'は', romaji: 'ha', meaning: 'เสียง "ฮะ"', tip: 'มีสองส่วน', example: 'はな (ดอกไม้/จมูก)' },
            { char: 'ひ', romaji: 'hi', meaning: 'เสียง "ฮิ"', tip: 'คล้ายหน้ายิ้ม', example: 'ひと (คน)' },
            { char: 'ふ', romaji: 'fu', meaning: 'เสียง "ฟุ"', tip: 'คล้ายภูเขา', example: 'ふゆ (ฤดูหนาว)' },
            { char: 'へ', romaji: 'he', meaning: 'เสียง "เฮะ"', tip: 'คล้ายรูปภูเขา', example: 'へや (ห้อง)' },
            { char: 'ほ', romaji: 'ho', meaning: 'เสียง "โฮะ"', tip: 'มีจุดตรงกลาง', example: 'ほん (หนังสือ)' }
        ],
        m_group: [
            { char: 'ま', romaji: 'ma', meaning: 'เสียง "มะ"', tip: 'คล้ายรูปใส', example: 'まど (หน้าต่าง)' },
            { char: 'み', romaji: 'mi', meaning: 'เสียง "มิ"', tip: 'คล้ายตัวเลข 3', example: 'みず (น้ำ)' },
            { char: 'む', romaji: 'mu', meaning: 'เสียง "มุ"', tip: 'คล้ายวงกลมที่มีขีด', example: 'むし (แมลง)' },
            { char: 'め', romaji: 'me', meaning: 'เสียง "เมะ"', tip: 'คล้ายตา', example: 'め (ตา)' },
            { char: 'も', romaji: 'mo', meaning: 'เสียง "โมะ"', tip: 'คล้ายตัว M ที่โค้ง', example: 'もの (สิ่งของ)' }
        ],
        y_group: [
            { char: 'や', romaji: 'ya', meaning: 'เสียง "ยะ"', tip: 'คล้ายรูปใบไผ่', example: 'やま (ภูเขา)' },
            { char: 'ゆ', romaji: 'yu', meaning: 'เสียง "ยุ"', tip: 'คล้ายกบ', example: 'ゆき (หิมะ)' },
            { char: 'よ', romaji: 'yo', meaning: 'เสียง "โยะ"', tip: 'คล้ายตัว C ที่มีขีดข้าง', example: 'よる (กลางคืน)' }
        ],
        r_group: [
            { char: 'ら', romaji: 'ra', meaning: 'เสียง "ระ"', tip: 'คล้ายใบไม้', example: 'らいねん (ปีหน้า)' },
            { char: 'り', romaji: 'ri', meaning: 'เสียง "ริ"', tip: 'คล้ายตัว I ที่โค้ง', example: 'りんご (แอปเปิล)' },
            { char: 'る', romaji: 'ru', meaning: 'เสียง "รุ"', tip: 'คล้ายตัวอ่าน', example: 'るす (ไม่อยู่บ้าน)' },
            { char: 'れ', romaji: 're', meaning: 'เสียง "เระ"', tip: 'คล้ายตัว L ที่โค้ง', example: 'れい (ศูนย์)' },
            { char: 'ろ', romaji: 'ro', meaning: 'เสียง "โระ"', tip: 'คล้ายตัวเลข 3 ที่ตัดครึ่ง', example: 'ろく (หก)' }
        ],
        w_group: [
            { char: 'わ', romaji: 'wa', meaning: 'เสียง "วะ"', tip: 'คล้ายรูปลูกโซ่', example: 'わたし (ฉัน)' },
            { char: 'を', romaji: 'wo/o', meaning: 'อนุภาค', tip: 'ใช้เป็นอนุภาคเท่านั้น', example: 'りんごを (แอปเปิล+อนุภาค)' },
            { char: 'ん', romaji: 'n', meaning: 'เสียง "น"', tip: 'อยู่ท้ายคำ', example: 'にほん (ญี่ปุ่น)' }
        ]
    },
    katakana: {
        basic: [
            { char: 'ア', romaji: 'a', meaning: 'สระ "อะ"', tip: 'คล้ายตัว A ที่เหลี่ยม', example: 'アメリカ (อเมริกา)' },
            { char: 'イ', romaji: 'i', meaning: 'สระ "อิ"', tip: 'คล้ายตัว I ที่มีขีด', example: 'イタリア (อิตาลี)' },
            { char: 'ウ', romaji: 'u', meaning: 'สระ "อุ"', tip: 'คล้ายตัว U ที่เหลี่ยม', example: 'ウール (ขนสัตว์)' },
            { char: 'エ', romaji: 'e', meaning: 'สระ "เอะ"', tip: 'คล้ายบันได', example: 'エレベーター (ลิฟต์)' },
            { char: 'オ', romaji: 'o', meaning: 'สระ "โอะ"', tip: 'คล้ายรูปไม้กางเขน', example: 'オレンジ (ส้ม)' }
        ],
        k_group: [
            { char: 'カ', romaji: 'ka', meaning: 'เสียง "กะ"', tip: 'คล้ายตัว K', example: 'カメラ (กล้อง)' },
            { char: 'キ', romaji: 'ki', meaning: 'เสียง "กิ"', tip: 'คล้ายกุญแจเหลี่ยม', example: 'キー (กุญแจ)' },
            { char: 'ク', romaji: 'ku', meaning: 'เสียง "กุ"', tip: 'คล้ายปากเหลี่ยม', example: 'クリーム (ครีม)' },
            { char: 'ケ', romaji: 'ke', meaning: 'เสียง "เกะ"', tip: 'คล้ายบ้าน', example: 'ケーキ (เค้ก)' },
            { char: 'コ', romaji: 'ko', meaning: 'เสียง "โกะ"', tip: 'สองขีดเหลี่ยม', example: 'コーヒー (กาแฟ)' }
        ],
        s_group: [
            { char: 'サ', romaji: 'sa', meaning: 'เสียง "ซะ"', tip: 'คล้ายไผ่', example: 'サラダ (สลัด)' },
            { char: 'シ', romaji: 'shi', meaning: 'เสียง "ชิ"', tip: 'คล้ายเซาส์', example: 'シャツ (เสื้อเชิ้ต)' },
            { char: 'ス', romaji: 'su', meaning: 'เสียง "ซุ"', tip: 'คล้ายตัว S', example: 'スープ (ซุป)' },
            { char: 'セ', romaji: 'se', meaning: 'เสียง "เซะ"', tip: 'คล้ายเซ็ต', example: 'セット (เซต)' },
            { char: 'ソ', romaji: 'so', meaning: 'เสียง "โซะ"', tip: 'คล้ายซิก-แซก', example: 'ソース (ซอส)' }
        ],
        t_group: [
            { char: 'タ', romaji: 'ta', meaning: 'เสียง "ตะ"', tip: 'คล้ายตัว T', example: 'タクシー (แท็กซี่)' },
            { char: 'チ', romaji: 'chi', meaning: 'เสียง "จิ"', tip: 'คล้ายเข็ม', example: 'チーズ (ชีส)' },
            { char: 'ツ', romaji: 'tsu', meaning: 'เสียง "ซุ"', tip: 'คล้ายหน้ายิ้ม', example: 'ツアー (ทัวร์)' },
            { char: 'テ', romaji: 'te', meaning: 'เสียง "เตะ"', tip: 'คล้ายเต้นท์', example: 'テスト (เทส)' },
            { char: 'ト', romaji: 'to', meaning: 'เสียง "โตะ"', tip: 'คล้ายตัว T ที่ตัดครึ่ง', example: 'トマト (มะเขือเทศ)' }
        ],
        n_group: [
            { char: 'ナ', romaji: 'na', meaning: 'เสียง "นะ"', tip: 'คล้ายตัว + ที่เอียง', example: 'ナイフ (มีด)' },
            { char: 'ニ', romaji: 'ni', meaning: 'เสียง "นิ"', tip: 'สองขีดนอน', example: 'ニュース (ข่าว)' },
            { char: 'ヌ', romaji: 'nu', meaning: 'เสียง "นุ"', tip: 'คล้ายตัว N ที่เหลี่ยม', example: 'ヌードル (บะหมี่)' },
            { char: 'ネ', romaji: 'ne', meaning: 'เสียง "เนะ"', tip: 'คล้ายเน็ต', example: 'ネット (เน็ต)' },
            { char: 'ノ', romaji: 'no', meaning: 'เสียง "โนะ"', tip: 'ขีดเฉียง', example: 'ノート (โน้ต)' }
        ],
        h_group: [
            { char: 'ハ', romaji: 'ha', meaning: 'เสียง "ฮะ"', tip: 'คล้ายตัว X ครึ่งบน', example: 'ハンバーガー (แฮมเบอร์เกอร์)' },
            { char: 'ヒ', romaji: 'hi', meaning: 'เสียง "ฮิ"', tip: 'คล้ายตัว H ครึ่งซ้าย', example: 'ヒーター (ฮีทเตอร์)' },
            { char: 'フ', romaji: 'fu', meaning: 'เสียง "ฟุ"', tip: 'คล้ายรูปฟัน', example: 'フォーク (ส้อม)' },
            { char: 'ヘ', romaji: 'he', meaning: 'เสียง "เฮะ"', tip: 'คล้ายตัว /\\ บน', example: 'ヘルメット (หมวกกันน็อค)' },
            { char: 'ホ', romaji: 'ho', meaning: 'เสียง "โฮะ"', tip: 'คล้ายตัว + ที่มีขีดตรงกลาง', example: 'ホテル (โรงแรม)' }
        ],
        m_group: [
            { char: 'マ', romaji: 'ma', meaning: 'เสียง "มะ"', tip: 'คล้ายตัว M ที่เหลี่ยม', example: 'マヨネーズ (มายองเนส)' },
            { char: 'ミ', romaji: 'mi', meaning: 'เสียง "มิ"', tip: 'สามขีด', example: 'ミルク (นม)' },
            { char: 'ム', romaji: 'mu', meaning: 'เสียง "มุ"', tip: 'คล้ายตัว U ที่เหลี่ยม', example: 'ムービー (หนัง)' },
            { char: 'メ', romaji: 'me', meaning: 'เสียง "เมะ"', tip: 'คล้ายดาว 4 แฉก', example: 'メニュー (เมนู)' },
            { char: 'モ', romaji: 'mo', meaning: 'เสียง "โมะ"', tip: 'คล้ายตัวเลข 7 กับ เ', example: 'モーター (มอเตอร์)' }
        ],
        y_group: [
            { char: 'ヤ', romaji: 'ya', meaning: 'เสียง "ยะ"', tip: 'คล้ายรูปใบไผ่เหลี่ยม', example: 'ヤード (หลา)' },
            { char: 'ユ', romaji: 'yu', meaning: 'เสียง "ยุ"', tip: 'คล้ายตัว U ที่มีขีด', example: 'ユニフォーム (ยูนิฟอร์ม)' },
            { char: 'ヨ', romaji: 'yo', meaning: 'เสียง "โยะ"', tip: 'สามขีดนอน', example: 'ヨーグルト (โยเกิร์ต)' }
        ],
        r_group: [
            { char: 'ラ', romaji: 'ra', meaning: 'เสียง "ระ"', tip: 'คล้ายตัว 5 กับ \\ ', example: 'ラーメン (ราเมน)' },
            { char: 'リ', romaji: 'ri', meaning: 'เสียง "ริ"', tip: 'สองขีดตั้ง', example: 'リスト (รายการ)' },
            { char: 'ル', romaji: 'ru', meaning: 'เสียง "รุ"', tip: 'คล้ายตัว /\\ ล่าง', example: 'ルール (กฎ)' },
            { char: 'レ', romaji: 're', meaning: 'เสียง "เระ"', tip: 'คล้ายเลข 7 ผกผัน', example: 'レストラン (ร้านอาหาร)' },
            { char: 'ロ', romaji: 'ro', meaning: 'เสียง "โระ"', tip: 'สี่เหลี่ยม', example: 'ロボット (หุ่นยนต์)' }
        ],
        w_group: [
            { char: 'ワ', romaji: 'wa', meaning: 'เสียง "วะ"', tip: 'คล้ายตัว 7 กับ /', example: 'ワイン (ไวน์)' },
            { char: 'ヲ', romaji: 'wo/o', meaning: 'อนุภาค', tip: 'ใช้เป็นอนุภาคเท่านั้น', example: 'コーヒーヲ (กาแฟ+อนุภาค)' },
            { char: 'ン', romaji: 'n', meaning: 'เสียง "น"', tip: 'อยู่ท้ายคำ', example: 'ニホン (ญี่ปุ่น)' }
        ]
    }
};

// ข้อมูลเสียงควบกล้ำ
const yoonData = {
    hiragana: {
        ya: [
            { char: 'きゃ', romaji: 'kya', base: 'き + ゃ' },
            { char: 'しゃ', romaji: 'sha', base: 'し + ゃ' },
            { char: 'ちゃ', romaji: 'cha', base: 'ち + ゃ' },
            { char: 'にゃ', romaji: 'nya', base: 'に + ゃ' },
            { char: 'ひゃ', romaji: 'hya', base: 'ひ + ゃ' },
            { char: 'みゃ', romaji: 'mya', base: 'み + ゃ' },
            { char: 'りゃ', romaji: 'rya', base: 'り + ゃ' },
            { char: 'ぎゃ', romaji: 'gya', base: 'ぎ + ゃ' },
            { char: 'じゃ', romaji: 'ja', base: 'じ + ゃ', note: 'ออกเสียง "จา"' },
            { char: 'びゃ', romaji: 'bya', base: 'び + ゃ' },
            { char: 'ぴゃ', romaji: 'pya', base: 'ぴ + ゃ' }
        ],
        yu: [
            { char: 'きゅ', romaji: 'kyu', base: 'き + ゅ' },
            { char: 'しゅ', romaji: 'shu', base: 'し + ゅ' },
            { char: 'ちゅ', romaji: 'chu', base: 'ち + ゅ' },
            { char: 'にゅ', romaji: 'nyu', base: 'に + ゅ' },
            { char: 'ひゅ', romaji: 'hyu', base: 'ひ + ゅ' },
            { char: 'みゅ', romaji: 'myu', base: 'み + ゅ' },
            { char: 'りゅ', romaji: 'ryu', base: 'り + ゅ' },
            { char: 'ぎゅ', romaji: 'gyu', base: 'ぎ + ゅ' },
            { char: 'じゅ', romaji: 'ju', base: 'じ + ゅ', note: 'ออกเสียง "จู"' },
            { char: 'びゅ', romaji: 'byu', base: 'び + ゅ' },
            { char: 'ぴゅ', romaji: 'pyu', base: 'ぴ + ゅ' }
        ],
        yo: [
            { char: 'きょ', romaji: 'kyo', base: 'き + ょ' },
            { char: 'しょ', romaji: 'sho', base: 'し + ょ' },
            { char: 'ちょ', romaji: 'cho', base: 'ち + ょ' },
            { char: 'にょ', romaji: 'nyo', base: 'に + ょ' },
            { char: 'ひょ', romaji: 'hyo', base: 'ひ + ょ' },
            { char: 'みょ', romaji: 'myo', base: 'み + ょ' },
            { char: 'りょ', romaji: 'ryo', base: 'り + ょ' },
            { char: 'ぎょ', romaji: 'gyo', base: 'ぎ + ょ' },
            { char: 'じょ', romaji: 'jo', base: 'じ + ょ', note: 'ออกเสียง "โจ"' },
            { char: 'びょ', romaji: 'byo', base: 'び + ょ' },
            { char: 'ぴょ', romaji: 'pyo', base: 'ぴ + ょ' }
        ]
    },
    katakana: {
        ya: [
            { char: 'キャ', romaji: 'kya', base: 'キ + ャ' },
            { char: 'シャ', romaji: 'sha', base: 'シ + ャ' },
            { char: 'チャ', romaji: 'cha', base: 'チ + ャ' },
            { char: 'ニャ', romaji: 'nya', base: 'ニ + ャ' },
            { char: 'ヒャ', romaji: 'hya', base: 'ヒ + ャ' },
            { char: 'ミャ', romaji: 'mya', base: 'ミ + ャ' },
            { char: 'リャ', romaji: 'rya', base: 'リ + ャ' },
            { char: 'ギャ', romaji: 'gya', base: 'ギ + ャ' },
            { char: 'ジャ', romaji: 'ja', base: 'ジ + ャ', note: 'ออกเสียง "จา"' },
            { char: 'ビャ', romaji: 'bya', base: 'ビ + ャ' },
            { char: 'ピャ', romaji: 'pya', base: 'ピ + ャ' }
        ],
        yu: [
            { char: 'キュ', romaji: 'kyu', base: 'キ + ュ' },
            { char: 'シュ', romaji: 'shu', base: 'シ + ュ' },
            { char: 'チュ', romaji: 'chu', base: 'チ + ュ' },
            { char: 'ニュ', romaji: 'nyu', base: 'ニ + ュ' },
            { char: 'ヒュ', romaji: 'hyu', base: 'ヒ + ュ' },
            { char: 'ミュ', romaji: 'myu', base: 'ミ + ュ' },
            { char: 'リュ', romaji: 'ryu', base: 'リ + ュ' },
            { char: 'ギュ', romaji: 'gyu', base: 'ギ + ュ' },
            { char: 'ジュ', romaji: 'ju', base: 'ジ + ュ', note: 'ออกเสียง "จู"' },
            { char: 'ビュ', romaji: 'byu', base: 'ビ + ュ' },
            { char: 'ピュ', romaji: 'pyu', base: 'ピ + ュ' }
        ],
        yo: [
            { char: 'キョ', romaji: 'kyo', base: 'キ + ョ' },
            { char: 'ショ', romaji: 'sho', base: 'シ + ョ' },
            { char: 'チョ', romaji: 'cho', base: 'チ + ョ' },
            { char: 'ニョ', romaji: 'nyo', base: 'ニ + ョ' },
            { char: 'ヒョ', romaji: 'hyo', base: 'ヒ + ョ' },
            { char: 'ミョ', romaji: 'myo', base: 'ミ + ョ' },
            { char: 'リョ', romaji: 'ryo', base: 'リ + ョ' },
            { char: 'ギョ', romaji: 'gyo', base: 'ギ + ョ' },
            { char: 'ジョ', romaji: 'jo', base: 'ジ + ョ', note: 'ออกเสียง "โจ"' },
            { char: 'ビョ', romaji: 'byo', base: 'ビ + ョ' },
            { char: 'ピョ', romaji: 'pyo', base: 'ピ + ョ' }
        ]
    }
};

// ตัวแปรสำหรับเก็บสถานะปัจจุบัน
let currentType = 'hiragana';

// เริ่มต้นเมื่อโหลดหน้า
document.addEventListener('DOMContentLoaded', function() {
    initializeCharacterLearning();
    setupEventListeners();
});

// ตั้งค่าเหตุการณ์
function setupEventListeners() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const type = button.dataset.type;
            switchCharacterType(type);
        });
    });
}

// เปลี่ยนประเภทตัวอักษร
function switchCharacterType(type) {
    currentType = type;
    
    // อัปเดตแท็บ
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-type="${type}"]`).classList.add('active');
    
    // อัปเดตข้อมูลเบื้องต้น
    document.getElementById('hiragana-intro').style.display = type === 'hiragana' ? 'block' : 'none';
    document.getElementById('katakana-intro').style.display = type === 'katakana' ? 'block' : 'none';
    
    // สร้างตารางใหม่
    createCharacterTables();
    createYoonTables();
}

// เริ่มต้นการเรียนรู้ตัวอักษร
function initializeCharacterLearning() {
    createCharacterTables();
    createYoonTables();
}

// สร้างตารางตัวอักษร
function createCharacterTables() {
    const container = document.getElementById('character-tables');
    container.innerHTML = '';
    
    const data = characterData[currentType];
    const groupNames = {
        basic: { name: 'สระพื้นฐาน', romaji: 'a i u e o' },
        k_group: { name: 'กลุ่ม K', romaji: 'ka ki ku ke ko' },
        s_group: { name: 'กลุ่ม S', romaji: 'sa shi su se so' },
        t_group: { name: 'กลุ่ม T', romaji: 'ta chi tsu te to' },
        n_group: { name: 'กลุ่ม N', romaji: 'na ni nu ne no' },
        h_group: { name: 'กลุ่ม H', romaji: 'ha hi fu he ho' },
        m_group: { name: 'กลุ่ม M', romaji: 'ma mi mu me mo' },
        y_group: { name: 'กลุ่ม Y', romaji: 'ya yu yo' },
        r_group: { name: 'กลุ่ม R', romaji: 'ra ri ru re ro' },
        w_group: { name: 'กลุ่ม W/N', romaji: 'wa wo n' }
    };
    
    Object.keys(data).forEach(groupKey => {
        const group = data[groupKey];
        const groupInfo = groupNames[groupKey];
        
        const groupDiv = document.createElement('div');
        groupDiv.className = 'character-group';
        
        groupDiv.innerHTML = `
            <div class="group-header">
                <h3>
                    <i class="fas fa-circle"></i>
                    ${groupInfo.name}
                    <span class="romaji">${groupInfo.romaji}</span>
                </h3>
            </div>
            <div class="character-table" id="table-${groupKey}">
                <!-- ตัวอักษรจะถูกเพิ่มที่นี่ -->
            </div>
        `;
        
        container.appendChild(groupDiv);
        
        // สร้างเซลล์ตัวอักษร
        const table = document.getElementById(`table-${groupKey}`);
        group.forEach(item => {
            const cell = createCharacterCell(item);
            table.appendChild(cell);
        });
    });
}

// สร้างเซลล์ตัวอักษร
function createCharacterCell(item) {
    const cell = document.createElement('div');
    cell.className = 'character-cell';
    
    cell.innerHTML = `
        <div class="character">${item.char}</div>
        <div class="romaji">${item.romaji}</div>
        <div class="character-detail">
            <div class="detail-content">
                <h4>${item.meaning}</h4>
                <p><strong>เคล็ดลับ:</strong> ${item.tip}</p>
                <div class="example">
                    <strong>ตัวอย่าง:</strong> ${item.example}
                </div>
            </div>
        </div>
    `;
    
    // เพิ่มเอฟเฟกต์คลิก
    cell.addEventListener('click', () => {
        cell.classList.add('clicked');
        setTimeout(() => {
            cell.classList.remove('clicked');
        }, 300);
    });
    
    return cell;
}

// สร้างตารางเสียงควบกล้ำ
function createYoonTables() {
    const container = document.getElementById('yoon-tables');
    container.innerHTML = '';
    
    const data = yoonData[currentType];
    const yoonGroups = {
        ya: { name: 'เสียง YA', icon: 'fas fa-music' },
        yu: { name: 'เสียง YU', icon: 'fas fa-music' },
        yo: { name: 'เสียง YO', icon: 'fas fa-music' }
    };
    
    Object.keys(data).forEach(groupKey => {
        const group = data[groupKey];
        const groupInfo = yoonGroups[groupKey];
        
        const groupDiv = document.createElement('div');
        groupDiv.className = 'yoon-group';
        
        groupDiv.innerHTML = `
            <h4>
                <i class="${groupInfo.icon}"></i>
                ${groupInfo.name}
            </h4>
            <div class="yoon-table" id="yoon-${groupKey}">
                <!-- เสียงควบกล้ำจะถูกเพิ่มที่นี่ -->
            </div>
        `;
        
        container.appendChild(groupDiv);
        
        // สร้างเซลล์เสียงควบกล้ำ
        const table = document.getElementById(`yoon-${groupKey}`);
        group.forEach(item => {
            const cell = createYoonCell(item);
            table.appendChild(cell);
        });
    });
}

// สร้างเซลล์เสียงควบกล้ำ
function createYoonCell(item) {
    const cell = document.createElement('div');
    cell.className = 'yoon-cell';
    cell.title = `${item.base}${item.note ? ' - ' + item.note : ''}`;
    
    cell.innerHTML = `
        <div class="yoon-char">${item.char}</div>
        <div class="yoon-romaji">${item.romaji}</div>
    `;
    
    // เพิ่มเอฟเฟกต์คลิก
    cell.addEventListener('click', () => {
        cell.style.transform = 'scale(0.95)';
        setTimeout(() => {
            cell.style.transform = '';
        }, 150);
    });
    
    return cell;
}

// ฟังก์ชันสำหรับเปิดโหมดทดสอบ
function openTestMode() {
    const modal = document.createElement('div');
    modal.className = 'test-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2><i class="fas fa-graduation-cap"></i> เลือกโหมดทดสอบ</h2>
                <button class="close-btn" onclick="closeTestModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="test-modes">
                    <div class="test-mode-card" onclick="startTest('easy')">
                        <div class="mode-icon easy"><i class="fas fa-seedling"></i></div>
                        <h3>โหมดง่าย</h3>
                        <p>เลือกตัวเลือก • ไม่จำกัดเวลา • ผิดได้ 10 ครั้ง</p>
                    </div>
                    <div class="test-mode-card" onclick="startTest('medium')">
                        <div class="mode-icon medium"><i class="fas fa-pen"></i></div>
                        <h3>โหมดกลาง</h3>
                        <p>พิมพ์คำตอบ • ไม่จำกัดเวลา • ผิดได้ 5 ครั้ง</p>
                    </div>
                    <div class="test-mode-card" onclick="startTest('hard')">
                        <div class="mode-icon hard"><i class="fas fa-fire"></i></div>
                        <h3>โหมดยาก</h3>
                        <p>พิมพ์คำตอบ • จำกัดเวลา • ผิดได้ 3 ครั้ง</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function closeTestModal() {
    const modal = document.querySelector('.test-modal');
    if (modal) {
        modal.remove();
    }
}

function startTest(mode) {
    closeTestModal();
    // เปลี่ยนไปหน้าทดสอบพร้อมโหมดที่เลือก
    window.location.href = `characters.html?mode=${mode}&type=${currentType}`;
} 
