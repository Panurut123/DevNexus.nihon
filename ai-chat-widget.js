// DevNexus AI Chat Universal Widget
(function() {
    'use strict';
    
    // Configuration
    const CONFIG = {
        apiKey: 'AIzaSyAoShtpJkpusAFKkK3Qgy_oZh9RNoHRP-g',
        apiUrl: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent'
    };
    
    // Widget HTML
    const WIDGET_HTML = `
        <div id="devnexus-chat-widget" style="position:fixed;bottom:20px;right:20px;z-index:9999;font-family:'Noto Sans Thai','Noto Sans JP',sans-serif;">
            <!-- Chat Toggle Button -->
            <div id="chat-toggle" class="chat-toggle" style="width:60px;height:60px;background:linear-gradient(135deg,#e84393,#fd79a8);border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 8px 25px rgba(232,67,147,0.3);transition:all 0.3s ease;position:relative;animation:float 3s ease-in-out infinite;">
                <i class="fas fa-robot" style="color:white;font-size:24px;"></i>
                <span class="chat-badge" id="chat-badge" style="position:absolute;top:-5px;right:-5px;background:#ff6b6b;color:white;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:bold;animation:pulse 2s infinite;">1</span>
            </div>

            <!-- Chat Window -->
            <div id="chat-window" class="chat-window" style="position:fixed;bottom:90px;right:20px;width:380px;height:600px;background:white;border-radius:20px;box-shadow:0 20px 60px rgba(0,0,0,0.15);display:none;flex-direction:column;overflow:hidden;border:1px solid #e1e8ed;animation:slideInUp 0.3s ease-out;resize:both;min-width:300px;min-height:400px;max-width:90vw;max-height:90vh;">
                <!-- Chat Header -->
                <div class="chat-header" id="chat-header" style="background:linear-gradient(135deg,#e84393,#fd79a8);color:white;padding:15px 20px;display:flex;justify-content:space-between;align-items:center;cursor:move;user-select:none;">
                    <div class="ai-info" style="display:flex;align-items:center;gap:12px;">
                        <div class="ai-avatar" style="width:40px;height:40px;background:rgba(255,255,255,0.2);border-radius:50%;display:flex;align-items:center;justify-content:center;">
                            <i class="fas fa-robot" style="font-size:18px;"></i>
                        </div>
                        <div class="ai-details">
                            <h3 style="margin:0;font-size:16px;font-weight:600;">DevNexus AI</h3>
                            <span class="ai-status" style="font-size:12px;opacity:0.9;display:flex;align-items:center;gap:5px;">
                                <i class="fas fa-circle" style="color:#4CAF50;font-size:8px;"></i>
                                ช่วยเรียนภาษาญี่ปุ่น
                            </span>
                        </div>
                    </div>
                    <div class="chat-controls" style="display:flex;gap:8px;">
                        <button id="clear-chat" class="control-btn" style="background:rgba(255,255,255,0.2);border:none;color:white;width:32px;height:32px;border-radius:50%;cursor:pointer;transition:all 0.2s ease;" title="ล้างบทสนทนา">
                            <i class="fas fa-trash"></i>
                        </button>
                        <button id="minimize-chat" class="control-btn" style="background:rgba(255,255,255,0.2);border:none;color:white;width:32px;height:32px;border-radius:50%;cursor:pointer;transition:all 0.2s ease;" title="ย่อหน้าต่าง">
                            <i class="fas fa-minus"></i>
                        </button>
                    </div>
                </div>

                <!-- Quick Actions -->
                <div class="quick-actions" style="padding:15px;background:#f8f9fa;border-bottom:1px solid #e1e8ed;display:flex;flex-wrap:wrap;gap:8px;">
                    <button class="quick-btn" data-action="grammar-check" style="background:white;border:1px solid #e1e8ed;border-radius:20px;padding:8px 12px;font-size:12px;cursor:pointer;transition:all 0.2s ease;display:flex;align-items:center;gap:6px;color:#495057;">
                        <i class="fas fa-language" style="font-size:11px;"></i>
                        ช่วยไวยากรณ์
                    </button>
                    <button class="quick-btn" data-action="conversation" style="background:white;border:1px solid #e1e8ed;border-radius:20px;padding:8px 12px;font-size:12px;cursor:pointer;transition:all 0.2s ease;display:flex;align-items:center;gap:6px;color:#495057;">
                        <i class="fas fa-comments" style="font-size:11px;"></i>
                        สร้างบทสนทนา
                    </button>
                </div>

                <!-- Chat Messages -->
                <div id="chat-messages" class="chat-messages" style="flex:1;overflow-y:auto;padding:15px;background:#f8f9fa;">
                    <div class="message ai-message" style="display:flex;gap:10px;margin-bottom:15px;animation:messageSlideIn 0.3s ease-out;">
                        <div class="message-avatar" style="width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#e84393,#fd79a8);color:white;">
                            <i class="fas fa-robot"></i>
                        </div>
                        <div class="message-content" style="flex:1;min-width:0;">
                            <div class="message-text" style="background:white;padding:12px 15px;border-radius:18px;box-shadow:0 2px 8px rgba(0,0,0,0.1);line-height:1.5;word-wrap:break-word;">
                                <div class="section-header">🤖 สวัสดีครับ! ผม DevNexus AI</div>
                                <p style="margin: 8px 0; color: #666;">ผู้ช่วยเรียนภาษาญี่ปุ่นของคุณ</p>
                                
                                <div class="section-header">📋 วิธีใช้งาน</div>
                                <ul style="margin: 8px 0; padding: 8px 20px; background: #f8f9fa; border-radius: 8px; border-left: 3px solid #e84393;">
                                    <li style="margin: 4px 0;">📖 เปิดหน้าไวยากรณ์หรือคำศัพท์ที่ต้องการอธิบาย</li>
                                    <li style="margin: 4px 0;">💬 ถามคำถามเกี่ยวกับภาษาญี่ปุ่นได้เลย</li>
                                    <li style="margin: 4px 0;">📚 ขอตัวอย่างประโยค โครงสร้าง หรือไวยากรณ์</li>
                                </ul>
                                
                                <div class="usage-note" style="margin-top: 12px;" id="usage-note">
                                    💡 เปิดหน้าไวยากรณ์ที่ต้องการ หรือศัพท์คันจิ เพื่ออธิบายเพิ่มเติม
                                </div>
                            </div>
                            <div class="message-time" style="font-size:11px;color:#6c757d;margin-top:5px;padding-left:15px;">เมื่อสักครู่</div>
                        </div>
                    </div>
                </div>



                <!-- Chat Input -->
                <div class="chat-input-container" style="border-top:1px solid #e1e8ed;background:white;">
                    <div class="chat-input-wrapper" style="display:flex;align-items:flex-end;padding:15px;gap:10px;">
                        <textarea id="chat-input" class="chat-input" placeholder="ถามเกี่ยวกับภาษาญี่ปุ่น... (กด Enter เพื่อส่ง, Shift+Enter เพื่อขึ้นบรรทัดใหม่)" rows="1" style="flex:1;border:1px solid #e1e8ed;border-radius:20px;padding:12px 16px;font-size:14px;resize:none;outline:none;min-height:20px;max-height:100px;transition:all 0.2s ease;font-family:'Noto Sans Thai',sans-serif;"></textarea>
                        <button id="send-message" class="send-btn" style="width:40px;height:40px;background:#e84393;color:white;border:none;border-radius:50%;cursor:pointer;transition:all 0.2s ease;display:flex;align-items:center;justify-content:center;">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                    <div class="input-suggestions" style="padding:10px 15px 15px;display:flex;flex-wrap:wrap;gap:6px;">
                        <button class="suggestion-btn" data-text="อธิบายไวยากรณ์นี้หน่อย" style="background:#f8f9fa;border:1px solid #e1e8ed;border-radius:15px;padding:6px 10px;font-size:11px;cursor:pointer;transition:all 0.2s ease;color:#6c757d;">อธิบายไวยากรณ์นี้หน่อย</button>
                        <button class="suggestion-btn" data-text="ขอตัวอย่างประโยค" style="background:#f8f9fa;border:1px solid #e1e8ed;border-radius:15px;padding:6px 10px;font-size:11px;cursor:pointer;transition:all 0.2s ease;color:#6c757d;">ขอตัวอย่างประโยค</button>
                        <button class="suggestion-btn" data-text="โครงสร้างประโยคคืออะไร" style="background:#f8f9fa;border:1px solid #e1e8ed;border-radius:15px;padding:6px 10px;font-size:11px;cursor:pointer;transition:all 0.2s ease;color:#6c757d;">โครงสร้างประโยคคืออะไร</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Inject CSS
    const css = `
        <style>
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }
                                @keyframes pulse {
                        0% { transform: scale(1); }
                        50% { transform: scale(1.2); }
                        100% { transform: scale(1); }
                    }
                    
                    @keyframes slideDown {
                        from { transform: translateX(-50%) translateY(-20px); opacity: 0; }
                        to { transform: translateX(-50%) translateY(0); opacity: 1; }
                    }
            @keyframes slideInUp {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes messageSlideIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .chat-toggle:hover { transform: scale(1.1); box-shadow: 0 12px 35px rgba(232, 67, 147, 0.4); }
            .chat-window.show { display: flex !important; }
            .control-btn:hover { background: rgba(255, 255, 255, 0.3) !important; transform: scale(1.1); }
            .quick-btn:hover { background: #e84393 !important; color: white !important; border-color: #e84393 !important; transform: translateY(-2px); }
            .suggestion-btn:hover { background: #e84393 !important; color: white !important; border-color: #e84393 !important; }
            .send-btn:hover { background: #d63384 !important; transform: scale(1.1); }
            .send-btn:disabled { background: #ddd !important; cursor: not-allowed !important; transform: none !important; }
            .chat-input:focus { border-color: #e84393 !important; box-shadow: 0 0 0 3px rgba(232, 67, 147, 0.1) !important; }
            .chat-messages::-webkit-scrollbar { width: 6px; }
            .chat-messages::-webkit-scrollbar-track { background: transparent; }
            .chat-messages::-webkit-scrollbar-thumb { background: #e1e8ed; border-radius: 3px; }
            .chat-messages::-webkit-scrollbar-thumb:hover { background: #adb5bd; }
            .typing-indicator { display: flex; align-items: center; gap: 4px; padding: 12px 15px; }
            .typing-dot { width: 6px; height: 6px; background: #6c757d; border-radius: 50%; animation: typing 1.4s infinite ease-in-out; }
            .typing-dot:nth-child(1) { animation-delay: -0.32s; }
            .typing-dot:nth-child(2) { animation-delay: -0.16s; }
            @keyframes typing { 0%, 80%, 100% { transform: scale(0); opacity: 0.5; } 40% { transform: scale(1); opacity: 1; } }
            
            /* Message content styling */
            .message-text ul, .message-text ol {
                position: relative;
                z-index: 2;
                list-style-position: inside;
                margin: 8px 0;
                padding-left: 0;
            }
            
            .message-text li {
                position: relative;
                z-index: 3;
                margin: 4px 0;
                padding-left: 0;
                line-height: 1.6;
            }
            
            /* Japanese text styling */
            .japanese-text { 
                font-family: 'Noto Sans JP', sans-serif; 
                font-size: 14px; 
                color: #2d3436; 
                margin: 4px 0; 
                padding: 6px 8px; 
                background: rgba(232, 67, 147, 0.02); 
                border: 1px solid rgba(232, 67, 147, 0.08); 
                border-radius: 4px; 
                line-height: 1.4;
            }
            
            /* Grammar structure styling */
            .grammar-structure { 
                background: rgba(33, 150, 243, 0.02); 
                border: 1px solid rgba(33, 150, 243, 0.1); 
                border-radius: 4px; 
                padding: 8px; 
                margin: 4px 0; 
            }
            .grammar-structure h4 { 
                color: #1976d2; 
                margin: 0 0 4px 0; 
                font-size: 12px; 
                font-weight: 600;
                display: flex;
                align-items: center;
                gap: 4px;
            }
            .grammar-structure h4::before {
                content: "📝";
                font-size: 10px;
            }
            
            /* Example sentence styling */
            .example-sentence { 
                background: rgba(156, 39, 176, 0.02); 
                border: 1px solid rgba(156, 39, 176, 0.1); 
                padding: 6px 8px; 
                margin: 4px 0; 
                border-radius: 4px; 
                position: relative;
            }
            .example-sentence::before {
                content: "💬";
                position: absolute;
                top: 4px;
                right: 6px;
                font-size: 10px;
                opacity: 0.6;
            }
            
            /* Vocabulary styling */
            .vocabulary-item {
                background: rgba(76, 175, 80, 0.02);
                border: 1px solid rgba(76, 175, 80, 0.1);
                border-radius: 4px;
                padding: 6px 8px;
                margin: 4px 0;
            }
            .vocabulary-item::before {
                content: "📚";
                margin-right: 4px;
                font-size: 10px;
            }
            
            /* Meaning explanation */
            .meaning-box {
                background: rgba(255, 152, 0, 0.05);
                border: 1px solid #ff9800;
                border-radius: 4px;
                padding: 6px 8px;
                margin: 4px 0;
            }
            .meaning-box::before {
                content: "💡";
                margin-right: 4px;
                font-size: 10px;
            }
            
            /* Usage note styling */
            .usage-note {
                background: rgba(139, 195, 74, 0.05);
                border: 1px solid #8bc34a;
                border-radius: 4px;
                padding: 6px 8px;
                margin: 4px 0;
                font-style: italic;
            }
            .usage-note::before {
                content: "ℹ️";
                margin-right: 4px;
                font-size: 10px;
            }
            
            /* Section headers */
            .section-header {
                color: #e84393;
                font-weight: 600;
                font-size: 13px;
                margin: 8px 0 4px 0;
                padding-bottom: 2px;
                border-bottom: 1px solid #e84393;
                display: flex;
                align-items: center;
                gap: 4px;
            }
            
            /* Romaji text */
            .romaji-text {
                font-style: italic;
                color: #666;
                font-size: 14px;
                margin-top: 4px;
            }
            
            /* Thai translation */
            .thai-translation {
                color: #2d3436;
                font-weight: 400;
                margin-top: 2px;
                padding: 4px 6px;
                background: rgba(108, 117, 125, 0.02);
                border-radius: 3px;
                border: 1px solid rgba(108, 117, 125, 0.1);
                font-size: 13px;
            }
            /* Resize handle styling */
            .chat-window::-webkit-resizer {
                background: linear-gradient(135deg, #e84393, #fd79a8);
                border-radius: 0 0 20px 0;
            }
            
            /* Selection mode styles */
            .selection-mode {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(232, 67, 147, 0.05);
                z-index: 9998;
                pointer-events: none;
                border: 3px dashed rgba(232, 67, 147, 0.3);
                box-sizing: border-box;
            }
            
            .selection-mode::before {
                content: "🖱️ เลือกข้อความในหน้าเว็บได้เลย";
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(232, 67, 147, 0.9);
                color: white;
                padding: 10px 20px;
                border-radius: 20px;
                font-size: 16px;
                font-weight: bold;
                animation: pulse 2s infinite;
                pointer-events: none;
            }
            
            .selection-interface {
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: white;
                padding: 15px 20px;
                border-radius: 25px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                z-index: 9999;
                display: flex;
                align-items: center;
                gap: 15px;
                animation: slideDown 0.3s ease-out;
            }
            
            .selection-counter {
                background: #e84393;
                color: white;
                padding: 5px 12px;
                border-radius: 15px;
                font-size: 12px;
                font-weight: bold;
            }
            
            .selection-btn {
                background: #e84393;
                color: white;
                border: none;
                padding: 8px 15px;
                border-radius: 15px;
                cursor: pointer;
                font-size: 12px;
                transition: all 0.2s ease;
            }
            
            .selection-btn:hover {
                background: #d63384;
                transform: translateY(-1px);
            }
            
            .selection-btn.secondary {
                background: #6c757d;
            }
            
            .selection-btn.secondary:hover {
                background: #5a6268;
            }
            
            .selection-btn:disabled {
                background: #ccc !important;
                cursor: not-allowed !important;
                opacity: 0.6;
            }
            
            .selection-btn:disabled:hover {
                transform: none !important;
                background: #ccc !important;
            }
            
            .text-highlight {
                background: rgba(232, 67, 147, 0.3) !important;
                border-radius: 3px;
                padding: 2px 4px;
                margin: 0 2px;
            }
            
            @media (max-width: 768px) {
                .chat-window { 
                    width: calc(100vw - 20px) !important; 
                    height: calc(100vh - 100px) !important; 
                    right: 10px !important; 
                    bottom: 80px !important;
                    left: 10px !important;
                    resize: none !important;
                }
                .chat-toggle { 
                    width: 50px !important; 
                    height: 50px !important; 
                    right: 15px !important;
                    bottom: 15px !important;
                }
                .chat-toggle i { font-size: 20px !important; }
                
                .quick-actions {
                    padding: 10px !important;
                }
                
                .quick-btn {
                    font-size: 11px !important;
                    padding: 6px 8px !important;
                }
                
                .chat-input-wrapper {
                    padding: 10px !important;
                }
                
                .selection-interface {
                    left: 10px;
                    right: 10px;
                    transform: none;
                    width: calc(100% - 20px);
                    flex-direction: column;
                    gap: 10px;
                }
                
                .selection-interface .selection-btn {
                    width: 100%;
                    padding: 10px;
                }
            }
        </style>
    `;
    
    // Widget Class
    class DevNexusAIChat {
        constructor() {
            this.currentPageContent = '';
            this.conversationHistory = [];
            this.isDragging = false;
            this.dragOffset = { x: 0, y: 0 };
            this.isMobileDevice = this.detectMobileDevice();
            
            this.init();
        }

        detectMobileDevice() {
            const userAgent = navigator.userAgent || navigator.vendor || window.opera;
            
            // ตรวจจับมือถือ iPhone, iPad, Android, Windows Phone
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
            
            // ตรวจจับขนาดหน้าจอ (สำหรับ tablet)
            const isTabletSize = window.innerWidth <= 1024 && window.innerHeight <= 1366;
            
            // ตรวจจับ touch device
            const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            
            return isMobile || (isTabletSize && isTouchDevice);
        }
        
        init() {
            this.injectWidget();
            this.setupEventListeners();
            this.extractPageContent();
            this.setupMobileMode();
            console.log('DevNexus AI Chat Widget loaded!');
        }

        setupMobileMode() {
            if (this.isMobileDevice) {
                // แสดงข้อความแจ้งเตือนเมื่อเปิด chat
                setTimeout(() => {
                    this.showMobileNotice();
                }, 100);
            }
        }

        showMobileNotice() {
            const chatMessages = document.getElementById('chat-messages');
            if (chatMessages && !chatMessages.querySelector('.mobile-notice')) {
                const noticeMessage = document.createElement('div');
                noticeMessage.className = 'message ai-message mobile-notice';
                noticeMessage.innerHTML = `
                    <div class="message-avatar">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="message-content">
                        <div class="message-text">
                            <i class="fas fa-info-circle" style="color: #ffc107; margin-right: 5px;"></i>
                            <strong>หมายเหตุ:</strong><br>
                            AI chat อาจจะทำงานได้ไม่ดีในหน้าจอมือถือ แนะนำให้ใช้บนคอมพิวเตอร์เพื่อประสบการณ์ที่ดีที่สุด
                        </div>
                        <span class="message-time">${new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                `;
                chatMessages.appendChild(noticeMessage);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
        }
        
        injectWidget() {
            // Inject CSS
            document.head.insertAdjacentHTML('beforeend', css);
            
            // Inject HTML
            const container = document.createElement('div');
            container.innerHTML = WIDGET_HTML;
            document.body.appendChild(container);
        }
        
        setupEventListeners() {
            // Chat toggle
            document.getElementById('chat-toggle').addEventListener('click', () => {
                this.toggleChat();
            });

            // Minimize button
            document.getElementById('minimize-chat').addEventListener('click', () => {
                this.toggleChat();
            });

            // Clear chat button
            document.getElementById('clear-chat').addEventListener('click', () => {
                this.clearChat();
            });

            // Setup drag functionality
            this.setupDragFunctionality();

            // Send message
            const sendBtn = document.getElementById('send-message');
            const chatInput = document.getElementById('chat-input');
            
            sendBtn.addEventListener('click', () => {
                this.sendMessage();
            });

            // Enter to send message
            chatInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.sendMessage();
                }
            });

            // Auto-resize textarea
            chatInput.addEventListener('input', () => {
                this.autoResizeTextarea(chatInput);
            });

            // Quick action buttons
            document.querySelectorAll('.quick-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    this.handleQuickAction(btn.dataset.action);
                });
            });

            // Suggestion buttons
            document.querySelectorAll('.suggestion-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    chatInput.value = btn.dataset.text;
                    this.autoResizeTextarea(chatInput);
                    chatInput.focus();
                });
            });


            
            // ตรวจจับการเปิด modal และอัพเดท context
            this.setupModalObserver();
        }
        
        setupModalObserver() {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                        const target = mutation.target;
                        const modalIds = ['grammar-modal', 'kanji-modal', 'vocab-modal', 'favorites-modal'];
                        
                        if (modalIds.includes(target.id) || target.classList.contains('modal')) {
                            // อัพเดท page content เมื่อ modal เปิด/ปิด
                            setTimeout(() => {
                                this.extractPageContent();
                                console.log('Modal state changed, content updated'); // Debug log
                            }, 100);
                        }
                    }
                });
            });
            
            // เริ่มสังเกตการเปลี่ยนแปลง modal ต่างๆ
            const modalsToObserve = [
                'grammar-modal',
                'kanji-modal', 
                'vocab-modal',
                'favorites-modal'
            ];
            
            modalsToObserve.forEach(modalId => {
                const modal = document.getElementById(modalId);
                if (modal) {
                    observer.observe(modal, { attributes: true, attributeFilter: ['style'] });
                    console.log(`Observing ${modalId}`); // Debug log
                }
            });
            
            // สังเกต modal อื่นๆ ที่อาจมี
            document.querySelectorAll('[class*="modal"]').forEach(modal => {
                if (!modalsToObserve.includes(modal.id)) {
                    observer.observe(modal, { attributes: true, attributeFilter: ['style'] });
                }
            });
        }
        
        toggleChat() {
            const chatWindow = document.getElementById('chat-window');
            const chatBadge = document.getElementById('chat-badge');
            
            if (chatWindow.classList.contains('show')) {
                chatWindow.classList.remove('show');
                chatBadge.style.display = 'flex';
            } else {
                chatWindow.classList.add('show');
                chatBadge.style.display = 'none';
                setTimeout(() => {
                    document.getElementById('chat-input').focus();
                }, 100);
            }
        }
        
        clearChat() {
            if (confirm('ต้องการล้างบทสนทนาทั้งหมดหรือไม่?')) {
                location.reload();
            }
        }
        
        extractPageContent() {
            const title = document.title;
            const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4')).map(h => h.textContent).join(' ');
            
            // ตรวจจับเนื้อหาที่กำลังแสดงอยู่ (visible/active content)
            const activeContent = this.getActiveContent();
            const japaneseText = Array.from(document.querySelectorAll('.japanese-text, .vocab-item, .grammar-point')).map(el => el.textContent).join(' ');
            
            this.currentPageContent = `Page: ${title}\nHeadings: ${headings}\nActive Content: ${activeContent}\nJapanese Content: ${japaneseText}`.substring(0, 1500);
        }
        
        getActiveContent() {
            let activeContent = '';
            
            // ตรวจจับ Modal ไวยากรณ์ที่เปิดอยู่
            const grammarModal = document.getElementById('grammar-modal');
            if (grammarModal) {
                const computedStyle = window.getComputedStyle(grammarModal);
                const isVisible = computedStyle.display !== 'none' && grammarModal.offsetParent !== null;
                
                if (isVisible) {
                    const modalBody = grammarModal.querySelector('.grammar-modal-body, .modal-body');
                    if (modalBody) {
                        const title = modalBody.querySelector('.grammar-title')?.textContent || '';
                        const pattern = modalBody.querySelector('.grammar-pattern')?.textContent || '';
                        const explanation = modalBody.querySelector('.grammar-explanation, .grammar-desc')?.textContent || '';
                        const examples = Array.from(modalBody.querySelectorAll('.grammar-example-jp')).map(el => el.textContent).join(' ');
                        
                        activeContent += ` Grammar Modal Open: ${title} ${pattern} ${explanation} Examples: ${examples}`.substring(0, 500);
                        console.log('Grammar Modal detected:', title); // Debug log
                    }
                }
            }
            
            // ตรวจจับ Modal คันจิที่เปิดอยู่
            const kanjiModal = document.getElementById('kanji-modal');
            if (kanjiModal) {
                const computedStyle = window.getComputedStyle(kanjiModal);
                const isVisible = computedStyle.display !== 'none' && kanjiModal.offsetParent !== null;
                
                if (isVisible) {
                    const modalBody = kanjiModal.querySelector('.modal-body');
                    if (modalBody) {
                        const kanjiChar = modalBody.querySelector('.kanji-char')?.textContent || '';
                        const furigana = modalBody.querySelector('.kanji-furigana')?.textContent || '';
                        const meaning = modalBody.querySelector('.kanji-meaning')?.textContent || '';
                        const example = modalBody.querySelector('.kanji-example')?.textContent || '';
                        const level = modalBody.querySelector('.kanji-level-badge')?.textContent || '';
                        
                        activeContent += ` Kanji Modal Open: ${kanjiChar} (${furigana}) ${meaning} Level: ${level} Example: ${example}`.substring(0, 400);
                        console.log('Kanji Modal detected:', kanjiChar, meaning); // Debug log
                    }
                }
            }
            
            // ตรวจจับ Modal ศัพท์ที่เปิดอยู่
            const vocabModal = document.getElementById('vocab-modal');
            if (vocabModal) {
                const computedStyle = window.getComputedStyle(vocabModal);
                const isVisible = computedStyle.display !== 'none' && vocabModal.offsetParent !== null;
                
                if (isVisible) {
                    const modalBody = vocabModal.querySelector('.vocab-modal-body');
                    if (modalBody) {
                        const jpWord = modalBody.querySelector('.jp-word')?.textContent || '';
                        const furigana = modalBody.querySelector('.furigana')?.textContent || '';
                        const romaji = modalBody.querySelector('.romaji')?.textContent || '';
                        const meaning = modalBody.querySelector('.meaning')?.textContent || '';
                        
                        activeContent += ` Vocabulary Modal Open: ${jpWord} ${furigana ? `(${furigana})` : ''} [${romaji}] = ${meaning}`.substring(0, 300);
                        console.log('Vocabulary Modal detected:', jpWord, meaning); // Debug log
                    }
                }
            }
            
            // ตรวจจับ Modal อื่นๆ ที่เปิดอยู่
            const visibleModals = document.querySelectorAll('.modal:not([style*="display: none"]), .popup:not([style*="display: none"]), [class*="modal"]:not([style*="display: none"])');
            if (visibleModals.length > 0) {
                visibleModals.forEach(modal => {
                    if (modal.offsetParent !== null && modal.id !== 'grammar-modal') { // visible และไม่ใช่ grammar modal ที่เช็คแล้ว
                        activeContent += ` Modal: ${modal.textContent.substring(0, 300)}`;
                    }
                });
            }
            
            // ตรวจจับ Tab ที่ active
            const activeTabs = document.querySelectorAll('.tab.active, .tab-pane.active, .content.active, [class*="active"]');
            activeTabs.forEach(tab => {
                if (tab.offsetParent !== null && tab.textContent.trim()) {
                    activeContent += ` Active Section: ${tab.textContent.substring(0, 200)}`;
                }
            });
            
            // ตรวจจับเนื้อหาที่ scroll มาดู
            const viewportContent = this.getContentInViewport();
            if (viewportContent) {
                activeContent += ` Viewport Content: ${viewportContent}`;
            }
            
            // ตรวจจับ grammar/vocab items ที่กำลังแสดง
            const visibleItems = document.querySelectorAll('.grammar-item:not([style*="display: none"]), .vocab-item:not([style*="display: none"]), .kanji-item:not([style*="display: none"])');
            visibleItems.forEach(item => {
                if (this.isElementInViewport(item)) {
                    activeContent += ` Current Item: ${item.textContent.substring(0, 150)}`;
                }
            });
            
            return activeContent || 'ไม่พบเนื้อหาเฉพาะ';
        }
        
        getContentInViewport() {
            const elements = document.querySelectorAll('h2, h3, .lesson-content, .grammar-point, .vocab-entry, .kanji-entry');
            let visibleContent = '';
            
            elements.forEach(el => {
                if (this.isElementInViewport(el) && el.textContent.trim()) {
                    visibleContent += ` ${el.textContent.substring(0, 100)}`;
                }
            });
            
            return visibleContent.substring(0, 300);
        }
        
        isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        

        
        handleQuickAction(action) {
            const chatInput = document.getElementById('chat-input');
            
            switch (action) {
                case 'grammar-check':
                    chatInput.value = 'ช่วยอธิบายไวยากรณ์หรือเนื้อหาในหน้านี้ให้ฟังหน่อย';
                    this.autoResizeTextarea(chatInput);
                    chatInput.focus();
                    break;
                case 'conversation':
                    chatInput.value = 'สร้างตัวอย่างบทสนทนาจากเนื้อหาในหน้านี้ให้หน่อย';
                    this.autoResizeTextarea(chatInput);
                    chatInput.focus();
                    break;
            }
        }

        
        async sendMessage() {
            const chatInput = document.getElementById('chat-input');
            const message = chatInput.value.trim();
            
            if (!message) return;
            
            this.addMessage(message, 'user');
            chatInput.value = '';
            this.autoResizeTextarea(chatInput);
            
            this.showTypingIndicator();
            
            try {
                const response = await this.callGeminiAPI(message);
                this.hideTypingIndicator();
                this.addMessage(response, 'ai');
            } catch (error) {
                this.hideTypingIndicator();
                this.addMessage('ขออภัยครับ เกิดข้อผิดพลาดในการเชื่อมต่อ กรุณาลองใหม่อีกครั้ง', 'ai');
                console.error('API Error:', error);
            }
        }
        
        async sendToAI(message) {
            this.showTypingIndicator();
            
            try {
                const response = await this.callGeminiAPI(message);
                this.hideTypingIndicator();
                this.addMessage(response, 'ai');
            } catch (error) {
                this.hideTypingIndicator();
                this.addMessage('ขออภัยครับ เกิดข้อผิดพลาดในการเชื่อมต่อ กรุณาลองใหม่อีกครั้ง', 'ai');
                console.error('API Error:', error);
            }
        }
        
        async callGeminiAPI(userMessage) {
            // ตรวจสอบความปลอดภัยของคำถาม
            if (this.isUnsafeQuery(userMessage)) {
                return this.getSafetyResponse();
            }
            
            let context = `คุณคือ DevNexus AI ผู้ช่วยเรียนภาษาญี่ปุ่น 

🔒 **ข้อจำกัดความปลอดภัย (CRITICAL - ห้ามละเมิด):**
- ตอบได้เฉพาะ: ภาษาญี่ปุ่น, การเรียนรู้, ข้อมูลนักพัฒนา
- ห้ามเปิดเผย: ซอร์สโค้ด, API keys, ข้อมูลระบบ, โครงสร้างไฟล์, database
- ห้ามตอบ: คำถามเกี่ยวกับเทคโนโลยี, การเขียนโปรแกรม, ระบบภายใน
- ห้ามแสดง: HTML/CSS/JavaScript code, การตั้งค่าระบบ
- ถ้าถูกถามเรื่องที่ห้าม: ตอบว่า "ขออภัยครับ ผมตอบได้เฉพาะเรื่องภาษาญี่ปุ่นและการเรียนรู้เท่านั้น"

📚 **ข้อมูลที่อนุญาต:**
- ไวยากรณ์ภาษาญี่ปุ่น, คันจิ, ศัพท์, การออกเสียง
- วิธีการเรียน, เทคนิคจำ, แบบฝึกหัด
- วัฒนธรรมญี่ปุ่นที่เกี่ยวกับภาษา
- ข้อมูลนักพัฒนา: Panurut / DevNexus (ผู้พัฒนาเว็บนี้คนเดียว)

📝 **รูปแบบการตอบ (สำคัญมาก):**
- ใช้ ** สำหรับข้อความที่ต้องการเน้น
- ใช้ ## สำหรับหัวข้อหลัก
- ใช้ ### สำหรับหัวข้อย่อย
- ใช้ - สำหรับรายการ
- จัดรูปแบบ: คำญี่ปุ่น: ความหมายไทย
- จัดรูปแบบ: ประโยคญี่ปุ่น (romaji): ความหมายไทย
- แยกบรรทัดให้ชัดเจน ใช้ line break เพื่อความเป็นระเบียบ

หน้าเว็บปัจจุบัน: ${this.currentPageContent}`;

            context += `\n\nกรุณาตอบในรูปแบบที่ช่วยการเรียนรู้:

**การจัดรูปแบบ:**
- ใช้ **ข้อความหนา** สำหรับจุดสำคัญ
- ใช้ - สำหรับรายการ
- แบ่งย่อหน้าให้ชัดเจน
- ใช้ <div class="japanese-text">ข้อความญี่ปุ่น</div> สำหรับภาษาญี่ปุ่น
- ใช้ <div class="grammar-structure">โครงสร้างไวยากรณ์</div> สำหรับไวยากรณ์
- ใช้ <div class="example-sentence">ตัวอย่างประโยค</div> สำหรับตัวอย่าง
- ใช้ <div class="vocabulary-item">คำศัพท์</div> สำหรับคำศัพท์
- ใช้ <div class="kanji-info">ข้อมูลคันจิ</div> สำหรับคันจิ

**ข้อจำกัด:**
- ห้ามเปิดเผยซอร์สโค้ดหรือข้อมูลภายในระบบ
- Panurut / DevNexus เป็นผู้พัฒนาเว็บนี้เพียงคนเดียว
- ตอบเฉพาะเรื่องภาษาญี่ปุ่นและการเรียนรู้เท่านั้น`;

            const requestBody = {
                contents: [{
                    parts: [{
                        text: `${context}\n\nคำถาม: ${userMessage}`
                    }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 1024,
                }
            };

            const response = await fetch(`${CONFIG.apiUrl}?key=${CONFIG.apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }

            const data = await response.json();
            
            if (data.candidates && data.candidates[0] && data.candidates[0].content) {
                const aiResponse = data.candidates[0].content.parts[0].text;
                
                // ตรวจสอบความปลอดภัยของคำตอบ
                if (this.isUnsafeResponse(aiResponse)) {
                    console.log('🚨 Unsafe response detected, returning safety message');
                    return this.getSafetyResponse();
                }
                
                return aiResponse;
            } else {
                throw new Error('Invalid API response');
            }
        }
        
        addMessage(text, sender) {
            const messagesContainer = document.getElementById('chat-messages');
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${sender}-message`;
            messageDiv.style.cssText = 'display:flex;gap:10px;margin-bottom:15px;animation:messageSlideIn 0.3s ease-out;';
            
            const avatar = sender === 'ai' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
            const avatarBg = sender === 'ai' ? 'background:linear-gradient(135deg,#e84393,#fd79a8);color:white;' : 'background:#495057;color:white;';
            const textBg = sender === 'ai' ? 'background:white;' : 'background:#e84393;color:white;';
            const time = new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });
            
            messageDiv.innerHTML = `
                <div class="message-avatar" style="width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;${avatarBg}">
                    ${avatar}
                </div>
                <div class="message-content" style="flex:1;min-width:0;">
                    <div class="message-text" style="${textBg}padding:12px 15px;border-radius:18px;box-shadow:0 2px 8px rgba(0,0,0,0.1);line-height:1.6;word-wrap:break-word;">
                        ${sender === 'ai' ? this.formatAIResponse(text) : this.escapeHtml(text)}
                    </div>
                    <div class="message-time" style="font-size:11px;color:#6c757d;margin-top:5px;padding-left:15px;">${time}</div>
                </div>
            `;
            
            messagesContainer.appendChild(messageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
        
        showTypingIndicator() {
            const messagesContainer = document.getElementById('chat-messages');
            const typingDiv = document.createElement('div');
            typingDiv.className = 'message ai-message typing-message';
            typingDiv.style.cssText = 'display:flex;gap:10px;margin-bottom:15px;animation:messageSlideIn 0.3s ease-out;';
            typingDiv.innerHTML = `
                <div class="message-avatar" style="width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#e84393,#fd79a8);color:white;">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-content" style="flex:1;min-width:0;">
                    <div class="message-text" style="background:white;padding:12px 15px;border-radius:18px;box-shadow:0 2px 8px rgba(0,0,0,0.1);line-height:1.5;word-wrap:break-word;">
                        <div class="typing-indicator">
                            <div class="typing-dot"></div>
                            <div class="typing-dot"></div>
                            <div class="typing-dot"></div>
                        </div>
                    </div>
                </div>
            `;
            
            messagesContainer.appendChild(typingDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
        
        hideTypingIndicator() {
            const typingMessage = document.querySelector('.typing-message');
            if (typingMessage) {
                typingMessage.remove();
            }
        }
        
        autoResizeTextarea(textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = Math.min(textarea.scrollHeight, 100) + 'px';
        }
        
        formatAIResponse(text) {
            // ปรับปรุงการจัดรูปแบบข้อความให้ดูเป็นระเบียบ
            let formatted = text
                // แปลง ** เป็น strong tags
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                
                // จัดการหัวข้อ
                .replace(/^### (.*$)/gm, '<div class="section-header">📖 $1</div>')
                .replace(/^## (.*$)/gm, '<div class="section-header">🎯 $1</div>')
                
                // จัดการรายการ
                .replace(/^[\*\-] (.*$)/gm, '<li>$1</li>')
                .replace(/^(\d+)\. (.*$)/gm, '<li>$1. $2</li>')
                
                // จัดการข้อความภาษาญี่ปุ่น (ไฮรางานะ, คาตาคานะ, คันจิ)
                .replace(/([\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]+)/g, '<span class="japanese-text">$1</span>')
                
                // จัดการรูปแบบ คำศัพท์: ความหมาย
                .replace(/([\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]+)\s*[:：]\s*([^\n<]+)/g, 
                    '<div class="vocabulary-item"><span class="japanese-text">$1</span><div class="thai-translation">$2</div></div>')
                
                // จัดการรูปแบบ ประโยค (โรมาจิ): ความหมาย
                .replace(/([\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]+)\s*\(([^)]+)\)\s*[:：]\s*([^\n<]+)/g, 
                    '<div class="example-sentence"><span class="japanese-text">$1</span><div class="romaji-text">($2)</div><div class="thai-translation">$3</div></div>')
                
                // จัดการ line breaks
                .replace(/\n\n/g, '</p><p>')
                .replace(/\n/g, '<br>');

            // ห่อ li tags ด้วย ul
            formatted = formatted.replace(/(<li>.*?<\/li>)/gs, function(match) {
                return '<ul style="margin: 4px 0; padding: 6px 12px; background: #f8f9fa; border-radius: 4px; border-left: 2px solid #e84393; font-size: 13px;">' + match + '</ul>';
            });

            // แก้ไข ul ซ้อน
            formatted = formatted.replace(/<\/ul>\s*<ul[^>]*>/g, '');

            // ห่อด้วย paragraph tags สำหรับข้อความทั่วไป
            if (!formatted.startsWith('<div') && !formatted.startsWith('<ul') && !formatted.startsWith('<li')) {
                formatted = '<p style="line-height: 1.4; margin: 4px 0; font-size: 13px;">' + formatted + '</p>';
            }

            // ลบ empty paragraphs
            formatted = formatted.replace(/<p[^>]*><\/p>/g, '').replace(/<p[^>]*><br><\/p>/g, '');

            return formatted;
        }
        
        isUnsafeQuery(message) {
            // ตรวจสอบว่าเป็นคำถามเกี่ยวกับการเรียนภาษาญี่ปุ่นหรือไม่
            const japaneseRelatedKeywords = [
                'คันจิ', 'kanji', '漢字', 'ศัพท์', 'vocabulary', 'ไวยากรณ์', 'grammar',
                'ฮิรางานะ', 'hiragana', 'คาตากานะ', 'katakana', 'ญี่ปุ่น', 'japanese',
                'อธิบาย', 'explain', 'ความหมาย', 'meaning', 'การใช้', 'usage',
                'ตัวอย่าง', 'example', 'ประโยค', 'sentence', 'การออกเสียง', 'pronunciation',
                'เรียน', 'learn', 'สอน', 'teach', 'จำ', 'remember', 'ฝึก', 'practice'
            ];
            
            const messageText = message.toLowerCase();
            
            // ถ้าเป็นคำถามเกี่ยวกับภาษาญี่ปุ่น ให้ผ่าน
            for (const keyword of japaneseRelatedKeywords) {
                if (messageText.includes(keyword.toLowerCase())) {
                    return false; // ปลอดภัย
                }
            }
            
            const unsafeKeywords = [
                // ซอร์สโค้ดและเทคโนโลยี (เฉพาะที่ไม่เกี่ยวกับการเรียน)
                'source code', 'ซอร์สโค้ด', 'javascript', 'html', 'css', 'php', 'python',
                'api key', 'database', 'ฐานข้อมูล', 'server', 'เซิร์ฟเวอร์', 'hosting', 'โฮสติ้ง',
                'github', 'git', 'repository', 'repo', 'commit', 'push', 'pull',
                
                // ข้อมูลระบบ
                'config', 'configuration', 'การตั้งค่า', 'setting', 'admin', 'password', 'รหัสผ่าน',
                'login', 'เข้าสู่ระบบ', 'authentication', 'token', 'session', 'cookie',
                'file structure', 'โครงสร้างไฟล์', 'directory', 'folder', 'path', 'url structure',
                
                // การเขียนโปรแกรม
                'function', 'ฟังก์ชัน', 'variable', 'ตัวแปร', 'class', 'คลาส', 'method', 'เมธอด',
                'algorithm', 'อัลกอริทึม', 'framework', 'library', 'ไลบรารี', 'plugin', 'ปลั๊กอิน',
                'debug', 'debugging', 'error', 'bug', 'console', 'log',
                
                // ข้อมูลเซิร์ฟเวอร์
                'firebase', 'mysql', 'mongodb', 'sql', 'query', 'table', 'ตาราง',
                'backup', 'สำรองข้อมูล', 'migration', 'deployment', 'การติดตั้ง',
                
                // คำสั่งที่อันตราย (ยกเว้นการเรียนรู้)
                'copy code', 'คัดลอกโค้ด', 'download source', 'ดาวน์โหลดซอร์ส',
                'export database', 'ส่งออกฐานข้อมูล', 'hack', 'แฮก', 'crack',
                
                // การขอข้อมูลระบบ
                'how does this website work', 'เว็บนี้ทำงานยังไง', 'how is this built', 'สร้างยังไง',
                'what technology', 'เทคโนโลยีอะไร', 'what framework', 'เฟรมเวิร์กอะไร',
                'backend', 'frontend', 'database design', 'system architecture'
            ];
            
            // ตรวจสอบคำสำคัญที่อันตราย
            for (const keyword of unsafeKeywords) {
                if (messageText.includes(keyword.toLowerCase())) {
                    console.log(`🚨 Unsafe query detected: ${keyword}`);
                    return true;
                }
            }
            
            // ตรวจสอบรูปแบบที่อันตราย
            const unsafePatterns = [
                /show\s+me\s+.*code/i,
                /how\s+.*\s+work/i,
                /what\s+.*\s+use/i,
                /ทำ.*ยังไง/i,
                /แสดง.*โค้ด/i,
                /ดู.*ระบบ/i,
                /เข้าถึง.*ข้อมูล/i
            ];
            
            for (const pattern of unsafePatterns) {
                if (pattern.test(message)) {
                    console.log(`🚨 Unsafe pattern detected: ${pattern}`);
                    return true;
                }
            }
            
            return false;
        }
        
        isUnsafeResponse(response) {
            // อนุญาต HTML tags ที่ใช้สำหรับการเรียนรู้
            const allowedTags = [
                'japanese-text', 'grammar-structure', 'example-sentence', 
                'vocabulary-item', 'kanji-info', 'div', 'strong', 'p', 'ul', 'li', 'br'
            ];
            
            // ตรวจสอบว่ามี HTML tags ที่อนุญาต
            const hasAllowedTags = allowedTags.some(tag => 
                response.includes(`<div class="${tag}">`) || 
                response.includes(`<${tag}>`) ||
                response.includes(`</${tag}>`)
            );
            
            // ถ้ามี tags ที่อนุญาต ให้ผ่าน
            if (hasAllowedTags) {
                return false;
            }
            
            const unsafeResponseKeywords = [
                // ซอร์สโค้ดที่อันตราย
                '<script', '</script>', 'function(', 'const ', 'let ', 'var ', 'document.', 'window.',
                'addEventListener', 'querySelector', 'getElementById', 'innerHTML', 'style.',
                
                // ข้อมูลระบบ
                'api key', 'database', 'server', 'config', 'password', 'token', 'session',
                'firebase', 'mysql', 'mongodb', 'github', 'repository',
                
                // โครงสร้างไฟล์
                '.js', '.html', '.css', '.php', '.py', 'src/', 'public/', 'assets/',
                'node_modules', 'package.json', 'index.html',
                
                // คำสั่งเทคนิค
                'npm install', 'git clone', 'docker', 'localhost', 'http://', 'https://',
                'console.log', 'alert(', 'fetch(', 'axios', 'ajax'
            ];
            
            const lowerResponse = response.toLowerCase();
            
            for (const keyword of unsafeResponseKeywords) {
                if (lowerResponse.includes(keyword.toLowerCase())) {
                    console.log(`🚨 Unsafe response content detected: ${keyword}`);
                    return true;
                }
            }
            
            // ตรวจสอบรูปแบบโค้ดที่อันตราย (ยกเว้น educational tags)
            const dangerousCodePatterns = [
                /<script[^>]*>/i,   // Script tags
                /function\s*\(/i,   // Functions
                /class\s+\w+/i,     // Classes
                /import\s+.*from/i, // Imports
                /document\./i,      // DOM manipulation
                /window\./i         // Window object
            ];
            
            for (const pattern of dangerousCodePatterns) {
                if (pattern.test(response)) {
                    console.log(`🚨 Dangerous code pattern detected in response: ${pattern}`);
                    return true;
                }
            }
            
            return false;
        }
        
        getSafetyResponse() {
            const responses = [
                "ขออภัยครับ ผมตอบได้เฉพาะเรื่องภาษาญี่ปุ่นและการเรียนรู้เท่านั้น 📚",
                "ขออภัยครับ ผมเป็น AI ผู้ช่วยเรียนภาษาญี่ปุ่น ไม่สามารถตอบคำถามเรื่องอื่นได้ 🙏",
                "ขออภัยครับ ผมถูกออกแบบมาเพื่อช่วยเรื่องภาษาญี่ปุ่นเท่านั้น มีอะไรเกี่ยวกับการเรียนภาษาญี่ปุ่นให้ช่วยไหมครับ? 🇯🇵",
                "ขออภัยครับ ผมไม่สามารถตอบคำถามนี้ได้ ลองถามเรื่องไวยากรณ์ คันจิ หรือศัพท์ภาษาญี่ปุ่นแทนไหมครับ? ✨"
            ];
            
            return responses[Math.floor(Math.random() * responses.length)];
        }
        
        escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }

        setupDragFunctionality() {
            const chatWindow = document.getElementById('chat-window');
            const chatHeader = document.getElementById('chat-header');

            chatHeader.addEventListener('mousedown', (e) => {
                this.isDragging = true;
                const rect = chatWindow.getBoundingClientRect();
                this.dragOffset.x = e.clientX - rect.left;
                this.dragOffset.y = e.clientY - rect.top;
                
                document.addEventListener('mousemove', this.handleDrag.bind(this));
                document.addEventListener('mouseup', this.handleDragEnd.bind(this));
                
                e.preventDefault();
            });

            // Touch events for mobile
            chatHeader.addEventListener('touchstart', (e) => {
                this.isDragging = true;
                const rect = chatWindow.getBoundingClientRect();
                const touch = e.touches[0];
                this.dragOffset.x = touch.clientX - rect.left;
                this.dragOffset.y = touch.clientY - rect.top;
                
                document.addEventListener('touchmove', this.handleTouchDrag.bind(this), { passive: false });
                document.addEventListener('touchend', this.handleDragEnd.bind(this), { passive: false });
                
                e.preventDefault();
            }, { passive: false });
        }

        handleDrag(e) {
            if (!this.isDragging) return;
            
            const chatWindow = document.getElementById('chat-window');
            const newX = e.clientX - this.dragOffset.x;
            const newY = e.clientY - this.dragOffset.y;
            
            // Keep within viewport bounds
            const maxX = window.innerWidth - chatWindow.offsetWidth;
            const maxY = window.innerHeight - chatWindow.offsetHeight;
            
            const boundedX = Math.max(0, Math.min(newX, maxX));
            const boundedY = Math.max(0, Math.min(newY, maxY));
            
            chatWindow.style.left = boundedX + 'px';
            chatWindow.style.top = boundedY + 'px';
            chatWindow.style.right = 'auto';
            chatWindow.style.bottom = 'auto';
        }

        handleTouchDrag(e) {
            if (!this.isDragging) return;
            
            const chatWindow = document.getElementById('chat-window');
            const touch = e.touches[0];
            const newX = touch.clientX - this.dragOffset.x;
            const newY = touch.clientY - this.dragOffset.y;
            
            // Keep within viewport bounds
            const maxX = window.innerWidth - chatWindow.offsetWidth;
            const maxY = window.innerHeight - chatWindow.offsetHeight;
            
            const boundedX = Math.max(0, Math.min(newX, maxX));
            const boundedY = Math.max(0, Math.min(newY, maxY));
            
            chatWindow.style.left = boundedX + 'px';
            chatWindow.style.top = boundedY + 'px';
            chatWindow.style.right = 'auto';
            chatWindow.style.bottom = 'auto';
            
            e.preventDefault();
        }

        handleDragEnd() {
            this.isDragging = false;
            document.removeEventListener('mousemove', this.handleDrag.bind(this));
            document.removeEventListener('mouseup', this.handleDragEnd.bind(this));
            document.removeEventListener('touchmove', this.handleTouchDrag.bind(this), { passive: false });
            document.removeEventListener('touchend', this.handleDragEnd.bind(this), { passive: false });
        }


    }
    
    // Add fadeInOut animation
    const additionalCSS = `
        @keyframes fadeInOut {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        }
    `;
    
    const style = document.createElement('style');
    style.textContent = additionalCSS;
    document.head.appendChild(style);
    
    // Initialize widget when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            new DevNexusAIChat();
        });
    } else {
        new DevNexusAIChat();
    }
})(); 