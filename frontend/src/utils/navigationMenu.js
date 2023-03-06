// MAIN MENU AND USER
export const mainMenu = [
  {
    path: "/",
    name: "Главная",
  },
  {
    path: "/news",
    name: "Объявления",
  },
  {
    path: "/profile",
    name: "Мой профиль",
  },
];

// VEHICLES AND PASS MENU
export const userMenu = [
  {
    name: "Техника",
    more: [
      {
        path: "/vehicle/add",
        name: "Добавить технику",
      },
      {
        path: "/vehicle/me",
        name: "Моя техника",
      },
      {
        path: "/vehicle/all",
        name: "Вся техника",
      },
    ],
  },
  {
    path: "/pass",
    name: "Меню пропусков",
  },
];

// MY COMPANY MENU
export const companyMenu = [
  {
    path: "/about",
    name: "О компании",
  },
  {
    path: "/contacts",
    name: "Контакты",
  },
  {
    path: "/job",
    name: "Вакансии",
  },
];
