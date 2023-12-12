export const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);

    trigger.forEach(item => {
      item.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault();
        }
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
      });
    });

    close.addEventListener('click', () => {
      modal.classList.add('hide');
      document.body.style.overflow = '';
    });

    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.classList.add('hide');
        document.body.style.overflow = '';
      }
    });
    modal.addEventListener('animationend', () => {
      if (modal.classList.contains('hide')) {
        modal.style.display = 'none';
        modal.classList.remove('hide');
      }
    });
  }

  bindModal('.button-order', '.modal', '.close');
};
