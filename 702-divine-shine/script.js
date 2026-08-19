const observed = document.querySelectorAll('.manifesto-grid, .service-row, .craft-copy > *, .booking > *');
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  observed.forEach((el) => { el.style.opacity = '0'; el.style.transform = 'translateY(24px)'; el.style.transition = 'opacity .65s ease, transform .65s ease'; });
  const io = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.style.opacity = '1'; entry.target.style.transform = 'none'; io.unobserve(entry.target); }
  }), { threshold: .12 });
  observed.forEach((el) => io.observe(el));
}
