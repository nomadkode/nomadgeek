//* Dark mode
function darkMode() {
  const element = document.body;
  element.classList.toggle('dark-mode');
}

//* Footer
document.getElementById('year').innerHTML = new Date().getFullYear();

//* AOS
AOS.init({
  once: true,
});

//* GSAP 3
gsap.from('.hero_text p, .btn', {
  duration: 1.5,
  delay: 0.5,
  x: -200,
  opacity: 0,
  ease: 'bounce',
});

gsap.from('.hero_img', {
  duration: 1.5,
  delay: 1,
  x: 200,
  opacity: 0,
  ease: 'bounce',
});
