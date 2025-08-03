import { Task, ITask } from "../models/Task";

const createTask = async (taskData: Partial<ITask>): Promise<ITask> => {
  const task = new Task(taskData);
  return await task.save();
};

export { createTask };
