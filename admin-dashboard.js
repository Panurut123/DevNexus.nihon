class AdminDashboard {
    constructor() {
        // รหัสผ่านแอดมิน (ควรเปลี่ยนเป็นรหัสที่ซับซ้อนกว่านี้)
        this.adminPassword = 'devnexus2024';
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.filteredData = [];
        this.allVisitors = [];
        
        this.init();
    }

    async init() {
        this.setupEventListeners();
        await this.loadVisitorData();
        
        // ตรวจสอบว่า login แล้วหรือไม่
        if (!this.checkAuthStatus()) {
            this.showLoginModal();
        }
    }

    setupEventListeners() {
        // Login form
        document.getElementById('login-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });

        // Navigation buttons
        document.getElementById('refresh-btn').addEventListener('click', () => {
            this.refreshData();
        });

        document.getElementById('export-btn').addEventListener('click', () => {
            this.exportData();
        });

        document.getElementById('logout-btn').addEventListener('click', () => {
            this.logout();
        });

        // Table controls
        document.getElementById('search-input').addEventListener('input', (e) => {
            this.filterData();
        });

        document.getElementById('filter-select').addEventListener('change', () => {
            this.filterData();
        });

        // Pagination
        document.getElementById('prev-page').addEventListener('click', () => {
            this.previousPage();
        });

        document.getElementById('next-page').addEventListener('click', () => {
            this.nextPage();
        });

        // Detail modal
        document.getElementById('close-detail').addEventListener('click', () => {
            this.closeDetailModal();
        });

        // Close modal on outside click
        window.addEventListener('click', (event) => {
            const loginModal = document.getElementById('login-modal');
            const detailModal = document.getElementById('detail-modal');
            
            if (event.target === loginModal) {
                // ไม่ให้ปิด login modal
            }
            if (event.target === detailModal) {
                this.closeDetailModal();
            }
        });
    }

    handleLogin() {
        const password = document.getElementById('admin-password').value;
        const errorElement = document.getElementById('login-error');

        if (password === this.adminPassword) {
            this.setAuthStatus(true);
            this.hideLoginModal();
            this.showDashboard();
            errorElement.textContent = '';
        } else {
            errorElement.textContent = 'รหัสผ่านไม่ถูกต้อง';
            document.getElementById('admin-password').value = '';
        }
    }

    checkAuthStatus() {
        const authStatus = sessionStorage.getItem('admin_auth');
        const authTime = sessionStorage.getItem('admin_auth_time');
        
        if (authStatus === 'true' && authTime) {
            const authDate = new Date(authTime);
            const now = new Date();
            const hoursDiff = (now - authDate) / (1000 * 60 * 60);
            
            // Session หมดอายุใน 2 ชั่วโมง
            if (hoursDiff < 2) {
                this.showDashboard();
                return true;
            } else {
                this.clearAuthStatus();
                return false;
            }
        }
        return false;
    }

    setAuthStatus(status) {
        sessionStorage.setItem('admin_auth', status.toString());
        sessionStorage.setItem('admin_auth_time', new Date().toISOString());
    }

    clearAuthStatus() {
        sessionStorage.removeItem('admin_auth');
        sessionStorage.removeItem('admin_auth_time');
    }

    showLoginModal() {
        document.getElementById('login-modal').style.display = 'flex';
        document.getElementById('dashboard').style.display = 'none';
    }

    hideLoginModal() {
        document.getElementById('login-modal').style.display = 'none';
    }

    showDashboard() {
        document.getElementById('login-modal').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        this.updateDashboard();
    }

    logout() {
        this.clearAuthStatus();
        this.showLoginModal();
    }

    async loadVisitorData() {
        try {
            // พยายามโหลดจาก Firebase ก่อน
            if (window.firebaseDb) {
                const snapshot = await window.firebaseDb.collection('visitors')
                    .orderBy('timestamp', 'desc')
                    .limit(1000)
                    .get();
                
                this.allVisitors = [];
                snapshot.forEach(doc => {
                    this.allVisitors.push({
                        id: doc.id,
                        ...doc.data()
                    });
                });
                
                console.log(`โหลดข้อมูลจาก Firebase: ${this.allVisitors.length} รายการ`);
            } else {
                throw new Error('Firebase not available');
            }
        } catch (error) {
            console.warn('ไม่สามารถโหลดจาก Firebase ได้, ใช้ localStorage แทน:', error);
            
            // Fallback to localStorage
            this.allVisitors = JSON.parse(localStorage.getItem('website_visitors') || '[]');
        }
        
        this.filteredData = [...this.allVisitors];
    }

    async refreshData() {
        await this.loadVisitorData();
        this.updateDashboard();
        
        // แสดง animation refresh
        const refreshBtn = document.getElementById('refresh-btn');
        const icon = refreshBtn.querySelector('i');
        icon.style.animation = 'spin 1s linear';
        setTimeout(() => {
            icon.style.animation = '';
        }, 1000);
    }

    updateDashboard() {
        this.updateSummaryCards();
        this.updateChartsSection();
        this.updateTopCountries();
        this.filterData();
    }

    updateSummaryCards() {
        const totalVisitors = this.allVisitors.length;
        const todayVisitors = this.getTodayVisitors();
        const uniqueCountries = this.getUniqueCountries();
        const mobilePercentage = this.getMobilePercentage();

        document.getElementById('total-visitors').textContent = totalVisitors.toLocaleString();
        document.getElementById('today-visitors').textContent = todayVisitors;
        document.getElementById('unique-countries').textContent = uniqueCountries;
        document.getElementById('mobile-percentage').textContent = mobilePercentage + '%';
    }

    getTodayVisitors() {
        const today = new Date().toDateString();
        return this.allVisitors.filter(visitor => {
            const visitDate = new Date(visitor.timestamp).toDateString();
            return visitDate === today;
        }).length;
    }

    getUniqueCountries() {
        const countries = new Set();
        this.allVisitors.forEach(visitor => {
            if (visitor.country && visitor.country !== 'ไม่สามารถระบุได้') {
                countries.add(visitor.country);
            }
        });
        return countries.size;
    }

    getMobilePercentage() {
        if (this.allVisitors.length === 0) return 0;
        
        const mobileCount = this.allVisitors.filter(visitor => {
            return visitor.deviceInfo && visitor.deviceInfo.includes('Mobile');
        }).length;
        
        return Math.round((mobileCount / this.allVisitors.length) * 100);
    }

    updateChartsSection() {
        this.createVisitsChart();
        this.createDevicesChart();
    }

    createVisitsChart() {
        const canvas = document.getElementById('visits-canvas');
        const ctx = canvas.getContext('2d');
        
        // ข้อมูล 7 วันล่าสุด
        const last7Days = this.getLast7DaysData();
        
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Set canvas size
        canvas.width = canvas.offsetWidth;
        canvas.height = 300;
        
        this.drawLineChart(ctx, last7Days, canvas.width, canvas.height);
    }

    getLast7DaysData() {
        const data = [];
        const today = new Date();
        
        for (let i = 6; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            const dateStr = date.toDateString();
            
            const count = this.allVisitors.filter(visitor => {
                const visitDate = new Date(visitor.timestamp).toDateString();
                return visitDate === dateStr;
            }).length;
            
            data.push({
                label: date.getDate() + '/' + (date.getMonth() + 1),
                value: count
            });
        }
        
        return data;
    }

    drawLineChart(ctx, data, width, height) {
        const padding = 40;
        const chartWidth = width - (padding * 2);
        const chartHeight = height - (padding * 2);
        
        // Find max value
        const maxValue = Math.max(...data.map(d => d.value), 1);
        
        // Draw axes
        ctx.strokeStyle = '#e9ecef';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, height - padding);
        ctx.lineTo(width - padding, height - padding);
        ctx.stroke();
        
        // Draw data points and lines
        ctx.strokeStyle = '#667eea';
        ctx.fillStyle = '#667eea';
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        data.forEach((point, index) => {
            const x = padding + (index * (chartWidth / (data.length - 1)));
            const y = height - padding - ((point.value / maxValue) * chartHeight);
            
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
            
            // Draw point
            ctx.fillRect(x - 3, y - 3, 6, 6);
            
            // Draw label
            ctx.fillStyle = '#666';
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(point.label, x, height - 10);
            ctx.fillText(point.value.toString(), x, y - 10);
            ctx.fillStyle = '#667eea';
        });
        
        ctx.stroke();
    }

    createDevicesChart() {
        const canvas = document.getElementById('devices-canvas');
        const ctx = canvas.getContext('2d');
        
        const deviceData = this.getDeviceData();
        
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Set canvas size
        canvas.width = canvas.offsetWidth;
        canvas.height = 300;
        
        this.drawPieChart(ctx, deviceData, canvas.width, canvas.height);
    }

    getDeviceData() {
        const devices = {};
        
        this.allVisitors.forEach(visitor => {
            let deviceType = 'Desktop';
            if (visitor.deviceInfo) {
                if (visitor.deviceInfo.includes('Mobile')) {
                    deviceType = 'Mobile';
                } else if (visitor.deviceInfo.includes('Tablet')) {
                    deviceType = 'Tablet';
                }
            }
            devices[deviceType] = (devices[deviceType] || 0) + 1;
        });
        
        return Object.entries(devices).map(([name, count]) => ({
            name,
            count,
            percentage: Math.round((count / this.allVisitors.length) * 100) || 0
        }));
    }

    drawPieChart(ctx, data, width, height) {
        if (data.length === 0) return;
        
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) / 3;
        
        const colors = ['#667eea', '#764ba2', '#20c997', '#fd7e14', '#dc3545'];
        let currentAngle = -Math.PI / 2;
        
        data.forEach((segment, index) => {
            const sliceAngle = (segment.count / this.allVisitors.length) * 2 * Math.PI;
            
            // Draw slice
            ctx.fillStyle = colors[index % colors.length];
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
            ctx.closePath();
            ctx.fill();
            
            // Draw label
            const labelAngle = currentAngle + sliceAngle / 2;
            const labelX = centerX + Math.cos(labelAngle) * (radius + 30);
            const labelY = centerY + Math.sin(labelAngle) * (radius + 30);
            
            ctx.fillStyle = '#333';
            ctx.font = '14px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(`${segment.name}`, labelX, labelY);
            ctx.fillText(`${segment.percentage}%`, labelX, labelY + 15);
            
            currentAngle += sliceAngle;
        });
    }

    updateTopCountries() {
        const countriesData = this.getCountriesData();
        const countriesList = document.getElementById('countries-list');
        
        countriesList.innerHTML = '';
        
        if (countriesData.length === 0) {
            countriesList.innerHTML = '<div class="country-item"><span class="country-name">ยังไม่มีข้อมูล</span></div>';
            return;
        }
        
        countriesData.slice(0, 5).forEach(country => {
            const countryItem = document.createElement('div');
            countryItem.className = 'country-item';
            countryItem.innerHTML = `
                <span class="country-name">${country.name}</span>
                <span class="country-count">${country.count}</span>
            `;
            countriesList.appendChild(countryItem);
        });
    }

    getCountriesData() {
        const countries = {};
        
        this.allVisitors.forEach(visitor => {
            if (visitor.country && visitor.country !== 'ไม่สามารถระบุได้') {
                countries[visitor.country] = (countries[visitor.country] || 0) + 1;
            }
        });
        
        return Object.entries(countries)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count);
    }

    filterData() {
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        const filterType = document.getElementById('filter-select').value;
        
        let filtered = [...this.allVisitors];
        
        // Apply time filter
        if (filterType !== 'all') {
            const now = new Date();
            filtered = filtered.filter(visitor => {
                const visitDate = new Date(visitor.timestamp);
                
                switch (filterType) {
                    case 'today':
                        return visitDate.toDateString() === now.toDateString();
                    case 'week':
                        const weekAgo = new Date(now.getTime() - (7 * 24 * 60 * 60 * 1000));
                        return visitDate >= weekAgo;
                    case 'month':
                        const monthAgo = new Date(now.getTime() - (30 * 24 * 60 * 60 * 1000));
                        return visitDate >= monthAgo;
                    default:
                        return true;
                }
            });
        }
        
        // Apply search filter
        if (searchTerm) {
            filtered = filtered.filter(visitor => {
                return (
                    (visitor.country || '').toLowerCase().includes(searchTerm) ||
                    (visitor.deviceInfo || '').toLowerCase().includes(searchTerm) ||
                    (visitor.referrer || '').toLowerCase().includes(searchTerm) ||
                    (visitor.ipAddress || '').toLowerCase().includes(searchTerm)
                );
            });
        }
        
        this.filteredData = filtered;
        this.currentPage = 1;
        this.updateTable();
        this.updatePagination();
    }

    updateTable() {
        const tbody = document.getElementById('visitors-tbody');
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const pageData = this.filteredData.slice(startIndex, endIndex);
        
        tbody.innerHTML = '';
        
        if (pageData.length === 0) {
            tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 40px;">ไม่มีข้อมูลผู้เข้าชม</td></tr>';
            return;
        }
        
        pageData.forEach(visitor => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${new Date(visitor.timestamp).toLocaleString('th-TH')}</td>
                <td>${visitor.country || 'ไม่ทราบ'}</td>
                <td>${this.truncateText(visitor.deviceInfo || 'ไม่ทราบ', 30)}</td>
                <td>${this.truncateText(visitor.referrer === 'Direct (ไม่มีเว็บอ้างอิง)' ? 'เข้าโดยตรง' : visitor.referrer, 40)}</td>
                <td>${visitor.visitCount || 1}</td>
                <td>${visitor.ipAddress || 'ไม่ทราบ'}</td>
                <td><button class="detail-btn" onclick="adminDashboard.showVisitorDetail('${visitor.id}')">ดูรายละเอียด</button></td>
            `;
            tbody.appendChild(row);
        });
    }

    truncateText(text, maxLength) {
        if (!text || text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    }

    updatePagination() {
        const totalPages = Math.ceil(this.filteredData.length / this.itemsPerPage);
        
        document.getElementById('prev-page').disabled = this.currentPage === 1;
        document.getElementById('next-page').disabled = this.currentPage === totalPages || totalPages === 0;
        document.getElementById('page-info').textContent = `หน้า ${this.currentPage} จาก ${totalPages || 1}`;
    }

    previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.updateTable();
            this.updatePagination();
        }
    }

    nextPage() {
        const totalPages = Math.ceil(this.filteredData.length / this.itemsPerPage);
        if (this.currentPage < totalPages) {
            this.currentPage++;
            this.updateTable();
            this.updatePagination();
        }
    }

    showVisitorDetail(visitorId) {
        const visitor = this.allVisitors.find(v => v.id == visitorId);
        if (!visitor) return;
        
        const detailsContainer = document.getElementById('visitor-details');
        detailsContainer.innerHTML = `
            <div class="detail-group">
                <h4>ข้อมูลทั่วไป</h4>
                <div class="detail-item">
                    <span class="detail-label">เวลาเข้าชม:</span>
                    <span class="detail-value">${new Date(visitor.timestamp).toLocaleString('th-TH')}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">ครั้งที่เข้าชม:</span>
                    <span class="detail-value">${visitor.visitCount || 1}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Visitor ID:</span>
                    <span class="detail-value">${visitor.visitorId || 'ไม่ทราบ'}</span>
                </div>
            </div>
            
            <div class="detail-group">
                <h4>ตำแหน่งที่ตั้ง</h4>
                <div class="detail-item">
                    <span class="detail-label">ประเทศ:</span>
                    <span class="detail-value">${visitor.country || 'ไม่ทราบ'}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">เมือง:</span>
                    <span class="detail-value">${visitor.city || 'ไม่ทราบ'}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">ภูมิภาค:</span>
                    <span class="detail-value">${visitor.region || 'ไม่ทราบ'}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">IP Address:</span>
                    <span class="detail-value">${visitor.ipAddress || 'ไม่ทราบ'}</span>
                </div>
            </div>
            
            <div class="detail-group">
                <h4>อุปกรณ์และเบราว์เซอร์</h4>
                <div class="detail-item">
                    <span class="detail-label">อุปกรณ์:</span>
                    <span class="detail-value">${visitor.deviceInfo || 'ไม่ทราบ'}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">ขนาดหน้าจอ:</span>
                    <span class="detail-value">${visitor.screenResolution || 'ไม่ทราบ'}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">ภาษา:</span>
                    <span class="detail-value">${visitor.language || 'ไม่ทราบ'}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">User Agent:</span>
                    <span class="detail-value" style="max-width: 100%; word-break: break-all;">${visitor.userAgent || 'ไม่ทราบ'}</span>
                </div>
            </div>
            
            <div class="detail-group">
                <h4>การเข้าชม</h4>
                <div class="detail-item">
                    <span class="detail-label">มาจาก:</span>
                    <span class="detail-value">${visitor.referrer === 'Direct (ไม่มีเว็บอ้างอิง)' ? 'เข้าโดยตรง' : visitor.referrer || 'ไม่ทราบ'}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">URL ปัจจุบัน:</span>
                    <span class="detail-value" style="max-width: 100%; word-break: break-all;">${visitor.currentUrl || 'ไม่ทราบ'}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">เวลายินยอม:</span>
                    <span class="detail-value">${visitor.consentTime ? new Date(visitor.consentTime).toLocaleString('th-TH') : 'ไม่ทราบ'}</span>
                </div>
            </div>
        `;
        
        document.getElementById('detail-modal').style.display = 'flex';
    }

    closeDetailModal() {
        document.getElementById('detail-modal').style.display = 'none';
    }

    exportData() {
        if (this.allVisitors.length === 0) {
            alert('ไม่มีข้อมูลสำหรับส่งออก');
            return;
        }
        
        // สร้าง CSV
        const headers = [
            'เวลาเข้าชม',
            'ประเทศ',
            'เมือง',
            'ภูมิภาค',
            'IP Address',
            'อุปกรณ์',
            'ขนาดหน้าจอ',
            'ภาษา',
            'เว็บอ้างอิง',
            'URL ปัจจุบัน',
            'ครั้งที่เข้าชม',
            'Visitor ID',
            'เวลายินยอม'
        ];
        
        const csvContent = [
            headers.join(','),
            ...this.allVisitors.map(visitor => [
                `"${new Date(visitor.timestamp).toLocaleString('th-TH')}"`,
                `"${visitor.country || 'ไม่ทราบ'}"`,
                `"${visitor.city || 'ไม่ทราบ'}"`,
                `"${visitor.region || 'ไม่ทราบ'}"`,
                `"${visitor.ipAddress || 'ไม่ทราบ'}"`,
                `"${visitor.deviceInfo || 'ไม่ทราบ'}"`,
                `"${visitor.screenResolution || 'ไม่ทราบ'}"`,
                `"${visitor.language || 'ไม่ทราบ'}"`,
                `"${visitor.referrer || 'ไม่ทราบ'}"`,
                `"${visitor.currentUrl || 'ไม่ทราบ'}"`,
                `"${visitor.visitCount || 1}"`,
                `"${visitor.visitorId || 'ไม่ทราบ'}"`,
                `"${visitor.consentTime ? new Date(visitor.consentTime).toLocaleString('th-TH') : 'ไม่ทราบ'}"`
            ].join(','))
        ].join('\n');
        
        // ดาวน์โหลดไฟล์
        const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `visitor-data-${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// เริ่มต้นระบบแอดมิน
let adminDashboard;
document.addEventListener('DOMContentLoaded', async () => {
    adminDashboard = new AdminDashboard();
}); 