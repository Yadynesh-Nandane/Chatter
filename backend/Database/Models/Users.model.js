import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Enter a Name"] },
    email: {
      type: String,
      required: [true, "Enter a Email"],
      unique: [true, "User already exists"],
      validator: [validator.isEmail, "Invalid Email"],
    },
    mobile: { type: String, required: [true, "Enter a Phone Number"] },
    password: {
      type: String,
      required: [true, "Enter a password"],
      validator: [validator.isStrongPassword, "Enter a strong password"],
    },
    lastSeen: { type: String },
    address: { type: String },
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "Friends" }],
    sentMessages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Messages" }],
    receivedMessages: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Messages" },
    ],
  },
  { timestamps: true }
);

const userModel = mongoose.model("Users", UserSchema);
export default userModel;
