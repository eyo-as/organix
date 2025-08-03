import { Router } from "express";
import {
  loginUser,
  registerUser,
  getAllUsers,
  getUserById,
  editUser,
  deleteUser,
} from "../controllers/auth.controller";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", authMiddleware, getAllUsers);
router.get("/users/:id", authMiddleware, getUserById);
router.put("/users/:id", authMiddleware, editUser);
router.delete("/users/:id", authMiddleware, deleteUser);

export default router;
