import mongoose from "mongoose";

const otpTokenSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    otp: { type: String, required: true },
    expiresAt: { type: Date, required: true },
    used: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const otpTokenModel = mongoose.model("OtpToken", otpTokenSchema);
export default otpTokenModel;
