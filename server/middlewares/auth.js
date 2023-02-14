const { verify } = require('jsonwebtoken');
const AuthError = require('../errors/AuthError'); // ошибка 404

const { JWT_SECRET, NODE_ENV } =  process.env;
const { JWT_DEV, ERROR_401_MESSAGE } = require('../Utils/constants');

const auth = (req, res, next) => {
  const token = req.cookies.authToken ? req.cookies.authToken : res.authToken ;
  // если не пришло куки проверить в запросе токен
  // сделал что бы реализовать хранение токена в localSotage если пользователь не приймет использование куки
  if (!token) {
    throw new AuthError(ERROR_401_MESSAGE);
  }
  let payload;
  try {
    payload = verify(token, NODE_ENV === 'production' ? JWT_SECRET : JWT_DEV); // если не продакшен то используется JWT_DEV
  } catch (err) {
    throw new AuthError(ERROR_401_MESSAGE);
  }

  req.user = payload; // записываем пейлоуд в объект запроса

  return next(); // пропускаем запрос дальше
};

module.exports = auth;