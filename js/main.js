// Nav scroll state
const nav = document.getElementById('nav');
new IntersectionObserver(e => {
  e[0].isIntersecting
    ? nav.classList.remove('scrolled')
    : nav.classList.add('scrolled');
}, { threshold: 0.05 }).observe(document.querySelector('.hero'));

// Fade-in on scroll
const obs = new IntersectionObserver(e => {
  e.forEach(el => { if (el.isIntersecting) el.target.classList.add('vis'); });
}, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.fade').forEach(s => obs.observe(s));

// Mobile nav toggle
const toggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}
