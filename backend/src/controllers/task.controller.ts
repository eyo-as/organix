import { Request, Response } from "express";
import {
  createTaskService,
  editTaskService,
  getAllTasksService,
  getTaskByIdService,
  deleteTaskService,
} from "../services/task.service";

const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description, status, priority, dueDate } = req.body;

    if (!title || !status || !priority) {
      return res.status(400).json({
        message: "Please fill required fields.",
      });
    }

    const newTask = await createTaskService({
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
    const tasks = await getAllTasksService();
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
    const task = await getTaskByIdService(taskId);

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

const updateTask = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.id;
    const task = await getTaskByIdService(taskId);

    if (!task) {
      return res.status(404).json({
        message: "Task not found.",
      });
    }

    const taskData = req.body;

    const newTask = await editTaskService(taskId, taskData);

    res.status(200).json({
      message: "Task updated successfully.",
      task: newTask,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: "Updating task by ID error:" + error,
    });
  }
};

const deleteTask = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.id;
    const task = await getTaskByIdService(taskId);

    if (!task) {
      return res.status(404).json({
        message: "Task not found.",
      });
    }

    await deleteTaskService(taskId);

    res.status(200).json({
      message: "Task deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: "Deleting task error:" + error,
    });
  }
};

export { createTask, getAllTask, getSingleTaskById, updateTask, deleteTask };
