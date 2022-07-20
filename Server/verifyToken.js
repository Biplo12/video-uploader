import jwt from "jsonwebtoken";
import { createError } from "./error";
import dotenv from "dotenv";
dotenv.config();
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token)
    return next(createError(401, "You are not allowed to access this"));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(createError(401, "Invalid token"));
    req.user = user;
    next();
  });
};
