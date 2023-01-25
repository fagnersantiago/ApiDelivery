import { Deliveries } from "../../../../entities/Deliveries";
import {
  IDeliveriesRepository,
  IUpdateDelivery,
} from "../IDeliveriesRepositories";
import { CreateDeliveryDTO } from "../../dto/createDeliveryDTO";

export class CreateDeliveriesInMemory implements IDeliveriesRepository {
  constructor(private devilverieRepository: Deliveries[] = []) {}
  async create({
    id_client,
    item_name,
    created_at,
  }: CreateDeliveryDTO): Promise<Deliveries> {
    const deliveries = await Object.assign({
      id_client,
      item_name,
      created_at,
    });
    this.devilverieRepository.push(deliveries);
    return deliveries;
  }
  async update({ id, id_deliveryman }: IUpdateDelivery): Promise<Deliveries> {
    const delivery = this.devilverieRepository.find((item) => item.id === id);
    const updateDeliveries = await Object.assign({
      id: delivery?.id,
      id_deliveryman,
    });

    this.devilverieRepository.push(updateDeliveries);

    return updateDeliveries;
  }
}
