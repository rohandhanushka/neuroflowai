// app.js - NeuroFlow AI Landing Page Interactivity

document.addEventListener('DOMContentLoaded', () => {
  
  // Navbar Scroll Effect
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(255, 255, 255, 0.98)';
      navbar.style.boxShadow = '0 4px 10px -1px rgba(0, 0, 0, 0.1)';
      navbar.style.transition = 'all 0.3s ease';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.85)';
      navbar.style.boxShadow = 'none';
    }
  });

  // Smooth Scrolling for Navigation Links
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

});