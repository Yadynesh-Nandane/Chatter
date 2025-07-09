import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    phone: { type: String, maxlength: 17 },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;
