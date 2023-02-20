// findMeVehicle,
// updateVehicle,
// getAllVehicle,
// removeVehicle,

const Vehicle = require('../models/vbehicles');
const {
  // NotFoundError,
  // BadRequestError,
  // ConflictError,
} = require('../errors/index');

const {
  ERROR_400_MESSAGE,
  ERROR_404_VEHICLE_MESSAGE,
  ERROR_404_VEHICLE_BAD_ID_MESSAGE,
  ERROR_409_REG_NUM_MESSAGE,
} = require('../Utils/constants');

module.exports.addVehicle = (req, res, next) => {
  Vehicle.create({

  })
  .then((vehicle) => res.status(201).send({ message: SUCCESSFUL_ADD_VEHICLE_MESSAGE, vehicle: vehicle }))
  .catch((err) => {
    if (err.name === 'CastError' || err.name === 'ValidationError') {
      next(new BadRequestError(ERROR_400_MESSAGE));
      return;
    }
    if (err.name === 'MongoServerError' && err.code === 11000) {
      next(new ConflictError(ERROR_409_REG_NUM_MESSAGE));
      return;
    }
    next(err)
  })
}

module.exports.findVehicleById = (req, res, next) => {
  Vehicle.findById(req.params.id)
    .orFail(new NotFoundError(ERROR_404_VEHICLE_MESSAGE))
    .then((vehicle) => res.send(vehicle))
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new NotFoundError(ERROR_404_VEHICLE_BAD_ID_MESSAGE));
        return;
      }
      next(err);
    });
};

module.exports.updateVehicle = (req, res, next) => {
  const { cat, regNumber, company, contracts } = req.body;
  User.findByIdAndUpdate(
    req.params.id,
    { cat, regNumber, company, contracts },
    { new: true, runValidators: true },
  )
    .then((vehicle) => res.send({ vehicle }))
    .catch((err) => {
      if (err.name === 'CastError' || err.name === 'ValidationError') {
        next(new BadRequestError(ERROR_400_MESSAGE));
        return;
      }
      if (err.name === 'MongoServerError' && err.code === 11000) {
        next(new ConflictError(ERROR_409_REG_NUM_MESSAGE));
        return;
      }
      next(err);
    });
};