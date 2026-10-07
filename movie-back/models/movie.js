const { Model, DataTypes } = require("sequelize");
const db_connect = require("../util/db");

class Movie extends Model {}

Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    watchlist: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize: db_connect,
    timestamps: false,
    tableName: "movies",
    underscored: true,
  },
);

module.exports = Movie;
