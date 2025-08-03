import mongoose from "mongoose";
import { Task, ITask } from "../models/Task";

const createTaskService = async (taskData: Partial<ITask>): Promise<ITask> => {
  const task = new Task(taskData);
  return await task.save();
};

const getAllTasksService = async () => {
  const tasks = await Task.find({});
  return tasks;
};

const getTaskByIdService = async (taskId: string): Promise<ITask | null> => {
  if (!mongoose.Types.ObjectId.isValid(taskId)) {
    return null;
  }
  const task = await Task.findById(taskId);

  return task;
};

const editTaskService = async (
  taskId: string,
  taskData: Partial<ITask>
): Promise<ITask> => {
  const newTask = await Task.findOneAndUpdate({ _id: taskId }, taskData, {
    new: true,
  });

  if (!newTask) throw new Error("Update failed");
  return newTask;
};

const deleteTaskService = async (taskId: string) => {
  const deletedTask = await Task.findOneAndDelete({ _id: taskId });

  if (!deletedTask) throw Error("Delete failed");
  return;
};

export {
  createTaskService,
  getAllTasksService,
  getTaskByIdService,
  editTaskService,
  deleteTaskService,
};
