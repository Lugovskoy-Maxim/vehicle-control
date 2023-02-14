require('dotenv').config(); // для работы с env на сервере, в env находится информация которую нельзя вставлять в код
const auth = require('./middlewares/auth');
const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const limiter = require('./middlewares/rateLimiter');

const { NODE_ENV, MONGO_URL_PROD } = process.env;
const { MONGO_URL_DEV } = require('./utils/constants');

const { PORT = 3000, MONGO_URL = NODE_ENV === 'prodation' ? MONGO_URL_PROD : MONGO_URL_DEV } = process.env; // если сервер запущен на проде тогда используется адрес БД с файла .env

const app = express();
app.use(helmet());
// app.use(cors);
// app.use(requestLogger);  // Логер запросов
app.use(cookieParser()); // анализирует файлЫ cookie, прикрепленных к запросу
app.use(express.json()); // анализирует входящие запросы с полезной нагрузкой JSON
mongoose.set('strictQuery', false); // выключение строгого режима для filter (убрал ошибку у монгус 7 версии)
app.use(limiter()); // ограничене количества запросов за 15 минут
mongoose.connect(MONGO_URL); // Подключение к БД


app.listen(PORT, () => {
  console.log(`Приложение запущщено. Активный порт: ${PORT}`);
});
