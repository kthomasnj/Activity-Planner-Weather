const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Activities extends Model {}

Activities.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      weather: {
        type: DataTypes.STRING,
        allowNull: true
      },
      temperatureRange: {
        type: DataTypes.STRING,
        allowNull: true
      },
      category: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'activties'
    }
  );
  
  module.exports = Activities;