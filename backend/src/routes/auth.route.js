import express from "express";
import {
  checkAuth,
  signInController,
  signUpController,
  signOutController,
} from "../controllers/auth.controller.js";
import { protectedRoute } from "../middleware/protectedroute.middleware.js";

const router = express.Router();

router.post("/signin", signInController);
router.post("/signup", signUpController);
router.get("/signout", signOutController);
router.get("/checkauth", protectedRoute, checkAuth);

export default router;
