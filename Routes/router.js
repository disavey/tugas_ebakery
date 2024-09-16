import express from "express";
import {
  createCake,
  deleteCake,
  getCake,
  getCakeById,
  updateCake,
} from "../controller/CakeController.js";
import {
  createUser,
  deleteUser,
  getUser,
  getUserById,
  updateUser,
} from "../controller/UserController.js";
import { createTransaksi, deleteTransaksi, getTransaksi, getTransaksiById, updateTransaksi } from "../controller/TransaksiController.js";
import { createChef, deleteChef, getChef, getChefById, updateChef } from "../controller/ChefController.js";
import { createReview, deleteReview, getReview, getReviewById } from "../controller/ReviewController.js";

const router = express.Router();

router.get("/cake", getCake);
router.post("/cake/post", createCake);
router.get("/cake/find", getCakeById);
router.put("/cake/update", updateCake);
router.delete("/cake/delete", deleteCake);

router.get("/user", getUser);
router.post("/user/post", createUser);
router.get("/user/find", getUserById);
router.put("/user/update", updateUser);
router.delete("/user/delete", deleteUser)

router.get("/transaksi", getTransaksi)
router.post("/transaksi/post", createTransaksi)
router.get("/transaksi/find", getTransaksiById)
router.put("/transaksi/update", updateTransaksi)
router.delete("/transaksi/delete", deleteTransaksi)

router.get("/chef", getChef)
router.post("/chef/post", createChef)
router.get("/chef/find", getChefById)
router.put("/chef/update", updateChef)
router.delete("/chef/delete", deleteChef)

router.get("/review", getReview)
router.post("/review/post", createReview)
router.get("/review/find", getReviewById)
router.delete("/review/delete", deleteReview)

export default router;
