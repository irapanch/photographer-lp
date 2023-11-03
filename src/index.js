import { benefits } from './js/modules/benefits';
import { timeline } from './js/modules/timeline';
import { accordion } from './js/modules/accordion';
import { faq } from './js/modules/faq';
import { photocardsAnimation } from './js/modules/photocardsAnimation';
import { slider } from './js/modules/slider';
import { form } from './js/modules/form';

document.addEventListener('DOMContentLoaded', () => {
  benefits();
  photocardsAnimation();
  slider();
  timeline();
  accordion();
  faq();
  form();
});
