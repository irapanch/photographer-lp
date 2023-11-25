import { sliderContent } from '../content/slider';

export const sliderTabs = () => {
  // Handle click to tab and go to clicked title slide
  const tabs = document.querySelector('.tabs');

  const allTabs = [];
  sliderContent.forEach(item =>
    allTabs.push(
      `<button type="button" class="tabButton" data-id=${item.id}>
    ${item.title}
  </button>`
    )
  );

  tabs.insertAdjacentHTML('beforeend', allTabs.join(''));

  const changeActiveTab = (tabs, id) => {
    tabs.forEach(item => {
      item.classList.remove('active');
      if (Number(item.dataset.id) - 1 === id) {
        item.classList.add('active');
      }
    });
  };

  const tabBtns = document.querySelectorAll('.tabButton');

  const swiper = document.querySelector('.swiper').swiper;

  tabs.addEventListener('click', e => {
    e.preventDefault();
    if (e.target?.tagName != 'BUTTON') return;
    const clickedTabId = Number(e.target.getAttribute('data-id'));
    swiper.slideTo(clickedTabId - 1, 1000);

    changeActiveTab(tabBtns, clickedTabId - 1);
  });

  swiper.on('slideChange', e => {
    const activeSlide = document.querySelector('.swiper-slide-active');
    const id = Number(activeSlide.getAttribute('data-id'));

    changeActiveTab(tabBtns, id);
  });
};
