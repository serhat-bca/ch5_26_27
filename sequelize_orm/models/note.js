const { Model, DataTypes } = require("sequelize");
const dbOrm = require("../util/db");
// you need to create table Models
class Note extends Model {}
// initialize the Note model
// Note.init({},{})
Note.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize: dbOrm,
    tableName: "notes",
    timestamps: false,
  },
);

module.exports = Note;
