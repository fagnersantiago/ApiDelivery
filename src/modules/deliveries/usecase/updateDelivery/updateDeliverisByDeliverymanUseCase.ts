import {
  IDeliveriesRepository,
  IUpdateDelivery,
} from "../../repositories/IDeliveriesRepositories";

export class UpadateDeliveriesByDeliverymanUseCase {
  constructor(private updateDeliveryRepository: IDeliveriesRepository) {}

  async execute({ id_delivery, id_deliveryman }: IUpdateDelivery) {
    return await this.updateDeliveryRepository.update({
      id_delivery,
      id_deliveryman,
    });
  }
}
