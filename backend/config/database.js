const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("pos", "postgres", "shazid123", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;
