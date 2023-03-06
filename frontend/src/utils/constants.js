export const configByEnv= {
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

export const HTTP_METHOD = Object.freeze({
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  PATH: 'PATCH',
  DELETE: 'DELETE',
});

export const ROUTE = Object.freeze({
  MAIN: '/',
  SIGNIN: "/signin",
  SIGNUP: '/signup',
  SIGNOUT: '/signout',
  PROFILES: '/profiles',
  PASS: '/pass',
  ABOUT: '/about',
})