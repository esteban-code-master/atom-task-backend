import { TaskStatus } from "../types/task-status";

export class Task {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public createAt: Date,
    public status: TaskStatus,
  ) {}
}
