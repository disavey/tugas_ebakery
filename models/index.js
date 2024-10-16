import db from "../utils/connection.js";
import Cake from "./CakeModels.js";
import Review from "./ReviewModels.js";
import User from "./UserModels.js";
import Chef from "./ChefModels.js";
import Transaksi from "./TransaksiModels.js";

await db.sync({ alter: true });
await User.sync();
await Cake.sync();
await Review.sync();
await Chef.sync();
await Transaksi.sync();
