import mongoose from "mongoose";

const FriendsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  addedFriends: [
    {
      addfriend: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
      addedTimeDate: String,
    },
  ],
});
