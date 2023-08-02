import {saultAnimation} from './js/modules/sault-animation';

document.addEventListener("DOMContentLoaded", () => {
  // console.log(saultAnimation);
  saultAnimation();

  $(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );

});