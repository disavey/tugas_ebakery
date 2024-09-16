import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Cake from "./CakeModels.js";

const Chef = db.define(
  "Chef",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    instagram: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "chef",
  }
);

Chef.hasMany(Cake, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Cake.belongsTo(Chef, {
  foreignKey: "ChefId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
export default Chef;
