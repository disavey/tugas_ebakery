import Cake from "../models/CakeModels.js";
import Transaksi from "../models/TransaksiModels.js";
import User from "../models/UserModels.js";

export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = await User.create({ name, email });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User
      .findAll
      (  {
        include: [
          {
            model: Transaksi,
            as: "Transaksis",
            include: [
              {
                model: Cake,
                as: "Cake",
              },
            ],
          },
        ],
      });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.query;
    const user = await User.findByPk(id
      , {
      include: [
        {
          model: Transaksi,
          as: "Transaksis",
          include: [
            {
              model: Cake,
              as: "Cake",
            },
          ],
        },
      ],
    }
  );
    if (!User) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.query;
    const { name, email } = req.body;

    const [updated] = await User.update({ name, email }, { where:  {id} });
    if (updated) {
      const updatedUser = await User.findByPk(id);
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.query;
    const deleted = await User.destroy({ where: { id } });
    if (deleted) {
      res.status(204).json(` customer ke ${id} berhasil diusir`);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
