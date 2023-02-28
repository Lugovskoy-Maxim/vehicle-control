const mongoose = require("mongoose");
const { BAD_GOS_NUMBER } = require('../Utils/constants');

const vehicleShema = mongoose.Schema(
  {
    regNumber: {
      type: String,
      minlength: 6, // O 999 OO 189
      maxlength: 12,
      unique: true,
      require: true,
      validate: {
        validator(v) {
          return /^[АВЕКМНОРСТУХ]\d{3}(?<!000)[АВЕКМНОРСТУХ]{2}\d{2,3}$/ui.test(v);
        },
        message: () => BAD_GOS_NUMBER,
      }
    },
    cat: { // категория
      type: String,
      enum: ['Грузовой самосвал', 'Легковой универсал', 'Легковой седан', 'Легковой прочее', 'Грузовой прочее', 'Топливозаправщик', 'Экскаватор', 'Кран', 'Бульдозер', 'Погрузчик', 'Грузовой тягач седельный'],
      minlength: 5,
      maxlength: 50,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      require: true,
    },
    company: { // Владелец ТС для договоров
      type: String,
      require: true,
      maxlength: 50,
      minlength: 1,
    },
    contracts: {
      type: String,
      maxlength: 50,
      minlength: 1,
    }
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("vehicle", vehicleShema);
