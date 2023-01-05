import { prisma } from "../../../databases/prismaClient";
import { Client } from "../../../entities/Client";
import { UserAlreadyExists } from "../../Error/userErrors/userAlreadyExistsError";
import { IClientDTO } from "../dto/IclientDTO";
import { IClientRepository } from "./IclientRepository";

export class CreateClientRepository implements IClientRepository {
  constructor(private createClientRepository: Client[] = []) {}
  async findByUsername(username: string): Promise<Client> {
    const client = await this.createClientRepository.find(
      (item) => item.username === username
    );
    return client as Client;
  }
  async create({ username, password }: IClientDTO): Promise<Client> {
    const client = await Object.assign({
      username,
      password,
    });

    this.createClientRepository.push(client);
    return client;
  }
}
