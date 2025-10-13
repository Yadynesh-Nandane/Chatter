import express from "express";
import {
  checkAuth,
  signInController,
  signUpController,
  signOutController,
  updatePasswordController,
  sendOtp,
  verifyOtp,
} from "../controllers/auth.controller.js";
import { protectedRoute } from "../middleware/protectedroute.middleware.js";

const router = express.Router();

router.get("/sendotp", sendOtp);
router.post("/verifyotp", verifyOtp);
router.post("/signin", signInController);
router.post("/signup", signUpController);
router.get("/signout", signOutController);
router.get("/checkauth", protectedRoute, checkAuth);
router.post("/updatepassword", updatePasswordController);

export default router;
