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
