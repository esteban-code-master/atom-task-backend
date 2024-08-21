import { inject, injectable } from "inversify";
import { UserRepository } from "../../domain/repository/user.repository";
import { User } from "../../domain/model/user.model";

@injectable()
export class FindByEmailUserUseCase {
  constructor(@inject(UserRepository) private userRepository: UserRepository) {}

  async execute(email: string): Promise<User> {
    return await this.userRepository.findByEmail(email);
  }
}
