import bcrypt from "bcrypt";

import User from "../models/user.model.js";
import { generateToken } from "../utils/jwt.js";

export const signUpController = async (req, res) => {
  const { name, email, phone, password } = req.body;
  try {

    if(!name || !email || !password || !phone) {
      console.log("first if executed.");
      return res.status(400).json({message: "All fields are required."});
    }
    
    if (password.length < 6) {
      return res.status(400).json({ message: "Password must at 6 characters." });
    }
    
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists!" });
    }
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Creating new user.
    const newUser = new User({
      phone,
      name,
      email,
      password: hashedPassword,
    });
    
    if(newUser) {
      // Generating JWT token.
      const newUserId = (newUser._id).toString();
      const token = generateToken({newUserId}, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
      });
    }
    else {
      res.status(400).json({message: "Invalid user data"});
    }
  } catch (error) {
    console.log("Error Signing Up: ", error);
    res.status(500).json({ message: "Couldn't sign up, Please try again!" });
  }
};

export const signInController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await User.findOne({ email });
    if ("email" in result && "password" in result) {
      if (email == result.email && password == result.password)
        res.status(200).json({ message: `Welcome ${result.email}!`, data: result});
    }
  } catch (error) {
    console.error("Error Signing in: ", error);
    res.status(401).json({ message: "Invalid username or password." });
  }
};

export const signOutController = async (req, res) => {
  try {
  } catch (error) {
    console.log("Error", error);
    res.status(401).json({ message: `Error Logging Out ${error.message}.` });
  }
};
