import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
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
  slidesPerView: 3,
  loop: true,
  modules: [ Autoplay, Navigation, Pagination ],
  autoplay: {
    delay: 5000,
    // disableOnInteraction: false,
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


