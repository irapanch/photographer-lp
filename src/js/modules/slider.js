import Swiper, { Autoplay, EffectCoverflow, Navigation, Pagination, Thumbs, Virtual } from 'swiper';
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
  mousewheelControl: true,
  keyboardControl: true,
  updateOnWindowResize: true,
  slideToClickedSlide: true,

  modules: [ Autoplay, Navigation, Pagination],
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


