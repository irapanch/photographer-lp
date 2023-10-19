export const saultAnimation = () => {
  const WIDTH_SCREEN = 1024;

  const isDesktop = window.innerWidth >= WIDTH_SCREEN;

  if (isDesktop) {
    const container = document.querySelector('.sault-animation');
    const numElements = 70; // Кількість елементів, що сиплються
    const circles = [];

    for (let i = 0; i < numElements; i++) {
      const circle = document.createElement('div');
      circle.className = 'circle';

      const size = Math.floor(Math.random() * 4) + 4; // Випадковий розмір від 4 до 7 пікселів у діаметрі
      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;

      container.appendChild(circle);
      circles.push(circle);
    }

    function animate() {
      circles.forEach(circle => {
        const duration = Math.random() * 3 + 4; // Випадковий час в секундах (від 2 до 5)
        const maxShift = 35; // Максимальний зсув (вліво чи вправо) для елемента
        const maxFall = 400; // Максимальний зсув вниз для елемента

        const endX = (Math.random() - 0.5) * maxShift;
        const endY = Math.random() * maxFall;

        // Встановлюємо початкові позиції
        circle.style.transform = 'translate(0, 0)';

        // Запускаємо анімацію
        circle.animate(
          [
            { opacity: 0, transform: 'translate(0, 0)' },
            // { opacity: 1, transform: `translate(${endX}px, ${endY / 2}px)` },
            { opacity: 1, transform: `translate(${endX}px, ${endY}px)` },
            { opacity: 0, transform: `translate(${endX}px, 400px)` },
          ],
          {
            duration: duration * 1000,
            iterations: Infinity,
            delay: Math.random() * 2000,
            easing: 'ease-in-out',
            fill: 'both',
          }
        );
      });
    }

    animate();
  }
};
