const express = require("express");
const app = express();
const port = 3001;
const fetch = require("node-fetch");
const cors = require("cors");

app.use(cors());

app.get("/gameList", async (req, res) => {
  //   const response = await fetch(
  //     "https://www.giantbomb.com/api/games/?api_key=bc411d2bfeb051e2c96098b5ae2b2d6420d84786"
  //   );

  const numResults = 150;

  const response = await fetch(
    `https://api.rawg.io/api/games?key=d3414bb318cb4f30a1f802c153d2afee&page_size=${numResults}`
  );
  res.json(await response.json());
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
