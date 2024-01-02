const business1 = require('../../images/jpg/business/business1.jpg');
const business2 = require('../../images/jpg/business/business2.jpg');
const business3 = require('../../images/jpg/business/business3.jpg');
const business4 = require('../../images/jpg/business/business4.jpg');
const business5 = require('../../images/jpg/business/business5.jpg');
const business6 = require('../../images/jpg/business/business6.jpg');

const content1 = require('../../images/jpg/content/content1.jpg');
const content2 = require('../../images/jpg/content/content2.jpg');
const content3 = require('../../images/jpg/content/content3.jpg');
const content4 = require('../../images/jpg/content/content4.jpg');
const content5 = require('../../images/jpg/content/content5.jpg');
const content6 = require('../../images/jpg/content/content6.jpg');
const content7 = require('../../images/jpg/content/content7.jpg');

export const portfolioContent = [
  {
    id: 'business',
    title: 'Бізнес-зйомка',
    description: [
      'Від корпоративних портретів до виробничих процесів - я розкажу вашу історію візуально, привертаючи увагу та залишаючи незабутнє враження.',
      'Оберіть бізнес-зйомку для підкреслення унікальності бренду та представлення вашої команди в найкращому світлі.',
      'Незалежно від того, чи ви обираєте стиль корпоративних портретів або запальних кадрів робочого колективу, ми спільно створимо вражаючий образ вашого бізнесу!',
    ],
    images: [
      {
        id: 1,
        src: business3,
        alt: 'Дівчина з планом дизайну квартири',
        orientation: 'vertical',
      },
      {
        id: 2,
        src: business2,
        alt: 'Портрет задумливої дівчини,яка працює',
        orientation: 'horizontal',
      },
      {
        id: 3,
        src: business4,
        alt: 'Розгорнутий журнал з дизайну в руках',
        orientation: 'vertical',
      },
      {
        id: 4,
        src: business1,
        alt: 'Дівчина з планшетом дивиться в камеру',
        orientation: 'big',
      },
      {
        id: 5,
        src: business6,
        alt: 'Дівчина-дизайнер сидить на дивані з блокнотом',
        orientation: 'vertical',
      },
      {
        id: 6,
        src: business5,
        alt: 'Креслення плану приміщення',
        orientation: 'horizontal',
      },
    ],
  },
  {
    id: 'content',
    title: 'Контентна',
    description: [
      'Зйомка вашого контенту для соціальних мереж, вебсайтів, інтернет-магазинів або для друку!',
      'Цей тип зйомки ідеально підійде як для блогерів, так і для  магазинів, підприємців або творчих особистостей, які бажають ефективно просувати свій бренд, товари, послуги та/або профіль.',
      'Довірте мені створення професійного контенту, щоб підкреслити унікальність та привабливість вашого продукту чи послуги.',
    ],
    images: [
      {
        id: 1,
        src: content6,
        alt: 'SOME ALT NEED TO CHANGE',
        orientation: 'big',
      },
      {
        id: 2,
        src: content1,
        alt: 'SOME ALT NEED TO CHANGE',
        orientation: 'vertical',
      },
      {
        id: 3,
        src: content2,
        alt: 'SOME ALT NEED TO CHANGE',
        orientation: 'vertical',
      },
      {
        id: 4,
        src: content3,
        alt: 'SOME ALT NEED TO CHANGE',
        orientation: 'horizontal',
      },
      {
        id: 5,
        src: content4,
        alt: 'SOME ALT NEED TO CHANGE',
        orientation: 'horizontal ',
      },
      {
        id: 6,
        src: content7,
        alt: 'SOME ALT NEED TO CHANGE',
        orientation: 'vertical',
      },
    ],
  },
];
