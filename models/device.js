const mongoose = require("mongoose");

const parametersSchema = new mongoose.Schema({});
const deviceSchema = new mongoose.Schema({
  serialNum: {
    type: String,
    required: true,
  },
  deviceType: {
    type: String,
  },
  temp1Read: {
    type: Number,
    required: true,
  },
  temp1Set: {
    type: Number,
  },
  humRead: {
    type: Number,
  },
  humSet: {
    type: Number,
  },
});

const MemmertDevice = mongoose.model("MemmertDevice", deviceSchema);
module.exports = MemmertDevice;
