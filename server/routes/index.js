const router = require('express').Router();
const auth = require('../middlewares/auth');
const user = require('./users');
const vehicle = require('./vehicle');
const pass = require('./pass');
const { ERROR_404_PAGE_MESSAGE } = require('../utils/constants')


router.use('/signin', validateAuth, login);
router.use('/signup', validateRegister, registrations);
// Защищаю все последующие роуте авторизациейы
router.use(auth);
// При работе с cookie придется отправлять запрос для удаления http: only
router.get('/signout', (req, res) => {
  res.clearCookie('jwtToken').send({ message: 'Выход' });
});

router.use(user);  // Роутер пользователей
router.use(vehicle);  // Роутер техники
router.use(pass);  // Роутер пропусков(объектов)
// router.use(news); // Роутер объявлений
// router.use(registerContracts); // Роутер договоров

router.use('/*', () => { throw new NotFoundError(ERROR_404_PAGE_MESSAGE); }); // при переходе на несуществующий адресc

module.exports = router;