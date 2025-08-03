import { Router } from "express";
import { loginUser, registerUser, getAllUsers } from "../controllers/auth.controller";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get('/users', getAllUsers)

export default router;
