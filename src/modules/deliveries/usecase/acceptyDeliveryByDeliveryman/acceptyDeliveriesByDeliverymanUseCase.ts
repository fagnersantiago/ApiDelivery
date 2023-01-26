import { Deliveries } from "../../../../entities/Deliveries";
import {
  IDeliveriesRepository,
  IUpdateDelivery,
} from "../../repositories/IDeliveriesRepositories";

export class AcceptyDeliveriesByDeliverymanUseCase {
  constructor(private updateDeliveryRepository: IDeliveriesRepository) {}

  async execute({ id, id_deliveryman }: IUpdateDelivery) {
    const updateDelivery = await this.updateDeliveryRepository.update({
      id,
      id_deliveryman,
    });

    return updateDelivery;
  }
}
