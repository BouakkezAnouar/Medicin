const port = process.env.PORT || "5005";

module.exports = app =>
  app.listen(port, () => {
    console.log(`connecting to port ${port} ...`);
  });
