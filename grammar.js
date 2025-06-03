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
        pattern: 'คำนาม + から',
        explanation: 'ใช้แสดงจุดเริ่มต้น (จาก...) หรือเหตุผล (เพราะ...)',
        examples: [
            { jp: '学校から帰ります。', romaji: 'Gakkou kara kaerimasu.', th: 'กลับจากโรงเรียน' },
            { jp: '9時から始まります。', romaji: 'Ku-ji kara hajimarimasu.', th: 'เริ่มตั้งแต่ 9 โมง' },
            { jp: '疲れたから休みます。', romaji: 'Tsukareta kara yasumimasu.', th: 'พักผ่อนเพราะเหนื่อย' },
        ]
    },
    {
        id: 'made',
        title: 'คำช่วย まで (made)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'คำนาม + まで',
        explanation: 'ใช้แสดงจุดสิ้นสุด (จนถึง...)',
        examples: [
            { jp: '学校まで歩きます。', romaji: 'Gakkou made arukimasu.', th: 'เดินไปจนถึงโรงเรียน' },
            { jp: '5時まで待ちます。', romaji: 'Go-ji made machimasu.', th: 'รอจนถึง 5 โมง' },
        ]
    },
    {
        id: 'jikan',
        title: 'การบอกเวลา (時間)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'เวลา + に + คำกริยา',
        explanation: 'ใช้ に หลังเวลาเพื่อแสดงเวลาที่เกิดการกระทำ',
        examples: [
            { jp: '7時に起きます。', romaji: 'Shichi-ji ni okimasu.', th: 'ตื่นนอนตอน 7 โมง' },
            { jp: '何時に寝ますか。', romaji: 'Nan-ji ni nemasu ka.', th: 'นอนกี่โมงครับ/คะ' },
        ]
    },
    {
        id: 'youbi',
        title: 'วันในสัปดาห์ (曜日)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'วัน + に + คำกริยา',
        explanation: 'ใช้ に หลังวันในสัปดาห์เพื่อแสดงวันที่มีการกระทำ',
        examples: [
            { jp: '月曜日に学校へ行きます。', romaji: 'Getsuyoubi ni gakkou e ikimasu.', th: 'ไปโรงเรียนวันจันทร์' },
            { jp: '日曜日は休みます。', romaji: 'Nichiyoubi wa yasumimasu.', th: 'พักผ่อนวันอาทิตย์' },
        ]
    },
    {
        id: 'josuushi',
        title: 'คำบอกจำนวน (助数詞)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'ตัวเลข + คำบอกจำนวน + の + คำนาม',
        explanation: 'ใช้คำบอกจำนวนหลังตัวเลขเพื่อบอกจำนวนของสิ่งต่างๆ',
        examples: [
            { jp: '本を3冊買いました。', romaji: 'Hon o san-satsu kaimashita.', th: 'ซื้อหนังสือ 3 เล่ม' },
            { jp: 'りんごを5個食べました。', romaji: 'Ringo o go-ko tabemashita.', th: 'กินแอปเปิ้ล 5 ลูก' },
            { jp: '学生が10人います。', romaji: 'Gakusei ga juu-nin imasu.', th: 'มีนักเรียน 10 คน' },
        ]
    },
    {
        id: 'nai',
        title: 'รูปปฏิเสธ (ない形)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'กริยารูป ない',
        explanation: 'ใช้แสดงการปฏิเสธหรือการไม่ทำ',
        examples: [
            { jp: '本を読みません。', romaji: 'Hon o yomimasen.', th: 'ไม่อ่านหนังสือ' },
            { jp: '学校へ行きません。', romaji: 'Gakkou e ikimasen.', th: 'ไม่ไปโรงเรียน' },
        ]
    },
    {
        id: 'ta',
        title: 'รูปอดีต (た形)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'กริยารูป た',
        explanation: 'ใช้แสดงการกระทำที่เกิดขึ้นในอดีต',
        examples: [
            { jp: '本を読みました。', romaji: 'Hon o yomimashita.', th: 'อ่านหนังสือแล้ว' },
            { jp: '学校へ行きました。', romaji: 'Gakkou e ikimashita.', th: 'ไปโรงเรียนแล้ว' },
        ]
    },
    {
        id: 'i-adj',
        title: 'คำคุณศัพท์ い (i-adjectives)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'คำคุณศัพท์ い + คำนาม',
        explanation: 'คำคุณศัพท์ที่ลงท้ายด้วย い ใช้ขยายคำนามได้โดยตรง',
        examples: [
            { jp: '高い山', romaji: 'Takai yama', th: 'ภูเขาสูง' },
            { jp: '面白い本', romaji: 'Omoshiroi hon', th: 'หนังสือที่น่าสนใจ' },
        ]
    },
    {
        id: 'na-adj',
        title: 'คำคุณศัพท์ な (na-adjectives)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'คำคุณศัพท์ な + な + คำนาม',
        explanation: 'คำคุณศัพท์ที่ลงท้ายด้วย な ต้องเติม な หน้าคำนามที่ขยาย',
        examples: [
            { jp: '静かな部屋', romaji: 'Shizuka na heya', th: 'ห้องที่เงียบ' },
            { jp: 'きれいな花', romaji: 'Kirei na hana', th: 'ดอกไม้ที่สวย' },
        ]
    },
    {
        id: 'suki',
        title: 'การแสดงความชอบ/ไม่ชอบ (好き/嫌い)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'คำนาม + が + 好き/嫌い + です',
        explanation: 'ใช้ が กับคำกริยา 好き (ชอบ) และ 嫌い (ไม่ชอบ)',
        examples: [
            { jp: '私は猫が好きです。', romaji: 'Watashi wa neko ga suki desu.', th: 'ฉันชอบแมว' },
            { jp: '私は魚が嫌いです。', romaji: 'Watashi wa sakana ga kirai desu.', th: 'ฉันไม่ชอบปลา' },
        ]
    },
    {
        id: 'aru',
        title: 'การแสดงการมี/ไม่มี (ある/いる)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'คำนาม + が + ある/いる',
        explanation: 'ある ใช้กับสิ่งของ いる ใช้กับคนและสัตว์',
        examples: [
            { jp: '机の上に本があります。', romaji: 'Tsukue no ue ni hon ga arimasu.', th: 'มีหนังสืออยู่บนโต๊ะ' },
            { jp: '部屋に猫がいます。', romaji: 'Heya ni neko ga imasu.', th: 'มีแมวอยู่ในห้อง' },
        ]
    },
    {
        id: 'wa-particle',
        title: 'は (wa) - ตัวแสดงประธาน',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'N + は + ...',
        explanation: 'ใช้ は (wa) หลังคำนามเพื่อแสดงประธานของประโยค',
        examples: [
            {
                japanese: '私は学生です。',
                romaji: 'Watashi wa gakusei desu.',
                thai: 'ฉันเป็นนักเรียน'
            },
            {
                japanese: 'これは本です。',
                romaji: 'Kore wa hon desu.',
                thai: 'นี่คือหนังสือ'
            }
        ],
        structure: {
            basic: 'N + は + ...',
            examples: [
                '私 + は + 学生です',
                'これ + は + 本です'
            ]
        },
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: 'はじめまして。私は田中です。',
                    romaji: 'Hajimemashite. Watashi wa Tanaka desu.',
                    translation: 'สวัสดีตอนเช้าครับ/ค่ะ ฉันชื่อทานากะ'
                },
                {
                    speaker: 'Bさん',
                    text: 'はじめまして。私は鈴木です。よろしくお願いします。',
                    romaji: 'Hajimemashite. Watashi wa Suzuki desu. Yoroshiku onegaishimasu.',
                    translation: 'สวัสดีครับ/ค่ะ ฉันชื่อซูซูกิ ยินดีที่ได้รู้จักครับ/ค่ะ'
                }
            ]
        }
    },
    {
        id: 'desu-masu',
        title: 'です/ます - รูปสุภาพ',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'N/Na-adj + です\nV-stem + ます',
        explanation: 'ใช้ です (desu) และ ます (masu) เพื่อทำให้ประโยคสุภาพ',
        examples: [
            {
                japanese: '私は学生です。',
                romaji: 'Watashi wa gakusei desu.',
                thai: 'ฉันเป็นนักเรียน'
            },
            {
                japanese: '本を読みます。',
                romaji: 'Hon wo yomimasu.',
                thai: 'ฉันอ่านหนังสือ'
            }
        ],
        structure: {
            basic: 'N/Na-adj + です\nV-stem + ます',
            examples: [
                '学生 + です',
                '読み + ます'
            ]
        },
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: 'おはようございます。',
                    romaji: 'Ohayou gozaimasu.',
                    translation: 'สวัสดีตอนเช้าครับ/ค่ะ'
                },
                {
                    speaker: 'Bさん',
                    text: 'おはようございます。今日はいい天気ですね。',
                    romaji: 'Ohayou gozaimasu. Kyou wa ii tenki desu ne.',
                    translation: 'สวัสดีตอนเช้าครับ/ค่ะ วันนี้อากาศดีจังเลยนะคะ'
                }
            ]
        }
    },
    {
        id: 'ga-particle',
        title: 'が (ga) - ตัวแสดงประธาน',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'N + が + ...',
        explanation: 'ใช้ が (ga) หลังคำนามเพื่อแสดงประธานของประโยค โดยเฉพาะในประโยคที่มีคำกริยาแสดงการมีอยู่',
        examples: [
            {
                japanese: '猫がいます。',
                romaji: 'Neko ga imasu.',
                thai: 'มีแมว'
            },
            {
                japanese: '本があります。',
                romaji: 'Hon ga arimasu.',
                thai: 'มีหนังสือ'
            }
        ],
        structure: {
            basic: 'N + が + あります/います',
            examples: [
                '猫 + が + います',
                '本 + が + あります'
            ]
        },
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'Aさん',
                    text: '部屋に何がありますか。',
                    romaji: 'Heya ni nani ga arimasu ka.',
                    translation: 'ในห้องมีอะไรบ้างคะ'
                },
                {
                    speaker: 'Bさん',
                    text: '机と椅子があります。',
                    romaji: 'Tsukue to isu ga arimasu.',
                    translation: 'มีโต๊ะและเก้าอี้ครับ'
                }
            ]
        }
    },
    {
        id: 'te-form',
        title: 'รูป て (Te-form)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'กริยารูป て',
        explanation: 'รูป て (Te-form) เป็นรูปกริยาที่สำคัญมากในภาษาญี่ปุ่น ใช้เชื่อมประโยค, ขอร้อง, อนุญาต, บอกลำดับเหตุการณ์, หรือใช้ในไวยากรณ์อื่น ๆ เช่น 〜ている (กำลังกระทำ), 〜てもいいです (ขออนุญาต), 〜てから (หลังจาก...) เป็นต้น การผันกริยาเป็นรูป て จะแตกต่างกันตามกลุ่มกริยา เช่น กริยากลุ่ม 1, 2, 3',
        examples: [
            { jp: 'ドアを開けてください。', romaji: 'Doa o akete kudasai.', th: 'กรุณาเปิดประตู' },
            { jp: '朝ごはんを食べて、学校へ行きます。', romaji: 'Asagohan o tabete, gakkou e ikimasu.', th: 'กินข้าวเช้าแล้วไปโรงเรียน' },
            { jp: '友達に会って、話しました。', romaji: 'Tomodachi ni atte, hanashimashita.', th: 'เจอเพื่อนแล้วคุยกัน' },
            { jp: 'ここに座ってもいいですか。', romaji: 'Koko ni suwatte mo ii desu ka.', th: 'ขอนั่งตรงนี้ได้ไหม' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'A',
                    text: 'すみません、窓を開けてください。',
                    romaji: 'Sumimasen, mado o akete kudasai.',
                    translation: 'ขอโทษค่ะ/ครับ กรุณาเปิดหน้าต่างให้หน่อย'
                },
                {
                    speaker: 'B',
                    text: 'はい、いいですよ。',
                    romaji: 'Hai, ii desu yo.',
                    translation: 'ได้ครับ/ค่ะ'
                }
            ]
        },
        note: 'รูป て ยังใช้ในไวยากรณ์อื่น ๆ เช่น 〜ている (กำลังกระทำ), 〜てもいいです (ขออนุญาต), 〜てから (หลังจาก...)',
        commonMistakes: 'มักลืมเปลี่ยนกริยาเป็นรูป て ให้ถูกต้องตามกลุ่มกริยา เช่น いきます → いって ไม่ใช่ いきて',
        compareWith: 'รูป た ใช้กับอดีต, รูป て ใช้เชื่อม/ขอร้อง/ต่อเนื่อง'
    },
    {
        id: 'tai',
        title: 'รูป たい (อยาก...)',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'กริยารูป ますตัด ます + たい',
        explanation: 'ใช้แสดงความต้องการทำสิ่งใดสิ่งหนึ่ง เช่น "อยากกิน", "อยากไป" โดยใช้กับตัวเองหรือถามความต้องการของผู้ฟังอย่างสุภาพ ไม่ใช้กับบุคคลที่สามโดยตรง (ควรใช้ 〜たがっています แทน) สามารถใช้กับคำถามได้ เช่น 何が食べたいですか (อยากกินอะไร?)',
        examples: [
            { jp: '日本へ行きたいです。', romaji: 'Nihon e ikitai desu.', th: 'อยากไปญี่ปุ่น' },
            { jp: '水を飲みたい。', romaji: 'Mizu o nomitai.', th: 'อยากดื่มน้ำ' },
            { jp: '何が食べたいですか。', romaji: 'Nani ga tabetai desu ka.', th: 'อยากกินอะไร?' },
            { jp: '映画を見たいです。', romaji: 'Eiga o mitai desu.', th: 'อยากดูหนัง' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'A',
                    text: '今日は何をしたいですか。',
                    romaji: 'Kyou wa nani o shitai desu ka.',
                    translation: 'วันนี้อยากทำอะไรครับ/คะ'
                },
                {
                    speaker: 'B',
                    text: '映画を見たいです。',
                    romaji: 'Eiga o mitai desu.',
                    translation: 'อยากดูหนังครับ/ค่ะ'
                }
            ]
        },
        note: 'ใช้กับตัวเองหรือถามความต้องการของผู้ฟังอย่างสุภาพ',
        commonMistakes: 'ไม่ใช้กับบุคคลที่สามโดยตรง (ควรใช้ 〜たがっています เช่น 彼は行きたがっています)',
        compareWith: '〜たい (อยาก...) vs 〜たがる (แสดงความต้องการของคนอื่น)'
    },
    {
        id: 'tara',
        title: '〜たら (ถ้า.../เมื่อ...)',
        pattern: 'กริยารูป た + ら',
        explanation: 'ใช้แสดงเงื่อนไขหรือเหตุการณ์ที่เกิดขึ้นแล้วจะ... เช่น "ถ้าฝนตกจะไม่ออกไปข้างนอก" หรือ "ถ้ากลับถึงบ้านแล้ว กรุณาโทรศัพท์มาด้วย" ใช้ได้ทั้งอดีตและอนาคต',
        examples: [
            { jp: '雨が降ったら、出かけません。', romaji: 'Ame ga futtara, dekakemasen.', th: 'ถ้าฝนตกจะไม่ออกไปข้างนอก' },
            { jp: '家に帰ったら、電話してください。', romaji: 'Ie ni kaettara, denwa shite kudasai.', th: 'ถ้ากลับถึงบ้านแล้ว กรุณาโทรศัพท์มาด้วย' },
            { jp: '時間があったら、遊びに来てください。', romaji: 'Jikan ga attara, asobi ni kite kudasai.', th: 'ถ้ามีเวลามาเที่ยวเล่นได้นะ' },
            { jp: 'お金があったら、新しい車を買いたいです。', romaji: 'Okane ga attara, atarashii kuruma o kaitai desu.', th: 'ถ้ามีเงินอยากซื้อรถใหม่' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'A',
                    text: '明日雨が降ったら、どうしますか。',
                    romaji: 'Ashita ame ga futtara, dou shimasu ka.',
                    translation: 'ถ้าพรุ่งนี้ฝนตกจะทำอย่างไรครับ/คะ'
                },
                {
                    speaker: 'B',
                    text: '家にいます。',
                    romaji: 'Ie ni imasu.',
                    translation: 'จะอยู่บ้านครับ/ค่ะ'
                }
            ]
        },
        note: 'ใช้ได้ทั้งอดีตและอนาคต',
        commonMistakes: 'มักสับสนกับ 〜と และ 〜ば ซึ่งมีความหมายและการใช้งานต่างกัน',
        compareWith: '〜たら (เน้นเหตุการณ์เกิดแล้ว) vs 〜と (เกิดแน่นอน) vs 〜ば (เน้นเงื่อนไขทั่วไป)'
    },
    {
        id: 'noni',
        title: '〜のに (ทั้งที่...)',
        pattern: 'ประโยค + のに',
        explanation: 'ใช้แสดงความขัดแย้งหรือผิดคาด เช่น "ทั้งที่...แต่..." มักใช้เมื่อผลลัพธ์ไม่เป็นไปตามที่คาดหวัง เช่น "ทั้งที่อ่านหนังสือแล้ว แต่ข้อสอบก็ยังยาก" หรือ "ทั้งที่ฝนตกก็ยังออกไปข้างนอก"',
        usagePoints: [
            'ใช้ได้ทั้งกับเหตุการณ์ดีและไม่ดี',
            'มักใช้กับประโยคที่ผลลัพธ์ไม่เป็นไปตามที่คาดหวัง',
            'ใช้ได้กับกริยา, คุณศัพท์, คำนาม (ต้องเติม の ก่อน に ในบางกรณี)'
        ],
        examples: [
            { jp: '勉強したのに、テストが難しかった。', romaji: 'Benkyou shita noni, tesuto ga muzukashikatta.', th: 'ทั้งที่อ่านหนังสือแล้ว แต่ข้อสอบก็ยังยาก' },
            { jp: '雨なのに、出かけます。', romaji: 'Ame nanoni, dekakemasu.', th: 'ทั้งที่ฝนตกก็ยังออกไปข้างนอก' },
            { jp: '元気なのに、学校を休みました。', romaji: 'Genki na noni, gakkou o yasumimashita.', th: 'ทั้งที่สบายดีแต่หยุดเรียน' },
            { jp: '安いのに、買いませんでした。', romaji: 'Yasui noni, kaimasen deshita.', th: 'ทั้งที่ราคาถูกแต่ไม่ได้ซื้อ' },
            { jp: 'このケーキ、おいしいのに、どうして食べないの？', romaji: 'Kono keeki, oishii noni, doushite tabenai no?', th: 'เค้กนี้อร่อยทั้งที่... ทำไมไม่กินล่ะ?' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'A',
                    text: 'このケーキ、おいしいのに、どうして食べないの？',
                    romaji: 'Kono keeki, oishii noni, doushite tabenai no?',
                    translation: 'เค้กนี้อร่อยทั้งที่... ทำไมไม่กินล่ะ?'
                },
                {
                    speaker: 'B',
                    text: 'ダイエット中だから。',
                    romaji: 'Daietto chuu dakara.',
                    translation: 'เพราะกำลังลดน้ำหนักอยู่'
                }
            ]
        },
        note: 'ใช้ได้ทั้งกับเหตุการณ์ดีและไม่ดี',
        commonMistakes: 'มักลืมเติม の ก่อน に ในกรณีที่เป็นกริยา/คุณศัพท์ เช่น たのしいに → たのしいのに',
        compareWith: '〜けど (แต่...) ใช้คล้ายกันแต่ความรู้สึกเบากว่า 〜のに',
        specialCases: [
            'ใช้ได้กับทั้งกริยา, คุณศัพท์, คำนาม (ต้องเติม の ก่อน に ในบางกรณี)',
            'ถ้าเป็น い-adj หรือกริยา เติม のに ได้เลย เช่น たのしいのに, したのに',
            'ถ้าเป็น な-adj หรือคำนาม เติม な/なのに เช่น しずかなのに, 雨なのに'
        ]
    },
    {
        id: 'node',
        title: '〜ので (เพราะ...)',
        pattern: 'ประโยค + ので',
        explanation: 'ใช้แสดงเหตุผลอย่างสุภาพ เช่น "เพราะปวดหัวจึงกลับบ้าน" หรือ "เพราะฝนตกจึงไม่ไป" มักใช้ในสถานการณ์ทางการหรือกับผู้ใหญ่',
        examples: [
            { jp: '頭が痛いので、帰ります。', romaji: 'Atama ga itai node, kaerimasu.', th: 'เพราะปวดหัวจึงกลับบ้าน' },
            { jp: '雨なので、行きません。', romaji: 'Ame nanode, ikimasen.', th: 'เพราะฝนตกจึงไม่ไป' },
            { jp: '忙しいので、手伝えません。', romaji: 'Isogashii node, tetsudaemasen.', th: 'เพราะยุ่งจึงช่วยไม่ได้' },
            { jp: '子どもなので、分かりません。', romaji: 'Kodomo nanode, wakarimasen.', th: 'เพราะเป็นเด็กจึงไม่เข้าใจ' }
        ],
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'A',
                    text: 'どうして来なかったんですか。',
                    romaji: 'Doushite konakatta n desu ka.',
                    translation: 'ทำไมถึงไม่มาเหรอครับ/คะ'
                },
                {
                    speaker: 'B',
                    text: '用事があったので、来られませんでした。',
                    romaji: 'Youji ga atta node, koraremasen deshita.',
                    translation: 'เพราะมีธุระเลยมาไม่ได้ครับ/ค่ะ'
                }
            ]
        },
        note: 'สุภาพกว่า から และนิยมใช้ในสถานการณ์ทางการหรือกับผู้ใหญ่',
        commonMistakes: 'มักสับสนกับ から ซึ่งใช้ได้ทั่วไปแต่ไม่สุภาพเท่า ので',
        compareWith: '〜ので (สุภาพ) vs 〜から (ทั่วไป)'
    },
    {
        id: 'wa-desu',
        title: 'N は N です',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'N1 は N2 です / N1 は N2 ではありません',
        structureDiagram: `
            <table class="grammar-diagram">
                <tr><td>N1</td><td>は</td><td>N2</td><td>です</td></tr>
                <tr><td></td><td></td><td></td><td>ではありません</td></tr>
            </table>
        `,
        explanation: 'ใช้บอกว่า A คือ B หรือปฏิเสธว่า A ไม่ใช่ B เช่น "ฉันเป็นนักเรียน", "คุณทานากะไม่ใช่นักเรียน"',
        usagePoints: [
            '「は」ออกเสียงว่า "วะ" ใช้ชี้หัวข้อประโยค',
            '「が」ใช้ชี้ประธานเฉพาะเจาะจงหรือเน้น',
            '「さん」ใช้เติมหลังชื่อคนเพื่อความสุภาพ ไม่ใช้กับชื่อตัวเอง'
        ],
        examples: [
            { jp: '田中さんは学生です。', romaji: 'Tanaka-san wa gakusei desu.', th: 'คุณทานากะเป็นนักเรียน' },
            { jp: '田中さんは学生ではありません。', romaji: 'Tanaka-san wa gakusei dewa arimasen.', th: 'คุณทานากะไม่ใช่นักเรียน' },
            { jp: '私も田中です。', romaji: 'Watashi mo Tanaka desu.', th: 'ฉันก็ชื่อทานากะ' },
            { jp: '父は先生です。', romaji: 'Chichi wa sensei desu.', th: 'พ่อ(ฉัน)เป็นอาจารย์' },
            { jp: '父は先生ではありません。', romaji: 'Chichi wa sensei dewa arimasen.', th: 'พ่อ(ฉัน)ไม่ใช่อาจารย์' },
            { jp: '学校は休みです。', romaji: 'Gakkou wa yasumi desu.', th: 'โรงเรียนหยุด' },
            { jp: '山田さんがリーダーです。', romaji: 'Yamada-san ga riidaa desu.', th: 'คุณยามาดะคือหัวหน้า' }
        ],
        extraExamples: [
            { jp: '田中さんは私です。', romaji: 'Tanaka-san wa watashi desu.', th: 'ฉันคือทานากะ (พูดถึงตัวเอง)' },
            { jp: '山田さんがリーダーです。', romaji: 'Yamada-san ga riidaa desu.', th: 'คุณยามาดะคือหัวหน้า' }
        ],
        specialCases: [
            'กรณีที่ใช้ 「N1 は N2 です」 จะมีความหมายที่ต้องระวัง เช่น N1 เป็นตัวเอง N2 เป็นชื่อคนอื่น (แปลว่า "ฉันคือ...")',
            'ไม่ใช้ さん กับชื่อตัวเอง'
        ],
        note: 'แสดงความรู้สึกประหลาดใจหรือเน้นด้วยการเปลี่ยน intonation',
        commonMistakes: 'มักใช้ さん กับชื่อตัวเอง ซึ่งไม่ถูกต้อง',
        compareWith: 'โครงสร้างนี้เป็นพื้นฐานของประโยคบอกเล่าในภาษาญี่ปุ่น',
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'A',
                    text: 'はじめまして。私は田中です。',
                    romaji: 'Hajimemashite. Watashi wa Tanaka desu.',
                    translation: 'สวัสดีตอนเช้าครับ/ค่ะ ฉันชื่อทานากะ'
                },
                {
                    speaker: 'B',
                    text: 'はじめまして。私は鈴木です。',
                    romaji: 'Hajimemashite. Watashi wa Suzuki desu.',
                    translation: 'สวัสดีครับ/ค่ะ ฉันชื่อซูซูกิ'
                }
            ]
        }
    },
    {
        id: 'koto-ga-dekiru',
        title: '〜ことができる (สามารถ...)',
        level: 'N4',
        difficulty: 'ปานกลาง',
        pattern: 'V dictionary form + ことができる',
        structureDiagram: `
            <table class="grammar-diagram">
                <tr><td>V (辞書形)</td><td>ことができる</td></tr>
                <tr><td>読む</td><td>ことができる</td></tr>
            </table>
        `,
        explanation: 'ใช้บอกความสามารถในการทำบางสิ่ง เช่น "สามารถอ่านได้" หรือ "สามารถพูดได้"',
        usagePoints: [
            'ใช้กับกริยารูป辞書形 (รูปดิก)',
            'ことができる ผันเป็น できます (สุภาพ) หรือ できません (ปฏิเสธ)',
            'ใช้กับความสามารถทั่วไป ไม่ใช่โอกาสเฉพาะหน้า'
        ],
        examples: [
            { jp: '日本語を話すことができます。', romaji: 'Nihongo o hanasu koto ga dekimasu.', th: 'สามารถพูดภาษาญี่ปุ่นได้' },
            { jp: '車を運転することができます。', romaji: 'Kuruma o unten suru koto ga dekimasu.', th: 'สามารถขับรถได้' }
        ],
        extraExamples: [
            { jp: 'ピアノを弾くことができますか。', romaji: 'Piano o hiku koto ga dekimasu ka.', th: 'เล่นเปียโนได้ไหม' }
        ],
        specialCases: [
            'ถ้ากริยาเป็น できます อยู่แล้ว ไม่ต้องเติม ことが',
            'ใช้ 〜られる ได้เช่นกันแต่เป็นภาษาพูดมากกว่า'
        ],
        note: 'ใช้กับความสามารถ ไม่ใช่โอกาสเฉพาะหน้า',
        commonMistakes: 'มักใช้ผิดกับ 〜られる ซึ่งเป็นรูป potential เช่น 読める',
        compareWith: '〜ことができる (ทางการ) vs 〜られる (กันเอง)',
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'A',
                    text: '英語を話すことができますか。',
                    romaji: 'Eigo o hanasu koto ga dekimasu ka.',
                    translation: 'พูดภาษาอังกฤษได้ไหมครับ/คะ'
                },
                {
                    speaker: 'B',
                    text: 'はい、できます。',
                    romaji: 'Hai, dekimasu.',
                    translation: 'ได้ครับ/ค่ะ'
                }
            ]
        }
    },
    {
        id: 'souda',
        title: '〜そうだ (ได้ยินมาว่า...)',
        level: 'N3',
        difficulty: 'ยาก',
        pattern: 'V/Adj + そうだ',
        structureDiagram: `
            <table class="grammar-diagram">
                <tr><td>V/Adj</td><td>そうだ</td></tr>
                <tr><td>雨が降る</td><td>そうだ</td></tr>
            </table>
        `,
        explanation: 'ใช้ถ่ายทอดข้อมูลที่ได้ยินมาจากผู้อื่น เช่น "ได้ยินว่าฝนจะตก" หรือ "ได้ยินว่าเขาแต่งงานแล้ว"',
        usagePoints: [
            'ใช้กับกริยา/คุณศัพท์ plain form',
            'แปลว่า "ได้ยินมาว่า..."',
            'ต่างจาก 〜そう (ดูเหมือน...) ที่ใช้กับการคาดเดาจากสิ่งที่เห็น'
        ],
        examples: [
            { jp: '田中さんは結婚したそうです。', romaji: 'Tanaka-san wa kekkon shita sou desu.', th: 'ได้ยินว่าคุณทานากะแต่งงานแล้ว' },
            { jp: '明日は雨が降るそうです。', romaji: 'Ashita wa ame ga furu sou desu.', th: 'ได้ยินว่าพรุ่งนี้ฝนจะตก' }
        ],
        extraExamples: [
            { jp: '彼は会社を辞めたそうです。', romaji: 'Kare wa kaisha o yameta sou desu.', th: 'ได้ยินว่าเขาลาออกจากบริษัท' }
        ],
        specialCases: [
            'ถ้าใช้ 〜そう (เฉยๆ) จะหมายถึง "ดูเหมือน..."',
            '〜そうだ (ได้ยินมาว่า) ต้องมีแหล่งที่มาเสมอ'
        ],
        note: 'ใช้ถ่ายทอดข้อมูลที่ได้ยินมา ไม่ใช่การคาดเดาเอง',
        commonMistakes: 'มักสับสนกับ 〜そう (ดูเหมือน...)',
        compareWith: '〜そうだ (ได้ยินมา) vs 〜そう (ดูเหมือน)',
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'A',
                    text: '田中さんは会社を辞めたそうですよ。',
                    romaji: 'Tanaka-san wa kaisha o yameta sou desu yo.',
                    translation: 'ได้ยินว่าคุณทานากะลาออกจากบริษัทแล้วนะ'
                },
                {
                    speaker: 'B',
                    text: 'そうですか。',
                    romaji: 'Sou desu ka.',
                    translation: 'เหรอครับ/คะ'
                }
            ]
        }
    },
    // --- เพิ่มไวยากรณ์ระดับ N4 (ปานกลาง) และ N3 (ยาก) ---
    {
        id: 'te-iru',
        title: '〜ている (กำลังกระทำ/สภาพต่อเนื่อง)',
        level: 'N4',
        difficulty: 'ปานกลาง',
        pattern: 'V て + いる',
        explanation: 'ใช้แสดงการกระทำที่กำลังเกิดขึ้น หรือสภาพที่ต่อเนื่อง เช่น "กำลังกิน", "อาศัยอยู่"',
        examples: [
            { jp: '今、朝ごはんを食べています。', romaji: 'Ima, asagohan o tabete imasu.', th: 'ตอนนี้กำลังกินข้าวเช้า' },
            { jp: '東京に住んでいます。', romaji: 'Toukyou ni sunde imasu.', th: 'อาศัยอยู่ที่โตเกียว' }
        ]
    },
    {
        id: 'tari-tari',
        title: '〜たり〜たりする (ทำ...บ้าง...บ้าง)',
        level: 'N4',
        difficulty: 'ปานกลาง',
        pattern: 'V た + り V た + り する',
        explanation: 'ใช้ยกตัวอย่างการกระทำหลายอย่าง เช่น "อ่านหนังสือบ้าง ดูทีวีบ้าง"',
        examples: [
            { jp: '日曜日は本を読んだり、映画を見たりします。', romaji: 'Nichiyoubi wa hon o yondari, eiga o mitari shimasu.', th: 'วันอาทิตย์อ่านหนังสือบ้าง ดูหนังบ้าง' }
        ]
    },
    {
        id: 'nagara',
        title: '〜ながら (ขณะทำ...)',
        level: 'N4',
        difficulty: 'ปานกลาง',
        pattern: 'V (รูป masu ตัด masu) + ながら + V2',
        explanation: 'ใช้แสดงการทำสองอย่างพร้อมกัน เช่น "ฟังเพลงไปด้วย อ่านหนังสือไปด้วย"',
        examples: [
            { jp: '音楽を聞きながら勉強します。', romaji: 'Ongaku o kiki nagara benkyou shimasu.', th: 'อ่านหนังสือไปด้วยฟังเพลงไปด้วย' }
        ]
    },
    {
        id: 'souda-guess',
        title: '〜そうだ (ดูเหมือนว่า...)',
        level: 'N3',
        difficulty: 'ยาก',
        pattern: 'V/Adj (ตัด ます/い/な) + そうだ',
        explanation: 'ใช้แสดงการคาดเดาจากสิ่งที่เห็น เช่น "ดูเหมือนจะฝนตก", "ดูเหมือนจะอร่อย"',
        examples: [
            { jp: '雨が降りそうです。', romaji: 'Ame ga furi sou desu.', th: 'ดูเหมือนฝนจะตก' },
            { jp: 'このケーキはおいしそうです。', romaji: 'Kono keeki wa oishisou desu.', th: 'เค้กนี้ดูน่าอร่อย' }
        ]
    },
    {
        id: 'rashii',
        title: '〜らしい (เหมือนว่า...)',
        level: 'N3',
        difficulty: 'ยาก',
        pattern: 'N/Adj/V + らしい',
        explanation: 'ใช้แสดงข้อมูลที่ได้ยินมา หรือคาดเดา เช่น "เหมือนจะเป็นผู้ชาย", "เหมือนจะฝนตก"',
        examples: [
            { jp: '彼は学生らしいです。', romaji: 'Kare wa gakusei rashii desu.', th: 'ดูเหมือนว่าเขาเป็นนักเรียน' },
            { jp: '明日は雨らしい。', romaji: 'Ashita wa ame rashii.', th: 'เหมือนว่าพรุ่งนี้ฝนจะตก' }
        ]
    },
    {
        id: 'youda',
        title: '〜ようだ (เหมือนกับว่า...)',
        level: 'N3',
        difficulty: 'ยาก',
        pattern: 'N/Adj/V + ようだ',
        explanation: 'ใช้เปรียบเทียบหรือคาดเดา เช่น "เหมือนกับว่า..."',
        examples: [
            { jp: '彼は先生のようです。', romaji: 'Kare wa sensei no you desu.', th: 'เขาเหมือนกับเป็นครู' },
            { jp: '外は雨のようです。', romaji: 'Soto wa ame no you desu.', th: 'ข้างนอกเหมือนฝนจะตก' }
        ]
    },
    {
        id: 'teshimau',
        title: '〜てしまう (เผลอ/ทำเสร็จ)',
        level: 'N4',
        difficulty: 'ปานกลาง',
        pattern: 'V て + しまう',
        explanation: 'ใช้แสดงการกระทำที่เสร็จสิ้น หรือเผลอทำ เช่น "กินหมดแล้ว", "เผลอลืม"',
        examples: [
            { jp: '全部食べてしまいました。', romaji: 'Zenbu tabete shimaimashita.', th: 'กินหมดแล้ว' },
            { jp: '財布を忘れてしまいました。', romaji: 'Saifu o wasurete shimaimashita.', th: 'เผลอลืมกระเป๋าสตางค์' }
        ]
    },
    {
        id: 'ba',
        title: '〜ば (ถ้า...)',
        level: 'N4',
        difficulty: 'ปานกลาง',
        pattern: 'V (รูปเงื่อนไข) + ば',
        explanation: 'ใช้แสดงเงื่อนไข เช่น "ถ้าทำ...จะ..."',
        examples: [
            { jp: 'お金があれば、旅行します。', romaji: 'Okane ga areba, ryokou shimasu.', th: 'ถ้ามีเงินจะไปเที่ยว' }
        ]
    },
    {
        id: 'to',
        title: '〜と (ถ้า...จะ...)',
        level: 'N4',
        difficulty: 'ปานกลาง',
        pattern: 'V (รูปธรรมดา) + と',
        explanation: 'ใช้แสดงเงื่อนไขที่เกิดขึ้นแน่นอน เช่น "ถ้ากดปุ่มนี้ เครื่องจะหยุด"',
        examples: [
            { jp: 'このボタンを押すと、機械が止まります。', romaji: 'Kono botan o osu to, kikai ga tomarimasu.', th: 'ถ้ากดปุ่มนี้ เครื่องจะหยุด' }
        ]
    },
    {
        id: 'ta-hou-ga-ii',
        title: '〜たほうがいい (ควร...)',
        level: 'N4',
        difficulty: 'ปานกลาง',
        pattern: 'V た + ほうがいい',
        explanation: 'ใช้แนะนำหรือบอกว่าควรทำอะไร',
        examples: [
            { jp: '早く寝たほうがいいです。', romaji: 'Hayaku neta hou ga ii desu.', th: 'ควรนอนเร็ว' }
        ]
    },
    {
        id: 'nakereba-naranai',
        title: '〜なければならない (จำเป็นต้อง...)',
        level: 'N4',
        difficulty: 'ปานกลาง',
        pattern: 'V (รูปない) + なければならない',
        explanation: 'ใช้แสดงความจำเป็นต้องทำ',
        examples: [
            { jp: '毎日勉強しなければなりません。', romaji: 'Mainichi benkyou shinakereba narimasen.', th: 'จำเป็นต้องเรียนทุกวัน' }
        ]
    },
    {
        id: 'nakute-mo-ii',
        title: '〜なくてもいい (ไม่ต้อง...)',
        level: 'N4',
        difficulty: 'ปานกลาง',
        pattern: 'V (รูปない) + なくてもいい',
        explanation: 'ใช้บอกว่าไม่จำเป็นต้องทำ',
        examples: [
            { jp: '全部食べなくてもいいです。', romaji: 'Zenbu tabenakute mo ii desu.', th: 'ไม่ต้องกินหมดก็ได้' }
        ]
    },
    {
        id: 'koto-ni-suru',
        title: '〜ことにする (ตัดสินใจ...)',
        level: 'N4',
        difficulty: 'ปานกลาง',
        pattern: 'V (รูป dictionary) + ことにする',
        explanation: 'ใช้บอกว่าตัดสินใจจะทำอะไร',
        examples: [
            { jp: '毎日運動することにしました。', romaji: 'Mainichi undou suru koto ni shimashita.', th: 'ตัดสินใจจะออกกำลังกายทุกวัน' }
        ]
    },
    {
        id: 'koto-ga-aru',
        title: '〜ことがある (เคย...)',
        level: 'N4',
        difficulty: 'ปานกลาง',
        pattern: 'V た + ことがある',
        explanation: 'ใช้บอกประสบการณ์ว่าเคยทำสิ่งนั้น',
        examples: [
            { jp: '日本へ行ったことがあります。', romaji: 'Nihon e itta koto ga arimasu.', th: 'เคยไปญี่ปุ่น' }
        ]
    },
    {
        id: 'aida-ni',
        title: '〜間に (ระหว่างที่...)',
        level: 'N4',
        difficulty: 'ปานกลาง',
        pattern: 'N の/ V ている + 間に',
        explanation: 'ใช้บอกเหตุการณ์ที่เกิดขึ้นระหว่างที่อีกเหตุการณ์หนึ่งกำลังดำเนินอยู่',
        examples: [
            { jp: '昼寝している間に電話がありました。', romaji: 'Hirune shite iru aida ni denwa ga arimashita.', th: 'มีโทรศัพท์เข้าระหว่างที่กำลังงีบหลับ' }
        ]
    },
    {
        id: 'you-ni',
        title: '〜ように (เพื่อให้...)',
        level: 'N4',
        difficulty: 'ปานกลาง',
        pattern: 'V (dictionary/ない) + ように',
        explanation: 'ใช้แสดงเป้าหมายหรือวัตถุประสงค์ เช่น "เพื่อให้..."',
        examples: [
            { jp: '忘れないようにメモします。', romaji: 'Wasurenai you ni memo shimasu.', th: 'จดบันทึกไว้เพื่อจะได้ไม่ลืม' }
        ]
    },
    {
        id: 'no-particle',
        title: 'の (no) - คำช่วยแสดงความเป็นเจ้าของ',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'N1 + の + N2',
        explanation: 'ใช้แสดงความเป็นเจ้าของหรือความสัมพันธ์ระหว่างคำนาม เช่น "หนังสือของฉัน", "นักเรียนของโรงเรียนนี้"',
        examples: [
            { jp: '私の本', romaji: 'Watashi no hon', th: 'หนังสือของฉัน' },
            { jp: '学校の学生', romaji: 'Gakkou no gakusei', th: 'นักเรียนของโรงเรียนนี้' }
        ],
        structure: {
            basic: 'N1 + の + N2',
            examples: [
                '私 + の + 本',
                '学校 + の + 学生'
            ]
        },
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'A',
                    text: 'これは誰の本ですか。',
                    romaji: 'Kore wa dare no hon desu ka.',
                    translation: 'นี่คือหนังสือของใครครับ/คะ'
                },
                {
                    speaker: 'B',
                    text: '私の本です。',
                    romaji: 'Watashi no hon desu.',
                    translation: 'เป็นหนังสือของฉันครับ/ค่ะ'
                }
            ]
        }
    },
    {
        id: 'ga-particle',
        title: 'が (ga) - คำช่วยแสดงประธาน',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'N + が + ...',
        explanation: 'ใช้แสดงประธานของประโยค โดยเฉพาะในประโยคที่มีคำกริยาแสดงการมีอยู่ เช่น "มีแมว", "มีหนังสือ"',
        examples: [
            { jp: '猫がいます。', romaji: 'Neko ga imasu.', th: 'มีแมว' },
            { jp: '本があります。', romaji: 'Hon ga arimasu.', th: 'มีหนังสือ' }
        ],
        structure: {
            basic: 'N + が + あります/います',
            examples: [
                '猫 + が + います',
                '本 + が + あります'
            ]
        },
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'A',
                    text: '部屋に何がありますか。',
                    romaji: 'Heya ni nani ga arimasu ka.',
                    translation: 'ในห้องมีอะไรบ้างคะ'
                },
                {
                    speaker: 'B',
                    text: '机と椅子があります。',
                    romaji: 'Tsukue to isu ga arimasu.',
                    translation: 'มีโต๊ะและเก้าอี้ครับ'
                }
            ]
        }
    },
    {
        id: 'o-particle',
        title: 'を (o) - คำช่วยแสดงกรรม',
        level: 'N5',
        difficulty: 'ง่าย',
        pattern: 'N + を + V',
        explanation: 'ใช้แสดงกรรมของกริยา เช่น "กินข้าว", "อ่านหนังสือ"',
        examples: [
            { jp: 'ご飯を食べます。', romaji: 'Gohan o tabemasu.', th: 'กินข้าว' },
            { jp: '本を読みます。', romaji: 'Hon o yomimasu.', th: 'อ่านหนังสือ' }
        ],
        structure: {
            basic: 'N + を + V',
            examples: [
                'ご飯 + を + 食べます',
                '本 + を + 読みます'
            ]
        },
        conversation: {
            title: 'ตัวอย่างบทสนทนา',
            items: [
                {
                    speaker: 'A',
                    text: '何を食べますか。',
                    romaji: 'Nani o tabemasu ka.',
                    translation: 'จะกินอะไรครับ/คะ'
                },
                {
                    speaker: 'B',
                    text: 'ラーメンを食べます。',
                    romaji: 'Ramen o tabemasu.',
                    translation: 'จะกินราเม็งครับ/ค่ะ'
                }
            ]
        }
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
