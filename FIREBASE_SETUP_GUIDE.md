# คู่มือการตั้งค่า Firebase สำหรับระบบ Visitor Tracking

## 🚀 ทำไมต้องใช้ Firebase?

เพื่อให้ระบบ tracking ทำงานได้จริงและสามารถเห็นข้อมูลผู้เข้าชมจากคนอื่นๆ ได้ เราต้องใช้ฐานข้อมูลส่วนกลาง Firebase Firestore แทน localStorage

## 📋 ขั้นตอนการตั้งค่า

### 1. สร้าง Firebase Project

1. เข้าไปที่ [Firebase Console](https://console.firebase.google.com/)
2. คลิก "Add project" หรือ "เพิ่มโครงการ"
3. ตั้งชื่อโครงการ เช่น "devnexus-visitor-tracking"
4. เลือกการตั้งค่า Analytics (แนะนำให้เปิด)
5. คลิก "Create project"

### 2. ตั้งค่า Firestore Database

1. ในเมนูซ้าย เลือก "Firestore Database"
2. คลิก "Create database"
3. เลือก "Start in test mode" (สำหรับการทดสอบ)
4. เลือก Location ที่ใกล้ที่สุด (asia-southeast1 สำหรับไทย)
5. คลิก "Done"

### 3. ตั้งค่า Web App

1. ในหน้าแรกของ Project Overview
2. คลิกไอคอน "</>") เพื่อเพิ่ม Web app
3. ตั้งชื่อ App เช่น "DevNexus Website"
4. ✅ เลือก "Also set up Firebase Hosting" (ถ้าต้องการ)
5. คลิก "Register app"

### 4. คัดลอก Configuration

หลังจากสร้าง app แล้ว คุณจะเห็นโค้ดคล้ายนี้:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "devnexus-visitor-tracking.firebaseapp.com",
  projectId: "devnexus-visitor-tracking",
  storageBucket: "devnexus-visitor-tracking.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890abcdef"
};
```

### 5. อัปเดตไฟล์ firebase-config.js

แทนที่ค่าใน `firebase-config.js` ด้วยค่าจริงของคุณ:

```javascript
const firebaseConfig = {
  apiKey: "ใส่ API Key ของคุณ",
  authDomain: "ใส่ Auth Domain ของคุณ",
  projectId: "ใส่ Project ID ของคุณ",
  storageBucket: "ใส่ Storage Bucket ของคุณ",
  messagingSenderId: "ใส่ Messaging Sender ID ของคุณ",
  appId: "ใส่ App ID ของคุณ"
};
```

### 6. ตั้งค่า Security Rules

1. ไปที่ Firestore Database → Rules
2. แทนที่ rules ด้วยโค้ดนี้:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // อนุญาตให้เขียนข้อมูล visitors
    match /visitors/{document} {
      allow create: if true;
      allow read: if true;
    }
    
    // ป้องกันการแก้ไขและลบ
    match /{document=**} {
      allow update, delete: if false;
    }
  }
}
```

3. คลิก "Publish"

## 🧪 การทดสอบระบบ

### ทดสอบการเก็บข้อมูล:
1. เปิดเว็บไซต์ในเบราว์เซอร์หลายตัว
2. เข้าหน้า visitor-consent.html
3. กดยืนยัน
4. ตรวจสอบใน Firebase Console → Firestore Database

### ทดสอบ Admin Dashboard:
1. เปิด admin-dashboard.html
2. ใส่รหัสผ่าน: `devnexus2024`
3. ดูข้อมูลผู้เข้าชมจากหลายเบราว์เซอร์

## 🔧 การปรับแต่งเพิ่มเติม

### เปลี่ยนรหัสผ่านแอดมิน:
แก้ไขในไฟล์ `admin-dashboard.js`:
```javascript
this.adminPassword = 'รหัสผ่านใหม่ของคุณ';
```

### ปรับ Security Rules ให้เข้มงวดขึ้น:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /visitors/{document} {
      allow create: if request.time < timestamp.date(2025, 12, 31); // หมดอายุ
      allow read: if request.auth != null; // ต้อง login
    }
  }
}
```

## 📊 ข้อมูลที่จะเก็บรวบรวม

- 🌐 **Referrer**: เว็บไซต์ที่มาจาก
- 📱 **User Agent**: ข้อมูลเบราว์เซอร์และอุปกรณ์
- 🌍 **IP Address & Location**: ประเทศและเมือง
- ⏰ **Timestamp**: เวลาเข้าชม
- 🔢 **Visit Count**: จำนวนครั้งที่เข้าชม
- 📺 **Screen Resolution**: ขนาดหน้าจอ
- 🗣️ **Language**: ภาษาเบราว์เซอร์

## 🔒 ความปลอดภัย

- ✅ ข้อมูลเก็บใน Firebase (Google Cloud)
- ✅ มีการขอความยินยอมก่อนเก็บข้อมูล
- ✅ ไม่เก็บข้อมูลส่วนตัวที่ระบุตัวตน
- ✅ ระบบ fallback ใช้ localStorage หาก Firebase ล้มเหลว

## 🚨 หมายเหตุสำคัญ

1. **Firebase ฟรี**: สามารถใช้ได้ 50,000 reads และ 20,000 writes ต่อวัน
2. **ข้อมูลจริง**: เมื่อตั้งค่าเสร็จแล้ว จะเห็นข้อมูลของคนอื่นที่เข้าเว็บไซต์จริงๆ
3. **ความเป็นส่วนตัว**: ปฏิบัติตาม GDPR และ PDPA

## 🆘 แก้ไขปัญหา

### Firebase ไม่ทำงาน:
- ตรวจสอบ Console → Network tab
- ดู error messages ใน Console
- ตรวจสอบ API Key และ Configuration

### ไม่เห็นข้อมูล:
- ตรวจสอบ Security Rules
- ดู Firebase Console → Firestore Database
- ลอง Refresh ข้อมูลในแอดมิน

---

**🎉 เมื่อตั้งค่าเสร็จแล้ว คุณจะสามารถเห็นข้อมูลผู้เข้าชมจริงๆ ของเว็บไซต์ได้แล้ว!** 