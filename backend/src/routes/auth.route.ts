import { Router } from "express";
import {
  loginUser,
  registerUser,
  getAllUsers,
  getUserById,
  editUser,
  deleteUser,
} from "../controllers/auth.controller";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", editUser);
router.delete("/users/:id", deleteUser);

export default router;
