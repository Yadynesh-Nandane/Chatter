import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectedRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    console.log("request cookies: ", req.cookies);
    console.log("token: ", token);
    if (!token) {
      console.log("First if executed:");
      return res
        .status(401)
        .json({ message: "Unauthorized! access not Allowed.", cookie: req.cookies});
    }

    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
    console.log("decodedtoken: ", decodedToken);
    if (!decodedToken) {
      console.log("second if executed:");
      return res
        .status(401)
        .json({ message: "Unauthorized! access not Allowed." });
    }

    const user = await User.findById(decodedToken.userId).select("-password");
    if (!user) {
      console.log("third if executed:");
      return res.status(404).json({ message: "User Not found." });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Error while protecting route: ", error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};
