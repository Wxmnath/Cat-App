const Sequelize = require("sequelize");
const CatModel = require("./cats");

// This code will connect to our database and return Models that we can use to interact with our tables.
const setUpDatabase = () => {
  const connection = new Sequelize(
    "have_i_fed_the_cat_app",
    "root",
    "password",
    {
      host: "localhost",
      port: "3307",
      dialect: "mysql",
    }
  );
  const Cat = CatModel(connection, Sequelize);

  connection.sync({ alter: true }); //This will allow changes to be saved into the DB.

  return { Cat };
};

module.exports = setUpDatabase();
