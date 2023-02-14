const router = require('express').Router();
const {
  // validateVehicleId
} = require('../middlewares/validation');

const {
  findMeVehicle,
  findVehicleById,
  updateVehicle,
  getAllVehicle,
  removeVehicle,
} = require('../controllers/users');

router.get('/vehicle/me', findMeVehicle);
router.get('/vehicle/all', getAllVehicle); // нужно защитить от обычных пользователей
router.get('/users/:id', validateVehicleId, findVehicleById);
router.patch('/vehicle/:id', validateVehicleId, updateVehicle);
router.delete('/vehicle/:id', validateVehicleId, removeVehicle);

module.exports = router;