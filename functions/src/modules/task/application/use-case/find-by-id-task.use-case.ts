import { inject, injectable } from "inversify";
import { Task } from "../../domain/model/task.model";
import { TaskRepository } from "../../domain/repository/task.repository";

@injectable()
export class FindByIdTaskUseCase {
  constructor(@inject(TaskRepository) private taskRepository: TaskRepository) {}

  async execute(taskId: string): Promise<Task> {
    return await this.taskRepository.findById(taskId);
  }
}
