import { Client } from "../../../../entities/Client";
import { Deliveries } from "../../../../entities/Deliveries";
import { AppError } from "../../../Error/appError";
import { UserAlreadyExists } from "../../../Error/userErrors/userAlreadyExistsError";
import { IClientDTO } from "../../dto/IclientDTO";
import { IClientRepository } from "../IclientRepository";

export class CreateClientInMemory implements IClientRepository {
  private clientInMemoryRepository: Client[] = [];
  private DeliveryInMemmoryRepository: Deliveries[] = [];

  async findByUsername(username: String): Promise<Client> {
    const user = await this.clientInMemoryRepository.find(
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
    this.clientInMemoryRepository.push(client);

    return client;
  }
  async findAllDeliveries(id_client: string) {
    const findAll = await this.clientInMemoryRepository.filter(
      (item) => item.id === id_client
    );

    return findAll;
  }
}
