import { accordion } from './js/modules/accordion';
import {faq} from './js/modules/faq';
import {saultAnimation} from './js/modules/sault-animation';
import {slider} from './js/modules/slider'

document.addEventListener("DOMContentLoaded", () => {
  // console.log(saultAnimation);
  saultAnimation();

  // $(".hover").mouseleave(
  //   function() {
  //     $(this).removeClass("hover");
  //   }
  // );


  slider();
  accordion();
  faq();

});