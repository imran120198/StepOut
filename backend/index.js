const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Railway Management Server");
});


app.listen(process.env.PORT, () => {
  console.log(`Running on PORT ${process.env.PORT}`);
});
