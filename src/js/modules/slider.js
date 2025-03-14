import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle.min.js';

import { sliderContent } from '../content/slider';

export const slider = () => {
  const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    centeredSlides: true,
    keyboardControl: true,
    updateOnWindowResize: true,
    slideToClickedSlide: true,
    modules: [Autoplay, Navigation, Pagination],
    grabCursor: true,
    initialSlide: 1,
    speed: 500,

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
      renderBullet: function (index, className) {
        return `<span class="${className} swiper-pagination-clickable">${sliderContent[index].title}</span>`;
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiperWrapper = document.querySelector('.swiper-wrapper');

  let slides = '';

  sliderContent.forEach(item => {
    slides += `
    <div class="swiper-slide" data-id=${item.id}>
          <div class="services__card">
            <img src=${item.src} alt="${item.alt}" />
            <div class="content">
              <h2 class="content-header">${item.title}</h2>
              <div>
                <p>${item.description}</p>
              </div>
              <a href="/portfolio.html#${item.name}"></a>
            </div>
          </div>
        </div>
    `;
  });

  if (swiperWrapper) {
    swiperWrapper.insertAdjacentHTML('beforeend', slides);
  }
};
