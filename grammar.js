// โหลดข้อมูลไวยากรณ์ Minna no Nihongo
let grammarData = [];

// ตรวจสอบว่ามีข้อมูล Minna no Nihongo หรือไม่
if (typeof minnaGrammarData !== 'undefined') {
    grammarData = minnaGrammarData;
} else {
    // ถ้าไม่มี ใช้ข้อมูลเก่า
    grammarData = [
    {
        id: 'desu',
        title: 'การใช้ です (desu)',
        pattern: '〜は〜です',
        explanation: 'เป็นรูปประโยคพื้นฐาน ใช้บอกว่า A คือ B หรือยืนยันข้อมูล です เป็นคำกริยาช่วยแสดงความสุภาพ',
        level: 'N5',
        difficulty: 'ง่าย',
        examples: [
            { jp: '私は学生です。', romaji: 'Watashi wa gakusei desu.', th: 'ฉันเป็นนักเรียน' },
            { jp: 'これは本です。', romaji: 'Kore wa hon desu.', th: 'นี่คือหนังสือ' },
            { jp: 'あの人は日本人ではありません。', romaji: 'Ano hito wa nihonjin dewa arimasen.', th: 'คนนั้นไม่ใช่คนญี่ปุ่น' },
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: 'はじめまして。私は田中です。',
                    romaji: 'Hajimemashite. Watashi wa Tanaka desu.',
                    translation: 'สวัสดีครับ/ค่ะ ฉันชื่อทานากะ'
                },
                {
                    speaker: 'Bさん',
                    text: 'はじめまして。私は鈴木です。よろしくお願いします。',
                    romaji: 'Hajimemashite. Watashi wa Suzuki desu. Yoroshiku onegaishimasu.',
                    translation: 'สวัสดีครับ/ค่ะ ฉันชื่อซูซูกิ ยินดีที่ได้รู้จักครับ/ค่ะ'
                }
            ]
        },
        notes: [
            'です เป็นรูปสุภาพ ใช้ในสถานการณ์ทางการหรือพูดกับคนที่ไม่สนิท',
            'ในภาษาพูดแบบไม่เป็นทางการ อาจใช้ だ (da) แทน です',
            'รูปปฏิเสธของ です คือ ではありません (dewa arimasen) หรือ じゃありません (ja arimasen) ในภาษาพูด',
            'ใช้ です กับคำนามและคำคุณศัพท์ な (na-adjectives)',
            'ไม่ใช้ です กับคำคุณศัพท์ い (i-adjectives) โดยตรง'
        ],
        commonMistakes: [
            'ใช้ です กับคำคุณศัพท์ い โดยตรง (ผิด: 高いですです, ถูก: 高いです)',
            'ลืมใช้ です ในประโยคบอกเล่า (ผิด: 私は学生, ถูก: 私は学生です)',
            'ใช้ です ซ้ำซ้อน (ผิด: これは本ですです, ถูก: これは本です)'
        ],
        compareWith: 'です (สุภาพ) vs だ (ไม่เป็นทางการ)'
    },
    {
        id: 'masu',
        title: 'รูป ます (masu)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'กริยารูป ます',
        structureDiagram: `
            <table class="grammar-diagram">
                <tr><td>V (รูป masu)</td></tr>
                <tr><td>食べます・飲みます・行きます</td></tr>
            </table>
        `,
        explanation: 'ใช้แสดงการกระทำที่เกิดขึ้นเป็นประจำ กำลังจะเกิดขึ้น หรือเป็นการชวน/ขอร้องอย่างสุภาพ เช่น "กิน", "ไป", "ดู"',
        usagePoints: [
            'รูป ます เป็นรูปสุภาพ ใช้พูดกับคนที่ไม่สนิทหรือในสถานการณ์ทางการ',
            'ผันกริยาจากรูป辞書形 (รูปดิก) เป็นรูป ます ตามกลุ่มกริยา',
            'ใช้ในประโยคบอกเล่า, ปฏิเสธ, คำถาม'
        ],
        examples: [
            { jp: '毎日日本語を勉強します。', romaji: 'Mainichi Nihongo o benkyou shimasu.', th: 'เรียนภาษาญี่ปุ่นทุกวัน' },
            { jp: '明日映画を見ます。', romaji: 'Ashita eiga o mimasu.', th: 'พรุ่งนี้จะดูหนัง' },
            { jp: '一緒に行きませんか。', romaji: 'Issho ni ikimasen ka.', th: 'ไปด้วยกันไหมครับ/คะ' }
        ],
        extraExamples: [
            { jp: '水を飲みます。', romaji: 'Mizu o nomimasu.', th: 'ดื่มน้ำ' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: '毎日何時に起きますか。',
                    romaji: 'Mainichi nan-ji ni okimasu ka.',
                    translation: 'ตื่นนอนกี่โมงทุกวันครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: '7時に起きます。',
                    romaji: 'Shichi-ji ni okimasu.',
                    translation: 'ตื่นนอน 7 โมงครับ/ค่ะ'
                },
                {
                    speaker: 'Aさん',
                    text: 'そうですか。私は6時に起きます。',
                    romaji: 'Sou desu ka. Watashi wa roku-ji ni okimasu.',
                    translation: 'เหรอครับ/คะ ฉันตื่นนอน 6 โมง'
                }
            ]
        },
        notes: [
            'รูป ます เป็นรูปสุภาพ ใช้ในสถานการณ์ทางการหรือพูดกับคนที่ไม่สนิท',
            'รูปปฏิเสธคือ ません (masen) เช่น 行きません (ikimasen) = ไม่ไป',
            'รูปคำถามคือ ますか (masu ka) เช่น 行きますか (ikimasu ka) = ไปไหม',
            'รูปอดีตคือ ました (mashita) เช่น 行きました (ikimashita) = ไปแล้ว',
            'รูปอดีตปฏิเสธคือ ませんでした (masen deshita) เช่น 行きませんでした (ikimasen deshita) = ไม่ได้ไป'
        ],
        commonMistakes: [
            'ใช้รูป ます กับคำคุณศัพท์ (ผิด: 高います, ถูก: 高いです)',
            'ลืมผันกริยาเป็นรูป ます (ผิด: 食べるです, ถูก: 食べます)',
            'ใช้ ます กับคำนาม (ผิด: 学生ます, ถูก: 学生です)'
        ],
        compareWith: 'ます (สุภาพ) vs る/う (ไม่เป็นทางการ)'
    },
    {
        id: 'wa',
        title: 'คำช่วย は (wa)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'หัวข้อ + は + ส่วนขยาย/คำอธิบาย',
        structureDiagram: `
            <table class="grammar-diagram">
                <tr><td>หัวข้อ</td><td>は</td><td>ส่วนขยาย</td></tr>
                <tr><td>私は</td><td>は</td><td>学生です</td></tr>
            </table>
        `,
        explanation: 'ใช้ชี้หัวข้อของประโยค สิ่งที่อยู่ข้างหน้า は คือสิ่งที่กำลังพูดถึง',
        examples: [
            { jp: '私はタイ人です。', romaji: 'Watashi wa Taijin desu.', th: 'ฉันเป็นคนไทย' },
            { jp: 'これは私の本です。', romaji: 'Kore wa watashi no hon desu.', th: 'นี่คือหนังสือของฉัน' },
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: '田中さんは何歳ですか。',
                    romaji: 'Tanaka-san wa nan-sai desu ka.',
                    translation: 'คุณทานากะอายุเท่าไหร่ครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: '私は25歳です。',
                    romaji: 'Watashi wa nijuugo-sai desu.',
                    translation: 'ฉันอายุ 25 ปีครับ/ค่ะ'
                },
                {
                    speaker: 'Aさん',
                    text: 'そうですか。私は23歳です。',
                    romaji: 'Sou desu ka. Watashi wa nijuusan-sai desu.',
                    translation: 'เหรอครับ/คะ ฉันอายุ 23 ปี'
                }
            ]
        },
        notes: [
            'は ออกเสียงว่า "วะ" ไม่ใช่ "ฮะ"',
            'ใช้ は เพื่อชี้หัวข้อของประโยค สิ่งที่กำลังพูดถึง',
            'สามารถใช้ は กับคำนาม, คำสรรพนาม, หรือวลีได้',
            'ในประโยคเดียวกัน สามารถใช้ は ได้หลายครั้ง แต่ความหมายจะเปลี่ยนไป',
            'は มักใช้คู่กับ です หรือ ます'
        ],
        commonMistakes: [
            'ออกเสียง は ผิดเป็น "ฮะ" (ถูกต้องคือ "วะ")',
            'ใช้ は กับคำกริยาโดยตรง (ผิด: 食べは, ถูก: 食べます)',
            'ใช้ は ซ้ำซ้อนในประโยคเดียวกันโดยไม่จำเป็น'
        ],
        compareWith: 'は (หัวข้อ) vs が (ประธาน)'
    },
    {
        id: 'mo',
        title: 'คำช่วย も (mo)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'คำนาม + も',
        structureDiagram: `
          <table class="grammar-diagram">
            <tr><td>คำนาม</td><td>も</td></tr>
            <tr><td>私</td><td>も</td></tr>
          </table>
        `,
        explanation: 'ใช้แสดงความหมาย "ด้วย, เช่นกัน" ใช้แทน は เมื่อต้องการเน้นว่าสิ่งที่พูดถึงมีลักษณะหรือคุณสมบัติเหมือนกับสิ่งที่กล่าวไปก่อนหน้านี้',
        usagePoints: [
          'ใช้ も แทน は เพื่อเน้นว่า "...ก็...เช่นกัน"',
          'ใช้ได้กับคำนาม, กริยา, คุณศัพท์',
          'ถ้าใช้ も ซ้อนกันหลายครั้ง จะเน้นความหมายมากขึ้น'
        ],
        examples: [
          { jp: '私は学生です。田中さんも学生です。', romaji: 'Watashi wa gakusei desu. Tanaka-san mo gakusei desu.', th: 'ฉันเป็นนักเรียน คุณทานากะก็เป็นนักเรียนเช่นกัน' },
          { jp: 'この本は面白いです。あの本も面白いです。', romaji: 'Kono hon wa omoshiroi desu. Ano hon mo omoshiroi desu.', th: 'หนังสือเล่มนี้น่าสนใจ หนังสือเล่มนั้นก็น่าสนใจเช่นกัน' }
        ],
        extraExamples: [
          { jp: '私も行きます。', romaji: 'Watashi mo ikimasu.', th: 'ฉันก็จะไปด้วย' }
        ],
        conversation: {
          title: 'ตัวอย่างบทสนทนา',
          items: [
            {
                    speaker: 'Aさん',
                    text: '私は日本語を勉強しています。',
                    romaji: 'Watashi wa Nihongo o benkyou shite imasu.',
                    translation: 'ฉันกำลังเรียนภาษาญี่ปุ่น'
            },
            {
                    speaker: 'Bさん',
                    text: '私も日本語を勉強しています。',
                    romaji: 'Watashi mo Nihongo o benkyou shite imasu.',
                    translation: 'ฉันก็กำลังเรียนภาษาญี่ปุ่นเช่นกัน'
                },
                {
                    speaker: 'Aさん',
                    text: 'そうですか。一緒に勉強しましょう。',
                    romaji: 'Sou desu ka. Issho ni benkyou shimashou.',
                    translation: 'เหรอครับ/คะ มาฝึกฝนด้วยกันเถอะ'
                }
            ]
        },
        notes: [
            'も ใช้แทน は เมื่อต้องการเน้นความหมาย "ด้วย, เช่นกัน"',
            'สามารถใช้ も กับคำนาม, กริยา, และคำคุณศัพท์ได้',
            'เมื่อใช้ も ซ้อนกันหลายครั้ง จะเน้นความหมายมากขึ้น เช่น 私も田中さんも学生です (ทั้งฉันและคุณทานากะเป็นนักเรียน)',
            'も มักใช้ในประโยคที่สอง เพื่อตอบรับหรือยืนยันข้อมูลจากประโยคแรก',
            'สามารถใช้ も กับคำถามได้ เช่น あなたも学生ですか (คุณเป็นนักเรียนด้วยหรือเปล่า)'
        ],
        commonMistakes: [
            'ใช้ も กับ は พร้อมกัน (ผิด: 私もは, ถูก: 私も)',
            'ใช้ も กับคำกริยาโดยตรง (ผิด: 食べも, ถูก: 私も食べます)',
            'ใช้ も ผิดบริบท (ควรใช้ は แทนเมื่อไม่ต้องการเน้นความหมาย "ด้วย")'
        ],
        compareWith: 'も (ด้วย, เช่นกัน) vs は (หัวข้อ)'
    },
    {
        id: 'to',
        title: 'คำช่วย と (to)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'คำนาม + と + คำนาม',
        explanation: 'ใช้เชื่อมคำนามที่มีความหมายว่า "และ" หรือ "กับ" ใช้เชื่อมคำนามที่มีความสำคัญเท่ากัน',
        examples: [
            { jp: '私は友達と映画を見ます。', romaji: 'Watashi wa tomodachi to eiga o mimasu.', th: 'ฉันดูหนังกับเพื่อน' },
            { jp: 'りんごとバナナを買いました。', romaji: 'Ringo to banana o kaimashita.', th: 'ซื้อแอปเปิ้ลและกล้วย' },
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: '週末何をしますか。',
                    romaji: 'Shuumatsu nani o shimasu ka.',
                    translation: 'วันหยุดสุดสัปดาห์จะทำอะไรครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: '友達と買い物に行きます。',
                    romaji: 'Tomodachi to kaimono ni ikimasu.',
                    translation: 'จะไปช้อปปิ้งกับเพื่อนครับ/ค่ะ'
                },
                {
                    speaker: 'Aさん',
                    text: 'そうですか。私は家族と旅行に行きます。',
                    romaji: 'Sou desu ka. Watashi wa kazoku to ryokou ni ikimasu.',
                    translation: 'เหรอครับ/คะ ฉันจะไปเที่ยวกับครอบครัว'
                }
            ]
        },
        notes: [
            'と ใช้เชื่อมคำนามที่มีความสำคัญเท่ากัน',
            'สามารถใช้ と เชื่อมคำนามได้หลายคำ เช่น りんごとバナナとオレンジ (แอปเปิ้ล กล้วย และส้ม)',
            'と ใช้แสดงการกระทำร่วมกัน เช่น 友達と話す (คุยกับเพื่อน)',
            'と ใช้แสดงการเปรียบเทียบ เช่น 私とあなた (ฉันกับคุณ)',
            'と ใช้แสดงการอ้างอิง เช่น 先生の言うとおり (ตามที่ครูพูด)'
        ],
        commonMistakes: [
            'ใช้ と กับคำกริยา (ผิด: 食べると, ถูก: 食べ物と)',
            'ใช้ と กับคำคุณศัพท์ (ผิด: 高いと, ถูก: 高いものと)',
            'ใช้ と ซ้ำซ้อน (ผิด: りんごとバナナと, ถูก: りんごとバナナ)'
        ],
        compareWith: 'と (และ, กับ) vs や (และอื่นๆ)'
    },
    {
        id: 'ni',
        title: 'คำช่วย に (ni)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'คำนาม + に + คำกริยา',
        explanation: 'ใช้แสดงจุดหมายปลายทาง (ไปที่...), เวลา (ที่...), ผู้รับ (ให้กับ...), หรือการเปลี่ยนแปลง (กลายเป็น...)',
        examples: [
            { jp: '学校に行きます。', romaji: 'Gakkou ni ikimasu.', th: 'ไปโรงเรียน' },
            { jp: '9時に起きます。', romaji: 'Ku-ji ni okimasu.', th: 'ตื่นนอนตอน 9 โมง' },
            { jp: '友達に本をあげます。', romaji: 'Tomodachi ni hon o agemasu.', th: 'ให้หนังสือกับเพื่อน' },
            { jp: '医者になります。', romaji: 'Isha ni narimasu.', th: 'จะกลายเป็นหมอ' },
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: '何時に学校に行きますか。',
                    romaji: 'Nan-ji ni gakkou ni ikimasu ka.',
                    translation: 'ไปโรงเรียนกี่โมงครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: '8時に学校に行きます。',
                    romaji: 'Hachi-ji ni gakkou ni ikimasu.',
                    translation: 'ไปโรงเรียน 8 โมงครับ/ค่ะ'
                },
                {
                    speaker: 'Aさん',
                    text: 'そうですか。私は7時半に行きます。',
                    romaji: 'Sou desu ka. Watashi wa shichi-ji han ni ikimasu.',
                    translation: 'เหรอครับ/คะ ฉันไป 7 โมงครึ่ง'
                }
            ]
        },
        notes: [
            'に ใช้แสดงจุดหมายปลายทาง เช่น 学校に行く (ไปโรงเรียน)',
            'に ใช้แสดงเวลา เช่น 9時に起きる (ตื่นนอนตอน 9 โมง)',
            'に ใช้แสดงผู้รับ เช่น 友達にあげる (ให้กับเพื่อน)',
            'に ใช้แสดงการเปลี่ยนแปลง เช่น 医者になる (กลายเป็นหมอ)',
            'に ใช้แสดงสถานที่ที่มีอยู่ เช่น 机の上にある (อยู่บนโต๊ะ)'
        ],
        commonMistakes: [
            'ใช้ に กับคำกริยาโดยตรง (ผิด: 行に, ถูก: 学校に行く)',
            'ใช้ に กับคำคุณศัพท์ (ผิด: 高いに, ถูก: 高いところに)',
            'ใช้ に ผิดบริบท (ควรใช้ へ แทนเมื่อเน้นทิศทาง)'
        ],
        compareWith: 'に (จุดหมาย, เวลา) vs へ (ทิศทาง)'
    },
    {
        id: 'e',
        title: 'คำช่วย へ (e)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'คำนาม + へ + คำกริยา',
        explanation: 'ใช้แสดงทิศทางหรือจุดหมายปลายทาง (ไปทาง.../ไปที่...) คล้ายกับ に แต่เน้นทิศทางมากกว่า',
        examples: [
            { jp: '東京へ行きます。', romaji: 'Toukyou e ikimasu.', th: 'ไปโตเกียว' },
            { jp: '右へ曲がります。', romaji: 'Migi e magarimasu.', th: 'เลี้ยวขวา' },
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: 'どこへ行きますか。',
                    romaji: 'Doko e ikimasu ka.',
                    translation: 'จะไปไหนครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: '学校へ行きます。',
                    romaji: 'Gakkou e ikimasu.',
                    translation: 'จะไปโรงเรียนครับ/ค่ะ'
                },
                {
                    speaker: 'Aさん',
                    text: 'そうですか。私は駅へ行きます。',
                    romaji: 'Sou desu ka. Watashi wa eki e ikimasu.',
                    translation: 'เหรอครับ/คะ ฉันจะไปสถานี'
                }
            ]
        },
        notes: [
            'へ ออกเสียงว่า "เอะ" ไม่ใช่ "เฮะ"',
            'へ ใช้แสดงทิศทางหรือจุดหมายปลายทาง',
            'へ เน้นทิศทางมากกว่า に',
            'へ ใช้ได้กับคำนามที่แสดงสถานที่หรือทิศทาง',
            'へ มักใช้กับกริยาแสดงการเคลื่อนที่ เช่น 行く (ไป), 来る (มา), 帰る (กลับ)'
        ],
        commonMistakes: [
            'ออกเสียง へ ผิดเป็น "เฮะ" (ถูกต้องคือ "เอะ")',
            'ใช้ へ กับคำกริยาโดยตรง (ผิด: 行へ, ถูก: 学校へ行く)',
            'ใช้ へ กับคำคุณศัพท์ (ผิด: 高いへ, ถูก: 高いところへ)'
        ],
        compareWith: 'へ (ทิศทาง) vs に (จุดหมาย)'
    },
    {
        id: 'de',
        title: 'คำช่วย で (de)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'คำนาม + で + คำกริยา',
        explanation: 'ใช้แสดงสถานที่ที่เกิดการกระทำ (ที่...), วิธีการ (โดย...), หรือเครื่องมือ (ด้วย...)',
        examples: [
            { jp: '図書館で勉強します。', romaji: 'Toshokan de benkyou shimasu.', th: 'เรียนที่ห้องสมุด' },
            { jp: '電車で学校へ行きます。', romaji: 'Densha de gakkou e ikimasu.', th: 'ไปโรงเรียนด้วยรถไฟ' },
            { jp: '日本語で話します。', romaji: 'Nihongo de hanashimasu.', th: 'พูดเป็นภาษาญี่ปุ่น' },
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: 'どこで日本語を勉強していますか。',
                    romaji: 'Doko de Nihongo o benkyou shite imasu ka.',
                    translation: 'เรียนภาษาญี่ปุ่นที่ไหนครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: '学校で勉強しています。',
                    romaji: 'Gakkou de benkyou shite imasu.',
                    translation: 'เรียนที่โรงเรียนครับ/ค่ะ'
                },
                {
                    speaker: 'Aさん',
                    text: 'そうですか。私は家で勉強しています。',
                    romaji: 'Sou desu ka. Watashi wa ie de benkyou shite imasu.',
                    translation: 'เหรอครับ/คะ ฉันเรียนที่บ้าน'
                }
            ]
        },
        notes: [
            'で ใช้แสดงสถานที่ที่เกิดการกระทำ เช่น 学校で勉強する (เรียนที่โรงเรียน)',
            'で ใช้แสดงวิธีการ เช่น 電車で行く (ไปด้วยรถไฟ)',
            'で ใช้แสดงเครื่องมือ เช่น ペンで書く (เขียนด้วยปากกา)',
            'で ใช้แสดงภาษา เช่น 日本語で話す (พูดเป็นภาษาญี่ปุ่น)',
            'で ใช้แสดงจำนวนรวม เช่น 3人で行く (ไปด้วยกัน 3 คน)'
        ],
        commonMistakes: [
            'ใช้ で กับคำกริยาโดยตรง (ผิด: 勉強で, ถูก: 学校で勉強する)',
            'ใช้ で กับคำคุณศัพท์ (ผิด: 高いで, ถูก: 高いところで)',
            'ใช้ で ผิดบริบท (ควรใช้ に แทนเมื่อแสดงจุดหมายปลายทาง)'
        ],
        compareWith: 'で (สถานที่, วิธีการ) vs に (จุดหมาย)'
    },
    {
        id: 'o',
        title: 'คำช่วย を (o)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'คำนาม + を + คำกริยา',
        explanation: 'ใช้แสดงกรรมตรง (object) ของคำกริยา',
        examples: [
            { jp: '本を読みます。', romaji: 'Hon o yomimasu.', th: 'อ่านหนังสือ' },
            { jp: '水を飲みます。', romaji: 'Mizu o nomimasu.', th: 'ดื่มน้ำ' },
            { jp: '日本語を勉強します。', romaji: 'Nihongo o benkyou shimasu.', th: 'เรียนภาษาญี่ปุ่น' },
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: '何を食べますか。',
                    romaji: 'Nani o tabemasu ka.',
                    translation: 'จะกินอะไรครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: 'ラーメンを食べます。',
                    romaji: 'Ramen o tabemasu.',
                    translation: 'จะกินราเม็งครับ/ค่ะ'
                },
                {
                    speaker: 'Aさん',
                    text: 'そうですか。私は寿司を食べます。',
                    romaji: 'Sou desu ka. Watashi wa sushi o tabemasu.',
                    translation: 'เหรอครับ/คะ ฉันจะกินซูชิ'
                }
            ]
        },
        notes: [
            'を ออกเสียงว่า "โอ" ไม่ใช่ "โว"',
            'を ใช้แสดงกรรมตรงของกริยา',
            'を ใช้กับกริยาที่ต้องการกรรมตรง เช่น 食べる (กิน), 飲む (ดื่ม), 読む (อ่าน)',
            'を ใช้แสดงการเคลื่อนที่ผ่าน เช่น 公園を散歩する (เดินเล่นในสวนสาธารณะ)',
            'を ใช้แสดงการออกจากสถานที่ เช่น 家を出る (ออกจากบ้าน)'
        ],
        commonMistakes: [
            'ออกเสียง を ผิดเป็น "โว" (ถูกต้องคือ "โอ")',
            'ใช้ を กับคำกริยาโดยตรง (ผิด: 食べを, ถูก: ご飯を食べる)',
            'ใช้ を กับคำคุณศัพท์ (ผิด: 高いを, ถูก: 高いものを)'
        ],
        compareWith: 'を (กรรมตรง) vs が (ประธาน)'
    },
    {
        id: 'ga',
        title: 'คำช่วย が (ga)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'คำนาม + が + คำกริยา/คำคุณศัพท์',
        explanation: 'ใช้แสดงประธาน (subject) ของประโยค หรือใช้เน้นประธานในบางกรณี',
        examples: [
            { jp: '雨が降っています。', romaji: 'Ame ga futte imasu.', th: 'ฝนกำลังตก' },
            { jp: '私が行きます。', romaji: 'Watashi ga ikimasu.', th: 'ฉันจะไป (เน้นว่า "ฉัน" จะไป)' },
            { jp: 'この本が面白いです。', romaji: 'Kono hon ga omoshiroi desu.', th: 'หนังสือเล่มนี้น่าสนใจ (เน้นว่าเล่ม "นี้" น่าสนใจ)' },
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: '誰が日本語を勉強していますか。',
                    romaji: 'Dare ga Nihongo o benkyou shite imasu ka.',
                    translation: 'ใครกำลังเรียนภาษาญี่ปุ่นครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: '私が勉強しています。',
                    romaji: 'Watashi ga benkyou shite imasu.',
                    translation: 'ฉันกำลังเรียนครับ/ค่ะ'
                },
                {
                    speaker: 'Aさん',
                    text: 'そうですか。私も勉強しています。',
                    romaji: 'Sou desu ka. Watashi mo benkyou shite imasu.',
                    translation: 'เหรอครับ/คะ ฉันก็กำลังเรียนเหมือนกัน'
                }
            ]
        },
        notes: [
            'が ใช้แสดงประธานของประโยค',
            'が ใช้เน้นประธานในบางกรณี เช่น 私が行きます (ฉันจะไป)',
            'が ใช้กับคำกริยาแสดงการมีอยู่ เช่น ある (มี), いる (มี)',
            'が ใช้กับคำคุณศัพท์ เช่น 高い (สูง), 面白い (น่าสนใจ)',
            'が ใช้แสดงความสามารถ เช่น 日本語が話せる (พูดภาษาญี่ปุ่นได้)'
        ],
        commonMistakes: [
            'ใช้ が กับคำกริยาโดยตรง (ผิด: 行が, ถูก: 私が行く)',
            'ใช้ が กับคำคุณศัพท์โดยตรง (ผิด: 高いが, ถูก: 山が高い)',
            'ใช้ が ผิดบริบท (ควรใช้ は แทนเมื่อไม่ต้องการเน้นประธาน)'
        ],
        compareWith: 'が (ประธาน) vs は (หัวข้อ)'
    },
    {
        id: 'no',
        title: 'คำช่วย の (no)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'คำนาม + の + คำนาม',
        explanation: 'ใช้แสดงความเป็นเจ้าของ (ของ...) หรือความสัมพันธ์ระหว่างคำนาม',
        examples: [
            { jp: '私の本', romaji: 'Watashi no hon', th: 'หนังสือของฉัน' },
            { jp: '学校の先生', romaji: 'Gakkou no sensei', th: 'ครูของโรงเรียน' },
            { jp: '日本の食べ物', romaji: 'Nihon no tabemono', th: 'อาหารญี่ปุ่น' },
        ]
    },
    {
        id: 'kara',
        title: 'คำช่วย から (kara)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'คำนาม/เวลา/ประโยค + から',
        explanation: 'ใช้แสดงจุดเริ่มต้น (จาก...) หรือเหตุผล (เพราะ...) ในประโยค เช่น "กลับจากโรงเรียน", "เพราะเหนื่อยจึงพักผ่อน"',
        usagePoints: [
            'ใช้ から หลังคำนามหรือเวลาเพื่อแสดงจุดเริ่มต้น เช่น 9時から (ตั้งแต่ 9 โมง)',
            'ใช้ から หลังประโยคเพื่อแสดงเหตุผล เช่น 疲れたから休みます (เพราะเหนื่อยจึงพักผ่อน)',
            'ในประโยคเหตุผล から มักอยู่ท้ายประโยคเหตุผล แล้วตามด้วยผลลัพธ์',
            'ใช้ から กับ まで เพื่อแสดงช่วงเวลา เช่น 9時から5時まで (ตั้งแต่ 9 โมงถึง 5 โมง)'
        ],
        examples: [
            { jp: '学校から帰ります。', romaji: 'Gakkou kara kaerimasu.', th: 'กลับจากโรงเรียน' },
            { jp: '9時から始まります。', romaji: 'Ku-ji kara hajimarimasu.', th: 'เริ่มตั้งแต่ 9 โมง' },
            { jp: '疲れたから休みます。', romaji: 'Tsukareta kara yasumimasu.', th: 'พักผ่อนเพราะเหนื่อย' },
            { jp: '今日は忙しいから行きません。', romaji: 'Kyou wa isogashii kara ikimasen.', th: 'วันนี้ไม่ไปเพราะยุ่ง' }
        ],
        extraExamples: [
            { jp: '駅から歩きます。', romaji: 'Eki kara arukimasu.', th: 'เดินจากสถานี' },
            { jp: 'ここから見えます。', romaji: 'Koko kara miemasu.', th: 'มองเห็นจากตรงนี้' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: 'どうして来なかったんですか。',
                    romaji: 'Doushite konakatta n desu ka.',
                    translation: 'ทำไมถึงไม่มาครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: '頭が痛かったから、来ませんでした。',
                    romaji: 'Atama ga itakatta kara, kimasen deshita.',
                    translation: 'เพราะปวดหัวเลยไม่มาครับ/ค่ะ'
                }
            ]
        },
        notes: [
            'ถ้าใช้กับเวลา/สถานที่ แปลว่า "จาก..."',
            'ถ้าใช้กับประโยค แปลว่า "เพราะ..."',
            'ในภาษาพูด から จะไม่สุภาพเท่า ので'
        ],
        commonMistakes: [
            'ใช้ から กับ まで สลับตำแหน่ง (ผิด: までから, ถูก: からまで)',
            'ใช้ から กับประโยคสุภาพมากเกินไป (ควรใช้ ので ในสถานการณ์ทางการ)'
        ],
        compareWith: 'から (เพราะ/จาก) vs ので (เพราะ... สุภาพกว่า)'
    },
    {
        id: 'made',
        title: 'คำช่วย まで (made)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'คำนาม/เวลา + まで',
        explanation: 'ใช้แสดงจุดสิ้นสุด (จนถึง...) ของเวลา สถานที่ หรือขอบเขต เช่น "เดินไปจนถึงโรงเรียน", "รอจนถึง 5 โมง"',
        usagePoints: [
            'ใช้ まで หลังคำนามหรือเวลาเพื่อแสดงจุดสิ้นสุด เช่น 5時まで (จนถึง 5 โมง)',
            'ใช้ から กับ まで เพื่อแสดงช่วงเวลา เช่น 9時から5時まで (ตั้งแต่ 9 โมงถึง 5 โมง)',
            'ใช้ まで กับสถานที่ เช่น 駅まで歩きます (เดินไปจนถึงสถานี)'
        ],
        examples: [
            { jp: '学校まで歩きます。', romaji: 'Gakkou made arukimasu.', th: 'เดินไปจนถึงโรงเรียน' },
            { jp: '5時まで待ちます。', romaji: 'Go-ji made machimasu.', th: 'รอจนถึง 5 โมง' },
            { jp: 'ここまで来てください。', romaji: 'Koko made kite kudasai.', th: 'กรุณามาถึงตรงนี้' }
        ],
        extraExamples: [
            { jp: '明日までに終わります。', romaji: 'Ashita made ni owarimasu.', th: 'จะเสร็จภายในพรุ่งนี้' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: '何時まで勉強しますか。',
                    romaji: 'Nan-ji made benkyou shimasu ka.',
                    translation: 'จะเรียนถึงกี่โมงครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: '10時まで勉強します。',
                    romaji: 'Juu-ji made benkyou shimasu.',
                    translation: 'จะเรียนถึง 10 โมงครับ/ค่ะ'
                }
            ]
        },
        notes: [
            'まで ใช้แสดงขอบเขตหรือจุดสิ้นสุด',
            'สามารถใช้กับเวลา, สถานที่, จำนวน ฯลฯ'
        ],
        commonMistakes: [
            'ใช้ まで กับ から สลับตำแหน่ง (ผิด: までから, ถูก: からまで)',
            'ลืมใช้ まで เมื่อพูดถึงขอบเขต'
        ],
        compareWith: 'まで (จนถึง...) vs から (จาก...)'
    },
    {
        id: 'jikan',
        title: 'การบอกเวลา (時間)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'เวลา + に + คำกริยา',
        explanation: 'ใช้ に หลังเวลาเพื่อแสดงเวลาที่เกิดการกระทำ เช่น "ตื่นนอนตอน 7 โมง", "นอนกี่โมง"',
        usagePoints: [
            'ใช้ に หลังตัวเลขเวลา เช่น 7時に (ตอน 7 โมง)',
            'ถ้าเป็นกิจวัตรประจำวัน อาจละ に ได้ เช่น 毎朝6時起きます (ทุกเช้าตื่น 6 โมง)',
            'ใช้กับคำถามเกี่ยวกับเวลา เช่น 何時に (กี่โมง)'
        ],
        examples: [
            { jp: '7時に起きます。', romaji: 'Shichi-ji ni okimasu.', th: 'ตื่นนอนตอน 7 โมง' },
            { jp: '何時に寝ますか。', romaji: 'Nan-ji ni nemasu ka.', th: 'นอนกี่โมงครับ/คะ' },
            { jp: '午後3時に会いましょう。', romaji: 'Gogo san-ji ni aimashou.', th: 'เจอกันตอนบ่าย 3 โมง' }
        ],
        extraExamples: [
            { jp: '毎朝6時に起きます。', romaji: 'Maiasa roku-ji ni okimasu.', th: 'ทุกเช้าตื่น 6 โมง' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: '毎日何時に寝ますか。',
                    romaji: 'Mainichi nan-ji ni nemasu ka.',
                    translation: 'ทุกวันนอนกี่โมงครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: '11時に寝ます。',
                    romaji: 'Juu-ichi-ji ni nemasu.',
                    translation: 'นอน 5 ทุ่มครับ/ค่ะ'
                }
            ]
        },
        notes: [
            'に ใช้กับเวลาเฉพาะเจาะจง เช่น 7時に, 3月に',
            'ถ้าเป็นช่วงเวลา (เช่น 朝, 昼, 夜) อาจละ に ได้'
        ],
        commonMistakes: [
            'ลืมเติม に หลังเวลา',
            'ใช้ に กับคำที่ไม่ใช่เวลาเฉพาะ (ผิด: 毎日に, ถูก: 毎日にไม่ต้องมี に)'
        ],
        compareWith: 'に (เวลาเฉพาะ) vs ไม่มี に (กิจวัตร/ช่วงเวลา)'
    },
    {
        id: 'youbi',
        title: 'วันในสัปดาห์ (曜日)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'วัน + に + คำกริยา',
        explanation: 'ใช้ に หลังวันในสัปดาห์เพื่อแสดงวันที่มีการกระทำ เช่น "ไปโรงเรียนวันจันทร์", "พักผ่อนวันอาทิตย์"',
        usagePoints: [
            'ใช้ に หลังชื่อวัน เช่น 月曜日に (วันจันทร์)',
            'ถ้าเป็นกิจวัตรประจำสัปดาห์ อาจละ に ได้ เช่น 毎週日曜日休みます (หยุดทุกวันอาทิตย์)',
            'ใช้กับคำถามเกี่ยวกับวัน เช่น 何曜日に (วันอะไร)'
        ],
        examples: [
            { jp: '月曜日に学校へ行きます。', romaji: 'Getsuyoubi ni gakkou e ikimasu.', th: 'ไปโรงเรียนวันจันทร์' },
            { jp: '日曜日は休みます。', romaji: 'Nichiyoubi wa yasumimasu.', th: 'พักผ่อนวันอาทิตย์' },
            { jp: '火曜日にテストがあります。', romaji: 'Kayoubi ni tesuto ga arimasu.', th: 'มีสอบวันอังคาร' }
        ],
        extraExamples: [
            { jp: '毎週土曜日に映画を見ます。', romaji: 'Maishuu doyoubi ni eiga o mimasu.', th: 'ดูหนังทุกวันเสาร์' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: '何曜日にアルバイトがありますか。',
                    romaji: 'Nan youbi ni arubaito ga arimasu ka.',
                    translation: 'มีงานพิเศษวันอะไรบ้างครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: '水曜日と金曜日にあります。',
                    romaji: 'Suiyoubi to kinyoubi ni arimasu.',
                    translation: 'มีวันพุธกับวันศุกร์ครับ/ค่ะ'
                }
            ]
        },
        notes: [
            'に ใช้กับวันในสัปดาห์เพื่อแสดงวันที่เกิดเหตุการณ์',
            'ถ้าเป็นกิจวัตร อาจละ に ได้'
        ],
        commonMistakes: [
            'ลืมเติม に หลังชื่อวัน',
            'ใช้ に กับคำที่ไม่ใช่วัน (ผิด: 毎日に, ถูก: 毎日)'
        ],
        compareWith: 'に (วันเฉพาะ) vs ไม่มี に (กิจวัตร)'
    },
    {
        id: 'josuushi',
        title: 'คำบอกจำนวน (助数詞)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'ตัวเลข + คำบอกจำนวน + の + คำนาม',
        explanation: 'ใช้คำบอกจำนวนหลังตัวเลขเพื่อบอกจำนวนของสิ่งต่างๆ เช่น 3冊 (3 เล่ม), 5個 (5 ลูก), 10人 (10 คน) โดย助数詞จะเปลี่ยนไปตามประเภทของสิ่งที่นับ',
        usagePoints: [
            '助数詞 (คำนามบอกจำนวน) มีหลายแบบ เช่น 冊 (เล่ม), 個 (ชิ้น/ลูก), 人 (คน), 枚 (แผ่น), 匹 (ตัว)',
            'วางหลังตัวเลข เช่น 3冊 (3 เล่ม), 5個 (5 ลูก)',
            'ใช้ の เชื่อมกับคำนาม เช่น 3冊の本 (หนังสือ 3 เล่ม)',
            'บางคำมีการออกเสียงพิเศษ เช่น 1人 (ひとり), 3本 (さんぼん)'
        ],
        examples: [
            { jp: '本を3冊買いました。', romaji: 'Hon o san-satsu kaimashita.', th: 'ซื้อหนังสือ 3 เล่ม' },
            { jp: 'りんごを5個食べました。', romaji: 'Ringo o go-ko tabemashita.', th: 'กินแอปเปิ้ล 5 ลูก' },
            { jp: '学生が10人います。', romaji: 'Gakusei ga juu-nin imasu.', th: 'มีนักเรียน 10 คน' }
        ],
        extraExamples: [
            { jp: '紙を2枚ください。', romaji: 'Kami o ni-mai kudasai.', th: 'ขอกระดาษ 2 แผ่น' },
            { jp: '犬が3匹います。', romaji: 'Inu ga san-biki imasu.', th: 'มีสุนัข 3 ตัว' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: 'りんごをいくつ買いましたか。',
                    romaji: 'Ringo o ikutsu kaimashita ka.',
                    translation: 'ซื้อแอปเปิ้ลมากี่ลูกครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: '5個買いました。',
                    romaji: 'Go-ko kaimashita.',
                    translation: 'ซื้อ 5 ลูกครับ/ค่ะ'
                }
            ]
        },
        notes: [
            '助数詞 มีหลายแบบขึ้นกับสิ่งที่นับ เช่น 人 (คน), 冊 (เล่ม), 枚 (แผ่น), 匹 (ตัว)',
            'การออกเสียงบางคำจะเปลี่ยนไปตามตัวเลข เช่น 1本 (いっぽん), 3本 (さんぼん)',
            'ใช้ の เชื่อมกับคำนามได้ เช่น 2枚の紙 (กระดาษ 2 แผ่น)'
        ],
        commonMistakes: [
            'ใช้助数詞ผิดประเภท เช่น หนังสือใช้ 冊 ไม่ใช่ 個',
            'ลืมเปลี่ยนเสียง助数詞ตามตัวเลข เช่น 1本 (いっぽん) ไม่ใช่ いちほん'
        ],
        compareWith: '助数詞 (คำนามบอกจำนวน) มีหลายแบบ ต้องเลือกให้ถูกกับสิ่งที่นับ'
    },
    {
        id: 'nai',
        title: 'รูปปฏิเสธ (ない形)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'กริยารูป ない',
        explanation: 'ใช้แสดงการปฏิเสธหรือการไม่ทำ เช่น "ไม่กิน", "ไม่ไป" โดยผันกริยาเป็นรูป ない ตามกลุ่มกริยา',
        usagePoints: [
            'รูป ない เป็นรูปปฏิเสธของกริยา ใช้บอกว่า "ไม่..."',
            'ผันกริยาตามกลุ่ม เช่น 食べる → 食べない, 行く → 行かない, する → しない',
            'ใช้ในประโยคบอกเล่า, คำถาม, หรือปฏิเสธ',
            'รูปสุภาพคือ ません เช่น 食べません (ไม่กิน)',
            'ใช้กับคำสั่งปฏิเสธ เช่น 行かないでください (กรุณาอย่าไป)'
        ],
        examples: [
            { jp: '本を読みません。', romaji: 'Hon o yomimasen.', th: 'ไม่อ่านหนังสือ' },
            { jp: '学校へ行きません。', romaji: 'Gakkou e ikimasen.', th: 'ไม่ไปโรงเรียน' },
            { jp: '水を飲まない。', romaji: 'Mizu o nomanai.', th: 'ไม่ดื่มน้ำ' }
        ],
        extraExamples: [
            { jp: '勉強しない。', romaji: 'Benkyou shinai.', th: 'ไม่เรียน' },
            { jp: '遊ばないでください。', romaji: 'Asobanaide kudasai.', th: 'กรุณาอย่าเล่น' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: 'コーヒーを飲みますか。',
                    romaji: 'Koohii o nomimasu ka.',
                    translation: 'ดื่มกาแฟไหมครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: 'いいえ、飲みません。',
                    romaji: 'Iie, nomimasen.',
                    translation: 'ไม่ดื่มครับ/ค่ะ'
                }
            ]
        },
        notes: [
            'รูป ない ใช้ในภาษาพูดแบบกันเอง',
            'รูป ません ใช้ในภาษาสุภาพ',
            'ใช้ ないで (อย่า...) ในประโยคขอร้อง/ห้าม'
        ],
        commonMistakes: [
            'ผันกริยาผิดกลุ่ม เช่น 行く → 行かない (ไม่ใช่ 行きない)',
            'ใช้ ない กับคำนามหรือคุณศัพท์ (ผิด: 学生ない, ถูก: 学生ではない)'
        ],
        compareWith: 'ない (กันเอง) vs ません (สุภาพ)'
    },
    {
        id: 'ta',
        title: 'รูปอดีต (た形)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'กริยารูป た',
        explanation: 'ใช้แสดงการกระทำที่เกิดขึ้นในอดีต เช่น "กินแล้ว", "ไปแล้ว" โดยผันกริยาเป็นรูป た ตามกลุ่มกริยา',
        usagePoints: [
            'รูป た เป็นรูปอดีตของกริยา ใช้บอกว่า "...แล้ว"',
            'ผันกริยาตามกลุ่ม เช่น 食べる → 食べた, 行く → 行った, する → した',
            'รูปสุภาพคือ ました เช่น 食べました (กินแล้ว)',
            'ใช้กับประสบการณ์ เช่น 行ったことがある (เคยไป)'
        ],
        examples: [
            { jp: '本を読みました。', romaji: 'Hon o yomimashita.', th: 'อ่านหนังสือแล้ว' },
            { jp: '学校へ行きました。', romaji: 'Gakkou e ikimashita.', th: 'ไปโรงเรียนแล้ว' },
            { jp: '水を飲んだ。', romaji: 'Mizu o nonda.', th: 'ดื่มน้ำแล้ว' }
        ],
        extraExamples: [
            { jp: '勉強した。', romaji: 'Benkyou shita.', th: 'เรียนแล้ว' },
            { jp: '遊んだことがあります。', romaji: 'Asonda koto ga arimasu.', th: 'เคยเล่น' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: '昨日何をしましたか。',
                    romaji: 'Kinou nani o shimashita ka.',
                    translation: 'เมื่อวานทำอะไรครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: '映画を見ました。',
                    romaji: 'Eiga o mimashita.',
                    translation: 'ดูหนังครับ/ค่ะ'
                }
            ]
        },
        notes: [
            'รูป た ใช้ในภาษาพูดแบบกันเอง',
            'รูป ました ใช้ในภาษาสุภาพ',
            'ใช้กับประสบการณ์หรือเหตุการณ์ในอดีต'
        ],
        commonMistakes: [
            'ผันกริยาผิดกลุ่ม เช่น 行く → 行った (ไม่ใช่ 行きた)',
            'ใช้ た กับคำนามหรือคุณศัพท์ (ผิด: 学生た, ถูก: 学生でした)'
        ],
        compareWith: 'た (กันเอง) vs ました (สุภาพ)'
    },
    {
        id: 'i-adj',
        title: 'คำคุณศัพท์ い (i-adjectives)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'คำคุณศัพท์ い + คำนาม',
        explanation: 'คำคุณศัพท์ที่ลงท้ายด้วย い ใช้ขยายคำนามได้โดยตรง เช่น "ภูเขาสูง", "หนังสือที่น่าสนใจ"',
        usagePoints: [
            'คำคุณศัพท์ い ลงท้ายด้วย い เช่น 高い (สูง), 面白い (น่าสนใจ)',
            'ใช้ขยายคำนามได้โดยตรง เช่น 高い山 (ภูเขาสูง)',
            'ผันเป็นรูปปฏิเสธโดยเปลี่ยน い เป็น くない เช่น 高くない (ไม่สูง)',
            'ผันเป็นรูปอดีตโดยเปลี่ยน い เป็น かった เช่น 高かった (สูงแล้ว)',
            'ใช้กับ です เพื่อความสุภาพ เช่น 高いです'
        ],
        examples: [
            { jp: '高い山', romaji: 'Takai yama', th: 'ภูเขาสูง' },
            { jp: '面白い本', romaji: 'Omoshiroi hon', th: 'หนังสือที่น่าสนใจ' },
            { jp: '安い店', romaji: 'Yasui mise', th: 'ร้านที่ราคาถูก' }
        ],
        extraExamples: [
            { jp: '新しい車', romaji: 'Atarashii kuruma', th: 'รถใหม่' },
            { jp: '古い家', romaji: 'Furui ie', th: 'บ้านเก่า' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: 'この本は面白いですか。',
                    romaji: 'Kono hon wa omoshiroi desu ka.',
                    translation: 'หนังสือเล่มนี้น่าสนใจไหมครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: 'はい、とても面白いです。',
                    romaji: 'Hai, totemo omoshiroi desu.',
                    translation: 'ใช่ครับ/ค่ะ น่าสนใจมาก'
                }
            ]
        },
        notes: [
            'คำคุณศัพท์ い ผันรูปได้หลายแบบ เช่น ปฏิเสธ, อดีต',
            'ใช้กับ です เพื่อความสุภาพ',
            'ไม่ใช้ です กับคำคุณศัพท์ い ในรูปปกติ (แต่ใช้ได้ในรูปสุภาพ)'
        ],
        commonMistakes: [
            'ใช้ です ซ้ำกับคำคุณศัพท์ い (ผิด: 高いですです)',
            'ผันรูปผิด เช่น 高い → 高いくない (ผิด), ถูกต้องคือ 高くない'
        ],
        compareWith: 'い-adj (ขยายคำนามได้โดยตรง) vs な-adj (ต้องเติม な)'
    },
    {
        id: 'na-adj',
        title: 'คำคุณศัพท์ な (na-adjectives)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'คำคุณศัพท์ な + な + คำนาม',
        explanation: 'คำคุณศัพท์ที่ลงท้ายด้วย な ต้องเติม な หน้าคำนามที่ขยาย เช่น "ห้องที่เงียบ", "ดอกไม้ที่สวย"',
        usagePoints: [
            'คำคุณศัพท์ な ต้องเติม な หน้าคำนาม เช่น 静かな部屋 (ห้องที่เงียบ)',
            'ใช้กับ です เพื่อความสุภาพ เช่น きれいです',
            'ผันเป็นรูปปฏิเสธโดยเติม ではない เช่น きれいではない (ไม่สวย)',
            'ผันเป็นรูปอดีตโดยเติม でした เช่น 静かでした (เงียบแล้ว)',
            'ใช้กับคำนามได้โดยตรงเมื่อเติม な'
        ],
        examples: [
            { jp: '静かな部屋', romaji: 'Shizuka na heya', th: 'ห้องที่เงียบ' },
            { jp: 'きれいな花', romaji: 'Kirei na hana', th: 'ดอกไม้ที่สวย' },
            { jp: '有名な人', romaji: 'Yuumei na hito', th: 'คนที่มีชื่อเสียง' }
        ],
        extraExamples: [
            { jp: '便利な道具', romaji: 'Benri na dougu', th: 'เครื่องมือที่สะดวก' },
            { jp: '親切な先生', romaji: 'Shinsetsu na sensei', th: 'อาจารย์ที่ใจดี' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: 'この部屋は静かですか。',
                    romaji: 'Kono heya wa shizuka desu ka.',
                    translation: 'ห้องนี้เงียบไหมครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: 'はい、とても静かです。',
                    romaji: 'Hai, totemo shizuka desu.',
                    translation: 'ใช่ครับ/ค่ะ เงียบมาก'
                }
            ]
        },
        notes: [
            'คำคุณศัพท์ な ต้องเติม な หน้าคำนาม',
            'ใช้กับ です เพื่อความสุภาพ',
            'ผันรูปได้หลายแบบ เช่น ปฏิเสธ, อดีต'
        ],
        commonMistakes: [
            'ลืมเติม な หน้าคำนาม (ผิด: 静か部屋, ถูก: 静かな部屋)',
            'ใช้ です กับคำนามโดยตรง (ผิด: きれいです花, ถูก: きれいな花です)'
        ],
        compareWith: 'な-adj (ต้องเติม な) vs い-adj (เติมได้เลย)'
    },
    {
        id: 'suki',
        title: 'การแสดงความชอบ/ไม่ชอบ (好き/嫌い)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'คำนาม + が + 好き/嫌い + です',
        explanation: 'ใช้ が กับคำกริยา 好き (ชอบ) และ 嫌い (ไม่ชอบ) เพื่อแสดงความชอบหรือไม่ชอบสิ่งใดสิ่งหนึ่ง',
        usagePoints: [
            'ใช้ が กับคำนามที่เป็นสิ่งที่ชอบหรือไม่ชอบ เช่น 猫が好きです (ชอบแมว)',
            '好き/嫌い เป็นคุณศัพท์ な แต่ไม่เติม な เมื่อใช้กับ が',
            'ใช้กับบุคคลที่ 1 หรือ 2 โดยตรง ถ้าเป็นบุคคลที่ 3 ใช้ 〜がっています',
            'สามารถใช้กับคำถาม เช่น 何が好きですか (ชอบอะไร)'
        ],
        examples: [
            { jp: '私は猫が好きです。', romaji: 'Watashi wa neko ga suki desu.', th: 'ฉันชอบแมว' },
            { jp: '私は魚が嫌いです。', romaji: 'Watashi wa sakana ga kirai desu.', th: 'ฉันไม่ชอบปลา' },
            { jp: '音楽が好きです。', romaji: 'Ongaku ga suki desu.', th: 'ชอบดนตรี' }
        ],
        extraExamples: [
            { jp: '野菜があまり好きじゃない。', romaji: 'Yasai ga amari suki janai.', th: 'ไม่ค่อยชอบผัก' },
            { jp: '犬が大好きです。', romaji: 'Inu ga daisuki desu.', th: 'ชอบสุนัขมาก' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: '何が好きですか。',
                    romaji: 'Nani ga suki desu ka.',
                    translation: 'ชอบอะไรครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: '果物が好きです。',
                    romaji: 'Kudamono ga suki desu.',
                    translation: 'ชอบผลไม้ครับ/ค่ะ'
                }
            ]
        },
        notes: [
            '好き/嫌い เป็นคุณศัพท์ な แต่ใช้กับ が โดยไม่เติม な',
            'ใช้กับบุคคลที่ 1 หรือ 2 โดยตรง',
            'ถ้าเป็นบุคคลที่ 3 ใช้ 〜がっています เช่น 彼は猫が好きです → 彼は猫が好きがっています'
        ],
        commonMistakes: [
            'ใช้ は แทน が (ผิด: 猫は好きです, ถูก: 猫が好きです)',
            'เติม な หลัง好き/嫌い (ผิด: 好きなです, ถูก: 好きです)'
        ],
        compareWith: '好き/嫌い (ความรู้สึกของตัวเอง) vs 〜がっています (ความรู้สึกของคนอื่น)'
    },
    {
        id: 'aru',
        title: 'การแสดงการมี/ไม่มี (ある/いる)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'คำนาม + が + ある/いる',
        explanation: 'ある ใช้กับสิ่งของ/สิ่งไม่มีชีวิต いる ใช้กับคนและสัตว์ ใช้แสดงการมีหรือไม่มีสิ่งใดสิ่งหนึ่ง',
        usagePoints: [
            'ある ใช้กับสิ่งของ, พืช, สถานที่, เหตุการณ์',
            'いる ใช้กับคนและสัตว์',
            'ใช้ が แสดงประธาน เช่น 机の上に本があります (มีหนังสืออยู่บนโต๊ะ)',
            'รูปปฏิเสธคือ ない เช่น 本がありません (ไม่มีหนังสือ)',
            'ใช้กับสถานที่เพื่อบอกว่ามีสิ่งใดอยู่ที่ไหน เช่น 部屋に猫がいます (มีแมวอยู่ในห้อง)'
        ],
        examples: [
            { jp: '机の上に本があります。', romaji: 'Tsukue no ue ni hon ga arimasu.', th: 'มีหนังสืออยู่บนโต๊ะ' },
            { jp: '部屋に猫がいます。', romaji: 'Heya ni neko ga imasu.', th: 'มีแมวอยู่ในห้อง' },
            { jp: 'お金がありません。', romaji: 'Okane ga arimasen.', th: 'ไม่มีเงิน' }
        ],
        extraExamples: [
            { jp: '友達がいます。', romaji: 'Tomodachi ga imasu.', th: 'มีเพื่อน' },
            { jp: '時間がありません。', romaji: 'Jikan ga arimasen.', th: 'ไม่มีเวลา' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: '部屋に何がありますか。',
                    romaji: 'Heya ni nani ga arimasu ka.',
                    translation: 'ในห้องมีอะไรบ้างครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: '机と椅子があります。',
                    romaji: 'Tsukue to isu ga arimasu.',
                    translation: 'มีโต๊ะและเก้าอี้ครับ/ค่ะ'
                }
            ]
        },
        notes: [
            'ある ใช้กับสิ่งของ/สิ่งไม่มีชีวิต',
            'いる ใช้กับคนและสัตว์',
            'รูปปฏิเสธคือ ない/いません'
        ],
        commonMistakes: [
            'ใช้ ある กับคนหรือสัตว์ (ผิด: 先生がある, ถูก: 先生がいる)',
            'ใช้ いる กับสิ่งของ (ผิด: 本がいる, ถูก: 本がある)'
        ],
        compareWith: 'ある (สิ่งของ) vs いる (คน/สัตว์)'
    },
    {
        id: 'ga-particle',
        title: 'が (ga) - ตัวแสดงประธาน',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'N + が + ...',
        explanation: 'ใช้ が (ga) หลังคำนามเพื่อแสดงประธานของประโยค โดยเฉพาะในประโยคที่มีคำกริยาแสดงการมีอยู่หรือเน้นประธาน',
        usagePoints: [
            'ใช้ が เพื่อเน้นประธานหรือแสดงสิ่งที่เกิดขึ้น',
            'ใช้ในประโยคที่มีคำกริยาแสดงการมีอยู่ เช่น ある, いる',
            'ใช้ในประโยคที่ต้องการเน้นว่าใครเป็นผู้กระทำ',
            'ใช้ในประโยคคำถามที่ขึ้นต้นด้วย 誰 (ใคร), 何 (อะไร)',
            'ใช้กับคำคุณศัพท์บางคำ เช่น 好き, 嫌い, 上手, 下手'
        ],
        examples: [
            { jp: '猫がいます。', romaji: 'Neko ga imasu.', th: 'มีแมว' },
            { jp: '本があります。', romaji: 'Hon ga arimasu.', th: 'มีหนังสือ' },
            { jp: '私が行きます。', romaji: 'Watashi ga ikimasu.', th: 'ฉันจะไป (เน้นว่าฉันจะไป)'}
        ],
        extraExamples: [
            { jp: '誰が来ますか。', romaji: 'Dare ga kimasu ka.', th: 'ใครจะมาครับ/คะ' },
            { jp: 'この本が面白いです。', romaji: 'Kono hon ga omoshiroi desu.', th: 'หนังสือเล่มนี้น่าสนใจ (เน้นเล่มนี้)' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: '誰が日本語を勉強していますか。',
                    romaji: 'Dare ga Nihongo o benkyou shite imasu ka.',
                    translation: 'ใครกำลังเรียนภาษาญี่ปุ่นครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: '私が勉強しています。',
                    romaji: 'Watashi ga benkyou shite imasu.',
                    translation: 'ฉันกำลังเรียนครับ/ค่ะ'
                }
            ]
        },
        notes: [
            'ใช้ が เพื่อเน้นประธาน',
            'ใช้กับคำกริยาแสดงการมีอยู่ เช่น ある, いる',
            'ใช้กับคำคุณศัพท์บางคำ เช่น 好き, 嫌い'
        ],
        commonMistakes: [
            'ใช้ が กับคำกริยาโดยตรง (ผิด: 行が, ถูก: 私が行く)',
            'ใช้ が กับคำคุณศัพท์โดยตรง (ผิด: 高いが, ถูก: 山が高い)',
            'ใช้ が ผิดบริบท (ควรใช้ は แทนเมื่อไม่ต้องการเน้นประธาน)'
        ],
        compareWith: 'が (ประธาน) vs は (หัวข้อ)'
    },
    {
        id: 'te-iru',
        title: '〜ている (กำลังกระทำ/สภาพต่อเนื่อง)',
        level: 'N4',
        difficulty: 'ปานกลาง',
        pattern: 'V て + いる',
        explanation: 'ใช้แสดงการกระทำที่กำลังเกิดขึ้น หรือสภาพที่ต่อเนื่อง เช่น "กำลังกิน", "อาศัยอยู่"',
        usagePoints: [
            'ใช้กับกริยารูป て + いる เพื่อแสดงว่ากำลังทำอยู่ เช่น 食べている (กำลังกิน)',
            'ใช้แสดงสภาพที่ต่อเนื่อง เช่น 住んでいる (อาศัยอยู่)',
            'ใช้กับเหตุการณ์ที่เกิดขึ้นซ้ำ ๆ หรือเป็นนิสัย เช่น 毎日勉強している (เรียนทุกวัน)',
            'รูปสุภาพคือ ています',
            'รูปปฏิเสธคือ ていない เช่น 食べていない (ไม่ได้กินอยู่)'
        ],
        examples: [
            { jp: '今、朝ごはんを食べています。', romaji: 'Ima, asagohan o tabete imasu.', th: 'ตอนนี้กำลังกินข้าวเช้า' },
            { jp: '東京に住んでいます。', romaji: 'Toukyou ni sunde imasu.', th: 'อาศัยอยู่ที่โตเกียว' },
            { jp: '毎日日本語を勉強しています。', romaji: 'Mainichi Nihongo o benkyou shite imasu.', th: 'เรียนภาษาญี่ปุ่นทุกวัน' }
        ],
        extraExamples: [
            { jp: '友達を待っています。', romaji: 'Tomodachi o matte imasu.', th: 'กำลังรอเพื่อน' },
            { jp: '雨が降っています。', romaji: 'Ame ga futte imasu.', th: 'ฝนกำลังตก' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: '何をしていますか。',
                    romaji: 'Nani o shite imasu ka.',
                    translation: 'กำลังทำอะไรอยู่ครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: '本を読んでいます。',
                    romaji: 'Hon o yonde imasu.',
                    translation: 'กำลังอ่านหนังสือครับ/ค่ะ'
                }
            ]
        },
        notes: [
            'ใช้ ている กับกริยาแสดงการกระทำที่กำลังเกิดขึ้นหรือสภาพต่อเนื่อง',
            'รูปปฏิเสธคือ ていない',
            'ใช้กับกริยาบางตัวจะมีความหมายพิเศษ เช่น 知っている (รู้), 持っている (มี)'
        ],
        commonMistakes: [
            'ลืมผันกริยาเป็นรูป て ก่อนเติม いる',
            'ใช้ ている กับกริยาที่ไม่เหมาะสม เช่น 死んでいる (ตายอยู่)'
        ],
        compareWith: '〜ている (กำลังกระทำ/ต่อเนื่อง) vs 〜ていた (อดีตของ ている)'
    },
    {
        id: 'tari-tari',
        title: '〜たり〜たりする (ทำ...บ้าง...บ้าง)',
        level: 'N4',
        difficulty: 'ปานกลาง',
        pattern: 'V た + り V た + り する',
        explanation: 'ใช้ยกตัวอย่างการกระทำหลายอย่าง เช่น "อ่านหนังสือบ้าง ดูทีวีบ้าง"',
        usagePoints: [
            'ใช้กริยารูป た + り ... + たり する เพื่อยกตัวอย่างการกระทำหลายอย่าง',
            'มักใช้ 2-3 กริยา เช่น 読んだり、見たりする',
            'ใช้กับกิจกรรมที่ทำสลับกันหรือไม่แน่นอน',
            'รูปอดีตคือ たりした',
            'สามารถใช้กับคำถาม เช่น 何をしたりしますか (ทำอะไรบ้าง)'
        ],
        examples: [
            { jp: '日曜日は本を読んだり、映画を見たりします。', romaji: 'Nichiyoubi wa hon o yondari, eiga o mitari shimasu.', th: 'วันอาทิตย์อ่านหนังสือบ้าง ดูหนังบ้าง' }
        ],
        extraExamples: [
            { jp: '休みの日は寝たり、遊んだりします。', romaji: 'Yasumi no hi wa netari, asondari shimasu.', th: 'วันหยุดก็นอนบ้าง เล่นบ้าง' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: '休みの日は何をしますか。',
                    romaji: 'Yasumi no hi wa nani o shimasu ka.',
                    translation: 'วันหยุดทำอะไรบ้างครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: '本を読んだり、音楽を聞いたりします。',
                    romaji: 'Hon o yondari, ongaku o kiitari shimasu.',
                    translation: 'อ่านหนังสือบ้าง ฟังเพลงบ้างครับ/ค่ะ'
                }
            ]
        },
        notes: [
            'ใช้ たり กับกริยาหลายตัวเพื่อยกตัวอย่าง',
            'มักใช้กับ する',
            'รูปอดีตคือ たりした'
        ],
        commonMistakes: [
            'ใช้ たり กับกริยาเดียว (ควรมีอย่างน้อย 2 กริยา)',
            'ลืมเติม する ท้ายสุด'
        ],
        compareWith: '〜たり〜たり (ยกตัวอย่าง) vs 〜て (เชื่อมประโยค)'
    },
    {
        id: 'nagara',
        title: '〜ながら (ขณะทำ...)',
        level: 'N4',
        difficulty: 'ปานกลาง',
        pattern: 'V (รูป masu ตัด masu) + ながら + V2',
        explanation: 'ใช้แสดงการทำสองอย่างพร้อมกัน เช่น "ฟังเพลงไปด้วย อ่านหนังสือไปด้วย"',
        usagePoints: [
            'ใช้กริยารูป masu ตัด masu + ながら + กริยาอีกตัว',
            'กริยาหลักอยู่ท้ายประโยค',
            'ใช้กับการทำสองอย่างในเวลาเดียวกัน',
            'ไม่ใช้กับเหตุการณ์ที่เกิดขึ้นต่อเนื่องกัน',
            'ใช้กับกริยาที่ทำได้พร้อมกันจริง ๆ'
        ],
        examples: [
            { jp: '音楽を聞きながら勉強します。', romaji: 'Ongaku o kiki nagara benkyou shimasu.', th: 'อ่านหนังสือไปด้วยฟังเพลงไปด้วย' }
        ],
        extraExamples: [
            { jp: 'テレビを見ながらご飯を食べます。', romaji: 'Terebi o mi nagara gohan o tabemasu.', th: 'กินข้าวไปดูทีวีไป' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: '何をしながら勉強しますか。',
                    romaji: 'Nani o shinagara benkyou shimasu ka.',
                    translation: 'อ่านหนังสือไปด้วยทำอะไรไปด้วยครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: '音楽を聞きながら勉強します。',
                    romaji: 'Ongaku o kiki nagara benkyou shimasu.',
                    translation: 'อ่านหนังสือไปด้วยฟังเพลงไปด้วยครับ/ค่ะ'
                }
            ]
        },
        notes: [
            'ใช้ ながら กับกริยาสองตัวที่ทำพร้อมกัน',
            'กริยาหลักอยู่ท้ายประโยค',
            'ไม่ใช้กับเหตุการณ์ที่เกิดขึ้นต่อเนื่องกัน'
        ],
        commonMistakes: [
            'ใช้ ながら กับเหตุการณ์ที่เกิดต่อเนื่อง (ผิด)',
            'ใช้กับกริยาที่ทำพร้อมกันไม่ได้จริง ๆ'
        ],
        compareWith: '〜ながら (ขณะทำ...) vs 〜て (เชื่อมประโยค)'
    },
    {
        id: 'souda-guess',
        title: '〜そうだ (ดูเหมือนว่า...)',
        level: 'N3',
        difficulty: 'ยาก',
        pattern: 'V/Adj (ตัด ます/い/な) + そうだ',
        explanation: 'ใช้แสดงการคาดเดาจากสิ่งที่เห็น เช่น "ดูเหมือนจะฝนตก", "ดูเหมือนจะอร่อย"',
        usagePoints: [
            'ใช้กับกริยา/คุณศัพท์ที่ตัด ます/い/な แล้วเติม そうだ',
            'ใช้กับสิ่งที่เห็นหรือรับรู้ด้วยตนเอง',
            'ต่างจาก 〜そうだ (ได้ยินมาว่า...) ที่ใช้ถ่ายทอดข้อมูล',
            'ใช้กับคำคุณศัพท์ い ให้ตัด い เช่น おいしい → おいしそう',
            'ใช้กับคำคุณศัพท์ な ให้ตัด な เช่น きれいな → きれいそう'
        ],
        examples: [
            { jp: '雨が降りそうです。', romaji: 'Ame ga furi sou desu.', th: 'ดูเหมือนฝนจะตก' },
            { jp: 'このケーキはおいしそうです。', romaji: 'Kono keeki wa oishisou desu.', th: 'เค้กนี้ดูน่าอร่อย' }
        ],
        extraExamples: [
            { jp: '彼は元気そうです。', romaji: 'Kare wa genki sou desu.', th: 'เขาดูแข็งแรงดี' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: 'この料理はどうですか。',
                    romaji: 'Kono ryouri wa dou desu ka.',
                    translation: 'อาหารจานนี้เป็นอย่างไรบ้างครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: 'とてもおいしそうです。',
                    romaji: 'Totemo oishisou desu.',
                    translation: 'ดูน่าอร่อยมากครับ/ค่ะ'
                }
            ]
        },
        notes: [
            'ใช้ そうだ กับสิ่งที่เห็นหรือรับรู้',
            'ตัด ます/い/な ก่อนเติม そう',
            'ต่างจาก 〜そうだ (ได้ยินมาว่า...)'
        ],
        commonMistakes: [
            'ใช้ そう กับกริยาหรือคุณศัพท์โดยไม่ตัด ます/い/な',
            'สับสนกับ 〜そうだ (ได้ยินมาว่า...)'
        ],
        compareWith: '〜そうだ (ดูเหมือน...) vs 〜そうだ (ได้ยินมาว่า...)'
    },
    {
        id: 'rashii',
        title: '〜らしい (เหมือนว่า...)',
        level: 'N3',
        difficulty: 'ยาก',
        pattern: 'N/Adj/V + らしい',
        explanation: 'ใช้แสดงข้อมูลที่ได้ยินมา หรือคาดเดา เช่น "เหมือนจะเป็นผู้ชาย", "เหมือนจะฝนตก"',
        usagePoints: [
            'ใช้กับคำนาม, คุณศัพท์, กริยา plain form + らしい',
            'ใช้กับข้อมูลที่ได้ยินมา หรือคาดเดาจากสิ่งที่รู้',
            'ใช้กับข่าวลือหรือสิ่งที่ไม่แน่ใจ',
            'ใช้กับคำคุณศัพท์ い/な ได้',
            'ใช้กับกริยา plain form ได้'
        ],
        examples: [
            { jp: '彼は学生らしいです。', romaji: 'Kare wa gakusei rashii desu.', th: 'ดูเหมือนว่าเขาเป็นนักเรียน' },
            { jp: '明日は雨らしい。', romaji: 'Ashita wa ame rashii.', th: 'เหมือนว่าพรุ่งนี้ฝนจะตก' }
        ],
        extraExamples: [
            { jp: 'この店は人気らしい。', romaji: 'Kono mise wa ninki rashii.', th: 'ร้านนี้ดูเหมือนจะได้รับความนิยม' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: '田中さんは来ますか。',
                    romaji: 'Tanaka-san wa kimasu ka.',
                    translation: 'คุณทานากะจะมาหรือเปล่าครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: '来ないらしいです。',
                    romaji: 'Konai rashii desu.',
                    translation: 'เหมือนจะไม่มาครับ/ค่ะ'
                }
            ]
        },
        notes: [
            'ใช้ らしい กับข้อมูลที่ไม่แน่ใจหรือได้ยินมา',
            'ใช้กับคำนาม, คุณศัพท์, กริยา plain form',
            'ต่างจาก そうだ (ดูเหมือน...) ที่ใช้กับสิ่งที่เห็น'
        ],
        commonMistakes: [
            'ใช้ らしい กับข้อมูลที่แน่นอน (ผิด)',
            'สับสนกับ そうだ (ดูเหมือน...)'
        ],
        compareWith: '〜らしい (เหมือนว่า... ได้ยินมา) vs 〜そうだ (ดูเหมือน... จากสิ่งที่เห็น)'
    },
    {
        id: 'youda',
        title: '〜ようだ (เหมือนกับว่า...)',
        level: 'N3',
        difficulty: 'ยาก',
        pattern: 'N/Adj/V + ようだ',
        explanation: 'ใช้เปรียบเทียบหรือคาดเดา เช่น "เหมือนกับว่า..."',
        usagePoints: [
            'ใช้กับคำนาม, คุณศัพท์, กริยา plain form + ようだ',
            'ใช้เปรียบเทียบหรือคาดเดาจากสิ่งที่เห็นหรือรู้สึก',
            'ใช้กับประโยคที่ต้องการเปรียบเทียบ',
            'ใช้กับคำคุณศัพท์ い/な ได้',
            'ใช้กับกริยา plain form ได้'
        ],
        examples: [
            { jp: '彼は先生のようです。', romaji: 'Kare wa sensei no you desu.', th: 'เขาเหมือนกับเป็นครู' },
            { jp: '外は雨のようです。', romaji: 'Soto wa ame no you desu.', th: 'ข้างนอกเหมือนฝนจะตก' }
        ],
        extraExamples: [
            { jp: '夢のような話です。', romaji: 'Yume no you na hanashi desu.', th: 'เป็นเรื่องเหมือนความฝัน' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: 'あの人は先生ですか。',
                    romaji: 'Ano hito wa sensei desu ka.',
                    translation: 'คนนั้นเป็นครูหรือเปล่าครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: '先生のようです。',
                    romaji: 'Sensei no you desu.',
                    translation: 'เหมือนจะเป็นครูครับ/ค่ะ'
                }
            ]
        },
        notes: [
            'ใช้ ようだ กับการเปรียบเทียบหรือคาดเดา',
            'ใช้กับคำนาม, คุณศัพท์, กริยา plain form',
            'ต่างจาก そうだ (ดูเหมือน...) และ らしい (เหมือนว่า...)'
        ],
        commonMistakes: [
            'ใช้ ようだ กับข้อมูลที่แน่นอน (ผิด)',
            'สับสนกับ そうだ และ らしい'
        ],
        compareWith: '〜ようだ (เปรียบเทียบ/คาดเดา) vs 〜そうだ (ดูเหมือน...) vs 〜らしい (เหมือนว่า...)'
    },
    {
        id: 'teshimau',
        title: '〜てしまう (เผลอ/ทำเสร็จ)',
        level: 'N4',
        difficulty: 'ปานกลาง',
        pattern: 'V て + しまう',
        explanation: 'ใช้แสดงการกระทำที่เสร็จสิ้น หรือเผลอทำ เช่น "กินหมดแล้ว", "เผลอลืม"',
        usagePoints: [
            'ใช้กริยารูป て + しまう เพื่อแสดงว่าทำเสร็จหรือเผลอทำ',
            'ใช้กับเหตุการณ์ที่ไม่ตั้งใจ เช่น 忘れてしまいました (เผลอลืม)',
            'ใช้กับเหตุการณ์ที่เสร็จสิ้นสมบูรณ์ เช่น 食べてしまいました (กินหมดแล้ว)',
            'รูปกันเองคือ ちゃう/じゃう เช่น 食べちゃった',
            'ใช้กับความรู้สึกเสียดายหรือเสียใจ'
        ],
        examples: [
            { jp: '全部食べてしまいました。', romaji: 'Zenbu tabete shimaimashita.', th: 'กินหมดแล้ว' },
            { jp: '財布を忘れてしまいました。', romaji: 'Saifu o wasurete shimaimashita.', th: 'เผลอลืมกระเป๋าสตางค์' }
        ],
        extraExamples: [
            { jp: '寝てしまいました。', romaji: 'Nete shimaimashita.', th: 'เผลอหลับ' },
            { jp: '壊してしまいました。', romaji: 'Kowashite shimaimashita.', th: 'เผลอทำพัง' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: 'ケーキは？',
                    romaji: 'Keeki wa?',
                    translation: 'เค้กอยู่ไหนครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: '全部食べてしまいました。',
                    romaji: 'Zenbu tabete shimaimashita.',
                    translation: 'กินหมดแล้วครับ/ค่ะ'
                }
            ]
        },
        notes: [
            'ใช้ てしまう กับเหตุการณ์ที่เสร็จสิ้นหรือเผลอทำ',
            'รูปกันเองคือ ちゃう/じゃう',
            'ใช้กับความรู้สึกเสียดายหรือเสียใจ'
        ],
        commonMistakes: [
            'ใช้ てしまう กับเหตุการณ์ที่ตั้งใจ (ผิด)',
            'ลืมผันกริยาเป็นรูป て ก่อนเติม しまう'
        ],
        compareWith: '〜てしまう (เผลอ/เสร็จสิ้น) vs 〜ている (กำลังกระทำ)'
    },
    {
        id: 'ba',
        title: '〜ば (ถ้า...)',
        level: 'N4',
        difficulty: 'ปานกลาง',
        pattern: 'V (รูปเงื่อนไข) + ば',
        explanation: 'ใช้แสดงเงื่อนไข เช่น "ถ้าทำ...จะ..."',
        usagePoints: [
            'ใช้กริยารูปเงื่อนไข + ば เช่น 行けば (ถ้าไป)',
            'ใช้กับคุณศัพท์ い/な และคำนามได้ เช่น 高ければ (ถ้าสูง), 静かならば (ถ้าเงียบ)',
            'ใช้กับประโยคที่มีเงื่อนไข',
            'ใช้กับเหตุการณ์ที่อาจเกิดขึ้นได้',
            'ต่างจาก 〜と ที่ใช้กับเหตุการณ์ที่เกิดแน่นอน'
        ],
        examples: [
            { jp: 'お金があれば、旅行します。', romaji: 'Okane ga areba, ryokou shimasu.', th: 'ถ้ามีเงินจะไปเที่ยว' }
        ],
        extraExamples: [
            { jp: '早く寝れば、元気になります。', romaji: 'Hayaku nereba, genki ni narimasu.', th: 'ถ้านอนเร็วจะสดชื่น' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: 'どうすればいいですか。',
                    romaji: 'Dou sureba ii desu ka.',
                    translation: 'ควรทำอย่างไรดีครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: '先生に聞けばいいですよ。',
                    romaji: 'Sensei ni kikeba ii desu yo.',
                    translation: 'ถามอาจารย์ก็ได้นะครับ/ค่ะ'
                }
            ]
        },
        notes: [
            'ใช้ ば กับกริยา, คุณศัพท์, คำนาม',
            'ใช้กับประโยคเงื่อนไข',
            'ต่างจาก 〜と ที่ใช้กับเหตุการณ์ที่เกิดแน่นอน'
        ],
        commonMistakes: [
            'ใช้ ば กับเหตุการณ์ที่เกิดแน่นอน (ควรใช้ と)',
            'ผันรูปผิด เช่น 行くば (ผิด), ถูกต้องคือ 行けば'
        ],
        compareWith: '〜ば (เงื่อนไขทั่วไป) vs 〜と (เงื่อนไขที่เกิดแน่นอน)'
    },
    {
        id: 'to',
        title: '〜と (ถ้า...จะ...)',
        level: 'N4',
        difficulty: 'ปานกลาง',
        pattern: 'V (รูปธรรมดา) + と',
        explanation: 'ใช้แสดงเงื่อนไขที่เกิดขึ้นแน่นอน เช่น "ถ้ากดปุ่มนี้ เครื่องจะหยุด"',
        usagePoints: [
            'ใช้กริยารูปธรรมดา + と เช่น 押すと (ถ้ากด)',
            'ใช้กับเหตุการณ์ที่เกิดขึ้นแน่นอนหรือเป็นธรรมชาติ',
            'ใช้กับประโยคที่มีเหตุและผล',
            'ต่างจาก 〜ば ที่ใช้กับเงื่อนไขทั่วไป',
            'ใช้กับคำอธิบายวิธีใช้หรือกฎเกณฑ์'
        ],
        examples: [
            { jp: 'このボタンを押すと、機械が止まります。', romaji: 'Kono botan o osu to, kikai ga tomarimasu.', th: 'ถ้ากดปุ่มนี้ เครื่องจะหยุด' }
        ],
        extraExamples: [
            { jp: '春になると、桜が咲きます。', romaji: 'Haru ni naru to, sakura ga sakimasu.', th: 'พอถึงฤดูใบไม้ผลิ ซากุระจะบาน' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: 'このスイッチを押すとどうなりますか。',
                    romaji: 'Kono suitchi o osu to dou narimasu ka.',
                    translation: 'ถ้ากดสวิตช์นี้จะเป็นอย่างไรครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: '電気が消えます。',
                    romaji: 'Denki ga kiemasu.',
                    translation: 'ไฟจะดับครับ/ค่ะ'
                }
            ]
        },
        notes: [
            'ใช้ と กับเหตุการณ์ที่เกิดขึ้นแน่นอน',
            'ใช้กับประโยคเหตุและผล',
            'ต่างจาก 〜ば ที่ใช้กับเงื่อนไขทั่วไป'
        ],
        commonMistakes: [
            'ใช้ と กับเหตุการณ์ที่ไม่แน่นอน (ควรใช้ ば)',
            'ผันรูปผิด เช่น 行くとば (ผิด), ถูกต้องคือ 行くと'
        ],
        compareWith: '〜と (เงื่อนไขแน่นอน) vs 〜ば (เงื่อนไขทั่วไป)'
    },
    {
        id: 'ta-hou-ga-ii',
        title: '〜たほうがいい (ควร...)',
        level: 'N4',
        difficulty: 'ปานกลาง',
        pattern: 'V た + ほうがいい',
        explanation: 'ใช้แนะนำหรือบอกว่าควรทำอะไร',
        usagePoints: [
            'ใช้กริยารูป た + ほうがいい เพื่อแนะนำว่าควรทำ',
            'ใช้กับคำแนะนำหรือเตือน',
            'รูปปฏิเสธคือ ないほうがいい (ไม่ควรทำ)',
            'ใช้กับประโยคที่ต้องการแนะนำอย่างสุภาพ',
            'ใช้กับเพื่อนหรือผู้ที่สนิทได้'
        ],
        examples: [
            { jp: '早く寝たほうがいいです。', romaji: 'Hayaku neta hou ga ii desu.', th: 'ควรนอนเร็ว' }
        ],
        extraExamples: [
            { jp: '薬を飲んだほうがいいですよ。', romaji: 'Kusuri o nonda hou ga ii desu yo.', th: 'ควรกินยานะ' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: '頭が痛いです。',
                    romaji: 'Atama ga itai desu.',
                    translation: 'ปวดหัวครับ/ค่ะ'
                },
                {
                    speaker: 'Bさん',
                    text: '薬を飲んだほうがいいですよ。',
                    romaji: 'Kusuri o nonda hou ga ii desu yo.',
                    translation: 'ควรกินยานะครับ/ค่ะ'
                }
            ]
        },
        notes: [
            'ใช้ たほうがいい กับคำแนะนำ',
            'รูปปฏิเสธคือ ないほうがいい',
            'ใช้กับเพื่อนหรือผู้ที่สนิทได้'
        ],
        commonMistakes: [
            'ใช้ たほうがいい กับคำสั่ง (ผิด)',
            'ลืมผันกริยาเป็นรูป た ก่อนเติม ほうがいい'
        ],
        compareWith: '〜たほうがいい (ควร...) vs 〜ないほうがいい (ไม่ควร...)'
    },
    {
        id: 'nakereba-naranai',
        title: '〜なければならない (จำเป็นต้อง...)',
        level: 'N4',
        difficulty: 'ปานกลาง',
        pattern: 'V (รูปない) + なければならない',
        explanation: 'ใช้แสดงความจำเป็นต้องทำ',
        usagePoints: [
            'ใช้กริยารูป ない ตัด い + なければならない',
            'ใช้กับประโยคที่ต้องการแสดงความจำเป็น',
            'รูปกันเองคือ なきゃ',
            'ใช้กับกฎระเบียบหรือหน้าที่',
            'ใช้กับประโยคปฏิเสธไม่ได้ (ต้องทำ)'
        ],
        examples: [
            { jp: '毎日勉強しなければなりません。', romaji: 'Mainichi benkyou shinakereba narimasen.', th: 'จำเป็นต้องเรียนทุกวัน' }
        ],
        extraExamples: [
            { jp: '早く帰らなければなりません。', romaji: 'Hayaku kaeranakereba narimasen.', th: 'ต้องรีบกลับบ้าน' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: '今日は何時までに帰らなければなりませんか。',
                    romaji: 'Kyou wa nan-ji made ni kaeranakereba narimasen ka.',
                    translation: 'วันนี้ต้องกลับบ้านก่อนกี่โมงครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: '7時までに帰らなければなりません。',
                    romaji: 'Shichi-ji made ni kaeranakereba narimasen.',
                    translation: 'ต้องกลับก่อน 1 ทุ่มครับ/ค่ะ'
                }
            ]
        },
        notes: [
            'ใช้ なければならない กับความจำเป็นหรือหน้าที่',
            'รูปกันเองคือ なきゃ',
            'ใช้กับกฎระเบียบหรือหน้าที่'
        ],
        commonMistakes: [
            'ใช้ なければならない กับสิ่งที่ไม่จำเป็น (ผิด)',
            'ลืมผันกริยาเป็นรูป ない ตัด い ก่อนเติม なければならない'
        ],
        compareWith: '〜なければならない (จำเป็นต้อง...) vs 〜なくてもいい (ไม่ต้อง...)'
    },
    {
        id: 'nakute-mo-ii',
        title: '〜なくてもいい (ไม่ต้อง...)',
        level: 'N4',
        difficulty: 'ปานกลาง',
        pattern: 'V (รูปない) + なくてもいい',
        explanation: 'ใช้บอกว่าไม่จำเป็นต้องทำ',
        usagePoints: [
            'ใช้กริยารูป ない ตัด い + くてもいい',
            'ใช้กับประโยคที่ต้องการบอกว่าไม่จำเป็นต้องทำ',
            'ใช้กับคำแนะนำหรืออนุญาต',
            'ใช้กับเพื่อนหรือผู้ที่สนิทได้',
            'รูปสุภาพคือ なくてもいいです'
        ],
        examples: [
            { jp: '全部食べなくてもいいです。', romaji: 'Zenbu tabenakute mo ii desu.', th: 'ไม่ต้องกินหมดก็ได้' }
        ],
        extraExamples: [
            { jp: '明日来なくてもいいです。', romaji: 'Ashita konakute mo ii desu.', th: 'พรุ่งนี้ไม่มาก็ได้' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: '全部食べなければなりませんか。',
                    romaji: 'Zenbu tabenakereba narimasen ka.',
                    translation: 'ต้องกินให้หมดไหมครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: '全部食べなくてもいいです。',
                    romaji: 'Zenbu tabenakute mo ii desu.',
                    translation: 'ไม่ต้องกินหมดก็ได้ครับ/ค่ะ'
                }
            ]
        },
        notes: [
            'ใช้ なくてもいい กับคำแนะนำหรืออนุญาต',
            'ใช้กับเพื่อนหรือผู้ที่สนิทได้',
            'รูปสุภาพคือ なくてもいいです'
        ],
        commonMistakes: [
            'ใช้ なくてもいい กับสิ่งที่จำเป็นต้องทำ (ผิด)',
            'ลืมผันกริยาเป็นรูป ない ตัด い ก่อนเติม くてもいい'
        ],
        compareWith: '〜なくてもいい (ไม่ต้อง...) vs 〜なければならない (จำเป็นต้อง...)'
    },
    {
        id: 'koto-ni-suru',
        title: '〜ことにする (ตัดสินใจ...)',
        level: 'N4',
        difficulty: 'ปานกลาง',
        pattern: 'V (รูป dictionary) + ことにする',
        explanation: 'ใช้บอกว่าตัดสินใจจะทำอะไร',
        usagePoints: [
            'ใช้กริยารูป dictionary + ことにする',
            'ใช้กับการตัดสินใจของตัวเอง',
            'รูปอดีตคือ ことにした (ตัดสินใจไปแล้ว)',
            'ใช้กับการเปลี่ยนแปลงนิสัยหรือพฤติกรรม',
            'ใช้กับประโยคที่ต้องการเน้นการตัดสินใจ'
        ],
        examples: [
            { jp: '毎日運動することにしました。', romaji: 'Mainichi undou suru koto ni shimashita.', th: 'ตัดสินใจจะออกกำลังกายทุกวัน' }
        ],
        extraExamples: [
            { jp: '甘いものを食べないことにします。', romaji: 'Amai mono o tabenai koto ni shimasu.', th: 'ตัดสินใจจะไม่กินของหวาน' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: '何か新しいことを始めますか。',
                    romaji: 'Nanika atarashii koto o hajimemasu ka.',
                    translation: 'จะเริ่มทำอะไรใหม่ ๆ ไหมครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: '毎日運動することにしました。',
                    romaji: 'Mainichi undou suru koto ni shimashita.',
                    translation: 'ตัดสินใจจะออกกำลังกายทุกวันครับ/ค่ะ'
                }
            ]
        },
        notes: [
            'ใช้ ことにする กับการตัดสินใจของตัวเอง',
            'รูปอดีตคือ ことにした',
            'ใช้กับการเปลี่ยนแปลงนิสัยหรือพฤติกรรม'
        ],
        commonMistakes: [
            'ใช้ ことにする กับการตัดสินใจของคนอื่น (ผิด)',
            'ลืมผันกริยาเป็นรูป dictionary ก่อนเติม ことにする'
        ],
        compareWith: '〜ことにする (ตัดสินใจเอง) vs 〜ことになる (ถูกกำหนด/ตัดสินใจโดยผู้อื่น)'
    },
    {
        id: 'koto-ga-aru',
        title: '〜ことがある (เคย...)',
        level: 'N4',
        difficulty: 'ปานกลาง',
        pattern: 'V た + ことがある',
        explanation: 'ใช้บอกประสบการณ์ว่าเคยทำสิ่งนั้น',
        usagePoints: [
            'ใช้กริยารูป た + ことがある',
            'ใช้กับประสบการณ์ในอดีต',
            'ใช้กับประโยคคำถาม เช่น 〜たことがありますか (เคย...ไหม)',
            'ใช้กับประโยคปฏิเสธ เช่น 〜たことがありません (ไม่เคย...)',
            'ใช้กับประโยคบอกเล่า เช่น 〜たことがある (เคย...)'
        ],
        examples: [
            { jp: '日本へ行ったことがあります。', romaji: 'Nihon e itta koto ga arimasu.', th: 'เคยไปญี่ปุ่น' }
        ],
        extraExamples: [
            { jp: '寿司を食べたことがありますか。', romaji: 'Sushi o tabeta koto ga arimasu ka.', th: 'เคยกินซูชิไหม' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: '日本へ行ったことがありますか。',
                    romaji: 'Nihon e itta koto ga arimasu ka.',
                    translation: 'เคยไปญี่ปุ่นไหมครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: 'はい、あります。',
                    romaji: 'Hai, arimasu.',
                    translation: 'เคยครับ/ค่ะ'
                }
            ]
        },
        notes: [
            'ใช้ ことがある กับประสบการณ์ในอดีต',
            'ใช้กับประโยคคำถามหรือบอกเล่า',
            'รูปปฏิเสธคือ ことがありません'
        ],
        commonMistakes: [
            'ใช้ ことがある กับเหตุการณ์ที่ยังไม่เกิดขึ้น (ผิด)',
            'ลืมผันกริยาเป็นรูป た ก่อนเติม ことがある'
        ],
        compareWith: '〜ことがある (เคย...) vs 〜たことがない (ไม่เคย...)'
    },
    {
        id: 'aida-ni',
        title: '〜間に (ระหว่างที่...)',
        level: 'N4',
        difficulty: 'ปานกลาง',
        pattern: 'N の/ V ている + 間に',
        explanation: 'ใช้บอกเหตุการณ์ที่เกิดขึ้นระหว่างที่อีกเหตุการณ์หนึ่งกำลังดำเนินอยู่',
        usagePoints: [
            'ใช้ N の/ V ている + 間に',
            'ใช้กับเหตุการณ์ที่เกิดขึ้นในช่วงเวลาหนึ่ง',
            'ใช้กับประโยคที่มีสองเหตุการณ์',
            'ใช้กับกริยา ている เพื่อแสดงว่ากำลังดำเนินอยู่',
            'ใช้กับคำนามที่แสดงช่วงเวลา'
        ],
        examples: [
            { jp: '昼寝している間に電話がありました。', romaji: 'Hirune shite iru aida ni denwa ga arimashita.', th: 'มีโทรศัพท์เข้าระหว่างที่กำลังงีบหลับ' }
        ],
        extraExamples: [
            { jp: '授業の間にメッセージが来ました。', romaji: 'Jugyou no aida ni messeeji ga kimashita.', th: 'ระหว่างเรียนมีข้อความมา' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: '昼寝している間に誰か来ましたか。',
                    romaji: 'Hirune shite iru aida ni dareka kimashita ka.',
                    translation: 'ระหว่างที่งีบหลับมีใครมาหรือเปล่าครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: 'はい、友達が来ました。',
                    romaji: 'Hai, tomodachi ga kimashita.',
                    translation: 'ใช่ครับ/ค่ะ เพื่อนมาครับ/ค่ะ'
                }
            ]
        },
        notes: [
            'ใช้ 間に กับเหตุการณ์ที่เกิดขึ้นในช่วงเวลาหนึ่ง',
            'ใช้กับกริยา ている หรือคำนามที่แสดงช่วงเวลา',
            'ใช้กับประโยคที่มีสองเหตุการณ์'
        ],
        commonMistakes: [
            'ใช้ 間に กับเหตุการณ์ที่เกิดขึ้นตลอดเวลา (ผิด)',
            'ลืมใช้ の หรือ ている ก่อน 間に'
        ],
        compareWith: '〜間に (ระหว่างที่...) vs 〜間 (ตลอดช่วง...)'
    },
    {
        id: 'you-ni',
        title: '〜ように (เพื่อให้...)',
        level: 'N4',
        difficulty: 'ปานกลาง',
        pattern: 'V (dictionary/ない) + ように',
        explanation: 'ใช้แสดงเป้าหมายหรือวัตถุประสงค์ เช่น "เพื่อให้..."',
        usagePoints: [
            'ใช้กริยารูป dictionary หรือ ない + ように',
            'ใช้กับประโยคที่แสดงเป้าหมายหรือวัตถุประสงค์',
            'ใช้กับคำแนะนำหรือเตือน',
            'ใช้กับประโยคปฏิเสธ เช่น 忘れないように (เพื่อจะได้ไม่ลืม)',
            'ใช้กับประโยคบอกเล่า เช่น 覚えるように (เพื่อให้จำได้)'
        ],
        examples: [
            { jp: '忘れないようにメモします。', romaji: 'Wasurenai you ni memo shimasu.', th: 'จดบันทึกไว้เพื่อจะได้ไม่ลืม' }
        ],
        extraExamples: [
            { jp: '遅れないように早く出ます。', romaji: 'Okurenai you ni hayaku demasu.', th: 'ออกไปแต่เช้าเพื่อจะได้ไม่สาย' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: 'どうしてメモしますか。',
                    romaji: 'Doushite memo shimasu ka.',
                    translation: 'ทำไมถึงจดบันทึกครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: '忘れないようにメモします。',
                    romaji: 'Wasurenai you ni memo shimasu.',
                    translation: 'จดไว้เพื่อจะได้ไม่ลืมครับ/ค่ะ'
                }
            ]
        },
        notes: [
            'ใช้ ように กับประโยคที่แสดงเป้าหมายหรือวัตถุประสงค์',
            'ใช้กับกริยารูป dictionary หรือ ない',
            'ใช้กับคำแนะนำหรือเตือน'
        ],
        commonMistakes: [
            'ใช้ ように กับประโยคที่ไม่ใช่เป้าหมาย (ผิด)',
            'ลืมผันกริยาเป็นรูป dictionary หรือ ない ก่อนเติม ように'
        ],
        compareWith: '〜ように (เพื่อให้...) vs ために (เพื่อ...)'
    },
    {
        id: 'kore-sore-are',
        title: 'これ／それ／あれ',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'これ／それ／あれ',
        structureDiagram: `
            <table class="grammar-diagram">
                <tr><td>これ／それ／あれ</td></tr>
                <tr><td>これは本です</td></tr>
            </table>
        `,
        explanation: 'ใช้ชี้สิ่งของที่มองเห็นได้ โดย これ (ใกล้ผู้พูด), それ (ใกล้ผู้ฟัง), อれ (ไกลทั้งสองฝ่าย)',
        usagePoints: [
            'ใช้ これ เมื่อสิ่งของอยู่ใกล้ผู้พูด',
            'ใช้ それ เมื่อสิ่งของอยู่ใกล้ผู้ฟัง',
            'ใช้ あれ เมื่อสิ่งของอยู่ไกลทั้งสองฝ่าย'
        ],
        examples: [
            { jp: 'これは私のペンです。', romaji: 'Kore wa watashi no pen desu.', th: 'นี่คือปากกาของฉัน' },
            { jp: 'それは何ですか。', romaji: 'Sore wa nan desu ka.', th: 'นั้นคืออะไร' },
            { jp: 'あれは山です。', romaji: 'Are wa yama desu.', th: 'นั้นคือภูเขา' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: 'これは何ですか。',
                    romaji: 'Kore wa nan desu ka.',
                    translation: 'นี่คืออะไรครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: 'それは本です。',
                    romaji: 'Sore wa hon desu.',
                    translation: 'นั้นคือหนังสือครับ/ค่ะ'
                },
                {
                    speaker: 'Aさん',
                    text: 'あれは誰の本ですか。',
                    romaji: 'Are wa dare no hon desu ka.',
                    translation: 'นั้นคือหนังสือของใคร'
                }
            ]
        },
        notes: [
            'これ／それ／あれ ใช้แทนคำนามที่เป็นสิ่งของเท่านั้น ไม่ใช้กับคนหรือสถานที่',
            'ใช้คู่กับ は หรือคำช่วยอื่นๆ ได้',
            'ไม่ใช้ これ／それ／あれ เมื่อพูดถึงสิ่งที่เป็นนามธรรม'
        ],
        commonMistakes: [
            'ใช้ これ／それ／あれ กับคน (ผิด: これは田中さんです, ถูก: この人は田中さんです)',
            'ใช้ผิดตำแหน่ง เช่น ใช้ これ กับสิ่งที่อยู่ไกล (ผิด: これ, ถูก: あれ)'
        ],
        compareWith: 'これ／それ／あれ (สิ่งของ) vs ここ／そこ／あそこ (สถานที่)'
    },
    {
        id: 'kono-sono-ano',
        title: 'この／その／あの + คำนาม',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'この／その／あの + คำนาม',
        structureDiagram: `
            <table class="grammar-diagram">
                <tr><td>この／その／あの</td><td>คำนาม</td></tr>
                <tr><td>この本</td><td>本</td></tr>
            </table>
        `,
        explanation: 'ใช้ขยายคำนามเพื่อระบุสิ่งของ โดย この (ใกล้ผู้พูด), その (ใกล้ผู้ฟัง), อの (ไกลทั้งสองฝ่าย)',
        usagePoints: [
            'ต้องตามด้วยคำนามเสมอ',
            'この ใช้เมื่อสิ่งของอยู่ใกล้ผู้พูด',
            'その ใช้เมื่อสิ่งของอยู่ใกล้ผู้ฟัง',
            'あの ใช้เมื่อสิ่งของอยู่ไกลทั้งสองฝ่าย'
        ],
        examples: [
            { jp: 'この本は面白いです。', romaji: 'Kono hon wa omoshiroi desu.', th: 'หนังสือเล่มนี้น่าสนใจ' },
            { jp: 'そのカバンは高いです。', romaji: 'Sono kaban wa takai desu.', th: 'กระเป๋าใบนั้นแพง' },
            { jp: 'あの車は誰の？', romaji: 'Ano kuruma wa dare no?', th: 'รถคันนั้นเป็นของใคร' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: 'この本は誰の？',
                    romaji: 'Kono hon wa dare no?',
                    translation: 'หนังสือเล่มนี้เป็นของใคร'
                },
                {
                    speaker: 'Bさん',
                    text: 'その本は私の。',
                    romaji: 'Sono hon wa watashi no.',
                    translation: 'หนังสือเล่มนั้นเป็นของฉัน'
                },
                {
                    speaker: 'Aさん',
                    text: 'あの机の本は？',
                    romaji: 'Ano tsukue no hon wa?',
                    translation: 'แล้วหนังสือบนโต๊ะนั้นล่ะ'
                }
            ]
        },
        notes: [
            'この／その／あの ต้องตามด้วยคำนามเสมอ',
            'ใช้กับสิ่งของหรือคนได้ แต่ไม่ใช้กับสถานที่',
            'สามารถใช้คู่กับคำช่วยอื่นๆ เช่น は, が'
        ],
        commonMistakes: [
            'ใช้ この／その／あの โดยไม่มีคำนามตามหลัง (ผิด: このです, ถูก: この本です)',
            'ใช้ผิดตำแหน่ง เช่น ใช้ この กับสิ่งที่อยู่ไกล (ผิด: この山, ถูก: あの山)'
        ],
        compareWith: 'この／その／あの (ขยายคำนาม) vs これ／それ／あれ (ใช้เดี่ยวๆ)'
    },
    {
        id: 'ka-ka',
        title: '～か、～か',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'คำนาม/กริยา + か、+ คำนาม/กริยา + か',
        structureDiagram: `
            <table class="grammar-diagram">
                <tr><td>คำนาม/กริยา</td><td>か、</td><td>คำนาม/กริยา</td><td>か</td></tr>
                <tr><td>コーヒー</td><td>か、</td><td>お茶</td><td>か</td></tr>
            </table>
        `,
        explanation: 'ใช้แสดงตัวเลือกสองอย่างหรือมากกว่า คล้าย "หรือ" ในภาษาไทย',
        usagePoints: [
            'ใช้เชื่อมคำนามหรือกริยาเพื่อแสดงตัวเลือก',
            'มักใช้ในประโยคคำถามเพื่อถามถึงการเลือก',
            'สามารถใช้ได้หลายตัวเลือกในประโยคเดียว'
        ],
        examples: [
            { jp: 'コーヒーかお茶が好きですか。', romaji: 'Koohii ka ocha ga suki desu ka.', th: 'ชอบกาแฟหรือชา' },
            { jp: '行くか行かないか決めます。', romaji: 'Iku ka ikanai ka kime masu.', th: 'จะตัดสินใจว่าจะไปหรือไม่ไป' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: '飲み物はコーヒーかお茶がいい？',
                    romaji: 'Nomimono wa koohii ka ocha ga ii?',
                    translation: 'เครื่องดื่มจะเอาชาหรือกาแฟดี'
                },
                {
                    speaker: 'Bさん',
                    text: 'お茶がいいです。',
                    romaji: 'Ocha ga ii desu.',
                    translation: 'ชาดีค่ะ'
                },
                {
                    speaker: 'Aさん',
                    text: '了解。ミルクか砂糖を入れますか。',
                    romaji: 'Ryoukai. Miruku ka satou o iremasu ka.',
                    translation: 'เข้าใจแล้ว ใส่นมหรือน้ำตาลไหม'
                }
            ]
        },
        notes: [
            'か ใช้เชื่อมตัวเลือก โดยตัวสุดท้ายอาจลงท้ายด้วย か หรือไม่ก็ได้',
            'ใช้ได้ทั้งคำนามและกริยา',
            'มักใช้ในประโยคคำถามหรือการตัดสินใจ'
        ],
        commonMistakes: [
            'ใช้ か ซ้ำซ้อนเกินไป (ผิด: コーヒーか、お茶か、ジュースか, ถูก: コーヒーかお茶かジュース)',
            'ใช้ か กับคำคุณศัพท์โดยตรง (ผิด: 高いか安いか, ถูก: 高いものか安いものか)'
        ],
        compareWith: 'か、か (ตัวเลือกจำกัด) vs や (และอื่นๆ)'
    },
    {
        id: 'koko-soko-asoko-doko',
        title: 'ここ／そこ／あそこ／どこ',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'ここ／そこ／あそこ／どこ',
        structureDiagram: `
            <table class="grammar-diagram">
                <tr><td>ここ／そこ／あそこ／どこ</td></tr>
                <tr><td>ここは学校です</td></tr>
            </table>
        `,
        explanation: 'ใช้ชี้สถานที่ โดย ここ (ใกล้ผู้พูด), そこ (ใกล้ผู้ฟัง), あそこ (ไกลทั้งสองฝ่าย), どこ (ที่ไหน)',
        usagePoints: [
            'ใช้ ここ เมื่อสถานที่อยู่ใกล้ผู้พูด',
            'ใช้ そこ เมื่อสถานที่อยู่ใกล้ผู้ฟัง',
            'ใช้ あそこ เมื่อสถานที่อยู่ไกลทั้งสองฝ่าย',
            'ใช้ どこ เมื่อถามถึงสถานที่'
        ],
        examples: [
            { jp: 'ここは駅です。', romaji: 'Koko wa eki desu.', th: 'ที่นี่คือสถานี' },
            { jp: 'そこに本があります。', romaji: 'Soko ni hon ga arimasu.', th: 'ที่นั่นมีหนังสือ' },
            { jp: 'あそこは図書館です。', romaji: 'Asoko wa toshokan desu.', th: 'ที่นู่นคือห้องสมุด' },
            { jp: 'トイレはどこですか。', romaji: 'Toire wa doko desu ka.', th: 'ห้องน้ำอยู่ที่ไหนครับ/คะ' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: 'トイレはどこですか。',
                    romaji: 'Toire wa doko desu ka.',
                    translation: 'ห้องน้ำอยู่ที่ไหนครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: 'あそこです。',
                    romaji: 'Asoko desu.',
                    translation: 'อยู่ที่นู่นครับ/ค่ะ'
                },
                {
                    speaker: 'Aさん',
                    text: 'ありがとう。ここはカフェですか。',
                    romaji: 'Arigatou. Koko wa kafe desu ka.',
                    translation: 'ขอบคุณ ที่นี่คือร้านกาแฟใช่ไหม'
                }
            ]
        },
        notes: [
            'ここ／そこ／あそこ ใช้ชี้สถานที่ที่มองเห็นได้',
            'どこ ใช้ในประโยคคำถามเพื่อถามสถานที่',
            'สามารถใช้คู่กับคำช่วย เช่น は, に, で'
        ],
        commonMistakes: [
            'ใช้ ここ／そこ／あそこ ผิดตำแหน่ง เช่น ใช้ ここ กับที่ที่อยู่ไกล',
            'ใช้ どこ ในประโยคบอกเล่า (ผิด: どこは駅です, ถูก: ここは駅です)'
        ],
        compareWith: 'ここ／そこ／あそこ (สถานที่ที่เจาะจง) vs これ／それ／あれ (สิ่งของ)'
    },
    {
        id: 'wa-doko-desu-ka',
        title: '～はどこですか',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'คำนาม + はどこですか',
        structureDiagram: `
            <table class="grammar-diagram">
                <tr><td>คำนาม</td><td>は</td><td>どこ</td><td>ですか</td></tr>
                <tr><td>トイレ</td><td>は</td><td>どこ</td><td>ですか</td></tr>
            </table>
        `,
        explanation: 'ใช้ถามตำแหน่งหรือสถานที่ของสิ่งนั้น',
        usagePoints: [
            'ใช้เมื่อต้องการถามที่ตั้งของสิ่งของ, คน, หรือสถานที่',
            'คำนามที่อยู่หน้า は คือสิ่งที่ต้องการถาม',
            'มักใช้ในสถานการณ์ที่ต้องการหาตำแหน่ง'
        ],
        examples: [
            { jp: 'トイレはどこですか。', romaji: 'Toire wa doko desu ka.', th: 'ห้องน้ำอยู่ที่ไหนครับ/คะ' },
            { jp: '駅はどこですか。', romaji: 'Eki wa doko desu ka.', th: 'สถานีอยู่ที่ไหนครับ/คะ' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: '駅はどこですか。',
                    romaji: 'Eki wa doko desu ka.',
                    translation: 'สถานีอยู่ที่ไหนครับ/คะ'
                },
                {
                    speaker: 'Bさん',
                    text: 'あそこです。',
                    romaji: 'Asoko desu.',
                    translation: 'อยู่ที่นู่นครับ/ค่ะ'
                },
                {
                    speaker: 'Aさん',
                    text: 'ありがとう。バス停はどこですか。',
                    romaji: 'Arigatou. Basutei wa doko desu ka.',
                    translation: 'ขอบคุณ ป้ายรถเมล์อยู่ที่ไหน'
                }
            ]
        },
        notes: [
            'เป็นรูปประโยคคำถามที่สุภาพ',
            'ใช้ どこ เพื่อถามสถานที่',
            'สามารถใช้กับคำนามที่เป็นสิ่งของ, คน, หรือสถานที่'
        ],
        commonMistakes: [
            'ใช้คำช่วยผิด (ผิด: トイレがどこですか, ถูก: トイレはどこですか)',
            'ลืม ですか (ผิด: トイレはどこ, ถูก: トイレはどこですか)'
        ],
        compareWith: 'どこ (ถามสถานที่ทั่วไป) vs なん (ถามสิ่งของ)'
    }, 
    {
            id: 'o-kudasai',
            title: '～をください',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'คำนาม + をください',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>คำนาม</td><td>を</td><td>ください</td></tr>
                    <tr><td>水</td><td>を</td><td>ください</td></tr>
                </table>
            `,
            explanation: 'ใช้เพื่อขอสิ่งของอย่างสุภาพ คล้าย "ช่วยให้...หน่อย" หรือ "ขอ...หน่อย" ในภาษาไทย',
            usagePoints: [
                'ใช้เมื่อต้องการขอสิ่งของจากผู้อื่น',
                'คำนามที่อยู่หน้า を คือสิ่งที่ต้องการ',
                'เป็นรูปประโยคสุภาพ ใช้ในสถานการณ์ทางการหรือกับคนที่ไม่สนิท'
            ],
            examples: [
                { jp: '水をください。', romaji: 'Mizu o kudasai.', th: 'ขอน้ำหน่อยครับ/ค่ะ' },
                { jp: 'メニューをください。', romaji: 'Menyuu o kudasai.', th: 'ขอเมนูหน่อยครับ/ค่ะ' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: 'すみません、水をください。',
                        romaji: 'Sumimasen, mizu o kudasai.',
                        translation: 'ขอโทษครับ/ค่ะ ขอน้ำหน่อย'
                    },
                    {
                        speaker: 'Bさん',
                        text: 'はい、どうぞ。',
                        romaji: 'Hai, douzo.',
                        translation: 'นี่ครับ/ค่ะ เชิญ'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'ありがとう。メニューもください。',
                        romaji: 'Arigatou. Menyuu mo kudasai.',
                        translation: 'ขอบคุณ ขอเมนูด้วยค่ะ'
                    }
                ]
            },
            notes: [
                'ください ทำให้ประโยคสุภาพขึ้น',
                'ใช้กับสิ่งของที่จับต้องได้เป็นหลัก',
                'สามารถใช้กับคำนามที่เป็นสิ่งของนามธรรมได้ในบางบริบท เช่น 時間をください (ขอเวลาหน่อย)'
            ],
            commonMistakes: [
                'ใช้กับคำกริยาโดยตรง (ผิด: 食べるをください, ถูก: 食べ物をください)',
                'ใช้กับคน (ผิด: 田中さんをください, ถูก: 田中さんに会いたいです)'
            ],
            compareWith: '～をください (ขอสิ่งของ) vs ～てください (ขอให้ทำ)'
        },
        {
            id: 'o-misete-kudasai',
            title: '～を見せてください',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'คำนาม + を見せてください',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>คำนาม</td><td>を</td><td>見せてください</td></tr>
                    <tr><td>本</td><td>を</td><td>見せてください</td></tr>
                </table>
            `,
            explanation: 'ใช้เพื่อขอให้ผู้อื่นแสดงสิ่งของให้ดูอย่างสุภาพ คล้าย "ช่วยโชว์...ให้ดูหน่อย" ในภาษาไทย',
            usagePoints: [
                'ใช้เมื่อต้องการดูสิ่งของหรือตรวจสอบบางอย่าง',
                '見せる หมายถึง "แสดง" หรือ "ให้ดู"',
                'เป็นรูปสุภาพ ใช้ในสถานการณ์ทางการหรือกับคนที่ไม่สนิท'
            ],
            examples: [
                { jp: 'その本を見せてください。', romaji: 'Sono hon o misete kudasai.', th: 'ขอดูหนังสือเล่มนั้นหน่อยครับ/ค่ะ' },
                { jp: '写真を見せてください。', romaji: 'Shashin o misete kudasai.', th: 'ขอดูรูปภาพหน่อยครับ/ค่ะ' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: 'そのバッグを見せてください。',
                        romaji: 'Sono baggu o misete kudasai.',
                        translation: 'ขอดูกระเป๋าใบนั้นหน่อยครับ/ค่ะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: 'はい、どうぞ。',
                        romaji: 'Hai, douzo.',
                        translation: 'นี่ครับ/ค่ะ เชิญ'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'ありがとう。もう一つも見せてください。',
                        romaji: 'Arigatou. Mou hitotsu mo misete kudasai.',
                        translation: 'ขอบคุณ ขอดูอีกอันด้วยค่ะ'
                    }
                ]
            },
            notes: [
                '見せてください เป็นรูป て + ください ทำให้สุภาพ',
                'ใช้กับสิ่งที่มองเห็นได้ เช่น สิ่งของ, รูปภาพ',
                'สามารถใช้ในบริบทการขอตรวจสอบ เช่น ตั๋วหรือบัตร'
            ],
            commonMistakes: [
                'ใช้กับสิ่งที่ไม่สามารถแสดงได้ (ผิด: 時間をみせてください, ถูก: 時計を見せてください)',
                'ลืม を (ผิด: 本見せてください, ถูก: 本を見せてください)'
            ],
            compareWith: '～を見せてください (ขอให้แสดง) vs ～をください (ขอสิ่งของ)'
        },
        {
            id: 'wa-nanji-desu-ka',
            title: '～はなんじですか',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'คำนาม + はなんじですか',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>คำนาม</td><td>は</td><td>なんじ</td><td>ですか</td></tr>
                    <tr><td>授業</td><td>は</td><td>なんじ</td><td>ですか</td></tr>
                </table>
            `,
            explanation: 'ใช้ถามเวลาเกี่ยวกับเหตุการณ์หรือสิ่งที่เกิดขึ้น คล้าย "…กี่โมง" ในภาษาไทย',
            usagePoints: [
                'ใช้เมื่อต้องการถามเวลาเริ่มต้นหรือเวลาของเหตุการณ์',
                'คำนามหน้า は คือสิ่งที่ถามถึง',
                'มักใช้ในสถานการณ์ที่ต้องการทราบตารางเวลา'
            ],
            examples: [
                { jp: '授業はなんじですか。', romaji: 'Jugyou wa nanji desu ka.', th: 'คาบเรียนเริ่มกี่โมงครับ/คะ' },
                { jp: '映画はなんじですか。', romaji: 'Eiga wa nanji desu ka.', th: 'หนังเริ่มกี่โมงครับ/คะ' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '電車はなんじですか。',
                        romaji: 'Densha wa nanji desu ka.',
                        translation: 'รถไฟมากี่โมงครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: '8時です。',
                        romaji: 'Hachi-ji desu.',
                        translation: 'แปดโมงครับ/ค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'ありがとう。バスはなんじですか。',
                        romaji: 'Arigatou. Basu wa nanji desu ka.',
                        translation: 'ขอบคุณ รถบัสมากี่โมง'
                    }
                ]
            },
            notes: [
                'なんじ ใช้ถามเวลาในหน่วยชั่วโมง',
                'สามารถใช้กับเหตุการณ์หรือยานพาหนะ เช่น รถไฟ, การประชุม',
                'ตอบด้วยเวลา เช่น 8時 (hachi-ji) = 8 โมง'
            ],
            commonMistakes: [
                'ใช้ผิดคำถาม (ผิด: 時計はなんじですか, ถูก: いまなんじですか สำหรับถามเวลาปัจจุบัน)',
                'ลืม は (ผิด: 授業なんじですか, ถูก: 授業はなんじですか)'
            ],
            compareWith: 'いまなんじですか (ถามเวลาปัจจุบัน) vs ～はなんじですか (ถามเวลาเหตุการณ์)'
        },
        {
            id: 'kara-made',
            title: '～から～まで',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'เวลา/สถานที่ + から + เวลา/สถานที่ + まで',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>เวลา/สถานที่</td><td>から</td><td>เวลา/สถานที่</td><td>まで</td></tr>
                    <tr><td>8時</td><td>から</td><td>5時</td><td>まで</td></tr>
                </table>
            `,
            explanation: 'ใช้แสดงช่วงเวลา หรือสถานที่ตั้งแต่จุดเริ่มต้นถึงจุดสิ้นสุด คล้าย "ตั้งแต่...ถึง..."',
            usagePoints: [
                'ใช้กับเวลา, สถานที่, หรือจำนวน',
                'から ระบุจุดเริ่มต้น, まで ระบุจุดสิ้นสุด',
                'สามารถใช้ในประโยคบอกเล่าหรือคำถาม'
            ],
            examples: [
                { jp: '8時から5時まで働きます。', romaji: 'Hachi-ji kara go-ji made hatarakimasu.', th: 'ทำงานตั้งแต่ 8 โมงถึง 5 โมง' },
                { jp: '東京から大阪まで行きます。', romaji: 'Toukyou kara Oosaka made ikimasu.', th: 'ไปตั้งแต่โตเกียวถึงโอซาก้า' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '学校は何時から何時までですか。',
                        romaji: 'Gakkou wa nanji kara nanji made desu ka.',
                        translation: 'โรงเรียนเริ่มกี่โมงถึงกี่โมงครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: '9時から3時までです。',
                        romaji: 'Gozen kuji kara gogo sanji made desu.',
                        translation: 'ตั้งแต่ 9 โมงเช้าถึงบ่าย 3 โมงครับ/ค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'そうですか。ありがとう。',
                        romaji: 'Sou desu ka. Arigatou.',
                        translation: 'อย่างนั้นเหรอ ขอบคุณ'
                    }
                ]
            },
            notes: [
                'から และ まで สามารถใช้แยกกันได้ในบางบริบท',
                'ใช้ได้ทั้งเวลา, สถานที่, และขอบเขตอื่นๆ เช่น จำนวนเงิน',
                'เป็นโครงสร้างที่พบได้บ่อยในชีวิตประจำวัน'
            ],
            commonMistakes: [
                'สลับ から และ まで (ผิด: 5時まで8時から, ถูก: 8時から5時まで)',
                'ใช้กับคำที่ไม่ใช่จุดเริ่ม/สิ้นสุด (ผิด: 本から, ถูก: 時間から)'
            ],
            compareWith: '～から (ตั้งแต่) vs ～まで (จนถึง)'
        },
        {
            id: 'ya-nado',
            title: '～や～など',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'คำนาม + や + คำนาม + など',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>คำนาม</td><td>や</td><td>คำนาม</td><td>など</td></tr>
                    <tr><td>りんご</td><td>や</td><td>バナナ</td><td>など</td></tr>
                </table>
            `,
            explanation: 'ใช้เชื่อมคำนามเพื่อแสดงตัวอย่างบางส่วน คล้าย "และอื่นๆ" ในภาษาไทย',
            usagePoints: [
                'や ใช้เชื่อมคำนามที่เป็นตัวอย่าง',
                'など เน้นว่าเป็นเพียงตัวอย่าง ไม่ครบถ้วน',
                'ใช้ในบริบทที่ไม่ต้องการระบุทุกอย่าง'
            ],
            examples: [
                { jp: 'りんごやバナナなどを買いました。', romaji: 'Ringo ya banana nado o kaimashita.', th: 'ซื้อแอปเปิ้ล กล้วย และอื่นๆ' },
                { jp: '本やペンなどを借ります。', romaji: 'Hon ya pen nado o karimasu.', th: 'ยืมหนังสือ ปากกา และอื่นๆ' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: 'スーパーで何を買いましたか。',
                        romaji: 'Suupaa de nani o kaimashita ka.',
                        translation: 'ซื้ออะไรที่ซูเปอร์มาร์เก็ตบ้าง'
                    },
                    {
                        speaker: 'Bさん',
                        text: 'りんごやバナナなどを買いました。',
                        romaji: 'Ringo ya banana nado o kaimashita.',
                        translation: 'ซื้อแอปเปิ้ล กล้วย และอื่นๆ ค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'いいね。野菜も買いましたか。',
                        romaji: 'Ii ne. Yasai mo kaimashita ka.',
                        translation: 'ดีจัง ซื้อผักด้วยไหม'
                    }
                ]
            },
            notes: [
                'など ทำให้ประโยคดูไม่จำกัดเฉพาะสิ่งที่ระบุ',
                'や ใช้เชื่อมคำนามที่มีความสำคัญเท่ากัน',
                'สามารถใช้ や เพียงอย่างเดียวโดยไม่ต้องมี など'
            ],
            commonMistakes: [
                'ใช้ や กับคำกริยา (ผิด: 食べるや飲む, ถูก: りんごやバナナ)',
                'ใช้ など โดยไม่มี や (ผิด: りんごなどバナナ, ถูก: りんごやバナナなど)'
            ],
            compareWith: 'や (และอื่นๆ) vs と (และทั้งหมด)'
        },
        {
            id: 'ne-yo',
            title: '～ね／～よ',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'ประโยค + ね／よ',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>ประโยค</td><td>ね／よ</td></tr>
                    <tr><td>いい天気です</td><td>ね</td></tr>
                </table>
            `,
            explanation: 'ね ใช้ขอความเห็นด้วยหรือยืนยัน ส่วน โย ใช้เน้นข้อมูลที่ผู้พูดรู้แต่ผู้ฟังอาจไม่รู้',
            usagePoints: [
                'ね ใช้เมื่อต้องการให้ผู้ฟังเห็นด้วยหรือยืนยัน',
                'よ ใช้เมื่อต้องการบอกข้อมูลใหม่หรือเน้น',
                'ทั้งสองใช้ท้ายประโยคเพื่อเพิ่มอารมณ์'
            ],
            examples: [
                { jp: 'いい天気ですね。', romaji: 'Ii tenki desu ne.', th: 'อากาศดีเนาะ' },
                { jp: '明日休みですよ。', romaji: 'Ashita yasumi desu yo.', th: 'พรุ่งนี้หยุดนะ' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: 'このケーキ美味しいですね。',
                        romaji: 'Kono keeki oishii desu ne.',
                        translation: 'เค้กนี้อร่อยเนาะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: '本当！私も好きですよ。',
                        romaji: 'Hontou! Watashi mo suki desu yo.',
                        translation: 'จริงด้วย ฉันก็ชอบนะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'また買おうね。',
                        romaji: 'Mata kaou ne.',
                        translation: 'ซื้ออีกนะ'
                    }
                ]
            },
            notes: [
                'ね ทำให้ประโยคดูเป็นมิตรและชวนคุย',
                'よ ใช้เมื่อผู้พูดมั่นใจในข้อมูล',
                'ทั้งสองใช้ในภาษาพูดเป็นหลัก'
            ],
            commonMistakes: [
                'ใช้ ね ในบริบทที่ไม่ต้องการการยืนยัน (ผิด: 私は学生ですね, ถูก: 私は学生です)',
                'ใช้ โย ในบริบทที่ผู้ฟังรู้อยู่แล้ว (ผิด: あなたは学生ですよ, ถูก: あなたは学生です)'
            ],
            compareWith: 'ね (ขอความเห็นด้วย) vs โย (เน้นข้อมูล)'
        },
        {
            id: 'e-ikimasu-kimasu-kaerimasu',
            title: '～へ行きます／来ます／帰ります',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'สถานที่ + へ + 行きます／来ます／帰ります',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>สถานที่</td><td>へ</td><td>行きます／来ます／帰ります</td></tr>
                    <tr><td>学校</td><td>へ</td><td>行きます</td></tr>
                </table>
            `,
            explanation: 'ใช้ระบุการเคลื่อนที่ไป, มา, หรือกลับไปยังสถานที่',
            usagePoints: [
                '行きます = ไป, 来ます = มา, 帰ります = กลับ',
                'へ ระบุจุดหมายปลายทาง',
                'ใช้ในบริบทที่เกี่ยวข้องกับการเคลื่อนที่'
            ],
            examples: [
                { jp: '学校へ行きます。', romaji: 'Gakkou e ikimasu.', th: 'ไปโรงเรียน' },
                { jp: '家へ来ます。', romaji: 'Ie e kimasu.', th: 'มาบ้าน' },
                { jp: '国へ帰ります。', romaji: 'Kuni e kaerimasu.', th: 'กลับประเทศ' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: 'どこへ行きますか。',
                        romaji: 'Doko e ikimasu ka.',
                        translation: 'ไปไหนครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: 'スーパーへ行きます。',
                        romaji: 'Suupaa e ikimasu.',
                        translation: 'ไปซูเปอร์มาร์เก็ตค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'じゃあ、後に家へ来ますか。',
                        romaji: 'Jaa, ato de ie e kimasu ka.',
                        translation: 'งั้นเดี๋ยวมาบ้านไหม'
                    }
                ]
            },
            notes: [
                'へ ออกเสียงว่า "เอ" ในบริบทนี้',
                'สามารถใช้ に แทน へ ได้ในบางกรณี',
                'กริยาทั้งสามนี้มักใช้ในภาษาพูดประจำวัน'
            ],
            commonMistakes: [
                'ใช้ へ กับกริยาที่ไม่เกี่ยวกับการเคลื่อนที่ (ผิด: 食べるへ, ถูก: 学校へ行きます)',
                'สลับกริยา เช่น ใช้ 来ます แทน 行きます'
            ],
            compareWith: 'へ (ปลายทาง) vs に (จุดมุ่งหมายหรือเวลา)'
        },
        {
            id: 'de-ikimasu',
            title: '～で行きます',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'ยานพาหนะ + で + 行きます',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>ยานพาหนะ</td><td>で</td><td>行きます</td></tr>
                    <tr><td>電車</td><td>で</td><td>行きます</td></tr>
                </table>
            `,
            explanation: 'ใช้ระบุยานพาหนะหรือวิธีการเดินทางไปยังที่ใดที่หนึ่ง',
            usagePoints: [
                'で ระบุเครื่องมือหรือวิธีการ',
                'ใช้กับยานพาหนะ เช่น รถไฟ, รถยนต์, จักรยาน',
                'มักใช้คู่กับ 行きます'
            ],
            examples: [
                { jp: '電車で行きます。', romaji: 'Densha de ikimasu.', th: 'ไปโดยรถไฟ' },
                { jp: '自転車で行きます。', romaji: 'Jitensha de ikimasu.', th: 'ไปโดยจักรยาน' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '学校へどうやって行きますか。',
                        romaji: 'Gakkou e dou yatte ikimasu ka.',
                        translation: 'ไปโรงเรียนยังไงครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: 'バスで行きます。',
                        romaji: 'Basu de ikimasu.',
                        translation: 'ไปโดยรถบัสค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: '私は電車で行きます。',
                        romaji: 'Watashi wa densha de ikimasu.',
                        translation: 'ฉันไปโดยรถไฟ'
                    }
                ]
            },
            notes: [
                'สำหรับการเดินเท้า ใช้ 歩いて (aruite) แทนยานพาหนะ + で',
                'で ยังใช้กับเครื่องมืออื่นๆ เช่น ดินสอ, มีด',
                'เป็นโครงสร้างที่พบในภาษาพูด'
            ],
            commonMistakes: [
                'ใช้ で กับการเดินเท้า (ผิด: 歩くで行きます, ถูก: 歩いて行きます)',
                'ใช้ผิดคำช่วย (ผิด: 電車に, ถูก: 電車で)'
            ],
            compareWith: 'で (วิธีการ) vs へ (ปลายทาง)'
        },
        {
            id: 'dare-to',
            title: 'だれと',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'だれと + กริยา',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>だれ</td><td>と</td><td>กริยา</td></tr>
                    <tr><td>だれ</td><td>と</td><td>行きますか</td></tr>
                </table>
            `,
            explanation: 'ใช้ถามหรือระบุว่าทำอะไรกับ "ใคร" คล้าย "กับใคร" ในภาษาไทย',
            usagePoints: [
                'だれ ใช้ถามบุคคล',
                'と ระบุการทำร่วมกัน',
                'มักใช้ในประโยคคำถามหรือบอกเล่าเกี่ยวกับการกระทำ'
            ],
            examples: [
                { jp: 'だれと行きますか。', romaji: 'Dare to ikimasu ka.', th: 'ไปกับใครครับ/คะ' },
                { jp: '友達と映画を見ます。', romaji: 'Tomodachi to eiga o mimasu.', th: 'ดูหนังกับเพื่อน' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: 'パーティーにだれと行きますか。',
                        romaji: 'Paatii ni dare to ikimasu ka.',
                        translation: 'ไปปาร์ตี้กับใครครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: '家族と行きます。',
                        romaji: 'Kazoku to ikimasu.',
                        translation: 'ไปกับครอบครัวค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: '楽しそう！私も友達と行きます。',
                        romaji: 'Tanoshisou! Watashi mo tomodachi to ikimasu.',
                        translation: 'ดูสนุกจัง ฉันก็ไปกับเพื่อน'
                    }
                ]
            },
            notes: [
                'と ใช้แสดงการทำอะไรร่วมกัน',
                'だれと มักใช้ในคำถามเพื่อสอบถามคู่สนทนา',
                'สามารถใช้กับกริยาต่างๆ เช่น 話す, 食べる'
            ],
            commonMistakes: [
                'ใช้ と กับคำที่ไม่ใช่บุคคล (ผิด: 本と行きます, ถูก: 友達と行きます)',
                'ใช้ だれ โดยไม่มี と (ผิด: だれ行きますか, ถูก: だれと行きますか)'
            ],
            compareWith: 'だれと (กับใคร) vs と (และ)'
        },
        {
            id: 'itsu',
            title: 'いつ',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'いつ + กริยา',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>いつ</td><td>กริยา</td></tr>
                    <tr><td>いつ</td><td>行きますか</td></tr>
                </table>
            `,
            explanation: 'ใช้ถามเวลาที่เกิดเหตุการณ์ คล้าย "เมื่อไหร่" ในภาษาไทย',
            usagePoints: [
                'ใช้ในประโยคคำถามเพื่อถามเวลา',
                'สามารถใช้กับกริยาต่างๆ',
                'ตอบด้วยช่วงเวลา เช่น 明日, 今日, 来週'
            ],
            examples: [
                { jp: 'いつ日本へ行きますか。', romaji: 'Itsu Nihon e ikimasu ka.', th: 'ไปญี่ปุ่นเมื่อไหร่ครับ/คะ' },
                { jp: 'いつ寝ますか。', romaji: 'Itsu nemasu ka.', th: 'นอนเมื่อไหร่ครับ/คะ' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: 'いつ学校へ行きますか。',
                        romaji: 'Itsu gakkou e ikimasu ka.',
                        translation: 'ไปโรงเรียนเมื่อไหร่ครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: '明日行きます。',
                        romaji: 'Ashita ikimasu.',
                        translation: 'ไปพรุ่งนี้ค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'そうですか。いつ帰りますか。',
                        romaji: 'Sou desu ka. Itsu kaerimasu ka.',
                        translation: 'อย่างนั้นเหรอ กลับเมื่อไหร่'
                    }
                ]
            },
            notes: [
                'いつ ใช้ถามเวลาในอนาคตหรืออดีต',
                'ไม่ใช้กับเวลาที่แน่นอน เช่น ชั่วโมง (ใช้ なんじ แทน)',
                'มักใช้ในภาษาพูด'
            ],
            commonMistakes: [
                'ใช้ いつ ถามเวลาที่แน่นอน (ผิด: いつは8時ですか, ถูก: 授業はなんじですか)',
                'ใช้ いつ ในประโยคบอกเล่า (ผิด: いつは明日です, ถูก: 明日行きます)'
            ],
            compareWith: 'いつ (เมื่อไหร่) vs なんじ (กี่โมง)'
        },
        {
            id: 'o-masu',
            title: '～を～ます',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'คำนาม + を + กริยารูป ます',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>คำนาม</td><td>を</td><td>V (รูป ます)</td></tr>
                    <tr><td>本</td><td>を</td><td>読みます</td></tr>
                </table>
            `,
            explanation: 'ใช้ระบุกรรม (สิ่งที่ถูกกระทำ) ด้วยคำช่วย を และตามด้วยกริยารูป ます เพื่อแสดงการกระทำที่สุภาพ',
            usagePoints: [
                'を ใช้ระบุกรรมของกริยา',
                'รูป ます ทำให้ประโยคสุภาพ',
                'ใช้ในสถานการณ์ทางการหรือกับคนที่ไม่สนิท'
            ],
            examples: [
                { jp: '本を読みます。', romaji: 'Hon o yomimasu.', th: 'อ่านหนังสือ' },
                { jp: 'ご飯を食べます。', romaji: 'Gohan o tabemasu.', th: 'กินข้าว' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '毎日何をしますか。',
                        romaji: 'Mainichi nani o shimasu ka.',
                        translation: 'ทุกวันทำอะไรครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: '本を読みます。',
                        romaji: 'Hon o yomimasu.',
                        translation: 'อ่านหนังสือค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: '私も本を読みます。',
                        romaji: 'Watashi mo hon o yomimasu.',
                        translation: 'ฉันก็อ่านหนังสือ'
                    }
                ]
            },
            notes: [
                'を ใช้กับกริยาที่มีกรรม เช่น 食べる, 読む, 見る',
                'รูป ます ใช้ในบริบทสุภาพ',
                'สามารถใช้กับคำนามที่เป็นสิ่งของหรือนามธรรม'
            ],
            commonMistakes: [
                'ใช้ を กับคำที่ไม่ใช่กรรม (ผิด: 学校をあります, ถูก: 学校に行きます)',
                'ลืม を (ผิด: 本読みます, ถูก: 本を読みます)'
            ],
            compareWith: '～を～ます (สุภาพ) vs ～る/う (ไม่เป็นทางการ)'
        },
        {
            id: 'o-masen',
            title: '～を～ません',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'คำนาม + を + กริยารูป ません',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>คำนาม</td><td>を</td><td>V (รูป ません)</td></tr>
                    <tr><td>肉</td><td>を</td><td>食べません</td></tr>
                </table>
            `,
            explanation: 'ใช้ปฏิเสธการกระทำที่สุภาพ โดยใช้ を ระบุกรรมและ ません แทนการกระทำ',
            usagePoints: [
                'ません เป็นรูปปฏิเสธของ ます',
                'ใช้เมื่อต้องการบอกว่า "ไม่ทำ" อะไรบางอย่าง',
                'เหมาะสำหรับการพูดสุภาพ'
            ],
            examples: [
                { jp: '肉を食べません。', romaji: 'Niku o tabemasen.', th: 'ไม่กินเนื้อ' },
                { jp: 'テレビを見ません。', romaji: 'Terebi o mimasen.', th: 'ไม่ดูทีวี' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '魚を食べますか。',
                        romaji: 'Sakana o tabemasu ka.',
                        translation: 'กินปลาไหมครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: '魚を食べません。',
                        romaji: 'Sakana o tabemasen.',
                        translation: 'ไม่กินปลาค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'じゃあ、肉を食べますか。',
                        romaji: 'Jaa, niku o tabemasu ka.',
                        translation: 'งั้นกินเนื้อไหม'
                    }
                ]
            },
            notes: [
                'ません ทำให้ประโยคปฏิเสธและสุภาพ',
                'ใช้กับกริยาที่มีกรรมเท่านั้น',
                'สามารถใช้ในบริบททางการและไม่เป็นทางการ'
            ],
            commonMistakes: [
                'ใช้ ません กับคำที่ไม่ใช่กริยา (ผิด: 学生ません, ถูก: 学生ではありません)',
                'ใช้ผิดคำช่วย (ผิด: 肉が食べません, ถูก: 肉を食べません)'
            ],
            compareWith: '～ません (ปฏิเสธสุภาพ) vs ～ない (ปฏิเสธไม่เป็นทางการ)'
        },
        {
            id: 'o-mashita',
            title: '～を～ました',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'คำนาม + を + กริยารูป ました',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>คำนาม</td><td>を</td><td>V (รูป ました)</td></tr>
                    <tr><td>本</td><td>を</td><td>読みました</td></tr>
                </table>
            `,
            explanation: 'ใช้บอกเล่าการกระทำในอดีตอย่างสุภาพ โดยใช้ を ระบุกรรม',
            usagePoints: [
                'ました เป็นรูปอดีตของ ます',
                'ใช้เมื่อพูดถึงสิ่งที่เกิดขึ้นแล้ว',
                'เหมาะสำหรับการพูดสุภาพ'
            ],
            examples: [
                { jp: '本を読みました。', romaji: 'Hon o yomimashita.', th: 'อ่านหนังสือแล้ว' },
                { jp: '映画を見ました。', romaji: 'Eiga o mimashita.', th: 'ดูหนังแล้ว' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '昨日何をしましたか。',
                        romaji: 'Kinou nani o shimashita ka.',
                        translation: 'เมื่อวานทำอะไรครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: '映画を見ました。',
                        romaji: 'Eiga o mimashita.',
                        translation: 'ดูหนังค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'いいね！私も本を読みました。',
                        romaji: 'Ii ne! Watashi mo hon o yomimashita.',
                        translation: 'ดีจัง ฉันก็อ่านหนังสือ'
                    }
                ]
            },
            notes: [
                'ました ใช้แสดงอดีตในบริบทสุภาพ',
                'ใช้กับกริยาที่มีกรรม',
                'สามารถใช้ในสถานการณ์ทางการ'
            ],
            commonMistakes: [
                'ใช้ ました กับคำที่ไม่ใช่กริยา (ผิด: 学生ました, ถูก: 学生でした)',
                'ลืม を (ผิด: 本読みました, ถูก: 本を読みました)'
            ],
            compareWith: '～ました (อดีตสุภาพ) vs ～た (อดีตไม่เป็นทางการ)'
        },
        {
            id: 'o-masen-deshita',
            title: '～を～ませんでした',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'คำนาม + を + กริยารูป ませんでした',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>คำนาม</td><td>を</td><td>V (รูป ませんでした)</td></tr>
                    <tr><td>宿題</td><td>を</td><td>しませんでした</td></tr>
                </table>
            `,
            explanation: 'ใช้ปฏิเสธการกระทำในอดีตอย่างสุภาพ โดยใช้ を ระบุกรรม',
            usagePoints: [
                'ませんでした เป็นรูปอดีตปฏิเสธของ ます',
                'ใช้เมื่อบอกว่า "ไม่ได้ทำ" อะไรในอดีต',
                'เหมาะสำหรับการพูดสุภาพ'
            ],
            examples: [
                { jp: '宿題をしませんでした。', romaji: 'Shukudai o shimasen deshita.', th: 'ไม่ได้ทำการบ้าน' },
                { jp: '映画を見ませんでした。', romaji: 'Eiga o mimasen deshita.', th: 'ไม่ได้ดูหนัง' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '昨日テレビを見ましたか。',
                        romaji: 'Kinou terebi o mimashita ka.',
                        translation: 'เมื่อวานดูทีวีไหมครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: 'いいえ、テレビを見ませんでした。',
                        romaji: 'Iie, terebi o mimasen deshita.',
                        translation: 'ไม่ค่ะ ไม่ได้ดูทีวี'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'じゃあ、何をしましたか。',
                        romaji: 'Jaa, nani o shimashita ka.',
                        translation: 'งั้นทำอะไรล่ะ'
                    }
                ]
            },
            notes: [
                'ませんでした ใช้ในบริบทสุภาพ',
                'ใช้กับกริยาที่มีกรรม',
                'สามารถใช้ในสถานการณ์ทางการ'
            ],
            commonMistakes: [
                'ใช้ ませんでした กับคำที่ไม่ใช่กริยา (ผิด: 学生ませんでした, ถูก: 学生ではありませんでした)',
                'ใช้ผิดคำช่วย (ผิด: 宿題がしませんでした, ถูก: 宿題をしませんでした)'
            ],
            compareWith: '～ませんでした (อดีตปฏิเสธสุภาพ) vs ～なかった (อดีตปฏิเสธไม่เป็นทางการ)'
        },
        {
            id: 'nani-o-shimasu-ka',
            title: 'なにをしますか',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'なにを + しますか',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>なに</td><td>を</td><td>しますか</td></tr>
                </table>
            `,
            explanation: 'ใช้ถามว่าทำอะไร คล้าย "ทำอะไร" ในภาษาไทย',
            usagePoints: [
                'なに ใช้ถามถึงการกระทำหรือสิ่งที่ทำ',
                'します ใช้ในรูปสุภาพ',
                'มักใช้ในภาษาพูดประจำวัน'
            ],
            examples: [
                { jp: '週末なにをしますか。', romaji: 'Shuumatsu nani o shimasu ka.', th: 'วันหยุดสุดสัปดาห์ทำอะไรครับ/คะ' },
                { jp: '今なにをしますか。', romaji: 'Ima nani o shimasu ka.', th: 'ตอนนี้ทำอะไรครับ/คะ' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '今日なにをしますか。',
                        romaji: 'Kyou nani o shimasu ka.',
                        translation: 'วันนี้ทำอะไรครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: '本を読みます。',
                        romaji: 'Hon o yomimasu.',
                        translation: 'อ่านหนังสือค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'いいね！私も映画を見ます。',
                        romaji: 'Ii ne! Watashi mo eiga o mimasu.',
                        translation: 'ดีจัง ฉันจะดูหนัง'
                    }
                ]
            },
            notes: [
                'なに สามารถเปลี่ยนเป็น 何 (nan) ได้ในบางบริบท',
                'ใช้ในคำถามเพื่อสอบถามการกระทำ',
                'สามารถใช้กับบริบททั่วไปหรือเฉพาะเจาะจง'
            ],
            commonMistakes: [
                'ใช้ なに โดยไม่มี を (ผิด: なにしますか, ถูก: なにをしますか)',
                'ใช้ในบริบทที่ไม่เหมาะสม (ผิด: なにを学生ですか, ถูก: なにをしますか)'
            ],
            compareWith: 'なにをしますか (ถามการกระทำ) vs どこへ行きますか (ถามสถานที่)'
        },
        {
            id: 'issho-ni-masen-ka',
            title: 'いっしょに～ませんか',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'いっしょに + กริยารูป ませんか',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>いっしょに</td><td>V (รูป ませんか)</td></tr>
                    <tr><td>いっしょに</td><td>食べませんか</td></tr>
                </table>
            `,
            explanation: 'ใช้ชวนหรือเสนอให้ทำอะไรร่วมกันอย่างสุภาพ คล้าย "ทำ...ด้วยกันไหม" ในภาษาไทย',
            usagePoints: [
                'いっしょに หมายถึง "ด้วยกัน"',
                'ませんか ทำให้เป็นคำชวนที่สุภาพ',
                'ใช้ในสถานการณ์ที่เป็นมิตรหรือทางการเล็กน้อย'
            ],
            examples: [
                { jp: 'いっしょに食べませんか。', romaji: 'Issho ni tabemasen ka.', th: 'กินด้วยกันไหมครับ/คะ' },
                { jp: 'いっしょに行きませんか。', romaji: 'Issho ni ikimasen ka.', th: 'ไปด้วยกันไหมครับ/คะ' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: 'いっしょに映画を見ませんか。',
                        romaji: 'Issho ni eiga o mimasen ka.',
                        translation: 'ดูหนังด้วยกันไหมครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: 'いいですね！いつ？',
                        romaji: 'Ii desu ne! Itsu?',
                        translation: 'ดีเลย เมื่อไหร่'
                    },
                    {
                        speaker: 'Aさん',
                        text: '明日いっしょに行きましょう。',
                        romaji: 'Ashita issho ni ikimashou.',
                        translation: 'พรุ่งนี้ไปด้วยกันนะ'
                    }
                ]
            },
            notes: [
                'いっしょに ใช้แสดงการทำร่วมกัน',
                'ませんか ใช้ในรูปคำถามชวน',
                'สามารถใช้กับกริยาต่างๆ เช่น 行く, 食べる, 勉強する'
            ],
            commonMistakes: [
                'ใช้ いっしょに กับคำที่ไม่ใช่กริยา (ผิด: いっしょに学生ませんか, ถูก: いっしょに勉強しませんか)',
                'ใช้ ませんか โดยไม่มี いっしょに ในบริบทชวน (ผิด: 食べませんか, ถูก: いっしょに食べませんか)'
            ],
            compareWith: 'いっしょに～ませんか (ชวนสุภาพ) vs ～ましょう (เสนอทำ)'
        },
        {
            id: 'mashou',
            title: '～ましょう',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'กริยารูป ましょう',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>V (รูป ましょう)</td></tr>
                    <tr><td>食べましょう</td></tr>
                </table>
            `,
            explanation: 'ใช้เสนอหรือชวนให้ทำอะไรร่วมกันอย่างสุภาพ คล้าย "มาทำ...กันเถอะ" ในภาษาไทย',
            usagePoints: [
                'ましょう เป็นรูปชวนหรือเสนอที่สุภาพ',
                'ใช้เมื่อผู้พูดต้องการรวมตัวเองในการกระทำ',
                'เหมาะสำหรับสถานการณ์ที่เป็นมิตร'
            ],
            examples: [
                { jp: '食べましょう。', romaji: 'Tabemashou.', th: 'มากินกันเถอะ' },
                { jp: '行きましょう。', romaji: 'Ikimashou.', th: 'ไปกันเถอะ' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: 'レストランへ行きましょう。',
                        romaji: 'Resutoran e ikimashou.',
                        translation: 'ไปร้านอาหารกันเถอะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: 'いいね！何を食べましょう。',
                        romaji: 'Ii ne! Nani o tabemashou.',
                        translation: 'ดีเลย กินอะไรดี'
                    },
                    {
                        speaker: 'Aさん',
                        text: '寿司を食べましょう。',
                        romaji: 'Sushi o tabemashou.',
                        translation: 'มากินซูชิกันเถอะ'
                    }
                ]
            },
            notes: [
                'ましょう ใช้ในบริบทที่ผู้พูดรวมตัวเอง',
                'มักใช้ในภาษาพูดที่เป็นมิตร',
                'สามารถใช้กับกริยาต่างๆ'
            ],
            commonMistakes: [
                'ใช้ ましょう กับคำที่ไม่ใช่กริยา (ผิด: 学生ましょう, ถูก: 勉強しましょう)',
                'ใช้ในบริบทที่ไม่เหมาะสม เช่น การสั่ง (ผิด: 早くしましょう, ถูก: 早くしてください)'
            ],
            compareWith: '～ましょう (ชวน) vs ～てください (ขอให้ทำ)'
        },
        {
            id: 'de-place',
            title: '～で + สถานที่',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'สถานที่ + で + กริยา',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>สถานที่</td><td>で</td><td>กริยา</td></tr>
                    <tr><td>学校</td><td>で</td><td>勉強します</td></tr>
                </table>
            `,
            explanation: 'ใช้ระบุสถานที่ที่เกิดการกระทำ คล้าย "ที่..." ในภาษาไทย',
            usagePoints: [
                'で ระบุสถานที่ที่ทำกิจกรรม',
                'ใช้กับกริยาที่แสดงการกระทำ เช่น 勉強する, 食べる',
                'เหมาะสำหรับบริบททั่วไป'
            ],
            examples: [
                { jp: '学校で勉強します。', romaji: 'Gakkou de benkyou shimasu.', th: 'เรียนที่โรงเรียน' },
                { jp: '家でご飯を食べます。', romaji: 'Ie de gohan o tabemasu.', th: 'กินข้าวที่บ้าน' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: 'どこで勉強しますか。',
                        romaji: 'Doko de benkyou shimasu ka.',
                        translation: 'เรียนที่ไหนครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: '図書館で勉強します。',
                        romaji: 'Toshokan de benkyou shimasu.',
                        translation: 'เรียนที่ห้องสมุดค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: '私も図書館で勉強します。',
                        romaji: 'Watashi mo toshokan de benkyou shimasu.',
                        translation: 'ฉันก็เรียนที่ห้องสมุด'
                    }
                ]
            },
            notes: [
                'で ใช้กับสถานที่ที่เกิดการกระทำ ไม่ใช่จุดหมายปลายทาง',
                'สามารถใช้กับสถานที่ทั่วไปหรือเฉพาะเจาะจง',
                'ไม่ใช้กับกริยาการเคลื่อนที่ เช่น 行く, 来る'
            ],
            commonMistakes: [
                'ใช้ で กับกริยาการเคลื่อนที่ (ผิด: 学校で行きます, ถูก: 学校へ行きます)',
                'ใช้ผิดคำช่วย (ผิด: 学校に勉強します, ถูก: 学校で勉強します)'
            ],
            compareWith: 'で (สถานที่กระทำ) vs へ (ปลายทาง)'
        },
        {
            id: 'ni-person',
            title: '～に + คน',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'คน + に + กริยา',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>คน</td><td>に</td><td>กริยา</td></tr>
                    <tr><td>友達</td><td>に</td><td>話します</td></tr>
                </table>
            `,
            explanation: 'ใช้ระบุบุคคลที่เป็นเป้าหมายของการกระทำ เช่น การพูด, การให้, หรือการติดต่อ',
            usagePoints: [
                'に ระบุบุคคลที่เป็นเป้าหมาย',
                'ใช้กับกริยา เช่น 話す, あげる, 教える',
                'เหมาะสำหรับบริบทที่เกี่ยวข้องกับการสื่อสารหรือการให้'
            ],
            examples: [
                { jp: '友達に話します。', romaji: 'Tomodachi ni hanashimasu.', th: 'คุยกับเพื่อน' },
                { jp: '先生に聞きます。', romaji: 'Sensei ni kikimasu.', th: 'ถามครู' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '誰に話しましたか。',
                        romaji: 'Dare ni hanashimashita ka.',
                        translation: 'คุยกับใครครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: '友達に話しました。',
                        romaji: 'Tomodachi ni hanashimashita.',
                        translation: 'คุยกับเพื่อนค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: '私も先生に聞きます。',
                        romaji: 'Watashi mo sensei ni kikimasu.',
                        translation: 'ฉันจะถามครูด้วย'
                    }
                ]
            },
            notes: [
                'に ใช้กับบุคคลที่เป็นเป้าหมายของการกระทำ',
                'สามารถใช้กับกริยาที่แสดงการสื่อสารหรือการให้',
                'ไม่ใช้กับกริยาการเคลื่อนที่โดยตรง'
            ],
            commonMistakes: [
                'ใช้ に กับสิ่งของ (ผิด: 本に話します, ถูก: 友達に話します)',
                'ใช้ผิดคำช่วย (ผิด: 友達と話します, ถูก: 友達に話します ในบริบทการบอกเล่า)'
            ],
            compareWith: 'に (เป้าหมายบุคคล) vs と (ทำร่วมกัน)'
        },
        {
            id: 'o-agemasu-moraimasu-kuremasu',
            title: '～をあげます／もらいます／くれます',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'คำนาม + を + あげます／もらいます／くれます',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>คำนาม</td><td>を</td><td>あげます／もらいます／くれます</td></tr>
                    <tr><td>プレゼント</td><td>を</td><td>あげます</td></tr>
                </table>
            `,
            explanation: 'ใช้แสดงการให้หรือรับสิ่งของ โดย あげます = ให้, もらいます = รับ, くれます = ให้ (จากมุมมองผู้รับ)',
            usagePoints: [
                'あげます ใช้เมื่อผู้พูดเป็นผู้ให้',
                'もらいます ใช้เมื่อผู้พูดเป็นผู้รับ',
                'くれます ใช้เมื่อผู้อื่นให้ผู้พูด'
            ],
            examples: [
                { jp: '友達にプレゼントをあげます。', romaji: 'Tomodachi ni purezento o agemasu.', th: 'ให้ของขวัญกับเพื่อน' },
                { jp: '先生から本をもらいました。', romaji: 'Sensei kara hon o moraimashita.', th: 'ได้รับหนังสือจากครู' },
                { jp: '友達が水をくれました。', romaji: 'Tomodachi ga mizu o kuremashita.', th: 'เพื่อนให้น้ำฉัน' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '誕生日に何をあげましたか。',
                        romaji: 'Tanjoubi ni nani o agemashita ka.',
                        translation: 'วันเกิดให้อะไรครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: '友達に花をあげました。',
                        romaji: 'Tomodachi ni hana o agemashita.',
                        translation: 'ให้ดอกไม้กับเพื่อนค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: '素敵！私も友達からケーキをもらいました。',
                        romaji: 'Suteki! Watashi mo tomodachi kara keeki o moraimashita.',
                        translation: 'สุดยอด ฉันก็ได้เค้กจากเพื่อน'
                    }
                ]
            },
            notes: [
                'あげます และ くれます ใช้ に หรือ から เพื่อระบุผู้รับหรือผู้ให้',
                'もらいます ใช้ から หรือ に ขึ้นอยู่กับบริบท',
                'ใช้ในบริบทการให้-รับสิ่งของหรือความช่วยเหลือ'
            ],
            commonMistakes: [
                'สลับการใช้ あげます และ もらいます (ผิด: 友達にあげました สำหรับรับ, ถูก: 友達からもらいました)',
                'ใช้ผิดคำช่วย (ผิด: 友達があげます, ถูก: 友達にあげます)'
            ],
            compareWith: 'あげます (ให้) vs もらいます (รับ) vs くれます (ถูกให้)'
        },
        {
            id: 'i-keiyoushi',
            title: 'い形容詞',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'い形容詞 + です',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>い形容詞</td><td>です</td></tr>
                    <tr><td>高い</td><td>です</td></tr>
                </table>
            `,
            explanation: 'ใช้คำคุณศัพท์ที่ลงท้ายด้วย い เพื่ออธิบายลักษณะหรือสถานะของสิ่งของหรือคน',
            usagePoints: [
                'い形容詞 ใช้ขยายคำนามหรือบอกลักษณะ',
                'สามารถใช้เดี่ยวๆ หรือตามด้วย です เพื่อความสุภาพ',
                'ผันรูปได้ เช่น อดีต, ปฏิเสธ'
            ],
            examples: [
                { jp: 'この本は面白いです。', romaji: 'Kono hon wa omoshiroi desu.', th: 'หนังสือเล่มนี้น่าสนใจ' },
                { jp: '山は高いです。', romaji: 'Yama wa takai desu.', th: 'ภูเขาสูง' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: 'この映画は面白いですか。',
                        romaji: 'Kono eiga wa omoshiroi desu ka.',
                        translation: 'หนังเรื่องนี้น่าสนใจไหมครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: 'とても面白いです。',
                        romaji: 'Totemo omoshiroi desu.',
                        translation: 'น่าสนใจมากค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'じゃあ、見ます！',
                        romaji: 'Jaa, mimasu!',
                        translation: 'งั้นจะดู!'
                    }
                ]
            },
            notes: [
                'い形容詞 ลงท้ายด้วย い เช่น 高い, 面白い, 寒い',
                'ผันรูปปฏิเสธเป็น ～くない เช่น 面白くない (ไม่น่าสนใจ)',
                'ผันรูปอดีตเป็น ～かった เช่น 面白かった (น่าสนใจ)'
            ],
            commonMistakes: [
                'ใช้ です กับ い形容詞 โดยไม่จำเป็น (ผิด: 面白いですです, ถูก: 面白いです)',
                'ผสมกับ な形容詞 (ผิด: きれいなです, ถูก: きれいです)'
            ],
            compareWith: 'い形容詞 (ลงท้ายด้วย い) vs な形容詞 (ต้องใช้ な)'
        },
        {
            id: 'na-keiyoushi',
            title: 'な形容詞',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'な形容詞 + な + คำนาม หรือ な形容詞 + です',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>な形容詞</td><td>な</td><td>คำนาม</td></tr>
                    <tr><td>静か</td><td>な</td><td>部屋</td></tr>
                </table>
            `,
            explanation: 'ใช้คำคุณศัพท์ที่ต้องตามด้วย な เมื่อขยายคำนาม หรือใช้ です เมื่อบอกลักษณะ',
            usagePoints: [
                'な形容詞 ต้องใช้ な เมื่อขยายคำนาม',
                'ใช้ です เพื่อความสุภาพเมื่อบอกลักษณะ',
                'ผันรูปได้ เช่น ปฏิเสธ, อดีต'
            ],
            examples: [
                { jp: '静かな部屋です。', romaji: 'Shizuka na heya desu.', th: 'ห้องเงียบ' },
                { jp: '元気です。', romaji: 'Genki desu.', th: 'สบายดี' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: 'どんな部屋が好きですか。',
                        romaji: 'Donna heya ga suki desu ka.',
                        translation: 'ชอบห้องแบบไหนครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: '静かな部屋が好きです。',
                        romaji: 'Shizuka na heya ga suki desu.',
                        translation: 'ชอบห้องเงียบค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: '私も静かな部屋がいいです。',
                        romaji: 'Watashi mo shizuka na heya ga ii desu.',
                        translation: 'ฉันก็ชอบห้องเงียบ'
                    }
                ]
            },
            notes: [
                'な形容詞 เช่น 静か, 元気, きれい',
                'ปฏิเสธใช้ ～じゃない เช่น 静かじゃない (ไม่เงียบ)',
                'อดีตใช้ ～だった เช่น 静かだった (เงียบ)'
            ],
            commonMistakes: [
                'ลืม な เมื่อขยายคำนาม (ผิด: 静か部屋, ถูก: 静かな部屋)',
                'ใช้เหมือน い形容詞 (ผิด: きれいです, ถูก: きれいな部屋 หรือ きれいです)'
            ],
            compareWith: 'な形容詞 (ต้องใช้ な) vs い形容詞 (ไม่ใช้ な)'
        },
        {
            id: 'wa-dou-desu-ka',
            title: '～はどうですか',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'คำนาม + はどうですか',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>คำนาม</td><td>は</td><td>どうですか</td></tr>
                    <tr><td>この映画</td><td>は</td><td>どうですか</td></tr>
                </table>
            `,
            explanation: 'ใช้ถามความคิดเห็นเกี่ยวกับสิ่งใดสิ่งหนึ่ง คล้าย "…เป็นยังไงบ้าง" ในภาษาไทย',
            usagePoints: [
                'どう ใช้ถามความรู้สึกหรือความคิดเห็น',
                'ใช้กับคำนามที่เป็นหัวข้อ',
                'มักใช้ในภาษาพูดเพื่อสอบถาม'
            ],
            examples: [
                { jp: 'この映画はどうですか。', romaji: 'Kono eiga wa dou desu ka.', th: 'หนังเรื่องนี้เป็นยังไงบ้าง' },
                { jp: '日本はどうですか。', romaji: 'Nihon wa dou desu ka.', th: 'ญี่ปุ่นเป็นยังไงบ้าง' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: 'このレストランはどうですか。',
                        romaji: 'Kono resutoran wa dou desu ka.',
                        translation: 'ร้านอาหารนี้เป็นยังไงบ้าง'
                    },
                    {
                        speaker: 'Bさん',
                        text: 'とても美味しいです。',
                        romaji: 'Totemo oishii desu.',
                        translation: 'อร่อยมากค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'じゃあ、行きましょう！',
                        romaji: 'Jaa, ikimashou!',
                        translation: 'งั้นไปกันเถอะ!'
                    }
                ]
            },
            notes: [
                'どうですか ใช้ถามความคิดเห็นทั่วไป',
                'สามารถใช้ในบริบทที่เป็นมิตรหรือทางการ',
                'ตอบด้วยคำคุณศัพท์หรือความเห็น เช่น いいです, 面白いです'
            ],
            commonMistakes: [
                'ใช้ どう กับกริยาโดยตรง (ผิด: 食べるはどうですか, ถูก: この料理はどうですか)',
                'ลืม は (ผิด: この映画どうですか, ถูก: この映画はどうですか)'
            ],
            compareWith: '～はどうですか (ถามความเห็น) vs ～はどんな～ですか (ถามลักษณะ)'
        },
        {
            id: 'wa-donna',
            title: '～はどんな～ですか',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'คำนาม + はどんな + คำนาม + ですか',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>คำนาม</td><td>は</td><td>どんな</td><td>คำนาม</td><td>ですか</td></tr>
                    <tr><td>田中さん</td><td>は</td><td>どんな</td><td>人</td><td>ですか</td></tr>
                </table>
            `,
            explanation: 'ใช้ถามลักษณะหรือคุณสมบัติของสิ่งใดสิ่งหนึ่ง คล้าย "…เป็น…แบบไหน" ในภาษาไทย',
            usagePoints: [
                'どんな ใช้ถามลักษณะหรือประเภท',
                'ใช้กับคำนามที่เป็นหัวข้อและคำนามที่อธิบาย',
                'มักใช้ในภาษาพูด'
            ],
            examples: [
                { jp: '田中さんはどんな人ですか。', romaji: 'Tanaka-san wa donna hito desu ka.', th: 'คุณทานากะเป็นคนแบบไหน' },
                { jp: 'この町はどんな町ですか。', romaji: 'Kono machi wa donna machi desu ka.', th: 'เมืองนี้เป็นเมืองแบบไหน' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '日本はどんな国ですか。',
                        romaji: 'Nihon wa donna kuni desu ka.',
                        translation: 'ญี่ปุ่นเป็นประเทศแบบไหนครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: 'きれいで安全な国です。',
                        romaji: 'Kirei de anzen na kuni desu.',
                        translation: 'เป็นประเทศที่สวยและปลอดภัยค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'いいね！行きたいです。',
                        romaji: 'Ii ne! Ikitai desu.',
                        translation: 'ดีจัง อยากไป!'
                    }
                ]
            },
            notes: [
                'どんな ใช้ถามลักษณะหรือประเภทของสิ่งนั้น',
                'มักตามด้วยคำนาม เช่น 人, 町, 食べ物',
                'ตอบด้วยคำคุณศัพท์ เช่น きれい, 静か'
            ],
            commonMistakes: [
                'ลืมคำนามหลัง どんな (ผิด: 田中さんはどんなですか, ถูก: 田中さんはどんな人ですか)',
                'ใช้ どんな กับกริยา (ผิด: どんな食べますか, ถูก: どんな食べ物が好きですか)'
            ],
            compareWith: '～はどんな～ですか (ถามลักษณะ) vs ～はどうですか (ถามความเห็น)'
        },
        {
            id: 'ga-wakarimasu',
            title: '～がわかります',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'คำนาม + が + わかります',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>คำนาม</td><td>が</td><td>わかります</td></tr>
                    <tr><td>日本語</td><td>が</td><td>わかります</td></tr>
                </table>
            `,
            explanation: 'ใช้บอกว่าสามารถเข้าใจหรือรู้เกี่ยวกับสิ่งใดสิ่งหนึ่ง คล้าย "เข้าใจ…" ในภาษาไทย',
            usagePoints: [
                'が ระบุสิ่งที่เข้าใจ',
                'わかります หมายถึง "เข้าใจ" หรือ "รู้"',
                'ใช้ในบริบทที่บอกความสามารถหรือความรู้'
            ],
            examples: [
                { jp: '日本語がわかります。', romaji: 'Nihongo ga wakarimasu.', th: 'เข้าใจภาษาญี่ปุ่น' },
                { jp: '英語がわかりますか。', romaji: 'Eigo ga wakarimasu ka.', th: 'เข้าใจภาษาอังกฤษไหม' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '日本語がわかりますか。',
                        romaji: 'Nihongo ga wakarimasu ka.',
                        translation: 'เข้าใจภาษาญี่ปุ่นไหมครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: '少しわかります。',
                        romaji: 'Sukoshi wakarimasu.',
                        translation: 'เข้าใจนิดหน่อยค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'すごい！英語もわかりますか。',
                        romaji: 'Sugoi! Eigo mo wakarimasu ka.',
                        translation: 'สุดยอด ภาษาอังกฤษก็เข้าใจไหม'
                    }
                ]
            },
            notes: [
                'わかります ใช้ในบริบทความรู้หรือความเข้าใจ',
                'สามารถใช้กับคำนาม เช่น 言語, 意味, 問題',
                'มักใช้ในภาษาพูดและทางการ'
            ],
            commonMistakes: [
                'ใช้ผิดคำช่วย (ผิด: 日本語をわかります, ถูก: 日本語がわかります)',
                'ใช้กับสิ่งที่ไม่ใช่ความรู้ (ผิด: 本がわかります, ถูก: 本の内容がわかります)'
            ],
            compareWith: '～がわかります (เข้าใจ) vs ～ができます (ทำได้)'
        },
        {
            id: 'ga-suki-kirai-jouzu-heta',
            title: '～が好き／きらい／じょうず／へたです',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'คำนาม + が + 好き／きらい／じょうず／へた + です',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>คำนาม</td><td>が</td><td>好き／きらい／じょうず／へた</td><td>です</td></tr>
                    <tr><td>猫</td><td>が</td><td>好き</td><td>です</td></tr>
                </table>
            `,
            explanation: 'ใช้บอกความชอบ, ความไม่ชอบ, ความถนัด, หรือความไม่ถนัดในสิ่งใดสิ่งหนึ่ง',
            usagePoints: [
                'が ระบุสิ่งที่เป็นเป้าหมายของความรู้สึกหรือความสามารถ',
                '好き = ชอบ, きらい = ไม่ชอบ, じょうず = ถนัด, へた = ไม่ถนัด',
                'ใช้ です เพื่อความสุภาพ'
            ],
            examples: [
                { jp: '猫が好きです。', romaji: 'Neko ga suki desu.', th: 'ชอบแมว' },
                { jp: '数学がじょうずです。', romaji: 'Suugaku ga jouzu desu.', th: 'ถนัดคณิตศาสตร์' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '何が好きですか。',
                        romaji: 'Nani ga suki desu ka.',
                        translation: 'ชอบอะไรครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: '犬が好きです。',
                        romaji: 'Inu ga suki desu.',
                        translation: 'ชอบหมา'
                    },
                    {
                        speaker: 'Aさん',
                        text: '私は猫が好きです。',
                        romaji: 'Watashi wa neko ga suki desu.',
                        translation: 'ฉันชอบแมว'
                    }
                ]
            },
            notes: [
                '好き, きらい, じょうず, へた เป็น な形容詞',
                'ใช้ が เพื่อระบุสิ่งที่เป็นเป้าหมาย',
                'สามารถใช้ในบริบทที่เป็นมิตรหรือทางการ'
            ],
            commonMistakes: [
                'ใช้ผิดคำช่วย (ผิด: 猫を好きです, ถูก: 猫が好きです)',
                'ใช้ です ซ้ำ (ผิด: 好きですです, ถูก: 好きです)'
            ],
            compareWith: '～が好き (ชอบ) vs ～がほしい (ต้องการ)'
        },
        {
            id: 'ga-arimasu-imasu',
            title: '～があります／います',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'คำนาม + が + あります／います',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>คำนาม</td><td>が</td><td>あります／います</td></tr>
                    <tr><td>本</td><td>が</td><td>あります</td></tr>
                </table>
            `,
            explanation: 'ใช้บอกการมีอยู่ของสิ่งของ (あります) หรือสิ่งมีชีวิต (います)',
            usagePoints: [
                'あります ใช้กับสิ่งไม่มีชีวิต เช่น สิ่งของ, พืช',
                'います ใช้กับสิ่งมีชีวิต เช่น คน, สัตว์',
                'が ระบุสิ่งที่มีอยู่'
            ],
            examples: [
                { jp: '机の上に本があります。', romaji: 'Tsukue no ue ni hon ga arimasu.', th: 'มีหนังสือบนโต๊ะ' },
                { jp: '公園に猫がいます。', romaji: 'Kouen ni neko ga imasu.', th: 'มีแมวในสวนสาธารณะ' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '部屋に何がありますか。',
                        romaji: 'Heya ni nani ga arimasu ka.',
                        translation: 'ในห้องมีอะไรบ้าง'
                    },
                    {
                        speaker: 'Bさん',
                        text: '本があります。',
                        romaji: 'Hon ga arimasu.',
                        translation: 'มีหนังสือค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: '猫もいますか。',
                        romaji: 'Neko mo imasu ka.',
                        translation: 'มีแมวด้วยไหม'
                    }
                ]
            },
            notes: [
                'あります และ います ใช้ในบริบทการบอกการมีอยู่',
                'สามารถใช้ に เพื่อระบุสถานที่',
                'มักใช้ในภาษาพูดและทางการ'
            ],
            commonMistakes: [
                'ใช้ います กับสิ่งไม่มีชีวิต (ผิด: 本がいます, ถูก: 本があります)',
                'ใช้ あります กับสิ่งมีชีวิต (ผิด: 猫があります, ถูก: 猫がいます)'
            ],
            compareWith: '～があります (สิ่งไม่มีชีวิต) vs ～がいます (สิ่งมีชีวิต)'
        },
        {
            id: 'wa-arimasu-imasu',
            title: '～は～があります／います',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'หัวข้อ + は + คำนาม + が + あります／います',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>หัวข้อ</td><td>は</td><td>คำนาม</td><td>が</td><td>あります／います</td></tr>
                    <tr><td>部屋</td><td>は</td><td>本</td><td>が</td><td>あります</td></tr>
                </table>
            `,
            explanation: 'ใช้บอกว่ามีบางอย่างในหัวข้อที่ระบุ โดย は ระบุหัวข้อ และ が ระบุสิ่งที่มีอยู่',
            usagePoints: [
                'は ใช้กำหนดหัวข้อ เช่น สถานที่หรือบุคคล',
                'あります ใช้กับสิ่งไม่มีชีวิต, います ใช้กับสิ่งมีชีวิต',
                'ใช้เมื่อต้องการเน้นหัวข้อ'
            ],
            examples: [
                { jp: '部屋には本があります。', romaji: 'Heya ni wa hon ga arimasu.', th: 'ในห้องมีหนังสือ' },
                { jp: '公園には子供がいます。', romaji: 'Kouen ni wa kodomo ga imasu.', th: 'ในสวนสาธารณะมีเด็ก' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '家には何がありますか。',
                        romaji: 'Ie ni wa nani ga arimasu ka.',
                        translation: 'ที่บ้านมีอะไรบ้าง'
                    },
                    {
                        speaker: 'Bさん',
                        text: 'テレビがあります。',
                        romaji: 'Terebi ga arimasu.',
                        translation: 'มีทีวีค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: '犬もいますか。',
                        romaji: 'Inu mo imasu ka.',
                        translation: 'มีหมาด้วยไหม'
                    }
                ]
            },
            notes: [
                'は เน้นหัวข้อ เช่น สถานที่หรือบุคคล',
                'สามารถใช้ に ร่วมกับ は เพื่อระบุสถานที่',
                'ใช้ในบริบทที่ต้องการเน้นหัวข้อมากกว่าสิ่งที่มี'
            ],
            commonMistakes: [
                'ใช้ は แทน が สำหรับสิ่งที่มี (ผิด: 部屋は本はあります, ถูก: 部屋には本があります)',
                'ใช้ います กับสิ่งไม่มีชีวิต (ผิด: 部屋には本がいます, ถูก: 部屋には本があります)'
            ],
            compareWith: '～は～があります／います (เน้นหัวข้อ) vs ～があります／います (เน้นสิ่งที่มี)'
        },
        {
            id: 'ni-arimasu-imasu',
            title: '～に～があります／います',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'สถานที่ + に + คำนาม + が + あります／います',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>สถานที่</td><td>に</td><td>คำนาม</td><td>が</td><td>あります／います</td></tr>
                    <tr><td>机の上</td><td>に</td><td>本</td><td>が</td><td>あります</td></tr>
                </table>
            `,
            explanation: 'ใช้ระบุว่ามีบางอย่างอยู่ในสถานที่ที่กำหนด โดย に ระบุสถานที่',
            usagePoints: [
                'に ระบุสถานที่ที่สิ่งนั้นอยู่',
                'あります ใช้กับสิ่งไม่มีชีวิต, います ใช้กับสิ่งมีชีวิต',
                'ใช้ในบริบทที่เน้นสถานที่'
            ],
            examples: [
                { jp: '机の上に本があります。', romaji: 'Tsukue no ue ni hon ga arimasu.', th: 'มีหนังสือบนโต๊ะ' },
                { jp: '庭に犬がいます。', romaji: 'Niwa ni inu ga imasu.', th: 'มีหมาในสวน' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '机の上に何がありますか。',
                        romaji: 'Tsukue no ue ni nani ga arimasu ka.',
                        translation: 'บนโต๊ะมีอะไรบ้าง'
                    },
                    {
                        speaker: 'Bさん',
                        text: 'ペンがあります。',
                        romaji: 'Pen ga arimasu.',
                        translation: 'มีปากกาค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: '本もありますか。',
                        romaji: 'Hon mo arimasu ka.',
                        translation: 'มีหนังสือด้วยไหม'
                    }
                ]
            },
            notes: [
                'に ใช้ระบุสถานที่ที่แน่นอน',
                'สามารถใช้ในบริบทที่เป็นมิตรหรือทางการ',
                'มักใช้ในภาษาพูด'
            ],
            commonMistakes: [
                'ใช้ で แทน に (ผิด: 机の上で本があります, ถูก: 机の上に本があります)',
                'ใช้ います กับสิ่งไม่มีชีวิต (ผิด: 机の上に本がいます, ถูก: 机の上に本があります)'
            ],
            compareWith: '～に～があります／います (เน้นสถานที่) vs ～は～があります／います (เน้นหัวข้อ)'
        },
        {
            id: 'ya-nado-ga-arimasu',
            title: '～や～などがあります',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'คำนาม + や + คำนาม + などが + あります',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>คำนาม</td><td>や</td><td>คำนาม</td><td>などが</td><td>あります</td></tr>
                    <tr><td>本</td><td>や</td><td>ペン</td><td>などが</td><td>あります</td></tr>
                </table>
            `,
            explanation: 'ใช้บอกว่ามีสิ่งของหลายอย่าง โดยระบุตัวอย่างด้วย や และ など',
            usagePoints: [
                'や ใช้เชื่อมคำนามตัวอย่าง',
                'など บ่งบอกว่ามีสิ่งอื่นนอกจากที่ระบุ',
                'あります ใช้กับสิ่งไม่มีชีวิต'
            ],
            examples: [
                { jp: '机の上に本やペンなどがあります。', romaji: 'Tsukue no ue ni hon ya pen nado ga arimasu.', th: 'บนโต๊ะมีหนังสือ ปากกา และอื่นๆ' },
                { jp: '店にりんごやバナナなどがあります。', romaji: 'Mise ni ringo ya banana nado ga arimasu.', th: 'ที่ร้านมีแอปเปิ้ล กล้วย และอื่นๆ' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: 'スーパーに何がありますか。',
                        romaji: 'Suupaa ni nani ga arimasu ka.',
                        translation: 'ที่ซูเปอร์มาร์เก็ตมีอะไรบ้าง'
                    },
                    {
                        speaker: 'Bさん',
                        text: 'りんごやバナナなどがあります。',
                        romaji: 'Ringo ya banana nado ga arimasu.',
                        translation: 'มีแอปเปิ้ล กล้วย และอื่นๆ ค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'いいね！買いに行きます。',
                        romaji: 'Ii ne! Kai ni ikimasu.',
                        translation: 'ดีจัง จะไปซื้อ'
                    }
                ]
            },
            notes: [
                'など ทำให้รู้ว่าไม่ใช่รายการทั้งหมด',
                'สามารถใช้ในบริบทที่เป็นมิตรหรือทางการ',
                'ใช้กับสิ่งไม่มีชีวิตเท่านั้น'
            ],
            commonMistakes: [
                'ใช้ います แทน あります (ผิด: 本やペンがいます, ถูก: 本やペンがあります)',
                'ใช้ など โดยไม่มี や (ผิด: 本などペンがあります, ถูก: 本やペンなどがあります)'
            ],
            compareWith: '～や～などがあります (สิ่งไม่มีชีวิต) vs ～や～などがいます (สิ่งมีชีวิต)'
        },
        {
            id: 'ichiban-keiyoushi',
            title: 'いちばん + คำคุณศัพท์',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'いちばん + い形容詞／な形容詞 + です',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>いちばん</td><td>い形容詞／な形容詞</td><td>です</td></tr>
                    <tr><td>いちばん</td><td>高い</td><td>です</td></tr>
                </table>
            `,
            explanation: 'ใช้บอกว่าสิ่งใดสิ่งหนึ่งดีที่สุดหรือมีลักษณะเด่นที่สุด คล้าย "…ที่สุด" ในภาษาไทย',
            usagePoints: [
                'いちばん หมายถึง "ที่สุด"',
                'ใช้กับ い形容詞 หรือ な形容詞',
                'มักใช้ในบริบทการเปรียบเทียบ'
            ],
            examples: [
                { jp: 'この山がいちばん高いです。', romaji: 'Kono yama ga ichiban takai desu.', th: 'ภูเขานี้สูงที่สุด' },
                { jp: 'この店がいちばんきれいです。', romaji: 'Kono mise ga ichiban kirei desu.', th: 'ร้านนี้สวยที่สุด' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: 'どのレストランがいちばん美味しいですか。',
                        romaji: 'Dono resutoran ga ichiban oishii desu ka.',
                        translation: 'ร้านอาหารไหนอร่อยที่สุด'
                    },
                    {
                        speaker: 'Bさん',
                        text: 'この店がいちばん美味しいです。',
                        romaji: 'Kono mise ga ichiban oishii desu.',
                        translation: 'ร้านนี้อร่อยที่สุดค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'じゃあ、行ってみます！',
                        romaji: 'Jaa, itte mimasu!',
                        translation: 'งั้นจะลองไป!'
                    }
                ]
            },
            notes: [
                'いちばん ใช้เน้นการเปรียบเทียบขั้นสูงสุด',
                'สามารถใช้กับคำนามได้ เช่น いちばん好きな人 (คนที่ชอบที่สุด)',
                'มักใช้ในภาษาพูด'
            ],
            commonMistakes: [
                'ใช้ いちばん กับคำที่ไม่ใช่คำคุณศัพท์ (ผิด: いちばん食べます, ถูก: いちばん美味しいです)',
                'ใช้ผิดคำช่วย (ผิด: この山をいちばん高い, ถูก: この山がいちばん高い)'
            ],
            compareWith: 'いちばん (ที่สุด) vs とても (มาก)'
        },
        {
            id: 'no-nakade-ichiban',
            title: '～のなかで～がいちばん...です',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'หมวดหมู่ + のなかで + คำนาม + が + いちばん + คำคุณศัพท์ + です',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>หมวดหมู่</td><td>のなかで</td><td>คำนาม</td><td>が</td><td>いちばん</td><td>คำคุณศัพท์</td><td>です</td></tr>
                    <tr><td>果物</td><td>のなかで</td><td>りんご</td><td>が</td><td>いちばん</td><td>好き</td><td>です</td></tr>
                </table>
            `,
            explanation: 'ใช้บอกว่าสิ่งใดสิ่งหนึ่งดีที่สุดในหมวดหมู่ที่กำหนด คล้าย "ในบรรดา… …ดีที่สุด"',
            usagePoints: [
                'のなかで ระบุหมวดหมู่หรือกลุ่ม',
                'いちばん เน้นขั้นสูงสุด',
                'ใช้กับ い形容詞 หรือ な形容詞'
            ],
            examples: [
                { jp: '果物のなかでりんごがいちばん好きです。', romaji: 'Kudamono no nakade ringo ga ichiban suki desu.', th: 'ในบรรดาผลไม้ แอปเปิ้ลชอบที่สุด' },
                { jp: '映画のなかでこれがいちばん面白いです。', romaji: 'Eiga no nakade kore ga ichiban omoshiroi desu.', th: 'ในบรรดาหนัง เรื่องนี้สนุกที่สุด' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '動物のなかで何がいちばん好きですか。',
                        romaji: 'Doubutsu no nakade nani ga ichiban suki desu ka.',
                        translation: 'ในบรรดาสัตว์ ชอบอะไรที่สุด'
                    },
                    {
                        speaker: 'Bさん',
                        text: '猫がいちばん好きです。',
                        romaji: 'Neko ga ichiban suki desu.',
                        translation: 'ชอบแมวที่สุดค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'いいね！私は犬がいちばん好きです。',
                        romaji: 'Ii ne! Watashi wa inu ga ichiban suki desu.',
                        translation: 'ดีจัง ฉันชอบหมาที่สุด'
                    }
                ]
            },
            notes: [
                'のなかで ใช้จำกัดขอบเขตการเปรียบเทียบ',
                'สามารถใช้กับหมวดหมู่ต่างๆ เช่น 食べ物, 映画, 国',
                'มักใช้ในภาษาพูด'
            ],
            commonMistakes: [
                'ลืม のなかで (ผิด: 果物りんごがいちばん好きです, ถูก: 果物のなかでりんごがいちばん好きです)',
                'ใช้ผิดคำช่วย (ผิด: りんごをいちばん好きです, ถูก: りんごがいちばん好きです)'
            ],
            compareWith: '～のなかで～がいちばん (ในหมวดหมู่) vs いちばん～です (ทั่วไป)'
        },
        {
            id: 'nin',
            title: '～人（にん）',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'จำนวน + 人（にん）',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>จำนวน</td><td>人（にん）</td></tr>
                    <tr><td>二人</td><td>にん</td></tr>
                </table>
            `,
            explanation: 'ใช้บอกจำนวนคน โดย 人（にん） เป็นหน่วยนับสำหรับคน',
            usagePoints: [
                'ใช้กับจำนวนคน เช่น 1 人 (ひとり), 2 人 (ふたり), 3 人 (さんにん)',
                'ひとり และ ふたり ใช้การอ่านพิเศษ ส่วนตั้งแต่ 3 ขึ้นไปใช้ にん',
                'ใช้ในบริบทที่ระบุจำนวนคนในกลุ่ม'
            ],
            examples: [
                { jp: '学生が三人います。', romaji: 'Gakusei ga sannin imasu.', th: 'มีนักเรียนสามคน' },
                { jp: '二人で行きます。', romaji: 'Futari de ikimasu.', th: 'ไปสองคน' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: 'パーティーに何人来ますか。',
                        romaji: 'Paatii ni nannin kimasu ka.',
                        translation: 'มีกี่คนมาปาร์ตี้ครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: '五人来ます。',
                        romaji: 'Gonin kimasu.',
                        translation: 'ห้าคนค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'いいね！楽しみです。',
                        romaji: 'Ii ne! Tanoshimi desu.',
                        translation: 'ดีจัง ตื่นเต้นเลย'
                    }
                ]
            },
            notes: [
                'ひとり และ ふたり ใช้ในภาษาพูดบ่อย',
                'ไม่ใช้ にん กับ 1 และ 2 (ผิด: 一にん, ถูก: ひとり)',
                'ใช้ います เพราะเป็นสิ่งมีชีวิต'
            ],
            commonMistakes: [
                'ใช้ にん กับ 1 หรือ 2 (ผิด: 一にん, ถูก: ひとり)',
                'ใช้ あります แทน います (ผิด: 学生が三人あります, ถูก: 学生が三人います)'
            ],
            compareWith: '～人（にん） (นับคน) vs ～台／枚 (นับสิ่งของ)'
        },
        {
            id: 'tai-mai-hon-satsu-kai',
            title: '～台／枚／本／冊／回 ฯลฯ',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'จำนวน + หน่วยนับ (台／枚／本／冊／回)',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>จำนวน</td><td>หน่วยนับ</td></tr>
                    <tr><td>二</td><td>台</td></tr>
                </table>
            `,
            explanation: 'ใช้หน่วยนับที่เหมาะสมกับลักษณะของสิ่งของ เช่น 台 (เครื่องจักร), 枚 (แผ่นบาง), 本 (ของยาว), 冊 (เล่ม), 回 (ครั้ง)',
            usagePoints: [
                'เลือกหน่วยนับตามประเภทของสิ่งของ',
                '台 ใช้กับยานพาหนะหรือเครื่องจักร, 枚 ใช้กับแผ่นบาง เช่น 紙, 本 ใช้กับของยาว เช่น ดินสอ, 冊 ใช้กับหนังสือ, 回 ใช้กับจำนวนครั้ง',
                'ใช้ในบริบทที่ระบุจำนวนสิ่งของหรือครั้ง'
            ],
            examples: [
                { jp: '車が二台あります。', romaji: 'Kuruma ga nidai arimasu.', th: 'มีรถสองคัน' },
                { jp: '紙が三枚あります。', romaji: 'Kami ga sanmai arimasu.', th: 'มีกระดาษสามแผ่น' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '本が何冊ありますか。',
                        romaji: 'Hon ga nansatsu arimasu ka.',
                        translation: 'มีหนังสือกี่เล่ม'
                    },
                    {
                        speaker: 'Bさん',
                        text: '五冊あります。',
                        romaji: 'Gosatsu arimasu.',
                        translation: 'มีห้าเล่มค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'すごい！貸してください。',
                        romaji: 'Sugoi! Kashite kudasai.',
                        translation: 'สุดยอด ขอยืมหน่อย'
                    }
                ]
            },
            notes: [
                'หน่วยนับแต่ละตัวมีลักษณะเฉพาะ เช่น 本 สำหรับของยาว, 冊 สำหรับเล่ม',
                'การนับอาจมีการเปลี่ยนแปลงการออกเสียง เช่น 一枚 (いちまい), 三本 (さんぼん)',
                'ใช้ あります สำหรับสิ่งของ'
            ],
            commonMistakes: [
                'ใช้หน่วยนับผิด (ผิด: 車が一本, ถูก: 車が一台)',
                'ใช้ います กับสิ่งของ (ผิด: 本が五冊います, ถูก: 本が五冊あります)'
            ],
            compareWith: '～台／枚／本／冊／回 (สิ่งของ) vs ～人（にん） (คน)'
        },
        {
            id: 'dake',
            title: '～だけ',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'คำนาม/จำนวน + だけ',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>คำนาม/จำนวน</td><td>だけ</td></tr>
                    <tr><td>一人</td><td>だけ</td></tr>
                </table>
            `,
            explanation: 'ใช้แสดงการจำกัดจำนวนหรือขอบเขต คล้าย "แค่…" หรือ "เพียง…" ในภาษาไทย',
            usagePoints: [
                'だけ ใช้จำกัดจำนวนหรือสิ่งของ',
                'สามารถใช้กับคำนาม, จำนวน, หรือกริยา',
                'ใช้ในบริบทที่ต้องการเน้นความจำกัด'
            ],
            examples: [
                { jp: '一人だけ来ました。', romaji: 'Hitori dake kimashita.', th: 'มาแค่คนเดียว' },
                { jp: '水だけ飲みます。', romaji: 'Mizu dake nomimasu.', th: 'ดื่มแค่น้ำ' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '何を食べますか。',
                        romaji: 'Nani o tabemasu ka.',
                        translation: 'กินอะไรครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: 'パンだけ食べます。',
                        romaji: 'Pan dake tabemasu.',
                        translation: 'กินแค่ขนมปังค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: '飲み物は？水だけ？',
                        romaji: 'Nomimono wa? Mizu dake?',
                        translation: 'เครื่องดื่มล่ะ แค่น้ำเหรอ'
                    }
                ]
            },
            notes: [
                'だけ สามารถใช้เดี่ยวๆ หรือตามคำนาม/กริยา',
                'มักใช้ในภาษาพูดเพื่อเน้นความจำกัด',
                'สามารถใช้กับจำนวน เช่น 三冊だけ (แค่สามเล่ม)'
            ],
            commonMistakes: [
                'ใช้ だけ กับคำที่ไม่เหมาะสม (ผิด: 学生だけです, ถูก: 学生が一人だけです)',
                'ใช้ซ้ำกับคำจำกัดอื่น (ผิด: 一人だけしか, ถูก: 一人だけ)'
            ],
            compareWith: '～だけ (เพียง) vs ～しか (เท่านั้น, ปฏิเสธ)'
        },
        {
            id: 'ga-ii-desu',
            title: '～がいいです',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'คำนาม + がいいです',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>คำนาม</td><td>が</td><td>いいです</td></tr>
                    <tr><td>コーヒー</td><td>が</td><td>いいです</td></tr>
                </table>
            `,
            explanation: 'ใช้แสดงความต้องการหรือความชอบ คล้าย "…ดีกว่า" หรือ "อยากได้…" ในภาษาไทย',
            usagePoints: [
                'が ระบุสิ่งที่ต้องการหรือชอบ',
                'いいです ใช้แสดงความเหมาะสมหรือความชอบ',
                'มักใช้ในบริบทการเลือก'
            ],
            examples: [
                { jp: 'コーヒーがいいです。', romaji: 'Koohii ga ii desu.', th: 'อยากได้กาแฟ' },
                { jp: 'この色がいいです。', romaji: 'Kono iro ga ii desu.', th: 'สีนี้ดีกว่า' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: 'お茶とコーヒー、どっちがいいですか。',
                        romaji: 'Ocha to koohii, docchi ga ii desu ka.',
                        translation: 'ชากับกาแฟ อันไหนดีกว่าครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: 'コーヒーがいいです。',
                        romaji: 'Koohii ga ii desu.',
                        translation: 'กาแฟดีกว่าค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: '了解！すぐ準備します。',
                        romaji: 'Ryoukai! Sugu junbi shimasu.',
                        translation: 'เข้าใจแล้ว เดี๋ยวจัดให้'
                    }
                ]
            },
            notes: [
                'がいいです ใช้ในบริบทการเลือกหรือแสดงความชอบ',
                'สามารถใช้ในภาษาพูดหรือทางการเล็กน้อย',
                'มักใช้เมื่อเปรียบเทียบตัวเลือก'
            ],
            commonMistakes: [
                'ใช้ผิดคำช่วย (ผิด: コーヒーをいいです, ถูก: コーヒーがいいです)',
                'ใช้ いい โดยไม่มี が (ผิด: コーヒーいいです, ถูก: コーヒーがいいです)'
            ],
            compareWith: '～がいいです (อยากได้) vs ～が好きです (ชอบ)'
        },
        {
            id: 'ga-hoshii-desu',
            title: '～がほしいです',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'คำนาม + が + ほしいです',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>คำนาม</td><td>が</td><td>ほしいです</td></tr>
                    <tr><td>車</td><td>が</td><td>ほしいです</td></tr>
                </table>
            `,
            explanation: 'ใช้แสดงความต้องการสิ่งของ คล้าย "อยากได้…" ในภาษาไทย',
            usagePoints: [
                'が ระบุสิ่งที่ต้องการ',
                'ほしい เป็น い形容詞 ใช้ในบริบทความต้องการ',
                'ใช้กับสิ่งของที่จับต้องได้เป็นหลัก'
            ],
            examples: [
                { jp: '車がほしいです。', romaji: 'Kuruma ga hoshii desu.', th: 'อยากได้รถ' },
                { jp: '新しい本がほしいです。', romaji: 'Atarashii hon ga hoshii desu.', th: 'อยากได้หนังสือใหม่' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '何がほしいですか。',
                        romaji: 'Nani ga hoshii desu ka.',
                        translation: 'อยากได้อะไรครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: 'パソコンがほしいです。',
                        romaji: 'Pasokon ga hoshii desu.',
                        translation: 'อยากได้คอมพิวเตอร์ค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: '高いね！誕生日にもらえるよ。',
                        romaji: 'Takai ne! Tanjoubi ni moraeru yo.',
                        translation: 'แพงจัง วันเกิดอาจได้นะ'
                    }
                ]
            },
            notes: [
                'ほしい ใช้กับสิ่งของ ไม่ใช้กับคนหรือสัตว์',
                'สามารถใช้ในบริบทที่เป็นมิตรหรือสุภาพ',
                'มักใช้ในภาษาพูด'
            ],
            commonMistakes: [
                'ใช้ ほしい กับคน (ผิด: 友達がほしいです, ถูก: 友達が欲しい人はいますか)',
                'ใช้ผิดคำช่วย (ผิด: 車をほしいです, ถูก: 車がほしいです)'
            ],
            compareWith: '～がほしいです (อยากได้สิ่งของ) vs ～たいです (อยากทำ)'
        },
        {
            id: 'tai-desu',
            title: '～たいです',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'กริยารูปます (ตัด ます) + たいです',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>V (ตัด ます)</td><td>たいです</td></tr>
                    <tr><td>食べ</td><td>たいです</td></tr>
                </table>
            `,
            explanation: 'ใช้แสดงความต้องการทำบางอย่าง คล้าย "อยาก…" ในภาษาไทย',
            usagePoints: [
                'たい เป็น い形容詞 ผันจากกริยารูปます',
                'ใช้เมื่อผู้พูดต้องการทำบางอย่าง',
                'เหมาะสำหรับบริบทที่เป็นมิตรหรือสุภาพ'
            ],
            examples: [
                { jp: '日本へ行きたいです。', romaji: 'Nihon e ikitai desu.', th: 'อยากไปญี่ปุ่น' },
                { jp: '寿司を食べたいです。', romaji: 'Sushi o tabetai desu.', th: 'อยากกินซูชิ' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '何をしたいですか。',
                        romaji: 'Nani o shitai desu ka.',
                        translation: 'อยากทำอะไรครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: '映画を見たいです。',
                        romaji: 'Eiga o mitai desu.',
                        translation: 'อยากดูหนังค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'いいね！いっしょに行きたい！',
                        romaji: 'Ii ne! Issho ni ikitai!',
                        translation: 'ดีจัง อยากไปด้วย!'
                    }
                ]
            },
            notes: [
                'たい ใช้แสดงความต้องการของผู้พูดเท่านั้น',
                'ผันเหมือน い形容詞 เช่น たくない (ไม่อยาก), たかった (อยากในอดีต)',
                'ใช้ในภาษาพูดบ่อย'
            ],
            commonMistakes: [
                'ใช้ たい กับความต้องการของผู้อื่น (ผิด: 田中さんが行きたいです, ถูก: 田中さんが行きたいと言いました)',
                'ใช้ผิดรูปกริยา (ผิด: 食べるたいです, ถูก: 食べたいです)'
            ],
            compareWith: '～たいです (อยากทำ) vs ～がほしいです (อยากได้)'
        },
        {
            id: 'e-ni-ikimasu',
            title: '～へ～に行きます',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'สถานที่ + へ + กริยา + に行きます',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>สถานที่</td><td>へ</td><td>กริยา</td><td>に</td><td>行きます</td></tr>
                    <tr><td>日本</td><td>へ</td><td>旅行</td><td>に</td><td>行きます</td></tr>
                </table>
            `,
            explanation: 'ใช้บอกจุดมุ่งหมายและวัตถุประสงค์ของการไป คล้าย "ไป…เพื่อ…" ในภาษาไทย',
            usagePoints: [
                'へ ระบุจุดหมายปลายทาง',
                'に ระบุวัตถุประสงค์ เช่น 買い物, 旅行',
                'มักใช้กับกริยา 行きます'
            ],
            examples: [
                { jp: '日本へ旅行に行きます。', romaji: 'Nihon e ryokou ni ikimasu.', th: 'ไปญี่ปุ่นเพื่อท่องเที่ยว' },
                { jp: 'スーパーへ買い物に行きます。', romaji: 'Suupaa e kaimono ni ikimasu.', th: 'ไปซูเปอร์มาร์เก็ตเพื่อซื้อของ' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: 'どこへ何をしに行きますか。',
                        romaji: 'Doko e nani o shi ni ikimasu ka.',
                        translation: 'ไปไหนเพื่อทำอะไรครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: '図書館へ勉強しに行きます。',
                        romaji: 'Toshokan e benkyou shi ni ikimasu.',
                        translation: 'ไปห้องสมุดเพื่อเรียนค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'いいね！私も行きます。',
                        romaji: 'Ii ne! Watashi mo ikimasu.',
                        translation: 'ดีจัง ฉันก็จะไป'
                    }
                ]
            },
            notes: [
                'へ และ に สามารถใช้แยกกันได้ในบางบริบท',
                'ใช้กับกริยาการเคลื่อนที่ เช่น 行きます, 来ます',
                'มักใช้ในภาษาพูด'
            ],
            commonMistakes: [
                'ใช้ に โดยไม่มี へ (ผิด: スーパー買い物に行きます, ถูก: スーパーへ買い物に行きます)',
                'ใช้กับกริยาที่ไม่เกี่ยวกับการเคลื่อนที่ (ผิด: 日本へ食べるに行きます, ถูก: 日本へ旅行に行きます)'
            ],
            compareWith: '～へ～に行きます (จุดหมาย+วัตถุประสงค์) vs ～へ行きます (จุดหมายอย่างเดียว)'
        },
        {
            id: 'masen-ka',
            title: '～ませんか',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'กริยารูป ません + か',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>V (รูป ません)</td><td>か</td></tr>
                    <tr><td>食べません</td><td>か</td></tr>
                </table>
            `,
            explanation: 'ใช้ชวนให้ทำบางอย่างอย่างสุภาพ คล้าย "…ไหม" หรือ "ทำ…กันไหม" ในภาษาไทย',
            usagePoints: [
                'ませんか เป็นรูปชวนที่สุภาพ',
                'ใช้เมื่อต้องการชวนผู้อื่นทำบางอย่าง',
                'มักใช้ในบริบทที่เป็นมิตรหรือทางการ'
            ],
            examples: [
                { jp: 'いっしょに食べませんか。', romaji: 'Issho ni tabemasen ka.', th: 'กินด้วยกันไหมครับ/คะ' },
                { jp: '映画を見ませんか。', romaji: 'Eiga o mimasen ka.', th: 'ดูหนังไหมครับ/คะ' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: 'いっしょに買い物に行きませんか。',
                        romaji: 'Issho ni kaimono ni ikimasen ka.',
                        translation: 'ไปซื้อของด้วยกันไหมครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: 'いいですね！行きましょう。',
                        romaji: 'Ii desu ne! Ikimashou.',
                        translation: 'ดีเลย ไปกันเถอะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'じゃあ、3時に会いましょう。',
                        romaji: 'Jaa, sanji ni aimashou.',
                        translation: 'งั้นเจอกันสามโมงนะ'
                    }
                ]
            },
            notes: [
                'ませんか ทำให้คำชวนสุภาพและนุ่มนวล',
                'มักใช้ในภาษาพูดหรือสถานการณ์สุภาพ',
                'สามารถใช้กับกริยาต่างๆ'
            ],
            commonMistakes: [
                'ใช้ ませんか กับคำที่ไม่ใช่กริยา (ผิด: 学生ませんか, ถูก: 勉強しませんか)',
                'ใช้ในบริบทที่ไม่เหมาะสม เช่น การสั่ง (ผิด: 早くしませんか, ถูก: 早くしてください)'
            ],
            compareWith: '～ませんか (ชวนสุภาพ) vs ～ましょう (เสนอทำ)'
        },
        {
            id: 'mashou-ka',
            title: '～ましょうか',
            level: 'N5',
            difficulty: 'ง่าย',
            pattern: 'กริยารูป ましょう + か',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>V (รูป ましょう)</td><td>か</td></tr>
                    <tr><td>食べましょう</td><td>か</td></tr>
                </table>
            `,
            explanation: 'ใช้เสนอให้ทำบางอย่างหรือถามความเห็น คล้าย "จะ…ไหม" หรือ "ทำ…ดีไหม" ในภาษาไทย',
            usagePoints: [
                'ましょうか ใช้เมื่อผู้พูดเสนอทำบางอย่าง',
                'แสดงถึงความไม่แน่ใจหรือขอความเห็น',
                'เหมาะสำหรับบริบทสุภาพหรือเป็นมิตร'
            ],
            examples: [
                { jp: '窓を開けましょうか。', romaji: 'Mado o akemashou ka.', th: 'จะเปิดหน้าต่างไหมครับ/คะ' },
                { jp: '手伝いましょうか。', romaji: 'Tetsudaimashou ka.', th: 'จะช่วยไหมครับ/คะ' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '荷物を持ちましょうか。',
                        romaji: 'Nimotsu o mochimashou ka.',
                        translation: 'จะช่วยถือกระเป๋าไหมครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: 'ありがとう、大丈夫です。',
                        romaji: 'Arigatou, daijoubu desu.',
                        translation: 'ขอบคุณ ไม่เป็นไรค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'じゃあ、コーヒーを買いましょうか。',
                        romaji: 'Jaa, koohii o kaimashou ka.',
                        translation: 'งั้นจะซื้อกาแฟไหม'
                    }
                ]
            },
            notes: [
                'ましょうか ใช้เมื่อผู้พูดเสนอหรือขอความเห็น',
                'มักใช้ในบริบทที่สุภาพหรือเมื่อต้องการช่วยเหลือ',
                'สามารถใช้กับกริยาต่างๆ'
            ],
            commonMistakes: [
                'ใช้ ましょうか ในบริบทที่ไม่ใช่การเสนอ (ผิด: 学生ましょうか, ถูก: 勉強しましょう)',
                'ใช้ผิดบริบท (ผิด: 食べるましょうか, ถูก: 食べましょうか)'
            ],
            compareWith: '～ましょうか (เสนอ/ถาม) vs ～ましょう (ชวน)'
        },
        {
            id: 'teimasu',
            title: '～ています',
            level: 'N5',
            difficulty: 'ปานกลาง',
            pattern: 'กริยารูป て + います',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>V (รูป て)</td><td>います</td></tr>
                    <tr><td>食べて</td><td>います</td></tr>
                </table>
            `,
            explanation: 'ใช้แสดงการกระทำที่กำลังดำเนินอยู่หรือสถานะต่อเนื่อง คล้าย "กำลัง…" หรือ "…อยู่" ในภาษาไทย',
            usagePoints: [
                'ています ใช้กับกริยาที่แสดงการกระทำต่อเนื่อง',
                'ใช้แสดงสถานะที่เป็นผลจากกริยา เช่น แต่งงานแล้ว, 住んでいる (อาศัยอยู่)',
                'มักใช้ในภาษาพูด'
            ],
            examples: [
                { jp: '今本を読んでいます。', romaji: 'Ima hon o yonde imasu.', th: 'ตอนนี้กำลังอ่านหนังสือ' },
                { jp: '東京に住んでいます。', romaji: 'Toukyou ni sunde imasu.', th: 'อาศัยอยู่ในโตเกียว' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '今何をしていますか。',
                        romaji: 'Ima nani o shite imasu ka.',
                        translation: 'ตอนนี้กำลังทำอะไรครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: 'テレビを見ています。',
                        romaji: 'Terebi o mite imasu.',
                        translation: 'กำลังดูทีวีค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'いいね！私も見ています。',
                        romaji: 'Ii ne! Watashi mo mite imasu.',
                        translation: 'ดีจัง ฉันก็กำลังดู'
                    }
                ]
            },
            notes: [
                'ています ใช้กับกริยาการกระทำและบางกริยาสถานะ',
                'ผันเป็นปฏิเสธได้ เช่น 食べていない (ไม่ได้กำลังกิน)',
                'สามารถใช้ในบริบทที่เป็นมิตรหรือทางการ'
            ],
            commonMistakes: [
                'ใช้ ています กับกริยาที่ไม่ต่อเนื่อง (ผิด: 知っています, ถูก: 知ります หรือ 知っています ในบางบริบท)',
                'ใช้ผิดรูป て (ผิด: 食べるています, ถูก: 食べています)'
            ],
            compareWith: '～ています (กำลังทำ/สถานะ) vs ～ます (การกระทำทั่วไป)'
        },
        {
            id: 'temo-ii-desu',
            title: '～てもいいです',
            level: 'N4',
            difficulty: 'ปานกลาง',
            pattern: 'กริยารูป て + もいいです',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>V (รูป て)</td><td>もいいです</td></tr>
                    <tr><td>食べても</td><td>いいです</td></tr>
                </table>
            `,
            explanation: 'ใช้แสดงการอนุญาต คล้าย "…ก็ได้" ในภาษาไทย',
            usagePoints: [
                'ても ระบุการกระทำที่ได้รับอนุญาต',
                'いいです แสดงถึงการอนุญาต',
                'ใช้ในบริบทที่ให้หรือขอการอนุญาต'
            ],
            examples: [
                { jp: 'ここで食べてもいいです。', romaji: 'Koko de tabetemo ii desu.', th: 'กินที่นี่ก็ได้' },
                { jp: '写真を撮ってもいいですか。', romaji: 'Shashin o tottemo ii desu ka.', th: 'ถ่ายรูปได้ไหมครับ/คะ' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: 'ここでタバコを吸ってもいいですか。',
                        romaji: 'Koko de tabako o suttemo ii desu ka.',
                        translation: 'สูบบุหรี่ที่นี่ได้ไหมครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: 'いいえ、吸ってはいけません。',
                        romaji: 'Iie, sutte wa ikemasen.',
                        translation: 'ไม่ได้ค่ะ ห้ามสูบ'
                    },
                    {
                        speaker: 'Aさん',
                        text: '了解しました。',
                        romaji: 'Ryoukai shimashita.',
                        translation: 'เข้าใจแล้วครับ'
                    }
                ]
            },
            notes: [
                'てもいいです ใช้ในบริบทการอนุญาต',
                'สามารถใช้เป็นคำถามหรือคำตอบ',
                'มักใช้ในภาษาพูด'
            ],
            commonMistakes: [
                'ใช้ผิดรูป て (ผิด: 食べるもいいです, ถูก: 食べてもいいです)',
                'ใช้ในบริบทที่ไม่เหมาะสม (ผิด: 学生てもいいです, ถูก: 勉強してもいいです)'
            ],
            compareWith: '～てもいいです (อนุญาต) vs ～てはいけません (ห้าม)'
        },
        {
            id: 'te-wa-ikemasen',
            title: '～てはいけません',
            level: 'N4',
            difficulty: 'ปานกลาง',
            pattern: 'กริยารูป て + はいけません',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>V (รูป て)</td><td>はいけません</td></tr>
                    <tr><td>食べて</td><td>はいけません</td></tr>
                </table>
            `,
            explanation: 'ใช้แสดงการห้ามทำบางอย่าง คล้าย "ห้าม…" ในภาษาไทย',
            usagePoints: [
                'て ระบุการกระทำที่ถูกห้าม',
                'はいけません แสดงถึงการห้าม',
                'ใช้ในบริบทที่เป็นทางการหรือให้คำแนะนำ'
            ],
            examples: [
                { jp: 'ここで食べてはいけません。', romaji: 'Koko de tabete wa ikemasen.', th: 'ห้ามกินที่นี่' },
                { jp: '走ってはいけません。', romaji: 'Hashitte wa ikemasen.', th: 'ห้ามวิ่ง' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: 'ここで写真を撮ってもいいですか。',
                        romaji: 'Koko de shashin o tottemo ii desu ka.',
                        translation: 'ถ่ายรูปที่นี่ได้ไหมครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: '撮ってはいけません。',
                        romaji: 'Totte wa ikemasen.',
                        translation: 'ห้ามถ่ายค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: '分かりました。',
                        romaji: 'Wakarimashita.',
                        translation: 'เข้าใจแล้วครับ'
                    }
                ]
            },
            notes: [
                'はいけません ทำให้ประโยคเป็นการห้ามที่สุภาพ',
                'ใช้ในบริบทที่เป็นทางการหรือเมื่อให้คำแนะนำ',
                'สามารถใช้กับกริยาการกระทำต่างๆ'
            ],
            commonMistakes: [
                'ใช้ผิดรูป て (ผิด: 食べるはいけません, ถูก: 食べてはいけません)',
                'ใช้ในบริบทที่ไม่เหมาะสม (ผิด: 学生はいけません, ถูก: 勉強してはいけません)'
            ],
            compareWith: '～てはいけません (ห้าม) vs ～てもいいです (อนุญาต)'
        },
        {
            id: 'teimasu-ka',
            title: '～ていますか',
            level: 'N5',
            difficulty: 'ปานกลาง',
            pattern: 'กริยารูป て + いますか',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>V (รูป て)</td><td>いますか</td></tr>
                    <tr><td>勉強して</td><td>いますか</td></tr>
                </table>
            `,
            explanation: 'ใช้ถามว่ากำลังทำบางอย่างอยู่หรือไม่ คล้าย "กำลัง…อยู่ไหม" ในภาษาไทย',
            usagePoints: [
                'ていますか ใช้ถามการกระทำที่กำลังดำเนินอยู่',
                'ใช้กับกริยาการกระทำ เช่น 食べる, 読む',
                'เหมาะสำหรับบริบทที่เป็นมิตร'
            ],
            examples: [
                { jp: '今勉強していますか。', romaji: 'Ima benkyou shite imasu ka.', th: 'ตอนนี้กำลังเรียนอยู่ไหม' },
                { jp: 'テレビを見ていますか。', romaji: 'Terebi o mite imasu ka.', th: 'กำลังดูทีวีอยู่ไหม' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '今何をしていますか。',
                        romaji: 'Ima nani o shite imasu ka.',
                        translation: 'ตอนนี้กำลังทำอะไรครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: '本を読んでいます。',
                        romaji: 'Hon o yonde imasu.',
                        translation: 'กำลังอ่านหนังสือค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'いいね！面白い本ですか。',
                        romaji: 'Ii ne! Omoshiroi hon desu ka.',
                        translation: 'ดีจัง หนังสือน่าสนใจไหม'
                    }
                ]
            },
            notes: [
                'ていますか ใช้ถามการกระทำที่กำลังเกิดขึ้น',
                'สามารถใช้ในบริบทที่เป็นมิตรหรือทางการ',
                'ตอบด้วย ています หรือปฏิเสธ เช่น ていない'
            ],
            commonMistakes: [
                'ใช้ ていますか กับกริยาที่ไม่ต่อเนื่อง (ผิด: 知っていますか, ถูก: 知っています ในบางบริบท)',
                'ใช้ผิดรูป て (ผิด: 勉強するいますか, ถูก: 勉強していますか)'
            ],
            compareWith: '～ていますか (ถามการกระทำต่อเนื่อง) vs ～ますか (ถามการกระทำทั่วไป)'
        },
        {
            id: 'teimasu-movement',
            title: '～ています + กริยาเคลื่อนไหว',
            level: 'N4',
            difficulty: 'ปานกลาง',
            pattern: 'กริยาเคลื่อนไหวรูป て + います',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>V (เคลื่อนไหว, รูป て)</td><td>います</td></tr>
                    <tr><td>行って</td><td>います</td></tr>
                </table>
            `,
            explanation: 'ใช้กับกริยาการเคลื่อนไหว (เช่น 行く, 来る) เพื่อแสดงว่ากำลังมุ่งหน้าไปที่ใดที่หนึ่ง',
            usagePoints: [
                'ใช้กับกริยาการเคลื่อนไหว เช่น 行く, 来る, 帰る',
                'แสดงการเคลื่อนที่ที่กำลังดำเนินอยู่',
                'มักใช้ในบริบทที่เน้นการเคลื่อนไหว'
            ],
            examples: [
                { jp: '学校へ行っています。', romaji: 'Gakkou e itte imasu.', th: 'กำลังไปโรงเรียน' },
                { jp: '家に帰っています。', romaji: 'Ie ni kaette imasu.', th: 'กำลังกลับบ้าน' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '今どこへ行っていますか。',
                        romaji: 'Ima doko e itte imasu ka.',
                        translation: 'ตอนนี้กำลังไปไหนครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: 'スーパーへ行っています。',
                        romaji: 'Suupaa e itte imasu.',
                        translation: 'กำลังไปซูเปอร์มาร์เก็ตค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: '買い物？気をつけてね。',
                        romaji: 'Kaimono? Ki o tsukete ne.',
                        translation: 'ไปซื้อของเหรอ ระวังด้วยนะ'
                    }
                ]
            },
            notes: [
                'ใช้เฉพาะกับกริยาการเคลื่อนไหว เช่น 行く, 来る',
                'แสดงการเคลื่อนที่ที่กำลังเกิดขึ้น',
                'แตกต่างจาก ています ทั่วไปที่ใช้กับการกระทำต่อเนื่อง'
            ],
            commonMistakes: [
                'ใช้กับกริยาที่ไม่ใช่การเคลื่อนไหว (ผิด: 食べて行っています, ถูก: 食べています)',
                'ใช้ผิดรูป て (ผิด: 行くています, ถูก: 行っています)'
            ],
            compareWith: '～ています (เคลื่อนไหว) vs ～ています (การกระทำต่อเนื่อง)'
        },
        {
            id: 'te-te-masu',
            title: '～て、～て、～ます',
            level: 'N4',
            difficulty: 'ปานกลาง',
            pattern: 'กริยารูป て + กริยารูป て + กริยารูป ます',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>V (รูป て)</td><td>、</td><td>V (รูป て)</td><td>、</td><td>V (รูป ます)</td></tr>
                    <tr><td>起きて</td><td>、</td><td>食べて</td><td>、</td><td>行きます</td></tr>
                </table>
            `,
            explanation: 'ใช้เชื่อมการกระทำหลายอย่างที่เกิดขึ้นต่อเนื่องกัน คล้าย "…แล้วก็…แล้ว…" ในภาษาไทย',
            usagePoints: [
                'て ใช้เชื่อมการกระทำตามลำดับ',
                'กริยาสุดท้ายใช้รูป ます เพื่อความสุภาพ',
                'ใช้ในบริบทที่เล่ากิจวัตรหรือเหตุการณ์'
            ],
            examples: [
                { jp: '起きて、食べて、学校へ行きます。', romaji: 'Okite, tabete, gakkou e ikimasu.', th: 'ตื่น กินข้าว แล้วไปโรงเรียน' },
                { jp: '本を読んで、寝ます。', romaji: 'Hon o yonde, nemasu.', th: 'อ่านหนังสือแล้วนอน' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '朝何をしますか。',
                        romaji: 'Asa nani o shimasu ka.',
                        translation: 'ตอนเช้าทำอะไรครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: '起きて、食べて、勉強します。',
                        romaji: 'Okite, tabete, benkyou shimasu.',
                        translation: 'ตื่น กินข้าว แล้วเรียนค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: '忙しいね！',
                        romaji: 'Isogashii ne!',
                        translation: 'ยุ่งจังเลยนะ'
                    }
                ]
            },
            notes: [
                'การกระทำเรียงตามลำดับเวลา',
                'สามารถใช้กริยาหลายตัวได้ตามต้องการ',
                'มักใช้ในภาษาพูดเล่ากิจวัตร'
            ],
            commonMistakes: [
                'ใช้รูป ます กับทุกกริยา (ผิด: 食べます、行きます, ถูก: 食べて、行きます)',
                'ใช้ผิดรูป て (ผิด: 食べる、行く, ถูก: 食べて、行きます)'
            ],
            compareWith: '～て、～て、～ます (ต่อเนื่อง) vs ～ます (การกระทำเดี่ยว)'
        },
        {
            id: 'kara',
            title: '～から',
            level: 'N4',
            difficulty: 'ปานกลาง',
            pattern: 'ประโยค + から',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>ประโยค</td><td>から</td></tr>
                    <tr><td>忙しい</td><td>から</td></tr>
                </table>
            `,
            explanation: 'ใช้แสดงเหตุผลหรือสาเหตุ คล้าย "เพราะ…" ในภาษาไทย',
            usagePoints: [
                'から เชื่อมประโยคเหตุผลกับผล',
                'ใช้ได้กับกริยา, คำคุณศัพท์, หรือคำนาม+です',
                'มักใช้ในภาษาพูดและเขียน'
            ],
            examples: [
                { jp: '忙しいから行けません。', romaji: 'Isogashii kara ikemasen.', th: 'เพราะยุ่งเลยไปไม่ได้' },
                { jp: '寒いからコートを着ます。', romaji: 'Samui kara kooto o kimasu.', th: 'เพราะหนาวเลยใส่โค้ท' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: 'なぜ来ませんでしたか。',
                        romaji: 'Naze kimasen deshita ka.',
                        translation: 'ทำไมไม่มาครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: '病気だったから来ませんでした。',
                        romaji: 'Byouki datta kara kimasen deshita.',
                        translation: 'เพราะป่วยเลยไม่มา'
                    },
                    {
                        speaker: 'Aさん',
                        text: '大丈夫？早く良くなってね。',
                        romaji: 'Daijoubu? Hayaku yoku natte ne.',
                        translation: 'โอเคไหม หายไวๆ นะ'
                    }
                ]
            },
            notes: [
                'から ใช้แสดงเหตุผลที่ชัดเจน',
                'ประโยคก่อน から ต้องอยู่ในรูปธรรมดา',
                'สามารถใช้ในบริบทที่เป็นมิตรหรือทางการ'
            ],
            commonMistakes: [
                'ใช้ から โดยไม่มีประโยคเหตุผล (ผิด: から行けません, ถูก: 忙しいから行けません)',
                'ใช้รูปสุภาพก่อน から (ผิด: 忙しいですから, ถูก: 忙しいから)'
            ],
            compareWith: '～から (เหตุผล) vs ～ので (เหตุผล, สุภาพกว่า)'
        },
        {
            id: 'ga-dekimasu',
            title: '～ができます',
            level: 'N4',
            difficulty: 'ปานกลาง',
            pattern: 'คำนาม + が + できます',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>คำนาม</td><td>が</td><td>できます</td></tr>
                    <tr><td>日本語</td><td>が</td><td>できます</td></tr>
                </table>
            `,
            explanation: 'ใช้บอกความสามารถในการทำบางอย่าง คล้าย "ทำ…ได้" ในภาษาไทย',
            usagePoints: [
                'が ระบุสิ่งที่ทำได้',
                'できます หมายถึง "สามารถ" หรือ "ทำได้"',
                'ใช้กับทักษะ เช่น 言語, スポーツ'
            ],
            examples: [
                { jp: '日本語ができます。', romaji: 'Nihongo ga dekimasu.', th: 'พูดภาษาญี่ปุ่นได้' },
                { jp: 'ピアノができます。', romaji: 'Piano ga dekimasu.', th: 'เล่นเปียโนได้' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '何ができますか。',
                        romaji: 'Nani ga dekimasu ka.',
                        translation: 'ทำอะไรได้บ้างครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: '英語ができます。',
                        romaji: 'Eigo ga dekimasu.',
                        translation: 'พูดภาษาอังกฤษได้ค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'すごい！日本語もできますか。',
                        romaji: 'Sugoi! Nihongo mo dekimasu ka.',
                        translation: 'สุดยอด พูดญี่ปุ่นได้ด้วยไหม'
                    }
                ]
            },
            notes: [
                'できます ใช้กับทักษะหรือความสามารถ',
                'มักใช้ในบริบทที่เป็นมิตรหรือทางการ',
                'สามารถใช้ในคำถามหรือคำตอบ'
            ],
            commonMistakes: [
                'ใช้ผิดคำช่วย (ผิด: 日本語をできます, ถูก: 日本語ができます)',
                'ใช้กับสิ่งที่ไม่ใช่ทักษะ (ผิด: 本ができます, ถูก: 日本語ができます)'
            ],
            compareWith: '～ができます (ทำได้) vs ～がわかります (เข้าใจ)'
        },
        {
            id: 'nakereba-narimasen',
            title: '～なければなりません',
            level: 'N4',
            difficulty: 'ปานกลาง',
            pattern: 'กริยารูป ない (ตัด い) + なければなりません',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>V (รูป ない, ตัด い)</td><td>ければなりません</td></tr>
                    <tr><td>食べなければ</td><td>なりません</td></tr>
                </table>
            `,
            explanation: 'ใช้แสดงความจำเป็นหรือหน้าที่ คล้าย "ต้อง…" ในภาษาไทย',
            usagePoints: [
                'なければなりません ใช้แสดงสิ่งที่ต้องทำ',
                'ใช้ในบริบทที่เป็นทางการหรือเมื่อระบุหน้าที่',
                'ผันจากรูปปฏิเสธของกริยา'
            ],
            examples: [
                { jp: '宿題をしなければなりません。', romaji: 'Shukudai o shinakereba narimasen.', th: 'ต้องทำการบ้าน' },
                { jp: '早く起きなければなりません。', romaji: 'Hayaku okinakereba narimasen.', th: 'ต้องตื่นเช้า' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '明日何をしなければなりませんか。',
                        romaji: 'Ashita nani o shinakereba narimasen ka.',
                        translation: 'พรุ่งนี้ต้องทำอะไรครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: '宿題をしなければなりません。',
                        romaji: 'Shukudai o shinakereba narimasen.',
                        translation: 'ต้องทำการบ้านค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: '頑張ってください！',
                        romaji: 'Ganbatte kudasai!',
                        translation: 'สู้ๆ นะ!'
                    }
                ]
            },
            notes: [
                'なければなりません เป็นโครงสร้างที่ค่อนข้างเป็นทางการ',
                'ใช้เมื่อแสดงหน้าที่หรือความจำเป็น',
                'สามารถย่อในภาษาพูดเป็น ～なきゃ'
            ],
            commonMistakes: [
                'ใช้ผิดรูป ない (ผิด: 食べなければなりません, ถูก: 食べなければなりません)',
                'ใช้กับคำที่ไม่ใช่กริยา (ผิด: 学生なければなりません, ถูก: 勉強しなければなりません)'
            ],
            compareWith: '～なければなりません (ต้องทำ) vs ～なくてもいいです (ไม่ต้องทำ)'
        },
        {
            id: 'nakutemo-ii-desu',
            title: '～なくてもいいです',
            level: 'N4',
            difficulty: 'ปานกลาง',
            pattern: 'กริยารูป ない (ตัด い) + くてもいいです',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>V (รูป ない, ตัด い)</td><td>くてもいいです</td></tr>
                    <tr><td>食べなくても</td><td>いいです</td></tr>
                </table>
            `,
            explanation: 'ใช้แสดงว่าไม่จำเป็นต้องทำบางอย่าง คล้าย "ไม่ต้อง…" ในภาษาไทย',
            usagePoints: [
                'なくてもいいです ใช้เมื่อบอกว่าไม่จำเป็น',
                'ใช้ในบริบทที่ผ่อนคลายหรือให้ทางเลือก',
                'ผันจากรูปปฏิเสธของกริยา'
            ],
            examples: [
                { jp: '宿題をしなくてもいいです。', romaji: 'Shukudai o shinakutemo ii desu.', th: 'ไม่ต้องทำการบ้านก็ได้' },
                { jp: '早く来なくてもいいです。', romaji: 'Hayaku kónakutemo ii desu.', th: 'ไม่ต้องมาเช้าก็ได้' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '宿題をしなければなりませんか。',
                        romaji: 'Shukudai o shinakereba narimasen ka.',
                        translation: 'ต้องทำการบ้านไหมครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: 'しなくてもいいです。',
                        romaji: 'Shinakutemo ii desu.',
                        translation: 'ไม่ต้องทำก็ได้ค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'よかった！ありがとう。',
                        romaji: 'Yokatta! Arigatou.',
                        translation: 'ดีจัง ขอบคุณ'
                    }
                ]
            },
            notes: [
                'なくてもいいです ใช้ในบริบทที่ไม่บังคับ',
                'สามารถใช้ในภาษาพูดหรือทางการ',
                'ย่อในภาษาพูดได้เป็น ～なくていい'
            ],
            commonMistakes: [
                'ใช้ผิดรูป ない (ผิด: 食べるなくてもいい, ถูก: 食べなくてもいいです)',
                'ใช้ในบริบทที่ไม่เหมาะสม (ผิด: 学生なくてもいい, ถูก: 勉強しなくてもいい)'
            ],
            compareWith: '～なくてもいいです (ไม่ต้องทำ) vs ～なければなりません (ต้องทำ)'
        },
        {
            id: 'koto-ga-dekimasu',
            title: '～ことができます',
            level: 'N4',
            difficulty: 'ปานกลาง',
            pattern: 'กริยารูปธรรมดา + ことができます',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>V (รูปธรรมดา)</td><td>ことができます</td></tr>
                    <tr><td>泳ぐ</td><td>ことができます</td></tr>
                </table>
            `,
            explanation: 'ใช้แสดงความสามารถในการทำบางอย่าง คล้าย "สามารถ…" ในภาษาไทย',
            usagePoints: [
                'ことができます ใช้กับกริยาในรูปธรรมดา',
                'แสดงถึงความสามารถหรือโอกาส',
                'เป็นทางการกว่า ～ができます'
            ],
            examples: [
                { jp: '泳ぐことができます。', romaji: 'Oyogu koto ga dekimasu.', th: 'สามารถว่ายน้ำได้' },
                { jp: '日本語を話すことができます。', romaji: 'Nihongo o hanasu koto ga dekimasu.', th: 'สามารถพูดภาษาญี่ปุ่นได้' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '何をすることができますか。',
                        romaji: 'Nani o suru koto ga dekimasu ka.',
                        translation: 'ทำอะไรได้บ้างครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: 'ピアノを弾くことができます。',
                        romaji: 'Piano o hiku koto ga dekimasu.',
                        translation: 'สามารถเล่นเปียโนได้ค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'すごい！教えてください。',
                        romaji: 'Sugoi! Oshiete kudasai.',
                        translation: 'สุดยอด สอนหน่อยสิ'
                    }
                ]
            },
            notes: [
                'ことができます เป็นโครงสร้างที่เป็นทางการ',
                'ใช้ในบริบทที่เน้นความสามารถ',
                'สามารถใช้ในภาษาพูดและเขียน'
            ],
            commonMistakes: [
                'ใช้รูป ます ก่อน こと (ผิด: 話しますことができます, ถูก: 話すことができます)',
                'ใช้กับคำที่ไม่ใช่กริยา (ผิด: 学生ことができます, ถูก: 勉強することができます)'
            ],
            compareWith: '～ことができます (สามารถทำ) vs ～ができます (ทำได้)'
        },
        {
            id: 'mae-ni',
            title: '～まえに',
            level: 'N4',
            difficulty: 'ปานกลาง',
            pattern: 'กริยารูปธรรมดา/คำนาม + まえに',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>V (รูปธรรมดา)/คำนาม</td><td>まえに</td></tr>
                    <tr><td>寝る</td><td>まえに</td></tr>
                </table>
            `,
            explanation: 'ใช้แสดงสิ่งที่ทำก่อนการกระทำหรือเหตุการณ์อื่น คล้าย "ก่อน…" ในภาษาไทย',
            usagePoints: [
                'まえに ระบุลำดับก่อนการกระทำหรือเหตุการณ์',
                'ใช้กับกริยารูปธรรมดาหรือคำนาม',
                'มักใช้ในบริบทที่เล่าลำดับเวลา'
            ],
            examples: [
                { jp: '寝るまえに本を読みます。', romaji: 'Neru mae ni hon o yomimasu.', th: 'ก่อนนอนอ่านหนังสือ' },
                { jp: '学校に行くまえに朝ご飯を食べます。', romaji: 'Gakkou ni iku mae ni asagohan o tabemasu.', th: 'ก่อนไปโรงเรียนกินข้าวเช้า' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '寝るまえに何をしますか。',
                        romaji: 'Neru mae ni nani o shimasu ka.',
                        translation: 'ก่อนนอนทำอะไรครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: '本を読みます。',
                        romaji: 'Hon o yomimasu.',
                        translation: 'อ่านหนังสือค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'いいね！私も音楽を聴きます。',
                        romaji: 'Ii ne! Watashi mo ongaku o kikimasu.',
                        translation: 'ดีจัง ฉันฟังเพลง'
                    }
                ]
            },
            notes: [
                'まえに ใช้กับกริยารูปธรรมดา ไม่ใช้รูป ます',
                'สามารถใช้กับคำนาม เช่น 試験まえに (ก่อนสอบ)',
                'มักใช้ในภาษาพูดเล่ากิจวัตร'
            ],
            commonMistakes: [
                'ใช้รูป ます ก่อน まえに (ผิด: 食べますまえに, ถูก: 食べるまえに)',
                'ใช้กับคำที่ไม่เหมาะสม (ผิด: 学生まえに, ถูก: 勉強するまえに)'
            ],
            compareWith: '～まえに (ก่อน) vs ～あとに (หลัง)'
        },
        {
            id: 'ta-koto-ga-arimasu',
            title: '～たことがあります',
            level: 'N4',
            difficulty: 'ปานกลาง',
            pattern: 'กริยารูป た + ことがあります',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>V (รูป た)</td><td>ことがあります</td></tr>
                    <tr><td>行った</td><td>ことがあります</td></tr>
                </table>
            `,
            explanation: 'ใช้บอกประสบการณ์ที่เคยทำมา คล้าย "เคย…" ในภาษาไทย',
            usagePoints: [
                'た ใช้แสดงอดีตของกริยา',
                'ことがあります เน้นประสบการณ์ที่เคยเกิดขึ้น',
                'ใช้ในบริบทที่เล่าประสบการณ์'
            ],
            examples: [
                { jp: '日本へ行ったことがあります。', romaji: 'Nihon e itta koto ga arimasu.', th: 'เคยไปญี่ปุ่น' },
                { jp: '寿司を食べたことがあります。', romaji: 'Sushi o tabeta koto ga arimasu.', th: 'เคยกินซูชิ' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '外国へ行ったことがありますか。',
                        romaji: 'Gaikoku e itta koto ga arimasu ka.',
                        translation: 'เคยไปต่างประเทศไหมครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: 'タイへ行ったことがあります。',
                        romaji: 'Tai e itta koto ga arimasu.',
                        translation: 'เคยไปไทยค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'いいね！どうでしたか。',
                        romaji: 'Ii ne! Dou deshita ka.',
                        translation: 'ดีจัง เป็นยังไงบ้าง'
                    }
                ]
            },
            notes: [
                'ことがあります ใช้เล่าประสบการณ์ในอดีต',
                'มักใช้ในภาษาพูดหรือการสนทนา',
                'สามารถใช้ในคำถามหรือคำตอบ'
            ],
            commonMistakes: [
                'ใช้รูป ます แทน た (ผิด: 行きますことがあります, ถูก: 行ったことがあります)',
                'ใช้กับคำที่ไม่ใช่กริยา (ผิด: 学生ことがあります, ถูก: 勉強したことがあります)'
            ],
            compareWith: '～たことがあります (เคยทำ) vs ～た (ทำในอดีต)'
        },
        {
            id: 'koto-ni-narimashita',
            title: '～ことになりました',
            level: 'N4',
            difficulty: 'ปานกลาง',
            pattern: 'กริยารูปธรรมดา/คำนาม + ことになりました',
            structureDiagram: `
                <table class="grammar-diagram">
                    <tr><td>V (รูปธรรมดา)/คำนาม</td><td>ことになりました</td></tr>
                    <tr><td>結婚する</td><td>ことになりました</td></tr>
                </table>
            `,
            explanation: 'ใช้บอกการตัดสินใจหรือผลที่เกิดขึ้น คล้าย "ตกลงว่าจะ…" ในภาษาไทย',
            usagePoints: [
                'ことになりました ใช้เมื่อการตัดสินใจเกิดจากกลุ่มหรือสถานการณ์',
                'ใช้กับกริยารูปธรรมดาหรือคำนาม',
                'มักใช้ในบริบทที่เป็นทางการหรือเมื่อแจ้งผล'
            ],
            examples: [
                { jp: '結婚することになりました。', romaji: 'Kekkon suru koto ni narimashita.', th: 'ตกลงว่าจะแต่งงาน' },
                { jp: '日本に行くことになりました。', romaji: 'Nihon ni iku koto ni narimashita.', th: 'ตกลงว่าจะไปญี่ปุ่น' }
            ],
            conversation: {
                title: 'ตัวอย่างบทสนทนา',
                items: [
                    {
                        speaker: 'Aさん',
                        text: '来年何をしますか。',
                        romaji: 'Rainen nani o shimasu ka.',
                        translation: 'ปีหน้าจะทำอะไรครับ/คะ'
                    },
                    {
                        speaker: 'Bさん',
                        text: '日本に留学することになりました。',
                        romaji: 'Nihon ni ryuugaku suru koto ni narimashita.',
                        translation: 'ตกลงว่าจะไปเรียนต่อที่ญี่ปุ่นค่ะ'
                    },
                    {
                        speaker: 'Aさん',
                        text: 'おめでとう！頑張ってね。',
                        romaji: 'Omedetou! Ganbatte ne.',
                        translation: 'ยินดีด้วย สู้ๆ นะ'
                    }
                ]
            },
            notes: [
                'ことになりました ใช้เมื่อการตัดสินใจไม่ใช่ของผู้พูดคนเดียว',
                'เป็นโครงสร้างที่ค่อนข้างเป็นทางการ',
                'สามารถใช้ในบริบทการแจ้งข่าว'
            ],
            commonMistakes: [
                'ใช้รูป ます ก่อน こと (ผิด: 行きますことになりました, ถูก: 行くことになりました)',
                'ใช้กับคำที่ไม่เหมาะสม (ผิด: 学生ことになりました, ถูก: 勉強することになりました)'
            ],
            compareWith: '～ことになりました (ตกลง) vs ～つもりです (ตั้งใจ)'
        }

    ];
}

