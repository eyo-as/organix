import { Router } from "express";
import { createNewTask } from "../controllers/task.controller";

const router = Router();

router.post("/task", createNewTask);

export default router;
