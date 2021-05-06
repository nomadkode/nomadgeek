//* Dark mode
function darkMode() {
  const element = document.body;
  element.classList.toggle('dark-mode');
}

//* Footer
document.getElementById('year').innerHTML = new Date().getFullYear();
