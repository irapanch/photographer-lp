import { portfolioContent } from '../content/portfolio';

import { tabsOptions } from '../content/portfolio';

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

// export const titlePortfolio = () => {
//   const portfolioWrapper = document.querySelector('.portfolio-wrapper');
//   const list = document.createElement('ul');
//   list.classList.add = 'categories';

//   portfolioWrapper.append(list);
//   // newDiv.innerHTML = '<h1>Привет!</h1>';
// };

export const dataPortfolio = () => {
  const wrapper = document.querySelector('.wrapper');

  let html = '';

  portfolioContent.forEach((item, sectionIndex) => {
    function getGridArea(index) {
      const areas = [
        '1 / 1 / 3 / 2', // div1
        '1 / 2 / 3 / 3', // div2
        '1 / 3 / 2 / 4', // div3
        '3 / 1 / 4 / 3', // div4
        '2 / 3 / 4 / 4', // div5
      ];
      return areas[index % areas.length];
    }
    
    const odd = sectionIndex % 2 === 0;
    const isContentSection = item.id === 'content';
    const activeTabClass = isContentSection ? 'active-tab' : '';


    html += `
    <section class="${item.id} ${odd ? '' : 'colored'}" id="${item.id}">
    <div class="container ">
    <div class="tabs ${activeTabClass}">
    <img class="tabs-left" src="${
      isContentSection && activeTabClass === 'active-tab'
        ? tabsOptions.blue.startLeft // Меняем src для активной вкладки
        : item.bgTabsLeft // Используем белый src для неактивной вкладки
    }">
 
    <p class="tabs-text">${item.tabsTitle}</p>
   <img class="tabs-right" src="${
     isContentSection && activeTabClass === 'active-tab'
       ? tabsOptions.blue.right // Меняем src для активной вкладки content
       : item.bgTabsRight // Иначе используем обычный src
   }">
    </div>
    
      <h2 class="title portfolio-header">${item.title}</h2>
      <h3 class="portfolio-subtitle">${item.subtitle}</h3>
      
      <div class="cont ">
      <div class="portfolio-description">
      <h4>${item.description}</h4>
      </div>
      <div class="portfolio-forWhom">
      ${
        Array.isArray(item.forWhom)
          ? item.forWhom.map(p => `
            <img class="icon-forWhom" src="${p.icon}"
            <p>${p.desc}</p>`).join('')
          : ''
      }
      </div>
      <div class="portfolio-description">
      <h4>${item.servicesTitle}</h4>
      </div>
      <div class="portfolio-points">
      ${
        Array.isArray(item.services)
          ? item.services.map(p => `
            <div class="points-wrap">
            <img class="icon-dash" src="${p.icon}"  alt="${p.alt}"">
            <p class="points-text">${p.text}</p></div>`).join('')
          : ''
      }
      </div>

      <div class="portfolio-description">
      <h4>${item.locationTitle}</h4>
      </div>
      <div class="portfolio-points">
      ${
        Array.isArray(item.location)
          ? item.location.map(p => `
             <div class="points-wrap">
             <img class="icon-dash" src="${p.icon}" alt="${p.alt}"">
            <p class="points-text">${p.text}</p></div>`).join('')
          : ''
      }
      </div>

    <div class="info1 gallery">
    ${item.images
      .map(
        (image, index) => `
    <a href="${image.src}" data-caption="${image.name ?? ''}" class="figure${
          index + 1
        } item ${getImageOrientation(index + 1, odd)}" style="grid-area: ${getGridArea(index + 1)};"
        >
      <img class="figure-img" src="${image.mobileSrc}" alt="${image.alt}">
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
  const allTabs = document.querySelectorAll('.tabs');

  allTabs.forEach(tab =>
    tab.addEventListener('pointerdown', e => {
      if (!tab.classList.contains('active-tab')) {
      const contentSection = tab.closest('section').id === 'content';
      const portraitSection = tab.closest('section').id === 'portrait';
      // Тоггл класса active-tab
      if (tab.classList.contains('active-tab')) {
        tab.classList.remove('active-tab');
        tab.closest('section').style.zIndex = '';

        if (contentSection) {
          tab.querySelector('.tabs-left').src = tabsOptions.white.startLeft;
          tab.querySelector('.tabs-right').src = tabsOptions.white.right;
        }
      } else {
        // Скидання класів і стилів для всіх вкладок
        allTabs.forEach(el => {
          el.classList.remove('active-tab');
          el.closest('section').style.zIndex = '';
          el.querySelector('.tabs-left').src = tabsOptions.white.left;
            el.querySelector('.tabs-right').src = tabsOptions.white.right;

          if (el.closest('section').id === 'content') {
            el.querySelector('.tabs-left').src = tabsOptions.white.startLeft;
            el.querySelector('.tabs-right').src = tabsOptions.white.right;
          }
          if (el.closest('section').id === 'portrait') {
            el.querySelector('.tabs-right').src = tabsOptions.white.finishRight;
          }
        });

        // Додавання активного класу до поточної вкладки
        tab.classList.add('active-tab');
        tab.closest('section').style.zIndex = '10';
        tab.querySelector('.tabs-left').src = tabsOptions.blue.left;
        tab.querySelector('.tabs-right').src = tabsOptions.blue.right;

        if (contentSection) {
          tab.querySelector('.tabs-left').src = tabsOptions.blue.startLeft;
          tab.querySelector('.tabs-right').src = tabsOptions.blue.right;
        }
        if (portraitSection) {
          tab.querySelector('.tabs-right').src = tabsOptions.blue.finishRight;
        }
      }
    }})
  );
};
