import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import { generateToken } from "../utils/jwt.js";
import otpTokenModel from "../models/otpToken.model.js";

export const hashPass = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

const generateOTP = () => {
  const otp = Math.floor(Math.random() * 1000000);
  const padedOTP = otp.toString().padStart(6, "0");
  return padedOTP;
};

export const checkAuth = async (req, res, next) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    console.error("Error while authenticating user: ", error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

export const signUpController = async (req, res) => {
  const { name, email, phone, password } = req.body;
  try {
    if (!name || !email || !password || !phone) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must at 6 characters." });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const hashedPassword = await hashPass(password);

    // Creating new user.
    const newUser = new User({
      phone,
      name,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      // Generating JWT token.
      generateToken(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.log("Backend signUpController Error: ", error);
    res.status(500).json({ message: error.message });
  }
};

export const signInController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(403).json({ message: "Invalid username or password." });
    }

    const comparedResult = await bcrypt.compare(password, user.password);
    if (!comparedResult) {
      return res.status(403).json({ message: "Invalid username or password." });
    }

    generateToken(user._id, res);

    res.status(200).json({
      message: "Signed In successfully!",
      data: { name: user.name, email: user.email, phone: user.phone },
    });
  } catch (error) {
    console.error("Backend signInController Error: ", error);
    res.status(401).json({ message: "Invalid username or password." });
  }
};

export const signOutController = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Signed Out Successfully!" });
  } catch (error) {
    console.log("Backend SignOutController Error: ", error);
    res.status(401).json({ message: `Error Logging Out ${error.message}.` });
  }
};

export const sendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    const generatedOtp = generateOTP();

    //Logging Otp only at development phase, sending otp via email functionality to be implemented soon.
    console.log("Generated OTP: ", generatedOtp);

    const otpToken = new otpTokenModel({
      email,
      used: false,
      otp: generatedOtp,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000),
    });
    await otpToken.save();
    res.status(200).json({ message: "OTP Sent Successfully!" });
  } catch (error) {
    console.error("Error while sending otp: ", error);
    res.status(401).json({message: "Error sending OTP"})
  }
};

export const verifyOtp = async (req, res) => {
  try {
    const { otp: userOtp, email } = req.body;
  let otp = await otpTokenModel.findOne({ email });

  if (!otp) {
    res.status(404).json({ message: "User not found!" });
  }

  if (userOtp === otp.otp && !otp.used) {
    console.log("second if");
    otp.used = true;
    await otp.save();
    res.status(200).json({ message: "Success" });
  } else {
    console.log("second else");
  }
  } catch (error) {
    console.error("Error while verifying otp: ", error);
  }
};

export const updatePasswordController = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    const user = await User.findOne({ email });
    console.log("user: ", user);
    const hashedPassword = await hashPass(newPassword);

    if (!user) {
      return res.status(404).json({ message: "User Not Found!" });
    }
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log();
  }
};
