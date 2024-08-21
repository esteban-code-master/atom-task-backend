import { User } from "../model/user.model";

export interface UserRepository {
  findByEmail(email: string): Promise<User>;
  create(user: User): Promise<User>;
}

export const UserRepository = Symbol.for("UserRepository");
