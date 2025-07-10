import express from "express";
import { signInController, signUpController, signOutController } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signin", signInController);
router.post("/signup", signUpController);
router.get("/signout", signOutController);

export default router;
