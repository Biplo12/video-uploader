import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./Routes/users.js";
import videoRoutes from "./Routes/videos.js";
import commentRoutes from "./Routes/comments.js";
import authRoutes from "./Routes/auth.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

const connect = () => {
  mongoose
    .connect(process.env.MONGODB_SECRET)
    .then(() => {
      console.log("Mongoose Connected to MongoDB");
    })
    .catch((err) => {
      throw err;
    });
};

app.use(cookieParser());

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/video", videoRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(process.env.PORT || 3000, () => {
  connect();
  console.log(`Server listening on ${process.env.PORT} port`);
});
