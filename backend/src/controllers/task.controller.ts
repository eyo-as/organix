import { Request, Response } from "express";
import { createTask } from "../services/task.service";

const createNewTask = async (req: Request, res: Response) => {
  try {
    const { title, description, status, priority, deuDate } = req.body;

    if (!title || !description || !status || !priority || !deuDate) {
      return res.status(400).json({
        message: "Please fill all fileds.",
      });
    }

    const newTask = await createTask(req.body);
    return res.status(201).json({
      message: "Task created.",
      task: newTask,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: "creating cast error" + error,
    });
  }
};

export { createNewTask };
