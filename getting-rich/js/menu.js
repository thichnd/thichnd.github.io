class ThanhMenu extends HTMLElement {
    connectedCallback() {
        // 1. Tự động thêm Style điều hướng ẩn/hiển thị cho Desktop và Mobile
        const style = document.createElement('style');
        style.textContent = `
            .navbar { background-color: #1e293b; position: fixed; top: 0; left: 0; width: 100%; z-index: 1000; box-shadow: 0 4px 6px rgba(0,0,0,0.3); }
            .nav-container { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 15px 20px; }
            .nav-brand { color: #d4af37; font-weight: bold; font-size: 1.4rem; text-decoration: none; }
            .nav-right { display: flex; align-items: center; gap: 25px; }
            .nav-menu { display: flex; list-style: none; gap: 25px; }
            .nav-link { color: #ffffff; text-decoration: none; font-size: 1rem; font-weight: 500; padding-bottom: 4px; border-bottom: 2px solid transparent; }
            .nav-link:hover { color: #fbbf24; }
            .nav-link.active { color: #d4af37 !important; font-weight: bold; border-bottom: 2px solid #d4af37; }
            
            /* Mặc định ẩn hộp thả xuống trên màn hình Desktop */
            .mobile-select { display: none; background-color: #0f172a; color: #ffffff; border: 1px solid #d4af37; padding: 6px 12px; border-radius: 6px; font-size: 0.9rem; outline: none; width: 140px; cursor: pointer; }
            
            .theme-toggle { background: none; border: 1px solid #d4af37; color: #ffffff; padding: 6px 12px; border-radius: 20px; cursor: pointer; font-size: 0.9rem; display: flex; align-items: center; gap: 6px; }
            .theme-toggle:hover { background-color: rgba(212, 175, 55, 0.2); }

            /* Cấu hình responsive cho màn hình di động (Dưới 680px) */
            @media (max-width: 940px) {
                .nav-brand { font-size: 1.2rem; }
                .nav-menu { display: none !important; } /* Xóa menu chữ ngang ở mobile */
                .mobile-select { display: block !important; } /* Hiện hộp thả xuống ở mobile */
            }
        `;
        document.head.appendChild(style);

        // 2. Nhận diện tên file hiện tại từ URL thanh địa chỉ để tự động Active
        let currentPage = window.location.pathname.split("/").pop() || "index.html";
        if (currentPage === "" || currentPage === "getting-rich") {
            currentPage = "index.html";
        }

        // 3. Khởi tạo cấu trúc giao diện HTML
        this.innerHTML = `
            <nav class="navbar">
                <div class="nav-container">
                    <a href="index.html" class="nav-brand">Tự Do Tài Chính</a>
                    <div class="nav-right">
                        <ul class="nav-menu">
                           
                            <li><a href="cong_thuc_lam_giau.html" class="nav-link ${currentPage === 'cong_thuc_lam_giau.html' ? 'active' : ''}">Công Thức</a></li>
                            <li><a href="quan_ly_tai_chinh.html" class="nav-link ${currentPage === 'quan_ly_tai_chinh.html' ? 'active' : ''}">Quản Lý</a></li>
                            <li><a href="danh_muc_dau_tu.html" class="nav-link ${currentPage === 'danh_muc_dau_tu.html' ? 'active' : ''}">Danh Mục</a></li>
                            <li><a href="phat_trien_ban_than.html" class="nav-link ${currentPage === 'phat_trien_ban_than.html' ? 'active' : ''}">Phát Triển</a></li>
                        </ul>
                        
                        <select class="mobile-select" id="mobileMenu">
                            <option value="index.html" ${currentPage === 'index.html' ? 'selected' : ''}>Trang Chủ</option>
                            <option value="cong_thuc_lam_giau.html" ${currentPage === 'cong_thuc_lam_giau.html' ? 'selected' : ''}>Công Thức</option>
                            <option value="quan_ly_tai_chinh.html" ${currentPage === 'quan_ly_tai_chinh.html' ? 'selected' : ''}>Quản Lý</option>
                            <option value="danh_muc_dau_tu.html" ${currentPage === 'danh_muc_dau_tu.html' ? 'selected' : ''}>Danh Mục</option>
                            <option value="phat_trien_ban_than.html" ${currentPage === 'phat_trien_ban_than.html' ? 'selected' : ''}>Phát Triển</option>
                        </select>
                        
                        <button class="theme-toggle" id="themeBtn">🌙 Tối</button>
                    </div>
                </div>
            </nav>
        `;

        // 4. Bắt sự kiện chuyển trang khi dùng hộp thả xuống ở Điện thoại
        this.querySelector("#mobileMenu").addEventListener("change", function() {
            window.location.href = this.value;
        });

        // 5. Đồng bộ hóa tính năng giao diện Sáng / Tối (Light/Dark Mode)
        const themeBtn = this.querySelector('#themeBtn');
        if (localStorage.getItem('theme') === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
            themeBtn.innerHTML = '☀️ Sáng';
        }
        themeBtn.addEventListener('click', () => {
            if (document.documentElement.getAttribute('data-theme') === 'light') {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'dark');
                themeBtn.innerHTML = '🌙 Tối';
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                themeBtn.innerHTML = '☀️ Sáng';
            }
        });
    }
}

// 6. Đăng ký phần tử tùy chỉnh mới vào hệ thống
customElements.define('thanh-menu', ThanhMenu);
