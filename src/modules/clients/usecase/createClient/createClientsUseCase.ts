import { prisma } from "../../../../databases/prismaClient";
import { hash } from "bcrypt";
import { UserAlreadyExists } from "../../../Error/userErrors/userAlreadyExistsError";
import { Client } from "../../../../entities/Client";
import { IClientRepository } from "../../repository/IclientRepository";

interface IUserClient {
  username: string;
  password: string;
}

export class CreateClientUseCase {
  constructor(private createClientRepository: IClientRepository) {}
  async execute({ username, password }: IUserClient) {
    const clientExists = await this.createClientRepository.findByUsername(
      username
    );

    if (clientExists) {
      throw new UserAlreadyExists();
    }
    const hashPassword = await hash(password, 10);

    const client = await this.createClientRepository.create({
      username,
      password: hashPassword,
    });

    return client;
  }
}
