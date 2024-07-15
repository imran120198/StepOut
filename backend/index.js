const express = require("express");
const cors = require("cors");
const { connection } = require("./Connection/Connection");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Railway Management Server");
});

app.listen(process.env.PORT || 8080, async () => {
  try {
    await connection;
    console.log("Connected to Database");
  } catch (error) {
    console.log(error);
  }
  console.log(`Running on PORT ${process.env.PORT}`);
});
