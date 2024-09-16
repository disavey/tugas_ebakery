import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import User from "./UserModels.js";
import Cake from "./CakeModels.js";

const Review = db.define(
  "Review",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggal_review: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  { tableName: "review" }
);

User.hasMany(Review, { onDelete: "CASCADE", onUpdate: "CASCADE" });

Review.belongsTo(User, {
  foreignKey: "UserId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Cake.hasMany(Review, { foreignKey: "CakeId" });
Review.belongsTo(Cake, { foreignKey: "CakeId" });

export default Review;
