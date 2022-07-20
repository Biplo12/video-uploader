import express from "express";
import {
  dislike,
  getUser,
  like,
  subscribe,
  unSubscribe,
  update,
  deleteUser,
} from "../Controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//UPDATE USER
router.put("/:id", verifyToken, update);

//DELETE USER
router.delete("/:id", verifyToken, deleteUser);

//GET A USER
router.get("/find/:id", getUser);

//SUBSCRIBE USER
router.put("/sub/:id", verifyToken, subscribe);

//UNSUBSCRIBE USER
router.put("/unsub/:id", verifyToken, unSubscribe);

//LIKE A VIDEO
router.put("/like/:videoId", verifyToken, like);

//DISLIKE A VIDEO
router.put("/dislike/:videoId", verifyToken, dislike);

export default router;
