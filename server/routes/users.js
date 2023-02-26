const router = require('express').Router();
// const {
//   validateUserInfo,
//   validateUserId
// } = require('../middlewares/validation');
const adminRole = require('../middlewares/adminRole')

const {
  findUserbyId,
  updateUser,
  getUserInfo,
  updateRoleUser
} = require('../controllers/users');

router.get('/users/me', getUserInfo);
router.patch('/users/me', updateUser);
router.get('/users/:id', findUserbyId);
router.patch('/users/:id', adminRole, updateRoleUser); // только для пользователей с правами администратора

module.exports = router;