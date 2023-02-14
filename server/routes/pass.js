const router = require('express').Router();
const {
  validatePassId
} = require('../middlewares/validation');

const {
  findPass,
  findPassById,
  updatePass,
  removePass,
} = require('../controllers/users');

router.get('/pass/', findPass);
router.get('/pass/:id', validatePassId, findPassById);
router.patch('/pass/:id', validatePassId, updatePass);
router.delete('/pass/:id', validatePassId, removePass);

module.exports = router;