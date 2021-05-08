//* Dark mode
function darkMode() {
  const element = document.body;
  element.classList.toggle('dark-mode');
}

//* Footer
document.getElementById('year').innerHTML = new Date().getFullYear();

//* AOS
AOS.init();

//* GSAP 3
gsap.from('.hero_text p, .btn', {
  duration: 2,
  x: -200,
  opacity: 0,
  ease: 'bounce',
});

gsap.from('.hero_img', { duration: 2, x: 200, opacity: 0, ease: 'bounce' });
