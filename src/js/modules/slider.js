import Swiper, { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper';
import { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle.min.js';
// import 'swiper/swiper-element-bundle.min.css';
// import 'swiper/swiper-element-bundle.min.js';
// import 'swiper/modules/autoplay.min.css';
// import {Autoplay} from  'swiper/modules/autoplay.js';

export const slider = () => {
const swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  effect: "coverflow",
  modules: [ Autoplay, Navigation, Pagination, EffectCoverflow],
  autoplay: {
    delay: 5000,
    // disableOnInteraction: false,
  },
  coverflowEffect: {
      rotate: 0,
  //     stretch: 80,
      depth: 200,
      modifier: 1,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 70,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 80,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// console.log(swiper);
swiper.on('slideChange', function () {
  console.log('slide changed');
});
}


