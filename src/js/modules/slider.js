import Swiper, {
  Autoplay,
  Navigation,
  Pagination,
  Thumbs,
  Virtual,
} from 'swiper';
import { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle.min.js';
// import 'swiper/swiper-element-bundle.min.css';
// import 'swiper/swiper-element-bundle.min.js';
// import 'swiper/modules/autoplay.min.css';
// import {Autoplay} from  'swiper/modules/autoplay.js';

import { sliderContent } from '../content/slider';

export const slider = () => {
  const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    mousewheelControl: true,
    keyboardControl: true,
    updateOnWindowResize: true,
    slideToClickedSlide: true,
    // effect: "flip",
    modules: [Autoplay, Navigation, Pagination],
    speed: 2000,
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

  const swiperWrapper = document.querySelector('.swiper-wrapper');
  console.log(sliderContent);

  let slides = '';

  sliderContent.forEach(item => {
    slides += `
    <div class="swiper-slide">
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
};
