// Fondo animado
const container = document.getElementById('background-elements');
const colors = ['#bb33ff', '#5f27cd', '#8e44ad', '#9b59b6', '#6c3483'];
const circlesCount = 10;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createCircle() {
  const circle = document.createElement('div');
  const size = random(50, 150);
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.borderRadius = '50%';
  circle.style.position = 'absolute';
  circle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  circle.style.opacity = '0.15';
  circle.style.top = `${random(0, 100)}%`;
  circle.style.left = `${random(0, 100)}%`;
  circle.style.transform = `translate(-50%, -50%)`;
  circle.style.pointerEvents = 'none';
  circle.style.transition = 'transform 10s ease-in-out';
  container.appendChild(circle);

  let directionX = Math.random() < 0.5 ? -1 : 1;
  let directionY = Math.random() < 0.5 ? -1 : 1;

  function animate() {
    const moveX = directionX * random(10, 30);
    const moveY = directionY * random(10, 30);
    circle.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
    directionX *= -1;
    directionY *= -1;
    setTimeout(animate, 10000);
  }

  animate();
}

for (let i = 0; i < circlesCount; i++) {
  createCircle();
}

// Intersection animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.slide-section').forEach(section => observer.observe(section));

// Mobile nav toggle
const toggleBtn = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

toggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Animación al cargar la página
window.addEventListener('load', () => {
  document.body.classList.add('page-loaded');
});

// Espera a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    // Al hacer clic en el botón hamburguesa, alterna mostrar/ocultar menú
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Al hacer clic en cualquier enlace del menú, oculta el menú
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
});
