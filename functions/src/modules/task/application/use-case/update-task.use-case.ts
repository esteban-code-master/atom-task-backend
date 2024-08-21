import { inject, injectable } from "inversify";
import { Task } from "../../domain/model/task.model";
import { TaskRepository } from "../../domain/repository/task.repository";

@injectable()
export class UpdateTaskUseCase {
  constructor(@inject(TaskRepository) private taskRepository: TaskRepository) {}

  async execute(taskId: string, task: Task): Promise<Task> {
    return await this.taskRepository.update(taskId, task);
  }
}
