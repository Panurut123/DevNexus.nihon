// ตัวอย่างข้อมูลคันจิพื้นฐาน N5-N4-N3 (เพิ่ม N4/N3 หลายตัว)
window.kanjiData = [
    // N5 (Numbers 1-10)
    { char: '一', furigana: 'いち', meaning: 'หนึ่ง', example: '一つ (ひとつ) = หนึ่งอัน', level: 'N5' },
    { char: '二', furigana: 'に', meaning: 'สอง', example: '二つ (ふたつ) = สองอัน', level: 'N5' },
    { char: '三', furigana: 'さん', meaning: 'สาม', example: '三つ (みっつ) = สามอัน', level: 'N5' },
    { char: '四', furigana: 'し/よん', meaning: 'สี่', example: '四つ (よっつ) = สี่อัน', level: 'N5' },
    { char: '五', furigana: 'ご', meaning: 'ห้า', example: '五つ (いつつ) = ห้าอัน', level: 'N5' },
    { char: '六', furigana: 'ろく', meaning: 'หก', example: '六つ (むっつ) = หกอัน', level: 'N5' },
    { char: '七', furigana: 'しち/なな', meaning: 'เจ็ด', example: '七つ (ななつ) = เจ็ดอัน', level: 'N5' },
    { char: '八', furigana: 'はち', meaning: 'แปด', example: '八つ (やっつ) = แปดอัน', level: 'N5' },
    { char: '九', furigana: 'きゅう/く', meaning: 'เก้า', example: '九つ (ここのつ) = เก้าอัน', level: 'N5' },
    { char: '十', furigana: 'じゅう', meaning: 'สิบ', example: '十 (とお) = สิบ', level: 'N5' },
    { char: '色', furigana: 'いろ', meaning: 'สี', example: '色 (いろ) = สี', level: 'N5' },
    
    // N5
    { char: '日', furigana: 'にち/ひ', meaning: 'วัน, ดวงอาทิตย์, ญี่ปุ่น', example: '日本 (にほん) = ประเทศญี่ปุ่น', level: 'N5' },
    { char: '本', furigana: 'ほん/もと', meaning: 'หนังสือ, ต้นฉบับ, จริง', example: '本 (ほん) = หนังสือ', level: 'N5' },
    { char: '人', furigana: 'じん/ひと', meaning: 'คน, มนุษย์', example: '日本人 (にほんじん) = คนญี่ปุ่น', level: 'N5' },
    { char: '月', furigana: 'げつ/つき', meaning: 'เดือน, พระจันทร์', example: '月曜日 (げつようび) = วันจันทร์', level: 'N5' },
    { char: '水', furigana: 'すい/みず', meaning: 'น้ำ', example: '水 (みず) = น้ำ', level: 'N5' },
    { char: '火', furigana: 'か/ひ', meaning: 'ไฟ', example: '火曜日 (かようび) = วันอังคาร', level: 'N5' },
    { char: '木', furigana: 'もく/き', meaning: 'ต้นไม้, ไม้', example: '木曜日 (もくようび) = วันพฤหัสบดี', level: 'N5' },
    { char: '金', furigana: 'きん/かね', meaning: 'ทอง, เงิน', example: '金曜日 (きんようび) = วันศุกร์', level: 'N5' },
    { char: '土', furigana: 'ど/つち', meaning: 'ดิน, โลก', example: '土曜日 (どようび) = วันเสาร์', level: 'N5' },
    { char: '山', furigana: 'やま', meaning: 'ภูเขา', example: '富士山 (ふじさん) = ภูเขาฟูจิ', level: 'N5' },
    { char: '川', furigana: 'かわ', meaning: 'แม่น้ำ', example: '川 (かわ) = แม่น้ำ', level: 'N5' },
    { char: '田', furigana: 'た', meaning: 'ทุ่งนา', example: '田んぼ (たんぼ) = นาข้าว', level: 'N5' },
    { char: '男', furigana: 'おとこ', meaning: 'ผู้ชาย', example: '男の子 (おとこのこ) = เด็กผู้ชาย', level: 'N5' },
    { char: '女', furigana: 'おんな', meaning: 'ผู้หญิง', example: '女の子 (おんなのこ) = เด็กผู้หญิง', level: 'N5' },
    { char: '子', furigana: 'こ', meaning: 'เด็ก', example: '子供 (こども) = เด็ก', level: 'N5' },
    { char: '目', furigana: 'め', meaning: 'ตา', example: '目 (め) = ตา', level: 'N5' },
    { char: '口', furigana: 'くち', meaning: 'ปาก', example: '口 (くち) = ปาก', level: 'N5' },
    { char: '耳', furigana: 'みみ', meaning: 'หู', example: '耳 (みみ) = หู', level: 'N5' },
    { char: '手', furigana: 'て', meaning: 'มือ', example: '手紙 (てがみ) = จดหมาย', level: 'N5' },
    { char: '足', furigana: 'あし', meaning: 'ขา, เท้า', example: '足 (あし) = ขา/เท้า', level: 'N5' },
    { char: '力', furigana: 'ちから', meaning: 'พลัง, กำลัง', example: '力 (ちから) = พลัง', level: 'N5' },
    { char: '気', furigana: 'き', meaning: 'อากาศ, จิตใจ', example: '元気 (げんき) = แข็งแรง', level: 'N5' },
    { char: '天', furigana: 'てん', meaning: 'ท้องฟ้า, สวรรค์', example: '天気 (てんき) = อากาศ', level: 'N5' },
    { char: '空', furigana: 'そら/くう', meaning: 'ท้องฟ้า, ว่างเปล่า', example: '空港 (くうこう) = สนามบิน', level: 'N5' },
    { char: '雨', furigana: 'あめ', meaning: 'ฝน', example: '雨 (あめ) = ฝน', level: 'N5' },
    { char: '車', furigana: 'くるま', meaning: 'รถ', example: '車 (くるま) = รถ', level: 'N5' },
    { char: '電', furigana: 'でん', meaning: 'ไฟฟ้า', example: '電車 (でんしゃ) = รถไฟ', level: 'N5' },
    { char: '校', furigana: 'こう', meaning: 'โรงเรียน', example: '学校 (がっこう) = โรงเรียน', level: 'N5' },
    { char: '生', furigana: 'せい/いきる', meaning: 'ชีวิต, เกิด', example: '学生 (がくせい) = นักเรียน', level: 'N5' },
    { char: '学', furigana: 'がく', meaning: 'การเรียน', example: '大学 (だいがく) = มหาวิทยาลัย', level: 'N5' },
    { char: '先', furigana: 'せん/さき', meaning: 'ข้างหน้า, ก่อน', example: '先生 (せんせい) = ครู', level: 'N5' },
    { char: '友', furigana: 'とも', meaning: 'เพื่อน', example: '友達 (ともだち) = เพื่อน', level: 'N5' },
    { char: '話', furigana: 'はなし/はなす', meaning: 'พูด, เรื่องราว', example: '会話 (かいわ) = การสนทนา', level: 'N5' },
    { char: '語', furigana: 'ご', meaning: 'ภาษา, คำ', example: '日本語 (にほんご) = ภาษาญี่ปุ่น', level: 'N5' },
    { char: '読', furigana: 'よむ', meaning: 'อ่าน', example: '読書 (どくしょ) = การอ่านหนังสือ', level: 'N5' },
    { char: '書', furigana: 'かく', meaning: 'เขียน', example: '書店 (しょてん) = ร้านหนังสือ', level: 'N5' },
    { char: '聞', furigana: 'きく', meaning: 'ฟัง, ถาม', example: '新聞 (しんぶん) = หนังสือพิมพ์', level: 'N5' },
    { char: '見', furigana: 'みる', meaning: 'ดู, มอง', example: '見学 (けんがく) = การศึกษาดูงาน', level: 'N5' },
    { char: '行', furigana: 'いく/こう', meaning: 'ไป', example: '銀行 (ぎんこう) = ธนาคาร', level: 'N5' },
    { char: '来', furigana: 'くる/らい', meaning: 'มา', example: '来週 (らいしゅう) = สัปดาห์หน้า', level: 'N5' },
    { char: '食', furigana: 'たべる', meaning: 'กิน', example: '食事 (しょくじ) = มื้ออาหาร', level: 'N5' },
    { char: '飲', furigana: 'のむ', meaning: 'ดื่ม', example: '飲み物 (のみもの) = เครื่องดื่ม', level: 'N5' },
    { char: '買', furigana: 'かう', meaning: 'ซื้อ', example: '買い物 (かいもの) = การซื้อของ', level: 'N5' },
    { char: '立', furigana: 'たつ', meaning: 'ยืน', example: '立場 (たちば) = จุดยืน', level: 'N5' },
    { char: '休', furigana: 'やすむ', meaning: 'พัก', example: '休日 (きゅうじつ) = วันหยุด', level: 'N5' },
    { char: '入', furigana: 'はいる/いれる', meaning: 'เข้า', example: '入学 (にゅうがく) = การเข้าเรียน', level: 'N5' },
    { char: '出', furigana: 'でる/だす', meaning: 'ออก', example: '出口 (でぐち) = ทางออก', level: 'N5' },
    { char: '時', furigana: 'じ/とき', meaning: 'เวลา, ชั่วโมง', example: '時間 (じかん) = เวลา', level: 'N5' },
    { char: '間', furigana: 'かん/あいだ', meaning: 'ระหว่าง, ช่วง', example: '人間 (にんげん) = มนุษย์', level: 'N5' },
    { char: '年', furigana: 'ねん/とし', meaning: 'ปี', example: '来年 (らいねん) = ปีหน้า', level: 'N5' },
    { char: '高', furigana: 'たかい', meaning: 'สูง, แพง', example: '高校 (こうこう) = โรงเรียนมัธยมปลาย', level: 'N5' },
    { char: '小', furigana: 'ちいさい', meaning: 'เล็ก', example: '小学校 (しょうがっこう) = โรงเรียนประถม', level: 'N5' },
    { char: '大', furigana: 'おおきい/だい', meaning: 'ใหญ่', example: '大学 (だいがく) = มหาวิทยาลัย', level: 'N5' },
    { char: '中', furigana: 'ちゅう/なか', meaning: 'กลาง, ข้างใน', example: '中学校 (ちゅうがっこう) = โรงเรียนมัธยมต้น', level: 'N5' },
    { char: '長', furigana: 'ながい', meaning: 'ยาว, หัวหน้า', example: '社長 (しゃちょう) = ประธานบริษัท', level: 'N5' },
    { char: '白', furigana: 'しろ', meaning: 'ขาว', example: '白い (しろい) = สีขาว', level: 'N5' },
    { char: '黒', furigana: 'くろ', meaning: 'ดำ', example: '黒い (くろい) = สีดำ', level: 'N5' },
    { char: '赤', furigana: 'あか', meaning: 'แดง', example: '赤い (あかい) = สีแดง', level: 'N5' },
    { char: '青', furigana: 'あお', meaning: 'น้ำเงิน', example: '青い (あおい) = สีน้ำเงิน', level: 'N5' },
    { char: '家', furigana: 'いえ/か', meaning: 'บ้าน', example: '家 (いえ) = บ้าน', level: 'N5' },
    { char: '駅', furigana: 'えき', meaning: 'สถานีรถไฟ', example: '駅 (えき) = สถานีรถไฟ', level: 'N5' },
    { char: '店', furigana: 'みせ/てん', meaning: 'ร้าน', example: '店 (みせ) = ร้าน', level: 'N5' },
    { char: '会', furigana: 'あう/かい', meaning: 'พบ, การประชุม', example: '会社 (かいしゃ) = บริษัท', level: 'N5' },
    { char: '社', furigana: 'しゃ', meaning: 'บริษัท, ศาลเจ้า', example: '会社 (かいしゃ) = บริษัท', level: 'N5' },
    { char: '午', furigana: 'ご', meaning: 'เที่ยง', example: '午前 (ごぜん) = ตอนเช้า', level: 'N5' },
    { char: '前', furigana: 'まえ/ぜん', meaning: 'ก่อน, ข้างหน้า', example: '名前 (なまえ) = ชื่อ', level: 'N5' },
    { char: '後', furigana: 'あと/うしろ/ご', meaning: 'หลัง, ข้างหลัง', example: '午後 (ごご) = ตอนบ่าย', level: 'N5' },
    { char: '東', furigana: 'ひがし/とう', meaning: 'ตะวันออก', example: '東京 (とうきょう) = โตเกียว', level: 'N5' },
    { char: '西', furigana: 'にし/せい/さい', meaning: 'ตะวันตก', example: '西口 (にしぐち) = ประตูทิศตะวันตก', level: 'N5' },
    { char: '南', furigana: 'みなみ/なん', meaning: 'ใต้', example: '南口 (みなみぐち) = ประตูทิศใต้', level: 'N5' },
    { char: '北', furigana: 'きた/ほく', meaning: 'เหนือ', example: '北口 (きたぐち) = ประตูทิศเหนือ', level: 'N5' },
    { char: '海', furigana: 'うみ/かい', meaning: 'ทะเล', example: '海 (うみ) = ทะเล', level: 'N5' },
    { char: '今', furigana: 'いま/こん', meaning: 'ตอนนี้', example: '今日 (きょう) = วันนี้', level: 'N5' },
    { char: '何', furigana: 'なに/なん', meaning: 'อะไร', example: '何 (なに) = อะไร', level: 'N5' },
    { char: '名', furigana: 'な/めい', meaning: 'ชื่อ', example: '名前 (なまえ) = ชื่อ', level: 'N5' },
    { char: '字', furigana: 'じ', meaning: 'ตัวอักษร', example: '漢字 (かんじ) = ตัวอักษรคันจิ', level: 'N5' },
    
    // N4
    { char: '愛', furigana: 'あい', meaning: 'ความรัก', example: '愛 (あい) = ความรัก', level: 'N4' },
    { char: '案', furigana: 'あん', meaning: 'แผน, ข้อเสนอ', example: '案内 (あんない) = การแนะนำ', level: 'N4' },
    { char: '以', furigana: 'い', meaning: 'ตั้งแต่, ด้วย', example: '以上 (いじょう) = มากกว่า', level: 'N4' },
    { char: '意', furigana: 'い', meaning: 'ความหมาย, ความคิด', example: '意味 (いみ) = ความหมาย', level: 'N4' },
    { char: '員', furigana: 'いん', meaning: 'สมาชิก', example: '会社員 (かいしゃいん) = พนักงานบริษัท', level: 'N4' },
    { char: '院', furigana: 'いん', meaning: 'สถาบัน', example: '病院 (びょういん) = โรงพยาบาล', level: 'N4' },
    { char: '運', furigana: 'うん', meaning: 'ขนส่ง, โชค', example: '運転 (うんてん) = ขับรถ', level: 'N4' },
    { char: '横', furigana: 'よこ', meaning: 'ข้าง, แนวนอน', example: '横 (よこ) = ข้าง', level: 'N4' },
    { char: '屋', furigana: 'や', meaning: 'ร้าน, บ้าน', example: '本屋 (ほんや) = ร้านหนังสือ', level: 'N4' },
    { char: '温', furigana: 'おん', meaning: 'อุณหภูมิ', example: '温度 (おんど) = อุณหภูมิ', level: 'N4' },
    { char: '化', furigana: 'か', meaning: 'เปลี่ยนแปลง', example: '文化 (ぶんか) = วัฒนธรรม', level: 'N4' },
    { char: '荷', furigana: 'に', meaning: 'สัมภาระ', example: '荷物 (にもつ) = สัมภาระ', level: 'N4' },
    { char: '悪', furigana: 'わるい/あく', meaning: 'เลว, ไม่ดี', example: '悪い (わるい) = ไม่ดี', level: 'N4' },
    { char: '味', furigana: 'あじ/み', meaning: 'รสชาติ', example: '味 (あじ) = รสชาติ', level: 'N4' },
    { char: '医', furigana: 'い', meaning: 'การแพทย์', example: '医者 (いしゃ) = หมอ', level: 'N4' },
    { char: '遠', furigana: 'とおい/えん', meaning: 'ไกล', example: '遠い (とおい) = ไกล', level: 'N4' },
    { char: '泳', furigana: 'およぐ/えい', meaning: 'ว่ายน้ำ', example: '泳ぐ (およぐ) = ว่ายน้ำ', level: 'N4' },
    { char: '親', furigana: 'おや/しん', meaning: 'พ่อแม่', example: '親 (おや) = พ่อแม่', level: 'N4' },
    { char: '弟', furigana: 'おとうと/てい', meaning: 'น้องชาย', example: '弟 (おとうと) = น้องชาย', level: 'N4' },
    { char: '妹', furigana: 'いもうと/まい', meaning: 'น้องสาว', example: '妹 (いもうと) = น้องสาว', level: 'N4' },
    { char: '姉', furigana: 'あね/し', meaning: 'พี่สาว', example: '姉 (あね) = พี่สาว', level: 'N4' },
    { char: '兄', furigana: 'あに/きょう', meaning: 'พี่ชาย', example: '兄 (あに) = พี่ชาย', level: 'N4' },
    { char: '直', furigana: 'なおる/ちょく', meaning: 'ตรง, แก้ไข', example: '直す (なおす) = แก้ไข', level: 'N4' },
    { char: '待', furigana: 'まつ/たい', meaning: 'รอ', example: '待つ (まつ) = รอ', level: 'N4' },
    { char: '急', furigana: 'いそぐ/きゅう', meaning: 'รีบ, ฉุกเฉิน', example: '急ぐ (いそぐ) = รีบ', level: 'N4' },
    { char: '止', furigana: 'とまる/し', meaning: 'หยุด', example: '止まる (とまる) = หยุด', level: 'N4' },
    { char: '貸', furigana: 'かす/たい', meaning: 'ยืม', example: '貸す (かす) = ให้ยืม', level: 'N4' },
    { char: '借', furigana: 'かりる/しゃく', meaning: 'ยืม', example: '借金 (しゃっきん) = หนี้', level: 'N4' },
    { char: '売', furigana: 'うる/ばい', meaning: 'ขาย', example: '売る (うる) = ขาย', level: 'N4' },
    { char: '払', furigana: 'はらう/ふつ', meaning: 'จ่าย', example: '払う (はらう) = จ่าย', level: 'N4' },
    { char: '習', furigana: 'ならう/しゅう', meaning: 'เรียนรู้', example: '習う (ならう) = เรียนรู้', level: 'N4' },
    { char: '寝', furigana: 'ねる/しん', meaning: 'นอน', example: '寝る (ねる) = นอน', level: 'N4' },
    { char: '起', furigana: 'おきる/き', meaning: 'ตื่น', example: '起きる (おきる) = ตื่น', level: 'N4' },
    { char: '着', furigana: 'きる/ちゃく', meaning: 'สวมใส่, มาถึง', example: '着る (きる) = สวมใส่', level: 'N4' },
    { char: '浴', furigana: 'あびる/よく', meaning: 'อาบน้ำ', example: '入浴 (にゅうよく) = การอาบน้ำ', level: 'N4' },
    { char: '旅', furigana: 'たび/りょ', meaning: 'การเดินทาง', example: '旅行 (りょこう) = การเดินทาง', level: 'N4' },
    { char: '服', furigana: 'ふく', meaning: 'เสื้อผ้า', example: '服 (ふく) = เสื้อผ้า', level: 'N4' },
    { char: '階', furigana: 'かい', meaning: 'ชั้น', example: '二階 (にかい) = ชั้นสอง', level: 'N4' },
    { char: '広', furigana: 'ひろい/こう', meaning: 'กว้าง', example: '広い (ひろい) = กว้าง', level: 'N4' },
    { char: '細', furigana: 'ほそい/さい', meaning: 'เล็ก, ละเอียด', example: '細い (ほそい) = เล็ก', level: 'N4' },
    { char: '短', furigana: 'みじかい/たん', meaning: 'สั้น', example: '短い (みじかい) = สั้น', level: 'N4' },
    
    // N3
    { char: '感', furigana: 'かん', meaning: 'ความรู้สึก', example: '感情 (かんじょう) = อารมณ์', level: 'N3' },
    { char: '覚', furigana: 'おぼえる/かく', meaning: 'จำ, รู้สึก', example: '覚える (おぼえる) = จำ', level: 'N3' },
    { char: '関', furigana: 'かん', meaning: 'เกี่ยวข้อง', example: '関係 (かんけい) = ความสัมพันธ์', level: 'N3' },
    { char: '観', furigana: 'かん', meaning: 'มุมมอง', example: '観光 (かんこう) = การท่องเที่ยว', level: 'N3' },
    { char: '願', furigana: 'ねがう/がん', meaning: 'ขอร้อง, ปรารถนา', example: '願う (ねがう) = ขอร้อง', level: 'N3' },
    { char: '季', furigana: 'き', meaning: 'ฤดู', example: '季節 (きせつ) = ฤดูกาล', level: 'N3' },
    { char: '議', furigana: 'ぎ', meaning: 'การประชุม, การอภิปราย', example: '会議 (かいぎ) = การประชุม', level: 'N3' },
    { char: '求', furigana: 'もとめる/きゅう', meaning: 'ขอ, แสวงหา', example: '要求 (ようきゅう) = การเรียกร้อง', level: 'N3' },
    { char: '救', furigana: 'すくう/きゅう', meaning: 'ช่วยเหลือ', example: '救急車 (きゅうきゅうしゃ) = รถพยาบาล', level: 'N3' },
    { char: '給', furigana: 'きゅう', meaning: 'จ่าย, ให้', example: '給料 (きゅうりょう) = เงินเดือน', level: 'N3' }
];

