const mongoose = require('mongoose');

const passSchema = new mongoose.Schema(
  {
    object: {
      type: String,
      required: true,
    },
    vehicles: {
      type: Object,
      required: true,
    },
    from: {
      type: Date,
    },
    to: {
      type: Date,
    },
    update: {
      type: Date,
      default: Date.now(),
    }
  },
  {
    versionKey: false,
  }
)

module.exports = mongoose.model('pass', passSchema);