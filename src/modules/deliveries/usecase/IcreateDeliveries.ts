import { Deliveries } from "../../../entities/Deliveries";

import { CreateDeliveryDTO } from "../dto/createDeliveryDTO";
export interface ICreateDeliveries {
  create({
    id_client,
    item_name,
    created_at,
  }: CreateDeliveryDTO): Promise<Deliveries[]>;
}
