# 🤖 DevNexus AI Chat Widget

## เกี่ยวกับ

DevNexus AI Chat Widget เป็นหน้าต่างแชท AI ลอยที่ช่วยเรียนภาษาญี่ปุ่น โดยใช้ **Gemini API** ในการตอบคำถาม

## ฟีเจอร์หลัก

### 🎯 **ฟีเจอร์พื้นฐาน**
- 💬 **หน้าต่างแชทลอย** - แสดงปุ่มกลมมุมขวาล่าง ไม่เกะกะการใช้งาน
- 🤖 **AI ผู้ช่วย** - ตอบคำถามเฉพาะเรื่องภาษาญี่ปุ่นเท่านั้น
- 📱 **Responsive Design** - ใช้งานได้ทั้งมือถือและคอมพิวเตอร์
- 🌙 **แอนิเมชั่นสวยงาม** - ปุ่มลอย, fade in/out, typing indicator

### 🔍 **ฟีเจอร์พิเศษ**
- **เลือกข้อความ** - เลือกข้อความในเว็บแล้วให้ AI อธิบาย
- **Quick Actions** - ปุ่มลัดสำหรับคำสั่งที่ใช้บ่อย
- **อ่านเนื้อหาหน้าเว็บ** - AI รู้ว่าคุณกำลังดูหน้าไหนอยู่
- **รูปแบบการสอน** - แสดงผลแบบมีสีสัน เหมาะกับการเรียนรู้

### 🎨 **รูปแบบการแสดงผล**
- `<div class="japanese-text">` - ข้อความภาษาญี่ปุ่น
- `<div class="grammar-structure">` - โครงสร้างไวยากรณ์
- `<div class="example-sentence">` - ตัวอย่างประโยค

## วิธีติดตั้ง

### วิธีที่ 1: ใช้ในเว็บเดียว
```html
<!-- ใส่ก่อน </body> -->
<script src="ai-chat-widget.js"></script>
```

### วิธีที่ 2: ใช้ในทุกหน้าของเว็บ
```html
<!-- ใส่ใน <head> หรือก่อน </body> -->
<script src="https://your-domain.com/ai-chat-widget.js"></script>
```

### วิธีที่ 3: Load จาก CDN (ในอนาคต)
```html
<script src="https://cdn.devnexus.com/ai-chat-widget/latest.js"></script>
```

## การใช้งาน

### 🚀 **เริ่มต้น**
1. **คลิกปุ่มลอยสีชมพู** มุมขวาล่าง
2. **พิมพ์คำถาม** เกี่ยวกับภาษาญี่ปุ่น
3. **กด Enter** เพื่อส่ง (Shift+Enter เพื่อขึ้นบรรทัดใหม่)

### 🔍 **การเลือกข้อความ**
1. **เลือกข้อความ** ในหน้าเว็บด้วยเมาส์
2. **กดปุ่ม "อธิบายข้อความที่เลือก"**
3. **AI จะอธิบาย** ข้อความที่เลือก

### ⚡ **Quick Actions**
- 🔍 **อธิบายข้อความที่เลือก** - วิเคราะห์ข้อความที่เลือก
- 📝 **ช่วยไวยากรณ์** - อธิบายไวยากรณ์ในหน้านี้
- 💬 **สร้างบทสนทนา** - สร้างตัวอย่างบทสนทนา

### 🎯 **คำสั่งแนะนำ**
- `อธิบายไวยากรณ์นี้หน่อย`
- `ขอตัวอย่างประโยค`
- `โครงสร้างประโยคคืออะไร`
- `แปลประโยคนี้: こんにちは`
- `ความแตกต่างระหว่าง は และ が คืออะไร`

## การปรับแต่ง

### 🔧 **แก้ไข API Key**
```javascript
// ในไฟล์ ai-chat-widget.js
const CONFIG = {
    apiKey: 'YOUR_GEMINI_API_KEY_HERE',
    apiUrl: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent'
};
```

