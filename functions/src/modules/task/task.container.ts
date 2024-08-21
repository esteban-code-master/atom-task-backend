import { ContainerModule } from "inversify";
import { TaskController } from "./infrastructure/controller/task.controller";
import { TYPES } from "./infrastructure/types/types";
import { CreateTaskUseCase } from "./application/use-case/create-task.use-case";
import { TaskRepository } from "./domain/repository/task.repository";
import { TaskRepositoryImpl } from "./infrastructure/repository/task.repository";
import { FindTaskUseCase } from "./application/use-case/find-task.use-case";
import { DeleteTaskUseCase } from "./application/use-case/delete-task.use-case";
import { UpdateTaskUseCase } from "./application/use-case/update-task.use-case";
import { FindByIdTaskUseCase } from "./application/use-case/find-by-id-task.use-case";

export const taskModule: ContainerModule = new ContainerModule((bind) => {
  bind<TaskController>(TYPES.TaskController).to(TaskController);
  bind<TaskRepository>(TaskRepository).to(TaskRepositoryImpl);

  bind<CreateTaskUseCase>(CreateTaskUseCase).toSelf();
  bind<FindTaskUseCase>(FindTaskUseCase).toSelf();
  bind<FindByIdTaskUseCase>(FindByIdTaskUseCase).toSelf();
  bind<DeleteTaskUseCase>(DeleteTaskUseCase).toSelf();
  bind<UpdateTaskUseCase>(UpdateTaskUseCase).toSelf();
});
