const express = require("express");
const app = express();
const port = 3001;
const fetch = require("node-fetch");
const cors = require("cors");

// Vars
const numResults = 150;
app.use(cors());

// Get All games
app.get("/gamelist", async (req, res) => {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=d3414bb318cb4f30a1f802c153d2afee&page_size=${numResults}`
  );
  console.log(res);
  res.json(await response.json());
});

// Get Games based on Release Dates
app.get("/releaseDateFilter", async (req, res) => {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=d3414bb318cb4f30a1f802c153d2afee&dates=2020-01-01,2021-01-01&page_size=${numResults}`
  );
  console.log(res);
  res.json(await response.json());
});

// Search through DB
app.get("/game/:name", async (req, res) => {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=d3414bb318cb4f30a1f802c153d2afee&search=${req.params.name}&page_size=${numResults}`
  );
  console.log(req.params.name);
  res.json(await response.json());
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
