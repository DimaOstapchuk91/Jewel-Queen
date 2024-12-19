// modal

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const closeMenuLink = document.querySelectorAll('.js-header-link');

  const toggleMenu = () => {
    const isMenuOpen = mobileMenu.classList.contains('is-open');
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    if (!isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  closeMenuLink.forEach(item => item.addEventListener('click', toggleMenu));
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 320px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    document.body.classList.remove('no-scroll');
  });
})();
