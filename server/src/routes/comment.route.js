import { Router } from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import {
  createComment,
  deleteComment,
  getComments,
} from "../controllers/comment.controller.js";

const router = Router();

router.get("/post/:postId", getComments);

router.post("/post/:postId", protectRoute, createComment);
router.delete("/:commentId", protectRoute, deleteComment);

export default router;
