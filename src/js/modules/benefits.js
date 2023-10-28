import { benefitsContent } from '../content/benefits';

export const benefits = () => {
  const benefitsList = document.querySelector('.benefits__list');
  console.log('BEN');

  let html = '';

  benefitsContent.forEach(benefit => {
    html += `
      <li class="benefits__list-item">
        <h3>${benefit.title}</h3>
        <p>${benefit.description}</p>
      </li>
    `;
  });

  benefitsList.insertAdjacentHTML('beforeend', html);
};
