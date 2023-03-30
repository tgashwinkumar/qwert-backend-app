const express = require("express");
const app = express();
const port = 4050;
const Gun = require("gun");

app.use(Gun.serve);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const server = app.listen(port, () => {
  console.log(`Gun server running on port ${port}🔥`);
});

Gun({ web: server });

module.exports = app;
