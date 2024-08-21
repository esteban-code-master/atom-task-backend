import { Task } from "../model/task.model";

export interface TaskRepository {
  find(): Promise<Task[]>;
  findById(id: string): Promise<Task>;
  create(task: Task): Promise<Task>;
  update(id: string, task: Task): Promise<Task>;
  delete(id: string): Promise<Task>;
}

export const TaskRepository = Symbol.for("TaskRepository");
