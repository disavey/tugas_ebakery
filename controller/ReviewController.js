import Cake from "../models/CakeModels.js";
import Review from "../models/ReviewModels.js";
import User from "../models/UserModels.js";

export const createReview = async (req, res) => {
  const { comment, tanggal_review, CakeId, UserId } = req.body;
  try {
    let cake = await Cake.findByPk(CakeId);
    if (!cake) {
      return res
        .status(400)
        .json({ message: "Cake not found! check your CakeId" });
    }
    let user = await User.findByPk(UserId);
    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found! check your UserId" });
    }

    const reviewDate = tanggal_review || new Date();
    const review = await Review.create({
      comment,
      tanggal_review: reviewDate,
      CakeId: CakeId,
      UserId: UserId,
    });
    res.status(201).json({
      message: "Review created succesfully",
      review,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getReview = async (req, res) => {
  try {
    const review = await Review.findAll({
      include: [
        { model: Cake, as: "Cake", required: true },
        { model: User, as: "User", required: true },
      ],
    });
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getReviewById = async (req, res) => {
  try {
    const { id } = req.query;
    const review = await Review.findByPk(id, {
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
    if (!review) return res.status(404).json({ message: "Review not found" });
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteReview = async (req, res) => {
  try {
    const { id } = req.query;
    const deletedReview = await Review.destroy({ where: { id } });
    if (deletedReview) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Review not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
