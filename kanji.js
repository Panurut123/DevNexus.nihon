// ตัวอย่างข้อมูลคันจิพื้นฐาน N5-N4-N3 (เพิ่ม N4/N3 หลายตัว)
window.kanjiData = [
    // เตรียมสอบ (Numbers 1-10)
    { char: '一', furigana: 'いち', meaning: 'หนึ่ง', example: '一つ (ひとつ) = หนึ่งอัน', level: 'เตรียมสอบ' },
    { char: '二', furigana: 'に', meaning: 'สอง', example: '二つ (ふたつ) = สองอัน', level: 'เตรียมสอบ' },
    { char: '三', furigana: 'さん', meaning: 'สาม', example: '三つ (みっつ) = สามอัน', level: 'เตรียมสอบ' },
    { char: '四', furigana: 'し/よん', meaning: 'สี่', example: '四つ (よっつ) = สี่อัน', level: 'เตรียมสอบ' },
    { char: '五', furigana: 'ご', meaning: 'ห้า', example: '五つ (いつつ) = ห้าอัน', level: 'เตรียมสอบ' },
    { char: '六', furigana: 'ろく', meaning: 'หก', example: '六つ (むっつ) = หกอัน', level: 'เตรียมสอบ' },
    { char: '七', furigana: 'しち/なな', meaning: 'เจ็ด', example: '七つ (ななつ) = เจ็ดอัน', level: 'เตรียมสอบ' },
    { char: '八', furigana: 'はち', meaning: 'แปด', example: '八つ (やっつ) = แปดอัน', level: 'เตรียมสอบ' },
    { char: '九', furigana: 'きゅう/く', meaning: 'เก้า', example: '九つ (ここのつ) = เก้าอัน', level: 'เตรียมสอบ' },
    { char: '十', furigana: 'じゅう', meaning: 'สิบ', example: '十 (とお) = สิบ', level: 'เตรียมสอบ' },
    
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
    { char: '先', furigana: 'せん/さき', meaning: 'ข้างหน้า, ก่อน', example: '先生 (せんせい) = ครู', level: 'N5' },
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
    { char: '体', furigana: 'からだ/たい', meaning: 'ร่างกาย', example: '体 (からだ) = ร่างกาย', level: 'N5' },
    { char: '道', furigana: 'みち/どう', meaning: 'ถนน, ทาง', example: '道 (みち) = ถนน', level: 'N5' },
    { char: '魚', furigana: 'さかな/ぎょ', meaning: 'ปลา', example: '魚 (さかな) = ปลา', level: 'N5' },
    { char: '鳥', furigana: 'とり/ちょう', meaning: 'นก', example: '鳥 (とり) = นก', level: 'N5' },
    { char: '牛', furigana: 'うし/ぎゅう', meaning: 'วัว', example: '牛乳 (ぎゅうにゅう) = นมวัว', level: 'N5' },
    { char: '馬', furigana: 'うま/ば', meaning: 'ม้า', example: '馬 (うま) = ม้า', level: 'N5' },
    { char: '犬', furigana: 'いぬ/けん', meaning: 'สุนัข', example: '犬 (いぬ) = สุนัข', level: 'N5' },
    { char: '猫', furigana: 'ねこ', meaning: 'แมว', example: '猫 (ねこ) = แมว', level: 'N5' },
    { char: '花', furigana: 'はな/か', meaning: 'ดอกไม้', example: '花 (はな) = ดอกไม้', level: 'N5' },
    { char: '草', furigana: 'くさ/そう', meaning: 'หญ้า', example: '草 (くさ) = หญ้า', level: 'N5' },
    { char: '林', furigana: 'はやし/りん', meaning: 'ป่าเล็ก', example: '林 (はやし) = ป่าเล็ก', level: 'N5' },
    { char: '森', furigana: 'もり/しん', meaning: 'ป่าใหญ่', example: '森 (もり) = ป่าใหญ่', level: 'N5' },
    { char: '石', furigana: 'いし/せき', meaning: 'หิน', example: '石 (いし) = หิน', level: 'N5' },
    { char: '竹', furigana: 'たけ/ちく', meaning: 'ไผ่', example: '竹 (たけ) = ไผ่', level: 'N5' },
    { char: '糸', furigana: 'いと/し', meaning: 'ด้าย', example: '糸 (いと) = ด้าย', level: 'N5' },
    { char: '貝', furigana: 'かい', meaning: 'หอย', example: '貝 (かい) = หอย', level: 'N5' },
    { char: '雪', furigana: 'ゆき/せつ', meaning: 'หิมะ', example: '雪 (ゆき) = หิมะ', level: 'N5' },
    { char: '風', furigana: 'かぜ/ふう', meaning: 'ลม', example: '風 (かぜ) = ลม', level: 'N5' },
    { char: '音', furigana: 'おと/おん', meaning: 'เสียง', example: '音楽 (おんがく) = ดนตรี', level: 'N5' },
    { char: '楽', furigana: 'たのしい/がく/らく', meaning: 'สนุก, ดนตรี', example: '楽しい (たのしい) = สนุก', level: 'N5' },
    { char: '歌', furigana: 'うた/か', meaning: 'เพลง', example: '歌 (うた) = เพลง', level: 'N5' },
    { char: '画', furigana: 'が/かく', meaning: 'ภาพ, วาด', example: '映画 (えいが) = ภาพยนตร์', level: 'N5' },
    { char: '写', furigana: 'しゃ/うつす', meaning: 'ถ่าย, คัดลอก', example: '写真 (しゃしん) = รูปถ่าย', level: 'N5' },
    { char: '真', furigana: 'しん/ま', meaning: 'จริง, แท้', example: '真ん中 (まんなか) = ตรงกลาง', level: 'N5' },
    { char: '英', furigana: 'えい', meaning: 'อังกฤษ, ยอดเยี่ยม', example: '英語 (えいご) = ภาษาอังกฤษ', level: 'N5' },
    { char: '薬', furigana: 'くすり/やく', meaning: 'ยา', example: '薬 (くすり) = ยา', level: 'N5' },
    { char: '医', furigana: 'い', meaning: 'การแพทย์', example: '医者 (いしゃ) = หมอ', level: 'N5' },
    { char: '病', furigana: 'びょう/やまい', meaning: 'ป่วย', example: '病院 (びょういん) = โรงพยาบาล', level: 'N5' },
    { char: '走', furigana: 'はしる/そう', meaning: 'วิ่ง', example: '走る (はしる) = วิ่ง', level: 'N5' },
    { char: '歩', furigana: 'あるく/ほ/ぽ', meaning: 'เดิน', example: '歩く (あるく) = เดิน', level: 'N5' },
    { char: '泳', furigana: 'およぐ/えい', meaning: 'ว่ายน้ำ', example: '泳ぐ (およぐ) = ว่ายน้ำ', level: 'N5' },
    // N4
    { char: '愛', furigana: 'あい', meaning: 'ความรัก', example: '愛 (あい) = ความรัก', level: 'N4' },
    { char: '案', furigana: 'あん', meaning: 'แผน, ข้อเสนอ', example: '案内 (あんない) = การแนะนำ', level: 'N4' },
    { char: '以', furigana: 'い', meaning: 'ตั้งแต่, ด้วย', example: '以上 (いじょう) = มากกว่า', level: 'N4' },
    { char: '意', furigana: 'い', meaning: 'ความหมาย, ความคิด', example: '意味 (いみ) = ความหมาย', level: 'N4' },
    { char: '員', furigana: 'いん', meaning: 'สมาชิก', example: '会社員 (かいしゃいん) = พนักงานบริษัท', level: 'N4' },
    { char: '院', furigana: 'いん', meaning: 'สถาบัน', example: '病院 (びょういん) = โรงพยาบาล', level: 'N4' },
    { char: '運', furigana: 'うん', meaning: 'ขนส่ง, โชค', example: '運転 (うんてん) = ขับรถ', level: 'N4' },
    { char: '駅', furigana: 'えき', meaning: 'สถานีรถไฟ', example: '駅 (えき) = สถานีรถไฟ', level: 'N4' },
    { char: '横', furigana: 'よこ', meaning: 'ข้าง, แนวนอน', example: '横 (よこ) = ข้าง', level: 'N4' },
    { char: '屋', furigana: 'や', meaning: 'ร้าน, บ้าน', example: '本屋 (ほんや) = ร้านหนังสือ', level: 'N4' },
    { char: '温', furigana: 'おん', meaning: 'อุณหภูมิ', example: '温度 (おんど) = อุณหภูมิ', level: 'N4' },
    { char: '化', furigana: 'か', meaning: 'เปลี่ยนแปลง', example: '文化 (ぶんか) = วัฒนธรรม', level: 'N4' },
    { char: '荷', furigana: 'に', meaning: 'สัมภาระ', example: '荷物 (にもつ) = สัมภาระ', level: 'N4' },
    // N3
    { char: '感', furigana: 'かん', meaning: 'ความรู้สึก', example: '感情 (かんじょう) = อารมณ์', level: 'N3' },
    { char: '覚', furigana: 'おぼえる/かく', meaning: 'จำ, รู้สึก', example: '覚える (おぼえる) = จำ', level: 'N3' },
    { char: '関', furigana: 'かん', meaning: 'เกี่ยวข้อง', example: '関係 (かんけい) = ความสัมพันธ์', level: 'N3' },
    { char: '観', furigana: 'かん', meaning: 'มุมมอง', example: '観光 (かんこう) = การท่องเที่ยว', level: 'N3' },
    { char: '願', furigana: 'ねがう/がん', meaning: 'ขอร้อง, ปรารถนา', example: '願う (ねがう) = ขอร้อง', level: 'N3' },
    { char: '季', furigana: 'き', meaning: 'ฤดู', example: '季節 (きせつ) = ฤดูกาล', level: 'N3' },
    { char: '機', furigana: 'き', meaning: 'เครื่อง, โอกาส', example: '機会 (きかい) = โอกาส', level: 'N3' },
    { char: '議', furigana: 'ぎ', meaning: 'ประชุม, สนทนา', example: '会議 (かいぎ) = การประชุม', level: 'N3' },
    { char: '求', furigana: 'もとめる/きゅう', meaning: 'ขอ, ต้องการ', example: '要求 (ようきゅう) = ความต้องการ', level: 'N3' },
    { char: '泣', furigana: 'なく', meaning: 'ร้องไห้', example: '泣く (なく) = ร้องไห้', level: 'N3' },
    { char: '球', furigana: 'きゅう', meaning: 'ลูกบอล, โลก', example: '地球 (ちきゅう) = โลก', level: 'N3' },
    { char: '救', furigana: 'すくう/きゅう', meaning: 'ช่วยเหลือ', example: '救急車 (きゅうきゅうしゃ) = รถพยาบาล', level: 'N3' },
    { char: '橋', furigana: 'はし', meaning: 'สะพาน', example: '橋 (はし) = สะพาน', level: 'N3' },
    { char: '経', furigana: 'けい', meaning: 'ผ่าน, เศรษฐกิจ', example: '経済 (けいざい) = เศรษฐกิจ', level: 'N3' },
    { char: '警', furigana: 'けい', meaning: 'ตำรวจ', example: '警察 (けいさつ) = ตำรวจ', level: 'N3' },
    { char: '劇', furigana: 'げき', meaning: 'ละคร', example: '劇場 (げきじょう) = โรงละคร', level: 'N3' },
    { char: '血', furigana: 'ち', meaning: 'เลือด', example: '血 (ち) = เลือด', level: 'N3' },
    { char: '件', furigana: 'けん', meaning: 'เรื่อง, กรณี', example: '事件 (じけん) = เหตุการณ์', level: 'N3' },
    { char: '庫', furigana: 'こ', meaning: 'โกดัง', example: '倉庫 (そうこ) = โกดัง', level: 'N3' },
    { char: '湖', furigana: 'みずうみ/こ', meaning: 'ทะเลสาบ', example: '湖 (みずうみ) = ทะเลสาบ', level: 'N3' },
    { char: '幸', furigana: 'しあわせ/こう', meaning: 'ความสุข', example: '幸福 (こうふく) = ความสุข', level: 'N3' },
    { char: '航', furigana: 'こう', meaning: 'เดินเรือ', example: '航空 (こうくう) = การบิน', level: 'N3' },
    { char: '告', furigana: 'つげる/こく', meaning: 'แจ้ง, บอก', example: '報告 (ほうこく) = รายงาน', level: 'N3' },
    { char: '混', furigana: 'まじる/こん', meaning: 'ปน, ผสม', example: '混雑 (こんざつ) = แออัด', level: 'N3' },
    { char: '祭', furigana: 'まつり/さい', meaning: 'เทศกาล', example: '祭り (まつり) = เทศกาล', level: 'N3' },
];

