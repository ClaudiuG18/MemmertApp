const mongoose = require("mongoose");
const MemmertDevice = require("./models/device");

mongoose
  .connect("mongodb://localhost:27017/memert")
  .then(() => {
    console.log("connection open");
  })
  .catch((err) => {
    log("Error connecting");
    log(err);
  });

const device2 = new MemmertDevice({
  serialNum: "M120.00121",
  deviceType: "Demo Regler2",
  temp1Read: 21.26,
  temp1Set: 37,
  humRead: 44.59,
  humSet: 95.5,
});
device2
  .save()
  .then((device2) => {
    console.log(device2);
  })
  .catch((e) => {
    console.log("Error could not save");
  });
