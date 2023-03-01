const Pass = require('../models/pass');
const User = require('../models/users');
const {
  NotFoundError,
  BadRequestError,
  ForbiddenError,
} = require('../errors/index');
const {
  ERROR_400_MESSAGE,
  REMOVE_SUCCESSFULLY_MESSAGE,
  ERROR_403_MESSAGE,
  ERROR_404_PASS_MESSAGE,
  ERROR_404_PASS_BAD_ID_MESSAGE,
  SUCCESSFUL_ADD_PASS_MESSAGE
} = require('../Utils/constants');

module.exports.addPass = (req, res, next) => {
  const { object, vehicles, from, to } = req.body
  Pass.create({
    object, vehicles, from, to,  owner: req.user._id,
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
  const { object, from, to, update, vehicles } = req.body;
  Pass.findByIdAndUpdate(
    req.params.id,
    { object, from, to, update, vehicles },
    { new: true, runValidators: true },
  )
    .then((Pass) => res.send({ Pass }))
    .catch((err) => {
      if (err.name === 'CastError' || err.name === 'ValidationError') {
        next(new BadRequestError(ERROR_400_MESSAGE));
        return;
      }
      next(err);
    });
};

module.exports.removePass = (req, res, next) => {
  Pass.findById(req.params.id)
    .orFail(new NotFoundError(ERROR_404_PASS_MESSAGE))
    .then((pass) => {
      const localOwner = pass.owner.toString() === req.user._id;
      if (localOwner) {
        return pass.remove()
          .then(() => res.send({ message: REMOVE_SUCCESSFULLY_MESSAGE }));
      }
      throw new ForbiddenError(ERROR_403_MESSAGE);
    })
    .catch((err) => {
      console.log(err)
      if (err.name === 'ReferenceError'){
        next(new NotFoundError(ERROR_404_PASS_MESSAGE))
        return;
      }
      if (err.name === 'CastError') {
        next(new BadRequestError(ERROR_400_MESSAGE));
        return;
      }
      next(err);
    });
};