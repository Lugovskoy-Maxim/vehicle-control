const Vehicle = require('../models/vehicles');
const {
  NotFoundError,
  BadRequestError,
  ConflictError,
  ForbiddenError,
} = require('../errors/index');

const {
  ERROR_400_MESSAGE,
  ERROR_403_MESSAGE,
  ERROR_404_VEHICLE_MESSAGE,
  ERROR_404_VEHICLE_BAD_ID_MESSAGE,
  ERROR_409_REG_NUM_MESSAGE,
  SUCCESSFUL_ADD_VEHICLE_MESSAGE,
  REMOVE_SUCCESSFULLY_MESSAGE,
} = require('../Utils/constants');

module.exports.addVehicle = (req, res, next) => {
  const { cat, regNumber, company, contracts,  } = req.body
  Vehicle.create({
    regNumber,
    cat,
    company,
    contracts,
    owner: req.user._id,
  })
  .then((vehicle) => res.status(201).send({ message: SUCCESSFUL_ADD_VEHICLE_MESSAGE, vehicle: vehicle }))
  .catch((err) => {
    if (err.name === 'CastError' || err.name === 'ValidationError') {
      next(new BadRequestError(ERROR_400_MESSAGE));
      return;
    }
    if (err.name === 'MongoServerError' && err.code === 11000) {
      console.log(err);
      next(new ConflictError(ERROR_409_REG_NUM_MESSAGE));
      return;
    }
    next(err)
  })
}

module.exports.findMeVehicle = (req, res, next) => {
  console.log(req.user)
  Vehicle.find({ owner: req.user._id})
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

module.exports.getAllVehicle = (req, res, next) => {
  Vehicle.find({}) // пустое значение возвращет все результаты
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
  Vehicle.findByIdAndUpdate(
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

// удаление без проверки владельца записи в БД
// module.exports.removeVehicle = (req, res, next) => {
//   User.findByIdAndRemove(req.params.id)
//     .then((vehicle) => res.send({ vehicle }))
//     .catch((err) => {
//       if (err.name === 'CastError' || err.name === 'ValidationError') {
//         next(new BadRequestError(ERROR_400_MESSAGE));
//         return;
//       }
//       next(err);
//     });
// };

module.exports.removeVehicle = (req, res, next) => {
  Vehicle.findById(req.params.id)
    .orFail(new NotFoundError(ERROR_404_VEHICLE_MESSAGE))
    .then((vehicle) => {
      const localOwner = vehicle.owner.toString() === req.user._id;
      if (localOwner) {
        return vehicle.remove()
          .then(() => res.send({ message: REMOVE_SUCCESSFULLY_MESSAGE }));
      }
      throw new ForbiddenError(ERROR_403_MESSAGE);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError(ERROR_400_MESSAGE));
        return;
      }
      next(err);
    });
};