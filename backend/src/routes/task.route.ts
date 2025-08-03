import { Router } from "express";
import {
  createTask,
  getAllTask,
  getSingleTaskById,
  updateTask,
} from "../controllers/task.controller";

const router = Router();

router.post("/task", createTask);
router.get("/tasks", getAllTask);
router.get("/tasks/:id", getSingleTaskById);
router.put("/tasks/:id", updateTask);

export default router;
