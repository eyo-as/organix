import { Router } from "express";
import {
  createTask,
  getAllTask,
  getSingleTaskById,
  updateTask,
  deleteTask,
} from "../controllers/task.controller";

const router = Router();
import { authMiddleware } from "../middlewares/authMiddleware";

router.post("/task", authMiddleware, createTask);
router.get("/tasks", authMiddleware, getAllTask);
router.get("/tasks/:id", authMiddleware, getSingleTaskById);
router.put("/tasks/:id", authMiddleware, updateTask);
router.delete("/tasks/:id", authMiddleware, deleteTask);

export default router;
