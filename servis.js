const servis = [
  {
    id: 1,
    title: "Ginekologiya",
    description:
      "Expert Medical Clinicda sizga professional ginekologlar ko‘magi, to‘liq tekshiruvlar va individual yondashuv taklif qilinadi. Biz reproduktiv salomatligingizni saqlash va muammolarni hal qilishda yordam beramiz.",
    image: "./images/xizmat-img11.svg",
  },
  {
    id: 2,
    title: "Estetik ginekologiya",
    description:
      "Expert Medical Clinic estetik ginekologiya xizmatlarini taklif qiladi. Bu yo‘nalishda tashqi ko‘rinishni estetik jihatdan yaxshilash, ayollarga o‘ziga ishonch bag‘ishlash maqsad qilinadi.",
    image: "./images/xizmat-img10.svg",
  },
  {
    id: 3,
    title: "Dermatokosmetologiya",
    description:
      "Expert Medical klinikasida dermatokosmetologik muolajalar: teri muammolarini bartaraf etish, yoshartirish va boshqa kosmetik xizmatlar ko‘rsatiladi.",
    image: "./images/xizmat-img9.svg",
  },
  {
    id: 4,
    title: "Dermatologiya",
    description:
      "Expert Medical klinikasida dermatologik muolajalar: teri, soch va tirnoq muammolarini hal qilishda sizga yordam beramiz.",
    image: "./images/xizmat-img8.svg",
  },
  {
    id: 5,
    title: "Trikologiya",
    description:
      "Trikologiya xizmatlari: soch to‘kilishini davolash, bosh terisi muammolarini aniqlash va muolaja qilishda bizga murojaat qiling.",
    image: "./images/xizmat-img7.svg",
  },
  {
    id: 6,
    title: "Plastik jarrohlik",
    description:
      "Expert Medicalda plastik jarrohlik: burun, yuz, tana shakllantirish, rinoplastika, liposaktsiya va boshqa muolajalar mavjud.",
    image: "./images/xizmat-img6.svg",
  },
  {
    id: 7,
    title: "UTT",
    description:
      "Zamonaviy UTT xizmatlari: yuqori sifatli ultratovush tekshiruvlari orqali ichki organlaringiz holatini to‘liq tahlil qilamiz.",
    image: "./images/xizmat-img5.svg",
  },
  {
    id: 8,
    title: "Endokrinologiya",
    description:
      "Gormonlar, qalqonsimon bez va metabolizm muammolarini aniqlash va davolash bo‘yicha endokrinologlarimiz xizmatlaringizda.",
    image: "./images/xizmat-img4.svg",
  },
  {
    id: 9,
    title: "Kosmetologiya",
    description:
      "Yuzni tozalash, yoshartirish, parvarishlash va boshqa zamonaviy kosmetologik xizmatlar siz uchun mavjud.",
    image: "./images/xizmat-img3.svg",
  },
  {
    id: 10,
    title: "Lazerli kosmetologiya",
    description:
      "Lazer yordamida soch olib tashlash, teri muammolarini bartaraf etish va yoshartirish xizmatlari siz uchun xizmatda.",
    image: "./images/xizmat-img2.svg",
  },
  {
    id: 11,
    title: "Laboratoriya tahlillar",
    description:
      "Har xil tibbiy ko‘rsatkichlar bo‘yicha laborator tahlillar: qon, siydik va boshqa namunalar asosida aniq tashxis qo‘yiladi.",
    image: "./images/xizmat-img1.svg",
  },
];

let mutaxasis = [
  {
    id: 1,
    name: "Nargiza Farmonova",
    description: "Alergolog",
    image: "./images/mutaxasis-img1.svg",
  },
  {
    id: 2,
    name: "Miromdjan Dinara",
    description: "Sakhalarovchi",
    image: "./images/mutaxasis-img2.svg",
  },
  {
    id: 3,
    name: "Muminov Iqbol",
    description: "Yutaklar uchun",
    image: "./images/mutaxasis-img3.svg",
  },
  {
    id: 4,
    name: "Oumoz Avaz Farmonov",
    description: "Dizimli",
    image: "./images/mutaxasis-img4.svg",
  },
  {
    id: 5,
    name: "Sasteva Shirinova",
    description: "Firenolog",
    image: "./images/mutaxasis-img5.svg",
  },
  {
    id: 6,
    name: "Magnipova Iroda",
    description: "Dizimli uchun",
    image: "./images/mutaxasis-img6.svg",
  },
  {
    id: 7,
    name: "Mustao Gulmira",
    description: "Vladimirova",
    image: "./images/mutaxasis-img7.svg",
  },
  {
    id: 8,
    name: "Tajibkhan Ergashev",
    description: "Teni",
    image: "./images/mutaxasis-img8.svg",
  },
  {
    id: 9,
    name: "Ummona Xolmatova",
    description: "Alergolog",
    image: "./images/mutaxasis-img9.svg",
  },
];

const blog = [
  {
    id: 12,
    title: "Как остановить облысение?",
    description:
      "Вас беспокоит выпадение и облысение? Это распространенное явление, с которым сталкиваются многие люди...",
    date: "2022-03-17 01:35:41",
    image: "./images/yangilik-img1.svg",
  },
  {
    id: 13,
    title: "Поздравляем с праздником Навруз!",
    description:
    "С Наврузом! Это распространенное явление, с которым многие люди сталкиваются многие люди",
    date: "2022-03-17 01:57:39",
    image: "./images/yangilik-img2.svg",
  },
  {
    id: 14,
    title: "TikTok и его влияние на пластическую хирургию",
    description:
    "В современную цифровую эпоху распространение информации через медиа ускорилось...",
    date: "2022-03-19 10:00:03",
    image: "./images/yangilik-img3.svg",
  },
  {
    id: 15,
    title: "Новшества в пластической хирургии",
    description:
    "В 2024 году тренды пластической хирургии отражают изменения в общественных представлениях о красоте.",
    date: "2022-03-19 11:27:41",
    image: "./images/yangilik-img4.svg",
  },
  {
    id: 16,
    title: "Лазерная шлифовка века в Expert Medical Clinic",
    description:
    "Друзья, как ваши дела? Сегодня мы поговорим о новой процедуре - лазерное блефаропластика и лазерная шлифовка века...",
    date: "2022-03-19 12:47:43",
    image: "./images/yangilik-img5.svg",
  },
];
