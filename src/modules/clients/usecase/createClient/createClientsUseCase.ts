import { prisma } from "../../../../databases/prismaClient";
import { hash } from "bcrypt";
import { UserAlreadyExists } from "../../../Error/userErrors/userAlreadyExistsError";
import { Client } from "../../../../entities/Client";
import { ClientRepository } from "../../repository/clientRepository";

interface IUserClient {
  username: string;
  password: string;
}

export class CreateClientUseCase {
  constructor(private createClientUseCase: ClientRepository) {}
  async execute({ username, password }: IUserClient) {
    const clientExists = await this.createClientUseCase.findByUsername(
      username
    );

    if (clientExists) {
      throw new UserAlreadyExists();
    }
    const hashPassword = await hash(password, 10);

    const client = await this.createClientUseCase.create({
      username,
      password,
    });

    return client;
  }
}
