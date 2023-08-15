import { accordion } from './js/modules/accordion';
import {faq} from './js/modules/faq';
import {saultAnimation} from './js/modules/sault-animation';

document.addEventListener("DOMContentLoaded", () => {
  // console.log(saultAnimation);
  saultAnimation();

  // $(".hover").mouseleave(
  //   function() {
  //     $(this).removeClass("hover");
  //   }
  // );

  accordion();
  faq();

});