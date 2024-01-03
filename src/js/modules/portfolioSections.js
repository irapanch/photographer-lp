import { portfolioContent } from '../content/portfolio';

{
  /* <a
href="./images/jpg/${id}/business3.jpg"
data-at-450="./images/jpg/business/business3.jpg"
data-at-800="./images/jpg/business/business3.jpg"
data-at-1366="./images/jpg/business/business3.jpg"
data-at-1920="./images/jpg/business/business3.jpg"
data-caption="Image caption"
class="figure1 item vertical"
>
<img
  class="figure-img"
  src="./images/jpg/business/business3.jpg"
  alt="a kitten"
/>
</a> */
}

// Different order for grid in portfolio, adding class
const getImageOrientation = (index, odd) => {
  if (odd) {
    switch (index) {
      case 1:
        return 'horizontal';
      case 3:
        return 'big';
      case 4:
        return 'horizontal';
      case 5:
        return 'vertical';
      case 6:
        return 'vertical';
      default:
        return '';
    }
  } else {
    switch (index) {
      case 2:
        return 'horizontal';
      case 3:
        return 'horizontal';
      case 4:
        return 'big';
      case 5:
        return 'vertical';
      case 6:
        return 'vertical';
      default:
        return '';
    }
  }
  return;
};

export const portfolio = () => {
  const wrapper = document.querySelector('.wrapper');

  let html = '';

  portfolioContent.forEach((item, sectionIndex) => {
    const odd = sectionIndex % 2 === 0;
    html += `
    <section class="${item.id} ${odd ? '' : 'colored'}">
    <div class="container">
      <h2 class="title portfolio-header">${item.title}</h2>
      <div class="cont ${odd ? '' : 'reversed'}">
      <div class="portfolio-description">
      ${
        Array.isArray(item.description)
          ? item.description.map(p => `<p>${p}</p>`).join('')
          : ''
      }
      </div>

    <div class="info1 gallery">
    ${item.images
      .map(
        (image, index) => `
    <a href="${image.src}" data-caption="Image caption" class="figure${
          index + 1
        } item ${getImageOrientation(index + 1, odd)}">
      <img class="figure-img" src="${image.src}" alt="${image.alt}">
    </a>
  `
      )
      .join('')}
    </div>
    </div>
    </div>
  </section>`;
  });

  wrapper.insertAdjacentHTML('beforeend', html);
};
