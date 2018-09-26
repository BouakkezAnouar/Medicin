//modules
const express = require("express");
const app = express();

//startup
require("./startup/db")(); //connecting db
require("./startup/listen")(app); // app.listen

//middelwares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use("/patient", require("./routes/patient"));
app.use("/fiche", require("./routes/fiche"));
app.use("/consultation", require("./routes/consultation"));

console.log(process.env.dbuser);
