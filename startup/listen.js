const port = process.env.PORT || "7000";

module.exports = app =>
  app.listen(port, () => {
    console.log(`connecting to port ${port} ...`);
  });
