import { Client } from "../../../entities/Client";
import { IClientDTO } from "../dto/IclientDTO";

export interface IClientRepository {
  create(data: IClientDTO): Promise<Client>;
  findByUsername(username: string): Promise<Client>;
  findAllDeliveries(id_client: string): any;
}
