import { IDeliveriesRepository } from "../../repositories/IDeliveriesRepositories";
import { CreateDeliveryDTO } from "../../dto/createDeliveryDTO";

export class CreateDeliveriesUseCase {
  constructor(private createDeliveriesRepository: IDeliveriesRepository) {}
  async execute({ item_name, id_client, created_at }: CreateDeliveryDTO) {
    const delivery = await this.createDeliveriesRepository.create({
      item_name,
      id_client,
      created_at,
    });

    return delivery;
  }
}
