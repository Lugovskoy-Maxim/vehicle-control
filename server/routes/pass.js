const router = require('express').Router();
// const {
//   validatePassId
// } = require('../middlewares/validation');

const {
  addPass,
  getAllPass,
  findPassById,
  updatePass,
  removePass,
} = require('../controllers/pass');

router.patch('/pass/', addPass);
router.get('/pass/', getAllPass);
router.get('/pass/:id', findPassById);
router.patch('/pass/:id', updatePass);
router.delete('/pass/:id', removePass);

module.exports = router;