import { ICreateDeliveries } from "../../repositories/IDeliveriesRepositories";
import { CreateDeliveryDTO } from "../../dto/createDeliveryDTO";

export class CreateDeliveriesUseCase {
  constructor(private createDeliveriesRepository: ICreateDeliveries) {}
  async execute({ item_name, id_client, created_at }: CreateDeliveryDTO) {
    const delivery = await this.createDeliveriesRepository.create({
      item_name,
      id_client,
      created_at,
    });

    return delivery;
  }
}
