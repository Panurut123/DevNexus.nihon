class VisitorTracker {
    constructor() {
        this.visitorData = {};
        this.init();
    }

    init() {
        this.collectVisitorInfo();
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
            // รายการ API หลายตัวสำหรับ backup
            const locationAPIs = [
                {
                    name: 'ipapi.co',
                    getIP: async () => {
                        const response = await fetch('https://ipapi.co/json/');
                        const data = await response.json();
                        return {
                            ip: data.ip,
                            country: data.country_name,
                            city: data.city,
                            region: data.region
                        };
                    }
                },
                {
                    name: 'ipwho.is',
                    getIP: async () => {
                        const response = await fetch('https://ipwho.is/');
                        const data = await response.json();
                        return {
                            ip: data.ip,
                            country: data.country,
                            city: data.city,
                            region: data.region
                        };
                    }
                },
                {
                    name: 'freeipapi.com',
                    getIP: async () => {
                        const response = await fetch('https://freeipapi.com/api/json');
                        const data = await response.json();
                        return {
                            ip: data.ipAddress,
                            country: data.countryName,
                            city: data.cityName,
                            region: data.regionName
                        };
                    }
                },
                {
                    name: 'ip-api.com',
                    getIP: async () => {
                        // ได้ IP ก่อน
                        const ipResponse = await fetch('https://api.ipify.org?format=json');
                        const ipData = await ipResponse.json();
                        
                        // ใช้ HTTPS แทน HTTP
                        const locationResponse = await fetch(`https://ipapi.co/${ipData.ip}/json/`);
                        const locationData = await locationResponse.json();
                        
                        return {
                            ip: ipData.ip,
                            country: locationData.country_name,
                            city: locationData.city,
                            region: locationData.region
                        };
                    }
                },
                {
                    name: 'fallback-ipify',
                    getIP: async () => {
                        const response = await fetch('https://api.ipify.org?format=json');
                        const data = await response.json();
                        return {
                            ip: data.ip,
                            country: 'ไม่สามารถระบุได้',
                            city: 'ไม่สามารถระบุได้',
                            region: 'ไม่สามารถระบุได้'
                        };
                    }
                }
            ];

            let locationData = null;
            let lastError = null;

            // ลอง API ทีละตัวจนกว่าจะได้ผลลัพธ์
            for (const api of locationAPIs) {
                try {
                    console.log(`กำลังลอง API: ${api.name}`);
                    locationData = await Promise.race([
                        api.getIP(),
                        new Promise((_, reject) => 
                            setTimeout(() => reject(new Error('Timeout')), 5000)
                        )
                    ]);
                    
                    if (locationData && locationData.ip) {
                        console.log(`สำเร็จกับ API: ${api.name}`, locationData);
                        break;
                    }
                } catch (error) {
                    console.warn(`API ${api.name} ล้มเหลว:`, error.message);
                    lastError = error;
                    continue;
                }
            }

            if (locationData) {
                this.visitorData.ipAddress = locationData.ip;
                this.visitorData.country = locationData.country || 'ไม่ทราบ';
                this.visitorData.city = locationData.city || 'ไม่ทราบ';
                this.visitorData.region = locationData.region || 'ไม่ทราบ';

                console.log('Location detected:', this.visitorData.country, this.visitorData.city);
            } else {
                throw lastError || new Error('ทุก API ล้มเหลว');
            }

        } catch (error) {
            console.error('ไม่สามารถหาตำแหน่งได้:', error);
            
            // ใช้ข้อมูล fallback
            try {
                const ipResponse = await fetch('https://api.ipify.org?format=json');
                const ipData = await ipResponse.json();
                this.visitorData.ipAddress = ipData.ip;
            } catch (ipError) {
                this.visitorData.ipAddress = 'ไม่ทราบ';
            }
            
            this.visitorData.country = 'ไม่สามารถระบุได้';
            this.visitorData.city = 'ไม่สามารถระบุได้';
            this.visitorData.region = 'ไม่สามารถระบุได้';
        }
    }



    setupEventListeners() {
        const acceptBtn = document.getElementById('accept-btn');
        const declineBtn = document.getElementById('decline-btn');
        const consentCheckbox = document.getElementById('consent-checkbox');
        const loadingContainer = document.getElementById('loading-container');

        // เปิด/ปิดปุ่มยืนยันตาม checkbox
        consentCheckbox.addEventListener('change', () => {
            acceptBtn.disabled = !consentCheckbox.checked;
        });

        acceptBtn.addEventListener('click', async () => {
            // แสดง loading
            loadingContainer.style.display = 'block';
            document.querySelector('.popup-actions').style.display = 'none';
            
            try {
                await this.saveVisitorData();
                this.redirectToMainSite();
            } catch (error) {
                console.error('เกิดข้อผิดพลาด:', error);
                alert('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง');
                
                // ซ่อน loading และแสดงปุ่มกลับมา
                loadingContainer.style.display = 'none';
                document.querySelector('.popup-actions').style.display = 'block';
            }
        });

        declineBtn.addEventListener('click', () => {
            if (confirm('คุณแน่ใจหรือไม่ที่จะไม่ยินยอม? คุณจะไม่สามารถใช้งานเว็บไซต์ได้')) {
                alert('ขออภัย คุณจำเป็นต้องยินยอมเพื่อใช้งานเว็บไซต์');
            }
        });
    }

    async saveVisitorData() {
        const sessionId = Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        
        const visitorRecord = {
            ...this.visitorData,
            id: Date.now(), // ID ที่ไม่ซ้ำ
            sessionId: sessionId,
            consentGiven: true,
            consentTime: new Date().toISOString(),
            firstVisit: this.visitorData.visitCount === 1,
            sessionStart: new Date().toISOString()
        };

        try {
            // พยายามบันทึกลง Firebase ก่อน
            if (window.firebaseDb) {
                // บันทึก visitor record
                await window.firebaseDb.collection('visitors').add(visitorRecord);
                
                // บันทึก session record แยกต่างหาก
                await window.firebaseDb.collection('sessions').add({
                    visitorId: this.visitorData.visitorId,
                    sessionId: sessionId,
                    startTime: new Date().toISOString(),
                    ipAddress: this.visitorData.ipAddress,
                    country: this.visitorData.country,
                    city: this.visitorData.city,
                    deviceInfo: this.visitorData.deviceInfo,
                    referrer: this.visitorData.referrer,
                    visitCount: this.visitorData.visitCount,
                    isActive: true
                });
                
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
            
            // เก็บ session data แยก
            const allSessions = JSON.parse(localStorage.getItem('user_sessions') || '[]');
            allSessions.push({
                visitorId: this.visitorData.visitorId,
                sessionId: sessionId,
                startTime: new Date().toISOString(),
                ipAddress: this.visitorData.ipAddress,
                country: this.visitorData.country,
                city: this.visitorData.city,
                deviceInfo: this.visitorData.deviceInfo,
                referrer: this.visitorData.referrer,
                visitCount: this.visitorData.visitCount,
                isActive: true
            });
            
            if (allSessions.length > 500) {
                allSessions.shift();
            }
            
            localStorage.setItem('user_sessions', JSON.stringify(allSessions));
        }
        
        // บันทึกว่าผู้ใช้ยินยอมแล้ว (ใช้ localStorage เสมอ)
        localStorage.setItem('user_consent', 'true');
        localStorage.setItem('consent_time', new Date().toISOString());
        localStorage.setItem('current_session_id', sessionId);
        localStorage.setItem('current_visitor_id', this.visitorData.visitorId);
        
        console.log('ข้อมูลผู้เข้าชมถูกบันทึกแล้ว:', this.visitorData);
        console.log('Session ID:', sessionId);
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