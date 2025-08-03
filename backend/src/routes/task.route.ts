import { Router } from "express";
import { createNewTask, getAllTask } from "../controllers/task.controller";

const router = Router();

router.post("/task", createNewTask);
router.get("/tasks", getAllTask);

export default router;
