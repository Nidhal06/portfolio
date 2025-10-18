/* MENU NAVBAR */
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  });
}

/* NAVIGATION INTERNE + SCROLL SMOOTH */
const navLinks = document.querySelectorAll('header nav a');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }

    if (window.innerWidth <= 768 && navbar.classList.contains('active')) {
      navbar.classList.remove('active');
      menuIcon.classList.add('fa-bars');
      menuIcon.classList.remove('fa-times');
    }
  });
});

/* CLOSE THE MENU BY CLICKING OUTSIDE */
document.addEventListener('click', e => {
  if (
    navbar.classList.contains('active') &&
    !navbar.contains(e.target) &&
    !menuIcon.contains(e.target) &&
    window.innerWidth <= 768
  ) {
    navbar.classList.remove('active');
    menuIcon.classList.add('fa-bars');
    menuIcon.classList.remove('fa-times');
  }
});

/* SCROLL : SECTIONS, NAVBAR STICKY, ACTIVE LINK */
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  const fromTop = window.scrollY + 150;
  const header = document.querySelector('.header');

  sections.forEach(section => {
    const top = section.offsetTop - 150;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (fromTop >= top && fromTop < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) link.classList.add('active');
      });
    }
  });

  if (header) header.classList.toggle('sticky', window.scrollY > 100);

  if (window.scrollY > 100 && navbar.classList.contains('active')) {
    navbar.classList.remove('active');
    menuIcon.classList.add('fa-bars');
    menuIcon.classList.remove('fa-times');
  }

  const footerBtn = document.querySelector('.footer-iconTop');
  if (footerBtn) footerBtn.classList.toggle('visible', window.scrollY > 200);
});

/* SCROLL REVEAL ANIMATIONS */
function initScrollReveal() {
  if (typeof ScrollReveal === 'undefined') return;

  const sr = ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
    reset: false
  });

  sr.reveal('.home-content, .heading', { origin: 'top' });
  sr.reveal('.home-img, .services-container, .projects-box, .contact form', { origin: 'bottom' });
  sr.reveal('.home-content h1, .about-img', { origin: 'left' });
  sr.reveal('.home-content p, .about-content', { origin: 'right' });
}

/* TYPED.JS ANIMATED TEXT */
function initTypedJS() {
  if (typeof Typed === 'undefined') return;

  const element = document.querySelector('.multiple-text');
  if (!element) return;

  new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer', 'WordPress Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
}

/* ANIMATING SKILL BARS */
function initSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  
  skillBars.forEach(bar => {
    const targetWidth = bar.getAttribute('data-width');
    bar.style.width = targetWidth + '%';
    bar.style.backgroundColor = '#0ef'; 
  });
}

/* GLOBAL INITIALIZATION TO DOMCONTENTLOADED */
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    initScrollReveal();
    initTypedJS();
    initSkillBars();
  }, 100);
});

/* READJUSTMENT ON RESIZING */
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && navbar.classList.contains('active')) {
    navbar.classList.remove('active');
    menuIcon.classList.add('fa-bars');
    menuIcon.classList.remove('fa-times');
  }
});

/**DEBUG**/
console.log('✅ JavaScript loaded successfully!');
