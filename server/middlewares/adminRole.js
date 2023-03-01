const { ForbiddenError } = require('../errors/index'); // ошибка 404
const {  NOT_ENOUGH_RIGHTS } = require('../Utils/constants');
const User = require('../models/users');

const adminRole = (req, res, next) => {
  let localUserRole;
  User.findById(req.user._id)
  .then((user) => { localUserRole = user.role
    if (localUserRole === 'user'){
      throw new ForbiddenError(NOT_ENOUGH_RIGHTS);
    } else {
      return next();
    }
  })
  .catch((err) => next(err));

// пропускаем запрос дальше
};

module.exports = adminRole;