const router = require('express').Router();
const auth = require('../middlewares/auth');
const { ERROR_404_PAGE_MESSAGE } = require('../utils/constants')


// router.use('/signin', validateAuth, login);
// router.use('/signup', validateRegister, registrations);

router.use(auth);
// При работе с cookie придется отправлять запрос для удаления http: only
router.get('/signout', (req, res) => {
  res.clearCookie('jwtToken').send({ message: 'Выход' });
});

router.use(routesUser);
router.use(vehicle);
router.use(pass);

router.use('/*', () => { throw new NotFoundError(ERROR_404_PAGE_MESSAGE); }); // при переходе на несуществующий адресc

module.exports = router;