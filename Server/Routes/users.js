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

const router = express.Router();

//UPDATE USER
router.put("/:id", update);
//DELETE USER
router.delete("/:id", deleteUser);

//GET A USER
router.get("/find/:id", getUser);

//SUBSCRIBE USER
router.put("/sub/:id", subscribe);

//UNSUBSCRIBE USER
router.put("/sub/:id", unSubscribe);

//LIKE A VIDEO
router.put("/like/:id", like);

//DISLIKE A VIDEO
router.put("/sub/:id", dislike);

export default router;
