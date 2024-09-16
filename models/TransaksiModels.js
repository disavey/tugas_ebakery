import User from "./UserModels.js";
import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Cake from "./CakeModels.js";

const Transaksi = db.define(
  "Transaksi",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true,
    },
    tanggal_pembelian: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "transaksi",
  }
);

Cake.hasMany(Transaksi, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Transaksi.belongsTo(Cake, {
  foreignKey: "CakeId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});


export default Transaksi;
