/* ═════════════════════════════════════════════════════════════════════════
   КАТАЛОГ WHITECASH — единственный файл с предложениями.

   Правится через panel.html (панель управления). Руками тоже можно, но при
   следующем сохранении из панели правки будут перезаписаны.

   cat      — раздел: debit | credit | mfo.
   url      — партнёрская ссылка с кнопки карточки.
   logo     — файл логотипа. Пусто — рисуется плашка с инициалами.
   tone.bg  — цвет плашки. От него же считается цвет акцентной строки:
              сайт сам затемнит цвет, пока он не станет читаемым.
   headline — крупная строка выгоды. note — подпись под ней.
   specs    — пары «условие: значение».

   ВАЖНО ПРО ЦИФРЫ: ставки, лимиты, кэшбэк и сроки ставьте только те, что
   подтверждены вашей партнёрской программой. Цифра «на глаз» — это
   недостоверная реклама: партнёрка может снять оффер, а ФАС — оштрафовать.
   ═════════════════════════════════════════════════════════════════════════ */

const SITE = {
  "brand": "Квартал",
  "tagline": "29 проверенных предложений банков и МФО",
  "telegram": ""
};

/* cta — надпись на кнопке карточек этого раздела. */
const CATEGORIES = [
  {
    "id": "debit",
    "label": "Дебетовые карты",
    "cta": "Оформить"
  },
  {
    "id": "credit",
    "label": "Кредитные карты",
    "cta": "Оформить"
  },
  {
    "id": "mfo",
    "label": "Займы МФО",
    "cta": "Получить деньги"
  }
];

