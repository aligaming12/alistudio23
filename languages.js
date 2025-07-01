// Định nghĩa các chuỗi ngôn ngữ
const languages = {
    vi: {
        nav_home: "Trang chủ",
        nav_services: "Dịch vụ",
        nav_portfolio: "Dự án",
        nav_contact: "Liên hệ",
        nav_facebook: "Facebook",
        nav_youtube: "YouTube",
        nav_tiktok: "TikTok",
        
        hero_welcome: "Chào mừng đến với",
        hero_creative: "Thiết Kế Sáng Tạo",
        hero_description: "Chúng tôi tạo ra các thiết kế hiện đại, ấn tượng giúp doanh nghiệp nổi bật trong thế giới số.",
        hero_contact: "Liên hệ ngay",
        hero_portfolio: "Du Lịch Huế"
    },
    en: {
        nav_home: "Home",
        nav_services: "Services",
        nav_portfolio: "Portfolio",
        nav_contact: "Contact",
        nav_facebook: "Facebook",
        nav_youtube: "YouTube",
        nav_tiktok: "TikTok",
        
        hero_welcome: "Welcome to",
        hero_creative: "Creative Design",
        hero_description: "We create modern, impactful designs that help businesses stand out in the digital landscape.",
        hero_contact: "Get in touch",
        hero_portfolio: "Hue Tourism"
    }
};

// Lấy ngôn ngữ từ local storage hoặc sử dụng tiếng Việt mặc định
let currentLanguage = localStorage.getItem('language') || 'vi';

// Hàm cập nhật nội dung theo ngôn ngữ
function updateLanguage(lang) {
    // Cập nhật trạng thái active cho nút ngôn ngữ
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.classList.remove('active');
        if (button.dataset.lang === lang) {
            button.classList.add('active');
        }
    });

    // Cập nhật tất cả các phần tử có thuộc tính data-lang-key
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (languages[lang] && languages[lang][key]) {
            // Nếu phần tử là input hoặc textarea
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = languages[lang][key];
            } 
            // Nếu là thẻ khác
            else {
                // Nếu là liên kết mạng xã hội, chỉ cập nhật nội dung của span
                if (element.classList.contains('social-link')) {
                    const spanElement = element.querySelector('span');
                    if (spanElement) {
                        spanElement.textContent = languages[lang][key];
                    }
                } else {
                    element.textContent = languages[lang][key];
                }
            }
        }
    });

    // Cập nhật tiêu đề trang
    document.title = lang === 'vi' ? 'Ali Studio - Thiết Kế Sáng Tạo' : 'Ali Studio - Creative Design Studio';
    
    // Lưu lựa chọn ngôn ngữ vào local storage
    localStorage.setItem('language', lang);
    currentLanguage = lang;
    
    // Cập nhật thuộc tính lang của thẻ html
    document.documentElement.lang = lang;
}

// Đăng ký sự kiện cho nút chuyển đổi ngôn ngữ
document.addEventListener('DOMContentLoaded', function() {
    // Cập nhật ngôn ngữ ban đầu
    updateLanguage(currentLanguage);
    
    // Đăng ký sự kiện click cho các nút ngôn ngữ
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });
}); 