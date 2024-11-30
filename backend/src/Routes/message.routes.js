// note: User.find({_id: {$ne: "id of the user logged in"}}) ne=not equals

import express from "express";

import {
  createMessage,
  getAllMessagesBySenderId,
  sendMessage,
} from "../Controllers/messages.controller.js";
import { protectedRoute } from "../Middleware/auth.middleware.js";

const router = express.Router();

// router.route("/").post(protectedRoute, createMessage);
router.route("/send/:id").post(protectedRoute, sendMessage);
router.route("/:id").get(protectedRoute, getAllMessagesBySenderId);

export default router;
