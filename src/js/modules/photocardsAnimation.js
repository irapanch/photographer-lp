const photoSizes = [
  { width: '50px', height: '50px', animationClass: 'falling' },
  { width: '55px', height: '55px', animationClass: 'falling2' },
  { width: '53px', height: '53px', animationClass: 'fallingRight' },
  { width: '60px', height: '60px', animationClass: 'fallingRight' },
  { width: '52px', height: '56px', animationClass: 'falling2' },
];

const imageUrl = require('../../images/svg/icon-photo.svg');

export const photocardsAnimation = () => {
  const setContainer = document.querySelector('.photo-animation');

  for (let i = 0; i < photoSizes.length; i++) {
    const photoCard = document.createElement('div');
    photoCard.classList.add(`photocard${i + 1}`);
    photoCard.classList.add('photocard');
    photoCard.style.animation = `${photoSizes[i].animationClass} ${
      (i + 1) * 1.5
    }s infinite`;
    photoCard.style.width = photoSizes[i].width;
    photoCard.style.height = photoSizes[i].height;
    photoCard.style.backgroundImage = `url(${imageUrl})`;
    photoCard ?? setContainer.appendChild(photoCard);
  }
};
