import express from "express";
import { updateProfile } from "../controllers/user.controller.js";
import { protectedRoute } from "../middleware/protectedroute.middleware.js";

const router = express.Router();

router.post("/updateprofile", protectedRoute, updateProfile);

export default router;