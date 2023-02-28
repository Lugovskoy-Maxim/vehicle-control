const mongoose = require('mongoose');

const passSchema = new mongoose.Schema(
  {
    object: {
      type: String,
      required: true,
    },
    vehicles: {
      type: Array,
      required: true,
    },
    from: {
      type: String,
    },
    to: {
      type: String,
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