let currentGrammarList = grammarData; // สำหรับ search/filter

// --- ฟังก์ชันช่วยสำหรับการ sort/compare ---
const levelOrder = { 'N5': 1, 'N4': 2, 'N3': 3, 'N2': 4, 'N1': 5 };
const difficultyOrder = { 'ง่าย': 1, 'ปานกลาง': 2, 'ยาก': 3 };

function sortGrammarList(list, sortBy = 'default', sortDir = 'asc') {
    return [...list].sort((a, b) => {
        // Default: เรียงตามเล่ม และบท
        if (sortBy === 'default') {
            const bookA = a.minnaBook || 99;
            const bookB = b.minnaBook || 99;
            if (bookA !== bookB) return bookA - bookB;
            const chapterA = a.minnaChapter || 99;
            const chapterB = b.minnaChapter || 99;
            return chapterA - chapterB;
        }
        if (sortBy === 'book') {
            const bookA = a.minnaBook || 99;
            const bookB = b.minnaBook || 99;
            return sortDir === 'asc' ? bookA - bookB : bookB - bookA;
        }
        if (sortBy === 'chapter') {
            const chapterA = a.minnaChapter || 99;
            const chapterB = b.minnaChapter || 99;
            return sortDir === 'asc' ? chapterA - chapterB : chapterB - chapterA;
        }
        return 0;
    });
}

