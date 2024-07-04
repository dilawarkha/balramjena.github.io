// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      gsap.to(window, {
        duration: 0.8,
        scrollTo: {
          y: target.offsetTop,
          autoKill: true
        }
      });
    });
  });
  
  // Navbar toggle for mobile
  const navbarToggle = document.getElementById('js-navbar-toggle');
  const mainNav = document.querySelector('.nav-links');
  
  navbarToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
  });
  
  // GSAP animations
  gsap.from('.navbar', { duration: 1, y: '-100%', ease: 'power4.out' });
  gsap.from('.section', { duration: 1, opacity: 0, y: 50, stagger: 0.4 });
  
  