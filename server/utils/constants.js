// SETTINGS SERVER
const MONGO_URL_DEV = 'mongodb://localhost:27017/vehicleControl';
const JWT_DEV = 'JWT_DEV';

// SEND ERROR MESSAGE
const ERROR_400_MESSAGE = 'Плохой запрос! Проверте правильность введеных данных и повторите снова!';
  // user
const BAD_EMAIL_MESSAGE = 'Неверный адрес почты';
const ERROR_401_MESSAGE = 'Необходима авторизация!'
const ERROR_401_BAD_REQ_MESSAGE = 'Запрос не был применён, поскольку ему не хватает действительных учётных данных';
const ERROR_404_PAGE_MESSAGE = 'Запрашиваемый адрес не найден, попробуйте снова'
const ERROR_404_USER_MESSAGE ='Пользователь не найден, попробуйте снова';
const ERROR_404_USER_BAD_ID_MESSAGE = 'Неверный id пользователя, проверте введенную информацию';
  //  vehicle
const BAD_PHONE_NUMBER = 'Неферный формат номера телефона';
const BAD_GOS_NUMBER = 'Неверный формат гос. номера автомобиля';
const ERROR_404_VEHICLE_MESSAGE = 'Техника не найдена, попробуйте снова';
const ERROR_404_VEHICLE_BAD_ID_MESSAGE = 'Неверный id техники, проверте введенную информацию';
const ERROR_409_REG_NUM_MESSAGE = 'Транспортное средство с таким номером уже существует!';

// SUCCESSFUL
const SUCCESSFUL_REGISTATION_MESSAGE = 'Вы успешно зарегистрированы!';

// RATE LIMITER
const LIMIT_REQUEST = 100; // количество запросов на сервер
const LIMIT_TIME_REQUEST = 900000; // (15 * 60 * 1000 = 900000 миллисекунд = 15 min) временной отрезок для запросов

module.exports = {
  LIMIT_REQUEST,
  LIMIT_TIME_REQUEST,
  BAD_GOS_NUMBER,
  BAD_EMAIL_MESSAGE,
  ERROR_400_MESSAGE,
  ERROR_401_MESSAGE,
  ERROR_401_BAD_REQ_MESSAGE,
  ERROR_404_PAGE_MESSAGE,
  ERROR_404_VEHICLE_MESSAGE,
  ERROR_404_VEHICLE_BAD_ID_MESSAGE,
  ERROR_404_USER_MESSAGE,
  ERROR_404_USER_BAD_ID_MESSAGE,
  ERROR_409_REG_NUM_MESSAGE,
  SUCCESSFUL_REGISTATION_MESSAGE,
  BAD_PHONE_NUMBER,
  MONGO_URL_DEV,
  JWT_DEV,
};