function filterGrammarList(list, bookFilter, chapterFilter) {
    return list.filter(g => {
        let ok = true;
        if (bookFilter && bookFilter !== 'all') ok = ok && g.minnaBook == bookFilter;
        if (chapterFilter && chapterFilter !== 'all') ok = ok && g.minnaChapter == chapterFilter;
        return ok;
    });
}

// --- UI สำหรับ filter/sort ---
function renderGrammarFilterBar() {
    let bar = document.querySelector('.grammar-filter-bar');
    if (!bar) {
        bar = document.createElement('div');
        bar.className = 'grammar-filter-bar';
        const grammarHeader = document.querySelector('.grammar-header');
        if (grammarHeader) grammarHeader.appendChild(bar);
    }
    bar.innerHTML = `
        <label>เล่ม:
            <select class="grammar-filter-book">
                <option value="all">ทั้งหมด</option>
                <option value="1">เล่ม 1</option>
                <option value="2">เล่ม 2</option>
            </select>
        </label>
        <label>บท:
            <select class="grammar-filter-chapter">
                <option value="all">ทั้งหมด</option>
                <option value="1">บท 1</option>
                <option value="2">บท 2</option>
                <option value="3">บท 3</option>
                <option value="4">บท 4</option>
                <option value="5">บท 5</option>
                <option value="6">บท 6</option>
                <option value="7">บท 7</option>
                <option value="8">บท 8</option>
                <option value="9">บท 9</option>
                <option value="10">บท 10</option>
                <option value="11">บท 11</option>
                <option value="12">บท 12</option>
                <option value="13">บท 13</option>
                <option value="14">บท 14</option>
                <option value="15">บท 15</option>
                <option value="16">บท 16</option>
                <option value="17">บท 17</option>
                <option value="18">บท 18</option>
                <option value="19">บท 19</option>
                <option value="20">บท 20</option>
                <option value="21">บท 21</option>
                <option value="22">บท 22</option>
                <option value="23">บท 23</option>
                <option value="24">บท 24</option>
                <option value="25">บท 25</option>
            </select>
        </label>
        <label>เรียง:
            <select class="grammar-sort-by">
                <option value="default">บทต่อเนื่อง</option>
                <option value="book-asc">เล่ม 1 → 2</option>
                <option value="chapter-asc">บท 1 → 25</option>
                <option value="chapter-desc">บท 25 → 1</option>
            </select>
        </label>
    `;
}

