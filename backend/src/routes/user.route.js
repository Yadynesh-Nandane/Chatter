import express from "express";
import { getAllFriends, updateProfile } from "../controllers/user.controller.js";
import { protectedRoute } from "../middleware/protectedroute.middleware.js";

const router = express.Router();

router.get("/friends", protectedRoute, getAllFriends);
router.post("/updateprofile", protectedRoute, updateProfile);

export default router;