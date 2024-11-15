const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('app', 'app', 'Thundera@190', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./models/Ajax.model.js")(sequelize, Sequelize);

module.exports = db;