// --- ฟังก์ชัน renderGrammarList ใหม่ ---
function renderGrammarList(list) {
    const grammarContent = document.querySelector('.grammar-content');
    if (!grammarContent) return;
    grammarContent.innerHTML = '';
    const listDiv = document.createElement('div');
    listDiv.className = 'grammar-topics-list';
    list.forEach(grammar => {
        const topicElement = document.createElement('div');
        topicElement.className = 'grammar-topic-item';
        topicElement.textContent = grammar.title;
        topicElement.onclick = () => showGrammarModal(grammar);
        // badge
        const badgeDiv = document.createElement('div');
        badgeDiv.className = 'grammar-topic-badges';
        if (grammar.minnaBook) {
            const bookBadge = document.createElement('span');
            bookBadge.className = 'grammar-badge grammar-badge-book';
            bookBadge.textContent = `เล่ม ${grammar.minnaBook}`;
            badgeDiv.appendChild(bookBadge);
        }
        if (grammar.minnaChapter) {
            const chapterBadge = document.createElement('span');
            chapterBadge.className = `grammar-badge grammar-badge-chapter grammar-badge-chapter-${grammar.minnaChapter}`;
            chapterBadge.textContent = `บท ${grammar.minnaChapter}`;
            badgeDiv.appendChild(chapterBadge);
        }
        topicElement.appendChild(badgeDiv);
        listDiv.appendChild(topicElement);
    });
    grammarContent.appendChild(listDiv);
}

