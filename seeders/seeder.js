import Cake from "../models/CakeModels.js";
import User from "../models/UserModels.js";
import clean from "./helpers/clean.js";

const createSeeder = async () => {
    // await clean();
  const user = await User.create({
    name: "tobi",
    email: "tobi123@gmail.com",
  });

  const cake = await Cake.create({
    name: "Terena",
    price: 200000,
    description:
      "A layered dessert made with mascarpone cheese, coffee, and cocoa powder on top. It typically features ladyfinger biscuits soaked in coffee, arranged in layers.",
  });

  const cake2 = await Cake.create({
    name: "Brownies",
    price: 90000,
    description:
      "A small custard tart made from puff pastry filled with creamy custard. The top is usually caramelized or slightly burned for added flavor.",
  });

  const findCakeById = await Cake.findAll({
    where: {
      id: cake.dataValues.id,
    },
    attributes: ["id","name", "price", "description"],
  });
  return { user,cake, findCakeById };
};

const { user, findCakeById: cakes } = await createSeeder();
console.log("=== INI ADALAH DATA USER ====");
console.log(user);
console.log("=== INI ADALAH DATA KUE ===");
cakes.map((item) => {
  console.log(item.dataValues);
});
