const { Sequelize } = require("sequelize");

//Model for the Cat table
module.exports = (sequelize, DataTypes) => {
  const schema = {
    name: DataTypes.STRING, //Schema defined inside an arrow funcition.
    breed: DataTypes.STRING,
    markings: DataTypes.STRING,
    lastFed: DataTypes.DATE,
  };
  return sequelize.define("Cat", schema);
};