// --- ฟังก์ชันโหลดเริ่มต้นและ event filter/sort ---
window.addEventListener('DOMContentLoaded', () => {
    renderGrammarFilterBar();
    let bookFilter = 'all';
    let chapterFilter = 'all';
    let sortBy = 'default';
    
    function updateList() {
        let filtered = filterGrammarList(grammarData, bookFilter, chapterFilter);
        if (sortBy === 'book-asc') {
            filtered = sortGrammarList(filtered, 'book', 'asc');
        } else if (sortBy === 'chapter-asc') {
            filtered = sortGrammarList(filtered, 'chapter', 'asc');
        } else if (sortBy === 'chapter-desc') {
            filtered = sortGrammarList(filtered, 'chapter', 'desc');
        } else {
            filtered = sortGrammarList(filtered, 'default', 'asc');
        }
        renderGrammarList(filtered);
    }
    
    const bookFilterEl = document.querySelector('.grammar-filter-book');
    if (bookFilterEl) {
        bookFilterEl.onchange = e => {
            bookFilter = e.target.value;
            updateList();
        };
    }
    
    const chapterFilterEl = document.querySelector('.grammar-filter-chapter');
    if (chapterFilterEl) {
        chapterFilterEl.onchange = e => {
            chapterFilter = e.target.value;
            updateList();
        };
    }
    
    const sortByEl = document.querySelector('.grammar-sort-by');
    if (sortByEl) {
        sortByEl.onchange = e => {
            sortBy = e.target.value;
            updateList();
        };
    }
    updateList();
});

