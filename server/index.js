const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  })
);

app.get("/data", (req, res) => {
  res.json({
    name: "Shamim",
    description: "Land of Deen",
  });
});

app.listen(3000);
