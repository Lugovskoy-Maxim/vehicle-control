import { createContext } from 'react';

export const defaultUser = {
  _id: '',
  firstName: '',
  lastName: '',
  avatar: '',
  cookieAccept: false,
  email: '',
  token: '',
  isAuth: function isAuth() {
    return (typeof this.token === 'string') && (this.token.length > 0);
  },
};

export const UserContext = createContext(defaultUser);