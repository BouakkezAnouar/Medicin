//modules
const express = require("express");
const app = express();
//startup
require("./startup/db")(); //connecting db
require("./startup/listen")(app); // app.listen
