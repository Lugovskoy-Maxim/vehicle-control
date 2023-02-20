const router = require('express').Router();
// const {
//   validatePassId
// } = require('../middlewares/validation');

const {
  findPass,
  findPassById,
  updatePass,
  removePass,
} = require('../controllers/users');

router.get('/pass/', findPass);
router.get('/pass/:id', findPassById);
router.patch('/pass/:id', updatePass);
router.delete('/pass/:id', removePass);

module.exports = router;