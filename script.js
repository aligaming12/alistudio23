document.addEventListener('DOMContentLoaded', function() {
  // Cập nhật năm hiện tại
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Header scroll effect
  const header = document.getElementById('header');
  
  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
  }
  
  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  for (let anchor of anchorLinks) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Close mobile menu if open
        if (navMenu && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          menuToggle.classList.remove('active');
        }
        
        // Scroll to target
        window.scrollTo({
          top: targetElement.offsetTop - header.offsetHeight,
          behavior: 'smooth'
        });
      }
    });
  }
  
  // Add animation classes on scroll
  const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .contact-form-container, .contact-info');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
  
  // Form submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Giả lập gửi form - trong thực tế sẽ gửi đến backend
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');
      
      if (nameInput.value && emailInput.value && messageInput.value) {
        alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
        contactForm.reset();
      } else {
        alert('Vui lòng điền đầy đủ thông tin bắt buộc.');
      }
    });
  }
  
  // Newsletter form
  const newsletterForm = document.querySelector('.footer-newsletter');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = this.querySelector('input[type="email"]');
      if (emailInput.value) {
        alert('Cảm ơn bạn đã đăng ký nhận bản tin!');
        emailInput.value = '';
      } else {
        alert('Vui lòng nhập địa chỉ email của bạn.');
      }
    });
  }
  
  // Portfolio item hover effect
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.querySelector('.portfolio-overlay').style.opacity = '1';
    });
    
    item.addEventListener('mouseleave', function() {
      this.querySelector('.portfolio-overlay').style.opacity = '0';
    });
  });

  // Add high-performance animation
  const heroElements = document.querySelectorAll('.hero-text > *');
  
  // Stagger animation for hero elements
  heroElements.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, 200 + (index * 150));
  });
}); 