(function() {
    'use strict';
    
    // ตรวจสอบว่าอยู่ในหน้าที่ไม่ต้องเช็ค consent
    const exemptPages = [
        'visitor-consent.html',
        'admin-dashboard.html'
    ];
    
    const currentPage = window.location.pathname.split('/').pop();
    
    // ถ้าอยู่ในหน้าที่ไม่ต้องเช็ค ให้หยุดการทำงาน
    if (exemptPages.includes(currentPage)) {
        return;
    }
    
    // ตรวจสอบ consent status
    function checkConsentStatus() {
        const consent = localStorage.getItem('user_consent');
        const consentTime = localStorage.getItem('consent_time');
        
        // ถ้ายังไม่ได้ยินยอม
        if (consent !== 'true' || !consentTime) {
            redirectToConsent();
            return false;
        }
        
        // ตรวจสอบว่า consent หมดอายุแล้วหรือไม่ (30 วัน)
        const consentDate = new Date(consentTime);
        const now = new Date();
        const daysDiff = (now - consentDate) / (1000 * 60 * 60 * 24);
        
        if (daysDiff > 30) {
            // หมดอายุแล้ว - ลบข้อมูลเก่าและขอ consent ใหม่
            localStorage.removeItem('user_consent');
            localStorage.removeItem('consent_time');
            redirectToConsent();
            return false;
        }
        
        return true;
    }
    
    function redirectToConsent() {
        // เก็บหน้าปัจจุบันเพื่อกลับมาหลังจากยินยอม
        const currentUrl = window.location.href;
        const currentFile = currentUrl.split('/').pop();
        
        // ป้องกันการ redirect loop
        if (currentFile === 'visitor-consent.html') {
            return;
        }
        
        window.location.href = `visitor-consent.html?return=${encodeURIComponent(currentFile)}`;
    }
    
    // ฟังก์ชันเก็บข้อมูลการเข้าชมเพิ่มเติม
    function trackPageView() {
        try {
            const pageViewData = {
                page: window.location.pathname,
                title: document.title,
                timestamp: new Date().toISOString(),
                referrer: document.referrer,
                userAgent: navigator.userAgent,
                language: navigator.language,
                screenResolution: `${screen.width}x${screen.height}`,
                url: window.location.href
            };
            
            // เก็บข้อมูลการเข้าชมหน้า
            let pageViews = JSON.parse(localStorage.getItem('page_views') || '[]');
            pageViews.unshift(pageViewData);
            
            // เก็บเฉพาะ 100 records ล่าสุด
            if (pageViews.length > 100) {
                pageViews = pageViews.slice(0, 100);
            }
            
            localStorage.setItem('page_views', JSON.stringify(pageViews));
            
        } catch (error) {
            console.error('ไม่สามารถเก็บข้อมูลการเข้าชมได้:', error);
        }
    }
    
    // ฟังก์ชันเพิ่มข้อมูลผู้ใช้ที่กำลังออนไลน์
    function updateOnlineStatus() {
        try {
            const onlineData = {
                timestamp: new Date().toISOString(),
                page: window.location.pathname,
                title: document.title,
                userAgent: navigator.userAgent,
                language: navigator.language
            };
            
            // เก็บข้อมูลว่าผู้ใช้กำลังออนไลน์
            localStorage.setItem('current_session', JSON.stringify(onlineData));
            
            // อัปเดตข้อมูลทุก 30 วินาที
            setInterval(() => {
                onlineData.timestamp = new Date().toISOString();
                localStorage.setItem('current_session', JSON.stringify(onlineData));
            }, 30000);
            
        } catch (error) {
            console.error('ไม่สามารถอัปเดตสถานะออนไลน์ได้:', error);
        }
    }
    
    // ฟังก์ชันเก็บข้อมูลเมื่อผู้ใช้ออกจากหน้า
    function trackPageLeave() {
        try {
            const leaveData = {
                page: window.location.pathname,
                leaveTime: new Date().toISOString(),
                timeSpent: Date.now() - window.performance.timing.navigationStart
            };
            
            // ใช้ sendBeacon ถ้ามี หรือใช้ localStorage
            if (navigator.sendBeacon) {
                // สำหรับเซิร์ฟเวอร์ที่รองรับ
                navigator.sendBeacon('/api/track-leave', JSON.stringify(leaveData));
            } else {
                // เก็บใน localStorage
                let pageLeaves = JSON.parse(localStorage.getItem('page_leaves') || '[]');
                pageLeaves.unshift(leaveData);
                
                if (pageLeaves.length > 50) {
                    pageLeaves = pageLeaves.slice(0, 50);
                }
                
                localStorage.setItem('page_leaves', JSON.stringify(pageLeaves));
            }
            
        } catch (error) {
            console.error('ไม่สามารถเก็บข้อมูลการออกจากหน้าได้:', error);
        }
    }
    
    // ฟังก์ชันเก็บข้อมูลการคลิก
    function trackClicks() {
        document.addEventListener('click', function(event) {
            try {
                const clickData = {
                    element: event.target.tagName,
                    elementId: event.target.id || '',
                    elementClass: event.target.className || '',
                    elementText: event.target.textContent?.slice(0, 100) || '',
                    timestamp: new Date().toISOString(),
                    page: window.location.pathname,
                    x: event.clientX,
                    y: event.clientY
                };
                
                let clicks = JSON.parse(localStorage.getItem('user_clicks') || '[]');
                clicks.unshift(clickData);
                
                // เก็บเฉพาะ 200 clicks ล่าสุด
                if (clicks.length > 200) {
                    clicks = clicks.slice(0, 200);
                }
                
                localStorage.setItem('user_clicks', JSON.stringify(clicks));
                
            } catch (error) {
                console.error('ไม่สามารถเก็บข้อมูลการคลิกได้:', error);
            }
        });
    }
    
    // ฟังก์ชันเก็บข้อมูลการ scroll
    function trackScrolling() {
        let maxScroll = 0;
        let scrollTimeout;
        
        window.addEventListener('scroll', function() {
            clearTimeout(scrollTimeout);
            
            const scrollPercent = Math.round(
                (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
            );
            
            if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
            }
            
            scrollTimeout = setTimeout(() => {
                try {
                    const scrollData = {
                        page: window.location.pathname,
                        maxScrollPercent: maxScroll,
                        currentScrollPercent: scrollPercent,
                        timestamp: new Date().toISOString()
                    };
                    
                    localStorage.setItem('scroll_data', JSON.stringify(scrollData));
                    
                } catch (error) {
                    console.error('ไม่สามารถเก็บข้อมูลการ scroll ได้:', error);
                }
            }, 1000);
        });
    }
    
    // เริ่มต้นระบบ tracking
    function initTracking() {
        // ตรวจสอบ consent ก่อน
        if (!checkConsentStatus()) {
            return; // หยุดการทำงานถ้าไม่ได้ยินยอม
        }
        
        // เก็บข้อมูลการเข้าชม
        trackPageView();
        
        // อัปเดตสถานะออนไลน์
        updateOnlineStatus();
        
        // เก็บข้อมูลการคลิก
        trackClicks();
        
        // เก็บข้อมูลการ scroll
        trackScrolling();
        
        // เก็บข้อมูลเมื่อออกจากหน้า
        window.addEventListener('beforeunload', trackPageLeave);
        window.addEventListener('pagehide', trackPageLeave);
        
        // ตรวจสอบ consent ทุก 10 นาที
        setInterval(checkConsentStatus, 10 * 60 * 1000);
    }
    
    // รอให้ DOM โหลดเสร็จแล้วค่อยเริ่มต้น
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTracking);
    } else {
        initTracking();
    }
    
    // ป้องกันการปิด tab/browser โดยไม่ได้ยืนยัน (สำหรับ admin เท่านั้น)
    if (currentPage === 'admin-dashboard.html') {
        window.addEventListener('beforeunload', function(event) {
            event.preventDefault();
            event.returnValue = '';
            return '';
        });
    }
    
})(); 