### 🎨 **ปรับแต่งสี**
```css
/* แก้ไขสีหลักของ widget */
.chat-toggle {
    background: linear-gradient(135deg, #your-color, #your-color-2);
}

.quick-btn:hover {
    background: #your-color !important;
}
```

### 📱 **ปรับแต่งขนาดมือถือ**
```css
@media (max-width: 768px) {
    .chat-window {
        width: calc(100vw - 20px) !important;
        height: calc(100vh - 100px) !important;
    }
}
```

## การทำงาน

### 🧠 **AI Context**
- อ่านหัวเรื่องหน้าเว็บ (title)
- อ่าน headings (h1, h2, h3, h4)
- อ่านเนื้อหาภาษาญี่ปุ่น (.japanese-text, .vocab-item, .grammar-point)
- รับข้อความที่ผู้ใช้เลือก

### 🔒 **ความปลอดภัย**
- ตอบเฉพาะคำถามเกี่ยวกับภาษาญี่ปุ่น
- ไม่เก็บข้อมูลส่วนตัว
- ใช้ localStorage เก็บประวัติแชทในเครื่อง

### ⚡ **ประสิทธิภาพ**
- โหลดแบบ lazy loading
- ไฟล์เดียวครบทุกอย่าง (HTML + CSS + JS)
- ไม่ขึ้นต่อ library ภายนอก (ยกเว้น FontAwesome)

## ข้อกำหนด

### 📋 **ข้อกำหนดระบบ**
- 🌐 **Browser**: Chrome, Firefox, Safari, Edge (รุ่นใหม่)
- 📱 **Mobile**: iOS Safari, Chrome Android
- 🔗 **Dependencies**: FontAwesome icons, Gemini API

### 🚫 **ข้อจำกัด**
- ต้องมีการเชื่อมต่ออินเทอร์เน็ต
- ต้องมี Gemini API Key ที่ใช้งานได้
- ตอบเฉพาะคำถามภาษาญี่ปุ่น

## การแก้ไขปัญหา

### ❌ **ปัญหาที่พบบ่อย**

#### **AI ไม่ตอบ**
```
✅ ตรวจสอบ API Key
✅ ตรวจสอบการเชื่อมต่ออินเทอร์เน็ต
✅ เปิด Console ดู error
```

#### **Widget ไม่แสดง**
```
✅ ตรวจสอบ path ไฟล์ ai-chat-widget.js
✅ ตรวจสอบ FontAwesome icons
✅ ตรวจสอบ JavaScript errors
```

#### **ข้อความเลือกไม่ทำงาน**
```
✅ เลือกข้อความแล้วคลิกที่ Quick Action
✅ ตรวจสอบว่า selection ไม่ว่าง
✅ ลองรีเฟรชหน้าเว็บ
```

### 🔍 **Debug Mode**
เปิด Console (F12) แล้วดู:
```javascript
console.log('DevNexus AI Chat Widget loaded!');
```

## การอัปเดต

### 📈 **รุ่นปัจจุบัน: v1.0.0**
- ✅ ฟีเจอร์พื้นฐานครบถ้วน
- ✅ Gemini API integration
- ✅ Text selection
- ✅ Responsive design

### 🚀 **แผนการพัฒนา**
- 🔄 Chat history แบบ persistent
- 🎨 Multiple themes
- 🌍 Multi-language support
- 📊 Usage analytics
- 🔌 Plugin system

## ลิขสิทธิ์

```
© 2025 DevNexus.Nihon
Licensed under MIT License
```

---

## 🆘 **ต้องการความช่วยเหลือ?**

📧 **ติดต่อ**: [devnexus@example.com]  
🐛 **รายงานบัค**: [GitHub Issues]  
💡 **แนะนำฟีเจอร์**: [GitHub Discussions]  

---

**สร้างด้วย ❤️ สำหรับนักเรียนภาษาญี่ปุ่น** 