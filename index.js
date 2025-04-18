const express = require("express");

const app = express();
  console.log(`Worker ${process.pid} started`);

  app.get("/", (req, res) => {
    res.status(200).send("Hello World 123456!");
  });
  app.get("/pid", (req, res) => {
    res.status(200).send("Hello World!"+ process.pid);
  });
  app.get("/api/:n", function (req, res) {
    let n = parseInt(req.params.n);
    let count = 0;

    if (n > 5000000000) n = 5000000000;

    for (let i = 0; i <= n; i++) {
      count += i;
    }
    res.status(200).send(`Final count is ${count} ${process.pid}`);
  });

module.exports = app;