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
  async update({
    id_delivery,
    id_deliveryman,
  }: IUpdateDelivery): Promise<Deliveries> {
    const updateDelivery = this.devilverieRepository.find(
      (item) => item.id === item.id
    );
    await Object.assign({
      id_delivery,
      id_deliveryman,
    });
    return updateDelivery as Deliveries;
  }
}
