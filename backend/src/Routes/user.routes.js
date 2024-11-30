import express from "express";

import {
  createUsers,
  getAllUsers,
  // updateUser,
  updateProfile,
  getUserInfoById,
} from "../Controllers/user.controller.js";

import { protectedRoute } from "../Middleware/auth.middleware.js";

const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/").post(createUsers);
router.route("/updateprofile").put(protectedRoute, updateProfile);
// router.route("/:email").put(updateUser);
router.route("/:id").get(getUserInfoById);

export default router;
