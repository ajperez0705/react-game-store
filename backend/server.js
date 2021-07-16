const express = require("express");
const app = express();
const fetch = require("node-fetch");
const cors = require("cors");

app.use(cors());

app.get("/", async (req, res) => {
  //   const response = await fetch(
  //     "https://www.giantbomb.com/api/games/?api_key=bc411d2bfeb051e2c96098b5ae2b2d6420d84786"
  //   );

  const response = await fetch(
    "https://api.rawg.io/api/games?key=d3414bb318cb4f30a1f802c153d2afee"
  );
  res.json(await response.json());
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
