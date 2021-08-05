const express = require("express");
const app = express();
const port = 3001;
const fetch = require("node-fetch");
const cors = require("cors");
const { urlencoded } = require("express");

// Vars
const numResults = 150;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Get All games
app.get("/gamelist", async (req, res) => {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=d3414bb318cb4f30a1f802c153d2afee&page_size=200`
  );
  console.log(res);
  res.json(await response.json());
});

// Get All games && Page #s
app.get("/filteredGameList", async (req, res) => {
  const { page } = req.query;
  const response = await fetch(
    `https://api.rawg.io/api/games?key=d3414bb318cb4f30a1f802c153d2afee&page_size=200&page=${page}`
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

// Search using slug
app.get("/game/:slug", async (req, res) => {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=d3414bb318cb4f30a1f802c153d2afee&slug=${req.params.name}`
  );
  console.log(req.params.name);
  res.json(await response.json());
});

// // Uses the twitch api to access game summaries
// app.post("/game/summary/:slug", async (req, res) => {
//   res.send({
//     Client-ID: pqvyu7shepuuadhc1ces159vkss7ba,
//   });
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
