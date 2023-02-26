const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const AuthError = require('../errors/auth');
const { BAD_EMAIL_MESSAGE, ERROR_401_BAD_REQ_MESSAGE, BAD_PHONE_NUMBER } = require('../Utils/constants');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: true,
    },
    lastName: { // фамилия нужно только для физ лиц и ИП но будет солиднее с ней
      type: String,
      minlength: 2,
      maxlength: 50,
      required: true,
    },
    middleName: { // отчество не обязательно нужно для физ лиц и ИП
      type: String,
      minlength: 2,
      maxlength: 50,
    },
    cookieAccept: {
      type: Boolean,
      default: false, // если пользователь принял куки тогда можно проводить аунтефикацию через них если нет использовать локально хранилище
    },
    number: {  // номер телефона не обязательно
      type: String,
      validate: {
        validator(v) {
          return /^((8|\+374|\+994|\+995|\+375|\+7|\+380|\+38|\+996|\+998|\+993)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/.test(v);
        },
        message: () => BAD_PHONE_NUMBER,
      },
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: {
        validator(v) {
          return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(v);
        },
        message: () => BAD_EMAIL_MESSAGE,
      },
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      default: 'user', // для выдачи прав админа
      enum: ['user', 'admin'],
    }
  },
  {
    versionKey: false,
  },
);

// проверка логина а после пароля (по очереди что бы не грузить сервер лишней работой)
userSchema.statics.findUserByCredentials = function checkUser(email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        throw new AuthError(ERROR_401_BAD_REQ_MESSAGE);
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new AuthError(ERROR_401_BAD_REQ_MESSAGE);
          }

          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
