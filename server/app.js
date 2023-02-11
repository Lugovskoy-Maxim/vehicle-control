require('dotenv').config(); // для работы с env на сервере, в env находится информация которую нельзя вставлять в код
const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const { NODE_ENV, MONGO_URL_PROD } = process.env;
const { MONGO_URL_DEV } = require('./utils/constants');

const { PORT = 3000, MONGO_URL = NODE_ENV === 'prodation' ? MONGO_URL_PROD : MONGO_URL_DEV } = process.env; // если сервер запущен на проде тогда используется адрес БД с файла .env

const app = express();
// app.use(cors);
// app.use(requestLogger);  // Логер запросов
app.use(cookieParser()); // анализирует файлЫ cookie, прикрепленных к запросу
app.use(express.json()); // анализирует входящие запросы с полезной нагрузкой JSON
mongoose.set('strictQuery', false); // выключение строгого режима для filter (убрал ошибку у монгус 7 версии)
mongoose.connect(MONGO_URL); // Подключение к БД

app.use(helmet);

app.listen(PORT, () => {
  console.log(`Приложение запущщено. Активный порт: ${PORT}`);
});
