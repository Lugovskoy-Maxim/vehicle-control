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
      type: Date,
    },
    to: {
      type: Date,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      require: true,
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