import { Task, ITask } from "../models/Task";

const createTask = async (taskData: string): Promise<ITask> => {
  const task = new Task(taskData);

  return await task.save();
};

export { createTask };
