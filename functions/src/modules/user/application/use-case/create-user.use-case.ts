import { inject, injectable } from "inversify";
import { UserRepository } from "../../domain/repository/user.repository";
import { User } from "../../domain/model/user.model";

@injectable()
export class CreateUserUseCase {
  constructor(@inject(UserRepository) private userRepository: UserRepository) {}

  async execute(user: User): Promise<User> {
    return await this.userRepository.create(user);
  }
}