let currentKanjiList = window.kanjiData;
let currentLevel = 'all';

function renderKanjiLevelFilter() {
    let filterBar = document.querySelector('.kanji-level-filter');
    if (!filterBar) {
        filterBar = document.createElement('div');
        filterBar.className = 'kanji-level-filter';
        const kanjiHeader = document.querySelector('.kanji-header');
        if (kanjiHeader) kanjiHeader.appendChild(filterBar);
    }
    filterBar.innerHTML = `
        <label>ระดับ:
            <select class="kanji-filter-level">
                <option value="all">ทั้งหมด</option>
                <option value="N5">N5</option>
                <option value="N4">N4</option>
                <option value="N3">N3</option>
                <option value="เตรียมสอบ">เตรียมสอบ</option>
            </select>
        </label>
    `;
    filterBar.querySelector('.kanji-filter-level').value = currentLevel;
    filterBar.querySelector('.kanji-filter-level').onchange = (e) => {
        currentLevel = e.target.value;
        renderKanjiList(currentKanjiList);
    };
}

function renderKanjiList(list) {
    const container = document.querySelector('.kanji-list');
    if (!container) return;
    container.innerHTML = '';
    let filtered = list;
    if (currentLevel !== 'all') {
        filtered = list.filter(k => k.level === currentLevel);
    }
    filtered.forEach(kanji => {
        const card = document.createElement('div');
        card.className = 'kanji-card';
        card.innerHTML = `
            <span class="kanji-level-badge n${kanji.level ? kanji.level[1] : '5'}">${kanji.level || 'N5'}</span>
            <div class="kanji-furigana">${kanji.furigana}</div>
            <div class="kanji-char">${kanji.char}</div>
            <div class="kanji-meaning">${kanji.meaning}</div>
            <div class="kanji-example">${kanji.example}</div>
        `;
        card.onclick = () => showKanjiModal(kanji);
        container.appendChild(card);
    });
}

