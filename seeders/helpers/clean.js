import Cake from "../../models/CakeModels.js";
import User from "../../models/UserModels.js";

export default async function clean() {
  await Cake.destroy({
    where: {},
    force: true,
    cascade: true,
  });

  await User.destroy({
    where: {},
    force: true,
    cascade: true,
  });
}
