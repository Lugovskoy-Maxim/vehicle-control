const { ForbiddenError } = require('../errors/index'); // ошибка 404
const {  NOT_ENOUGH_RIGHTS } = require('../Utils/constants');
const User = require('../models/users');

const adminRights = (req, res, next) => {
  console.log(req.user)
  let localUserRights;
  User.findById(req.user._id)
  .then((user) => { localUserRights = user.rights
    console.log(localUserRights);
    if (localUserRights === 'user'){
      throw new ForbiddenError(NOT_ENOUGH_RIGHTS);
    } else {
      return next();
    }
  })
  .catch((err) => next(err));

// пропускаем запрос дальше
};

module.exports = adminRights;