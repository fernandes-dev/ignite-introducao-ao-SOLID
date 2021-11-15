import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const findedUser = this.usersRepository.findById(user_id);

    if (!findedUser?.admin) throw new Error("Not authorized");

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
