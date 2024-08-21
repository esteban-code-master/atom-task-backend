import { inject, injectable } from "inversify";
import { Task } from "../../domain/model/task.model";
import { TaskRepository } from "../../domain/repository/task.repository";

@injectable()
export class CreateTaskUseCase {
  constructor(@inject(TaskRepository) private taskRepository: TaskRepository) {}

  async execute(task: Task): Promise<Task> {
    return await this.taskRepository.create({
      ...task,
      status: "pending",
      createAt: new Date(),
    });
  }
}
