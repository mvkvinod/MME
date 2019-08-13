const sequelize = require("sequelize");

const db = new sequelize("mme", "mvk", "1234567890", {
  host: "localhost",
  dialect: "postgres",
  operatorAliases: false,

  // pool is keep in control of the db connections open at that instance to utilize the system resource effectively
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = db;
