import Chef from "../models/ChefModels.js";

export const createChef = async (req, res) => {
  try {
    const { name, instagram } = req.body;
    const chef = await Chef.create({ name, instagram });
    res.status(201).json(chef);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getChef = async (req, res) => {
  try {
    const chef = await Chef.findAll();
    res.status(200).json(chef);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getChefById = async (req, res) => {
  try {
    const { id } = req.query;
    const chef = await Chef.findByPk(id);
    if (!chef) return res.status(404).json({ message: "Chef not found hoho" });
    res.status(200).json(chef);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateChef = async (req, res) => {
  try {
    const { id } = req.query;
    const { name, instagram } = req.body;
    const [updated] = await Chef.update({ name, instagram }, { where: { id } });
    if (updated) {
      const updatedChef = await Chef.findByPk(id);
      res.status(200).json(updatedChef);
    } else {
      res.status(404).json({ message: "Chef failed to update" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteChef = async (req,res) => {
  try{
    const { id } = req.query;
    const deleted = await Chef.destroy({ where: { id } });
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Chef failed to delete" });
    } 
  }catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default Chef;
