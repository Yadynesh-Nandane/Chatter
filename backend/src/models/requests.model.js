import mongoose from "mongoose";

const requestsSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["accepted", "rejected", "pending"],
      default: "pending",
      required: true,
    },
  },
  { timestamps: true },
);

const friendRequests = mongoose.model("FriendRequests", requestsSchema);
export default friendRequests;
