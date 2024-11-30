import jwt from "jsonwebtoken";
// import User from "../Database/Models/Users.model.js";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, //ms
    httpOnly: true, // prevent XSS attacks scripting attacks
    sameSite: "strict", // CSRF (cross-site request forgery) attacks
    secure: process.env.NODE_ENV !== "development",
  });
  return token;
};