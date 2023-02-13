const MONGO_URL_DEV = 'mongodb://localhost:27017/vehicleControl';
const JWT_DEV = 'JWT_DEV';
const BAD_EMAIL_MESSAGE = 'Неверный адрес почты';
const ERROR_401_BAD_REQ_MESSAGE = 'Запрос не был применён, поскольку ему не хватает действительных учётных данных';
const BAD_PHONE_NUMBER = 'Неферный формат номера телефона';
const BAD_GOS_NUMBER = "Неверный формат гос. номера автомобиля";

module.exports = {
  BAD_GOS_NUMBER,
  BAD_EMAIL_MESSAGE,
  ERROR_401_BAD_REQ_MESSAGE,
  BAD_PHONE_NUMBER,
  MONGO_URL_DEV,
  JWT_DEV,
};
