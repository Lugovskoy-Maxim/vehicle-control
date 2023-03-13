export const configByEnv = {
  production: {
    env: 'production',
    apiMainBaseUrl: '',
    apiMainAuthToken: '',
  },
  development: {
    env: 'development',
    apiMainBaseUrl: '',
    apiMainAuthToken: '',
  },
};

export const NavLinks = Object.freeze([
  // Техника
  {
    name: 'Техника',
    path: '/vehicles',
  },
  // Личный кабинет
  {
    name: 'Личный кабинет',
    path: '/lk'
  },
  // Контакты
  {
    name: 'Контакты',
    path: '/contacts'
  },
  // Статистика
  {
    name: 'Показатели',
    path: '/stats'
  }
]);

export const HTTP_METHOD = Object.freeze({
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  PATH: 'PATCH',
  DELETE: 'DELETE',
});

export const ROUTE = Object.freeze({
  MAIN: '/',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  SIGNOUT: '/signout',
  PROFILES: '/profiles',
  PASS: '/pass',
  ABOUT: '/about',
});
