import { timelineContent } from '../content/timeline';

export const timeline = () => {
  const accordionList = document.querySelector('.timeline-accordion');

  let html = '';

  timelineContent.forEach(({ title, description }, idx) => {
    html += `
      <li class="accordion-item">
        <h3>${title}</h3>
        <p>${description}</p>
    </li>
    `;
  });

  accordionList.insertAdjacentHTML('beforeend', html);
  accordionList.children[0].classList.add('active');
};
