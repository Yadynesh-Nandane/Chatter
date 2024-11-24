import express from "express";

import {
  createMessage,
  getAllMessagesBySenderId,
} from "../Controllers/messages.controller.js";

const router = express.Router();

router.route('/').post(createMessage)
router.route('/:id').get(getAllMessagesBySenderId)

export default router;