// ตัวแปรสำหรับจัดการ state
let currentData = [...window.kanjiData];
let currentPage = 1;
let itemsPerPage = 20;
let isGridView = true;

// เริ่มต้นเมื่อโหลดหน้า
document.addEventListener('DOMContentLoaded', function() {
    initializeKanjiApp();
});

function initializeKanjiApp() {
    updateStats();
    setupEventListeners();
    setupLevelCards();
    renderKanjiList();
    updatePagination();
}

// อัปเดตสถิติ
function updateStats() {
    const n5Count = window.kanjiData.filter(k => k.level === 'N5').length;
    const n4Count = window.kanjiData.filter(k => k.level === 'N4').length;
    const n3Count = window.kanjiData.filter(k => k.level === 'N3').length;
    const totalCount = window.kanjiData.length;

    document.getElementById('n5-count').textContent = n5Count;
    document.getElementById('n4-count').textContent = n4Count;
    document.getElementById('n3-count').textContent = n3Count;
    document.getElementById('total-count').textContent = totalCount;
}

// ตั้งค่า Event Listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('kanji-search');
    searchInput.addEventListener('input', handleSearch);

    // Level filter
    const levelFilter = document.getElementById('level-filter');
    levelFilter.addEventListener('change', handleFilter);

    // Sort filter
    const sortFilter = document.getElementById('sort-filter');
    sortFilter.addEventListener('change', handleSort);

    // Random kanji button
    const randomBtn = document.getElementById('random-kanji-btn');
    randomBtn.addEventListener('click', showRandomKanji);

    // View toggle buttons
    const viewBtns = document.querySelectorAll('.view-btn');
    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => toggleView(btn.dataset.view));
    });

    // Pagination buttons
    document.getElementById('prev-page').addEventListener('click', () => changePage(-1));
    document.getElementById('next-page').addEventListener('click', () => changePage(1));

    // Modal close functionality
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.querySelector('.modal-overlay').addEventListener('click', closeModal);
}

