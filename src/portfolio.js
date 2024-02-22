// import { timeline } from './js/modules/timeline';
// import { accordion } from './js/modules/accordion';
// import { faq } from './js/modules/faq';
// import { photocardsAnimation } from './js/modules/photocardsAnimation';
// import { slider } from './js/modules/slider';
import { form } from './js/modules/form';
import { burger } from './js/modules/burger';
import { modals } from './js/modules/modals';
import { mask } from './js/modules/mask';
import { portfolio } from './js/modules/portfolioSections';
import baguetteBox from 'baguettebox.js';
import 'baguettebox.js/dist/baguetteBox.min.css';

document.addEventListener('DOMContentLoaded', () => {
  modals();
  form();
  // photocardsAnimation();
  // slider();
  // timeline();
  // accordion();
  // faq();
  portfolio();
  burger('.nav', '.mobile-menu__button');
  mask('[name="phone"]');
  baguetteBox.run('.gallery', {
    buttons: true,
    // animation: 'fadeIn',
    // async: true,
  });
});
