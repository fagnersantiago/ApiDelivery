import { IClientRepository } from "../../repositories/IclientRepository";
import { DeliveriesNotFound } from "../../../Error/deliveries/deliveriesError";
import { Deliveries } from "../../../../entities/Deliveries";
import { Client } from "../../../../entities/Client";

export class FindAllDeliveriesByClientUseCase {
  constructor(private clientRepository: IClientRepository) {}

  async execute(id_client: string): Promise<Deliveries[]> {
    const deliveriesExists = await this.clientRepository.findAllDeliveries(
      id_client
    );

    if (!deliveriesExists) {
      throw new DeliveriesNotFound();
    }

    return deliveriesExists;
  }
}
