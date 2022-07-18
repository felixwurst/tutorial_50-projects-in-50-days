const nav = document.querySelector('.nav');

window.addEventListener('scroll', fixNav);

function fixNav() {
  // nav.offsetHeight returns the height of the navbar
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
}
