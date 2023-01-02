import { Client } from "../../../entities/Client";
import { IClientDTO } from "../dto/IclientDTO";

export interface ClientRepository {
  create(data: IClientDTO): Promise<Client>;
  findByUsername(username: string): Promise<Client>;
}
