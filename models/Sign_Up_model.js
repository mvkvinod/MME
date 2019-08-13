const sequelize = require("sequelize");
const db = require("../config/DB");

//schema for owner sign up form
const OwnerSignUpSchema = db.define(
  "ownerListSchema",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      notNull: true
    },
    ownerName: {
      type: sequelize.STRING,
      required: true
    },
    pharmaName: {
      type: sequelize.STRING,
      required: true
    },
    licenseNo: {
      type: sequelize.STRING,
      required: true
    },
    address: {
      type: sequelize.STRING,
      required: true
    },
    state: {
      type: sequelize.STRING,
      required: true
    },
    country: {
      type: sequelize.STRING,
      required: true
    },
    pinCode: {
      type: sequelize.INTEGER,
      required: true
    },
    email: {
      type: sequelize.STRING,
      required: true
    },
    mobileNo: {
      type: sequelize.BIGINT,
      required: true
    },
    password: {
      type: sequelize.STRING,
      required: true
    }
  },
  {
    tableName: "ownerList",
    timestamps: false
  }
);

module.exports = OwnerSignUpSchema;
