// Initialize AOS
document.addEventListener('DOMContentLoaded', () => {
  if (window.AOS) AOS.init({ once: true, duration: 650 });

  // Burger toggle
  const burger = document.getElementById('burger');
  const nav = document.getElementById('mainNav');
  if (burger && nav) {
    burger.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // Read More (About page)
  const readMoreBtn = document.getElementById('readMoreBtn');
  if (readMoreBtn) {
    const more = document.querySelector('.more-text');
    readMoreBtn.addEventListener('click', () => {
      const hidden = more.classList.toggle('hidden');
      readMoreBtn.textContent = hidden ? 'קראי/ה עוד' : 'הסתר';
    });
  }

  // tiny-slider (Home)
  if (document.getElementById('homeSlider') && window.tns) {
    tns({
      container: '#homeSlider',
      items: 1,
      slideBy: 'page',
      autoplay: true,
      controls: false,
      nav: true,
      autoplayButtonOutput: false,
      mouseDrag: true,
      speed: 500
    });
  }

  // GLightbox (Media gallery)
  if (window.GLightbox) {
    GLightbox({ selector: '.glightbox', touchNavigation: true, loop: true });
  }

  // FAQ accordion
  document.querySelectorAll('.acc-item').forEach(item => {
    const btn = item.querySelector('.acc-question');
    btn?.addEventListener('click', () => item.classList.toggle('open'));
  });

  // Contact form validation + redirect
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      let ok = true;
      const emailErr = form.querySelector('#email + .error');
      const nameErr = form.querySelector('#name + .error');
      const msgErr  = form.querySelector('#message + .error');

      [emailErr, nameErr, msgErr].forEach(el => el && (el.textContent = ''));

      if (!name) { ok = false; nameErr.textContent = 'חובה למלא שם.'; }
      if (!email) { ok = false; emailErr.textContent = 'חובה למלא אימייל.'; }
      if (email && (!email.includes('@') || !email.includes('.'))) {
        ok = false; emailErr.textContent = 'האימייל חייב להכיל @ וגם נקודה.';
      }
      if (!message) { ok = false; msgErr.textContent = 'נא להזין הודעה.'; }

      if (ok) window.location.href = 'thankyou.html';
    });
  }
});