function renderGrammarDetail(grammar) {
    const detailSection = document.createElement('div');
    detailSection.className = 'grammar-detail-section';
    
    // เพิ่มส่วนโครงสร้างไวยากรณ์
    if (grammar.structure) {
        const structureDiv = document.createElement('div');
        structureDiv.className = 'grammar-structure';
        
        const structureTitle = document.createElement('div');
        structureTitle.className = 'grammar-structure-title';
        structureTitle.textContent = 'โครงสร้างไวยากรณ์';
        
        const structureContent = document.createElement('div');
        structureContent.className = 'grammar-structure-content';
        structureContent.innerHTML = `
            <p><strong>พื้นฐาน:</strong> ${grammar.structure.basic}</p>
            ${grammar.structure.examples.map(ex => `<p>${ex}</p>`).join('')}
        `;
        
        structureDiv.appendChild(structureTitle);
        structureDiv.appendChild(structureContent);
        detailSection.appendChild(structureDiv);
    }
    
    // เพิ่มส่วนบทสนทนา
    if (grammar.conversation) {
        const conversationDiv = document.createElement('div');
        conversationDiv.className = 'grammar-conversation';
        
        const conversationTitle = document.createElement('div');
        conversationTitle.className = 'grammar-conversation-title';
        conversationTitle.textContent = grammar.conversation.title;
        
        const conversationContent = document.createElement('div');
        conversationContent.className = 'grammar-conversation-content';
        
        grammar.conversation.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'grammar-conversation-item';
            itemDiv.innerHTML = `
                <div class=\"grammar-conversation-speaker\">${item.speaker}</div>
                <div class=\"grammar-conversation-text\">${item.text}</div>
                <div class=\"grammar-conversation-romaji\">${item.romaji}</div>
                <div class=\"grammar-conversation-translation\">${item.translation}</div>
            `;
            conversationContent.appendChild(itemDiv);
        });
        
        conversationDiv.appendChild(conversationTitle);
        conversationDiv.appendChild(conversationContent);
        detailSection.appendChild(conversationDiv);
    }
    
    // หมายเหตุ
    if (grammar.note) {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'grammar-note';
        noteDiv.innerHTML = `<strong>หมายเหตุ:</strong> ${grammar.note}`;
        detailSection.appendChild(noteDiv);
    }
    // ข้อควรระวัง/การใช้ผิดที่พบบ่อย
    if (grammar.commonMistakes) {
        const mistakeDiv = document.createElement('div');
        mistakeDiv.className = 'grammar-mistake';
        mistakeDiv.innerHTML = `<strong>ข้อควรระวัง:</strong> ${grammar.commonMistakes}`;
        detailSection.appendChild(mistakeDiv);
    }
    // การเปรียบเทียบกับไวยากรณ์อื่น
    if (grammar.compareWith) {
        const compareDiv = document.createElement('div');
        compareDiv.className = 'grammar-compare';
        compareDiv.innerHTML = `<strong>เปรียบเทียบ:</strong> ${grammar.compareWith}`;
        detailSection.appendChild(compareDiv);
    }
    
    return detailSection;
}

