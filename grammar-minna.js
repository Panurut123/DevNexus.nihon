// ข้อมูลไวยากรณ์ Minna no Nihongo
const minnaGrammarData = [
    // ========== Minna no Nihongo เล่ม 1 บทที่ 1 ==========
    {
        id: 'wa-desu',
        title: '～は～です',
        pattern: '～は～です。',
        minnaBook: 1,
        minnaChapter: 1,
        romaji: '~wa ~desu',
        explanation: 'ใช้แสดงการระบุตัวตน คุณสมบัติ หรือสถานภาพของคนหรือสิ่งของ คล้ายกับ "เป็น/คือ" ในภาษาไทย เป็นรูปประโยคพื้นฐานที่สุดในภาษาญี่ปุ่น',
        usagePoints: [
            'は (wa) เป็นคำช่วยบอกหัวข้อ (topic marker)',
            'です (desu) เป็นคำกริยาช่วยแสดงความสุภาพ',
            'ใช้กับคำนามและคำคุณศัพท์ な (na-adjective)',
            'ใช้ในการแนะนำตัว บอกอาชีพ สัญชาติ'
        ],
        examples: [
            { jp: '私は学生です。', romaji: 'Watashi wa gakusei desu.', th: 'ฉันเป็นนักเรียน' },
            { jp: '田中さんは日本人です。', romaji: 'Tanaka-san wa nihonjin desu.', th: 'คุณทานากะเป็นคนญี่ปุ่น' },
            { jp: 'これは本です。', romaji: 'Kore wa hon desu.', th: 'นี่คือหนังสือ' },
            { jp: '私は会社員です。', romaji: 'Watashi wa kaishain desu.', th: 'ฉันเป็นพนักงานบริษัท' }
        ],
        conversation: {
            title: 'บทสนทนา: การแนะนำตัว',
            items: [
                {
                    speaker: 'A',
                    text: 'はじめまして。私は田中です。',
                    romaji: 'Hajimemashite. Watashi wa Tanaka desu.',
                    translation: 'ยินดีที่ได้รู้จักครับ ผมชื่อทานากะ'
                },
                {
                    speaker: 'B',
                    text: 'はじめまして。私はリサです。アメリカ人です。',
                    romaji: 'Hajimemashite. Watashi wa Lisa desu. Amerikajin desu.',
                    translation: 'ยินดีที่ได้รู้จักค่ะ ฉันชื่อลิซ่า เป็นคนอเมริกา'
                },
                {
                    speaker: 'A',
                    text: 'どうぞよろしくお願いします。',
                    romaji: 'Douzo yoroshiku onegaishimasu.',
                    translation: 'ยินดีที่ได้รู้จักครับ'
                }
            ]
        },
        notes: [
            'は ออกเสียงว่า "วะ" เมื่อใช้เป็นคำช่วย',
            'です เป็นรูปสุภาพ ใช้ในสถานการณ์ทางการ',
            'ในภาษาพูดไม่เป็นทางการ อาจใช้ だ (da) แทน です',
            'สามารถละประธานได้ถ้าเข้าใจจากบริบท'
        ],
        commonMistakes: [
            'ใช้ です กับคำคุณศัพท์ い โดยตรง (ผิด: 高いです → ถูก: 高いです แต่ไม่ใช่ 高いですです)',
            'ลืมใช้ です ในประโยคบอกเล่า',
            'ออกเสียง は เป็น "ฮะ" แทนที่จะเป็น "วะ"'
        ]
    },
    {
        id: 'wa-ja-arimasen',
        title: '～は～じゃありません',
        pattern: '～は～じゃありません。',
        minnaBook: 1,
        minnaChapter: 1,
        romaji: '~wa ~ja arimasen',
        explanation: 'รูปปฏิเสธของ です ใช้แสดงว่า "ไม่เป็น/ไม่ใช่" เป็นรูปย่อที่ใช้ในภาษาพูด รูปเต็มคือ ではありません',
        usagePoints: [
            'じゃありません เป็นรูปย่อของ ではありません',
            'ใช้ปฏิเสธคำนามและคำคุณศัพท์ な',
            'เป็นรูปสุภาพ ใช้ได้ในสถานการณ์ทั่วไป',
            'ในภาษาเขียนหรือสถานการณ์ที่เป็นทางการมาก ใช้ ではありません'
        ],
        examples: [
            { jp: '私は学生じゃありません。', romaji: 'Watashi wa gakusei ja arimasen.', th: 'ฉันไม่ใช่นักเรียน' },
            { jp: 'これは本じゃありません。', romaji: 'Kore wa hon ja arimasen.', th: 'นี่ไม่ใช่หนังสือ' },
            { jp: '彼は日本人じゃありません。', romaji: 'Kare wa nihonjin ja arimasen.', th: 'เขาไม่ใช่คนญี่ปุ่น' },
            { jp: 'それは私のじゃありません。', romaji: 'Sore wa watashi no ja arimasen.', th: 'นั่นไม่ใช่ของฉัน' }
        ],
        conversation: {
            title: 'บทสนทนา: การปฏิเสธ',
            items: [
                {
                    speaker: 'A',
                    text: 'すみません、これは田中さんの本ですか。',
                    romaji: 'Sumimasen, kore wa Tanaka-san no hon desu ka.',
                    translation: 'ขอโทษครับ นี่หนังสือของคุณทานากะใช่ไหม'
                },
                {
                    speaker: 'B',
                    text: 'いいえ、それは私の本じゃありません。',
                    romaji: 'Iie, sore wa watashi no hon ja arimasen.',
                    translation: 'ไม่ใช่ครับ นั่นไม่ใช่หนังสือของผม'
                },
                {
                    speaker: 'A',
                    text: 'そうですか。すみません。',
                    romaji: 'Sou desu ka. Sumimasen.',
                    translation: 'อ๋อ งั้นเหรอครับ ขอโทษครับ'
                }
            ]
        },
        notes: [
            'じゃ เป็นการย่อมาจาก では',
            'ในภาษาพูดทั่วไป ใช้ じゃありません',
            'ในการเขียนหรือพูดที่เป็นทางการมาก ใช้ ではありません',
            'รูปไม่สุภาพคือ じゃない หรือ ではない'
        ],
        commonMistakes: [
            'ใช้กับคำคุณศัพท์ い (ผิด: 高いじゃありません → ถูก: 高くありません)',
            'ใช้ じゃありません ในการเขียนที่เป็นทางการมาก',
            'ลืมใช้ いいえ เมื่อตอบปฏิเสธ'
        ]
    },
    {
        id: 'ka-question',
        title: '～は～ですか',
        pattern: '～は～ですか。',
        minnaBook: 1,
        minnaChapter: 1,
        romaji: '~wa ~desu ka',
        explanation: 'ใช้ถามคำถามแบบ Yes/No โดยการเติม か ท้ายประโยค ไม่ต้องเปลี่ยนลำดับคำเหมือนภาษาอังกฤษ',
        usagePoints: [
            'เติม か ท้ายประโยคบอกเล่าเพื่อเปลี่ยนเป็นคำถาม',
            'ไม่ต้องเปลี่ยนลำดับคำในประโยค',
            'ตอบด้วย はい (ใช่) หรือ いいえ (ไม่ใช่)',
            'น้ำเสียงขึ้นท้ายเมื่อถาม'
        ],
        examples: [
            { jp: 'あなたは学生ですか。', romaji: 'Anata wa gakusei desu ka.', th: 'คุณเป็นนักเรียนใช่ไหม' },
            { jp: 'これは辞書ですか。', romaji: 'Kore wa jisho desu ka.', th: 'นี่คือพจนานุกรมใช่ไหม' },
            { jp: '田中さんは日本人ですか。', romaji: 'Tanaka-san wa nihonjin desu ka.', th: 'คุณทานากะเป็นคนญี่ปุ่นใช่ไหม' },
            { jp: 'そちらは会社ですか。', romaji: 'Sochira wa kaisha desu ka.', th: 'ที่นั่นเป็นบริษัทใช่ไหม' }
        ],
        conversation: {
            title: 'บทสนทนา: การถามและตอบ',
            items: [
                {
                    speaker: 'A',
                    text: 'すみません、あなたは田中さんですか。',
                    romaji: 'Sumimasen, anata wa Tanaka-san desu ka.',
                    translation: 'ขอโทษครับ คุณคือคุณทานากะใช่ไหม'
                },
                {
                    speaker: 'B',
                    text: 'はい、私は田中です。',
                    romaji: 'Hai, watashi wa Tanaka desu.',
                    translation: 'ใช่ครับ ผมคือทานากะ'
                },
                {
                    speaker: 'A',
                    text: 'あなたは会社員ですか。',
                    romaji: 'Anata wa kaishain desu ka.',
                    translation: 'คุณเป็นพนักงานบริษัทใช่ไหม'
                },
                {
                    speaker: 'B',
                    text: 'いいえ、私は大学の先生です。',
                    romaji: 'Iie, watashi wa daigaku no sensei desu.',
                    translation: 'ไม่ใช่ครับ ผมเป็นอาจารย์มหาวิทยาลัย'
                }
            ]
        },
        notes: [
            'か ใช้ได้กับทุกประเภทของประโยค',
            'ในภาษาพูดไม่เป็นทางการ อาจละ か ได้ แต่ต้องใช้น้ำเสียงขึ้น',
            'はい ไม่ได้แปลว่า "ใช่" เสมอไป แต่หมายถึง "ถูกต้องตามที่คุณพูด"',
            'いいえ หมายถึง "ไม่ถูกต้องตามที่คุณพูด"'
        ],
        commonMistakes: [
            'เปลี่ยนลำดับคำเหมือนภาษาอังกฤษ',
            'ใช้ はい/いいえ ผิดในคำถามปฏิเสธ',
            'ลืมใส่ か ในภาษาเขียน'
        ]
    },
    {
        id: 'mo-also',
        title: '～も',
        pattern: '～も～です。',
        minnaBook: 1,
        minnaChapter: 1,
        romaji: '~mo ~desu',
        explanation: 'ใช้แสดงความหมาย "ก็...เหมือนกัน" หรือ "...ด้วย" ใช้แทน は เมื่อต้องการบอกว่าสิ่งที่พูดถึงมีคุณสมบัติเหมือนกับที่กล่าวมาก่อน',
        usagePoints: [
            'も แทนที่ は ในประโยค',
            'ใช้เมื่อต้องการบอกว่า "...ก็เช่นกัน"',
            'สามารถใช้ も หลายครั้งในประโยคเดียวกันเพื่อเน้น',
            'ใช้ได้ทั้งประโยคบอกเล่าและปฏิเสธ'
        ],
        examples: [
            { jp: '私は学生です。田中さんも学生です。', romaji: 'Watashi wa gakusei desu. Tanaka-san mo gakusei desu.', th: 'ฉันเป็นนักเรียน คุณทานากะก็เป็นนักเรียนเช่นกัน' },
            { jp: 'これも本です。', romaji: 'Kore mo hon desu.', th: 'นี่ก็เป็นหนังสือเช่นกัน' },
            { jp: '私も日本人じゃありません。', romaji: 'Watashi mo nihonjin ja arimasen.', th: 'ฉันก็ไม่ใช่คนญี่ปุ่นเช่นกัน' },
            { jp: '山田さんも鈴木さんも会社員です。', romaji: 'Yamada-san mo Suzuki-san mo kaishain desu.', th: 'ทั้งคุณยามาดะและคุณซูซูกิเป็นพนักงานบริษัท' }
        ],
        conversation: {
            title: 'บทสนทนา: การใช้ も',
            items: [
                {
                    speaker: 'A',
                    text: '私はタイ人です。',
                    romaji: 'Watashi wa Taijin desu.',
                    translation: 'ฉันเป็นคนไทย'
                },
                {
                    speaker: 'B',
                    text: 'あ、私もタイ人です。',
                    romaji: 'A, watashi mo Taijin desu.',
                    translation: 'อ้อ ฉันก็เป็นคนไทยเช่นกัน'
                },
                {
                    speaker: 'C',
                    text: '私もタイ人です。みんなタイ人ですね。',
                    romaji: 'Watashi mo Taijin desu. Minna Taijin desu ne.',
                    translation: 'ฉันก็เป็นคนไทยเช่นกัน ทุกคนเป็นคนไทยนะ'
                }
            ]
        },
        notes: [
            'も ใช้แทน は, を, が แต่ใช้ร่วมกับคำช่วยอื่นๆ เช่น にも, でも',
            'เมื่อใช้ も หลายครั้ง แปลว่า "ทั้ง...และ..."',
            'ในประโยคปฏิเสธ も แปลว่า "...ก็ไม่เช่นกัน"',
            'ไม่ใช้ も กับคำถาม'
        ],
        commonMistakes: [
            'ใช้ も พร้อมกับ は (ผิด: 私もは → ถูก: 私も)',
            'ใช้ も ในคำถาม (ผิด: あなたも学生ですか → ถูก: あなたは学生ですか)',
            'ลืมว่า も แทนที่คำช่วยบางตัว'
        ]
    },
    {
        id: 'no-possessive',
        title: '～の',
        pattern: '～の～',
        minnaBook: 1,
        minnaChapter: 1,
        romaji: '~no~',
        explanation: 'ใช้แสดงความเป็นเจ้าของ หรือความสัมพันธ์ระหว่างคำนาม คล้ายกับ "ของ" ในภาษาไทย หรือ "\'s" ในภาษาอังกฤษ',
        usagePoints: [
            'เชื่อมคำนาม 2 คำเข้าด้วยกัน',
            'คำนามแรก + の + คำนามที่สอง',
            'แสดงความเป็นเจ้าของ ความสัมพันธ์ หรือคุณสมบัติ',
            'สามารถใช้ の ซ้อนกันได้หลายชั้น'
        ],
        examples: [
            { jp: '私の本', romaji: 'watashi no hon', th: 'หนังสือของฉัน' },
            { jp: '田中さんの会社', romaji: 'Tanaka-san no kaisha', th: 'บริษัทของคุณทานากะ' },
            { jp: '日本の大学', romaji: 'Nihon no daigaku', th: 'มหาวิทยาลัยของญี่ปุ่น' },
            { jp: '友達の友達の車', romaji: 'tomodachi no tomodachi no kuruma', th: 'รถของเพื่อนของเพื่อน' }
        ],
        conversation: {
            title: 'บทสนทนา: การใช้ の',
            items: [
                {
                    speaker: 'A',
                    text: 'これは誰の本ですか。',
                    romaji: 'Kore wa dare no hon desu ka.',
                    translation: 'นี่หนังสือของใครครับ'
                },
                {
                    speaker: 'B',
                    text: 'それは私の本です。',
                    romaji: 'Sore wa watashi no hon desu.',
                    translation: 'นั่นคือหนังสือของผมครับ'
                },
                {
                    speaker: 'A',
                    text: 'この会社の社長は誰ですか。',
                    romaji: 'Kono kaisha no shachou wa dare desu ka.',
                    translation: 'ประธานของบริษัทนี้คือใครครับ'
                },
                {
                    speaker: 'B',
                    text: '山田さんです。',
                    romaji: 'Yamada-san desu.',
                    translation: 'คุณยามาดะครับ'
                }
            ]
        },
        notes: [
            'の สามารถใช้ซ้อนกันได้ แต่ไม่ควรเกิน 3 ชั้น',
            'บางครั้งใช้ の แทนคำนามที่เข้าใจจากบริบท',
            'ใช้ の ในการบอกตำแหน่ง เช่น 机の上 (บนโต๊ะ)',
            'ใช้ の ในการอธิบายคุณสมบัติ เช่น 日本語の本 (หนังสือภาษาญี่ปุ่น)'
        ],
        commonMistakes: [
            'ใช้ の ซ้อนกันมากเกินไป ทำให้ประโยคอ่านยาก',
            'ลืมใส่ の ระหว่างคำนาม',
            'ใช้ の กับคำที่ไม่ใช่คำนาม'
        ]
    },

    // ========== Minna no Nihongo เล่ม 1 บทที่ 2 ==========
    {
        id: 'kore-sore-are',
        title: 'これ／それ／あれ',
        pattern: 'これ／それ／あれ は ～です。',
        minnaBook: 1,
        minnaChapter: 2,
        romaji: 'kore/sore/are',
        explanation: 'คำสรรพนามชี้สิ่งของ: これ (สิ่งนี้-ใกล้ผู้พูด), それ (สิ่งนั้น-ใกล้ผู้ฟัง), あれ (สิ่งโน้น-ไกลทั้งสองฝ่าย)',
        usagePoints: [
            'これ = สิ่งนี้ (ใกล้ผู้พูด)',
            'それ = สิ่งนั้น (ใกล้ผู้ฟัง)',
            'あれ = สิ่งโน้น (ไกลทั้งสองฝ่าย)',
            'ใช้แทนสิ่งของที่ไม่ใช่คน'
        ],
        examples: [
            { jp: 'これは本です。', romaji: 'Kore wa hon desu.', th: 'นี่คือหนังสือ' },
            { jp: 'それは何ですか。', romaji: 'Sore wa nan desu ka.', th: 'นั่นคืออะไร' },
            { jp: 'あれは富士山です。', romaji: 'Are wa Fujisan desu.', th: 'โน่นคือภูเขาฟูจิ' }
        ],
        conversation: {
            title: 'บทสนทนา: การชี้สิ่งของ',
            items: [
                {
                    speaker: 'A',
                    text: 'これは何ですか。',
                    romaji: 'Kore wa nan desu ka.',
                    translation: 'นี่คืออะไร'
                },
                {
                    speaker: 'B',
                    text: 'それは辞書です。',
                    romaji: 'Sore wa jisho desu.',
                    translation: 'นั่นคือพจนานุกรม'
                }
            ]
        },
        notes: [
            'ระยะห่างเป็นสิ่งสำคัญในการเลือกใช้',
            'それ ใช้ได้ทั้งกับของที่อยู่ใกล้ผู้ฟัง และสิ่งที่เพิ่งพูดถึง',
            'ใช้ แค่กับสิ่งของ ไม่ใช่คน',
            'สามารถใช้เป็นประธานได้'
        ],
        commonMistakes: [
            'ใช้กับคน (ต้องใช้ この人/その人/あの人)',
            'สับสนระยะห่าง'
        ],
        compareWith: 'これ/それ/あれ (สิ่งของ) vs この/その/あの (ขยายคำนาม)'
    },
    {
        id: 'kono-sono-ano',
        title: 'この／その／あの + คำนาม',
        pattern: 'この／その／あの + คำนาม',
        minnaBook: 1,
        minnaChapter: 2,
        romaji: 'kono/sono/ano',
        explanation: 'คำคุณศัพท์ชี้เฉพาะ: この (...นี้), その (... นั้น), あの (... โน้น) ใช้ขยายคำนามเสมอ',
        usagePoints: [
            'この = ...นี้ (ใกล้ผู้พูด)',
            'その = ...นั้น (ใกล้ผู้ฟัง)',
            'あの = ...โน้น (ไกลทั้งสองฝ่าย)',
            'ต้องตามด้วยคำนามเสมอ'
        ],
        examples: [
            { jp: 'この本は面白いです。', romaji: 'Kono hon wa omoshiroi desu.', th: 'หนังสือเล่มนี้น่าสนใจ' },
            { jp: 'その鞄は高いですか。', romaji: 'Sono kaban wa takai desu ka.', th: 'กระเป๋าใบนั้นแพงไหม' },
            { jp: 'あの建物は学校です。', romaji: 'Ano tatemono wa gakkou desu.', th: 'อาคารหลังโน้นคือโรงเรียน' }
        ],
        conversation: {
            title: 'บทสนทนา: การขยายคำนาม',
            items: [
                {
                    speaker: 'A',
                    text: 'この鞄はいくらですか。',
                    romaji: 'Kono kaban wa ikura desu ka.',
                    translation: 'กระเป๋าใบนี้ราคาเท่าไหร่'
                },
                {
                    speaker: 'B',
                    text: 'その鞄は五千円です。',
                    romaji: 'Sono kaban wa gosen en desu.',
                    translation: 'กระเป๋าใบนั้น 5,000 เยน'
                }
            ]
        },
        notes: [
            'この/その/あの ต้องตามด้วยคำนามเสมอ',
            'ความแตกต่างจาก これ/それ/あれ คือใช้ขยายคำนาม',
            'ไม่สามารถใช้เดี่ยวๆ ได้',
            'ระบบระยะห่างเหมือนกัน'
        ],
        commonMistakes: [
            'ใช้เดี่ยวๆ โดยไม่มีคำนาม',
            'สับสนระยะห่าง'
        ],
        compareWith: 'この/その/あの (ขยาย) vs これ/それ/あれ (แทนสิ่งของ)'
    },
    {
        id: 'ka-ka-or',
        title: '～か、～か',
        pattern: '～か、～か',
        minnaBook: 1,
        minnaChapter: 2,
        romaji: '~ka, ~ka',
        explanation: 'ใช้เชื่อมทางเลือก แปลว่า "...หรือ..." ใช้ในคำถามให้เลือก',
        usagePoints: [
            'เชื่อมทางเลือกในคำถาม',
            'ใช้ か ท้ายแต่ละตัวเลือก',
            'ตอบด้วยการเลือกตัวเลือก'
        ],
        examples: [
            { jp: 'これは本ですか、雑誌ですか。', romaji: 'Kore wa hon desu ka, zasshi desu ka.', th: 'นี่คือหนังสือหรือนิตยสาร' },
            { jp: 'コーヒーか、紅茶か、どちらがいいですか。', romaji: 'Koohii ka, koucha ka, dochira ga ii desu ka.', th: 'กาแฟหรือชา อันไหนดี' },
            { jp: '今日ですか、明日ですか。', romaji: 'Kyou desu ka, ashita desu ka.', th: 'วันนี้หรือพรุ่งนี้' }
        ],
        conversation: {
            title: 'บทสนทนา: การเลือก',
            items: [
                {
                    speaker: 'A',
                    text: 'お茶かコーヒーか、どちらがいいですか。',
                    romaji: 'Ocha ka koohii ka, dochira ga ii desu ka.',
                    translation: 'ชาหรือกาแฟ อันไหนดี'
                },
                {
                    speaker: 'B',
                    text: 'コーヒーをお願いします。',
                    romaji: 'Koohii o onegaishimasu.',
                    translation: 'ขอกาแฟครับ'
                }
            ]
        },
        notes: [
            'ใช้ถามให้เลือกระหว่างตัวเลือก',
            'ตอบโดยเลือกตัวเลือกใดตัวเลือกหนึ่ง ไม่ใช้ はい/いいえ',
            'ใช้ どちら หรือ どれ ถามเลือก',
            'สามารถใช้กับหลายตัวเลือก'
        ],
        commonMistakes: [
            'ตอบด้วย はい/いいえ',
            'ลืมใส่ か ท้ายตัวเลือก'
        ],
        compareWith: 'か (ทางเลือก) vs と (และ) vs や (ตัวอย่าง)'
    },
    {
        id: 'no-pronoun',
        title: '～の (อีกครั้ง)',
        pattern: '～の',
        minnaBook: 1,
        minnaChapter: 2,
        romaji: '~no',
        explanation: 'ใช้ の แทนคำนามที่เคยกล่าวถึงแล้ว เพื่อหลีกเลี่ยงการพูดซ้ำ คล้าย "อันของ..." ในภาษาไทย',
        usagePoints: [
            'แทนคำนามที่เคยกล่าวถึง',
            'หลีกเลี่ยงการพูดซ้ำ',
            'ต้องมีบริบทชัดเจน',
            'ใช้หลัง possessive'
        ],
        examples: [
            { jp: 'これは私の本です。それは田中さんのです。', romaji: 'Kore wa watashi no hon desu. Sore wa Tanaka-san no desu.', th: 'นี่คือหนังสือของฉัน นั่นคือของคุณทานากะ' },
            { jp: 'この鞄は誰のですか。', romaji: 'Kono kaban wa dare no desu ka.', th: 'กระเป๋าใบนี้ของใคร' },
            { jp: '新しいのを買いました。', romaji: 'Atarashii no o kaimashita.', th: 'ซื้ออันใหม่' }
        ],
        conversation: {
            title: 'บทสนทนา: การใช้ の แทนคำนาม',
            items: [
                {
                    speaker: 'A',
                    text: 'いい辞書ですね。',
                    romaji: 'Ii jisho desu ne.',
                    translation: 'พจนานุกรมดีนะ'
                },
                {
                    speaker: 'B',
                    text: 'ありがとうございます。新しいのです。',
                    romaji: 'Arigatou gozaimasu. Atarashii no desu.',
                    translation: 'ขอบคุณครับ เป็นอันใหม่'
                }
            ]
        },
        notes: [
            'ใช้ の แทนคำนามที่ชัดเจนจากบริบท',
            'ต้องมีบริบทที่ผู้ฟังเข้าใจ',
            'ป้องกันการพูดซ้ำ',
            'ใช้ได้กับทุกคำนาม'
        ],
        commonMistakes: [
            'ใช้เมื่อไม่มีบริบท',
            'ลืมใช้เมื่อควรใช้'
        ],
        compareWith: 'の (แทนคำนาม) vs の (ครอบครอง)'
    },

    // ========== Minna no Nihongo เล่ม 1 บทที่ 3 ==========
    {
        id: 'koko-soko-asoko',
        title: 'ここ／そこ／あそこ／どこ',
        pattern: 'ここ／そこ／あそこ は ～です。',
        minnaBook: 1,
        minnaChapter: 3,
        romaji: 'koko/soko/asoko/doko',
        explanation: 'คำบอกสถานที่: ここ (ที่นี่), そこ (ที่นั่น), あそこ (ที่โน่น), どこ (ที่ไหน)',
        usagePoints: [
            'ここ = ที่นี่ (ใกล้ผู้พูด)',
            'そこ = ที่นั่น (ใกล้ผู้ฟัง)',
            'あそこ = ที่โน่น (ไกลทั้งสองฝ่าย)',
            'どこ = ที่ไหน (คำถาม)'
        ],
        examples: [
            { jp: 'ここは教室です。', romaji: 'Koko wa kyoushitsu desu.', th: 'ที่นี่คือห้องเรียน' },
            { jp: 'トイレはそこです。', romaji: 'Toire wa soko desu.', th: 'ห้องน้ำอยู่ที่นั่น' },
            { jp: '郵便局はどこですか。', romaji: 'Yuubinkyoku wa doko desu ka.', th: 'ที่ทำการไปรษณีย์อยู่ที่ไหน' },
            { jp: 'あそこは図書館です。', romaji: 'Asoko wa toshokan desu.', th: 'ที่โน่นคือห้องสมุด' }
        ],
        conversation: {
            title: 'บทสนทนา: การถามหาสถานที่',
            items: [
                {
                    speaker: 'A',
                    text: 'すみません、銀行はどこですか。',
                    romaji: 'Sumimasen, ginkou wa doko desu ka.',
                    translation: 'ขอโทษครับ ธนาคารอยู่ที่ไหน'
                },
                {
                    speaker: 'B',
                    text: 'あそこです。郵便局の隣です。',
                    romaji: 'Asoko desu. Yuubinkyoku no tonari desu.',
                    translation: 'ที่โน่นครับ ข้างไปรษณีย์'
                }
            ]
        },
        notes: [
            'ใช้ระบบเดียวกับ これ/それ/あれ แต่ใช้กับสถานที่',
            'こちら/そちら/あちら เป็นรูปสุภาพกว่า',
            'ใช้ถาม: どこですか',
            'บอกตำแหน่ง: ～にあります'
        ],
        commonMistakes: [
            'สับสนระยะห่างของสถานที่',
            'ใช้กับสิ่งของแทนสถานที่'
        ],
        compareWith: 'ここ/そこ/あそこ (สถานที่) vs これ/それ/あれ (สิ่งของ)'
    },
    {
        id: 'wa-doko-desu-ka',
        title: '～はどこですか',
        pattern: '～はどこですか。',
        minnaBook: 1,
        minnaChapter: 3,
        romaji: '~wa doko desu ka',
        explanation: 'ใช้ถามหาสถานที่ตั้งของสิ่งต่างๆ แปลว่า "...อยู่ที่ไหน"',
        usagePoints: [
            'ถามหาตำแหน่งของสิ่งต่างๆ',
            'ใช้ は เป็นหัวข้อ',
            'ใช้ どこ (ที่ไหน)',
            'ใช้ すみません นำหน้าอย่างสุภาพ'
        ],
        examples: [
            { jp: '図書館はどこですか。', romaji: 'Toshokan wa doko desu ka.', th: 'ห้องสมุดอยู่ที่ไหน' },
            { jp: '私の鞄はどこですか。', romaji: 'Watashi no kaban wa doko desu ka.', th: 'กระเป๋าของฉันอยู่ที่ไหน' },
            { jp: '田中さんはどこですか。', romaji: 'Tanaka-san wa doko desu ka.', th: 'คุณทานากะอยู่ที่ไหน' }
        ],
        conversation: {
            title: 'บทสนทนา: การถามหาที่ตั้ง',
            items: [
                {
                    speaker: 'A',
                    text: 'すみません、駅はどこですか。',
                    romaji: 'Sumimasen, eki wa doko desu ka.',
                    translation: 'ขอโทษครับ สถานีอยู่ที่ไหน'
                },
                {
                    speaker: 'B',
                    text: 'まっすぐ行って、信号を右に曲がってください。',
                    romaji: 'Massugu itte, shingou o migi ni magatte kudasai.',
                    translation: 'ตรงไปแล้วเลี้ยวขวาที่ไฟแดง'
                }
            ]
        },
        notes: [
            'ใช้ すみません นำหน้าเมื่อถามคนแปลกหน้า',
            'คำตอบมักใช้ ここ/そこ/あそこ หรือบอกตำแหน่ง',
            'สามารถใช้กับคนหรือสิ่งของได้',
            'รูปสุภาพของการถาม'
        ],
        commonMistakes: [
            'ลืมใช้ は ก่อน どこ',
            'ใช้ を แทน は'
        ],
        compareWith: 'どこですか (ที่ไหน) vs なんですか (อะไร) vs だれですか (ใคร)'
    },
    {
        id: 'o-kudasai',
        title: '～をください',
        pattern: '～をください。',
        minnaBook: 1,
        minnaChapter: 3,
        romaji: '~o kudasai',
        explanation: 'ใช้ขอสิ่งของ แปลว่า "ขอ...หน่อย" เป็นสำนวนสุภาพ',
        usagePoints: [
            'ใช้ขอสิ่งของอย่างสุภาพ',
            'ใช้ を ก่อน ください',
            'ใช้ในร้านค้า ร้านอาหาร',
            'แสดงความต้องการสิ่งของ'
        ],
        examples: [
            { jp: 'これをください。', romaji: 'Kore o kudasai.', th: 'ขอสิ่งนี้หน่อย' },
            { jp: '水をください。', romaji: 'Mizu o kudasai.', th: 'ขอน้ำหน่อย' },
            { jp: 'メニューをください。', romaji: 'Menyuu o kudasai.', th: 'ขอเมนูหน่อย' },
            { jp: 'コーヒーを二つください。', romaji: 'Koohii o futatsu kudasai.', th: 'ขอกาแฟสองแก้ว' }
        ],
        conversation: {
            title: 'บทสนทนา: การซื้อของ',
            items: [
                {
                    speaker: 'A',
                    text: 'いらっしゃいませ。',
                    romaji: 'Irasshaimase.',
                    translation: 'ยินดีต้อนรับครับ'
                },
                {
                    speaker: 'B',
                    text: 'このケーキをください。',
                    romaji: 'Kono keeki o kudasai.',
                    translation: 'ขอเค้กนี้'
                },
                {
                    speaker: 'A',
                    text: 'はい、ありがとうございます。',
                    romaji: 'Hai, arigatou gozaimasu.',
                    translation: 'ครับ ขอบคุณครับ'
                }
            ]
        },
        notes: [
            'ใช้ を ก่อน ください',
            'ใช้เมื่อซื้อของหรือขอสิ่งของ',
            'สำนวนสุภาพ',
            'ใช้ได้กับจำนวน: ～を○○ください'
        ],
        commonMistakes: [
            'ลืมใส่ を',
            'ใช้ が แทน を'
        ],
        compareWith: 'をください (ขอสิ่งของ) vs を見せてください (ขอดู)'
    },
    {
        id: 'o-misete-kudasai',
        title: '～を見せてください',
        pattern: '～を見せてください。',
        minnaBook: 1,
        minnaChapter: 3,
        romaji: '~o misete kudasai',
        explanation: 'ใช้ขอดูสิ่งของ แปลว่า "ขอดู...หน่อย" ใช้เมื่อต้องการดูของก่อนซื้อ',
        usagePoints: [
            'ขอดูสิ่งของก่อนซื้อ',
            'ใช้ て形 + ください',
            'ใช้ในร้านค้า',
            'แสดงความต้องการดูสินค้า'
        ],
        examples: [
            { jp: 'それを見せてください。', romaji: 'Sore o misete kudasai.', th: 'ขอดูสิ่งนั้นหน่อย' },
            { jp: 'この時計を見せてください。', romaji: 'Kono tokei o misete kudasai.', th: 'ขอดูนาฬิกาเรือนนี้หน่อย' },
            { jp: 'あの靴を見せてください。', romaji: 'Ano kutsu o misete kudasai.', th: 'ขอดูรองเท้าคู่โน้นหน่อย' }
        ],
        conversation: {
            title: 'บทสนทนา: การขอดูสินค้า',
            items: [
                {
                    speaker: 'A',
                    text: 'この鞄を見せてください。',
                    romaji: 'Kono kaban o misete kudasai.',
                    translation: 'ขอดูกระเป๋าใบนี้หน่อย'
                },
                {
                    speaker: 'B',
                    text: 'はい、どうぞ。',
                    romaji: 'Hai, douzo.',
                    translation: 'ครับ เชิญครับ'
                },
                {
                    speaker: 'A',
                    text: 'いくらですか。',
                    romaji: 'Ikura desu ka.',
                    translation: 'ราคาเท่าไหร่'
                }
            ]
        },
        notes: [
            'て形 + ください เป็นรูปขอร้องสุภาพ',
            'ใช้ในร้านค้าเมื่อต้องการดูสินค้า',
            'มีการผัน: 見る → 見せて',
            'ขั้นตอนก่อนการซื้อ'
        ],
        commonMistakes: [
            'ผัน て形 ผิด',
            'ลืมใส่ を'
        ],
        compareWith: 'を見せてください (ขอดู) vs をください (ขอซื้อ)'
    },

    // ========== Minna no Nihongo เล่ม 1 บทที่ 4 ==========
    {
        "id": "to-and",
        "title": "～と～",
        "pattern": "～と～",
        "minnaBook": 1,
        "minnaChapter": 4,
        "romaji": "~to~",
        "explanation": "ใช้เชื่อมคำนามแบบระบุแน่นอน แปลว่า \"และ\" ใช้เมื่อระบุสิ่งของทั้งหมดที่มี",
        "usagePoints": [
            "ใช้เชื่อมคำนามที่ระบุชัดเจน",
            "ระบุสิ่งของทั้งหมด ไม่มีสิ่งอื่นนอกเหนือจากที่กล่าว",
            "ไม่ใช้กับประโยคหรือกริยา"
        ],
        "examples": [
            { "jp": "ペンと紙があります。", "romaji": "Pen to kami ga arimasu.", "th": "มีปากกาและกระดาษ" },
            { "jp": "私と友達がパーティーに行きます。", "romaji": "Watashi to tomodachi ga paatii ni ikimasu.", "th": "ฉันและเพื่อนไปงานปาร์ตี้" },
            { "jp": "コーヒーと紅茶を飲みます。", "romaji": "Koohii to koucha o nomimasu.", "th": "ดื่มกาแฟและชา" }
        ],
        "conversation": {
            "title": "บทสนทนา: การเชื่อมคำนาม",
            "items": [
                {
                    "speaker": "A",
                    "text": "何を買いに行きますか。",
                    "romaji": "Nani o kai ni ikimasu ka.",
                    "translation": "จะไปซื้ออะไร"
                },
                {
                    "speaker": "B",
                    "text": "りんごとバナナを買いに行きます。",
                    "romaji": "Ringo to banana o kai ni ikimasu.",
                    "translation": "จะไปซื้อแอปเปิ้ลและกล้วย"
                }
            ]
        },
        "notes": [
            "と = และ (ใช้กับคำนามเท่านั้น)",
            "ใช้เมื่อระบุสิ่งของทั้งหมดที่เกี่ยวข้อง",
            "ไม่ใช้กับการยกตัวอย่าง"
        ],
        "commonMistakes": [
            "ใช้ と เชื่อมประโยคหรือกริยา (ต้องใช้ て แทน)",
            "สับสนกับ や ซึ่งใช้สำหรับการยกตัวอย่าง"
        ],
        "compareWith": "と (และทั้งหมด) vs や (และบางส่วน) vs も (ด้วย)"
    },
    {
        "id": "ya-nado",
        "title": "～や～など",
        "pattern": "～や～など",
        "minnaBook": 1,
        "minnaChapter": 4,
        "romaji": "~ya~nado",
        "explanation": "ใช้ยกตัวอย่างบางส่วนจากสิ่งที่มีทั้งหมด や = และ (ยกตัวอย่าง), など = เป็นต้น",
        "usagePoints": [
            "ใช้เชื่อมคำนามเพื่อยกตัวอย่าง",
            "など ใช้ท้ายเพื่อบอกว่ามีสิ่งอื่นนอกจากที่กล่าวถึง",
            "แสดงถึงความไม่เจาะจงทั้งหมด"
        ],
        "examples": [
            { "jp": "本や雑誌を読みます。", "romaji": "Hon ya zasshi o yomimasu.", "th": "อ่านหนังสือและนิตยสาร (เป็นต้น)" },
            { "jp": "りんごやバナナなどを買いました。", "romaji": "Ringo ya banana nado o kaimashita.", "th": "ซื้อแอปเปิ้ลและกล้วยเป็นต้น" },
            { "jp": "魚や野菜などを食べます。", "romaji": "Sakana ya yasai nado o tabemasu.", "th": "กินปลาและผักเป็นต้น" }
        ],
        "conversation": {
            "title": "บทสนทนา: การยกตัวอย่าง",
            "items": [
                {
                    "speaker": "A",
                    "text": "スーパーで何を買いますか。",
                    "romaji": "Suupaa de nani o kaimasu ka.",
                    "translation": "ซื้ออะไรที่ซูเปอร์มาร์เก็ต"
                },
                {
                    "speaker": "B",
                    "text": "肉や魚などを買います。",
                    "romaji": "Niku ya sakana nado o kaimasu.",
                    "translation": "ซื้อเนื้อและปลาเป็นต้น"
                }
            ]
        },
        "notes": [
            "や = และ (ใช้ยกตัวอย่างบางส่วน)",
            "など = และอื่นๆ, เป็นต้น (เพิ่มความหมายไม่ครบถ้วน)",
            "ใช้เมื่อไม่ต้องการระบุทุกอย่าง"
        ],
        "commonMistakes": [
            "ใช้ や แทน と เมื่อต้องการระบุทุกอย่าง",
            "ลืมใส่ など เมื่อต้องการบอกว่ามีสิ่งอื่นอีก"
        ],
        "compareWith": "や (ยกตัวอย่าง) vs と (ทั้งหมด) vs に (รายการ)"
    },
    {
        "id": "ne-yo",
        "title": "～ね／～よ",
        "pattern": "文＋ね／よ",
        "minnaBook": 1,
        "minnaChapter": 4,
        "romaji": "~ne / ~yo",
        "explanation": "คำลงท้ายประโยค: ね = ใช่มั้ย/นะ (ขอการยืนยันหรือเน้นความเห็นด้วย), よ = นะ/สิ (ให้ข้อมูลใหม่หรือเน้น)",
        "usagePoints": [
            "ね ใช้เมื่อคาดว่าผู้ฟังจะเห็นด้วยหรือเพื่อขอการยืนยัน",
            "よ ใช้เมื่อให้ข้อมูลที่ผู้ฟังอาจไม่รู้หรือเพื่อเน้น",
            "ใช้ในภาษาพูด สร้างความเป็นกันเอง"
        ],
        "examples": [
            { "jp": "いい天気ですね。", "romaji": "Ii tenki desu ne.", "th": "อากาศดีนะ (ใช่มั้ย)" },
            { "jp": "これは私の本ですよ。", "romaji": "Kore wa watashi no hon desu yo.", "th": "นี่หนังสือของฉันนะ" },
            { "jp": "もう12時ですよ。", "romaji": "Mou juuni-ji desu yo.", "th": "เที่ยงแล้วนะ" }
        ],
        "conversation": {
            "title": "บทสนทนา: การใช้ ね และ よ",
            "items": [
                {
                    "speaker": "A",
                    "text": "今日、暑いですね。",
                    "romaji": "Kyou, atsui desu ne.",
                    "translation": "วันนี้อากาศร้อนนะ (ใช่มั้ย)"
                },
                {
                    "speaker": "B",
                    "text": "うん、冷たいジュースが飲みたいよ。",
                    "romaji": "Un, tsumetai juusu ga nomitai yo.",
                    "translation": "ใช่ อยากดื่มน้ำผลไม้เย็นๆ นะ"
                }
            ]
        },
        "notes": [
            "ね = ขอความเห็นด้วยหรือยืนยัน",
            "よ = เน้นหรือให้ข้อมูลใหม่",
            "ใช้ในบริบทไม่เป็นทางการ"
        ],
        "commonMistakes": [
            "ใช้ ね เมื่อผู้ฟังไม่น่าจะเห็นด้วย",
            "ใช้ よ ในบริบทที่ผู้ฟังรู้ข้อมูลอยู่แล้ว"
        ],
        "compareWith": "ね (ขอความเห็นด้วย) vs よ (ให้ข้อมูล) vs か (คำถาม)"
    },
    {
        "id": "e-ikimasu",
        "title": "～へ行きます／来ます／帰ります",
        "pattern": "場所＋へ＋行きます／来ます／帰ります",
        "minnaBook": 1,
        "minnaChapter": 5,
        "romaji": "~e ikimasu / kimasu / kaerimasu",
        "explanation": "ใช้บอกการเคลื่อนที่ไปยังสถานที่ へ = ไปทาง/มาทาง, 行く = ไป, 来る = มา, 帰る = กลับ",
        "usagePoints": [
            "へ ใช้ระบุทิศทางการเคลื่อนที่",
            "ใช้กับกริยาการเคลื่อนที่ เช่น 行く, 来る, 帰る",
            "สามารถใช้ に แทน へ ได้ในบางกรณี แต่ へ เน้นทิศทาง"
        ],
        "examples": [
            { "jp": "学校へ行きます。", "romaji": "Gakkou e ikimasu.", "th": "ไปโรงเรียน" },
            { "jp": "日本へ来ました。", "romaji": "Nihon e kimashita.", "th": "มาญี่ปุ่น" },
            { "jp": "家へ帰ります。", "romaji": "Ie e kaerimasu.", "th": "กลับบ้าน" }
        ],
        "conversation": {
            "title": "บทสนทนา: การเคลื่อนที่",
            "items": [
                {
                    "speaker": "A",
                    "text": "どこへ行きますか。",
                    "romaji": "Doko e ikimasu ka.",
                    "translation": "จะไปที่ไหน"
                },
                {
                    "speaker": "B",
                    "text": "図書館へ行きます。",
                    "romaji": "Toshokan e ikimasu.",
                    "translation": "ไปห้องสมุด"
                }
            ]
        },
        "notes": [
            "へ ออกเสียง \"เอะ\" เมื่อเป็นคำช่วย",
            "に ใช้เน้นจุดหมายปลายทาง へ เน้นทิศทาง",
            "ใช้กับสถานที่เป็นหลัก"
        ],
        "commonMistakes": [
            "ใช้ へ กับกริยาที่ไม่แสดงการเคลื่อนที่",
            "สับสน へ กับ で (สถานที่ทำกิจกรรม)"
        ],
        "compareWith": "へ (ทิศทาง) vs に (จุดหมาย) vs で (สถานที่ทำกิจกรรม)"
    },
    {
        "id": "de-ikimasu",
        "title": "～で行きます",
        "pattern": "乗り物＋で＋行きます",
        "minnaBook": 1,
        "minnaChapter": 5,
        "romaji": "~de ikimasu",
        "explanation": "ใช้บอกวิธีการเดินทางด้วยพาหนะ で = โดย/ด้วย (พาหนะ)",
        "usagePoints": [
            "ใช้กับพาหนะ เช่น รถไฟ รถบัส",
            "ใช้กับกริยาการเคลื่อนที่ เช่น 行く, 来る, 帰る",
            "ยกเว้น 歩いて (เดิน) ไม่ใช้ で"
        ],
        "examples": [
            { "jp": "電車で行きます。", "romaji": "Densha de ikimasu.", "th": "ไปด้วยรถไฟ" },
            { "jp": "バスで来ました。", "romaji": "Basu de kimashita.", "th": "มาด้วยรถบัส" },
            { "jp": "自転車で学校へ行きます。", "romaji": "Jitensha de gakkou e ikimasu.", "th": "ไปโรงเรียนด้วยจักรยาน" }
        ],
        "conversation": {
            "title": "บทสนทนา: วิธีการเดินทาง",
            "items": [
                {
                    "speaker": "A",
                    "text": "会社へどうやって行きますか。",
                    "romaji": "Kaisha e dou yatte ikimasu ka.",
                    "translation": "ไปที่ทำงานยังไง"
                },
                {
                    "speaker": "B",
                    "text": "電車で行きます。",
                    "romaji": "Densha de ikimasu.",
                    "translation": "ไปด้วยรถไฟ"
                }
            ]
        },
        "notes": [
            "で = โดย/ด้วย (ระบุวิธีการ)",
            "歩いて (เดิน) ไม่ใช้ で",
            "ใช้กับพาหนะหรือวิธีการเดินทาง"
        ],
        "commonMistakes": [
            "ใช้ で กับ 歩いて (ต้องใช้โดยไม่มี で)",
            "สับสน で กับ へ หรือ に"
        ],
        "compareWith": "で (วิธีการ) vs へ (ทิศทาง) vs に (จุดหมาย)"
    },
    {
        "id": "dare-to",
        "title": "だれと",
        "pattern": "だれと＋動詞",
        "minnaBook": 1,
        "minnaChapter": 5,
        "romaji": "dare to",
        "explanation": "ใช้ถามหรือระบุว่าทำกิจกรรมกับใคร だれ = ใคร, と = กับ",
        "usagePoints": [
            "だれ = คำถามว่า \"ใคร\"",
            "と = กับ (ระบุผู้ร่วมกิจกรรม)",
            "ひとりで = คนเดียว (เมื่อไม่มีใคร)"
        ],
        "examples": [
            { "jp": "だれと行きますか。", "romaji": "Dare to ikimasu ka.", "th": "ไปกับใคร" },
            { "jp": "友達と行きます。", "romaji": "Tomodachi to ikimasu.", "th": "ไปกับเพื่อน" },
            { "jp": "一人で来ました。", "romaji": "Hitori de kimashita.", "th": "มาคนเดียว" }
        ],
        "conversation": {
            "title": "บทสนทนา: การทำกิจกรรมร่วมกัน",
            "items": [
                {
                    "speaker": "A",
                    "text": "映画を見にだれと行きますか。",
                    "romaji": "Eiga o mi ni dare to ikimasu ka.",
                    "translation": "ไปดูหนังกับใคร"
                },
                {
                    "speaker": "B",
                    "text": "家族と行きます。",
                    "romaji": "Kazoku to ikimasu.",
                    "translation": "ไปกับครอบครัว"
                }
            ]
        },
        "notes": [
            "と = กับ (ใช้กับบุคคล)",
            "ひとりで = คนเดียว (ใช้ で แทน と)",
            "ใช้ในบริบทการทำกิจกรรมร่วม"
        ],
        "commonMistakes": [
            "ใช้ で แทน と เมื่อระบุบุคคล",
            "ลืมใช้ と ในการระบุผู้ร่วม"
        ],
        "compareWith": "と (กับบุคคล) vs で (วิธีการ) vs ひとりで (คนเดียว)"
    },
    {
        "id": "itsu",
        "title": "いつ",
        "pattern": "いつ＋動詞＋か",
        "minnaBook": 1,
        "minnaChapter": 5,
        "romaji": "itsu",
        "explanation": "ใช้ถามเวลาที่เกิดเหตุการณ์ แปลว่า \"เมื่อไหร่\"",
        "usagePoints": [
            "ใช้ถามเวลาทั่วไปของการกระทำ",
            "ใช้ในประโยคคำถาม",
            "ไม่ใช้กับเหตุการณ์ที่เกิดตลอดเวลา"
        ],
        "examples": [
            { "jp": "いつ日本へ来ましたか。", "romaji": "Itsu Nihon e kimashita ka.", "th": "มาญี่ปุ่นเมื่อไหร่" },
            { "jp": "いつ帰りますか。", "romaji": "Itsu kaerimasu ka.", "th": "จะกลับเมื่อไหร่" },
            { "jp": "誕生日はいつですか。", "romaji": "Tanjoubi wa itsu desu ka.", "th": "วันเกิดเมื่อไหร่" }
        ],
        "conversation": {
            "title": "บทสนทนา: การถามเวลา",
            "items": [
                {
                    "speaker": "A",
                    "text": "パーティーはいつですか。",
                    "romaji": "Paatii wa itsu desu ka.",
                    "translation": "งานปาร์ตี้เมื่อไหร่"
                },
                {
                    "speaker": "B",
                    "text": "土曜日の夜です。",
                    "romaji": "Doyoubi no yoru desu.",
                    "translation": "คืนวันเสาร์"
                }
            ]
        },
        "notes": [
            "いつ = เมื่อไหร่ (ถามเวลาเหตุการณ์)",
            "いつも = เสมอ (ความหมายต่างกัน)",
            "ใช้ในบริบทคำถามทั่วไป"
        ],
        "commonMistakes": [
            "ใช้ いつ แทน いつも ในความหมาย \"ตลอดเวลา\"",
            "ใช้ในประโยคที่ไม่ใช่คำถาม"
        ],
        "compareWith": "いつ (เมื่อไหร่) vs いつも (เสมอ) vs 何時 (กี่โมง)"
    },
    {
        "id": "o-verb-masu",
        "title": "～を～ます",
        "pattern": "目的語＋を＋動詞ます",
        "minnaBook": 1,
        "minnaChapter": 6,
        "romaji": "~o~masu",
        "explanation": "ใช้แสดงการกระทำที่มีกรรมตรง を = คำช่วยบอกกรรม",
        "usagePoints": [
            "を ใช้กับคำนามที่เป็นกรรมของกริยา",
            "ใช้กับกริยาที่มีวัตถุประสงค์ชัดเจน",
            "ไม่ใช้กับกริยาที่ไม่มีกรรม"
        ],
        "examples": [
            { "jp": "本を読みます。", "romaji": "Hon o yomimasu.", "th": "อ่านหนังสือ" },
            { "jp": "手紙を書きます。", "romaji": "Tegami o kakimasu.", "th": "เขียนจดหมาย" },
            { "jp": "音楽を聞きます。", "romaji": "Ongaku o kikimasu.", "th": "ฟังเพลง" }
        ],
        "conversation": {
            "title": "บทสนทนา: การกระทำที่มีกรรม",
            "items": [
                {
                    "speaker": "A",
                    "text": "毎日何をしますか。",
                    "romaji": "Mainichi nani o shimasu ka.",
                    "translation": "ทุกวันทำอะไร"
                },
                {
                    "speaker": "B",
                    "text": "本を読みます。",
                    "romaji": "Hon o yomimasu.",
                    "translation": "อ่านหนังสือ"
                }
            ]
        },
        "notes": [
            "を ออกเสียง \"โอะ\" เมื่อเป็นคำช่วย",
            "ใช้กับกริยาที่มีกรรมตรง เช่น 読む, 書く, 聞く",
            "ไม่ใช้กับกริยาเช่น ある, いる"
        ],
        "commonMistakes": [
            "ใช้ を กับกริยาที่ไม่มีกรรม",
            "สับสนกับ に หรือ で ในกริยาอื่น"
        ],
        "compareWith": "を (กรรมตรง) vs に (จุดหมาย) vs で (วิธีการ)"
    },
    {
        "id": "verb-masen",
        "title": "～ません",
        "pattern": "動詞＋ません",
        "minnaBook": 1,
        "minnaChapter": 6,
        "romaji": "~masen",
        "explanation": "รูปปฏิเสธของกริยา ます แปลว่า \"ไม่...\"",
        "usagePoints": [
            "ใช้ปฏิเสธการกระทำในปัจจุบันหรืออนาคต",
            "เป็นรูปสุภาพของการปฏิเสธ",
            "ใช้ในบริบททางการและไม่ทางการ"
        ],
        "examples": [
            { "jp": "本を読みません。", "romaji": "Hon o yomimasen.", "th": "ไม่อ่านหนังสือ" },
            { "jp": "テレビを見ません。", "romaji": "Terebi o mimasen.", "th": "ไม่ดูทีวี" },
            { "jp": "宿題をしません。", "romaji": "Shukudai o shimasen.", "th": "ไม่ทำการบ้าน" }
        ],
        "conversation": {
            "title": "บทสนทนา: การปฏิเสธ",
            "items": [
                {
                    "speaker": "A",
                    "text": "映画を見ますか。",
                    "romaji": "Eiga o mimasu ka.",
                    "translation": "ดูหนังไหม"
                },
                {
                    "speaker": "B",
                    "text": "いいえ、今日は見ません。",
                    "romaji": "Iie, kyou wa mimasen.",
                    "translation": "ไม่ วันนี้ไม่ดู"
                }
            ]
        },
        "notes": [
            "ません = รูปปฏิเสธของ ます",
            "ใช้ในภาษาสุภาพ",
            "ไม่ใช้ในรูปไม่สุภาพ (เช่น ない)"
        ],
        "commonMistakes": [
            "ใช้ ません ในรูปไม่สุภาพ",
            "สับสนกับ ませんでした (อดีตปฏิเสธ)"
        ],
        "compareWith": "ません (ปฏิเสธปัจจุบัน) vs ませんでした (ปฏิเสธอดีต) vs ない (ปฏิเสธไม่สุภาพ)"
    },
    {
        "id": "verb-mashita",
        "title": "～ました",
        "pattern": "動詞＋ました",
        "minnaBook": 1,
        "minnaChapter": 6,
        "romaji": "~mashita",
        "explanation": "รูปอดีตของกริยา ます แปลว่า \"ได้...แล้ว\" หรือ \"...แล้ว\"",
        "usagePoints": [
            "ใช้บอกการกระทำที่เสร็จสิ้นในอดีต",
            "เป็นรูปสุภาพของอดีต",
            "ใช้ในบริบททางการและไม่ทางการ"
        ],
        "examples": [
            { "jp": "本を読みました。", "romaji": "Hon o yomimashita.", "th": "อ่านหนังสือแล้ว" },
            { "jp": "友達に会いました。", "romaji": "Tomodachi ni aimashita.", "th": "ได้เจอเพื่อนแล้ว" },
            { "jp": "日本語を勉強しました。", "romaji": "Nihongo o benkyou shimashita.", "th": "เรียนภาษาญี่ปุ่นแล้ว" }
        ],
        "conversation": {
            "title": "บทสนทนา: การกระทำในอดีต",
            "items": [
                {
                    "speaker": "A",
                    "text": "昨日何をしましたか。",
                    "romaji": "Kinou nani o shimashita ka.",
                    "translation": "เมื่อวานทำอะไร"
                },
                {
                    "speaker": "B",
                    "text": "映画を見ました。",
                    "romaji": "Eiga o mimashita.",
                    "translation": "ดูหนังแล้ว"
                }
            ]
        },
        "notes": [
            "ました = รูปอดีตของ ます",
            "ใช้ในภาษาสุภาพ",
            "บอกการกระทำที่เสร็จสิ้น"
        ],
        "commonMistakes": [
            "ใช้ ました แทน ます ในปัจจุบัน",
            "สับสนกับ ませんでした (อดีตปฏิเสธ)"
        ],
        "compareWith": "ました (อดีต) vs ます (ปัจจุบัน) vs た (อดีตไม่สุภาพ)"
    },
    {
        "id": "verb-masen-deshita",
        "title": "～ませんでした",
        "pattern": "動詞＋ませんでした",
        "minnaBook": 1,
        "minnaChapter": 6,
        "romaji": "~masen deshita",
        "explanation": "รูปอดีตปฏิเสธของกริยา ます แปลว่า \"ไม่ได้...\"",
        "usagePoints": [
            "ใช้ปฏิเสธการกระทำในอดีต",
            "เป็นรูปสุภาพของการปฏิเสธอดีต",
            "ใช้ในบริบททางการและไม่ทางการ"
        ],
        "examples": [
            { "jp": "本を読みませんでした。", "romaji": "Hon o yomimasen deshita.", "th": "ไม่ได้อ่านหนังสือ" },
            { "jp": "映画を見ませんでした。", "romaji": "Eiga o mimasen deshita.", "th": "ไม่ได้ดูหนัง" },
            { "jp": "宿題をしませんでした。", "romaji": "Shukudai o shimasen deshita.", "th": "ไม่ได้ทำการบ้าน" }
        ],
        "conversation": {
            "title": "บทสนทนา: การปฏิเสธในอดีต",
            "items": [
                {
                    "speaker": "A",
                    "text": "昨日、宿題をしましたか。",
                    "romaji": "Kinou, shukudai o shimashita ka.",
                    "translation": "เมื่อวานทำการบ้านไหม"
                },
                {
                    "speaker": "B",
                    "text": "いいえ、しませんでした。",
                    "romaji": "Iie, shimasen deshita.",
                    "translation": "ไม่ ไม่ได้ทำ"
                }
            ]
        },
        "notes": [
            "ませんでした = รูปอดีตปฏิเสธของ ます",
            "ใช้ในภาษาสุภาพ",
            "บอกการไม่กระทำในอดีต"
        ],
        "commonMistakes": [
            "ใช้ ませんでした แทน ません ในปัจจุบัน",
            "สับสนกับ ない (ปฏิเสธไม่สุภาพ)"
        ],
        "compareWith": "ませんでした (อดีตปฏิเสธ) vs ません (ปฏิเสธปัจจุบัน) vs なかった (อดีตปฏิเสธไม่สุภาพ)"
    },
    {
        "id": "nani-o-shimasu-ka",
        "title": "なにをしますか",
        "pattern": "なにを＋します＋か",
        "minnaBook": 1,
        "minnaChapter": 6,
        "romaji": "nani o shimasu ka",
        "explanation": "ใช้ถามการกระทำที่มีกรรม なに = อะไร, を = กรรม, します = ทำ",
        "usagePoints": [
            "ใช้ถามว่าทำอะไร (ที่มีกรรม)",
            "ใช้ในประโยคคำถาม",
            "เน้นการกระทำที่มีวัตถุ"
        ],
        "examples": [
            { "jp": "今なにをしますか。", "romaji": "Ima nani o shimasu ka.", "th": "ตอนนี้ทำอะไร" },
            { "jp": "週末なにをしますか。", "romaji": "Shuumatsu nani o shimasu ka.", "th": "วันหยุดทำอะไร" },
            { "jp": "昨日なにをしましたか。", "romaji": "Kinou nani o shimashita ka.", "th": "เมื่อวานทำอะไร" }
        ],
        "conversation": {
            "title": "บทสนทนา: การถามการกระทำ",
            "items": [
                {
                    "speaker": "A",
                    "text": "休みの日なにをしますか。",
                    "romaji": "Yasumi no hi nani o shimasu ka.",
                    "translation": "วันหยุดทำอะไร"
                },
                {
                    "speaker": "B",
                    "text": "ゲームをします。",
                    "romaji": "Geemu o shimasu.",
                    "translation": "เล่นเกม"
                }
            ]
        },
        "notes": [
            "なに = อะไร (คำถาม)",
            "を = กรรมของกริยา",
            "ใช้ในบริบทคำถามทั่วไป"
        ],
        "commonMistakes": [
            "ใช้ なに โดยไม่มี を ในประโยคที่มีกรรม",
            "สับสนกับ 何をしますか และ 何ですか"
        ],
        "compareWith": "なにをしますか (ถามการกระทำ) vs 何ですか (ถามสิ่งของ) vs どうしますか (ถามวิธี)"
    },
    {
        "id": "issho-ni-masen-ka",
        "title": "いっしょに～ませんか",
        "pattern": "いっしょに＋～ませんか",
        "minnaBook": 1,
        "minnaChapter": 7,
        "romaji": "issho ni~masen ka",
        "explanation": "ใช้ชวนให้ทำกิจกรรมร่วมกัน แปลว่า \"ไป...ด้วยกันไหม\" หรือ \"ทำ...ด้วยกันไหม\"",
        "usagePoints": [
            "いっしょに = ด้วยกัน",
            "ませんか = รูปสุภาพของการชวนหรือเสนอ",
            "ใช้ในบริบทที่เป็นมิตรและสุภาพ"
        ],
        "examples": [
            { "jp": "いっしょに映画を見ませんか。", "romaji": "Issho ni eiga o mimasen ka.", "th": "ดูหนังด้วยกันไหม" },
            { "jp": "いっしょに食事をしませんか。", "romaji": "Issho ni shokuji o shimasen ka.", "th": "กินข้าวด้วยกันไหม" },
            { "jp": "いっしょに勉強しませんか。", "romaji": "Issho ni benkyou shimasen ka.", "th": "เรียนด้วยกันไหม" }
        ],
        "conversation": {
            "title": "บทสนทนา: การชวนทำกิจกรรม",
            "items": [
                {
                    "speaker": "A",
                    "text": "いっしょに買い物に行きませんか。",
                    "romaji": "Issho ni kaimono ni ikimasen ka.",
                    "translation": "ไปช็อปปิ้งด้วยกันไหม"
                },
                {
                    "speaker": "B",
                    "text": "いいね！行きましょう。",
                    "romaji": "Ii ne! Ikimashou.",
                    "translation": "ดีเลย! ไปกันเถอะ"
                }
            ]
        },
        "notes": [
            "いっしょに = ด้วยกัน (ใช้กับบุคคล)",
            "ませんか = รูปคำถามสุภาพสำหรับการชวน",
            "ใช้ในสถานการณ์เป็นกันเองและสุภาพ"
        ],
        "commonMistakes": [
            "ใช้ いっしょに โดยไม่มี ませんか ในบริบทการชวน",
            "สับสนกับ การใช้ と หรือ で ในบริบทอื่น"
        ],
        "compareWith": "いっしょに～ませんか (ชวน) vs だれと (ถามผู้ร่วม) vs ～ましょう (เสนอ)"
    },
    
    {
        id: 'mashou',
        title: '～ましょう',
        pattern: '動詞 + ましょう',
        minnaBook: 1,
        minnaChapter: 7,
        romaji: '~mashou',
        explanation: 'ใช้ชวนหรือเสนอทำกิจกรรมร่วมกัน แปลว่า "เรา...กันเถอะ"',
        usagePoints: [
            'รูปชวนของกริยา ます',
            'ใช้เมื่อต้องการให้คนอื่นร่วมทำ',
            'แสดงการเสนอหรือความตั้งใจ',
            'ตัดคำลงท้าย ます แล้วเติม ましょう'
        ],
        examples: [
            { jp: '映画を見ましょう。', romaji: 'Eiga o mimashou.', th: 'ดูหนังกันเถอะ' },
            { jp: '公園へ行きましょう。', romaji: 'Kouen e ikimashou.', th: 'ไปสวนสาธารณะกันเถอะ' },
            { jp: 'お茶を飲みましょう。', romaji: 'Ocha o nomimashou.', th: 'ดื่มชากันเถอะ' },
            { jp: 'ここで休みましょう。', romaji: 'Koko de yasumimashou.', th: 'พักที่นี่กันเถอะ' }
        ],
        conversation: {
            title: 'บทสนทนา: การชวนกิจกรรม',
            items: [
                {
                    speaker: 'A',
                    text: 'お腹がすきました。',
                    romaji: 'Onaka ga sukimashita.',
                    translation: 'หิวแล้ว'
                },
                {
                    speaker: 'B',
                    text: 'じゃあ、昼ご飯を食べましょう。',
                    romaji: 'Jaa, hirugohan o tabemashou.',
                    translation: 'งั้นกินข้าวเที่ยงกันเถอะ'
                },
                {
                    speaker: 'A',
                    text: 'いいですね。どこで食べましょうか。',
                    romaji: 'Ii desu ne. Doko de tabemashou ka.',
                    translation: 'ดีนะ จะกินที่ไหนดี'
                }
            ]
        },
        notes: [
            'รูปชวนของกริยา ます',
            'ใช้เมื่อต้องการให้คนอื่นร่วมทำ',
            'แสดงความเป็นมิตรและความร่วมมือ',
            'ใช้ได้กับทุกกริยา'
        ],
        commonMistakes: [
            'ใช้กับคนที่ไม่คุ้นเคย (ควรใช้ ませんか)',
            'ลืมตัด ます ก่อนเติม ましょう'
        ],
        compareWith: 'ましょう (ชวน) vs ませんか (ชวนสุภาพ) vs ましょうか (เสนอ)'
    },
    {
        id: 'ni-person-target',
        title: '～に + คน',
        pattern: '人 + に + あげます／もらいます／くれます',
        minnaBook: 1,
        minnaChapter: 7,
        romaji: 'hito + ni + agemasu/moraimasu/kuremasu',
        explanation: 'ใช้บอกเป้าหมายของการให้หรือรับสิ่งของ に = ให้กับ/จาก (บุคคล)',
        usagePoints: [
            'に = บุคคลเป้าหมาย',
            'ใช้กับกริยาแสดงการให้-รับ',
            'บ่งบอกทิศทางของการให้-รับ'
        ],
        examples: [
            { jp: '友達にプレゼントをあげます。', romaji: 'Tomodachi ni purezento o agemasu.', th: 'ให้ของขวัญแก่เพื่อน' },
            { jp: '母に花をもらいました。', romaji: 'Haha ni hana o moraimashita.', th: 'ได้รับดอกไม้จากแม่' },
            { jp: '先生に質問をします。', romaji: 'Sensei ni shitsumon o shimasu.', th: 'ถามคำถามกับครู' }
        ],
        conversation: {
            title: 'บทสนทนา: การให้และรับ',
            items: [
                {
                    speaker: 'A',
                    text: '誰にプレゼントをあげますか。',
                    romaji: 'Dare ni purezento o agemasu ka.',
                    translation: 'จะให้ของขวัญแก่ใคร'
                },
                {
                    speaker: 'B',
                    text: '彼女にあげます。',
                    romaji: 'Kanojo ni agemasu.',
                    translation: 'จะให้แก่แฟน'
                }
            ]
        },
        notes: [
            'に = บุคคลเป้าหมาย',
            'ใช้กับกริยาแสดงการให้-รับ',
            'から = จาก (ใช้กับ もらいます)',
            '明確ระบุผู้ให้และผู้รับ'
        ],
        commonMistakes: [
            'ใช้ を แทน に กับบุคคล',
            'สับสนทิศทางของการให้-รับ'
        ],
        compareWith: 'に (เป้าหมาย) vs から (แหล่งที่มา)'
    },
    {
        id: 'agemasu-moraimasu-kuremasu-chapter7',
        title: 'あげます／もらいます／くれます',
        pattern: '～をあげます／～からもらいます／～がくれます',
        minnaBook: 1,
        minnaChapter: 7,
        romaji: '~o agemasu / ~kara moraimasu / ~ga kuremasu',
        explanation: 'กริยาแสดงการให้และรับสิ่งของ: あげます = ให้ (ไป), もらいます = รับ (มา), くれます = ถูกให้ (มา)',
        usagePoints: [
            'あげます = ฉันให้คนอื่น (ทิศทางออกไป)',
            'もらいます = ฉันรับจากคนอื่น (ทิศทางเข้ามา)',
            'くれます = คนอื่นให้ฉัน (ทิศทางเข้ามาหาฉัน)'
        ],
        examples: [
            { jp: '友達に本をあげます。', romaji: 'Tomodachi ni hon o agemasu.', th: 'ให้หนังสือแก่เพื่อน' },
            { jp: '友達から本をもらいます。', romaji: 'Tomodachi kara hon o moraimasu.', th: 'รับหนังสือจากเพื่อน' },
            { jp: '友達が本をくれます。', romaji: 'Tomodachi ga hon o kuremasu.', th: 'เพื่อนให้หนังสือ(ฉัน)' }
        ],
        conversation: {
            title: 'บทสนทนา: การแลกเปลี่ยนของ',
            items: [
                {
                    speaker: 'A',
                    text: '誕生日に何をもらいましたか。',
                    romaji: 'Tanjoubi ni nani o moraimashita ka.',
                    translation: 'วันเกิดได้รับอะไรบ้าง'
                },
                {
                    speaker: 'B',
                    text: '時計をもらいました。',
                    romaji: 'Tokei o moraimashita.',
                    translation: 'ได้รับนาฬิกา'
                },
                {
                    speaker: 'A',
                    text: '誰がくれましたか。',
                    romaji: 'Dare ga kuremashita ka.',
                    translation: 'ใครให้'
                },
                {
                    speaker: 'B',
                    text: '両親がくれました。',
                    romaji: 'Ryoushin ga kuremashita.',
                    translation: 'พ่อแม่ให้'
                }
            ]
        },
        notes: [
            'あげます = ฉันให้คนอื่น',
            'もらいます = ฉันรับจากคนอื่น',
            'くれます = คนอื่นให้ฉัน',
            'ใช้ に กับผู้รับ, から กับผู้ให้'
        ],
        commonMistakes: [
            'สับสนทิศทางของการให้-รับ',
            'ใช้ が กับ あげます (ควรใช้ に)',
            'ใช้ に กับ もらいます (ควรใช้ から)'
        ],
        compareWith: 'あげます (ให้ไป) vs もらいます (รับมา) vs くれます (ให้มา)'
    },

    // ========== Minna no Nihongo เล่ม 1 บทที่ 8 ==========
    {
        id: 'de-location',
        title: '～で (สถานที่)',
        pattern: '場所 + で + 動詞',
        minnaBook: 1,
        minnaChapter: 8,
        romaji: 'basho + de + doushi',
        explanation: 'ใช้บอกสถานที่ที่เกิดการกระทำ で = ที่ (สถานที่กระทำ)',
        usagePoints: [
            'で = สถานที่ที่เกิดการกระทำ',
            'แตกต่างจาก に ที่เป็นจุดหมาย',
            'ใช้กับกริยาที่แสดงการกระทำ'
        ],
        examples: [
            { jp: '図書館で本を読みます。', romaji: 'Toshokan de hon o yomimasu.', th: 'อ่านหนังสือที่ห้องสมุด' },
            { jp: 'レストランで食事をします。', romaji: 'Resutoran de shokuji o shimasu.', th: 'กินข้าวที่ร้านอาหาร' },
            { jp: '家で勉強します。', romaji: 'Ie de benkyou shimasu.', th: 'เรียนที่บ้าน' }
        ],
        conversation: {
            title: 'บทสนทนา: สถานที่กระทำ',
            items: [
                {
                    speaker: 'A',
                    text: 'どこで昼ご飯を食べますか。',
                    romaji: 'Doko de hirugohan o tabemasu ka.',
                    translation: 'จะกินข้าวเที่ยงที่ไหน'
                },
                {
                    speaker: 'B',
                    text: 'カフェテリアで食べます。',
                    romaji: 'Kafeteria de tabemasu.',
                    translation: 'จะกินที่โรงอาหาร'
                }
            ]
        },
        notes: [
            'で = สถานที่ที่เกิดการกระทำ',
            'แตกต่างจาก に ที่เป็นจุดหมาย',
            'ใช้ถาม: どこで',
            'ใช้กับการกระทำทุกประเภท'
        ],
        commonMistakes: [
            'สับสน で กับ に (で = กระทำ, に = จุดหมาย)',
            'ใช้ で กับกริยาที่ไม่แสดงการกระทำ'
        ],
        compareWith: 'で (สถานที่กระทำ) vs に (จุดหมาย) vs へ (ทิศทาง)'
    },
    {
        id: 'i-keiyoushi-na-keiyoushi',
        title: 'い形容詞 / な形容詞',
        pattern: 'い形容詞 / な形容詞 + です',
        minnaBook: 1,
        minnaChapter: 8,
        romaji: 'i-keiyoushi / na-keiyoushi + desu',
        explanation: 'คำคุณศัพท์ 2 ประเภท: い形容詞 (ลงท้ายด้วย い) และ な形容詞 (ใช้ な ขยายคำนาม)',
        usagePoints: [
            'い形容詞: ลงท้ายด้วย い (除く きれい)',
            'な形容詞: ไม่ลงท้ายด้วย い หรือลงท้ายแต่ไม่ใช่คำคุณศัพท์',
            'い形容詞ใช้ตรงๆ, な形容詞ต้องใช้ な ขยาย'
        ],
        examples: [
            { jp: 'この本は面白いです。', romaji: 'Kono hon wa omoshiroi desu.', th: 'หนังสือเล่มนี้น่าสนใจ' },
            { jp: '高い車を買いました。', romaji: 'Takai kuruma o kaimashita.', th: 'ซื้อรถแพง' },
            { jp: '静かな町です。', romaji: 'Shizuka na machi desu.', th: 'เป็นเมืองที่เงียบ' },
            { jp: 'きれいな花です。', romaji: 'Kirei na hana desu.', th: 'เป็นดอกไม้สวย' }
        ],
        conversation: {
            title: 'บทสนทนา: การอธิบายลักษณะ',
            items: [
                {
                    speaker: 'A',
                    text: 'この映画はどうですか。',
                    romaji: 'Kono eiga wa dou desu ka.',
                    translation: 'หนังเรื่องนี้เป็นอย่างไร'
                },
                {
                    speaker: 'B',
                    text: 'とても面白いです。',
                    romaji: 'Totemo omoshiroi desu.',
                    translation: 'น่าสนใจมาก'
                },
                {
                    speaker: 'A',
                    text: '有名な俳優が出ていますね。',
                    romaji: 'Yuumei na haiyuu ga dete imasu ne.',
                    translation: 'มีนักแสดงมีชื่อเสียงออกมาด้วยนะ'
                }
            ]
        },
        notes: [
            'い形容詞: ใช้ตรงๆ (高い、面白い、新しい)',
            'な形容詞: ใช้ な ขยาย (静か、きれい、有名)',
            'ยกเว้น: きれい, 嫌い เป็น な形容詞',
            'การผัน: い → くない, な → じゃない'
        ],
        commonMistakes: [
            'ใช้ な กับ い形容詞 (ผิด: 高いな)',
            'ลืมใช้ な กับ な形容詞 (ผิด: 静か町)',
            'สับสน きれい, 嫌い'
        ],
        compareWith: 'い形容詞 (ลงท้าย い) vs な形容詞 (ใช้ な ขยาย)'
    },
    {
        id: 'wa-dou-desu-ka',
        title: '～はどうですか',
        pattern: '～はどうですか',
        minnaBook: 1,
        minnaChapter: 8,
        romaji: '~wa dou desu ka',
        explanation: 'ใช้ถามความคิดเห็นหรือการประเมิน แปลว่า "...เป็นอย่างไร" หรือ "คิดว่า...ยังไง"',
        usagePoints: [
            'ถามความคิดเห็น ความรู้สึก',
            'ใช้ได้กับทุกสิ่ง',
            'คำตอบมักเป็นคำคุณศัพท์'
        ],
        examples: [
            { jp: '日本の料理はどうですか。', romaji: 'Nihon no ryouri wa dou desu ka.', th: 'อาหารญี่ปุ่นเป็นอย่างไร' },
            { jp: 'この映画はどうでしたか。', romaji: 'Kono eiga wa dou deshita ka.', th: 'หนังเรื่องนี้เป็นอย่างไรบ้าง' },
            { jp: '新しい仕事はどうですか。', romaji: 'Atarashii shigoto wa dou desu ka.', th: 'งานใหม่เป็นอย่างไร' }
        ],
        conversation: {
            title: 'บทสนทนา: การถามความคิดเห็น',
            items: [
                {
                    speaker: 'A',
                    text: '日本の生活はどうですか。',
                    romaji: 'Nihon no seikatsu wa dou desu ka.',
                    translation: 'ชีวิตในญี่ปุ่นเป็นอย่างไร'
                },
                {
                    speaker: 'B',
                    text: 'とても楽しいです。でも、ちょっと大変です。',
                    romaji: 'Totemo tanoshii desu. Demo, chotto taihen desu.',
                    translation: 'สนุกมาก แต่ลำบากนิดหน่อย'
                }
            ]
        },
        notes: [
            'どう = อย่างไร',
            'ใช้ถามความคิดเห็นทั่วไป',
            'คำตอบ: いいです、面白いです、大変です',
            'รูปอดีต: どうでしたか'
        ],
        commonMistakes: [
            'สับสนกับ どんな (ลักษณะเฉพาะ)',
            'ใช้ผิดกาลเวลา'
        ],
        compareWith: 'どう (อย่างไร) vs どんな (ลักษณะไหน)'
    },
    {
        id: 'wa-donna-desu-ka',
        title: '～はどんな～ですか',
        pattern: '～はどんな～ですか',
        minnaBook: 1,
        minnaChapter: 8,
        romaji: '~wa donna ~desu ka',
        explanation: 'ใช้ถามลักษณะเฉพาะของสิ่งใดสิ่งหนึ่ง แปลว่า "...เป็น...ลักษณะไหน"',
        usagePoints: [
            'ถามลักษณะเฉพาะ',
            'どんな + คำนาม',
            'ต้องการคำตอบที่อธิบายลักษณะ'
        ],
        examples: [
            { jp: '田中さんはどんな人ですか。', romaji: 'Tanaka-san wa donna hito desu ka.', th: 'คุณทานากะเป็นคนอย่างไร' },
            { jp: 'あなたの町はどんな町ですか。', romaji: 'Anata no machi wa donna machi desu ka.', th: 'เมืองของคุณเป็นเมืองลักษณะไหน' },
            { jp: 'どんな映画が好きですか。', romaji: 'Donna eiga ga suki desu ka.', th: 'ชอบหนังแนวไหน' }
        ],
        conversation: {
            title: 'บทสนทนา: การถามลักษณะ',
            items: [
                {
                    speaker: 'A',
                    text: 'あなたの故郷はどんな所ですか。',
                    romaji: 'Anata no kokyou wa donna tokoro desu ka.',
                    translation: 'บ้านเกิดของคุณเป็นที่อย่างไร'
                },
                {
                    speaker: 'B',
                    text: '静かで、きれいな所です。',
                    romaji: 'Shizuka de, kirei na tokoro desu.',
                    translation: 'เป็นที่เงียบและสวย'
                },
                {
                    speaker: 'A',
                    text: 'いいですね。',
                    romaji: 'Ii desu ne.',
                    translation: 'ดีนะ'
                }
            ]
        },
        notes: [
            'どんな = ลักษณะไหน',
            'ต้องตามด้วยคำนาม',
            'คำตอบอธิบายลักษณะเฉพาะ',
            'ใช้กับคน สถานที่ สิ่งของ'
        ],
        commonMistakes: [
            'สับสนกับ どう (ความรู้สึก)',
            'ลืมใส่คำนามหลัง どんな'
        ],
        compareWith: 'どんな (ลักษณะไหน) vs どう (อย่างไร)'
    },

    // ========== Minna no Nihongo เล่ม 1 บทที่ 9 ==========
    {
        id: 'ga-wakarimasu',
        title: '～がわかります',
        pattern: '～がわかります',
        minnaBook: 1,
        minnaChapter: 9,
        romaji: '~ga wakarimasu',
        explanation: 'ใช้แสดงความเข้าใจหรือรู้เรื่อง が = คำช่วยบอกประธาน わかります = เข้าใจ',
        usagePoints: [
            'ใช้ が แทน を เพราะ わかります เป็นกริยาแสดงสถานะ',
            'สิ่งที่เข้าใจต้องใช้ が',
            'มักใช้กับภาษา ความรู้ หรือเรื่องต่างๆ'
        ],
        examples: [
            { jp: '日本語がわかります。', romaji: 'Nihongo ga wakarimasu.', th: 'เข้าใจภาษาญี่ปุ่น' },
            { jp: 'この本の意味がわかりません。', romaji: 'Kono hon no imi ga wakarimasen.', th: 'ไม่เข้าใจความหมายของหนังสือเล่มนี้' },
            { jp: '先生の話がよくわかります。', romaji: 'Sensei no hanashi ga yoku wakarimasu.', th: 'เข้าใจเรื่องที่ครูพูดดี' }
        ],
        conversation: {
            title: 'บทสนทนา: การเข้าใจ',
            items: [
                {
                    speaker: 'A',
                    text: '日本語がわかりますか。',
                    romaji: 'Nihongo ga wakarimasu ka.',
                    translation: 'เข้าใจภาษาญี่ปุ่นไหม'
                },
                {
                    speaker: 'B',
                    text: 'はい、少しわかります。',
                    romaji: 'Hai, sukoshi wakarimasu.',
                    translation: 'ใช่ เข้าใจนิดหน่อย'
                },
                {
                    speaker: 'A',
                    text: 'すごいですね。',
                    romaji: 'Sugoi desu ne.',
                    translation: 'เก่งจังเลย'
                }
            ]
        },
        notes: [
            'ใช้ が แทน を กับ わかります',
            'わかりません = ไม่เข้าใจ',
            'よくわかります = เข้าใจดี',
            'ちょっとわかります = เข้าใจนิดหน่อย'
        ],
        commonMistakes: [
            'ใช้ を แทน が (ผิด: 日本語をわかります → ถูก: 日本語がわかります)',
            'สับสนกับ しります (รู้จัก) vs わかります (เข้าใจ)'
        ],
        compareWith: 'わかります (เข้าใจ) vs しります (รู้จัก)'
    },
    {
        id: 'ga-suki-kirai-jouzu-heta',
        title: '～が好き／きらい／じょうず／へたです',
        pattern: '～が好き／きらい／じょうず／へたです',
        minnaBook: 1,
        minnaChapter: 9,
        romaji: '~ga suki/kirai/jouzu/heta desu',
        explanation: 'ใช้แสดงความรู้สึกหรือความสามารถ: 好き = ชอบ, きらい = เกลียด, じょうず = เก่ง, へた = ไม่เก่ง',
        usagePoints: [
            'ใช้ が กับคำคุณศัพท์แสดงความรู้สึก',
            'สิ่งที่ชอบ/เกลียด/เก่ง/ไม่เก่ง ต้องใช้ が',
            'เป็นคำคุณศัพท์ な (na-adjective)'
        ],
        examples: [
            { jp: '私は音楽が好きです。', romaji: 'Watashi wa ongaku ga suki desu.', th: 'ฉันชอบเพลง' },
            { jp: '野菜がきらいです。', romaji: 'Yasai ga kirai desu.', th: 'เกลียดผัก' },
            { jp: '田中さんは日本語がじょうずです。', romaji: 'Tanaka-san wa Nihongo ga jouzu desu.', th: 'คุณทานากะเก่งภาษาญี่ปุ่น' },
            { jp: '私は料理がへたです。', romaji: 'Watashi wa ryouri ga heta desu.', th: 'ฉันทำอาหารไม่เก่ง' }
        ],
        conversation: {
            title: 'บทสนทนา: ความชอบและความสามารถ',
            items: [
                {
                    speaker: 'A',
                    text: 'どんな音楽が好きですか。',
                    romaji: 'Donna ongaku ga suki desu ka.',
                    translation: 'ชอบเพลงแนวไหน'
                },
                {
                    speaker: 'B',
                    text: 'J-POPが好きです。田中さんは？',
                    romaji: 'J-POP ga suki desu. Tanaka-san wa?',
                    translation: 'ชอบ J-POP แล้วคุณทานากะล่ะ'
                },
                {
                    speaker: 'A',
                    text: '私はクラシックが好きです。',
                    romaji: 'Watashi wa kurashikku ga suki desu.',
                    translation: 'ฉันชอบคลาสสิก'
                }
            ]
        },
        notes: [
            'ใช้ が กับคำคุณศัพท์แสดงความรู้สึก',
            'だいすき = ชอบมาก, だいきらい = เกลียดมาก',
            'とてもじょうず = เก่งมาก, とてもへた = ไม่เก่งมาก',
            'あまり好きじゃありません = ไม่ค่อยชอบ'
        ],
        commonMistakes: [
            'ใช้ を แทน が (ผิด: 音楽を好きです → ถูก: 音楽が好きです)',
            'ลืมใส่ です หลังคำคุณศัพท์'
        ],
        compareWith: '好き (ชอบ) vs きらい (เกลียด), じょうず (เก่ง) vs へた (ไม่เก่ง)'
    },
    {
        id: 'ga-arimasu-imasu',
        title: '～があります／います',
        pattern: '～があります／います',
        minnaBook: 1,
        minnaChapter: 9,
        romaji: '~ga arimasu/imasu',
        explanation: 'ใช้แสดงการมีอยู่: あります = มี (สิ่งไม่มีชีวิต), います = มี (สิ่งมีชีวิต)',
        usagePoints: [
            'あります ใช้กับสิ่งไม่มีชีวิต (โต๊ะ เก้าอี้ หนังสือ)',
            'います ใช้กับสิ่งมีชีวิต (คน สัตว์)',
            'ใช้ が เพื่อบอกว่าอะไรที่มี'
        ],
        examples: [
            { jp: 'テーブルの上に本があります。', romaji: 'Teeburu no ue ni hon ga arimasu.', th: 'มีหนังสืออยู่บนโต๊ะ' },
            { jp: '公園に子どもがいます。', romaji: 'Kouen ni kodomo ga imasu.', th: 'มีเด็กอยู่ในสวนสาธารณะ' },
            { jp: '冷蔵庫にビールがありますか。', romaji: 'Reizouko ni biiru ga arimasu ka.', th: 'มีเบียร์ในตู้เย็นไหม' }
        ],
        conversation: {
            title: 'บทสนทนา: การมีอยู่',
            items: [
                {
                    speaker: 'A',
                    text: 'この近くにコンビニがありますか。',
                    romaji: 'Kono chikaku ni konbini ga arimasu ka.',
                    translation: 'มีร้านสะดวกซื้อแถวนี้ไหม'
                },
                {
                    speaker: 'B',
                    text: 'はい、あります。あそこです。',
                    romaji: 'Hai, arimasu. Asoko desu.',
                    translation: 'มีครับ อยู่ตรงโน่น'
                }
            ]
        },
        notes: [
            'あります = สิ่งไม่มีชีวิต',
            'います = สิ่งมีชีวิต',
            'ありません = ไม่มี (สิ่งไม่มีชีวิต)',
            'いません = ไม่มี (สิ่งมีชีวิต)'
        ],
        commonMistakes: [
            'ใช้ あります กับสิ่งมีชีวิต (ผิด: 犬があります → ถูก: 犬がいます)',
            'ใช้ います กับสิ่งไม่มีชีวิต (ผิด: 本がいます → ถูก: 本があります)'
        ],
        compareWith: 'あります (สิ่งไม่มีชีวิต) vs います (สิ่งมีชีวิต)'
    },
    {
        id: 'wa-ga-arimasu-imasu',
        title: '～は～があります／います',
        pattern: '場所は～があります／います',
        minnaBook: 1,
        minnaChapter: 9,
        romaji: '~wa ~ga arimasu/imasu',
        explanation: 'ใช้บอกว่าสถานที่นั้นๆ มีอะไรอยู่ โดยเน้นหัวข้อ (สถานที่) ก่อน',
        usagePoints: [
            'は = หัวข้อ (สถานที่)',
            'が = สิ่งที่มี',
            'เน้นที่สถานที่ว่ามีอะไรบ้าง'
        ],
        examples: [
            { jp: '私の部屋にはベッドがあります。', romaji: 'Watashi no heya ni wa beddo ga arimasu.', th: 'ในห้องของฉันมีเตียง' },
            { jp: '学校には図書館があります。', romaji: 'Gakkou ni wa toshokan ga arimasu.', th: 'ในโรงเรียนมีห้องสมุด' },
            { jp: '動物園にはライオンがいます。', romaji: 'Doubutsuen ni wa raion ga imasu.', th: 'ในสวนสัตว์มีสิงโต' }
        ],
        conversation: {
            title: 'บทสนทนา: บอกสิ่งที่มีในสถานที่',
            items: [
                {
                    speaker: 'A',
                    text: 'あなたの町には何がありますか。',
                    romaji: 'Anata no machi ni wa nani ga arimasu ka.',
                    translation: 'ในเมืองของคุณมีอะไรบ้าง'
                },
                {
                    speaker: 'B',
                    text: '駅やデパートがあります。',
                    romaji: 'Eki ya depaato ga arimasu.',
                    translation: 'มีสถานีรถไฟและห้างสรรพสินค้า'
                }
            ]
        },
        notes: [
            'に = สถานที่ที่มี',
            'は = เน้นหัวข้อ (สถานที่)',
            'が = สิ่งที่มีอยู่',
            'มักใช้เมื่อต้องการอธิบายสิ่งที่มีในสถานที่'
        ],
        commonMistakes: [
            'ใช้ を แทน が (ผิด: 部屋には本をあります)',
            'ลืมใช้ に กับสถานที่'
        ],
                 compareWith: '～があります (เน้นสิ่งที่มี) vs ～には～があります (เน้นสถานที่)'
    },

    // ========== Minna no Nihongo เล่ม 1 บทที่ 10 ==========
    {
        id: 'ni-ga-arimasu-imasu',
        title: '～に～があります／います',
        pattern: '場所 + に + ～があります／います',
        minnaBook: 1,
        minnaChapter: 10,
        romaji: '~ni ~ga arimasu/imasu',
        explanation: 'ใช้บอกตำแหน่งที่ตั้งของสิ่งของหรือบุคคล โดยเน้นสถานที่ที่มีสิ่งนั้นอยู่',
        usagePoints: [
            'に = สถานที่ที่มี',
            'が = สิ่งที่มีอยู่',
            'เน้นตำแหน่งที่ตั้ง'
        ],
        examples: [
            { jp: '机の上に本があります。', romaji: 'Tsukue no ue ni hon ga arimasu.', th: 'มีหนังสืออยู่บนโต๊ะ' },
            { jp: '公園に猫がいます。', romaji: 'Kouen ni neko ga imasu.', th: 'มีแมวอยู่ในสวนสาธารณะ' },
            { jp: '冷蔵庫に牛乳があります。', romaji: 'Reizouko ni gyuunyuu ga arimasu.', th: 'มีนมอยู่ในตู้เย็น' }
        ],
        conversation: {
            title: 'บทสนทนา: การบอกตำแหน่ง',
            items: [
                {
                    speaker: 'A',
                    text: '辞書はどこにありますか。',
                    romaji: 'Jisho wa doko ni arimasu ka.',
                    translation: 'พจนานุกรมอยู่ที่ไหน'
                },
                {
                    speaker: 'B',
                    text: '本棚にあります。',
                    romaji: 'Hondana ni arimasu.',
                    translation: 'อยู่ในชั้นหนังสือ'
                }
            ]
        },
        notes: [
            'に = ตำแหน่งที่ตั้ง',
            'が = สิ่งที่มีอยู่',
            'ใช้คำบอกตำแหน่ง: 上に、下に、中に、隣に'
        ],
        commonMistakes: [
            'สับสน に กับ で (で = สถานที่กระทำ, に = ตำแหน่ง)',
            'ลืมใช้ が กับสิ่งที่มี'
        ],
        compareWith: 'に (ตำแหน่ง) vs で (สถานที่กระทำ)'
    },
    {
        id: 'ya-nado-ga-arimasu',
        title: '～や～などがあります',
        pattern: '～や～などがあります',
        minnaBook: 1,
        minnaChapter: 10,
        romaji: '~ya ~nado ga arimasu',
        explanation: 'ใช้ยกตัวอย่างสิ่งที่มีอยู่บางส่วน や = และ (ตัวอย่าง), など = เป็นต้น',
        usagePoints: [
            'や = เชื่อมสิ่งของเป็นตัวอย่าง',
            'など = และอื่นๆ',
            'ไม่ได้หมายถึงมีแค่สิ่งที่กล่าวมา'
        ],
        examples: [
            { jp: 'デパートには服や靴などがあります。', romaji: 'Depaato ni wa fuku ya kutsu nado ga arimasu.', th: 'ในห้างสรรพสินค้ามีเสื้อผ้าและรองเท้าเป็นต้น' },
            { jp: '公園には犬や猫などがいます。', romaji: 'Kouen ni wa inu ya neko nado ga imasu.', th: 'ในสวนสาธารณะมีสุนัขและแมวเป็นต้น' },
            { jp: '冷蔵庫には野菜や果物などがあります。', romaji: 'Reizouko ni wa yasai ya kudamono nado ga arimasu.', th: 'ในตู้เย็นมีผักและผลไม้เป็นต้น' }
        ],
        conversation: {
            title: 'บทสนทนา: การยกตัวอย่าง',
            items: [
                {
                    speaker: 'A',
                    text: 'この店には何がありますか。',
                    romaji: 'Kono mise ni wa nani ga arimasu ka.',
                    translation: 'ร้านนี้มีอะไรบ้าง'
                },
                {
                    speaker: 'B',
                    text: '本や雑誌などがあります。',
                    romaji: 'Hon ya zasshi nado ga arimasu.',
                    translation: 'มีหนังสือและนิตยสารเป็นต้น'
                }
            ]
        },
        notes: [
            'や = และ (ยกตัวอย่างบางส่วน)',
            'など = เป็นต้น',
            'หมายถึงมีสิ่งอื่นอีกนอกจากที่กล่าว'
        ],
        commonMistakes: [
            'ใช้ と แทน や เมื่อยกตัวอย่าง',
            'ลืมใส่ など'
        ],
        compareWith: 'や (ตัวอย่าง) vs と (ทั้งหมด)'
    },
    {
        id: 'ichiban-adjective',
        title: 'いちばん + คำคุณศัพท์',
        pattern: 'いちばん + คำคุณศัพท์',
        minnaBook: 1,
        minnaChapter: 10,
        romaji: 'ichiban + keiyoushi',
        explanation: 'ใช้แสดงขั้นสูงสุด แปลว่า "...ที่สุด" いちばん = ที่สุด',
        usagePoints: [
            'いちばん + い形容詞 (ตรงๆ)',
            'いちばん + な形容詞 + です',
            'ใช้เปรียบเทียบในกลุ่ม'
        ],
        examples: [
            { jp: 'この本がいちばん面白いです。', romaji: 'Kono hon ga ichiban omoshiroi desu.', th: 'หนังสือเล่มนี้น่าสนใจที่สุด' },
            { jp: '日本語がいちばん難しいです。', romaji: 'Nihongo ga ichiban muzukashii desu.', th: 'ภาษาญี่ปุ่นยากที่สุด' },
            { jp: '田中さんがいちばん親切です。', romaji: 'Tanaka-san ga ichiban shinsetsu desu.', th: 'คุณทานากะใจดีที่สุด' }
        ],
        conversation: {
            title: 'บทสนทนา: การเปรียบเทียบขั้นสูงสุด',
            items: [
                {
                    speaker: 'A',
                    text: 'どの季節がいちばん好きですか。',
                    romaji: 'Dono kisetsu ga ichiban suki desu ka.',
                    translation: 'ชอบฤดูไหนที่สุด'
                },
                {
                    speaker: 'B',
                    text: '春がいちばん好きです。',
                    romaji: 'Haru ga ichiban suki desu.',
                    translation: 'ชอบฤดูใบไม้ผลิที่สุด'
                }
            ]
        },
        notes: [
            'いちばん = ที่สุด',
            'ใช้กับทั้งคำคุณศัพท์ い และ な',
            'มักใช้กับ どの/だれ/どこ/なに เพื่อถาม'
        ],
        commonMistakes: [
            'ลืมใช้ が กับสิ่งที่เปรียบเทียบ',
            'ใช้ いちばん กับ より (ขั้นกว่า)'
        ],
        compareWith: 'いちばん (ที่สุด) vs より (กว่า)'
    },
    {
        id: 'no-naka-de-ichiban',
        title: '～のなかで～がいちばん...です',
        pattern: '～のなかで～がいちばん...です',
        minnaBook: 1,
        minnaChapter: 10,
        romaji: '~no naka de ~ga ichiban ~desu',
        explanation: 'ใช้แสดงว่าในกลุ่มหนึ่ง สิ่งใดสิ่งหนึ่งเป็นอย่างสูงสุด のなかで = ในหมู่/ในกลุ่ม',
        usagePoints: [
            'のなかで = ในหมู่/ในกลุ่ม',
            'が = สิ่งที่เป็นที่สุด',
            'いちばん = ที่สุด'
        ],
        examples: [
            { jp: 'クラスのなかで田中さんがいちばん背が高いです。', romaji: 'Kurasu no naka de Tanaka-san ga ichiban se ga takai desu.', th: 'ในห้องเรียน คุณทานากะสูงที่สุด' },
            { jp: '果物のなかでりんごがいちばん好きです。', romaji: 'Kudamono no naka de ringo ga ichiban suki desu.', th: 'ในผลไม้ ชอบแอปเปิ้ลที่สุด' },
            { jp: 'この店のなかでこれがいちばん安いです。', romaji: 'Kono mise no naka de kore ga ichiban yasui desu.', th: 'ในร้านนี้ อันนี้ถูกที่สุด' }
        ],
        conversation: {
            title: 'บทสนทนา: การเปรียบเทียบในกลุ่ม',
            items: [
                {
                    speaker: 'A',
                    text: 'スポーツのなかで何がいちばん好きですか。',
                    romaji: 'Supootsu no naka de nani ga ichiban suki desu ka.',
                    translation: 'ในกีฬา ชอบอะไรที่สุด'
                },
                {
                    speaker: 'B',
                    text: 'サッカーがいちばん好きです。',
                    romaji: 'Sakkaa ga ichiban suki desu.',
                    translation: 'ชอบฟุตบอลที่สุด'
                }
            ]
        },
        notes: [
            'のなかで = ในกลุ่ม/ในหมู่',
            'が = สิ่งที่เป็นที่สุด',
            'ใช้เมื่อมีขอบเขตที่ชัดเจน'
        ],
        commonMistakes: [
            'ใช้ に แทน で หลัง なか',
            'ลืมใช้ が กับสิ่งที่เปรียบเทียบ'
        ],
        compareWith: '～のなかで (ในกลุ่ม) vs ～より (กว่า)'
    },

    // ========== Minna no Nihongo เล่ม 1 บทที่ 11 ==========
    {
        id: 'nin-counter',
        title: '～人（にん）',
        pattern: '数字 + 人',
        minnaBook: 1,
        minnaChapter: 11,
        romaji: 'suuji + nin',
        explanation: 'ลักษณนามสำหรับนับคน 人 = คน (อ่านว่า にん)',
        usagePoints: [
            'ใช้นับจำนวนคน',
            'มีการอ่านพิเศษ: 1人=ひとり, 2人=ふたり',
            'จาก 3人 ขึ้นไป ใช้ ～にん'
        ],
        examples: [
            { jp: '家族は4人です。', romaji: 'Kazoku wa yonin desu.', th: 'ครอบครัวมี 4 คน' },
            { jp: '一人で来ました。', romaji: 'Hitori de kimashita.', th: 'มาคนเดียว' },
            { jp: '友達と二人で映画を見ました。', romaji: 'Tomodachi to futari de eiga o mimashita.', th: 'ดูหนังกับเพื่อน 2 คน' }
        ],
        conversation: {
            title: 'บทสนทนา: การนับคน',
            items: [
                {
                    speaker: 'A',
                    text: 'ご家族は何人ですか。',
                    romaji: 'Go-kazoku wa nannin desu ka.',
                    translation: 'ครอบครัวมีกี่คน'
                },
                {
                    speaker: 'B',
                    text: '5人です。',
                    romaji: 'Gonin desu.',
                    translation: '5 คน'
                }
            ]
        },
        notes: [
            '1人 = ひとり',
            '2人 = ふたり',
            '3人以上 = さんにん、よにん、ごにん...',
            'なんにん = กี่คน'
        ],
        commonMistakes: [
            'อ่าน 1人、2人 ผิด (ต้องเป็น ひとり、ふたり)',
            'ใช้ลักษณนามผิดกับสิ่งที่ไม่ใช่คน'
        ],
        compareWith: '人 (คน) vs 匹 (สัตว์) vs 個 (สิ่งของ)'
    },
    {
        id: 'counters',
        title: '～台／枚／本／冊／回 ฯลฯ',
        pattern: '数字 + ลักษณนาม',
        minnaBook: 1,
        minnaChapter: 11,
        romaji: 'suuji + ruishikei',
        explanation: 'ลักษณนามต่างๆ สำหรับนับสิ่งของตามลักษณะ: 台=เครื่องใช้, 枚=แผ่น, 本=แท่ง, 冊=เล่ม, 回=ครั้ง',
        usagePoints: [
            '台 = รถ เครื่องใช้ไฟฟ้า',
            '枚 = กระดาษ แผ่นซีดี',
            '本 = ปากกา ขวด',
            '冊 = หนังสือ เล่ม',
            '回 = ครั้ง'
        ],
        examples: [
            { jp: '車を2台買いました。', romaji: 'Kuruma o nidai kaimashita.', th: 'ซื้อรถ 2 คัน' },
            { jp: '写真を10枚撮りました。', romaji: 'Shashin o juumai torimashita.', th: 'ถ่ายรูป 10 รูป' },
            { jp: 'ペンを3本持っています。', romaji: 'Pen o sanbon motte imasu.', th: 'มีปากกา 3 ด้าม' },
            { jp: '本を5冊読みました。', romaji: 'Hon o gosatsu yomimashita.', th: 'อ่านหนังสือ 5 เล่ม' }
        ],
        conversation: {
            title: 'บทสนทนา: การใช้ลักษณนาม',
            items: [
                {
                    speaker: 'A',
                    text: '何枚写真を撮りましたか。',
                    romaji: 'Nanmai shashin o torimashita ka.',
                    translation: 'ถ่ายรูปกี่รูป'
                },
                {
                    speaker: 'B',
                    text: '20枚撮りました。',
                    romaji: 'Nijuumai torimashita.',
                    translation: 'ถ่าย 20 รูป'
                }
            ]
        },
        notes: [
            'ลักษณนามต้องเลือกให้เหมาะกับสิ่งที่นับ',
            'มีการเปลี่ยนเสียง: 1本=いっぽん, 3本=さんぼん',
            'เมื่อไม่แน่ใจ ใช้ 個 ได้เกือบทุกอย่าง'
        ],
        commonMistakes: [
            'เลือกลักษณนามผิด',
            'อ่านเสียงผิดเมื่อมีการเปลี่ยนเสียง'
        ],
        compareWith: '台 vs 枚 vs 本 vs 冊 vs 回 (ใช้กับสิ่งที่ต่างกัน)'
    },
    {
        id: 'dake',
        title: '～だけ',
        pattern: '～だけ',
        minnaBook: 1,
        minnaChapter: 11,
        romaji: '~dake',
        explanation: 'ใช้แสดงความหมาย "แค่...เท่านั้น" หรือ "เพียง..." เน้นจำนวนหรือขอบเขตที่จำกัด',
        usagePoints: [
            'だけ = แค่...เท่านั้น',
            'เน้นความจำกัด',
            'วางหลังคำนาม หรือตัวเลข'
        ],
        examples: [
            { jp: 'パンを一個だけ食べました。', romaji: 'Pan o ikko dake tabemashita.', th: 'กินขนมปังแค่ชิ้นเดียว' },
            { jp: '日本語だけ話せます。', romaji: 'Nihongo dake hanasemasu.', th: 'พูดได้แค่ภาษาญี่ปุ่น' },
            { jp: '10分だけ待ってください。', romaji: 'Juppun dake matte kudasai.', th: 'รอแค่ 10 นาที' }
        ],
        conversation: {
            title: 'บทสนทนา: การจำกัดขอบเขต',
            items: [
                {
                    speaker: 'A',
                    text: 'いくつ買いますか。',
                    romaji: 'Ikutsu kaimasu ka.',
                    translation: 'จะซื้อกี่ชิ้น'
                },
                {
                    speaker: 'B',
                    text: '一つだけお願いします。',
                    romaji: 'Hitotsu dake onegaishimasu.',
                    translation: 'ขอแค่ชิ้นเดียว'
                }
            ]
        },
        notes: [
            'だけ = แค่...เท่านั้น',
            'เน้นขอบเขตที่จำกัด',
            'แตกต่างจาก しか ที่ต้องใช้กับรูปปฏิเสธ'
        ],
        commonMistakes: [
            'สับสน だけ กับ しか',
            'วางตำแหน่ง だけ ผิด'
        ],
                 compareWith: 'だけ (แค่เท่านั้น) vs しか (เพียงแต่...ปฏิเสธ)'
    },

    // ========== Minna no Nihongo เล่ม 1 บทที่ 12 ==========
    {
        id: 'ga-ii-desu',
        title: '～がいいです',
        pattern: '～がいいです',
        minnaBook: 1,
        minnaChapter: 12,
        romaji: '~ga ii desu',
        explanation: 'ใช้เลือกสิ่งที่ต้องการจากหลายทางเลือก หมายความว่า "เอา..." หรือ "...ดี"',
        usagePoints: [
            'ใช้เลือกจากทางเลือกที่มี',
            'が = สิ่งที่เลือก',
            'いい = ดี/เอา'
        ],
        examples: [
            { jp: 'コーヒーがいいです。', romaji: 'Koohii ga ii desu.', th: 'เอากาแฟ' },
            { jp: 'どれがいいですか。', romaji: 'Dore ga ii desu ka.', th: 'เอาอันไหนดี' },
            { jp: '青いのがいいです。', romaji: 'Aoi no ga ii desu.', th: 'เอาสีน้ำเงิน' }
        ],
        conversation: {
            title: 'บทสนทนา: การเลือก',
            items: [
                {
                    speaker: 'A',
                    text: 'お茶とコーヒーとどちらがいいですか。',
                    romaji: 'Ocha to koohii to dochira ga ii desu ka.',
                    translation: 'ชากับกาแฟ เอาไหนดี'
                },
                {
                    speaker: 'B',
                    text: 'コーヒーがいいです。',
                    romaji: 'Koohii ga ii desu.',
                    translation: 'เอากาแฟ'
                }
            ]
        },
        notes: [
            'ใช้เลือกจากสิ่งที่มีให้',
            'が = สิ่งที่เลือก',
            'มักใช้ตอบคำถาม どれ/どちら'
        ],
        commonMistakes: [
            'ใช้ を แทน が',
            'สับสนกับ 好き (ชอบ)'
        ],
        compareWith: 'がいい (เลือก) vs が好き (ชอบ)'
    },
    {
        id: 'ga-hoshii-desu',
        title: '～がほしいです',
        pattern: '～がほしいです',
        minnaBook: 1,
        minnaChapter: 12,
        romaji: '~ga hoshii desu',
        explanation: 'ใช้แสดงความต้องการสิ่งของ แปลว่า "อยากได้..." ほしい = อยากได้',
        usagePoints: [
            'ใช้กับสิ่งของ (คำนาม)',
            'が = สิ่งที่อยากได้',
            'ほしい = อยากได้'
        ],
        examples: [
            { jp: '新しい車がほしいです。', romaji: 'Atarashii kuruma ga hoshii desu.', th: 'อยากได้รถใหม่' },
            { jp: '時間がほしいです。', romaji: 'Jikan ga hoshii desu.', th: 'อยากได้เวลา' },
            { jp: '何がほしいですか。', romaji: 'Nani ga hoshii desu ka.', th: 'อยากได้อะไร' }
        ],
        conversation: {
            title: 'บทสนทนา: ความต้องการ',
            items: [
                {
                    speaker: 'A',
                    text: '誕生日に何がほしいですか。',
                    romaji: 'Tanjoubi ni nani ga hoshii desu ka.',
                    translation: 'วันเกิดอยากได้อะไร'
                },
                {
                    speaker: 'B',
                    text: '本がほしいです。',
                    romaji: 'Hon ga hoshii desu.',
                    translation: 'อยากได้หนังสือ'
                }
            ]
        },
        notes: [
            'ใช้กับคำนาม (สิ่งของ)',
            'が = สิ่งที่อยากได้',
            'ほしい = い形容詞'
        ],
        commonMistakes: [
            'ใช้กับกริยา (ต้องใช้ たい)',
            'ใช้ を แทน が'
        ],
        compareWith: 'ほしい (อยากได้สิ่งของ) vs たい (อยากทำ)'
    },
    {
        id: 'tai-desu',
        title: '～たいです',
        pattern: 'V-ます (ตัด ます) + たいです',
        minnaBook: 1,
        minnaChapter: 12,
        romaji: '~tai desu',
        explanation: 'ใช้แสดงความต้องการทำกิจกรรม แปลว่า "อยากทำ..." เป็นการผันกริยาเป็นคำคุณศัพท์',
        usagePoints: [
            'V-ます → V + たい',
            'กลายเป็นคำคุณศัพท์ い',
            'ใช้ が หรือ を กับกรรม'
        ],
        examples: [
            { jp: '日本へ行きたいです。', romaji: 'Nihon e ikitai desu.', th: 'อยากไปญี่ปุ่น' },
            { jp: '寿司を食べたいです。', romaji: 'Sushi o tabetai desu.', th: 'อยากกินซูชิ' },
            { jp: '映画を見たいです。', romaji: 'Eiga o mitai desu.', th: 'อยากดูหนัง' }
        ],
        conversation: {
            title: 'บทสนทนา: ความต้องการทำ',
            items: [
                {
                    speaker: 'A',
                    text: '何がしたいですか。',
                    romaji: 'Nani ga shitai desu ka.',
                    translation: 'อยากทำอะไร'
                },
                {
                    speaker: 'B',
                    text: '旅行がしたいです。',
                    romaji: 'Ryokou ga shitai desu.',
                    translation: 'อยากท่องเที่ยว'
                }
            ]
        },
        notes: [
            'V-ます → V-たい',
            'เป็นคำคุณศัพท์ い',
            'ปฏิเสธ: たくない',
            'อดีต: たかった'
        ],
        commonMistakes: [
            'ใช้กับคำนาม (ต้องใช้ ほしい)',
            'ผันรูปผิด'
        ],
        compareWith: 'たい (อยากทำ) vs ほしい (อยากได้)'
    },
    {
        id: 'e-ni-ikimasu',
        title: '～へ～に行きます',
        pattern: '場所 + へ + ～に行きます',
        minnaBook: 1,
        minnaChapter: 12,
        romaji: '~e ~ni ikimasu',
        explanation: 'ใช้บอกว่าไปทำอะไรที่ไหน へ = ไป (ทิศทาง), に = เพื่อทำ (วัตถุประสงค์)',
        usagePoints: [
            'V-ます (ตัด ます) + に行きます',
            'へ = ทิศทางการไป',
            'に = วัตถุประสงค์'
        ],
        examples: [
            { jp: 'デパートへ買い物に行きます。', romaji: 'Depaato e kaimono ni ikimasu.', th: 'ไปซื้อของที่ห้างสรรพสินค้า' },
            { jp: '図書館へ本を読みに行きます。', romaji: 'Toshokan e hon o yomi ni ikimasu.', th: 'ไปอ่านหนังสือที่ห้องสมุด' },
            { jp: '公園へ散歩に行きます。', romaji: 'Kouen e sanpo ni ikimasu.', th: 'ไปเดินเล่นที่สวนสาธารณะ' }
        ],
        conversation: {
            title: 'บทสนทนา: วัตถุประสงค์ของการไป',
            items: [
                {
                    speaker: 'A',
                    text: 'どこへ何をしに行きますか。',
                    romaji: 'Doko e nani o shi ni ikimasu ka.',
                    translation: 'ไปทำอะไรที่ไหน'
                },
                {
                    speaker: 'B',
                    text: '映画館へ映画を見に行きます。',
                    romaji: 'Eigakan e eiga o mi ni ikimasu.',
                    translation: 'ไปดูหนังที่โรงภาพยนตร์'
                }
            ]
        },
        notes: [
            'V-ます → V + に行く',
            'へ = ทิศทาง',
            'に = วัตถุประสงค์',
            'ใช้ได้กับ 来ます, 帰ります ด้วย'
        ],
        commonMistakes: [
            'ใช้ を แทน に',
            'ลืมตัด ます จากกริยา'
        ],
        compareWith: 'に行く (ไปทำ) vs を (กรรม)'
    },

    // ========== Minna no Nihongo เล่ม 1 บทที่ 13 ==========
    {
        id: 'masen-ka-invitation',
        title: '～ませんか',
        pattern: 'V-ます (เปลี่ยน ます เป็น ませんか)',
        minnaBook: 1,
        minnaChapter: 13,
        romaji: '~masen ka',
        explanation: 'ใช้ชวนคนอื่นทำกิจกรรมร่วมกัน แปลว่า "ไป...กันไหม" หรือ "ทำ...กันไหม"',
        usagePoints: [
            'V-ます → V-ませんか',
            'ใช้ชวนอย่างสุภาพ',
            'รูปปฏิเสธแต่เป็นคำเชิญ'
        ],
        examples: [
            { jp: '一緒に映画を見ませんか。', romaji: 'Issho ni eiga o mimasen ka.', th: 'ดูหนังด้วยกันไหม' },
            { jp: 'コーヒーを飲みませんか。', romaji: 'Koohii o nomimasen ka.', th: 'ดื่มกาแฟกันไหม' },
            { jp: '今度お食事をしませんか。', romaji: 'Kondo oshokuji o shimasen ka.', th: 'คราวหน้าไปกินข้าวกันไหม' }
        ],
        conversation: {
            title: 'บทสนทนา: การชวน',
            items: [
                {
                    speaker: 'A',
                    text: '今度の日曜日、買い物に行きませんか。',
                    romaji: 'Kondo no nichiyoubi, kaimono ni ikimasen ka.',
                    translation: 'วันอาทิตย์หน้า ไปซื้อของกันไหม'
                },
                {
                    speaker: 'B',
                    text: 'いいですね。行きましょう。',
                    romaji: 'Ii desu ne. Ikimashou.',
                    translation: 'ดีนะ ไปกันเถอะ'
                }
            ]
        },
        notes: [
            'V-ます → V-ませんか',
            'ใช้ชวนอย่างสุภาพ',
            'ตอบรับ: いいですね、ええ',
            'ตอบปฏิเสธ: すみません、ちょっと...'
        ],
        commonMistakes: [
            'สับสนกับ ましょう',
            'ใช้ในสถานการณ์ไม่เหมาะสม'
        ],
        compareWith: 'ませんか (ชวน) vs ましょう (เชิญ/สั่ง)'
    },
    {
        id: 'mashou-ka-offer',
        title: '～ましょうか',
        pattern: 'V-ます (เปลี่ยน ます เป็น ましょうか)',
        minnaBook: 1,
        minnaChapter: 13,
        romaji: '~mashou ka',
        explanation: 'ใช้เสนอตัวช่วยเหลือหรือทำอะไรให้ แปลว่า "ให้ช่วย...ไหม" หรือ "ทำ...ให้ไหม"',
        usagePoints: [
            'V-ます → V-ましょうか',
            'ใช้เสนอความช่วยเหลือ',
            'ผู้พูดจะเป็นคนทำ'
        ],
        examples: [
            { jp: '荷物を持ちましょうか。', romaji: 'Nimotsu o mochimashou ka.', th: 'ให้ถือของให้ไหม' },
            { jp: 'ドアを開けましょうか。', romaji: 'Doa o akemashou ka.', th: 'ให้เปิดประตูให้ไหม' },
            { jp: '手伝いましょうか。', romaji: 'Tetsudaimashou ka.', th: 'ให้ช่วยไหม' }
        ],
        conversation: {
            title: 'บทสนทนา: การเสนอช่วยเหลือ',
            items: [
                {
                    speaker: 'A',
                    text: '重そうですね。持ちましょうか。',
                    romaji: 'Omosasou desu ne. Mochimashou ka.',
                    translation: 'ดูหนักนะ ให้ถือให้ไหม'
                },
                {
                    speaker: 'B',
                    text: 'ありがとうございます。お願いします。',
                    romaji: 'Arigatou gozaimasu. Onegaishimasu.',
                    translation: 'ขอบคุณครับ ขอรบกวนด้วย'
                }
            ]
        },
        notes: [
            'V-ます → V-ましょうか',
            'เสนอความช่วยเหลือ',
            'ผู้พูดจะเป็นคนทำ',
            'ตอบรับ: お願いします',
            'ตอบปฏิเสธ: いいえ、結構です'
        ],
        commonMistakes: [
            'สับสนกับ ませんか (ชวน)',
            'ใช้เมื่อไม่เหมาะสม'
        ],
        compareWith: 'ましょうか (เสนอช่วย) vs ませんか (ชวน)'
    },
    {
        id: 'ga-arimasu-event',
        title: '～があります (เหตุการณ์)',
        pattern: '～があります',
        minnaBook: 1,
        minnaChapter: 13,
        romaji: '~ga arimasu',
        explanation: 'ใช้บอกว่ามีเหตุการณ์ งาน หรือกิจกรรมต่างๆ เกิดขึ้น',
        usagePoints: [
            'ใช้กับเหตุการณ์ งานอีเวนต์',
            'が = เหตุการณ์ที่มี',
            'แตกต่างจาก สิ่งของที่มี'
        ],
        examples: [
            { jp: '来週コンサートがあります。', romaji: 'Raishuu konsaato ga arimasu.', th: 'สัปดาห์หน้ามีคอนเสิร์ต' },
            { jp: '今日は会議があります。', romaji: 'Kyou wa kaigi ga arimasu.', th: 'วันนี้มีประชุม' },
            { jp: '土曜日にパーティーがあります。', romaji: 'Doyoubi ni paatii ga arimasu.', th: 'วันเสาร์มีปาร์ตี้' }
        ],
        conversation: {
            title: 'บทสนทนา: เหตุการณ์',
            items: [
                {
                    speaker: 'A',
                    text: '明日は何かありますか。',
                    romaji: 'Ashita wa nanika arimasu ka.',
                    translation: 'พรุ่งนี้มีอะไรไหม'
                },
                {
                    speaker: 'B',
                    text: '試験があります。',
                    romaji: 'Shiken ga arimasu.',
                    translation: 'มีสอบ'
                }
            ]
        },
        notes: [
            'ใช้กับเหตุการณ์ กิจกรรม',
            'が = เหตุการณ์',
            'บอกเวลาด้วย に'
        ],
        commonMistakes: [
            'สับสนกับ สิ่งของที่มี',
            'ใช้ を แทน が'
        ],
        compareWith: 'があります (เหตุการณ์) vs があります (สิ่งของ)'
    },

    // ========== Minna no Nihongo เล่ม 1 บทที่ 14 ==========
    {
        id: 'te-kudasai',
        title: '～てください',
        pattern: 'V-て + ください',
        minnaBook: 1,
        minnaChapter: 14,
        romaji: '~te kudasai',
        explanation: 'ใช้ขอร้องหรือสั่งอย่างสุภาพ แปลว่า "กรุณา..." หรือ "โปรด..."',
        usagePoints: [
            'V-て + ください',
            'ใช้ขอร้องอย่างสุภาพ',
            'เปลี่ยนกริยาเป็นรูป て'
        ],
        examples: [
            { jp: 'ちょっと待ってください。', romaji: 'Chotto matte kudasai.', th: 'กรุณารอสักครู่' },
            { jp: '電話番号を教えてください。', romaji: 'Denwa bangou o oshiete kudasai.', th: 'กรุณาบอกหมายเลขโทรศัพท์' },
            { jp: 'もう一度言ってください。', romaji: 'Mou ichido itte kudasai.', th: 'กรุณาพูดอีกครั้ง' }
        ],
        conversation: {
            title: 'บทสนทนา: การขอร้อง',
            items: [
                {
                    speaker: 'A',
                    text: 'すみません、写真を撮ってください。',
                    romaji: 'Sumimasen, shashin o totte kudasai.',
                    translation: 'ขอโทษครับ กรุณาถ่ายรูปให้หน่อย'
                },
                {
                    speaker: 'B',
                    text: 'はい、いいですよ。',
                    romaji: 'Hai, ii desu yo.',
                    translation: 'ครับ ได้เลย'
                }
            ]
        },
        notes: [
            'V-て + ください',
            'ใช้ขอร้องอย่างสุภาพ',
            'て-form ต้องจำการผัน',
            'ดูแล้ว: ってください'
        ],
        commonMistakes: [
            'ผันรูป て ผิด',
            'ใช้ในสถานการณ์ไม่เหมาะสม'
        ],
        compareWith: 'てください (ขอร้อง) vs ましょうか (เสนอช่วย)'
    },
    {
        id: 'te-imasu-progressive',
        title: '～ています (กำลัง)',
        pattern: 'V-て + います',
        minnaBook: 1,
        minnaChapter: 14,
        romaji: '~te imasu',
        explanation: 'ใช้แสดงการกระทำที่กำลังดำเนินอยู่ แปลว่า "กำลัง...อยู่"',
        usagePoints: [
            'V-て + います',
            'แสดงการกระทำที่กำลังเกิด',
            'ความหมายคล้าย -ing ในอังกฤษ'
        ],
        examples: [
            { jp: '今、宿題をしています。', romaji: 'Ima, shukudai o shite imasu.', th: 'ตอนนี้กำลังทำการบ้านอยู่' },
            { jp: '母は料理を作っています。', romaji: 'Haha wa ryouri o tsukutte imasu.', th: 'แม่กำลังทำอาหารอยู่' },
            { jp: '雨が降っています。', romaji: 'Ame ga futte imasu.', th: 'ฝนกำลังตกอยู่' }
        ],
        conversation: {
            title: 'บทสนทนา: การกระทำที่กำลังเกิด',
            items: [
                {
                    speaker: 'A',
                    text: '何をしていますか。',
                    romaji: 'Nani o shite imasu ka.',
                    translation: 'กำลังทำอะไรอยู่'
                },
                {
                    speaker: 'B',
                    text: '本を読んでいます。',
                    romaji: 'Hon o yonde imasu.',
                    translation: 'กำลังอ่านหนังสืออยู่'
                }
            ]
        },
        notes: [
            'V-て + います',
            'แสดงการกระทำที่กำลังเกิด',
            'ปฏิเสธ: ていません',
            'คำถาม: ていますか'
        ],
        commonMistakes: [
            'ผันรูป て ผิด',
            'สับสนกับ ています (สถานะ)'
        ],
        compareWith: 'ています (กำลัง) vs ています (สถานะ)'
    },
    {
        id: 'te-mo-ii-desu',
        title: '～てもいいです',
        pattern: 'V-て + もいいです',
        minnaBook: 1,
        minnaChapter: 14,
        romaji: '~te mo ii desu',
        explanation: 'ใช้ขออนุญาตหรือให้อนุญาต แปลว่า "ทำ...ก็ได้" หรือ "...ก็ได้"',
        usagePoints: [
            'V-て + もいいです',
            'ขออนุญาต/ให้อนุญาต',
            'แสดงความเป็นไปได้'
        ],
        examples: [
            { jp: 'ここで写真を撮ってもいいですか。', romaji: 'Koko de shashin o totte mo ii desu ka.', th: 'ถ่ายรูปที่นี่ได้ไหม' },
            { jp: '窓を開けてもいいですか。', romaji: 'Mado o akete mo ii desu ka.', th: 'เปิดหน้าต่างได้ไหม' },
            { jp: 'はい、いいです。', romaji: 'Hai, ii desu.', th: 'ครับ ได้เลย' }
        ],
        conversation: {
            title: 'บทสนทนา: การขออนุญาต',
            items: [
                {
                    speaker: 'A',
                    text: 'タバコを吸ってもいいですか。',
                    romaji: 'Tabako o sutte mo ii desu ka.',
                    translation: 'สูบบุหรี่ได้ไหม'
                },
                {
                    speaker: 'B',
                    text: 'すみません、ちょっと...',
                    romaji: 'Sumimasen, chotto...',
                    translation: 'ขอโทษครับ...'
                }
            ]
        },
        notes: [
            'V-て + もいいです',
            'ขออนุญาต: ～てもいいですか',
            'ให้อนุญาต: はい、いいです',
            'ปฏิเสธ: すみません、ちょっと...'
        ],
        commonMistakes: [
            'ผันรูป て ผิด',
            'ลืมใส่ も'
        ],
        compareWith: 'てもいい (อนุญาต) vs てはいけない (ห้าม)'
    },
    {
        id: 'te-wa-ikemasen',
        title: '～てはいけません',
        pattern: 'V-て + はいけません',
        minnaBook: 1,
        minnaChapter: 14,
        romaji: '~te wa ikemasen',
        explanation: 'ใช้ห้ามหรือแสดงว่าไม่ควรทำ แปลว่า "ห้าม..." หรือ "ไม่ได้..."',
        usagePoints: [
            'V-て + はいけません',
            'ใช้ห้ามทำสิ่งใดสิ่งหนึ่ง',
            'เป็นการห้ามอย่างเป็นทางการ'
        ],
        examples: [
            { jp: 'ここで写真を撮ってはいけません。', romaji: 'Koko de shashin o totte wa ikemasen.', th: 'ห้ามถ่ายรูปที่นี่' },
            { jp: '図書館で話してはいけません。', romaji: 'Toshokan de hanashite wa ikemasen.', th: 'ห้ามพูดคุยในห้องสมุด' },
            { jp: '遅刻してはいけません。', romaji: 'Chikoku shite wa ikemasen.', th: 'ห้ามมาสาย' }
        ],
        conversation: {
            title: 'บทสนทนา: การห้าม',
            items: [
                {
                    speaker: 'A',
                    text: 'ここでタバコを吸ってもいいですか。',
                    romaji: 'Koko de tabako o sutte mo ii desu ka.',
                    translation: 'สูบบุหรี่ที่นี่ได้ไหม'
                },
                {
                    speaker: 'B',
                    text: 'すみません、ここで吸ってはいけません。',
                    romaji: 'Sumimasen, koko de sutte wa ikemasen.',
                    translation: 'ขอโทษครับ ห้ามสูบที่นี่'
                }
            ]
        },
        notes: [
            'V-て + はいけません',
            'ใช้ห้ามอย่างเป็นทางการ',
            'รูปสั้น: ちゃだめ',
            'รูปสุภาพกว่า: ～ないでください'
        ],
        commonMistakes: [
            'ผันรูป て ผิด',
            'ลืมใส่ は'
        ],
        compareWith: 'てはいけない (ห้าม) vs てもいい (อนุญาต)'
    },

    // ========== Minna no Nihongo เล่ม 1 บทที่ 15 ==========
    {
        id: 'te-imasu-ka-status',
        title: '～ていますか (ถามสถานะ)',
        pattern: 'V-て + いますか',
        minnaBook: 1,
        minnaChapter: 15,
        romaji: '~te imasu ka',
        explanation: 'ใช้ถามเกี่ยวกับสถานะหรือสภาพปัจจุบัน เช่น สถานภาพ ตำแหน่ง ฯลฯ',
        usagePoints: [
            'ถามสถานะปัจจุบัน',
            'ถามสถานภาพ',
            'ถามความรู้/ความจำ'
        ],
        examples: [
            { jp: '田中さんは結婚していますか。', romaji: 'Tanaka-san wa kekkon shite imasu ka.', th: 'คุณทานากะแต่งงานแล้วหรือยัง' },
            { jp: 'この人を知っていますか。', romaji: 'Kono hito o shitte imasu ka.', th: 'คุณรู้จักคนนี้ไหม' },
            { jp: 'メガネをかけていますか。', romaji: 'Megane o kakete imasu ka.', th: 'ใส่แว่นตาไหม' }
        ],
        conversation: {
            title: 'บทสนทนา: การถามสถานะ',
            items: [
                {
                    speaker: 'A',
                    text: '田中さんを知っていますか。',
                    romaji: 'Tanaka-san o shitte imasu ka.',
                    translation: 'คุณรู้จักคุณทานากะไหม'
                },
                {
                    speaker: 'B',
                    text: 'はい、知っています。大学の友達です。',
                    romaji: 'Hai, shitte imasu. Daigaku no tomodachi desu.',
                    translation: 'ครับ รู้จัก เป็นเพื่อนมหาวิทยาลัย'
                }
            ]
        },
        notes: [
            'ถามสถานะหรือสภาพที่ยังคงอยู่',
            'คำตอบ: はい、～ています / いいえ、～ていません',
            'ใช้กับสถานภาพ ความรู้ การแต่งกาย',
            'แตกต่างจากการถามการกระทำ'
        ],
        commonMistakes: [
            'สับสนกับการถามการกระทำ',
            'ใช้ผิดบริบท'
        ],
        compareWith: 'ていますか (สถานะ) vs ますか (การกระทำ)'
    },
    {
        id: 'te-imasu-state',
        title: '～ています (สถานะ)',
        pattern: 'V-て + います',
        minnaBook: 1,
        minnaChapter: 15,
        romaji: '~te imasu',
        explanation: 'ใช้แสดงสถานะที่ดำรงอยู่ เช่น การแต่งงาน การมีลูก การรู้จัก ฯลฯ',
        usagePoints: [
            'แสดงสถานะที่ดำรงอยู่',
            'ผลลัพธ์ของการกระทำในอดีต',
            'สถานภาพต่างๆ'
        ],
        examples: [
            { jp: '田中さんは結婚しています。', romaji: 'Tanaka-san wa kekkon shite imasu.', th: 'คุณทานากะแต่งงานแล้ว (อยู่ในสถานะแต่งงาน)' },
            { jp: '私は田中さんを知っています。', romaji: 'Watashi wa Tanaka-san o shitte imasu.', th: 'ฉันรู้จักคุณทานากะ' },
            { jp: 'ドアが開いています。', romaji: 'Doa ga aite imasu.', th: 'ประตูเปิดอยู่' }
        ],
        conversation: {
            title: 'บทสนทนา: สถานภาพ',
            items: [
                {
                    speaker: 'A',
                    text: '田中さんは結婚していますか。',
                    romaji: 'Tanaka-san wa kekkon shite imasu ka.',
                    translation: 'คุณทานากะแต่งงานแล้วหรือยัง'
                },
                {
                    speaker: 'B',
                    text: 'はい、しています。',
                    romaji: 'Hai, shite imasu.',
                    translation: 'ครับ แต่งงานแล้ว'
                }
            ]
        },
        notes: [
            'แสดงสถานะที่คงอยู่',
            'ผลลัพธ์ของการกระทำ',
            'มักใช้กับ: 結婚、知る、住む、持つ',
            'แตกต่างจาก ています (กำลัง)'
        ],
        commonMistakes: [
            'สับสนกับ ています (กำลัง)',
            'ใช้ผิดบริบท'
        ],
        compareWith: 'ています (สถานะ) vs ています (กำลัง)'
    },
    {
        id: 'te-imasu-experience',
        title: '～ています (ประสบการณ์)',
        pattern: 'V-て + います',
        minnaBook: 1,
        minnaChapter: 15,
        romaji: '~te imasu',
        explanation: 'ใช้กับกริยาเคลื่อนไหวเพื่อแสดงประสบการณ์ที่เคยทำมาแล้ว',
        usagePoints: [
            'ใช้กับกริยาเคลื่อนไหว',
            'แสดงประสบการณ์',
            'เป็นการกระทำที่เคยทำ'
        ],
        examples: [
            { jp: '私は日本に行っています。', romaji: 'Watashi wa Nihon ni itte imasu.', th: 'ฉันเคยไปญี่ปุ่น (และกลับมาแล้ว)' },
            { jp: '友達が来ています。', romaji: 'Tomodachi ga kite imasu.', th: 'เพื่อนมาแล้ว (และอยู่ที่นี่)' },
            { jp: '荷物が届いています。', romaji: 'Nimotsu ga todoite imasu.', th: 'ของส่งมาถึงแล้ว' }
        ],
        conversation: {
            title: 'บทสนทนา: ประสบการณ์',
            items: [
                {
                    speaker: 'A',
                    text: '田中さんはもう帰っていますか。',
                    romaji: 'Tanaka-san wa mou kaette imasu ka.',
                    translation: 'คุณทานากะกลับไปแล้วหรือยัง'
                },
                {
                    speaker: 'B',
                    text: 'はい、帰っています。',
                    romaji: 'Hai, kaette imasu.',
                    translation: 'ครับ กลับไปแล้ว'
                }
            ]
        },
        notes: [
            'ใช้กับกริยาเคลื่อนไหว',
            'แสดงผลลัพธ์ที่เห็น',
            'มักใช้ もう (แล้ว) ด้วย',
            'บ่งบอกสถานการณ์ปัจจุบัน'
        ],
        commonMistakes: [
            'สับสนกับการใช้อื่นๆ ของ ています',
            'ใช้กับกริยาที่ไม่เหมาะสม'
        ],
        compareWith: 'ています (ประสบการณ์) vs ました (อดีต)'
    },

    // ========== Minna no Nihongo เล่ม 1 บทที่ 16 ==========
    {
        id: 'te-connection',
        title: '～て、～て、～ます',
        pattern: 'V-て + V-て + V-ます',
        minnaBook: 1,
        minnaChapter: 16,
        romaji: '~te, ~te, ~masu',
        explanation: 'ใช้เชื่อมกริยาหลายตัวเป็นลำดับการกระทำ แสดงการกระทำที่ต่อเนื่องกัน',
        usagePoints: [
            'เชื่อมกริยาหลายตัว',
            'แสดงลำดับการกระทำ',
            'การกระทำต่อเนื่อง'
        ],
        examples: [
            { jp: '朝起きて、歯を磨いて、朝ご飯を食べます。', romaji: 'Asa okite, ha o migaite, asagohan o tabemasu.', th: 'เช้าตื่นนอน แปรงฟัน กินข้าวเช้า' },
            { jp: '買い物をして、料理を作って、食べました。', romaji: 'Kaimono o shite, ryouri o tsukutte, tabemashita.', th: 'ซื้อของ ทำอาหาร กิน' },
            { jp: '宿題をして、テレビを見て、寝ます。', romaji: 'Shukudai o shite, terebi o mite, nemasu.', th: 'ทำการบ้าน ดูทีวี นอน' }
        ],
        conversation: {
            title: 'บทสนทนา: ลำดับการกระทำ',
            items: [
                {
                    speaker: 'A',
                    text: '昨日何をしましたか。',
                    romaji: 'Kinou nani o shimashita ka.',
                    translation: 'เมื่อวานทำอะไรบ้าง'
                },
                {
                    speaker: 'B',
                    text: '友達に会って、映画を見て、食事をしました。',
                    romaji: 'Tomodachi ni atte, eiga o mite, shokuji o shimashita.',
                    translation: 'เจอเพื่อน ดูหนัง กินข้าว'
                }
            ]
        },
        notes: [
            'เชื่อมการกระทำหลายอย่าง',
            'แสดงลำดับเวลา',
            'กริยาสุดท้ายผันตามเวลา',
            'กริยาก่อนหน้าใช้รูป て'
        ],
        commonMistakes: [
            'ผันกริยาผิด',
            'ลืมใช้รูป て'
        ],
        compareWith: 'て (ลำดับ) vs から (เหตุผล)'
    },
    {
        id: 'kara-reason',
        title: '～から',
        pattern: '理由 + から',
        minnaBook: 1,
        minnaChapter: 16,
        romaji: '~kara',
        explanation: 'ใช้แสดงเหตุผลหรือสาเหตุ แปลว่า "เพราะ..." หรือ "เนื่องจาก..."',
        usagePoints: [
            'แสดงเหตุผล/สาเหตุ',
            'วางหลังประโยคเหตุผล',
            'ใช้ได้กับทุกรูปประโยค'
        ],
        examples: [
            { jp: '雨が降っているから、家にいます。', romaji: 'Ame ga futte iru kara, ie ni imasu.', th: 'เพราะฝนตก เลยอยู่บ้าน' },
            { jp: '時間がないから、急ぎます。', romaji: 'Jikan ga nai kara, isogimasu.', th: 'เพราะไม่มีเวลา เลยต้องรีบ' },
            { jp: '疲れたから、休みます。', romaji: 'Tsukareta kara, yasumimasu.', th: 'เพราะเหนื่อย เลยพัก' }
        ],
        conversation: {
            title: 'บทสนทนา: การให้เหตุผล',
            items: [
                {
                    speaker: 'A',
                    text: 'どうして遅くなったんですか。',
                    romaji: 'Doushite osoku natta n desu ka.',
                    translation: 'ทำไมมาช้า'
                },
                {
                    speaker: 'B',
                    text: '電車が遅れたから、遅くなりました。',
                    romaji: 'Densha ga okureta kara, osoku narimashita.',
                    translation: 'เพราะรถไฟมาช้า เลยมาสาย'
                }
            ]
        },
        notes: [
            'から = เพราะ/เนื่องจาก',
            'วางหลังเหตุผล',
            'ใช้ได้กับทุกรูปประโยค',
            'คำถาม: どうして/なぜ'
        ],
        commonMistakes: [
            'สับสนกับ ので',
            'วางตำแหน่งผิด'
        ],
        compareWith: 'から (เหตุผล) vs ので (เหตุผล สุภาพ)'
    },
    {
        id: 'ga-dekimasu',
        title: '～ができます',
        pattern: '～ができます',
        minnaBook: 1,
        minnaChapter: 16,
        romaji: '~ga dekimasu',
        explanation: 'ใช้แสดงความสามารถในการทำสิ่งใดสิ่งหนึ่ง แปลว่า "สามารถ..." หรือ "ทำ...ได้"',
        usagePoints: [
            'แสดงความสามารถ',
            'ใช้ が กับสิ่งที่ทำได้',
            'มักใช้กับงาน กีฬา ภาษา'
        ],
        examples: [
            { jp: '日本語ができます。', romaji: 'Nihongo ga dekimasu.', th: 'ทำภาษาญี่ปุ่นได้' },
            { jp: '料理ができます。', romaji: 'Ryouri ga dekimasu.', th: 'ทำอาหารได้' },
            { jp: 'テニスができますか。', romaji: 'Tenisu ga dekimasu ka.', th: 'เล่นเทนนิสได้ไหม' }
        ],
        conversation: {
            title: 'บทสนทนา: ความสามารถ',
            items: [
                {
                    speaker: 'A',
                    text: '何ができますか。',
                    romaji: 'Nani ga dekimasu ka.',
                    translation: 'ทำอะไรได้บ้าง'
                },
                {
                    speaker: 'B',
                    text: 'パソコンができます。',
                    romaji: 'Pasokon ga dekimasu.',
                    translation: 'ใช้คอมพิวเตอร์ได้'
                }
            ]
        },
        notes: [
            'が = สิ่งที่ทำได้',
            'できます = สามารถ',
            'มักใช้กับทักษะ ภาษา',
            'ปฏิเสธ: できません'
        ],
        commonMistakes: [
            'ใช้ を แทน が',
            'สับสนกับ わかります'
        ],
        compareWith: 'できます (สามารถ) vs わかります (เข้าใจ)'
    },

    // ========== Minna no Nihongo เล่ม 1 บทที่ 17 ==========
    {
        id: 'nakereba-narimasen',
        title: '～なければなりません',
        pattern: 'V-ない (เปลี่ยน ない เป็น なければなりません)',
        minnaBook: 1,
        minnaChapter: 17,
        romaji: '~nakereba narimasen',
        explanation: 'ใช้แสดงความจำเป็น หน้าที่ หรือข้อบังคับ แปลว่า "ต้อง..." หรือ "จำเป็นต้อง..."',
        usagePoints: [
            'แสดงความจำเป็น',
            'V-ない → V-なければなりません',
            'เป็นข้อบังคับ/หน้าที่'
        ],
        examples: [
            { jp: '毎日薬を飲まなければなりません。', romaji: 'Mainichi kusuri o nomanakere ba narimasen.', th: 'ต้องกินยาทุกวัน' },
            { jp: '9時までに来なければなりません。', romaji: 'Kuji made ni konakere ba narimasen.', th: 'ต้องมาภายใน 9 โมง' },
            { jp: '宿題をしなければなりません。', romaji: 'Shukudai o shinakere ba narimasen.', th: 'ต้องทำการบ้าน' }
        ],
        conversation: {
            title: 'บทสนทนา: ความจำเป็น',
            items: [
                {
                    speaker: 'A',
                    text: '明日までに何をしなければなりませんか。',
                    romaji: 'Ashita made ni nani o shinakere ba narimasen ka.',
                    translation: 'พรุ่งนี้ต้องทำอะไรบ้าง'
                },
                {
                    speaker: 'B',
                    text: 'レポートを書かなければなりません。',
                    romaji: 'Repooto o kakanakere ba narimasen.',
                    translation: 'ต้องเขียนรายงาน'
                }
            ]
        },
        notes: [
            'V-ない → V-なければなりません',
            'แสดงความจำเป็น',
            'รูปสั้น: ～なきゃ',
            'เป็นทางการมาก'
        ],
        commonMistakes: [
            'ผันรูป ない ผิด',
            'ใช้ในสถานการณ์ไม่เหมาะสม'
        ],
        compareWith: 'なければならない (ต้อง) vs なくてもいい (ไม่ต้อง)'
    },
    {
        id: 'nakute-mo-ii-desu',
        title: '～なくてもいいです',
        pattern: 'V-ない (เปลี่ยน ない เป็น なくてもいいです)',
        minnaBook: 1,
        minnaChapter: 17,
        romaji: '~nakute mo ii desu',
        explanation: 'ใช้แสดงว่าไม่จำเป็นต้องทำ แปลว่า "ไม่ต้อง...ก็ได้" หรือ "ไม่จำเป็นต้อง..."',
        usagePoints: [
            'แสดงความไม่จำเป็น',
            'V-ない → V-なくてもいいです',
            'ให้อนุญาตไม่ทำ'
        ],
        examples: [
            { jp: '明日来なくてもいいです。', romaji: 'Ashita konakute mo ii desu.', th: 'พรุ่งนี้ไม่มาก็ได้' },
            { jp: '全部食べなくてもいいです。', romaji: 'Zenbu tabenakute mo ii desu.', th: 'ไม่กินหมดก็ได้' },
            { jp: '急がなくてもいいです。', romaji: 'Isoganakute mo ii desu.', th: 'ไม่รีบก็ได้' }
        ],
        conversation: {
            title: 'บทสนทนา: ความไม่จำเป็น',
            items: [
                {
                    speaker: 'A',
                    text: '宿題をしなければなりませんか。',
                    romaji: 'Shukudai o shinakere ba narimasen ka.',
                    translation: 'ต้องทำการบ้านไหม'
                },
                {
                    speaker: 'B',
                    text: 'いいえ、しなくてもいいです。',
                    romaji: 'Iie, shinakute mo ii desu.',
                    translation: 'ไม่ ไม่ทำก็ได้'
                }
            ]
        },
        notes: [
            'V-ない → V-なくてもいいです',
            'แสดงความไม่จำเป็น',
            'ให้อนุญาตไม่ทำ',
            'รูปสั้น: なくてもいい'
        ],
        commonMistakes: [
            'ผันรูป ない ผิด',
            'สับสนกับ てもいい'
        ],
        compareWith: 'なくてもいい (ไม่ต้อง) vs なければならない (ต้อง)'
    },
    {
        id: 'koto-ga-dekimasu',
        title: '～ことができます',
        pattern: 'V-辞書形 + ことができます',
        minnaBook: 1,
        minnaChapter: 17,
        romaji: '~koto ga dekimasu',
        explanation: 'ใช้แสดงความสามารถในการทำกิจกรรม แปลว่า "สามารถทำ...ได้"',
        usagePoints: [
            'V-辞書形 + ことができます',
            'แสดงความสามารถ',
            'เน้นการกระทำ'
        ],
        examples: [
            { jp: '漢字を読むことができます。', romaji: 'Kanji o yomu koto ga dekimasu.', th: 'สามารถอ่านคันจิได้' },
            { jp: '車を運転することができます。', romaji: 'Kuruma o unten suru koto ga dekimasu.', th: 'สามารถขับรถได้' },
            { jp: '泳ぐことができますか。', romaji: 'Oyogu koto ga dekimasu ka.', th: 'ว่ายน้ำได้ไหม' }
        ],
        conversation: {
            title: 'บทสนทนา: ความสามารถในการกระทำ',
            items: [
                {
                    speaker: 'A',
                    text: '何をすることができますか。',
                    romaji: 'Nani o suru koto ga dekimasu ka.',
                    translation: 'สามารถทำอะไรได้บ้าง'
                },
                {
                    speaker: 'B',
                    text: 'ピアノを弾くことができます。',
                    romaji: 'Piano o hiku koto ga dekimasu.',
                    translation: 'สามารถเล่นเปียโนได้'
                }
            ]
        },
        notes: [
            'V-辞書形 + ことができます',
            'เน้นการกระทำเฉพาะ',
            'เป็นทางการกว่า ～ができます',
            'ปฏิเสธ: ことができません'
        ],
        commonMistakes: [
            'ใช้รูป ます แทน 辞書形',
            'ลืมใส่ こと'
        ],
        compareWith: 'ことができる (กระทำได้) vs ができる (ทักษะ)'
    },
    {
        id: 'mae-ni',
        title: '～まえに',
        pattern: 'V-辞書形/N + まえに',
        minnaBook: 1,
        minnaChapter: 17,
        romaji: '~mae ni',
        explanation: 'ใช้แสดงเวลา "ก่อนที่จะ..." หรือ "ก่อน..."',
        usagePoints: [
            'V-辞書形 + まえに',
            'N + のまえに',
            'แสดงลำดับเวลา'
        ],
        examples: [
            { jp: '寝るまえに歯を磨きます。', romaji: 'Neru mae ni ha o migakimasu.', th: 'ก่อนนอนจะแปรงฟัน' },
            { jp: '食事のまえに手を洗います。', romaji: 'Shokuji no mae ni te o araimasu.', th: 'ก่อนกินข้าวจะล้างมือ' },
            { jp: '会議のまえに資料を読みます。', romaji: 'Kaigi no mae ni shiryou o yomimasu.', th: 'ก่อนประชุมจะอ่านเอกสาร' }
        ],
        conversation: {
            title: 'บทสนทนา: ลำดับเวลา',
            items: [
                {
                    speaker: 'A',
                    text: '出かけるまえに何をしますか。',
                    romaji: 'Dekakeru mae ni nani o shimasu ka.',
                    translation: 'ก่อนออกไปจะทำอะไร'
                },
                {
                    speaker: 'B',
                    text: '天気を調べます。',
                    romaji: 'Tenki o shirabemasu.',
                    translation: 'จะดูสภาพอากาศ'
                }
            ]
        },
        notes: [
            'V-辞書形 + まえに',
            'N + のまえに',
            'แสดงการกระทำก่อน',
            'ตรงข้าม: あとで (หลังจาก)'
        ],
        commonMistakes: [
            'ใช้รูป ます แทน 辞書形',
            'ลืมใส่ の กับคำนาม'
        ],
                 compareWith: 'まえに (ก่อน) vs あとで (หลัง)'
    },

    // ========== Minna no Nihongo เล่ม 1 บทที่ 18-25 ==========
    {
        id: 'ta-koto-ga-arimasu',
        title: '～たことがあります',
        pattern: 'V-た + ことがあります',
        minnaBook: 1,
        minnaChapter: 18,
        romaji: '~ta koto ga arimasu',
        explanation: 'ใช้แสดงประสบการณ์ที่เคยทำมาแล้ว แปลว่า "เคย..."',
        usagePoints: [
            'แสดงประสบการณ์ในอดีต',
            'ใช้กับสิ่งที่เคยทำมาแล้ว',
            'ใช้ V-た + ことがあります'
        ],
        examples: [
            { jp: '日本に行ったことがあります。', romaji: 'Nihon ni itta koto ga arimasu.', th: 'เคยไปญี่ปุ่น' },
            { jp: '寿司を食べたことがありますか。', romaji: 'Sushi o tabeta koto ga arimasu ka.', th: 'เคยกินซูชิไหม' },
            { jp: 'フランス語を勉強したことがあります。', romaji: 'Furansugo o benkyou shita koto ga arimasu.', th: 'เคยเรียนภาษาฝรั่งเศส' }
        ],
        conversation: {
            title: 'บทสนทนา: ประสบการณ์',
            items: [
                {
                    speaker: 'A',
                    text: '外国に住んだことがありますか。',
                    romaji: 'Gaikoku ni sunda koto ga arimasu ka.',
                    translation: 'เคยอยู่ต่างประเทศไหม'
                },
                {
                    speaker: 'B',
                    text: 'はい、アメリカに住んだことがあります。',
                    romaji: 'Hai, Amerika ni sunda koto ga arimasu.',
                    translation: 'ครับ เคยอยู่อเมริกา'
                },
                {
                    speaker: 'A',
                    text: 'いいですね。どのくらい住んでいましたか。',
                    romaji: 'Ii desu ne. Dono kurai sunde imashita ka.',
                    translation: 'ดีนะ อยู่นานแค่ไหน'
                }
            ]
        },
        notes: [
            'V-た + ことがあります',
            'แสดงประสบการณ์',
            'ใช้ถาม: ～たことがありますか',
            'ปฏิเสธ: ～たことがありません'
        ],
        commonMistakes: [
            'ใช้กริยารูปผิด (ต้องเป็น V-た)',
            'สับสนกับ ～ています (สถานะ)'
        ],
        compareWith: 'たことがあります (เคย) vs ました (ทำแล้ว)'
    },
    {
        id: 'tari-tari-shimasu',
        title: '～たり、～たりします',
        pattern: 'V-たり + V-たり + します',
        minnaBook: 1,
        minnaChapter: 18,
        romaji: '~tari, ~tari shimasu',
        explanation: 'ใช้ยกตัวอย่างการกระทำหลายอย่าง แปลว่า "ทำ...บ้าง...บ้าง"',
        usagePoints: [
            'ยกตัวอย่างการกระทำหลายอย่าง',
            'ไม่จำเป็นต้องทำครบทุกอย่างที่กล่าว',
            'แสดงกิจกรรมที่หลากหลาย'
        ],
        examples: [
            { jp: '休みの日は映画を見たり、買い物をしたりします。', romaji: 'Yasumi no hi wa eiga o mitari, kaimono o shitari shimasu.', th: 'วันหยุดดูหนังบ้าง ซื้อของบ้าง' },
            { jp: '朝、新聞を読んだり、音楽を聞いたりします。', romaji: 'Asa, shinbun o yondari, ongaku o kiitari shimasu.', th: 'ตอนเช้าอ่านหนังสือพิมพ์บ้าง ฟังเพลงบ้าง' },
            { jp: '旅行で写真を撮ったり、お土産を買ったりしました。', romaji: 'Ryokou de shashin o tottari, omiyage o kattari shimashita.', th: 'ในการเดินทางถ่ายรูปบ้าง ซื้อของฝากบ้าง' }
        ],
        conversation: {
            title: 'บทสนทนา: กิจกรรมประจำ',
            items: [
                {
                    speaker: 'A',
                    text: '週末は何をしますか。',
                    romaji: 'Shuumatsu wa nani o shimasu ka.',
                    translation: 'วันหยุดสุดสัปดาห์ทำอะไรบ้าง'
                },
                {
                    speaker: 'B',
                    text: '掃除をしたり、洗濯をしたり、料理を作ったりします。',
                    romaji: 'Souji o shitari, sentaku o shitari, ryouri o tsukuttari shimasu.',
                    translation: 'ทำความสะอาดบ้าง ซักผ้าบ้าง ทำอาหารบ้าง'
                }
            ]
        },
        notes: [
            'V-たり + V-たり + します',
            'ยกตัวอย่างการกระทำ',
            'ไม่จำเป็นต้องครบทุกอย่าง',
            'ใช้ในการอธิบายกิจกรรม'
        ],
        commonMistakes: [
            'ลืมใส่ します ท้ายประโยค',
            'ใช้กริยารูปผิด (ต้องเป็น V-た + り)'
        ],
        compareWith: 'たり (ตัวอย่าง) vs て (ลำดับ) vs から (เหตุผล)'
    },
    {
        id: 'ku-narimasu',
        title: '～くなります／～になります',
        pattern: 'い adj.-く + なります / な adj./N + になります',
        minnaBook: 1,
        minnaChapter: 18,
        romaji: '~ku narimasu / ~ni narimasu',
        explanation: 'ใช้แสดงการเปลี่ยนแปลง แปลว่า "กลายเป็น..."',
        usagePoints: [
            'แสดงการเปลี่ยนแปลงที่จะเกิดขึ้น',
            'い形容詞ใช้ ～くなります',
            'な形容詞/คำนาม ใช้ ～になります'
        ],
        examples: [
            { jp: '暖かくなりました。', romaji: 'Atatakaku narimashita.', th: 'อากาศอบอุ่นขึ้น' },
            { jp: '有名になりました。', romaji: 'Yuumei ni narimashita.', th: 'มีชื่อเสียงขึ้น' },
            { jp: '日本語が上手になりたいです。', romaji: 'Nihongo ga jouzu ni naritai desu.', th: 'อยากเก่งภาษาญี่ปุ่น' }
        ],
        conversation: {
            title: 'บทสนทนา: การเปลี่ยนแปลง',
            items: [
                {
                    speaker: 'A',
                    text: '最近暖かくなりましたね。',
                    romaji: 'Saikin atatakaku narimashita ne.',
                    translation: 'ช่วงนี้อากาศอบอุ่นขึ้นนะ'
                },
                {
                    speaker: 'B',
                    text: 'そうですね。もうすぐ夏になります。',
                    romaji: 'Sou desu ne. Mou sugu natsu ni narimasu.',
                    translation: 'ใช่นะ อีกไม่นานก็จะเป็นฤดูร้อนแล้ว'
                }
            ]
        },
        notes: [
            'い adj. + くなる',
            'な adj./N + になる',
            'แสดงการเปลี่ยนแปลง',
            'ใช้ได้ทั้งอดีตและอนาคต'
        ],
        commonMistakes: [
            'ใช้ くなります กับ な形容詞',
            'ใช้ になります กับ い形容詞'
        ],
        compareWith: 'くなります (จะเปลี่ยน) vs くなりました (เปลี่ยนแล้ว)'
    },
    {
        id: 'n-desu-ga',
        title: '～んですが',
        pattern: '～んですが',
        minnaBook: 1,
        minnaChapter: 19,
        romaji: '~n desu ga',
        explanation: 'ใช้ปูทางเข้าสู่คำขอหรือคำอธิบาย แปลว่า "เป็นอย่างนี้นะ แต่..."',
        usagePoints: [
            'ปูทางเข้าสู่คำขอ',
            'อธิบายสถานการณ์ก่อนขอร้อง',
            'ทำให้การขอร้องไม่ตรงไปตรงมา'
        ],
        examples: [
            { jp: 'ちょっと聞きたいことがあるんですが。', romaji: 'Chotto kikitai koto ga aru n desu ga.', th: 'มีอะไรอยากถามหน่อยนะ' },
            { jp: '明日休みたいんですが、いいですか。', romaji: 'Ashita yasumitai n desu ga, ii desu ka.', th: 'พรุ่งนี้อยากหยุดนะ ได้ไหม' },
            { jp: '道に迷ったんですが、助けてもらえませんか。', romaji: 'Michi ni mayotta n desu ga, tasukete moraemasen ka.', th: 'หลงทางแล้วนะ ช่วยได้ไหม' }
        ],
        conversation: {
            title: 'บทสนทนา: การปูทางขอร้อง',
            items: [
                {
                    speaker: 'A',
                    text: 'すみません、ちょっとお聞きしたいことがあるんですが。',
                    romaji: 'Sumimasen, chotto okiki shitai koto ga aru n desu ga.',
                    translation: 'ขอโทษครับ มีอะไรอยากถามหน่อยนะ'
                },
                {
                    speaker: 'B',
                    text: 'はい、何でしょうか。',
                    romaji: 'Hai, nan deshou ka.',
                    translation: 'ครับ อะไรครับ'
                },
                {
                    speaker: 'A',
                    text: '駅への道がわからないんですが、教えてもらえませんか。',
                    romaji: 'Eki e no michi ga wakaranai n desu ga, oshiete moraemasen ka.',
                    translation: 'ไม่รู้ทางไปสถานีนะ บอกทางให้ได้ไหม'
                }
            ]
        },
        notes: [
            'んです = การอธิบายหรือเน้น',
            'が = แต่/อย่างไรก็ตาม',
            'ทำให้การขอร้องนุ่มนวลขึ้น',
            'ใช้ในสถานการณ์สุภาพ'
        ],
        commonMistakes: [
            'ลืมใช้ が ปิดท้าย',
            'ใช้กับคนไม่คุ้นเคยโดยไม่ได้ใส่คำสุภาพ'
        ],
        compareWith: 'んです (อธิบาย) vs んですが (ปูทาง)'
    },
    {
        id: 'n-desu',
        title: '～んです',
        pattern: '～んです',
        minnaBook: 1,
        minnaChapter: 19,
        romaji: '~n desu',
        explanation: 'ใช้เน้นการอธิบายเหตุผลหรือสถานการณ์ แปลว่า "เน้นอธิบาย"',
        usagePoints: [
            'เน้นการอธิบาย',
            'แสดงเหตุผลหรือสาเหตุ',
            'รูปไม่เป็นทางการ'
        ],
        examples: [
            { jp: 'どうして遅れたんですか。', romaji: 'Doushite okureta n desu ka.', th: 'ทำไมมาช้า(อธิบายหน่อย)' },
            { jp: '電車が遅れたんです。', romaji: 'Densha ga okureta n desu.', th: '(เพราะ)รถไฟมาช้า' }
        ],
        conversation: {
            title: 'บทสนทนา: การอธิบายเหตุผล',
            items: [
                {
                    speaker: 'A',
                    text: 'どうして日本語を勉強しているんですか。',
                    romaji: 'Doushite Nihongo o benkyou shite iru n desu ka.',
                    translation: 'ทำไมถึงเรียนภาษาญี่ปุ่น'
                },
                {
                    speaker: 'B',
                    text: '日本の会社で働きたいんです。',
                    romaji: 'Nihon no kaisha de hatarakitai n desu.',
                    translation: 'เพราะอยากทำงานในบริษัทญี่ปุ่น'
                }
            ]
        },
        notes: [
            'เน้นการอธิบาย',
            'รูปไม่เป็นทางการ',
            'ใช้ในบทสนทนาธรรมดา',
            'แสดงความสนใจในคำตอบ'
        ],
        commonMistakes: [
            'สับสนกับ です ธรรมดา',
            'ใช้ในสถานการณ์ที่เป็นทางการเกินไป'
        ],
        compareWith: 'んです (เน้นอธิบาย) vs です (ธรรมดา)'
    },
    {
        id: 'i-kute-na-de',
        title: 'い→くて、な→で',
        pattern: 'い adj.-くて / な adj.-で',
        minnaBook: 1,
        minnaChapter: 19,
        romaji: 'i adj.-kute / na adj.-de',
        explanation: 'ใช้เชื่อมคำคุณศัพท์ แปลว่า "...และ..."',
        usagePoints: [
            'เชื่อมคำคุณศัพท์หลายตัว',
            'い形容詞ใช้ ～くて',
            'な形容詞ใช้ ～で'
        ],
        examples: [
            { jp: 'この店は安くて、おいしいです。', romaji: 'Kono mise wa yasukute, oishii desu.', th: 'ร้านนี้ถูกและอร่อย' },
            { jp: '静かで、きれいな町です。', romaji: 'Shizuka de, kirei na machi desu.', th: 'เมืองที่เงียบและสวย' },
            { jp: '彼は優しくて、親切です。', romaji: 'Kare wa yasashikute, shinsetsu desu.', th: 'เขาใจดีและมีน้ำใจ' }
        ],
        conversation: {
            title: 'บทสนทนา: การอธิบายลักษณะ',
            items: [
                {
                    speaker: 'A',
                    text: '新しいアパートはどうですか。',
                    romaji: 'Atarashii apaato wa dou desu ka.',
                    translation: 'อพาร์ตเมนต์ใหม่เป็นอย่างไร'
                },
                {
                    speaker: 'B',
                    text: '広くて、明るくて、とてもいいです。',
                    romaji: 'Hirokute, akarukute, totemo ii desu.',
                    translation: 'กว้าง สว่าง ดีมาก'
                }
            ]
        },
        notes: [
            'い adj. + くて',
            'な adj. + で',
            'เชื่อมคำคุณศัพท์',
            'สามารถเชื่อมได้หลายตัว'
        ],
        commonMistakes: [
            'ใช้ くて กับ な形容詞',
            'ใช้ で กับ い形容詞'
        ],
        compareWith: 'くて/で (เชื่อม) vs そして (แล้วก็)'
    },
    {
        id: 'deshou',
        title: '～でしょう',
        pattern: '～でしょう',
        minnaBook: 1,
        minnaChapter: 20,
        romaji: '~deshou',
        explanation: 'ใช้แสดงความเป็นไปได้หรือการคาดเดา แปลว่า "น่าจะ..."',
        usagePoints: [
            'แสดงความเป็นไปได้',
            'การคาดเดาอย่างมั่นใจ',
            'ใช้กับอนาคต'
        ],
        examples: [
            { jp: '明日は雨が降るでしょう。', romaji: 'Ashita wa ame ga furu deshou.', th: 'พรุ่งนี้น่าจะฝนตก' },
            { jp: '田中さんは来るでしょう。', romaji: 'Tanaka-san wa kuru deshou.', th: 'คุณทานากะน่าจะมา' },
            { jp: 'この映画は面白いでしょう。', romaji: 'Kono eiga wa omoshiroi deshou.', th: 'หนังเรื่องนี้น่าจะสนุก' }
        ],
        conversation: {
            title: 'บทสนทนา: การคาดเดา',
            items: [
                {
                    speaker: 'A',
                    text: '明日のお天気はどうでしょうか。',
                    romaji: 'Ashita no otenki wa dou deshou ka.',
                    translation: 'อากาศพรุ่งนี้จะเป็นอย่างไร'
                },
                {
                    speaker: 'B',
                    text: '晴れるでしょう。',
                    romaji: 'Hareru deshou.',
                    translation: 'น่าจะแจ่มใส'
                }
            ]
        },
        notes: [
            'แสดงความเป็นไปได้',
            'การคาดเดา',
            'มั่นใจมากกว่า かもしれません',
            'ใช้กับทุกรูปประโยค'
        ],
        commonMistakes: [
            'ใช้กับอดีต (ต้องใช้กับอนาคต)',
            'สับสนกับ かもしれません'
        ],
        compareWith: 'でしょう (น่าจะ) vs かもしれません (อาจจะ)'
    },
    {
        id: 'ku-narimashita-ni-narimashita',
        title: '～くなりました／～になりました',
        pattern: 'い adj.-く + なりました / な adj./N + になりました',
        minnaBook: 1,
        minnaChapter: 20,
        romaji: '~ku narimashita / ~ni narimashita',
        explanation: 'ใช้แสดงการเปลี่ยนแปลงที่เกิดขึ้นแล้ว แปลว่า "กลายเป็น...แล้ว" หรือ "เปลี่ยนเป็น...แล้ว"',
        usagePoints: [
            'แสดงการเปลี่ยนแปลงที่เกิดขึ้นแล้ว',
            'い形容詞ใช้ ～くなりました',
            'な形容詞/คำนาม ใช้ ～になりました'
        ],
        examples: [
            { jp: '天気が暖かくなりました。', romaji: 'Tenki ga atatakaku narimashita.', th: 'อากาศอบอุ่นขึ้นแล้ว' },
            { jp: '息子は医者になりました。', romaji: 'Musuko wa isha ni narimashita.', th: 'ลูกชายเป็นหมอแล้ว' },
            { jp: '町が静かになりました。', romaji: 'Machi ga shizuka ni narimashita.', th: 'เมืองเงียบลงแล้ว' }
        ],
        conversation: {
            title: 'บทสนทนา: การเปลี่ยนแปลง',
            items: [
                {
                    speaker: 'A',
                    text: '最近どうですか。',
                    romaji: 'Saikin dou desu ka.',
                    translation: 'เป็นอย่างไรบ้างช่วงนี้'
                },
                {
                    speaker: 'B',
                    text: '仕事が忙しくなりました。',
                    romaji: 'Shigoto ga isogashiku narimashita.',
                    translation: 'งานยุ่งขึ้นแล้ว'
                }
            ]
        },
        notes: [
            'い形容詞: ～い → ～くなりました',
            'な形容詞: ～な → ～になりました',
            'คำนาม: N → Nになりました',
            'แสดงการเปลี่ยนแปลงที่เกิดขึ้นแล้ว'
        ],
        commonMistakes: [
            'ใช้ くなりました กับ な形容詞',
            'ใช้ になりました กับ い形容詞'
        ],
        compareWith: 'くなります (จะเปลี่ยน) vs くなりました (เปลี่ยนแล้ว)'
    },
    {
        id: 'to-itte-imashita',
        title: '～と言っていました',
        pattern: '～と言っていました',
        minnaBook: 1,
        minnaChapter: 20,
        romaji: '~to itte imashita',
        explanation: 'ใช้อ้างคำพูดของผู้อื่น แปลว่า "พูดว่า..." หรือ "บอกว่า..."',
        usagePoints: [
            'อ้างคำพูดของผู้อื่น',
            'รายงานสิ่งที่ได้ยิน',
            'ใช้ と ขั้นคำพูด'
        ],
        examples: [
            { jp: '田中さんは明日来ると言っていました。', romaji: 'Tanaka-san wa ashita kuru to itte imashita.', th: 'คุณทานากะบอกว่าพรุ่งนี้จะมา' },
            { jp: '天気予報では雨が降ると言っていました。', romaji: 'Tenki yohou de wa ame ga furu to itte imashita.', th: 'พยากรณ์อากาศบอกว่าจะฝนตก' },
            { jp: '先生は宿題が多いと言っていました。', romaji: 'Sensei wa shukudai ga ooi to itte imashita.', th: 'ครูบอกว่าการบ้านเยอะ' }
        ],
        conversation: {
            title: 'บทสนทนา: การอ้างคำพูด',
            items: [
                {
                    speaker: 'A',
                    text: '田中さんはどうして来なかったんですか。',
                    romaji: 'Tanaka-san wa doushite konakatta n desu ka.',
                    translation: 'ทำไมคุณทานากะไม่มา'
                },
                {
                    speaker: 'B',
                    text: '病気だと言っていました。',
                    romaji: 'Byouki da to itte imashita.',
                    translation: '(เขา)บอกว่าป่วย'
                }
            ]
        },
        notes: [
            'と = ขั้นคำพูดโดยตรง',
            '言っていました = พูดว่า (อดีต)',
            'รายงานสิ่งที่ได้ยินจากผู้อื่น',
            'แตกต่างจาก ～そうです (ข่าวลือ)'
        ],
        commonMistakes: [
            'ลืมใส่ と ก่อน言っていました',
            'สับสนกับ そうです'
        ],
        compareWith: 'と言っていました (คำพูดตรง) vs そうです (ข่าวลือ)'
    },
    {
        id: 'to-omoimasu',
        title: '～と思います',
        pattern: '～と思います',
        minnaBook: 1,
        minnaChapter: 20,
        romaji: '~to omoimasu',
        explanation: 'ใช้แสดงความคิดเห็น แปลว่า "คิดว่า..."',
        usagePoints: [
            'แสดงความคิดเห็นส่วนตัว',
            'ความเชื่อหรือการคาดเดา',
            'ใช้ と ขั้นความคิด'
        ],
        examples: [
            { jp: '明日は晴れると思います。', romaji: 'Ashita wa hareru to omoimasu.', th: 'คิดว่าพรุ่งนี้จะแจ่มใส' },
            { jp: 'この映画は面白いと思います。', romaji: 'Kono eiga wa omoshiroi to omoimasu.', th: 'คิดว่าหนังเรื่องนี้น่าสนใจ' }
        ],
        conversation: {
            title: 'บทสนทนา: ความคิดเห็น',
            items: [
                {
                    speaker: 'A',
                    text: 'この問題はどう思いますか。',
                    romaji: 'Kono mondai wa dou omoimasu ka.',
                    translation: 'คิดว่าปัญหานี้เป็นอย่างไร'
                },
                {
                    speaker: 'B',
                    text: '難しいと思います。',
                    romaji: 'Muzukashii to omoimasu.',
                    translation: 'คิดว่ายาก'
                }
            ]
        },
        notes: [
            'แสดงความคิดเห็น',
            'ความเชื่อส่วนตัว',
            'ใช้ と ขั้นความคิด',
            'รูปสุภาพของความคิดเห็น'
        ],
        commonMistakes: [
            'ลืมใส่ と ก่อน思います',
            'สับสนกับ でしょう (คาดเดา)'
        ],
        compareWith: 'と思います (คิดว่า) vs でしょう (น่าจะ)'
    },

    // ========== Minna no Nihongo เล่ม 1 บทที่ 21 ==========
    {
        id: 'deshou-ka',
        title: '～でしょうか',
        pattern: '～でしょうか',
        minnaBook: 1,
        minnaChapter: 21,
        romaji: '~deshou ka',
        explanation: 'ใช้ถามอย่างสุภาพเกี่ยวกับความเป็นไปได้ แปลว่า "น่าจะ...ไหม" หรือ "คงจะ...หรือเปล่า"',
        usagePoints: [
            'ถามอย่างสุภาพ',
            'แสดงความไม่แน่ใจ',
            'รูปสุภาพของ でしょう'
        ],
        examples: [
            { jp: '明日雨が降るでしょうか。', romaji: 'Ashita ame ga furu deshou ka.', th: 'พรุ่งนี้น่าจะฝนตกไหม' },
            { jp: 'この道でいいでしょうか。', romaji: 'Kono michi de ii deshou ka.', th: 'ทางนี้น่าจะถูกไหม' },
            { jp: '田中さんは来るでしょうか。', romaji: 'Tanaka-san wa kuru deshou ka.', th: 'คุณทานากะน่าจะมาไหม' }
        ],
        conversation: {
            title: 'บทสนทนา: การถามอย่างสุภาพ',
            items: [
                {
                    speaker: 'A',
                    text: '会議は何時に始まるでしょうか。',
                    romaji: 'Kaigi wa nanji ni hajimaru deshou ka.',
                    translation: 'ประชุมน่าจะเริ่มกี่โมง'
                },
                {
                    speaker: 'B',
                    text: '2時からだと思います。',
                    romaji: 'Ni-ji kara da to omoimasu.',
                    translation: 'คิดว่าตั้งแต่บ่าย 2 โมง'
                }
            ]
        },
        notes: [
            'รูปสุภาพของ でしょう',
            'ใช้ถามความเป็นไปได้',
            'แสดงความไม่แน่ใจ',
            'เหมาะกับสถานการณ์เป็นทางการ'
        ],
        commonMistakes: [
            'ใช้ でしょう แทน でしょうか ในคำถาม',
            'ใช้ในสถานการณ์ไม่เป็นทางการ'
        ],
        compareWith: 'でしょうか (สุภาพ) vs でしょう (คาดเดา)'
    },
    {
        id: 'to-omoimasu-chapter21',
        title: '～と思います (บริบทใหม่)',
        pattern: '～と思います',
        minnaBook: 1,
        minnaChapter: 21,
        romaji: '~to omoimasu',
        explanation: 'ใช้แสดงความคิดเห็นในบริบทการสนทนาเป็นทางการ และการตอบคำถามอย่างสุภาพ',
        usagePoints: [
            'ตอบคำถามอย่างสุภาพ',
            'แสดงความคิดเห็นในที่ประชุม',
            'ไม่ยืนยันอย่างตายตัว'
        ],
        examples: [
            { jp: 'どう思いますか。', romaji: 'Dou omoimasu ka.', th: 'คุณคิดอย่างไร' },
            { jp: 'いいアイデアだと思います。', romaji: 'Ii aidea da to omoimasu.', th: 'คิดว่าเป็นไอเดียดี' },
            { jp: 'もう少し考えた方がいいと思います。', romaji: 'Mou sukoshi kangaeta hou ga ii to omoimasu.', th: 'คิดว่าควรคิดอีกสักหน่อย' }
        ],
        conversation: {
            title: 'บทสนทนา: การแสดงความคิดเห็น',
            items: [
                {
                    speaker: 'A',
                    text: 'この企画はどう思いますか。',
                    romaji: 'Kono kikaku wa dou omoimasu ka.',
                    translation: 'คิดว่าโครงการนี้เป็นอย่างไร'
                },
                {
                    speaker: 'B',
                    text: '面白いと思います。でも、もう少し時間が必要だと思います。',
                    romaji: 'Omoshiroi to omoimasu. Demo, mou sukoshi jikan ga hitsuyou da to omoimasu.',
                    translation: 'คิดว่าน่าสนใจ แต่คิดว่าต้องการเวลาอีกสักหน่อย'
                }
            ]
        },
        notes: [
            'ใช้ในการสนทนาเป็นทางการ',
            'แสดงความคิดเห็นอย่างสุภาพ',
            'มักใช้ในที่ประชุมหรือการนำเสนอ',
            'แตกต่างจากการใช้ในบทที่ 20'
        ],
        commonMistakes: [
            'ใช้รูปไม่เป็นทางการในสถานการณ์เป็นทางการ',
            'ยืนยันความคิดเห็นจนเกินไป'
        ],
        compareWith: 'と思います (ทางการ) vs と思う (ไม่เป็นทางการ)'
    },
    {
        id: 'to-iimasu',
        title: '～と言います',
        pattern: '～と言います',
        minnaBook: 1,
        minnaChapter: 21,
        romaji: '~to iimasu',
        explanation: 'ใช้บอกชื่อหรือการเรียกสิ่งต่างๆ แปลว่า "เรียกว่า..." หรือ "ชื่อว่า..."',
        usagePoints: [
            'บอกชื่อหรือการเรียก',
            'แนะนำคำศัพท์ใหม่',
            'อธิบายความหมาย'
        ],
        examples: [
            { jp: 'これは日本語で何と言いますか。', romaji: 'Kore wa Nihongo de nani to iimasu ka.', th: 'สิ่งนี้ภาษาญี่ปุ่นเรียกว่าอะไร' },
            { jp: '箸と言います。', romaji: 'Hashi to iimasu.', th: 'เรียกว่าตะเกียบ' },
            { jp: '私の名前は田中と言います。', romaji: 'Watashi no namae wa Tanaka to iimasu.', th: 'ผมชื่อทานากะ' }
        ],
        conversation: {
            title: 'บทสนทนา: การถามชื่อ',
            items: [
                {
                    speaker: 'A',
                    text: 'このスポーツは何と言いますか。',
                    romaji: 'Kono supootsu wa nani to iimasu ka.',
                    translation: 'กีฬานี้เรียกว่าอะไร'
                },
                {
                    speaker: 'B',
                    text: '野球と言います。',
                    romaji: 'Yakyuu to iimasu.',
                    translation: 'เรียกว่าเบสบอล'
                },
                {
                    speaker: 'A',
                    text: '英語では何と言いますか。',
                    romaji: 'Eigo de wa nani to iimasu ka.',
                    translation: 'ภาษาอังกฤษเรียกว่าอะไร'
                },
                {
                    speaker: 'B',
                    text: 'Baseball と言います。',
                    romaji: 'Baseball to iimasu.',
                    translation: 'เรียกว่า Baseball'
                }
            ]
        },
        notes: [
            'ใช้บอกชื่อหรือการเรียก',
            'ถาม: 何と言いますか',
            'ตอบ: ～と言います',
            'ใช้แนะนำคำศัพท์ใหม่'
        ],
        commonMistakes: [
            'สับสนกับ と思います',
            'ลืมใส่ と ก่อน言います'
        ],
        compareWith: 'と言います (ชื่อ) vs と言っていました (คำพูด)'
    },
    {
        id: 'demo-addition',
        title: '～でも',
        pattern: '～でも',
        minnaBook: 1,
        minnaChapter: 21,
        romaji: '~demo',
        explanation: 'ใช้ยกตัวอย่างขั้นต่ำ แปลว่า "อย่างน้อย..." หรือ "แม้แต่..."',
        usagePoints: [
            'ยกตัวอย่างขั้นต่ำ',
            'แสดงการยอมรับในระดับต่ำสุด',
            'ใช้เมื่อเลือกไม่ได้'
        ],
        examples: [
            { jp: 'コーヒーでも飲みませんか。', romaji: 'Koohii demo nomimasen ka.', th: 'จะดื่มกาแฟหรืออะไรสักอย่างไหม' },
            { jp: '映画でも見ましょう。', romaji: 'Eiga demo mimashou.', th: 'ดูหนังหรืออะไรสักอย่างกันเถอะ' },
            { jp: '今度の日曜日にでも行きませんか。', romaji: 'Kondo no nichiyoubi ni demo ikimasen ka.', th: 'จะไปวันอาทิตย์หน้าหรืออะไรสักวันไหม' }
        ],
        conversation: {
            title: 'บทสนทนา: การเสนอทางเลือก',
            items: [
                {
                    speaker: 'A',
                    text: '今度一緒に何かしませんか。',
                    romaji: 'Kondo issho ni nanika shimasen ka.',
                    translation: 'คราวหน้าทำอะไรด้วยกันไหม'
                },
                {
                    speaker: 'B',
                    text: 'いいですね。映画でも見に行きませんか。',
                    romaji: 'Ii desu ne. Eiga demo mi ni ikimasen ka.',
                    translation: 'ดีนะ จะไปดูหนังหรืออะไรสักอย่างไหม'
                }
            ]
        },
        notes: [
            'でも = อย่างน้อย/หรืออะไรสักอย่าง',
            'แสดงการเสนอทางเลือกอย่างสบายๆ',
            'ทำให้การเสนอดูไม่เครียด',
            'แตกต่างจาก でも (แต่)'
        ],
        commonMistakes: [
            'สับสนกับ でも ที่แปลว่า "แต่"',
            'ใช้ในสถานการณ์เป็นทางการจนเกินไป'
        ],
        compareWith: 'でも (อย่างน้อย) vs でも (แต่)'
    },
    {
        id: 'tari-tari-shimasu-chapter21',
        title: '～たり、～たりします (บริบทใหม่)',
        pattern: 'V-たり + V-たり + します',
        minnaBook: 1,
        minnaChapter: 21,
        romaji: '~tari, ~tari shimasu',
        explanation: 'ใช้ในบริบทการบรรยายกิจกรรมประจำหรือการวางแผน ยกตัวอย่างกิจกรรมที่ทำเป็นประจำ',
        usagePoints: [
            'บรรยายกิจกรรมประจำ',
            'การวางแผนในอนาคต',
            'ยกตัวอย่างกิจกรรมหลายอย่าง'
        ],
        examples: [
            { jp: '休みの日は本を読んだり、音楽を聞いたりします。', romaji: 'Yasumi no hi wa hon o yondari, ongaku o kiitari shimasu.', th: 'วันหยุดอ่านหนังสือบ้าง ฟังเพลงบ้าง' },
            { jp: '旅行では写真を撮ったり、お土産を買ったりしました。', romaji: 'Ryokou de wa shashin o tottari, omiyage o kattari shimashita.', th: 'ในการเดินทางถ่ายรูปบ้าง ซื้อของฝากบ้าง' }
        ],
        conversation: {
            title: 'บทสนทนา: กิจกรรมประจำ',
            items: [
                {
                    speaker: 'A',
                    text: '週末は何をしますか。',
                    romaji: 'Shuumatsu wa nani o shimasu ka.',
                    translation: 'วันหยุดสุดสัปดาห์ทำอะไรบ้าง'
                },
                {
                    speaker: 'B',
                    text: '友達と会ったり、買い物をしたりします。',
                    romaji: 'Tomodachi to attari, kaimono o shitari shimasu.',
                    translation: 'เจอเพื่อนบ้าง ซื้อของบ้าง'
                }
            ]
        },
        notes: [
            'ยกตัวอย่างกิจกรรมหลายอย่าง',
            'ไม่จำเป็นต้องครบทุกอย่าง',
            'แสดงความหลากหลาย',
            'มักใช้กับกิจกรรมในเวลาว่าง'
        ],
        commonMistakes: [
            'ลืมใส่ します ท้ายประโยค',
            'ใช้กริยารูปผิด'
        ],
        compareWith: 'たり (ตัวอย่าง) vs て (ลำดับ)'
    },
    {
        id: 'mae-ni-ato-de',
        title: '～前に／～後で',
        pattern: '～前に／～後で',
        minnaBook: 1,
        minnaChapter: 22,
        romaji: '~mae ni / ~ato de',
        explanation: 'ใช้แสดงลำดับเวลา: ～前に = ก่อน..., ～後で = หลังจาก...',
        usagePoints: [
            '前に = ก่อนที่จะ...',
            '後で = หลังจาก...',
            'ใช้กับกริยาหรือคำนาม'
        ],
        examples: [
            { jp: '食事の前に手を洗います。', romaji: 'Shokuji no mae ni te o araimasu.', th: 'ล้างมือก่อนกินข้าว' },
            { jp: '勉強した後で、テレビを見ます。', romaji: 'Benkyou shita ato de, terebi o mimasu.', th: 'หลังจากเรียนแล้ว ดูทีวี' },
            { jp: '寝る前に歯を磨きます。', romaji: 'Neru mae ni ha o migakimasu.', th: 'แปรงฟันก่อนนอน' }
        ],
        conversation: {
            title: 'บทสนทนา: ลำดับเวลา',
            items: [
                {
                    speaker: 'A',
                    text: 'いつ宿題をしますか。',
                    romaji: 'Itsu shukudai o shimasu ka.',
                    translation: 'จะทำการบ้านเมื่อไหร่'
                },
                {
                    speaker: 'B',
                    text: '夕食の後でします。',
                    romaji: 'Yuushoku no ato de shimasu.',
                    translation: 'จะทำหลังอาหารเย็น'
                }
            ]
        },
        notes: [
            '前に = ก่อน (ใช้กับคำนาม + の)',
            '後で = หลัง (ใช้กับคำนาม + の)',
            'กริยาใช้: V-る前に, V-た後で',
            'แสดงลำดับของเหตุการณ์'
        ],
        commonMistakes: [
            'สับสนการใช้ る/た กับ 前に/後で',
            'ลืมใส่ の กับคำนาม'
        ],
        compareWith: '前に (ก่อน) vs 後で (หลัง) vs まえに (ก่อนหน้า)'
    },
    {
        id: 'shi-shi',
        title: '～し、～し',
        pattern: '～し、～し、...',
        minnaBook: 1,
        minnaChapter: 22,
        romaji: '~shi, ~shi',
        explanation: 'ใช้ยกเหตุผลหลายประการ แปลว่า "ทั้ง...และ..." หรือ "...อีกทั้ง..."',
        usagePoints: [
            'ยกเหตุผลหลายอย่าง',
            'เชื่อมประโยคเหตุผล',
            'แสดงการสะสมเหตุผล'
        ],
        examples: [
            { jp: 'この店は安いし、おいしいし、人気があります。', romaji: 'Kono mise wa yasui shi, oishii shi, ninki ga arimasu.', th: 'ร้านนี้ถูก อร่อย อีกทั้งยังเป็นที่นิยม' },
            { jp: '雨は降るし、風は強いし、出かけません。', romaji: 'Ame wa furu shi, kaze wa tsuyoi shi, dekakemasen.', th: 'ฝนตก ลมแรง เลยไม่ออกไปไหน' },
            { jp: '時間もないし、お金もないし、旅行はできません。', romaji: 'Jikan mo nai shi, okane mo nai shi, ryokou wa dekimasen.', th: 'ไม่มีเวลา ไม่มีเงิน เลยเดินทางไม่ได้' }
        ],
        conversation: {
            title: 'บทสนทนา: การยกเหตุผลหลายอย่าง',
            items: [
                {
                    speaker: 'A',
                    text: 'どうしてこの大学を選んだんですか。',
                    romaji: 'Doushite kono daigaku o eranda n desu ka.',
                    translation: 'ทำไมถึงเลือกมหาวิทยาลัยนี้'
                },
                {
                    speaker: 'B',
                    text: '家から近いし、学費も安いし、いい先生もいるし。',
                    romaji: 'Ie kara chikai shi, gakuhi mo yasui shi, ii sensei mo iru shi.',
                    translation: 'ใกล้บ้าน ค่าเทอมก็ถูก อีกทั้งก็มีครูดีด้วย'
                }
            ]
        },
        notes: [
            'し = และ (ยกเหตุผล)',
            'ใช้เชื่อมเหตุผลหลายอย่าง',
            'วางท้ายแต่ละเหตุผล',
            'ทำให้การอธิบายสมบูรณ์'
        ],
        commonMistakes: [
            'ใช้ し แทน と ในการเชื่อมคำนาม',
            'ลืมใส่ し ท้ายเหตุผลสุดท้าย'
        ],
        compareWith: 'し (เหตุผล) vs て (ลำดับ) vs から (เพราะ)'
    },
    {
        id: 'toki',
        title: '～時（とき）',
        pattern: '～時',
        minnaBook: 1,
        minnaChapter: 22,
        romaji: '~toki',
        explanation: 'ใช้แสดงเวลา แปลว่า "ตอนที่..."',
        usagePoints: [
            'แสดงช่วงเวลา',
            'ระบุเวลาเฉพาะ',
            'ใช้กับคำนามหรือกริยา'
        ],
        examples: [
            { jp: '子どもの時、よく遊びました。', romaji: 'Kodomo no toki, yoku asobimashita.', th: 'ตอนเป็นเด็ก เล่นกันบ่อยๆ' },
            { jp: '日本にいた時、日本語を勉強しました。', romaji: 'Nihon ni ita toki, Nihongo o benkyou shimashita.', th: 'ตอนที่อยู่ญี่ปุ่น เรียนภาษาญี่ปุ่น' }
        ],
        conversation: {
            title: 'บทสนทนา: ช่วงเวลา',
            items: [
                {
                    speaker: 'A',
                    text: '学生の時、どんなアルバイトをしましたか。',
                    romaji: 'Gakusei no toki, donna arubaito o shimashita ka.',
                    translation: 'ตอนเป็นนักเรียน ทำงานพิเศษอะไรบ้าง'
                },
                {
                    speaker: 'B',
                    text: 'コンビニでアルバイトをしました。',
                    romaji: 'Konbini de arubaito o shimashita.',
                    translation: 'ทำงานพิเศษที่ร้านสะดวกซื้อ'
                }
            ]
        },
        notes: [
            'แสดงช่วงเวลา',
            'ตอนที่...',
            'ใช้กับคำนาม + の + 時',
            'ใช้กับกริยา + 時'
        ],
        commonMistakes: [
            'ลืมใส่ の กับคำนาม',
            'สับสนกับ 時間 (เวลา)'
        ],
        compareWith: '時 (ช่วงเวลา) vs 時間 (ระยะเวลา)'
    },
    {
        id: 'nagara',
        title: '～ながら',
        pattern: 'V-ます(ตัดます) + ながら',
        minnaBook: 1,
        minnaChapter: 22,
        romaji: '~nagara',
        explanation: 'ใช้แสดงการทำสองอย่างพร้อมกัน แปลว่า "ทำ...ไปพร้อมกัน"',
        usagePoints: [
            'ทำสองอย่างพร้อมกัน',
            'ใช้ V-ます(ตัดます) + ながら',
            'กิจกรรมหลักคือที่อยู่หลัง ながら'
        ],
        examples: [
            { jp: '音楽を聞きながら勉強します。', romaji: 'Ongaku o kikinagara benkyou shimasu.', th: 'เรียนไปฟังเพลงไป' },
            { jp: 'テレビを見ながら食事をします。', romaji: 'Terebi o minagara shokuji o shimasu.', th: 'กินข้าวไปดูทีวีไป' },
            { jp: '歩きながら話します。', romaji: 'Arukinagara hanashimasu.', th: 'เดินไปคุยไป' }
        ],
        conversation: {
            title: 'บทสนทนา: การทำสองอย่างพร้อมกัน',
            items: [
                {
                    speaker: 'A',
                    text: '何をしながら日本語を勉強していますか。',
                    romaji: 'Nani o shinagara Nihongo o benkyou shite imasu ka.',
                    translation: 'ทำอะไรไปด้วยขณะเรียนภาษาญี่ปุ่น'
                },
                {
                    speaker: 'B',
                    text: 'アニメを見ながら勉強しています。',
                    romaji: 'Anime o minagara benkyou shite imasu.',
                    translation: 'เรียนไปดูอนิเมะไป'
                }
            ]
        },
        notes: [
            'ทำสองอย่างพร้อมกัน',
            'V-ます + ながら',
            'กิจกรรมหลัก = หลัง ながら',
            'กิจกรรมเสริม = ก่อน ながら'
        ],
        commonMistakes: [
            'ใช้ V-る แทน V-ます',
            'กิจกรรมที่ไม่สามารถทำพร้อมกันได้'
        ],
        compareWith: 'ながら (พร้อมกัน) vs て (ลำดับ) vs ときに (ตอนที่)'
    },
    {
        id: 'te-agemasu-moraimasu-kuremasu',
        title: '～てあげます／もらいます／くれます',
        pattern: 'V-て + あげます/もらいます/くれます',
        minnaBook: 1,
        minnaChapter: 23,
        romaji: '~te agemasu/moraimasu/kuremasu',
        explanation: 'ใช้แสดงการทำอะไรให้/รับ แปลว่า "ทำ...ให้/ได้รับ/ถูกทำให้"',
        usagePoints: [
            '～てあげます = ทำให้ (ฉันทำให้คนอื่น)',
            '～てもらいます = ได้รับ (ฉันได้รับจากคนอื่น)',
            '～てくれます = ถูกทำให้ (คนอื่นทำให้ฉัน)'
        ],
        examples: [
            { jp: '友達に本を読んであげます。', romaji: 'Tomodachi ni hon o yonde agemasu.', th: 'อ่านหนังสือให้เพื่อนฟัง' },
            { jp: '先生に日本語を教えてもらいました。', romaji: 'Sensei ni Nihongo o oshiete moraimashita.', th: 'ได้รับการสอนภาษาญี่ปุ่นจากครู' },
            { jp: '母が料理を作ってくれました。', romaji: 'Haha ga ryouri o tsukutte kuremashita.', th: 'แม่ทำอาหารให้' }
        ],
        conversation: {
            title: 'บทสนทนา: การให้และรับ',
            items: [
                {
                    speaker: 'A',
                    text: '荷物が重いですね。手伝ってあげましょうか。',
                    romaji: 'Nimotsu ga omoi desu ne. Tetsudatte agemashou ka.',
                    translation: 'กระเป๋าหนักนะ ช่วยถือให้ไหม'
                },
                {
                    speaker: 'B',
                    text: 'ありがとうございます。お願いします。',
                    romaji: 'Arigatou gozaimasu. Onegaishimasu.',
                    translation: 'ขอบคุณครับ ช่วยหน่อย'
                }
            ]
        },
        notes: [
            'てあげます = ทำให้ (ฉัน→คนอื่น)',
            'てもらいます = ได้รับ (คนอื่น→ฉัน)',
            'てくれます = ถูกทำให้ (คนอื่น→ฉัน)',
            'แสดงความกรุณา'
        ],
        commonMistakes: [
            'สับสนระหว่าง もらいます กับ くれます',
            'ใช้ あげます กับคนที่สูงกว่า'
        ],
        compareWith: 'あげます vs もらいます vs くれます (ทิศทางการให้รับ)'
    },
    {
        id: 'sou-desu',
        title: '～そうです',
        pattern: '～そうです',
        minnaBook: 1,
        minnaChapter: 23,
        romaji: '~sou desu',
        explanation: 'ใช้แสดงการได้ยินข่าวหรือดูท่าทาง แปลว่า "ดูท่าจะ.../ได้ยินว่า..."',
        examples: [
            { jp: '雨が降りそうです。', romaji: 'Ame ga furisou desu.', th: 'ดูท่าจะฝนตก' }
        ],
        notes: ['ดูท่าจะ', 'ได้ยินว่า']
    },
    {
        id: 'n-desu-ga-chapter24',
        title: '～んですが、～',
        pattern: '～んですが、～',
        minnaBook: 1,
        minnaChapter: 24,
        romaji: '~n desu ga, ~',
        explanation: 'ใช้อธิบายสถานการณ์แล้วตามด้วยคำขอหรือข้อเสนอ ทำให้การสื่อสารนุ่มนวลขึ้น',
        usagePoints: [
            'อธิบายสถานการณ์ก่อน',
            'ตามด้วยคำขอหรือข้อเสนอ',
            'ทำให้คำขอนุ่มนวล'
        ],
        examples: [
            { jp: '時間がないんですが、手伝ってもらえませんか。', romaji: 'Jikan ga nai n desu ga, tetsudatte moraemasen ka.', th: 'ไม่มีเวลานะ ช่วยได้ไหม' },
            { jp: '道がわからないんですが、教えてください。', romaji: 'Michi ga wakaranai n desu ga, oshiete kudasai.', th: 'ไม่รู้ทางนะ ช่วยบอกหน่อย' },
            { jp: 'お金を忘れたんですが、貸してもらえますか。', romaji: 'Okane o wasureta n desu ga, kashite moraemasu ka.', th: 'ลืมเงินมานะ ขอยืมได้ไหม' }
        ],
        conversation: {
            title: 'บทสนทนา: การขอความช่วยเหลือ',
            items: [
                {
                    speaker: 'A',
                    text: 'すみません、財布を忘れたんですが、お金を貸してもらえませんか。',
                    romaji: 'Sumimasen, saifu o wasureta n desu ga, okane o kashite moraemasen ka.',
                    translation: 'ขอโทษครับ ลืมกระเป๋าเงินมานะ ขอยืมเงินได้ไหม'
                },
                {
                    speaker: 'B',
                    text: 'いいですよ。いくら必要ですか。',
                    romaji: 'Ii desu yo. Ikura hitsuyou desu ka.',
                    translation: 'ได้ครับ ต้องการเท่าไหร่'
                }
            ]
        },
        notes: [
            'んです = อธิบายสถานการณ์',
            'が = แต่/อย่างไรก็ตาม',
            'ทำให้คำขอไม่ดูตรงไปตรงมา',
            'แสดงความสุภาพ'
        ],
        commonMistakes: [
            'ลืมใช้ んです ในการอธิบาย',
            'ขาด が เชื่อมระหว่างสถานการณ์และคำขอ'
        ],
        compareWith: 'んですが (อธิบาย+ขอ) vs んです (อธิบาย)'
    },
    {
        id: 'kamoshiremasen',
        title: '～かもしれません',
        pattern: '～かもしれません',
        minnaBook: 1,
        minnaChapter: 24,
        romaji: '~kamoshiremasen',
        explanation: 'ใช้แสดงความเป็นไปได้ แปลว่า "อาจจะ..."',
        usagePoints: [
            'แสดงความเป็นไปได้',
            'ไม่แน่ใจ 100%',
            'การคาดเดาอย่างระมัดระวัง'
        ],
        examples: [
            { jp: '明日雨が降るかもしれません。', romaji: 'Ashita ame ga furu kamoshiremasen.', th: 'พรุ่งนี้อาจจะฝนตก' },
            { jp: '田中さんは来ないかもしれません。', romaji: 'Tanaka-san wa konai kamoshiremasen.', th: 'คุณทานากะอาจจะไม่มา' }
        ],
        conversation: {
            title: 'บทสนทนา: ความเป็นไปได้',
            items: [
                {
                    speaker: 'A',
                    text: '明日のパーティーに田中さんは来ますか。',
                    romaji: 'Ashita no paatii ni Tanaka-san wa kimasu ka.',
                    translation: 'งานปาร์ตี้พรุ่งนี้ คุณทานากะจะมาไหม'
                },
                {
                    speaker: 'B',
                    text: 'わかりません。忙しいので、来ないかもしれません。',
                    romaji: 'Wakarimasen. Isogashii no de, konai kamoshiremasen.',
                    translation: 'ไม่ทราบ เพราะยุ่ง อาจจะไม่มา'
                }
            ]
        },
        notes: [
            'ความเป็นไปได้',
            'ไม่แน่ใจ',
            'การคาดเดาระมัดระวัง',
            'รูปสุภาพของ かも'
        ],
        commonMistakes: [
            'ใช้แทน でしょう ที่มีความมั่นใจมากกว่า',
            'ใช้ในสถานการณ์ที่แน่ใจ'
        ],
        compareWith: 'かもしれません (อาจจะ) vs でしょう (น่าจะ)'
    },
    {
        id: 'tara',
        title: '～たら',
        pattern: 'V-たら',
        minnaBook: 1,
        minnaChapter: 24,
        romaji: '~tara',
        explanation: 'ใช้แสดงเงื่อนไข แปลว่า "ถ้า...ละก็"',
        examples: [
            { jp: '雨が降ったら、家にいます。', romaji: 'Ame ga futtara, ie ni imasu.', th: 'ถ้าฝนตกละก็จะอยู่บ้าน' }
        ],
        notes: ['เงื่อนไข', 'ถ้า...ละก็']
    },
    {
        id: 'te-mo',
        title: '～ても',
        pattern: 'V-て + も',
        minnaBook: 1,
        minnaChapter: 24,
        romaji: '~te mo',
        explanation: 'ใช้แสดงความตรงข้าม แปลว่า "ถึงจะ...ก็..."',
        examples: [
            { jp: '雨が降っても、行きます。', romaji: 'Ame ga futte mo, ikimasu.', th: 'ถึงฝนตกก็จะไป' }
        ],
        notes: ['ความตรงข้าม', 'ถึงจะ...ก็']
    },
    {
        id: 'n-desu-ga-te-itadakemasen-ka',
        title: '～んですが、～ていただけませんか',
        pattern: '～んですが、～ていただけませんか',
        minnaBook: 1,
        minnaChapter: 25,
        romaji: '~n desu ga, ~te itadakemasen ka',
        explanation: 'ใช้ขอร้องแบบสุภาพที่สุด โดยอธิบายสถานการณ์ก่อนแล้วขอความช่วยเหลือด้วยรูปสุภาพสูงสุด',
        usagePoints: [
            'รูปสุภาพสูงสุดของการขอร้อง',
            'ใช้ในสถานการณ์เป็นทางการ',
            'แสดงความเคารพอย่างสูง'
        ],
        examples: [
            { jp: '急用があるんですが、早退させていただけませんか。', romaji: 'Kyuuyou ga aru n desu ga, soutai sasete itadakemasen ka.', th: 'มีธุระด่วนนะ ขอกลับก่อนได้ไหม' },
            { jp: 'よくわからないんですが、説明していただけませんか。', romaji: 'Yoku wakaranai n desu ga, setsumei shite itadakemasen ka.', th: 'ไม่ค่อยเข้าใจนะ ช่วยอธิบายได้ไหม' },
            { jp: '時間がないんですが、手伝っていただけませんか。', romaji: 'Jikan ga nai n desu ga, tetsudatte itadakemasen ka.', th: 'ไม่มีเวลานะ ช่วยเหลือได้ไหม' }
        ],
        conversation: {
            title: 'บทสนทนา: การขอร้องแบบสุภาพ',
            items: [
                {
                    speaker: 'A',
                    text: 'すみません、来週忙しいんですが、会議の日を変えていただけませんか。',
                    romaji: 'Sumimasen, raishuu isogashii n desu ga, kaigi no hi o kaete itadakemasen ka.',
                    translation: 'ขอโทษครับ สัปดาห์หน้ายุ่งนะ ช่วยเปลี่ยนวันประชุมได้ไหม'
                },
                {
                    speaker: 'B',
                    text: 'はい、わかりました。他の日はいかがですか。',
                    romaji: 'Hai, wakarimashita. Hoka no hi wa ikaga desu ka.',
                    translation: 'ครับ เข้าใจแล้ว วันอื่นเป็นอย่างไร'
                }
            ]
        },
        notes: [
            'んです = อธิบายสถานการณ์',
            'が = แต่/อย่างไรก็ตาม',
            'ていただけませんか = ขอร้องสุภาพสูงสุด',
            'ใช้กับผู้ที่มีตำแหน่งสูงกว่า'
        ],
        commonMistakes: [
            'ใช้กับคนใกล้ชิด (ควรใช้รูปธรรมดา)',
            'ลืมอธิบายสถานการณ์ด้วย んです'
        ],
        compareWith: 'ていただけませんか (สุภาพสูงสุด) vs てください (ธรรมดา)'
    },
    {
        id: 'tara-dou-desu-ka',
        title: '～たらどうですか',
        pattern: 'V-たら + どうですか',
        minnaBook: 1,
        minnaChapter: 25,
        romaji: '~tara dou desu ka',
        explanation: 'ใช้ให้คำแนะนำ แปลว่า "ลอง...ดูไหม?"',
        usagePoints: [
            'ให้คำแนะนำ',
            'เสนอทางเลือก',
            'แสดงความห่วงใย'
        ],
        examples: [
            { jp: '医者に相談したらどうですか。', romaji: 'Isha ni soudan shitara dou desu ka.', th: 'ลองปรึกษาหมอดูไหม' },
            { jp: '休んだらどうですか。', romaji: 'Yasundara dou desu ka.', th: 'ลองพักดูไหม' },
            { jp: '早く帰ったらどうですか。', romaji: 'Hayaku kaettara dou desu ka.', th: 'ลองกลับเร็วๆ ดูไหม' }
        ],
        conversation: {
            title: 'บทสนทนา: การให้คำแนะนำ',
            items: [
                {
                    speaker: 'A',
                    text: '最近疲れているんです。',
                    romaji: 'Saikin tsukarete iru n desu.',
                    translation: 'ช่วงนี้เหนื่อยมาก'
                },
                {
                    speaker: 'B',
                    text: 'そうですね。少し休んだらどうですか。',
                    romaji: 'Sou desu ne. Sukoshi yasundara dou desu ka.',
                    translation: 'อย่างนั้นนะ ลองพักสักหน่อยดูไหม'
                }
            ]
        },
        notes: [
            'ให้คำแนะนำ',
            'ลอง...ดูไหม',
            'แสดงความห่วงใย',
            'ไม่บังคับ'
        ],
        commonMistakes: [
            'ใช้ในการสั่งการ (ควรใช้ てください)',
            'ใช้กับสถานการณ์เร่งด่วน'
        ],
        compareWith: 'たらどうですか (แนะนำ) vs てください (สั่ง)'
    },
    {
        id: 'koto-ni-shimasu',
        title: '～ことにします',
        pattern: 'V-辞書形 + ことにします',
        minnaBook: 1,
        minnaChapter: 25,
        romaji: '~koto ni shimasu',
        explanation: 'ใช้แสดงการตัดสินใจ แปลว่า "ตัดสินใจจะ..."',
        examples: [
            { jp: '日本語を勉強することにしました。', romaji: 'Nihongo o benkyou suru koto ni shimashita.', th: 'ตัดสินใจจะเรียนภาษาญี่ปุ่น' }
        ],
        notes: ['การตัดสินใจ', 'ตัดสินใจจะ']
    },
    {
        id: 'koto-ni-narimashita',
        title: '～ことになりました',
        pattern: 'V-辞書形 + ことになりました',
        minnaBook: 1,
        minnaChapter: 25,
        romaji: '~koto ni narimashita',
        explanation: 'ใช้แสดงการที่ถูกตัดสินให้ แปลว่า "มีการตัดสินว่า..."',
        examples: [
            { jp: '来月日本に行くことになりました。', romaji: 'Raigetsu Nihon ni iku koto ni narimashita.', th: 'มีการตัดสินว่าเดือนหน้าจะไปญี่ปุ่น' }
        ],
        notes: ['ถูกตัดสินให้', 'มีการตัดสินว่า']
    }
];

// Export สำหรับใช้ในไฟล์อื่น
if (typeof module !== 'undefined' && module.exports) {
    module.exports = minnaGrammarData;
} 