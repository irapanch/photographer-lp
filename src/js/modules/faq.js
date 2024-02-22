import { faqContent } from '../content/faq';

export const faq = () => {
  const tabsWrapper = document.querySelector('.faq .tabs');

  const renderFaq = () => {
    return faqContent.reduce((acc, item, index) => {
      const isChecked = index === 0 ? 'checked' : '';
      return (
        acc +
        `<div class="tab">
          <input type="checkbox" id="check${index}" ${isChecked}>
          <label class="tab-label" for="check${index}">${item.title}</label>
          <div class="tab-content">${item.description}</div>
        </div>`
      );
    }, '');
  };

  if (tabsWrapper) {
    tabsWrapper.insertAdjacentHTML('beforeend', renderFaq());
  }
};
