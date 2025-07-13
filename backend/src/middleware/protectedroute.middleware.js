import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectedRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized! access not Allowed.",
        cookie: req.cookies,
      });
    }

    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedToken) {
      return res
        .status(401)
        .json({ message: "Unauthorized! access not Allowed." });
    }

    const user = await User.findById(decodedToken.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User Not found." });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Error while protecting route: ", error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};
