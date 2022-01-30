module.exports = (sequelize, Sequelize) => {
  const Item = sequelize.define("Item", {
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
  });

  return Item;
};

// const {Sequelize, DataTypes, Model}  = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:')

// class Item extends Model {}
