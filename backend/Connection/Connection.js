const { Sequelize } = require("sequelize");
require("dotenv").config();

const seq = new Sequelize(
  process.env.DATABASE,
  process.env.USERNAME,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: "mysql",
  }
);


module.exports = seq;
