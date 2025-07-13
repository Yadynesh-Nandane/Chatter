import express from "express";
import { getMessage } from "../controllers/message.controller.js";
import { protectedRoute } from "../middleware/protectedroute.middleware.js";

const router = express.Router();

router.get("/users/:id", protectedRoute, getMessage);
export default router;
