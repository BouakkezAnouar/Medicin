const express = require("express");
const app = express();

const port = process.env.PORT || "5005";
app.listen(port, () => {
  console.log(`connecting to port ${port} ...`);
});
