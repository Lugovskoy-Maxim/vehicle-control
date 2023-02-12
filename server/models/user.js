const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const AuthError = require('../errors/AuthError');
const { BAD_EMAIL_MESSAGE, ERROR_401_BAD_REQ_MESSAGE, BAD_PHONE_NUMBER } = require('../Utils/constants');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: true,
    },
    surname: { // фамилия Нужно только для физ лиц и ИП но будет солиднее с ней
      type: String,
      minlength: 2,
      maxlength: 50,
      required: true,
    },
    middleName: { // фамилия не обязательно нужно для физ лиц и ИП
      type: String,
      minlength: 2,
      maxlength: 50,
    },
    number: {
      type: String,
      validate: {
        validator(v) {
          return /^sdsd/.test(v);
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
