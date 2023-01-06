import { Client } from "../../../entities/Client";
import { AppError } from "../../Error/appError";
import { UserAlreadyExists } from "../../Error/userErrors/userAlreadyExistsError";
import { IClientDTO } from "../dto/IclientDTO";
import { IClientRepository } from "../repository/IclientRepository";

export class CreateClientInMemory implements IClientRepository {
  private createClientInMemory: Client[] = [];

  async findByUsername(username: String): Promise<Client> {
    const user = await this.createClientInMemory.find(
      (item) => item.username === username
    );

    return user as Client;
  }

  async create({ username, password }: IClientDTO): Promise<Client> {
    const client = new Client(username, password);

    await Object.assign(client, {
      username,
      password,
    });
    this.createClientInMemory.push(client);

    return client;
  }
}
