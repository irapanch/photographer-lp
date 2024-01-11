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
// const content7 = require('../../images/jpg/content/content7.jpg');

const family1 = require('../../images/jpg/family/family1.jpg');
const family2 = require('../../images/jpg/family/family2.jpg');
const family3 = require('../../images/jpg/family/family3.jpg');
const family4 = require('../../images/jpg/family/family4.jpg');
const family5 = require('../../images/jpg/family/family5.jpg');
const family6 = require('../../images/jpg/family/family6.jpg');

const product1 = require('../../images/jpg/product/product1.jpg');
const product2 = require('../../images/jpg/product/product2.jpg');
const product3 = require('../../images/jpg/product/product3.jpg');
const product4 = require('../../images/jpg/product/product4.jpg');
const product5 = require('../../images/jpg/product/product5.jpg');
const product6 = require('../../images/jpg/product/product6.jpg');
const product7 = require('../../images/jpg/product/product7.jpg');

const loveStory1 = require('../../images/jpg/loveStory/loveStory1.jpg');
const loveStory2 = require('../../images/jpg/loveStory/loveStory2.jpg');
const loveStory3 = require('../../images/jpg/loveStory/loveStory3.jpg');
const loveStory4 = require('../../images/jpg/loveStory/loveStory4.jpg');
const loveStory5 = require('../../images/jpg/loveStory/loveStory5.jpg');
const loveStory6 = require('../../images/jpg/loveStory/loveStory6.jpg');
const loveStory7 = require('../../images/jpg/loveStory/loveStory7.jpg');