// ฟังก์ชันสำหรับแสดงรายละเอียดไวยากรณ์ใน modal
function showGrammarModal(grammar) {
    const modal = document.getElementById('grammar-modal');
    if (!modal) return;
    
    const modalBody = modal.querySelector('.grammar-modal-body') || modal.querySelector('.modal-body');
    if (!modalBody) return;
    
    // ล้างเนื้อหาเดิม
    modalBody.innerHTML = '';

    // สร้าง title
    const titleDiv = document.createElement('div');
    titleDiv.className = 'grammar-title';
    titleDiv.textContent = grammar.title;
    modalBody.appendChild(titleDiv);

    // สร้าง pattern
    if (grammar.pattern) {
        const patternDiv = document.createElement('div');
        patternDiv.className = 'grammar-pattern';
        patternDiv.textContent = grammar.pattern;
        modalBody.appendChild(patternDiv);
    }

    // ตาราง/แผนผังโครงสร้าง (ถ้ามี)
    if (grammar.structureDiagram) {
        const diagramDiv = document.createElement('div');
        diagramDiv.className = 'grammar-structure-diagram';
        diagramDiv.innerHTML = grammar.structureDiagram;
        modalBody.appendChild(diagramDiv);
    }

    // สร้าง explanation
    if (grammar.explanation) {
        const explanationDiv = document.createElement('div');
        explanationDiv.className = 'grammar-explanation';
        explanationDiv.textContent = grammar.explanation;
        modalBody.appendChild(explanationDiv);
    }

    // จุดสำคัญ/ข้อควรจำ (usagePoints)
    if (grammar.usagePoints && grammar.usagePoints.length > 0) {
        const usageDiv = document.createElement('div');
        usageDiv.className = 'grammar-usage-points';
        usageDiv.innerHTML = '<strong>จุดสำคัญ:</strong>';
        const ul = document.createElement('ul');
        grammar.usagePoints.forEach(pt => {
            const li = document.createElement('li');
            li.textContent = pt;
            ul.appendChild(li);
        });
        usageDiv.appendChild(ul);
        modalBody.appendChild(usageDiv);
    }

    // ตัวอย่างประโยค
    if (grammar.examples && grammar.examples.length > 0) {
        const examplesDiv = document.createElement('div');
        examplesDiv.className = 'grammar-examples';
        const exTitle = document.createElement('h4');
        exTitle.textContent = 'ตัวอย่างประโยค';
        examplesDiv.appendChild(exTitle);
        grammar.examples.forEach(ex => {
            const exItem = document.createElement('div');
            exItem.className = 'grammar-example-item';
            const jp = ex.jp || ex.japanese || '';
            const romaji = ex.romaji || '';
            const th = ex.th || ex.thai || '';
            if (jp) {
                const jpDiv = document.createElement('div');
                jpDiv.className = 'grammar-example-jp';
                jpDiv.textContent = jp;
                exItem.appendChild(jpDiv);
            }
            if (romaji) {
                const romajiDiv = document.createElement('div');
                romajiDiv.className = 'grammar-example-romaji';
                romajiDiv.textContent = romaji;
                exItem.appendChild(romajiDiv);
            }
            if (th) {
                const thDiv = document.createElement('div');
                thDiv.className = 'grammar-example-th';
                thDiv.textContent = th;
                exItem.appendChild(thDiv);
            }
            examplesDiv.appendChild(exItem);
        });
        modalBody.appendChild(examplesDiv);
    }

    // ตัวอย่างพิเศษ/ข้อยกเว้น (extraExamples)
    if (grammar.extraExamples && grammar.extraExamples.length > 0) {
        const extraDiv = document.createElement('div');
        extraDiv.className = 'grammar-extra-examples';
        const exTitle = document.createElement('h4');
        exTitle.textContent = 'ตัวอย่างพิเศษ/ข้อยกเว้น';
        extraDiv.appendChild(exTitle);
        grammar.extraExamples.forEach(ex => {
            const exItem = document.createElement('div');
            exItem.className = 'grammar-example-item';
            const jp = ex.jp || ex.japanese || '';
            const romaji = ex.romaji || '';
            const th = ex.th || ex.thai || '';
            if (jp) {
                const jpDiv = document.createElement('div');
                jpDiv.className = 'grammar-example-jp';
                jpDiv.textContent = jp;
                exItem.appendChild(jpDiv);
            }
            if (romaji) {
                const romajiDiv = document.createElement('div');
                romajiDiv.className = 'grammar-example-romaji';
                romajiDiv.textContent = romaji;
                exItem.appendChild(romajiDiv);
            }
            if (th) {
                const thDiv = document.createElement('div');
                thDiv.className = 'grammar-example-th';
                thDiv.textContent = th;
                exItem.appendChild(thDiv);
            }
            extraDiv.appendChild(exItem);
        });
        modalBody.appendChild(extraDiv);
    }

    // ข้อควรระวัง/กรณีพิเศษ (specialCases)
    if (grammar.specialCases && grammar.specialCases.length > 0) {
        const specialDiv = document.createElement('div');
        specialDiv.className = 'grammar-special-cases';
        specialDiv.innerHTML = '<strong>ข้อควรระวัง/กรณีพิเศษ:</strong>';
        const ul = document.createElement('ul');
        grammar.specialCases.forEach(pt => {
            const li = document.createElement('li');
            li.textContent = pt;
            ul.appendChild(li);
        });
        specialDiv.appendChild(ul);
        modalBody.appendChild(specialDiv);
    }

    // ตัวอย่างบทสนทนา
    if (grammar.conversation) {
        const conversationDiv = document.createElement('div');
        conversationDiv.className = 'grammar-conversation';
        const conversationTitle = document.createElement('div');
        conversationTitle.className = 'grammar-conversation-title';
        conversationTitle.textContent = grammar.conversation.title || 'ตัวอย่างบทสนทนา';
        conversationDiv.appendChild(conversationTitle);
        const conversationContent = document.createElement('div');
        conversationContent.className = 'grammar-conversation-content';
        grammar.conversation.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'grammar-conversation-item';
            itemDiv.innerHTML = `
                <div class=\"grammar-conversation-speaker\">${item.speaker}</div>
                <div class=\"grammar-conversation-text\">${item.text}</div>
                <div class=\"grammar-conversation-romaji\">${item.romaji}</div>
                <div class=\"grammar-conversation-translation\">${item.translation}</div>
            `;
            conversationContent.appendChild(itemDiv);
        });
        conversationDiv.appendChild(conversationContent);
        modalBody.appendChild(conversationDiv);
    }

    // หมายเหตุ
    if (grammar.note) {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'grammar-note';
        noteDiv.innerHTML = `<strong>หมายเหตุ:</strong> ${grammar.note}`;
        modalBody.appendChild(noteDiv);
    }
    // ข้อควรระวัง/การใช้ผิดที่พบบ่อย
    if (grammar.commonMistakes) {
        const mistakeDiv = document.createElement('div');
        mistakeDiv.className = 'grammar-mistake';
        mistakeDiv.innerHTML = `<strong>ข้อควรระวัง:</strong> ${grammar.commonMistakes}`;
        modalBody.appendChild(mistakeDiv);
    }
    // การเปรียบเทียบกับไวยากรณ์อื่น
    if (grammar.compareWith) {
        const compareDiv = document.createElement('div');
        compareDiv.className = 'grammar-compare';
        compareDiv.innerHTML = `<strong>เปรียบเทียบ:</strong> ${grammar.compareWith}`;
        modalBody.appendChild(compareDiv);
    }

    modal.style.display = 'flex';
}

