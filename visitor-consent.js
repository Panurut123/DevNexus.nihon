class VisitorTracker {
    constructor() {
        this.visitorData = {};
        this.init();
    }

    init() {
        this.collectVisitorInfo();
        this.displayVisitorInfo();
        this.setupEventListeners();
        this.getLocationInfo();
    }

    collectVisitorInfo() {
        // สร้าง Visitor ID จาก fingerprint
        this.visitorData.visitorId = this.generateVisitorId();
        
        // เก็บข้อมูล Referrer
        this.visitorData.referrer = document.referrer || 'Direct (ไม่มีเว็บอ้างอิง)';
        
        // เก็บข้อมูล User Agent
        this.visitorData.userAgent = navigator.userAgent;
        this.visitorData.deviceInfo = this.parseUserAgent(navigator.userAgent);
        
        // เวลาเข้าชม
        this.visitorData.timestamp = new Date().toISOString();
        this.visitorData.localTime = new Date().toLocaleString('th-TH');
        
        // นับจำนวนครั้งที่เข้าชม
        this.visitorData.visitCount = this.getVisitCount();
        
        // URL ปัจจุบัน
        this.visitorData.currentUrl = window.location.href;
        
        // ขนาดหน้าจอ
        this.visitorData.screenResolution = `${screen.width}x${screen.height}`;
        
        // ภาษาของเบราว์เซอร์
        this.visitorData.language = navigator.language || navigator.userLanguage || 'ไม่ทราบ';
    }

    generateVisitorId() {
        // สร้าง ID จาก browser fingerprint
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        ctx.textBaseline = 'top';
        ctx.font = '14px Arial';
        ctx.fillText('DevNexus Nihon', 2, 2);
        
        const fingerprint = [
            navigator.userAgent,
            navigator.language,
            screen.width + 'x' + screen.height,
            new Date().getTimezoneOffset(),
            canvas.toDataURL()
        ].join('|');
        
        return this.hashString(fingerprint);
    }

    hashString(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return Math.abs(hash).toString(36);
    }

    parseUserAgent(ua) {
        // ตรวจสอบประเภทอุปกรณ์
        let deviceType = 'Desktop';
        let browser = 'ไม่ทราบ';
        let os = 'ไม่ทราบ';

        // ตรวจสอบ Mobile
        if (/Mobile|Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(ua)) {
            deviceType = 'Mobile';
        } else if (/Tablet|iPad/i.test(ua)) {
            deviceType = 'Tablet';
        }

        // ตรวจสอบเบราว์เซอร์
        if (ua.indexOf('Chrome') > -1) browser = 'Chrome';
        else if (ua.indexOf('Firefox') > -1) browser = 'Firefox';
        else if (ua.indexOf('Safari') > -1) browser = 'Safari';
        else if (ua.indexOf('Edge') > -1) browser = 'Edge';
        else if (ua.indexOf('Opera') > -1) browser = 'Opera';

        // ตรวจสอบ OS
        if (ua.indexOf('Windows') > -1) os = 'Windows';
        else if (ua.indexOf('Mac') > -1) os = 'macOS';
        else if (ua.indexOf('Linux') > -1) os = 'Linux';
        else if (ua.indexOf('Android') > -1) os = 'Android';
        else if (ua.indexOf('iOS') > -1) os = 'iOS';

        return `${deviceType} - ${browser} บน ${os}`;
    }

    getVisitCount() {
        const visitKey = `visitor_${this.visitorData.visitorId}_count`;
        let count = localStorage.getItem(visitKey);
        count = count ? parseInt(count) + 1 : 1;
        localStorage.setItem(visitKey, count);
        return count;
    }

    async getLocationInfo() {
        try {
            // ใช้ API ฟรีเพื่อหา IP และประเทศ
            const response = await fetch('https://api.ipify.org?format=json');
            const ipData = await response.json();
            this.visitorData.ipAddress = ipData.ip;

            // หาข้อมูลประเทศจาก IP
            const locationResponse = await fetch(`http://ip-api.com/json/${ipData.ip}`);
            const locationData = await locationResponse.json();
            
            if (locationData.status === 'success') {
                this.visitorData.country = locationData.country || 'ไม่ทราบ';
                this.visitorData.city = locationData.city || 'ไม่ทราบ';
                this.visitorData.region = locationData.regionName || 'ไม่ทราบ';
            } else {
                this.visitorData.country = 'ไม่สามารถระบุได้';
            }

            // อัปเดตการแสดงผล
            document.getElementById('country-info').textContent = 
                `${this.visitorData.country}${this.visitorData.city ? `, ${this.visitorData.city}` : ''}`;
        } catch (error) {
            this.visitorData.country = 'ไม่สามารถระบุได้';
            document.getElementById('country-info').textContent = 'ไม่สามารถระบุได้';
        }
    }

    displayVisitorInfo() {
        // แสดงข้อมูลในหน้าเว็บ
        document.getElementById('referrer-info').textContent = 
            this.visitorData.referrer === 'Direct (ไม่มีเว็บอ้างอิง)' 
                ? 'เข้ามาโดยตรง' 
                : this.visitorData.referrer;
        
        document.getElementById('device-info').textContent = this.visitorData.deviceInfo;
        document.getElementById('time-info').textContent = this.visitorData.localTime;
        document.getElementById('visit-count').textContent = `ครั้งที่ ${this.visitorData.visitCount}`;
    }

    setupEventListeners() {
        const acceptBtn = document.getElementById('accept-btn');
        const declineBtn = document.getElementById('decline-btn');
        const modal = document.getElementById('decline-modal');
        const closeModal = document.getElementById('close-modal');

        acceptBtn.addEventListener('click', async () => {
            await this.saveVisitorData();
            this.redirectToMainSite();
        });

        declineBtn.addEventListener('click', () => {
            modal.style.display = 'block';
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // ปิด modal เมื่อคลิกข้างนอก
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    async saveVisitorData() {
        const visitorRecord = {
            ...this.visitorData,
            id: Date.now(), // ID ที่ไม่ซ้ำ
            consentGiven: true,
            consentTime: new Date().toISOString()
        };

        try {
            // พยายามบันทึกลง Firebase ก่อน
            if (window.firebaseDb) {
                await window.firebaseDb.collection('visitors').add(visitorRecord);
                console.log('ข้อมูลถูกบันทึกลง Firebase แล้ว');
            } else {
                throw new Error('Firebase not available');
            }
        } catch (error) {
            console.warn('ไม่สามารถบันทึกลง Firebase ได้, ใช้ localStorage แทน:', error);
            
            // Fallback to localStorage
            const allVisitors = JSON.parse(localStorage.getItem('website_visitors') || '[]');
            allVisitors.push(visitorRecord);

            // เก็บเฉพาะ 1000 records ล่าสุด
            if (allVisitors.length > 1000) {
                allVisitors.shift();
            }

            localStorage.setItem('website_visitors', JSON.stringify(allVisitors));
        }
        
        // บันทึกว่าผู้ใช้ยินยอมแล้ว (ใช้ localStorage เสมอ)
        localStorage.setItem('user_consent', 'true');
        localStorage.setItem('consent_time', new Date().toISOString());
        
        console.log('ข้อมูลผู้เข้าชมถูกบันทึกแล้ว:', this.visitorData);
    }

    redirectToMainSite() {
        // เปลี่ยนเส้นทางไปหน้าหลัก
        const targetPage = new URLSearchParams(window.location.search).get('return') || 'index.html';
        window.location.href = targetPage;
    }
}

// ตรวจสอบว่าผู้ใช้ยินยอมแล้วหรือไม่
function checkConsentStatus() {
    const consent = localStorage.getItem('user_consent');
    const consentTime = localStorage.getItem('consent_time');
    
    // ถ้ายินยอมแล้วและยังไม่เกิน 30 วัน
    if (consent === 'true' && consentTime) {
        const consentDate = new Date(consentTime);
        const now = new Date();
        const daysDiff = (now - consentDate) / (1000 * 60 * 60 * 24);
        
        if (daysDiff < 30) {
            // ยังไม่หมดอายุ - เปลี่ยนเส้นทางไปหน้าหลัก
            const targetPage = new URLSearchParams(window.location.search).get('return') || 'index.html';
            window.location.href = targetPage;
            return;
        } else {
            // หมดอายุแล้ว - ลบข้อมูลเก่า
            localStorage.removeItem('user_consent');
            localStorage.removeItem('consent_time');
        }
    }
}

// เริ่มต้นระบบ
document.addEventListener('DOMContentLoaded', () => {
    checkConsentStatus();
    new VisitorTracker();
});

// ป้องกันการกลับไปหน้าก่อนหน้า
window.addEventListener('popstate', (event) => {
    event.preventDefault();
    history.pushState(null, null, window.location.href);
}); 