// клиентские
const BadRequestError = require('./badRequest'); // 400 "Плохой запрос"
const AuthError = require('./auth') // 401 "Неавторизованно"
const ForbiddenError = require('./forbidden'); // 403 "Запрещено"
const NotFoundError = require('./notFound'); // 404 "Не найден"
const ConflictError = require('./conflict'); // 409 "Конфликт"
// серверные
const InternalServer = require('./internal') // 500 "Внутренняя ошибка сервера"


module.exports = {
  AuthError,
  NotFoundError,
  BadRequestError,
  ForbiddenError,
  ConflictError,
  InternalServer,
};