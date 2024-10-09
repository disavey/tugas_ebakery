import Cake from "../models/CakeModels.js";
import Chef from "../models/ChefModels.js";

export const createCake = async (req, res) => {
  const { name, price, description, imageUrl, ChefId } = req.body;
  const cake = await Cake.create({ name, price, description, imageUrl, ChefId });

  res.status(201).json(cake);
};

export const getCake = async (req, res) => {
  try {
    const cakes = await Cake.findAll({
      include: [{ model: Chef, as: "Chef", required: true }],
    });
    res.status(200).json(cakes);
  } catch (error) {
    console.log(error); //ini untuk melihat error di console
    res.status(500).json({ error: error.message });
  }
};

export const getCakeById = async (req, res) => {
  try {
    const { id } = req.query;
    const cake = await Cake.findByPk(id, {
      include: [{ model: Chef, as: "Chef", required: true }],
    });
    if (!cake) return res.status(404).json({ message: "Cake not found hoho" });
    res.status(200).json(cake);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateCake = async (req, res) => {
  try {
    const { id } = req.query;
    const { name, price, description, imageUrl, ChefId } = req.body;
    const [updated] = await Cake.update(
      { name, price, description, imageUrl, ChefId: ChefId },
      { where: { id } }
    );
    if (updated) {
      const updatedCake = await Cake.findByPk(id);
      res.status(200).json(updatedCake);
    } else {
      res.status(404).json({ message: "Cake failed to update" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteCake = async (req, res) => {
  try {
    const { id } = req.query;
    const deleted = await Cake.destroy({ where: { id } });
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Cake failed to delete" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
