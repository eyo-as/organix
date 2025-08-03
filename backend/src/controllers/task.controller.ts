import { Request, Response } from "express";
import { createTask } from "../services/task.service";

const createNewTask = async (req: Request, res: Response) => {
  try {
    const { title, description, status, priority, dueDate } = req.body;

    if (!title || !status || !priority) {
      return res.status(400).json({
        message: "Please fill required fields.",
      });
    }

    const newTask = await createTask({
      title,
      description,
      status,
      priority,
      dueDate,
    });

    return res.status(201).json({
      message: "Task created.",
      task: newTask,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: "task creation error" + error,
    });
  }
};

export { createNewTask };
