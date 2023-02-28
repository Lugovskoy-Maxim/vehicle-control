const Pass = require('../models/pass');
const {
  NotFoundError,
  BadRequestError,
  ConflictError,
} = require('../errors/index');
const {
  ERROR_400_MESSAGE,
  REMOVE_SUCCESSFULLY_MESSAGE,
  ERROR_404_PASS_MESSAGE,
  ERROR_404_PASS_BAD_ID_MESSAGE

} = require('../Utils/constants');

module.exports.addPass = (req, res, next) => {
  const { object, vehicles, from, to } = req.body
  Pass.create({
    object, vehicles, from, to
  })
  .then((pass) => res.status(201).send({ message: SUCCESSFUL_ADD_PASS_MESSAGE, pass: pass }))
  .catch((err) => {
    console.log(err)
    if (err.name === 'CastError' || err.name === 'ValidationError') {
      next(new BadRequestError(ERROR_400_MESSAGE));
      return;
    }
    next(err)
  })
}

module.exports.getAllPass = (req, res, next) => {
  Pass.find({}) // пустое значение возвращет все результаты
    .orFail(new NotFoundError(ERROR_404_PASS_MESSAGE))
    .then((Pass) => res.send(Pass))
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new NotFoundError(ERROR_404_PASS_BAD_ID_MESSAGE));
        return;
      }
      next(err);
    });
};

module.exports.findPassById = (req, res, next) => {
  Pass.findById(req.params.id)
    .orFail(new NotFoundError(ERROR_404_PASS_MESSAGE))
    .then((Pass) => res.send(Pass))
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new NotFoundError(ERROR_404_PASS_BAD_ID_MESSAGE));
        return;
      }
      next(err);
    });
};

module.exports.updatePass = (req, res, next) => {
  const { object, Passs, from, to, update } = req.body;
  Pass.findByIdAndUpdate(
    req.params.id,
    { object, Passs, from, to, update },
    { new: true, runValidators: true },
  )
    .then((Pass) => res.send({ Pass }))
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

module.exports.removePass = (req, res, next) => {
  Pass.findById(req.params.id)
    .orFail(new NotFoundError(ERROR_404_Pass_MESSAGE))
    .then((Pass) => {
      const localOwner = Pass.owner.toString() === req.user._id;
      if (localOwner) {
        return Pass.remove()
          .then(() => res.send({ message: REMOVE_SUCCESSFULLY_MESSAGE }));
      }
      if(req.user.rights === 'admin'){
        return Pass.remove()
          .then(() => res.send({ message: REMOVE_SUCCESSFULLY_MESSAGE }));
      }
      throw new ForbiddenErrors(ERROR_403_MESSAGE);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError(ERROR_400_MESSAGE));
        return;
      }
      next(err);
    });
};