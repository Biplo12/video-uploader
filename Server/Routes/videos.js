import express from "express";
import {
  addVideo,
  addView,
  deleteVideo,
  getBySearch,
  getByTag,
  getVideo,
  randomVideo,
  subscribedVideos,
  trendVideo,
  updateVideo,
} from "../Controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//CREATE A VIDEO
router.post("/", verifyToken, addVideo);
//UPDATE A VIDEO
router.put("/:id", verifyToken, updateVideo);
//DELETE A VIDEO
router.delete("/:id", verifyToken, deleteVideo);
//GET A VIDEO
router.get("/find/:id", getVideo);
//VIEWS UPDATE
router.put("/view/:id", addView);
//TREND VIDEOS
router.get("/trend", trendVideo);
//RANDOM VIDEOS
router.get("/random", randomVideo);
//SUBSCRIBED CHANNELS VIDEOS
router.get("/sub", verifyToken, subscribedVideos);
//TAGGED VIDEOS
router.get("/tags", getByTag);
//SEARCHED VIDEOS
router.get("/search", getBySearch);

export default router;
