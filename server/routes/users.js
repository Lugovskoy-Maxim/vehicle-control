const router = require('express').Router();
// const {
//   validateUserInfo,
//   validateUserId
// } = require('../middlewares/validation');
const adminRights = require('../middlewares/adminRights')

const {
  findUserbyId,
  updateUser,
  getUserInfo,
  updateRightsUser
} = require('../controllers/users');

router.get('/users/me', getUserInfo);
router.patch('/users/me', updateUser);
router.get('/users/:id', findUserbyId);
router.patch('/users/:id', adminRights, updateRightsUser); // только для пользователей с правами администратора

module.exports = router;