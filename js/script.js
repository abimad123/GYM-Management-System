 // Preloader
    window.addEventListener('load', function() {
      const preloader = document.querySelector('.preloader');
      preloader.classList.add('fade-out');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500);
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      this.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });

    // Sticky Navigation on Scroll
    window.addEventListener('scroll', function() {
      const nav = document.querySelector('nav');
      nav.classList.toggle('scrolled', window.scrollY > 50);
      
      // Back to Top Button
      const backToTop = document.querySelector('.back-to-top');
      backToTop.classList.toggle('active', window.scrollY > 300);
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });

    // Animation on Scroll
    function animateOnScroll() {
      const elements = document.querySelectorAll('.slide-up, .fade-in');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    }
    
    // Run once on load
    animateOnScroll();
    
    // Then run on scroll
    window.addEventListener('scroll', animateOnScroll);