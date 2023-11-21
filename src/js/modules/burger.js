// window.addEventListener('resize', () => {
//   if (window.screen.availWidth > 1200) {
//     menuElement.style.display = 'none';
//   }
// });

export const burger = (menuSelector, burgerSelector) => {
  const burgerElement = document.querySelector(burgerSelector);
  const menu = document.querySelector(menuSelector);

  burgerElement.addEventListener('click', () => {
    menu.classList.toggle('active');
    const navList = document.querySelector('.nav-list');

    if (menu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';

      navList.addEventListener('click', closeMobileMenu);
    } else {
      document.body.style.overflow = '';
    }

    function closeMobileMenu(e) {
      if (e.target.getAttribute('href')) {
        menu.classList.remove('active');
        document.body.style.overflow = '';
        navList.removeEventListener('click', closeMobileMenu);
      }
    }

    // Add accessability to mobile menu button
    const active = menu.classList.contains('active');
    if (active) {
      burgerElement.setAttribute(
        'aria-label',
        'Кнопка закриття мобільного меню'
      );
    } else {
      burgerElement.setAttribute(
        'aria-label',
        'Кнопка відкриття мобільного меню'
      );
    }

    burgerElement.setAttribute('aria-expanded', active);
  });
};
