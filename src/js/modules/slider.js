import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle.min.js';

import { sliderContent } from '../content/slider';

export const slider = () => {
  const changeActiveTab = (tabs, id) => {
    tabs.forEach(item => {
      item.classList.remove('active');
      if (Number(item.dataset.id) - 1 === id) {
        item.classList.add('active');
      }
    });
  };

  const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    centeredSlides: true,
    // slidesPerView: 1,
    // loop: true,
    keyboardControl: true,
    updateOnWindowResize: true,
    slideToClickedSlide: true,
    modules: [Autoplay, Navigation, Pagination],
    grabCursor: true,
    // initialSlide: 1,
    speed: 5000,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // const swiper = document.querySelector('.swiper').sliderSwiper;

  const swiperWrapper = document.querySelector('.swiper-wrapper');

  let slides = '';

  sliderContent.forEach(item => {
    slides += `
    <div class="swiper-slide" data-id=${item.id}>
          <div class="services__card">
            <img src=${item.src} alt=${item.alt} />
            <div class="content">
              <h2 class="content-header">${item.title}</h2>
              <div>
                <p>${item.description}</p>
              </div>
              <a href="#"></a>
            </div>
          </div>
        </div>
    `;
  });

  swiperWrapper.insertAdjacentHTML('beforeend', slides);

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

  const tabBtns = document.querySelectorAll('.tabButton');

  tabs.addEventListener('click', e => {
    e.preventDefault();
    if (e.target?.tagName != 'BUTTON') return;
    const clickedTabId = Number(e.target.getAttribute('data-id'));
    swiper.slideTo(clickedTabId - 1, 1000);

    changeActiveTab(tabBtns, clickedTabId - 1);
    // console.log(swiper.realIndex);
  });

  swiper.on('slideChange', e => {
    const activeSlide = document.querySelector('.swiper-slide-active');
    const id = Number(activeSlide.getAttribute('data-id'));

    changeActiveTab(tabBtns, id);
  });
};
