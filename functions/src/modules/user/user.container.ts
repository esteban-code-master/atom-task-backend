import { ContainerModule } from "inversify";
import { UserController } from "./infrastructure/controller/user.container";
import { TYPES } from "./infrastructure/types/types";
import { CreateUserUseCase } from "./application/use-case/create-user.use-case";
import { FindByEmailUserUseCase } from "./application/use-case/fin-by-email.use-case";
import { UserRepositoryImpl } from "./infrastructure/repository/user.repository";
import { UserRepository } from "./domain/repository/user.repository";

export const userModule: ContainerModule = new ContainerModule((bind) => {
  bind<UserController>(TYPES.UserController).to(UserController);
  bind<UserRepository>(UserRepository).to(UserRepositoryImpl);

  bind<CreateUserUseCase>(CreateUserUseCase).toSelf();
  bind<FindByEmailUserUseCase>(FindByEmailUserUseCase).toSelf();
});
