// Firebase Configuration สำหรับ DevNexus.Nihon
// ใช้ Firebase v8 (compat) เพื่อให้เข้ากันได้กับระบบ tracking

const firebaseConfig = {
  apiKey: "AIzaSyDj7ncAHK0o18tvMnrvZV_kdvisHlpatBc",
  authDomain: "devnexusnihon.firebaseapp.com",
  projectId: "devnexusnihon",
  storageBucket: "devnexusnihon.firebasestorage.app",
  messagingSenderId: "585860304678",
  appId: "1:585860304678:web:e7c5df366b0b7c8accfbe7",
  measurementId: "G-TPBN2LDD7L"
};

// สำหรับการทดสอบ - ใช้ Firebase Emulator (ตั้งค่าภายหลัง)
const isEmulator = window.location.hostname === 'localhost';

// Initialize Firebase
if (typeof firebase !== 'undefined') {
  try {
    firebase.initializeApp(firebaseConfig);
    
    // Initialize Firestore
    const db = firebase.firestore();
    
    // ถ้าเป็น localhost ให้ใช้ emulator
    if (isEmulator) {
      // db.useEmulator('localhost', 8080);
      console.log('Running in localhost mode');
    }
    
    // Export db สำหรับใช้ในไฟล์อื่น
    window.firebaseDb = db;
    
    console.log('Firebase initialized successfully');
    console.log('Project ID:', firebaseConfig.projectId);
  } catch (error) {
    console.error('Firebase initialization failed:', error);
    // Fallback to localStorage if Firebase fails
    window.firebaseDb = null;
  }
} else {
  console.warn('Firebase SDK not loaded, falling back to localStorage');
  window.firebaseDb = null;
}