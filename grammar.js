// ข้อมูลไวยากรณ์ (ตัวอย่าง N5)
const grammarData = [
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
    }
];

let currentGrammarList = grammarData; // สำหรับ search/filter

// --- ฟังก์ชันช่วยสำหรับการ sort/compare ---
const levelOrder = { 'N5': 1, 'N4': 2, 'N3': 3, 'N2': 4, 'N1': 5 };
const difficultyOrder = { 'ง่าย': 1, 'ปานกลาง': 2, 'ยาก': 3 };

function sortGrammarList(list, sortBy = 'default', sortDir = 'asc') {
    return [...list].sort((a, b) => {
        // Default: เรียง N5->N4->N3 และง่าย->ยาก
        if (sortBy === 'default') {
            const lvA = levelOrder[a.level] || 99;
            const lvB = levelOrder[b.level] || 99;
            if (lvA !== lvB) return lvA - lvB;
            const diffA = difficultyOrder[a.difficulty] || 99;
            const diffB = difficultyOrder[b.difficulty] || 99;
            return diffA - diffB;
        }
        if (sortBy === 'level') {
            const lvA = levelOrder[a.level] || 99;
            const lvB = levelOrder[b.level] || 99;
            return sortDir === 'asc' ? lvA - lvB : lvB - lvA;
        }
        if (sortBy === 'difficulty') {
            const diffA = difficultyOrder[a.difficulty] || 99;
            const diffB = difficultyOrder[b.difficulty] || 99;
            return sortDir === 'asc' ? diffA - diffB : diffB - diffA;
        }
        return 0;
    });
}

function filterGrammarList(list, levelFilter, diffFilter) {
    return list.filter(g => {
        let ok = true;
        if (levelFilter && levelFilter !== 'all') ok = ok && g.level === levelFilter;
        if (diffFilter && diffFilter !== 'all') ok = ok && g.difficulty === diffFilter;
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
        <label>ระดับ:
            <select class="grammar-filter-level">
                <option value="all">ทั้งหมด</option>
                <option value="N5">N5</option>
                <option value="N4">N4</option>
                <option value="N3">N3</option>
            </select>
        </label>
        <label>ความยาก:
            <select class="grammar-filter-difficulty">
                <option value="all">ทั้งหมด</option>
                <option value="ง่าย">ง่าย</option>
                <option value="ปานกลาง">ปานกลาง</option>
                <option value="ยาก">ยาก</option>
            </select>
        </label>
        <label>เรียง:
            <select class="grammar-sort-by">
                <option value="default">ง่าย → ยาก</option>
                <option value="level-asc">N5 → N3</option>
                <option value="level-desc">N3 → N5</option>
                <option value="difficulty-asc">ง่าย → ยาก</option>
                <option value="difficulty-desc">ยาก → ง่าย</option>
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
        if (grammar.level) {
            const levelBadge = document.createElement('span');
            levelBadge.className = 'grammar-badge grammar-badge-level';
            levelBadge.textContent = grammar.level;
            badgeDiv.appendChild(levelBadge);
        }
        if (grammar.difficulty) {
            const diffBadge = document.createElement('span');
            diffBadge.className = 'grammar-badge grammar-badge-difficulty';
            diffBadge.textContent = grammar.difficulty;
            badgeDiv.appendChild(diffBadge);
        }
        topicElement.appendChild(badgeDiv);
        listDiv.appendChild(topicElement);
    });
    grammarContent.appendChild(listDiv);
}

// --- ฟังก์ชันโหลดเริ่มต้นและ event filter/sort ---
window.addEventListener('DOMContentLoaded', () => {
    renderGrammarFilterBar();
    let levelFilter = 'all';
    let diffFilter = 'all';
    let sortBy = 'default';
    let sortDir = 'asc';
    function updateList() {
        let filtered = filterGrammarList(grammarData, levelFilter, diffFilter);
        if (sortBy === 'level-asc') {
            filtered = sortGrammarList(filtered, 'level', 'asc');
        } else if (sortBy === 'level-desc') {
            filtered = sortGrammarList(filtered, 'level', 'desc');
        } else if (sortBy === 'difficulty-asc') {
            filtered = sortGrammarList(filtered, 'difficulty', 'asc');
        } else if (sortBy === 'difficulty-desc') {
            filtered = sortGrammarList(filtered, 'difficulty', 'desc');
        } else {
            filtered = sortGrammarList(filtered, 'default', 'asc');
        }
        renderGrammarList(filtered);
    }
    document.querySelector('.grammar-filter-level').onchange = e => {
        levelFilter = e.target.value;
        updateList();
    };
    document.querySelector('.grammar-filter-difficulty').onchange = e => {
        diffFilter = e.target.value;
        updateList();
    };
    document.querySelector('.grammar-sort-by').onchange = e => {
        sortBy = e.target.value;
        updateList();
    };
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
    const modalBody = modal.querySelector('.grammar-modal-body');
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

window.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.querySelector('.grammar-modal-close');
    if (closeBtn) closeBtn.onclick = closeGrammarModal;
    const modalBg = document.querySelector('.grammar-modal-bg');
    if (modalBg) modalBg.onclick = closeGrammarModal;
    renderGrammarList(grammarData);
});