// ตั้งค่า Level Cards
function setupLevelCards() {
    const levelBtns = document.querySelectorAll('.level-btn');
    levelBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.level-card');
            const level = card.dataset.level;
            filterByLevel(level);
            
            // Scroll to kanji list
            document.getElementById('kanji-container').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// ฟังก์ชันค้นหา
function handleSearch() {
    const searchTerm = document.getElementById('kanji-search').value.toLowerCase();
    
    if (searchTerm === '') {
        currentData = [...window.kanjiData];
    } else {
        currentData = window.kanjiData.filter(kanji => 
            kanji.char.toLowerCase().includes(searchTerm) ||
            kanji.meaning.toLowerCase().includes(searchTerm) ||
            kanji.furigana.toLowerCase().includes(searchTerm) ||
            kanji.example.toLowerCase().includes(searchTerm)
        );
    }
    
    currentPage = 1;
    renderKanjiList();
    updatePagination();
}

// ฟังก์ชันกรอง
function handleFilter() {
    const level = document.getElementById('level-filter').value;
    filterByLevel(level);
}

function filterByLevel(level) {
    if (level === 'all') {
        currentData = [...window.kanjiData];
        document.getElementById('current-level-title').textContent = 'คันจิทั้งหมด';
    } else {
        currentData = window.kanjiData.filter(kanji => kanji.level === level);
        document.getElementById('current-level-title').textContent = `คันจิระดับ ${level}`;
    }
    
    // Update level filter dropdown
    document.getElementById('level-filter').value = level;
    
    currentPage = 1;
    renderKanjiList();
    updatePagination();
}

// ฟังก์ชันเรียงลำดับ
function handleSort() {
    const sortBy = document.getElementById('sort-filter').value;
    
    switch (sortBy) {
        case 'level':
            currentData.sort((a, b) => {
                const levelOrder = { 'N5': 1, 'N4': 2, 'N3': 3 };
                return levelOrder[a.level] - levelOrder[b.level];
            });
            break;
        case 'alphabetical':
            currentData.sort((a, b) => a.char.localeCompare(b.char));
            break;
        case 'stroke':
            // Simplified stroke count estimation
            currentData.sort((a, b) => a.char.length - b.char.length);
            break;
        case 'frequency':
            // Random for demo purposes
            currentData.sort(() => Math.random() - 0.5);
            break;
    }
    
    renderKanjiList();
}

// ฟังก์ชันสุ่มคันจิ
function showRandomKanji() {
    const randomKanji = window.kanjiData[Math.floor(Math.random() * window.kanjiData.length)];
    showKanjiModal(randomKanji);
}

// ฟังก์ชันเปลี่ยนมุมมอง
function toggleView(viewType) {
    isGridView = viewType === 'grid';
    
    // Update button states
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-view="${viewType}"]`).classList.add('active');
    
    // Update container class
    const container = document.getElementById('kanji-container');
    if (isGridView) {
        container.className = 'kanji-grid';
    } else {
        container.className = 'kanji-list';
    }
    
    renderKanjiList();
}

// ฟังก์ชันแสดงรายการคันจิ
function renderKanjiList() {
    const container = document.getElementById('kanji-container');
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageData = currentData.slice(start, end);
    
    container.innerHTML = '';
    
    pageData.forEach(kanji => {
        const card = createKanjiCard(kanji);
        container.appendChild(card);
    });
}

// สร้างการ์ดคันจิ
function createKanjiCard(kanji) {
    const card = document.createElement('div');
    card.className = `kanji-card ${!isGridView ? 'list-view' : ''}`;
    card.addEventListener('click', () => showKanjiModal(kanji));
    
    card.innerHTML = `
        <div class="kanji-level-badge ${kanji.level.toLowerCase()}">${kanji.level}</div>
        <div class="kanji-char">${kanji.char}</div>
        <div class="kanji-furigana">${kanji.furigana}</div>
        <div class="kanji-meaning">${kanji.meaning}</div>
        <div class="kanji-example">${kanji.example}</div>
    `;
    
    return card;
}

// แสดง Modal
function showKanjiModal(kanji) {
    const modal = document.getElementById('kanji-modal');
    const modalBody = modal.querySelector('.modal-body');
    
    modalBody.innerHTML = `
        <div class="kanji-level-badge ${kanji.level.toLowerCase()}">${kanji.level}</div>
        <div class="kanji-char">${kanji.char}</div>
        <div class="kanji-furigana">${kanji.furigana}</div>
        <div class="kanji-meaning">${kanji.meaning}</div>
        <div class="kanji-example">${kanji.example}</div>
        <button class="btn primary" onclick="showRandomKanji()" style="margin-top: 2rem;">
            <i class="fas fa-dice"></i>
            คันจิสุ่มถัดไป
        </button>
    `;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// ปิด Modal
function closeModal() {
const modal = document.getElementById('kanji-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ฟังก์ชัน Pagination
function changePage(direction) {
    const totalPages = Math.ceil(currentData.length / itemsPerPage);
    const newPage = currentPage + direction;
    
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        renderKanjiList();
        updatePagination();
        
        // Scroll to top of list
        document.getElementById('kanji-container').scrollIntoView({
            behavior: 'smooth'
        });
    }
}

function updatePagination() {
    const totalPages = Math.ceil(currentData.length / itemsPerPage);
    
    document.getElementById('current-page').textContent = currentPage;
    document.getElementById('total-pages').textContent = totalPages;
    
    document.getElementById('prev-page').disabled = currentPage === 1;
    document.getElementById('next-page').disabled = currentPage === totalPages;
}

// ความเข้ากันได้กับโค้ดเก่า
function renderKanjiLevelFilter() {
    // Legacy function - kept for compatibility
}

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});
