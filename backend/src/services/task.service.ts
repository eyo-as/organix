import { Task, ITask } from "../models/Task";

const createTask = async (taskData: Partial<ITask>): Promise<ITask> => {
  const task = new Task(taskData);
  return await task.save();
};

const getAllTasks = async () => {
  const tasks = await Task.find({});
  return tasks;
};

export { createTask, getAllTasks };
