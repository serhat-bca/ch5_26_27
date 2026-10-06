require("dotenv").config();
const { Sequelize } = require("sequelize");
const dbOrm = new Sequelize(process.env.DB_URL, {
  dialect: "postgres",
});

module.exports = dbOrm;
