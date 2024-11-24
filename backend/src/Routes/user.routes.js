import express from "express";

import {
  createUsers,
  getAllUsers,
  updateUser,
  getUserInfoById,
} from "../Controllers/user.controller.js";

const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/").post(createUsers);
// router.route("/:email").put(updateUser);
router.route("/:id").get(getUserInfoById);

export default router;
