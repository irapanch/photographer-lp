import {content} from '../content/faq';

export const faq = () => {
  const tabsWrapper = document.querySelector('.faq .tabs');


  const renderFaq = () => {
    return content.reduce((acc, item, index) => {
        const isChecked = index === 0 ? 'checked' : '';
        return acc + `<div class="tab">
          <input type="checkbox" id="chck${index}" ${isChecked}>
          <label class="tab-label" for="chck${index}">${item.title}</label>
          <div class="tab-content">${item.description}</div>
        </div>`;
      }, '');
  };

  tabsWrapper.insertAdjacentHTML('beforeend', renderFaq());

}

