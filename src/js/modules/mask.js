export const mask = selector => {
  let setCursorPosition = (pos, elem) => {
    elem.focus();

    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();

      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };

  function createMask(event) {
    let matrix = '+38 (___) ___ __ __',
      i = 0,
      def = matrix.replace(/\D/g, ''),
      val = this.value.replace(/\D/g, '');

    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ''
        : a;
    });

    // Check if the phone number is complete based on the mask
    const isPhoneComplete = /^\+38 \(\d{3}\) \d{3} \d{2} \d{2}$/.test(
      this.value
    );
    const phoneErrorMessage = document.getElementById('phone-error-message');

    if (!isPhoneComplete) {
      // Display error message if the phone number is incomplete
      phoneErrorMessage.classList.remove('error-hidden');
      phoneErrorMessage.textContent = 'Введіть 10 цифр номеру';
    } else {
      // Clear the error message if the phone number is complete
      phoneErrorMessage.classList.add('error-hidden');
      phoneErrorMessage.textContent = '';
    }

    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }

  let inputs = document.querySelectorAll(selector);
  console.log(inputs);

  inputs.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('keypress', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};
