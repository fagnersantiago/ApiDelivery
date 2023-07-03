import { IClientRepository } from "../../repositories/IclientRepository";

export class FindAllDeliveriesByClientUseCase {
  constructor(private clientRepository: IClientRepository) {}

  async execute(id_client: string) {
    return await this.clientRepository.findAllDeliveries(id_client);
  }
}
