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

// Contact form → Formspree (submits without leaving the page)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('.form-submit');
    const original = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;
    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        contactForm.innerHTML = '<p style="font-family:\'Bodoni Moda\',Georgia,serif;font-size:22px;line-height:1.4;color:#f5efe3;">Thank you. We will be in touch shortly.</p>';
      } else {
        btn.textContent = 'Something went wrong — try again';
        btn.disabled = false;
      }
    } catch (err) {
      btn.textContent = 'Something went wrong — try again';
      btn.disabled = false;
    }
  });
}
