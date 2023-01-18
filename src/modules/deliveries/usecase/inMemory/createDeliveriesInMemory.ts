import { Deliveries } from "../../../../entities/Deliveries";
import { ICreateDeliveries } from "../IcreateDeliveries";
import { CreateDeliveryDTO } from "../../dto/createDeliveryDTO";

export class CreateDeliveriesInMemory implements ICreateDeliveries {
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
}
