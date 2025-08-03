import { Task, ITask } from "../models/Task";

const createTask = async (taskData: Partial<ITask>): Promise<ITask> => {
  const task = new Task(taskData);
  return await task.save();
};

const getAllTasks = async () => {
  const tasks = await Task.find({});
  return tasks;
};

const getTaskById = async (taskId: string): Promise<ITask> => {
  const task = await Task.findById(taskId);

  if (!task) {
    console.log("Task not found");
  }
  return task as ITask;
};

export { createTask, getAllTasks, getTaskById };
