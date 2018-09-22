const express = require("express");
const app = express();
const mongoose = require("mongoose");

const port = process.env.PORT || "5005";
app.listen(port, () => {
  console.log(`connecting to port ${port} ...`);
});

mongoose
  .connect(
    "mongodb://localhost/medicin",
    { useNewUrlParser: true }
  )
  .then(() => console.log("connecting to mongodb medicin ..."))
  .catch(err => console.log(err.message));
