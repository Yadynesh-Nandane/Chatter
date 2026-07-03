import express from "express";
import {
  getAllFriends,
  updateProfile,
  getAllUsers,
} from "../controllers/user.controller.js";
import { protectedRoute } from "../middleware/protectedroute.middleware.js";

const router = express.Router();

router.get("/allusers", protectedRoute, getAllUsers);
router.get("/friends", protectedRoute, getAllFriends);
router.post("/updateprofile", protectedRoute, updateProfile);

export default router;
