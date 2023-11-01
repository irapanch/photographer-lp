import { benefits } from './js/modules/benefits';
import { accordion } from './js/modules/accordion';
import { faq } from './js/modules/faq';
import { photocardsAnimation } from './js/modules/photocardsAnimation';
import { slider } from './js/modules/slider';

document.addEventListener('DOMContentLoaded', () => {
  benefits();
  photocardsAnimation();

  slider();
  accordion();
  faq();

  // function reportWindowSize() {
  //   console.log(window.innerHeight);
  //   console.log(window.innerWidth);
  // }

  // window.addEventListener('resize', reportWindowSize);
});
