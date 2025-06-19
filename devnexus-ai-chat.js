// DevNexus AI Chat Widget JavaScript
class DevNexusAIChat {
    constructor() {
        this.apiKey = 'AIzaSyAoShtpJkpusAFKkK3Qgy_oZh9RNoHRP-g';
        this.apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
        this.selectedText = '';
        this.currentPageContent = '';
        this.isMinimized = false;
        this.conversationHistory = [];
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.extractPageContent();
        this.loadChatHistory();
        console.log('DevNexus AI Chat initialized!');
    }

    setupEventListeners() {
        // Chat toggle
        const chatToggle = document.getElementById('chat-toggle');
        
        chatToggle.addEventListener('click', () => {
            this.toggleChat();
        });

        // Minimize button
        const minimizeBtn = document.getElementById('minimize-chat');
        minimizeBtn.addEventListener('click', () => {
            this.toggleChat();
        });

        // Clear chat button
        const clearBtn = document.getElementById('clear-chat');
        clearBtn.addEventListener('click', () => {
            this.clearChat();
        });

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
        const quickBtns = document.querySelectorAll('.quick-btn');
        quickBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.handleQuickAction(btn.dataset.action);
            });
        });

        // Suggestion buttons
        const suggestionBtns = document.querySelectorAll('.suggestion-btn');
        suggestionBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                chatInput.value = btn.dataset.text;
                this.autoResizeTextarea(chatInput);
                chatInput.focus();
            });
        });

        // Text selection on page
        document.addEventListener('mouseup', () => {
            setTimeout(() => {
                this.handleTextSelection();
            }, 100);
        });

        // Clear selection
        const clearSelection = document.getElementById('clear-selection');
        clearSelection.addEventListener('click', () => {
            this.clearSelection();
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
            // Focus on input when opening
            setTimeout(() => {
                document.getElementById('chat-input').focus();
            }, 100);
        }
    }

    clearChat() {
        if (confirm('ต้องการล้างบทสนทนาทั้งหมดหรือไม่?')) {
            const messagesContainer = document.getElementById('chat-messages');
            messagesContainer.innerHTML = `
                <div class="message ai-message">
                    <div class="message-avatar">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="message-content">
                        <div class="message-text">
                            สวัสดีครับ! ผม DevNexus AI ผู้ช่วยเรียนภาษาญี่ปุ่น 🤖
                            <br><br>
                            <strong>วิธีใช้:</strong>
                            <ul>
                                <li>🔍 เลือกข้อความในหน้าเว็บแล้วกด "อธิบายข้อความที่เลือก"</li>
                                <li>💬 ถามคำถามเกี่ยวกับภาษาญี่ปุ่นได้เลย</li>
                                <li>📚 ขอตัวอย่างประโยค โครงสร้าง หรือไวยากรณ์</li>
                            </ul>
                        </div>
                        <div class="message-time">เมื่อสักครู่</div>
                    </div>
                </div>
            `;
            
            this.conversationHistory = [];
            this.saveChatHistory();
        }
    }

    extractPageContent() {
        // Extract meaningful content from the current page
        const title = document.title;
        const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4')).map(h => h.textContent).join(' ');
        const japaneseText = Array.from(document.querySelectorAll('.japanese-text, .vocab-item, .grammar-point')).map(el => el.textContent).join(' ');
        
        this.currentPageContent = `Page: ${title}\nHeadings: ${headings}\nJapanese Content: ${japaneseText}`.substring(0, 1000);
    }

    handleTextSelection() {
        const selection = window.getSelection();
        const selectedText = selection.toString().trim();
        
        if (selectedText && selectedText.length > 0) {
            this.selectedText = selectedText;
            this.showSelectedText(selectedText);
        }
    }

    showSelectedText(text) {
        const display = document.getElementById('selected-text-display');
        const content = document.getElementById('selected-text-content');
        
        content.textContent = text;
        display.style.display = 'block';
    }

    clearSelection() {
        const display = document.getElementById('selected-text-display');
        display.style.display = 'none';
        this.selectedText = '';
        
        // Clear browser selection
        if (window.getSelection) {
            window.getSelection().removeAllRanges();
        }
    }

    handleQuickAction(action) {
        const chatInput = document.getElementById('chat-input');
        
        switch (action) {
            case 'explain-selection':
                if (this.selectedText) {
                    chatInput.value = `อธิบายข้อความนี้หน่อย: "${this.selectedText}"`;
                } else {
                    chatInput.value = 'กรุณาเลือกข้อความในหน้าเว็บก่อนครับ';
                }
                break;
            case 'grammar-check':
                chatInput.value = 'ช่วยอธิบายไวยากรณ์ที่เกี่ยวข้องกับเนื้อหาในหน้านี้หน่อย';
                break;
            case 'conversation':
                chatInput.value = 'สร้างตัวอย่างบทสนทนาจากคำศัพท์ในหน้านี้หน่อย';
                break;
        }
        
        this.autoResizeTextarea(chatInput);
        chatInput.focus();
    }

    async sendMessage() {
        const chatInput = document.getElementById('chat-input');
        const message = chatInput.value.trim();
        
        if (!message) return;
        
        // Add user message
        this.addMessage(message, 'user');
        chatInput.value = '';
        this.autoResizeTextarea(chatInput);
        
        // Show typing indicator
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
        // Prepare context
        let context = `คุณคือ DevNexus AI ผู้ช่วยเรียนภาษาญี่ปุ่น กรุณาตอบเฉพาะคำถามเกี่ยวกับภาษาญี่ปุ่นเท่านั้น ใช้ภาษาไทยในการตอบ

หน้าเว็บปัจจุบัน: ${this.currentPageContent}`;

        if (this.selectedText) {
            context += `\n\nข้อความที่ผู้ใช้เลือก: "${this.selectedText}"`;
        }

        context += `\n\nกรุณาตอบในรูปแบบที่ช่วยการเรียนรู้ เช่น:
- ใช้ HTML tags สำหรับจัดรูปแบบ
- แสดงข้อความภาษาญี่ปุ่นในแท็ก <div class="japanese-text">
- แสดงโครงสร้างไวยากรณ์ในแท็ก <div class="grammar-structure">
- แสดงตัวอย่างประโยคในแท็ก <div class="example-sentence">
- ใช้สีและการจัดรูปแบบให้น่าสนใจ`;

        const requestBody = {
            contents: [
                {
                    parts: [
                        {
                            text: `${context}\n\nคำถาม: ${userMessage}`
                        }
                    ]
                }
            ],
            generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 1024,
            }
        };

        const response = await fetch(`${this.apiUrl}?key=${this.apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.candidates && data.candidates[0] && data.candidates[0].content) {
            return data.candidates[0].content.parts[0].text;
        } else {
            throw new Error('Invalid API response');
        }
    }

    addMessage(text, sender) {
        const messagesContainer = document.getElementById('chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const avatar = sender === 'ai' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
        const time = new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });
        
        messageDiv.innerHTML = `
            <div class="message-avatar">
                ${avatar}
            </div>
            <div class="message-content">
                <div class="message-text">${sender === 'ai' ? text : this.escapeHtml(text)}</div>
                <div class="message-time">${time}</div>
            </div>
        `;
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        // Save to conversation history
        this.conversationHistory.push({ text, sender, time });
        this.saveChatHistory();
        
        // Clear selection after AI response
        if (sender === 'ai' && this.selectedText) {
            setTimeout(() => {
                this.clearSelection();
            }, 2000);
        }
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('chat-messages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message ai-message typing-message';
        typingDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <div class="message-text">
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

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    saveChatHistory() {
        try {
            localStorage.setItem('devnexus-chat-history', JSON.stringify(this.conversationHistory));
        } catch (error) {
            console.error('Error saving chat history:', error);
        }
    }

    loadChatHistory() {
        try {
            const saved = localStorage.getItem('devnexus-chat-history');
            if (saved) {
                this.conversationHistory = JSON.parse(saved);
            }
        } catch (error) {
            console.error('Error loading chat history:', error);
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.devnexusAI = new DevNexusAIChat();
});

// Re-extract content when page changes (for SPAs)
window.addEventListener('popstate', () => {
    if (window.devnexusAI) {
        window.devnexusAI.extractPageContent();
    }
});

// Listen for dynamic content changes
const observer = new MutationObserver(() => {
    if (window.devnexusAI) {
        setTimeout(() => {
            window.devnexusAI.extractPageContent();
        }, 500);
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
}); 