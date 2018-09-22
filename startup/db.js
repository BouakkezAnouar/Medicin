const mongoose = require("mongoose");

module.exports = () =>
  mongoose
    .connect(
      "mongodb://localhost/medicin",
      { useNewUrlParser: true }
    )
    .then(() => console.log("connecting to mongodb medicin ..."))
    .catch(err => console.log(err.message));
