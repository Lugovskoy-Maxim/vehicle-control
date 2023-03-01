const router = require('express').Router();

const {
  addVehicle,
  findMeVehicle,
  findVehicleById,
  updateVehicle,
  getAllVehicle,
  removeVehicle,
} = require('../controllers/vehicles');

router.patch('/vehicle/add', addVehicle);
router.get('/vehicle/me', findMeVehicle);
router.get('/vehicle/all', getAllVehicle); // нужно защитить от обычных пользователей
router.get('/vehicle/:id', findVehicleById);
router.patch('/vehicle/:id', updateVehicle);
router.delete('/vehicle/:id', removeVehicle);

module.exports = router;