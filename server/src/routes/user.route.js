import { Router } from "express";
import {
  followUser,
  getCurrentUser,
  getUserProfile,
  syncUser,
  updateProfile,
} from "../controllers/user.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/profile/:username", getUserProfile);
router.get("/me", protectRoute, getCurrentUser);

router.post("/sync", protectRoute, syncUser);

router.put("/profile", protectRoute, updateProfile);

router.post("/follow/:targetUserId", protectRoute, followUser);

export default router;
