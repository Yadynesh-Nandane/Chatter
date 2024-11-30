import express from "express";

import { protectedRoute } from "../Middleware/auth.middleware.js";
import {
  signUp,
  signIn,
  signOut,
  checkAuth,
} from "../Controllers/auth.controller.js";

const router = express.Router();

router.route("/signup").post(signUp);
router.route("/signin").post(signIn);
router.route("/signout").post(signOut);
router.route("/check").get(protectedRoute, checkAuth);

export default router;
