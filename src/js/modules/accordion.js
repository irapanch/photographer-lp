export const accordion = () => {
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  item.addEventListener('click', () => {

    accordionItems.forEach(item => {
      item.classList.remove('active');
    })

    item.classList.add('active');

    })
  })
}