function closeGrammarModal() {
    const modal = document.getElementById('grammar-modal');
    modal.style.display = 'none';
}

// อิเล็มเมนต์ที่สำคัญ
let searchInput, levelFilter, difficultyFilter, sortFilter, randomBtn;
let grammarContainer, currentLevelTitle, viewBtns;
let prevPageBtn, nextPageBtn, currentPageSpan, totalPagesSpan;
let newModal, newModalBody, newModalClose, newModalOverlay;

// ตัวแปรการทำงานใหม่
let currentPage = 1;
let itemsPerPage = 12;
let filteredGrammar = [];
let currentView = 'card';

// เริ่มต้นใหม่เมื่อหน้าโหลดเสร็จ
function initializeNewGrammarPage() {
    initializeNewElements();
    initializeNewEventListeners();
    updateNewStats();
    filteredGrammar = [...grammarData];
    updateNewDisplay();
}

function initializeNewElements() {
    // ค้นหาและฟิลเตอร์
    searchInput = document.getElementById('grammar-search');
    levelFilter = document.getElementById('level-filter');
    difficultyFilter = document.getElementById('difficulty-filter');
    sortFilter = document.getElementById('sort-filter');
    randomBtn = document.getElementById('random-grammar-btn');
    
    // แสดงผล
    grammarContainer = document.getElementById('grammar-container');
    currentLevelTitle = document.getElementById('current-level-title');
    viewBtns = document.querySelectorAll('.view-btn');
    
    // Pagination
    prevPageBtn = document.getElementById('prev-page');
    nextPageBtn = document.getElementById('next-page');
    currentPageSpan = document.getElementById('current-page');
    totalPagesSpan = document.getElementById('total-pages');
    
    // Modal ใหม่
    newModal = document.getElementById('grammar-modal');
    newModalBody = newModal?.querySelector('.modal-body');
    newModalClose = newModal?.querySelector('.modal-close');
    newModalOverlay = newModal?.querySelector('.modal-overlay');
}

function initializeNewEventListeners() {
    // Search และ filter
    if (searchInput) {
        searchInput.addEventListener('input', handleNewSearch);
    }
    
    if (levelFilter) {
        levelFilter.addEventListener('change', applyNewFilters);
    }
    
    if (difficultyFilter) {
        difficultyFilter.addEventListener('change', applyNewFilters);
    }
    
    if (sortFilter) {
        sortFilter.addEventListener('change', applyNewFilters);
    }
    
    if (randomBtn) {
        randomBtn.addEventListener('click', showNewRandomGrammar);
    }
    
    // View toggle
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            viewBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentView = this.dataset.view;
            updateNewDisplay();
        });
    });
    
    // Pagination
    if (prevPageBtn) {
        prevPageBtn.addEventListener('click', () => changeNewPage(-1));
    }
    
    if (nextPageBtn) {
        nextPageBtn.addEventListener('click', () => changeNewPage(1));
    }
    
    // Modal ใหม่
    if (newModalClose) {
        newModalClose.addEventListener('click', closeNewModal);
    }
    
    if (newModalOverlay) {
        newModalOverlay.addEventListener('click', closeNewModal);
    }
    
    // Level buttons
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const levelCard = this.closest('.level-card');
            const level = levelCard?.dataset.level;
            if (level) {
                filterByNewLevel(level);
            }
        });
    });
}

function updateNewStats() {
    const stats = {
        n5: grammarData.filter(g => g.level === 'N5').length,
        n4: grammarData.filter(g => g.level === 'N4').length,
        n3: grammarData.filter(g => g.level === 'N3').length,
        total: grammarData.length
    };
    
    const n5Count = document.getElementById('n5-count');
    const n4Count = document.getElementById('n4-count');
    const n3Count = document.getElementById('n3-count');
    const totalCount = document.getElementById('total-count');
    
    if (n5Count) n5Count.textContent = stats.n5;
    if (n4Count) n4Count.textContent = stats.n4;
    if (n3Count) n3Count.textContent = stats.n3;
    if (totalCount) totalCount.textContent = stats.total;
}

function handleNewSearch() {
    const query = searchInput.value.toLowerCase().trim();
    
    if (query === '') {
        filteredGrammar = [...grammarData];
    } else {
        filteredGrammar = grammarData.filter(grammar => {
            return grammar.title.toLowerCase().includes(query) ||
                   grammar.pattern.toLowerCase().includes(query) ||
                   grammar.explanation.toLowerCase().includes(query) ||
                   grammar.level.toLowerCase().includes(query);
        });
    }
    
    applyNewFilters();
}

function applyNewFilters() {
    let filtered = [...filteredGrammar];
    
    // ฟิลเตอร์ตามระดับ
    const selectedLevel = levelFilter?.value;
    if (selectedLevel && selectedLevel !== 'all') {
        filtered = filtered.filter(g => g.level === selectedLevel);
    }
    
    // ฟิลเตอร์ตามความยาก
    const selectedDifficulty = difficultyFilter?.value;
    if (selectedDifficulty && selectedDifficulty !== 'all') {
        filtered = filtered.filter(g => g.difficulty === selectedDifficulty);
    }
    
    // เรียงลำดับ
    const sortBy = sortFilter?.value || 'level';
    filtered = sortNewGrammar(filtered, sortBy);
    
    filteredGrammar = filtered;
    currentPage = 1;
    updateNewDisplay();
}

function sortNewGrammar(data, sortBy) {
    const levelOrder = { 'N5': 1, 'N4': 2, 'N3': 3 };
    const difficultyOrder = { 'ง่าย': 1, 'ปานกลาง': 2, 'ยาก': 3 };
    
    return data.sort((a, b) => {
        switch (sortBy) {
            case 'level':
                return levelOrder[a.level] - levelOrder[b.level];
            case 'difficulty':
                return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
            case 'alphabetical':
                return a.title.localeCompare(b.title);
            case 'length':
                return a.pattern.length - b.pattern.length;
            default:
                return 0;
        }
    });
}

function filterByNewLevel(level) {
    if (levelFilter) {
        levelFilter.value = level;
    }
    
    filteredGrammar = grammarData.filter(g => g.level === level);
    currentPage = 1;
    updateNewDisplay();
    
    // เลื่อนไปยังส่วนรายการ
    const listSection = document.querySelector('.grammar-list-section');
    if (listSection) {
        listSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function updateNewDisplay() {
    if (!grammarContainer) return;
    
    const totalPages = Math.ceil(filteredGrammar.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredGrammar.slice(startIndex, endIndex);
    
    // อัปเดตชื่อหัวข้อ
    updateNewLevelTitle();
    
    // แสดงไวยากรณ์
    displayNewGrammar(currentItems);
    
    // อัปเดต pagination
    updateNewPagination(totalPages);
}

function updateNewLevelTitle() {
    if (!currentLevelTitle) return;
    
    const selectedLevel = levelFilter?.value;
    if (selectedLevel && selectedLevel !== 'all') {
        currentLevelTitle.textContent = `ไวยากรณ์ ${selectedLevel}`;
    } else {
        currentLevelTitle.textContent = 'ไวยากรณ์ทั้งหมด';
    }
}

function displayNewGrammar(items) {
    if (!grammarContainer) return;
    
    grammarContainer.className = currentView === 'card' ? 'grammar-grid' : 'grammar-list';
    
    if (items.length === 0) {
        grammarContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>ไม่พบผลลัพธ์</h3>
                <p>ลองเปลี่ยนคำค้นหาหรือฟิลเตอร์</p>
            </div>
        `;
        return;
    }
    
    grammarContainer.innerHTML = items.map(grammar => {
        return currentView === 'card' ? createNewGrammarCard(grammar) : createNewGrammarListItem(grammar);
    }).join('');
    
    // เพิ่ม event listeners สำหรับการคลิก
    grammarContainer.querySelectorAll('.grammar-item').forEach((item, index) => {
        item.addEventListener('click', () => showNewGrammarModal(items[index]));
    });
}

function createNewGrammarCard(grammar) {
    const levelColors = {
        'N5': 'success',
        'N4': 'primary', 
        'N3': 'warning'
    };
    
    const difficultyIcons = {
        'ง่าย': 'star',
        'ปานกลาง': 'star-half-alt',
        'ยาก': 'star'
    };
    
    const level = grammar.level || 'N5';
    const difficulty = grammar.difficulty || 'ง่าย';
    const explanation = grammar.explanation || '';
    const examples = grammar.examples || [];
    
    return `
        <div class="grammar-item grammar-card" data-id="${grammar.id}">
            <div class="card-header">
                <div class="grammar-badges">
                    <span class="badge badge-${levelColors[level]}">${level}</span>
                    <span class="badge badge-difficulty">
                        <i class="fas fa-${difficultyIcons[difficulty]}"></i>
                        ${difficulty}
                    </span>
                </div>
            </div>
            <div class="card-body">
                <h3 class="grammar-title">${grammar.title}</h3>
                <div class="grammar-pattern">${grammar.pattern}</div>
                <p class="grammar-explanation">${explanation.substring(0, 120)}${explanation.length > 120 ? '...' : ''}</p>
                <div class="grammar-examples-preview">
                    ${examples.slice(0, 1).map(ex => `
                        <div class="example-preview">
                            <div class="example-jp">${ex.jp || ''}</div>
                            <div class="example-th">${ex.th || ''}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="card-footer">
                <button class="learn-btn">
                    <i class="fas fa-book-open"></i>
                    เรียนรู้เพิ่มเติม
                </button>
            </div>
        </div>
    `;
}

function createNewGrammarListItem(grammar) {
    const level = grammar.level || 'N5';
    const difficulty = grammar.difficulty || 'ง่าย';
    const explanation = grammar.explanation || '';
    
    return `
        <div class="grammar-item grammar-list-item" data-id="${grammar.id}">
            <div class="list-content">
                <div class="list-header">
                    <h3 class="grammar-title">${grammar.title}</h3>
                    <div class="grammar-badges">
                        <span class="badge badge-${level.toLowerCase()}">${level}</span>
                        <span class="badge badge-difficulty">${difficulty}</span>
                    </div>
                </div>
                <div class="grammar-pattern">${grammar.pattern}</div>
                <p class="grammar-explanation">${explanation.substring(0, 200)}${explanation.length > 200 ? '...' : ''}</p>
            </div>
            <div class="list-actions">
                <button class="learn-btn">
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `;
}

function updateNewPagination(totalPages) {
    if (currentPageSpan) currentPageSpan.textContent = currentPage;
    if (totalPagesSpan) totalPagesSpan.textContent = totalPages;
    
    if (prevPageBtn) {
        prevPageBtn.disabled = currentPage === 1;
    }
    
    if (nextPageBtn) {
        nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;
    }
}

function changeNewPage(direction) {
    const totalPages = Math.ceil(filteredGrammar.length / itemsPerPage);
    const newPage = currentPage + direction;
    
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        updateNewDisplay();
        
        // เลื่อนกลับไปด้านบน
        grammarContainer?.scrollIntoView({ behavior: 'smooth' });
    }
}

function showNewRandomGrammar() {
    if (grammarData.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * grammarData.length);
    const randomGrammar = grammarData[randomIndex];
    showNewGrammarModal(randomGrammar);
}

function showNewGrammarModal(grammar) {
    if (!newModal || !newModalBody) return;
    
    newModalBody.innerHTML = createNewGrammarDetailContent(grammar);
    newModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Animation
    setTimeout(() => {
        newModal.classList.add('show');
    }, 10);
}

function createNewGrammarDetailContent(grammar) {
    const level = grammar.level || 'N5';
    const difficulty = grammar.difficulty || 'ง่าย';
    const explanation = grammar.explanation || '';
    const examples = grammar.examples || [];
    
    return `
        <div class="grammar-detail">
            <div class="detail-header">
                <h2 class="grammar-title">${grammar.title}</h2>
                <div class="grammar-badges">
                    <span class="badge badge-${level.toLowerCase()}">${level}</span>
                    <span class="badge badge-difficulty">${difficulty}</span>
                </div>
            </div>
            
            <div class="grammar-pattern-section">
                <h4>รูปแบบ</h4>
                <div class="grammar-pattern">${grammar.pattern}</div>
            </div>
            
            <div class="grammar-explanation-section">
                <h4>คำอธิบาย</h4>
                <p>${explanation}</p>
            </div>
            
            <div class="grammar-examples-section">
                <h4>ตัวอย่างประโยค</h4>
                <div class="examples-list">
                    ${examples.map(example => `
                        <div class="example-item">
                            <div class="example-jp">${example.jp || ''}</div>
                            <div class="example-romaji">${example.romaji || ''}</div>
                            <div class="example-th">${example.th || ''}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            ${grammar.notes ? `
                <div class="grammar-notes-section">
                    <h4>หมายเหตุ</h4>
                    <ul class="notes-list">
                        ${grammar.notes.map(note => `<li>${note}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            
            ${grammar.conversation ? `
                <div class="grammar-conversation-section">
                    <h4>${grammar.conversation.title}</h4>
                    <div class="conversation-items">
                        ${grammar.conversation.items.map(item => `
                            <div class="conversation-item">
                                <div class="speaker">${item.speaker}</div>
                                <div class="conversation-text">
                                    <div class="jp-text">${item.text}</div>
                                    <div class="romaji-text">${item.romaji}</div>
                                    <div class="th-text">${item.translation}</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
    `;
}

function closeNewModal() {
    if (!newModal) return;
    
    newModal.classList.remove('show');
    setTimeout(() => {
        newModal.style.display = 'none';
        document.body.style.overflow = '';
    }, 300);
}

// เพิ่มสไตล์ CSS
const newGrammarStyles = `
<style>
.grammar-card {
    background: white;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    cursor: pointer;
    overflow: hidden;
}

.grammar-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.card-header {
    padding: 1.5rem 1.5rem 0;
}

.grammar-badges {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.badge {
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
}

.badge-success { background: #d4edda; color: #155724; }
.badge-primary { background: #cce5ff; color: #004085; }
.badge-warning { background: #fff3cd; color: #856404; }
.badge-difficulty { background: #f8f9fa; color: #6c757d; }

.card-body {
    padding: 1.5rem;
}

.grammar-title {
    font-size: 1.3rem;
    color: #ff6b6b;
    margin-bottom: 0.8rem;
    font-weight: 600;
}

.grammar-pattern {
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 1.1rem;
    color: #333;
    background: #f8f9fa;
    padding: 0.8rem 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    border-left: 4px solid #ff6b6b;
}

.grammar-explanation {
    color: #666;
    line-height: 1.6;
    margin-bottom: 1rem;
}

.example-preview {
    background: #f8f9fa;
    padding: 0.8rem;
    border-radius: 8px;
    margin-bottom: 0.5rem;
}

.example-jp {
    font-family: 'Noto Sans JP', sans-serif;
    color: #333;
    margin-bottom: 0.3rem;
}

.example-th {
    color: #666;
    font-size: 0.9rem;
}

.card-footer {
    padding: 0 1.5rem 1.5rem;
}

.learn-btn {
    background: linear-gradient(135deg, #ff6b6b, #ff8787);
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    width: 100%;
    justify-content: center;
}

.learn-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 107, 107, 0.3);
}

.grammar-list-item {
    display: flex;
    align-items: center;
    background: white;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    margin-bottom: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.grammar-list-item:hover {
    transform: translateX(5px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.list-content {
    flex: 1;
}

.list-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.8rem;
}

.list-actions {
    margin-left: 1rem;
}

.list-actions .learn-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding: 0;
}

.no-results {
    grid-column: 1 / -1;
    text-align: center;
    padding: 3rem;
    color: #666;
}

.no-results i {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #ddd;
}

.grammar-detail .detail-header {
    text-align: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #eee;
}

.grammar-detail h4 {
    color: #ff6b6b;
    margin-bottom: 1rem;
    margin-top: 2rem;
    font-weight: 600;
}

.grammar-detail h4:first-child {
    margin-top: 0;
}

.examples-list .example-item {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    border-left: 4px solid #ff6b6b;
}

.example-romaji {
    color: #888;
    font-style: italic;
    margin: 0.3rem 0;
}

.notes-list {
    padding-left: 1.5rem;
}

.notes-list li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
}

.conversation-items .conversation-item {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 8px;
}

.speaker {
    font-weight: bold;
    color: #ff6b6b;
    min-width: 60px;
}

.conversation-text .jp-text {
    font-family: 'Noto Sans JP', sans-serif;
    margin-bottom: 0.3rem;
}

.conversation-text .romaji-text {
    color: #888;
    font-style: italic;
    margin-bottom: 0.3rem;
}

.conversation-text .th-text {
    color: #666;
}
</style>
`;

// ตรวจสอบว่าหน้าใหม่หรือเก่า
window.addEventListener('DOMContentLoaded', () => {
    // ตรวจสอบว่ามี element ใหม่หรือไม่
    if (document.getElementById('grammar-search') || document.querySelector('.grammar-hero')) {
        // หน้าใหม่
        if (!document.querySelector('#new-grammar-styles')) {
            const styleElement = document.createElement('div');
            styleElement.id = 'new-grammar-styles';
            styleElement.innerHTML = newGrammarStyles;
            document.head.appendChild(styleElement);
        }
        initializeNewGrammarPage();
    } else {
        // หน้าเก่า - ใช้ฟังก์ชันเดิม
        const closeBtn = document.querySelector('.grammar-modal-close');
        if (closeBtn) closeBtn.onclick = closeGrammarModal;
        const modalBg = document.querySelector('.grammar-modal-bg');
        if (modalBg) modalBg.onclick = closeGrammarModal;
        renderGrammarList(grammarData);
    }
});
