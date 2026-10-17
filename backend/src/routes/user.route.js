import express from "express";
import {
  // getAllUsers,
  getAllFriends,
  updateProfile,
  getRecommendedFriends,
} from "../controllers/user.controller.js";
import {
  sendRequests,
  acceptRequests,
  rejectRequests,
  getAllSentRequests,
  getAllReceivedRequests,
} from "../controllers/requests.controller.js";
import { protectedRoute } from "../middleware/protectedroute.middleware.js";

const router = express.Router();

router.use(protectedRoute);

// User routes
router.get("/friends", getAllFriends);
router.post("/updateprofile", updateProfile);
router.get("/recommendedfriends", getRecommendedFriends);

// Request routes
router.post("/sendrequest", sendRequests);
router.put("/acceptrequest", acceptRequests);
router.put("/rejectrequest", rejectRequests);
router.get("/allsentrequests", getAllSentRequests);
router.get("/allreceivedrequests", getAllReceivedRequests);

export default router;
