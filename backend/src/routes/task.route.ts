import { Router } from "express";
import {
  createNewTask,
  getAllTask,
  getSingleTaskById,
} from "../controllers/task.controller";

const router = Router();

router.post("/task", createNewTask);
router.get("/tasks", getAllTask);
router.get("/tasks/:id", getSingleTaskById);

export default router;
