

  window.addEventListener('scroll', () => {
    const header = document.getElementById('mainHeader');
    if (window.scrollY > 50) {
      header.classList.add('bg-white', 'shadow-md');
    } else {
      header.classList.remove('bg-blue', 'shadow-md');
    }
  });

  // set the drawer menu element
const $targetEl = document.getElementById('drawer-js-example');

document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu-2');
    const hamburgerIcon = this.querySelector('.hamburger-icon');
    const closeIcon = this.querySelector('.close-icon');

    menu.classList.toggle('hidden');
    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
  });