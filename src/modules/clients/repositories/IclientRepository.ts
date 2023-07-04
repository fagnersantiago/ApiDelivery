import { Client } from "../../../entities/Client";
import { Deliveries } from "../../../entities/Deliveries";
import { IClientDTO } from "../dto/IclientDTO";

export interface IClientRepository {
  create(data: IClientDTO): Promise<Client>;
  findByUsername(username: string): Promise<Client>;
  findAllDeliveries(id_client: string): Promise<Deliveries[]>;
}
