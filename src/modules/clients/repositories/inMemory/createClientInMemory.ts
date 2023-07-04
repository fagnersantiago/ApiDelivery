import { Client } from "../../../../entities/Client";
import { Deliveries } from "../../../../entities/Deliveries";
import { IClientDTO } from "../../dto/IclientDTO";
import { IClientRepository } from "../IclientRepository";

export class CreateClientInMemory implements IClientRepository {
  private clientInMemoryRepository: Client[] = [];
  private DeliveryInMemmoryRepository: Deliveries[] = [];

  async findByUsername(username: String): Promise<Client> {
    const user = this.clientInMemoryRepository.find(
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
  async findAllDeliveries(id_client: string): Promise<Deliveries[]> {
    console.log("ID", id_client);
    const findAll = this.DeliveryInMemmoryRepository.filter(
      (item) => item.id_client === id_client
    );
    console.log("AQUI", [findAll]);

    return findAll as Deliveries[];
  }
}
