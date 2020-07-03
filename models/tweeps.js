const mongoose = require("mongoose");

const tweepSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    min: 5,
    max: 255
  },
  email: {
    type: String,
    required: true,
    min: 5,
    max: 255
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 2000
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("auth", tweepSchema);
