import { Client } from "../../../entities/Client";
import { IClientDTO } from "../dto/IclientDTO";
import { IClientRepository } from "../repository/IclientRepository";

export class CreateClientInMemory implements IClientRepository {
  private createClientInMemory: Client[] = [];

  async create({ username, password }: IClientDTO): Promise<Client> {
    const client = new Client(username, password);

    Object.assign(client, {
      username,
      password,
    });
    this.createClientInMemory.push(client);

    return client;
  }
}
