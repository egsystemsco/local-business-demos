const targets = document.querySelectorAll('.intro-grid, .service-stack article, .paver-copy > *, .commercial > div, .area-list span');
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  targets.forEach(el => { el.style.opacity='0'; el.style.transform='translateY(20px)'; el.style.transition='opacity .6s ease, transform .6s ease'; });
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting){ entry.target.style.opacity='1'; entry.target.style.transform='none'; observer.unobserve(entry.target); }}), {threshold:.12});
  targets.forEach(el => observer.observe(el));
}
