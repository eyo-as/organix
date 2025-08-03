import { Router } from "express";
import {
  loginUser,
  registerUser,
  getAllUsers,
  getUserById,
} from "../controllers/auth.controller";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);

export default router;
