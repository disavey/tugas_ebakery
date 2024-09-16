import Cake from "../models/CakeModels.js"
import Transaksi from "../models/TransaksiModels.js"
import User from "../models/UserModels.js"

export const createTransaksi = async(req,res) => {
    const { tanggal_pembelian, CakeId, UserId} = req.body
    try{
        let cake = await Cake.findByPk(CakeId)
        if(!cake){
            return res.status(400).json({message : "Cake not found! check your CakeId"});
        }
        let user = await User.findByPk(UserId);
        if(!user){
            return res.status(400).json({message : "User not found! check your UserId"})
        }

        //buat transaksi
        const transaksiDate = tanggal_pembelian || new Date()
        const transaksi = await Transaksi.create(
            {
                tanggal_pembelian: transaksiDate,
                CakeId: CakeId,
                UserId: UserId
            }
        )
        res.status(201).json({
            message: "Transaksi created successfully",
            transaksi,
          });
    } catch(error){
        res.status(500).json({message: error.message})
    }
}

export const getTransaksi = async (req, res) => {
    try {
      const transaksi = await Transaksi.findAll(
        {
        include: [
          {
            model: Cake,
            as: "Cake",
            required: true,
          },
          {
            model: User,
            as: "User",
            required: true,
          },
        ],
      });
      res.status(200).json(transaksi);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const getTransaksiById = async (req, res) => {
    try {
      const { id } = req.query;
      const transaksi = await Transaksi.findByPk(id, {
        include: [
          {
            model: Cake,
            as: "Cake",
          },
          {
            model: User,
            as: "User",
          },
        ],
      });
      if (!transaksi) return res.status(404).json({ message: "Transaksi not found" });
      res.status(200).json(transaksi);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const updateTransaksi = async (req, res) => {
    try {
      const { id } = req.query;
      const {tanggal_pembelian, CakeId, UserId} = req.body;
  
      const [updated] = await Transaksi.update(
        { tanggal_pembelian, CakeId: CakeId, UserId: UserId },
        { where: { id } }
      );
      if (updated) {
        const updatedTransaksi = await Transaksi.findByPk(id);
        res.status(200).json(updatedTransaksi);
      } else {
        res.status(404).json({ message: "Transaksi not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const deleteTransaksi = async (req, res) => {
    try {
      const { id } = req.query;
      const deletedTransaksi = await Transaksi.destroy({ where: { id } });
      if (deletedTransaksi) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: "Transaksi not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };