const { all } = require("express/lib/application");
const { underscoredIf } = require("sequelize/lib/utils");

module.exports = (sequelize, DataTypes) => {
    const alias = "Actor";
    const cols = {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      first_name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.DECIMAL(3, 1),
      },

      favorite_movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }

    
    };
  
    const config = {
      timestamps: true,
      tableName: "actors",
      underscored: true

    };
  
    const Actor = sequelize.define(alias, cols, config);
    return Actor;
  };