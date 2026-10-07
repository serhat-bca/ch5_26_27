const { Sequelize } = require("sequelize");
require("dotenv").config();

const db_connect = new Sequelize(process.env.DB_URL, {
  dialect: "postgres",
});

module.exports = db_connect;
