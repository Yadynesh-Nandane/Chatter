import express from "express";
import {
  addFriends,
  getAllFriends,
  removeFriend,
} from "../Controllers/friends.controller.js";

const router = express.Router();

router.route("/").post(addFriends);
router.route("/:id").get(getAllFriends);
router.route("/delete/:id").delete(getAllFriends);

export default router;
