const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');

toggle?.addEventListener('click', () => {
  const open = header.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});

document.querySelectorAll('.site-header nav a').forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});