export const portfolioContent = [
  {
    id: 'business',
    title: 'Бізнес-зйомка',
    description: [
      'Від корпоративних портретів до виробничих процесів - бізнес-зйомка - це найкращий спосіб показати свої професійні сторони.',
      'За допомогою бізнес-зйомки ви отримаєте знімки для резюме, презентацій, професійного блогу, профілю в LinkedIn, корпоративного сайту або просто в профіль аватару робочого email, що будуть говорити про вашу експертність та професіоналізм.',
      'Потрібні знімки робочого процесу або цілого колективу? Не проблема! В офісі, на виробництві, в студії або на вулиці - місце зйомки ви обираєте під ваш запит.',
      'Незалежно від того, чи ви обираєте стиль бізнес портретів або запальних кадрів робочого колективу, ми спільно створимо вражаючий образ вашого бізнесу!',
    ],
    images: [
      {
        id: 1,
        src: business3,
        alt: 'Дівчина з планом дизайну квартири',
      },
      {
        id: 2,
        src: business2,
        alt: 'Портрет задумливої дівчини, яка працює',
      },
      {
        id: 3,
        src: business4,
        alt: 'Розгорнутий журнал з дизайну в руках',
      },
      {
        id: 4,
        src: business6,
        alt: 'Дівчина-дизайнер сидить на дивані з блокнотом',
      },
      {
        id: 5,
        src: business1,
        alt: 'Дівчина з планшетом дивиться в камеру',
      },
      {
        id: 6,
        src: business5,
        alt: 'Креслення плану приміщення',
      },
    ],
  },
  {
    id: 'content',
    title: 'Контентна / Для блогу',
    description: [
      'Контентна зйомка - це важлива складова стратегії бренду та маркетингової комунікації, оскільки дозволяє ефективно представляти продукти, послуги чи ідеї. Для соціальних мереж, вебсайтів, інтернет-магазинів або для друку!',
      'Цей тип зйомки ідеально підійде для підприємців або творчих особистостей, які бажають ефективно просувати свій бренд, товари, послуги та/або профіль.',
      'Можливі різні варіанти локацій - студійна зйомка, фото у вас на локації або на відкритому повітрі.',
      'Довірте мені створення професійного контенту, щоб підняти Ваш власний бренд на новий рівень!',
    ],
    images: [
      {
        id: 1,
        src: content3,
        alt: 'Чоловік сидить за столом і друкує на друкарській машинці',
      },
      {
        id: 2,
        src: content1,
        alt: 'Чоловік читає книгу',
      },
      {
        id: 3,
        src: content5,
        alt: 'Дівчина сидить на підвіконні і дивиться у вікно',
      },
      {
        id: 4,
        src: content6,
        alt: 'Чоловік стоїть біля столу і друкує на друкарській машинці',
      },
      {
        id: 5,
        src: content4,
        alt: 'Дівчина малює картину фарбами',
      },
      {
        id: 6,
        src: content2,
        alt: 'Руки, які друкують на друкарській машинці',
      },
    ],
  },
  {
    id: 'family',
    title: 'Cімейна',
    description: [
      'Хочете поповнити сімейний архів або лишити спогади від родинної події? Якнайкраще для цього підійде сімейна фотосесія!',
      'Родинне свято, пікнік, випускний в садочку чи спільна прогулянка - кожна сімейна фотосесія - це шанс перетворити найцінніші миті в вашу родинну історію.',
      'Особливий підхід до чоловіків, адже я знаю, наскільки іноді важко їх вмовити на спільну сімейну зйомку :)',
    ],
    images: [
      {
        id: 1,
        src: family2,
        alt: 'Хлопчик біжить в обійми батьків',
      },
      {
        id: 2,
        src: family1,
        alt: 'Пара закоханих торкається чолами один одного',
      },
      {
        id: 3,
        src: family3,
        alt: 'Жінка обіймає чоловіка',
      },
      {
        id: 4,
        src: family5,
        alt: 'Сімʼя сидить на пікніку в лісі',
      },
      {
        id: 5,
        src: family4,
        alt: 'Долоні дорослих обіймають дитячі долоні',
      },
      {
        id: 6,
        src: family6,
        alt: 'Тато тримає сина на плечах',
      },
    ],
  },
  {
    id: 'product',
    title: 'Предметна',
    description: [
      'Чудовий вибір для бізнесу, що працює як онлайн так і офлайн, магазинів, а також для особистих творчих проектів.',
      'Підійде для фотозйомки взуття, одягу, аксесуарів, ювелірних виробів, біжутерії, витворів мистецтва, посуду, фуд зйомки і так далі.',
      'Предметні фотографії це невідʼємна частина будь-якого товарного бізнесу. Маючи якісні і професійні знімки вашого товару  або продукції, ви збільшуєте коефіцієнт конверсії Вашого каналу продаж, що прямо впливає на Ваш прибуток.',
    ],
    images: [
      {
        id: 1,
        src: product1,
        alt: 'Хлопчик біжить в обійми батьків',
      },
      {
        id: 2,
        src: product7,
        alt: 'Пара закоханих торкається чолами один одного',
      },
      {
        id: 3,
        src: product4,
        alt: 'Жінка обіймає чоловіка',
      },
      {
        id: 4,
        src: product6,
        alt: 'Сімʼя сидить на пікніку в лісі',
      },
      {
        id: 5,
        src: product5,
        alt: 'Долоні дорослих обіймають дитячі долоні',
      },
      {
        id: 6,
        src: product3,
        alt: 'Тато тримає сина на плечах',
      },
    ],
  },
  {
    id: 'loveStory',
    title: 'Love Story',
    description: [
      'Ця особлива фотосесія - це магія, яка перетворює вашу історію кохання в живописні кадри, наповнені емоціями та теплом. Кожна посмішка, погляд та легеньке доторкання будуть дбайливо збережені у світлинах, перетворюючись на неповторні миті, які залишаться у вас назавжди.',
      'Зйомка може проходити як в студії, так і на вулиці під теплими променями сонця чи в затишному кафе з атмосферою, яка дихає коханням. Або, можливо, ваша історія розгортається на вулицях мальовничого міста під час заходу сонця, створюючи чарівний фон для відповідних знімків.',
      'Отримайте незабутні миті, які стануть скарбом у вашій колекції спогадів. ',
    ],
    images: [
      {
        id: 1,
        src: loveStory7,
        alt: 'Хлопчик біжить в обійми батьків',
      },
      {
        id: 2,
        src: loveStory2,
        alt: 'Пара закоханих торкається чолами один одного',
      },
      {
        id: 3,
        src: loveStory5,
        alt: 'Жінка обіймає чоловіка',
      },
      {
        id: 4,
        src: loveStory4,
        alt: 'Сімʼя сидить на пікніку в лісі',
      },
      {
        id: 5,
        src: loveStory3,
        alt: 'Долоні дорослих обіймають дитячі долоні',
      },
      {
        id: 6,
        src: loveStory6,
        alt: 'Тато тримає сина на плечах',
      },
    ],
  },
];