function showKanjiModal(kanji) {
    const modal = document.getElementById('kanji-modal');
    const body = modal.querySelector('.kanji-modal-body');
    body.innerHTML = `
        <span class="kanji-level-badge n${kanji.level ? kanji.level[1] : '5'}">${kanji.level || 'N5'}</span>
        <div class="kanji-furigana">${kanji.furigana}</div>
        <div class="kanji-char">${kanji.char}</div>
        <div class="kanji-meaning">${kanji.meaning}</div>
        <div class="kanji-example">${kanji.example}</div>
    `;
    modal.style.display = 'flex';
}

// ปิด modal
const modal = document.getElementById('kanji-modal');
if (modal) {
    modal.querySelector('.kanji-modal-close').onclick = () => modal.style.display = 'none';
    modal.querySelector('.kanji-modal-bg').onclick = () => modal.style.display = 'none';
}

// ค้นหา
const searchInput = document.querySelector('.kanji-search');
if (searchInput) {
    searchInput.addEventListener('input', e => {
        const q = e.target.value.trim();
        if (!q) {
            currentKanjiList = window.kanjiData;
        } else {
            currentKanjiList = window.kanjiData.filter(k => k.char.includes(q) || k.furigana.includes(q) || k.meaning.includes(q) || k.example.includes(q));
        }
        renderKanjiList(currentKanjiList);
    });
}

// สุ่มคันจิ
const randomBtn = document.querySelector('.kanji-random-btn');
if (randomBtn) {
    randomBtn.onclick = () => {
        const rand = window.kanjiData[Math.floor(Math.random() * window.kanjiData.length)];
        renderKanjiList([rand]);
    };
}

// โหลดเริ่มต้น
window.addEventListener('DOMContentLoaded', () => {
    renderKanjiLevelFilter();
    renderKanjiList(window.kanjiData);
});
