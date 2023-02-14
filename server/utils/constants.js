// SETTINGS SERVER
const MONGO_URL_DEV = 'mongodb://localhost:27017/vehicleControl';
const JWT_DEV = 'JWT_DEV';

// SEND ERROR MESSAGE
const BAD_EMAIL_MESSAGE = 'Неверный адрес почты';
const ERROR_401_MESSAGE = "Необходима авторизация!"
const ERROR_401_BAD_REQ_MESSAGE = 'Запрос не был применён, поскольку ему не хватает действительных учётных данных';
const ERROR_404_PAGE_MESSAGE = 'Запрашиваемый адрес не найден, попробуйте снова'
const BAD_PHONE_NUMBER = 'Неферный формат номера телефона';
const BAD_GOS_NUMBER = "Неверный формат гос. номера автомобиля";

// RATE LIMITER
const LIMIT_REQUEST = 100; // количество запросов на сервер
const LIMIT_TIME_REQUEST = 15 * 60 * 1000; // (15 * 60 * 1000 = 15 min) временной отрезок для запросов

module.exports = {
  LIMIT_REQUEST,
  LIMIT_TIME_REQUEST,
  BAD_GOS_NUMBER,
  BAD_EMAIL_MESSAGE,
  ERROR_401_MESSAGE,
  ERROR_401_BAD_REQ_MESSAGE,
  ERROR_404_PAGE_MESSAGE,
  BAD_PHONE_NUMBER,
  MONGO_URL_DEV,
  JWT_DEV,
};
