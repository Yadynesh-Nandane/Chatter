import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  
  const env = process.env.ENV;
  const secret = process.env.JWT_SECRET;
  const token = jwt.sign({userId}, secret, {
    expiresIn: "7d",
  });

  res.cookie("JWT", token, {
    httpOnly: true, // prevent XSS attacks (cross site scripting)
    sameSite: "strict", //prevents CSRF attacks (cross site request forgery attacks)
    secure: env !== "DEV",
    maxAge: 7 * 24 * 60 * 60 * 1000, //ms
  });
  return token;
};
