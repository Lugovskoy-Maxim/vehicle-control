const mongoose = require("mongoose");
const { BAD_GOS_NUMBER } = require('../Utils/constants');

const vehicleShema = mongoose.Schema(
  {
    type: {
      type: String,
      minlength: 5,
      maxlength: 50,
      required: true,
      unique: true,
    },
    regNumber: {
      type: String,
      minlength: 8, // O 999 OO 189
      maxlength: 9,
      unique: true,
      require: true,
      validate: {
        validator(v) {
          return /^[АВЕКМНОРСТУХ]\d{3}(?<!000)[АВЕКМНОРСТУХ]{2}\d{2,3}$/ui.test(v);
        },
        message: () => BAD_GOS_NUMBER,
      }    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      require: true,
    },
    company: {
      tupe: String,
      require: true,
      maxlength: 50,
      minlength: 1,
    }
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("vehicle", vehicleShema);
