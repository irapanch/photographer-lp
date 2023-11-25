import { benefits } from './js/modules/benefits';
import { timeline } from './js/modules/timeline';
import { accordion } from './js/modules/accordion';
import { faq } from './js/modules/faq';
import { photocardsAnimation } from './js/modules/photocardsAnimation';
import { slider } from './js/modules/slider';
// import { sliderTabs } from './js/modules/sliderTabs';
import { form } from './js/modules/form';
import { burger } from './js/modules/burger';
import { modals } from './js/modules/modals';

document.addEventListener('DOMContentLoaded', () => {
  modals();
  form();
  benefits();
  photocardsAnimation();
  slider();
  // sliderTabs();
  timeline();
  accordion();
  faq();
  burger('.nav', '.mobile-menu__button');
});
