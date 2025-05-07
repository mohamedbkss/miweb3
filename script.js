// Scroll suave a secciones
document.querySelectorAll('.scroll-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const href = btn.getAttribute('href');
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  });
});

// Modo oscuro
document.getElementById('darkToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
