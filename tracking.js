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
    async function trackPageView() {
        try {
            let sessionId = localStorage.getItem('current_session_id');
            let visitorId = localStorage.getItem('current_visitor_id');
            
            // สร้าง visitor ID ถ้าไม่มี
            if (!visitorId) {
                visitorId = 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
                localStorage.setItem('current_visitor_id', visitorId);
            }
            
            // สร้าง session ID ถ้าไม่มี
            if (!sessionId) {
                sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
                localStorage.setItem('current_session_id', sessionId);
            }
            
            const pageViewData = {
                visitorId: visitorId,
                sessionId: sessionId,
                page: window.location.pathname,
                title: document.title,
                timestamp: new Date().toISOString(),
                referrer: document.referrer,
                userAgent: navigator.userAgent,
                language: navigator.language,
                screenResolution: `${screen.width}x${screen.height}`,
                url: window.location.href,
                viewDuration: 0, // จะอัปเดตเมื่อออกจากหน้า
                loadTime: window.performance?.timing ? 
                    window.performance.timing.loadEventEnd - window.performance.timing.navigationStart : 0
            };
            
            // บันทึกลง Firebase
            try {
                if (window.firebaseDb) {
                    await window.firebaseDb.collection('page_views').add(pageViewData);
                    console.log('Page view บันทึกลง Firebase แล้ว');
                } else {
                    throw new Error('Firebase not available');
                }
            } catch (error) {
                console.warn('ไม่สามารถบันทึก page view ลง Firebase ได้:', error);
                
                // Fallback to localStorage
                let pageViews = JSON.parse(localStorage.getItem('page_views') || '[]');
                pageViews.unshift(pageViewData);
                
                // เก็บเฉพาะ 200 records ล่าสุด
                if (pageViews.length > 200) {
                    pageViews = pageViews.slice(0, 200);
                }
                
                localStorage.setItem('page_views', JSON.stringify(pageViews));
            }
            
            // เก็บ page view id สำหรับอัปเดต duration ภายหลัง
            window.currentPageViewId = Date.now();
            window.pageStartTime = Date.now();
            
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
    async function trackPageLeave() {
        try {
            const sessionId = localStorage.getItem('current_session_id');
            const visitorId = localStorage.getItem('current_visitor_id');
            
            if (!sessionId || !visitorId) return;
            
            const timeSpent = window.pageStartTime ? Date.now() - window.pageStartTime : 0;
            
            const leaveData = {
                visitorId: visitorId,
                sessionId: sessionId,
                page: window.location.pathname,
                leaveTime: new Date().toISOString(),
                timeSpent: timeSpent,
                maxScrollPercent: window.maxScrollPercent || 0,
                totalScrollDistance: window.totalScrollDistance || 0
            };
            
            // บันทึกลง Firebase
            try {
                if (window.firebaseDb) {
                    await window.firebaseDb.collection('page_exits').add(leaveData);
                    
                    // อัปเดต session ว่ายังคง active
                    const sessionsRef = window.firebaseDb.collection('sessions').where('sessionId', '==', sessionId);
                    const sessionDocs = await sessionsRef.get();
                    sessionDocs.forEach(doc => {
                        doc.ref.update({
                            lastActivity: new Date().toISOString(),
                            totalTimeSpent: firebase.firestore.FieldValue.increment(timeSpent)
                        });
                    });
                } else {
                    throw new Error('Firebase not available');
                }
            } catch (error) {
                console.warn('ไม่สามารถบันทึก page exit ลง Firebase ได้:', error);
                
                // Fallback to localStorage
                let pageLeaves = JSON.parse(localStorage.getItem('page_leaves') || '[]');
                pageLeaves.unshift(leaveData);
                
                if (pageLeaves.length > 100) {
                    pageLeaves = pageLeaves.slice(0, 100);
                }
                
                localStorage.setItem('page_leaves', JSON.stringify(pageLeaves));
            }
            
        } catch (error) {
            console.error('ไม่สามารถเก็บข้อมูลการออกจากหน้าได้:', error);
        }
    }
    
    // ฟังก์ชันเก็บข้อมูลการคลิก
    function trackClicks() {
        document.addEventListener('click', async function(event) {
            try {
                const sessionId = localStorage.getItem('current_session_id');
                const visitorId = localStorage.getItem('current_visitor_id');
                
                if (!sessionId || !visitorId) return;
                
                const clickData = {
                    visitorId: visitorId,
                    sessionId: sessionId,
                    element: event.target.tagName,
                    elementId: event.target.id || '',
                    elementClass: event.target.className || '',
                    elementText: event.target.textContent?.slice(0, 100) || '',
                    timestamp: new Date().toISOString(),
                    page: window.location.pathname,
                    x: event.clientX,
                    y: event.clientY,
                    href: event.target.href || null, // สำหรับ link
                    type: event.target.type || null // สำหรับ input/button
                };
                
                // บันทึกลง Firebase
                try {
                    if (window.firebaseDb) {
                        await window.firebaseDb.collection('user_interactions').add({
                            ...clickData,
                            interactionType: 'click'
                        });
                    } else {
                        throw new Error('Firebase not available');
                    }
                } catch (error) {
                    // Fallback to localStorage
                    let clicks = JSON.parse(localStorage.getItem('user_clicks') || '[]');
                    clicks.unshift(clickData);
                    
                    // เก็บเฉพาะ 300 clicks ล่าสุด
                    if (clicks.length > 300) {
                        clicks = clicks.slice(0, 300);
                    }
                    
                    localStorage.setItem('user_clicks', JSON.stringify(clicks));
                }
                
            } catch (error) {
                console.error('ไม่สามารถเก็บข้อมูลการคลิกได้:', error);
            }
        });
    }
    
    // ฟังก์ชันเก็บข้อมูลการ scroll
    function trackScrolling() {
        let lastScrollTop = 0;
        let maxScrollPercent = 0;
        let totalScrollDistance = 0;
        let lastScrollPosition = 0;
        
        window.addEventListener('scroll', async function() {
            try {
                const sessionId = localStorage.getItem('current_session_id');
                const visitorId = localStorage.getItem('current_visitor_id');
                
                if (!sessionId || !visitorId) return;
                
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrollPercent = Math.round((scrollTop / documentHeight) * 100);
                
                // คำนวณระยะทางที่ scroll
                totalScrollDistance += Math.abs(scrollTop - lastScrollPosition);
                lastScrollPosition = scrollTop;
                
                // เก็บค่า max scroll percent
                if (scrollPercent > maxScrollPercent) {
                    maxScrollPercent = scrollPercent;
                    window.maxScrollPercent = maxScrollPercent;
                    window.totalScrollDistance = totalScrollDistance;
                }
                
                // เก็บข้อมูลเมื่อผู้ใช้ scroll ลงไป 25%, 50%, 75%, 100%
                if ([25, 50, 75, 100].includes(scrollPercent) && scrollPercent > lastScrollTop) {
                    const scrollData = {
                        visitorId: visitorId,
                        sessionId: sessionId,
                        page: window.location.pathname,
                        scrollPercent: scrollPercent,
                        timestamp: new Date().toISOString(),
                        direction: scrollTop > lastScrollTop ? 'down' : 'up',
                        totalScrollDistance: totalScrollDistance
                    };
                    
                    // บันทึกลง Firebase
                    try {
                        if (window.firebaseDb) {
                            await window.firebaseDb.collection('user_interactions').add({
                                ...scrollData,
                                interactionType: 'scroll_milestone'
                            });
                        } else {
                            throw new Error('Firebase not available');
                        }
                    } catch (error) {
                        // Fallback to localStorage
                        let scrollEvents = JSON.parse(localStorage.getItem('scroll_events') || '[]');
                        scrollEvents.unshift(scrollData);
                        
                        if (scrollEvents.length > 200) {
                            scrollEvents = scrollEvents.slice(0, 200);
                        }
                        
                        localStorage.setItem('scroll_events', JSON.stringify(scrollEvents));
                    }
                }
                
                lastScrollTop = scrollPercent;
                
            } catch (error) {
                console.error('ไม่สามารถเก็บข้อมูลการ scroll ได้:', error);
            }
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