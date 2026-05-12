

        /**
         * 1. XỬ LÝ MENU & SIDEBAR
         * Đảm bảo menu hoạt động ngay cả khi HTML thiếu thẻ overlay
         */
        function toggleMenu() {
            const sidebar = document.getElementById('sidebar');
            let overlay = document.getElementById('overlay');

            if (sidebar) {
                sidebar.classList.toggle('active');
                
                // Nếu không tìm thấy overlay trong HTML, tự tạo mới để menu hoạt động
                if (!overlay) {
                    overlay = document.createElement('div');
                    overlay.id = 'overlay';
                    overlay.className = 'overlay'; // Đảm bảo trùng class CSS của bạn
                    overlay.onclick = toggleMenu;
                    document.body.appendChild(overlay);
                }

                const isActive = sidebar.classList.contains('active');
                overlay.style.display = isActive ? 'block' : 'none';
            } else {
                console.error("Lỗi: Không tìm thấy ID 'sidebar'. Hãy kiểm tra lại HTML của slide.");
            }
        }

        /**
         * 2. ĐIỀU CHỈNH FONT SIZE (RESPONSIVE)
         */
        function adjustLayout() {
            const width = window.innerWidth;
            // Kiểm tra cả .project-title và .main-title để tránh lỗi
            const title = document.querySelector('.project-title') || document.querySelector('.main-title');
            
            if (title) {
                title.style.fontSize = width < 1200 ? '2.2rem' : '3.2rem';
            }
        }

        /**
         * 3. ĐỒNG BỘ PHÍM BẤM VỚI TRANG CHỦ
         * Giúp phím mũi tên vẫn hoạt động sau khi bạn click vào slide
         */
        function syncKeys() {
            window.addEventListener('keydown', (e) => {
                window.parent.postMessage({
                    type: 'keydown',
                    key: e.key,
                    keyCode: e.keyCode
                }, '*');
            });
        }

        /**
         * 4. KHỞI CHẠY HỆ THỐNG
         */
        document.addEventListener('DOMContentLoaded', () => {
            adjustLayout();
            syncKeys();

            // Tự động gán sự kiện click cho các nút menu có sẵn
            const btn = document.querySelector('.menu-icon') || document.querySelector('.menu-btn');
            if (btn) {
                btn.onclick = (e) => {
                    e.stopPropagation(); // Ngăn sự kiện nổi bọt
                    toggleMenu();
                };
            }
        });

        window.addEventListener('resize', adjustLayout);
=======

        /**
         * 1. XỬ LÝ MENU & SIDEBAR
         * Đảm bảo menu hoạt động ngay cả khi HTML thiếu thẻ overlay
         */
        function toggleMenu() {
            const sidebar = document.getElementById('sidebar');
            let overlay = document.getElementById('overlay');

            if (sidebar) {
                sidebar.classList.toggle('active');
                
                // Nếu không tìm thấy overlay trong HTML, tự tạo mới để menu hoạt động
                if (!overlay) {
                    overlay = document.createElement('div');
                    overlay.id = 'overlay';
                    overlay.className = 'overlay'; // Đảm bảo trùng class CSS của bạn
                    overlay.onclick = toggleMenu;
                    document.body.appendChild(overlay);
                }

                const isActive = sidebar.classList.contains('active');
                overlay.style.display = isActive ? 'block' : 'none';
            } else {
                console.error("Lỗi: Không tìm thấy ID 'sidebar'. Hãy kiểm tra lại HTML của slide.");
            }
        }

        /**
         * 2. ĐIỀU CHỈNH FONT SIZE (RESPONSIVE)
         */
        function adjustLayout() {
            const width = window.innerWidth;
            // Kiểm tra cả .project-title và .main-title để tránh lỗi
            const title = document.querySelector('.project-title') || document.querySelector('.main-title');
            
            if (title) {
                title.style.fontSize = width < 1200 ? '2.2rem' : '3.2rem';
            }
        }

        /**
         * 3. ĐỒNG BỘ PHÍM BẤM VỚI TRANG CHỦ
         * Giúp phím mũi tên vẫn hoạt động sau khi bạn click vào slide
         */
        function syncKeys() {
            window.addEventListener('keydown', (e) => {
                window.parent.postMessage({
                    type: 'keydown',
                    key: e.key,
                    keyCode: e.keyCode
                }, '*');
            });
        }

        /**
         * 4. KHỞI CHẠY HỆ THỐNG
         */
        document.addEventListener('DOMContentLoaded', () => {
            adjustLayout();
            syncKeys();

            // Tự động gán sự kiện click cho các nút menu có sẵn
            const btn = document.querySelector('.menu-icon') || document.querySelector('.menu-btn');
            if (btn) {
                btn.onclick = (e) => {
                    e.stopPropagation(); // Ngăn sự kiện nổi bọt
                    toggleMenu();
                };
            }
        });

        window.addEventListener('resize', adjustLayout);
>>>>>>> 378f6c0 (first commit)
    
