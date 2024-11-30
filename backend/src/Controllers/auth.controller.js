import bcrypt from "bcryptjs";

import User from "../Database/Models/Users.model.js";
import { generateToken } from "../Utils/utils.js";

// Function: To singup/register new users
const signUp = async (req, res) => {
  const { name, email, mobile, password, address } = req.body;
  const salt = await bcrypt.genSalt(10);

  try {
    if (password < 8) {
      return res
        .status(400)
        .json({ message: "Password must be atleast 8 characters." });
    }

    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      mobile,
      address,
      password: hashedPassword,
    });

    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        mobile: newUser.mobile,
        address: newUser.address,
      });
    } else {
      return res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.error("Error in signup controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Function: To signin/login users
const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    generateToken(user._id, res);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      mobile: user.mobile,
      address: user.address,
    });
  } catch (error) {
    console.error("Error in signin controller", error);
    res.status(500).json({ message: "Interval Server Error" });
  }
};

// Function: To signout/logout users
const signOut = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Signed Out Successfully" });
  } catch (error) {
    console.error("Error in signout controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const checkAuth = async (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    console.error("Error in checkAuth controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { signUp, signIn, signOut, checkAuth };
