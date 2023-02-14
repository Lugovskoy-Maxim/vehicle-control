const rateLimit = require('express-rate-limit');
const { LIMIT_REQUEST, LIMIT_TIME_REQUEST } = require('../utils/constants');

const limiter = rateLimit({
  windowMs: LIMIT_TIME_REQUEST, // 15 минут временной лимит
  max: LIMIT_REQUEST, // лимит на 100 запросов за 15 минут
  standardHeaders: true, // Возвращять ответ о том что лимит превышен
  legacyHeaders: false, // Отключает заголовки `X-RateLimit-*`
});

module.exports = limiter;