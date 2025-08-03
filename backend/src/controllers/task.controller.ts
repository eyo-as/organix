import { Request, Response } from "express";
import { createTask, getAllTasks, getTaskById } from "../services/task.service";

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
      error: "Task creation error:" + error,
    });
  }
};

const getAllTask = async (_req: Request, res: Response) => {
  try {
    const tasks = await getAllTasks();
    res.status(200).json({
      message: "tasks retrived successfully.",
      tasks: tasks,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: "Retriving task error: " + error,
    });
  }
};

const getSingleTaskById = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.id;
    const task = await getTaskById(taskId);

    if (!task) {
      return res.status(404).json({
        message: "No task found.",
      });
    }

    res.status(200).json({
      message: "Task retrived successfull.",
      task: task,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: "Retrieving task by ID error:" + error,
    });
  }
};

export { createNewTask, getAllTask, getSingleTaskById };
