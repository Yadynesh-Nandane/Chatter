import mongoose from "mongoose";

const FriendsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: [true, "userId Cannot be Empty"],
      unique: [true, "User Already Exists"]
    },
    addedFriends: { 
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Users",
      
    },
  },
  { timestamps: true }
);

const friendsModel = mongoose.model("Friends", FriendsSchema);
export default friendsModel;