const OFFERS = [
  {
    "cat": "debit",
    "partner": "Ozon Банк",
    "tag": "дебетовая карта",
    "title": "Карта Ozon",
    "logo": "img/logos/ozon.png",
    "tone": { "bg": "#005BFF", "ink": "#FFFFFF" },
    "headline": "Кэшбэк баллами",
    "note": "покупки на маркетплейсе выгоднее",
    "specs": [
      ["Оформление", "онлайн, без визита в офис"],
      ["Выпуск", "бесплатно"],
      ["Оплата", "телефоном и картой"]
    ],
    "url": "https://trk.ppdu.ru/click/w2kxRsaE?erid=2SDnjcSQqFP"
  },
  {
    "cat": "debit",
    "partner": "ВТБ",
    "tag": "дебетовая карта",
    "title": "Карта ВТБ",
    "logo": "img/logos/vtb.png",
    "tone": { "bg": "#0A2896", "ink": "#FFFFFF" },
    "headline": "Кэшбэк за покупки",
    "note": "категории выбираете сами",
    "specs": [
      ["Оформление", "онлайн за несколько минут"],
      ["Доставка", "курьером или в отделении"],
      ["Переводы", "по СБП между своими счетами"]
    ],
    "url": "https://rko-group.ru/s/EYJ40q1T"
  },
  {
    "cat": "debit",
    "partner": "ВТБ",
    "tag": "платёжный стикер",
    "title": "Стикер ВТБ",
    "logo": "img/logos/vtb.png",
    "tone": { "bg": "#0A2896", "ink": "#FFFFFF" },
    "headline": "Оплата одним касанием",
    "note": "наклейка на телефон вместо карты",
    "specs": [
      ["Работает", "на любом смартфоне"],
      ["Оформление", "онлайн-заявка"],
      ["Счёт", "тот же, что у карты"]
    ],
    "url": "https://rko-group.ru/s/VaSWuksM"
  },
  {
    "cat": "debit",
    "partner": "ПСБ",
    "tag": "дебетовая карта",
    "title": "Карта ПСБ",
    "logo": "img/logos/psb.png",
    "tone": { "bg": "#EE7203", "ink": "#FFFFFF" },
    "headline": "Кэшбэк и переводы",
    "note": "повседневные покупки и снятие",
    "specs": [
      ["Оформление", "онлайн-заявка"],
      ["Доставка", "курьером на дом"],
      ["Снятие", "в банкоматах банка"]
    ],
    "url": "https://rko-group.ru/s/lCrYB4iz"
  },
  {
    "cat": "debit",
    "partner": "ОТП Банк",
    "tag": "дебетовая карта",
    "title": "Карта ОТП",
    "logo": "img/logos/otp.png",
    "tone": { "bg": "#3E8C2E", "ink": "#FFFFFF" },
    "headline": "Кэшбэк за покупки",
    "note": "и процент на остаток по счёту",
    "specs": [
      ["Оформление", "онлайн, паспорт"],
      ["Выпуск", "бесплатно"],
      ["Приложение", "переводы и оплата"]
    ],
    "url": "https://u-cpa.ru/offer/rs/2plega48prx85/12cnnijlxhhgt/?partner=257322&erid=2SDnjeP62ae&platform_id=75"
  },
  {
    "cat": "debit",
    "partner": "АК Барс Банк",
    "tag": "дебетовая карта",
    "title": "Карта АК Барс",
    "logo": "img/logos/akbars.png",
    "tone": { "bg": "#00834A", "ink": "#FFFFFF" },
    "headline": "Кэшбэк за покупки",
    "note": "карта для ежедневных трат",
    "specs": [
      ["Оформление", "онлайн-заявка"],
      ["Доставка", "курьером"],
      ["Оплата", "смартфоном"]
    ],
    "url": "https://trk.ppdu.ru/click/uQYAEP1t?erid=2SDnjdG7KhL"
  },
  {
    "cat": "debit",
    "partner": "УБРиР",
    "tag": "дебетовая карта",
    "title": "Карта УБРиР",
    "logo": "img/logos/ubrir.png",
    "tone": { "bg": "#1B54A4", "ink": "#FFFFFF" },
    "headline": "Кэшбэк и остаток",
    "note": "процент на деньги на счёте",
    "specs": [
      ["Оформление", "онлайн"],
      ["Выпуск", "бесплатно"],
      ["Переводы", "по СБП"]
    ],
    "url": "https://trk.ppdu.ru/click/jZCproZ1?erid=2SDnjdsbvtS"
  },
  {
    "cat": "debit",
    "partner": "Фора-Банк",
    "tag": "дебетовая карта",
    "title": "Карта Фора-Банка",
    "logo": "img/logos/forabank.svg",
    "tone": { "bg": "#0F3E8C", "ink": "#FFFFFF" },
    "headline": "Кэшбэк за покупки",
    "note": "карта с бесплатным выпуском",
    "specs": [
      ["Оформление", "онлайн-заявка"],
      ["Доставка", "курьером или в офисе"],
      ["Оплата", "картой и телефоном"]
    ],
    "url": "https://trk.ppdu.ru/click/rxob219n?erid=2SDnjeLQiFt"
  },
  {
    "cat": "debit",
    "partner": "Совкомбанк",
    "tag": "дебетовая карта",
    "title": "Карта Совкомбанка",
    "logo": "img/logos/sovcombank.png",
    "tone": { "bg": "#003C71", "ink": "#FFFFFF" },
    "headline": "Кэшбэк за покупки",
    "note": "и бесплатное обслуживание",
    "specs": [
      ["Оформление", "онлайн"],
      ["Доставка", "курьером"],
      ["Снятие", "в банкоматах партнёров"]
    ],
    "url": "https://trk.ppdu.ru/click/wRg004LE?erid=2SDnjecqKHA"
  },

  {
    "cat": "credit",
    "partner": "ВТБ",
    "tag": "кредитная карта",
    "title": "Кредитная карта ВТБ",
    "logo": "img/logos/vtb.png",
    "tone": { "bg": "#0A2896", "ink": "#FFFFFF" },
    "headline": "Льготный период",
    "note": "покупки без процентов по грейсу",
    "specs": [
      ["Решение", "онлайн по анкете"],
      ["Доставка", "курьером"],
      ["Оплата", "картой и телефоном"]
    ],
    "url": "https://trk.ppdu.ru/click/7GixsqsU?erid=2SDnjeGCc2T"
  },
  {
    "cat": "credit",
    "partner": "Банк Зенит",
    "tag": "кредитная карта",
    "title": "Кредитная карта Зенит",
    "logo": "img/logos/zenit.png",
    "tone": { "bg": "#00693E", "ink": "#FFFFFF" },
    "headline": "Льготный период",
    "note": "снятие и покупки по карте",
    "specs": [
      ["Заявка", "онлайн, без визита"],
      ["Документы", "паспорт"],
      ["Решение", "в день обращения"]
    ],
    "url": "https://trk.ppdu.ru/click/hz9Aj3j9?erid=2SDnjdGKRVJ"
  },
  {
    "cat": "credit",
    "partner": "АК Барс Банк",
    "tag": "кредитная карта",
    "title": "Кредитная карта АК Барс",
    "logo": "img/logos/akbars.png",
    "tone": { "bg": "#00834A", "ink": "#FFFFFF" },
    "headline": "Льготный период",
    "note": "карта с кредитным лимитом",
    "specs": [
      ["Заявка", "онлайн"],
      ["Документы", "паспорт"],
      ["Доставка", "курьером"]
    ],
    "url": "https://trk.ppdu.ru/click/C1KQkyvA?erid=2SDnjbrXxdX"
  },
  {
    "cat": "credit",
    "partner": "ОТП Банк",
    "tag": "кредитная карта",
    "title": "Кредитная карта ОТП",
    "logo": "img/logos/otp.png",
    "tone": { "bg": "#3E8C2E", "ink": "#FFFFFF" },
    "headline": "Льготный период",
    "note": "рассрочка у партнёров банка",
    "specs": [
      ["Заявка", "онлайн за 5 минут"],
      ["Документы", "паспорт"],
      ["Решение", "быстрое"]
    ],
    "url": "https://trk.ppdu.ru/click/LZepKc8N?erid=2SDnjee1d3Q"
  },
  {
    "cat": "credit",
    "partner": "Кредит Европа Банк",
    "tag": "кредитная карта",
    "title": "Кредитная карта Европа Банк",
    "logo": "img/logos/crediteurope.svg",
    "tone": { "bg": "#0B3D91", "ink": "#FFFFFF" },
    "headline": "Рассрочка и грейс",
    "note": "покупки частями у партнёров",
    "specs": [
      ["Заявка", "онлайн"],
      ["Документы", "паспорт"],
      ["Доставка", "курьером"]
    ],
    "url": "https://trk.ppdu.ru/click/kjlLtHyG?erid=2SDnjdLFXE2"
  },
  {
    "cat": "credit",
    "partner": "Уралсиб",
    "tag": "кредитная карта",
    "title": "Кредитная карта Уралсиб",
    "logo": "img/logos/uralsib.png",
    "tone": { "bg": "#00558C", "ink": "#FFFFFF" },
    "headline": "Льготный период",
    "note": "кэшбэк и лимит на покупки",
    "specs": [
      ["Заявка", "онлайн"],
      ["Документы", "паспорт"],
      ["Решение", "в день обращения"]
    ],
    "url": "https://trk.ppdu.ru/click/vgi0iinf?erid=2SDnjbpvGx2"
  },

  {
    "cat": "mfo",
    "partner": "MoneyMan",
    "tag": "займ онлайн",
    "title": "MoneyMan",
    "logo": "img/logos/moneyman.png",
    "tone": { "bg": "#E4002B", "ink": "#FFFFFF" },
    "headline": "Деньги на карту",
    "note": "заявка онлайн, круглосуточно",
    "specs": [
      ["Документы", "паспорт"],
      ["Решение", "за несколько минут"],
      ["Получение", "на карту или счёт"]
    ],
    "url": "https://u-cpa.ru/offer/rs/2f7m19w2gnnli/11mb8h60kmi7v/?partner=257322&erid=2SDnjdpnedr&platform_id=75"
  },
  {
    "cat": "mfo",
    "partner": "А-Деньги",
    "tag": "займ онлайн",
    "title": "А-Деньги",
    "logo": "img/logos/adengi.png",
    "tone": { "bg": "#0F7A3D", "ink": "#FFFFFF" },
    "headline": "Деньги на карту",
    "note": "оформление без визита в офис",
    "specs": [
      ["Документы", "паспорт"],
      ["Заявка", "онлайн"],
      ["Получение", "на банковскую карту"]
    ],
    "url": "https://trk.ppdu.ru/click/KWmRdtRH?erid=2SDnjdr3sYP"
  },
  {
    "cat": "mfo",
    "partner": "Макс.Кредит",
    "tag": "займ онлайн",
    "title": "Макс.Кредит",
    "logo": "img/logos/maxcredit.png",
    "tone": { "bg": "#1F4FD8", "ink": "#FFFFFF" },
    "headline": "Деньги на карту",
    "note": "заявка занимает пару минут",
    "specs": [
      ["Документы", "паспорт"],
      ["Решение", "быстрое"],
      ["Получение", "онлайн"]
    ],
    "url": "https://u-cpa.ru/offer/rs/21yd3v7kmakrn/3djmgjlb309em/?partner=257322&erid=2SDnje5MAdY&platform_id=75"
  },
  {
    "cat": "mfo",
    "partner": "Умные наличные",
    "tag": "займ онлайн",
    "title": "Умные наличные",
    "logo": "img/logos/smartcash.svg",
    "tone": { "bg": "#12776B", "ink": "#FFFFFF" },
    "headline": "Деньги на карту",
    "note": "заявка онлайн без справок",
    "specs": [
      ["Документы", "паспорт"],
      ["Заявка", "онлайн"],
      ["Получение", "на карту"]
    ],
    "url": "https://u-cpa.ru/offer/rs/cw7ayux4qnjd/58scaykftfru/?partner=257322&erid=2SDnjePNNUs&platform_id=75"
  },
  {
    "cat": "mfo",
    "partner": "Свои люди",
    "tag": "займ онлайн",
    "title": "Свои люди",
    "logo": "img/logos/svoiludi.png",
    "tone": { "bg": "#C8102E", "ink": "#FFFFFF" },
    "headline": "Деньги на карту",
    "note": "онлайн-заявка круглосуточно",
    "specs": [
      ["Документы", "паспорт"],
      ["Решение", "быстрое"],
      ["Получение", "на карту или наличными"]
    ],
    "url": "https://trk.ppdu.ru/click/ubaX8R4I?erid=2SDnjcgFdx7"
  },
  {
    "cat": "mfo",
    "partner": "Joymoney",
    "tag": "займ онлайн",
    "title": "Joymoney",
    "logo": "img/logos/joymoney.png",
    "tone": { "bg": "#6D28D9", "ink": "#FFFFFF" },
    "headline": "Деньги на карту",
    "note": "оформление полностью онлайн",
    "specs": [
      ["Документы", "паспорт"],
      ["Заявка", "с телефона"],
      ["Получение", "на карту"]
    ],
    "url": "https://u-cpa.ru/offer/rs/3jmoqsu44hfmh/guucy3iihi7o/?partner=257322&erid=Kra241DJN&platform_id=75"
  },
  {
    "cat": "mfo",
    "partner": "МигКредит",
    "tag": "займ онлайн",
    "title": "МигКредит",
    "logo": "img/logos/migcredit.png",
    "tone": { "bg": "#C81E2D", "ink": "#FFFFFF" },
    "headline": "Деньги на карту",
    "note": "займы на срок до нескольких месяцев",
    "specs": [
      ["Документы", "паспорт"],
      ["Заявка", "онлайн"],
      ["Погашение", "частями по графику"]
    ],
    "url": "https://u-cpa.ru/offer/rs/1taevajyjg4qi/1ty2zfygzv33d/?partner=257322&erid=2SDnjeR39cC&platform_id=75"
  },
  {
    "cat": "mfo",
    "partner": "PLATIZA",
    "tag": "займ онлайн",
    "title": "PLATIZA",
    "logo": "img/logos/platiza.png",
    "tone": { "bg": "#E0162C", "ink": "#FFFFFF" },
    "headline": "Деньги на карту",
    "note": "решение по заявке онлайн",
    "specs": [
      ["Документы", "паспорт"],
      ["Заявка", "онлайн"],
      ["Получение", "на карту"]
    ],
    "url": "https://u-cpa.ru/offer/rs/393eei9i10zbi/31tn3t15ssz4r/?partner=257322&erid=2SDnje8UqRM&platform_id=75"
  },
  {
    "cat": "mfo",
    "partner": "Деньги на дом",
    "tag": "займ онлайн",
    "title": "Деньги на дом",
    "logo": "img/logos/denginadom.png",
    "tone": { "bg": "#1B7F3B", "ink": "#FFFFFF" },
    "headline": "Деньги на карту",
    "note": "займ без визита в офис",
    "specs": [
      ["Документы", "паспорт"],
      ["Заявка", "онлайн"],
      ["Получение", "на карту"]
    ],
    "url": "https://u-cpa.ru/offer/rs/2ainv19neaafo/b3bhb8kl1ocw/?partner=257322&erid=2SDnjdr8aMy&platform_id=75"
  },
  {
    "cat": "mfo",
    "partner": "Rocketman",
    "tag": "займ онлайн",
    "title": "Rocketman",
    "logo": "img/logos/rocketman.png",
    "tone": { "bg": "#1D4ED8", "ink": "#FFFFFF" },
    "headline": "Деньги на карту",
    "note": "быстрая онлайн-заявка",
    "specs": [
      ["Документы", "паспорт"],
      ["Решение", "за минуты"],
      ["Получение", "на карту"]
    ],
    "url": "https://trk.ppdu.ru/click/QxLmqMlg?erid=2SDnjdobmrK"
  },
  {
    "cat": "mfo",
    "partner": "Быстроденьги",
    "tag": "займ онлайн",
    "title": "Быстроденьги",
    "logo": "img/logos/bistrodengi.png",
    "tone": { "bg": "#D81E05", "ink": "#FFFFFF" },
    "headline": "Деньги на карту",
    "note": "онлайн или в отделении сети",
    "specs": [
      ["Документы", "паспорт"],
      ["Заявка", "онлайн"],
      ["Получение", "на карту или наличными"]
    ],
    "url": "https://u-cpa.ru/offer/rs/2b3lkyean1iop/3ojk5jvvzs96o/?partner=257322&erid=2SDnjefoJTK&platform_id=75"
  },
  {
    "cat": "mfo",
    "partner": "Срочно деньги",
    "tag": "займ онлайн",
    "title": "Срочно деньги",
    "logo": "img/logos/srochnodengi.png",
    "tone": { "bg": "#0F62C4", "ink": "#FFFFFF" },
    "headline": "Деньги на карту",
    "note": "заявка круглосуточно",
    "specs": [
      ["Документы", "паспорт"],
      ["Заявка", "онлайн"],
      ["Получение", "на карту или наличными"]
    ],
    "url": "https://trk.ppdu.ru/click/UM07e63B?erid=2SDnjeVT5Gb"
  },
  {
    "cat": "mfo",
    "partner": "Турбозайм",
    "tag": "займ онлайн",
    "title": "Турбозайм",
    "logo": "img/logos/turbozaim.svg",
    "tone": { "bg": "#E4572E", "ink": "#FFFFFF" },
    "headline": "Деньги на карту",
    "note": "оформление за несколько минут",
    "specs": [
      ["Документы", "паспорт"],
      ["Заявка", "онлайн"],
      ["Получение", "на карту"]
    ],
    "url": "https://u-cpa.ru/offer/rs/3id6cucfpph05/sexwzl0brtic/?partner=257322&erid=2SDnjdBm4Gu&platform_id=75"
  },
  {
    "cat": "mfo",
    "partner": "OneClickMoney",
    "tag": "займ онлайн",
    "title": "OneClickMoney",
    "logo": "img/logos/oneclickmoney.png",
    "tone": { "bg": "#0B7285", "ink": "#FFFFFF" },
    "headline": "Деньги на карту",
    "note": "заявка в один клик",
    "specs": [
      ["Документы", "паспорт"],
      ["Решение", "автоматическое"],
      ["Получение", "на карту"]
    ],
    "url": "https://trk.ppdu.ru/click/rhMBLqtx?erid=2SDnjbstvYw"
  }
];
