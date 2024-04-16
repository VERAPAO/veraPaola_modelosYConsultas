/*const { underscoredIf } = require("sequelize/lib/utils");

module.exports = (sequelize, DataTypes) => {
  const alias = "Movie";
  const cols = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      /*allowNull: false,*/
 /*   },
    rating: {
      type: DataTypes.DECIMAL(3, 1),
    },
    awards: {
      type: DataTypes.INTEGER,
    },
    release_date: {
      type: DataTypes.DATE,
    },
    length: {
      type: DataTypes.INTEGER,
    },
  };

  const config = {
    timestamps: false,
    tableName: "movies",
/*  createdAt: "created_at",
    updatedAt: "updated_at" */
    underscored: true
/* */ /* };

 /* const Movie = sequelize.define(alias, cols, config);
  return Movie;
};*/

module.exports = (sequelize, dataTypes) => {
  let alias = 'Movie';
  let cols = {
      id: {
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      title: {
          type: dataTypes.STRING
      },
      rating: {
          type: dataTypes.INTEGER
      },
      length: {
          type: dataTypes.INTEGER
      },
      awards: {
          type: dataTypes.INTEGER
      },
      release_date: {
          type: dataTypes.DATE
      }
  };
  let config = {
      tableName: 'movies',
      timestamps: false
  };
  const Movie = sequelize.define(alias, cols, config)

  return Movie
}