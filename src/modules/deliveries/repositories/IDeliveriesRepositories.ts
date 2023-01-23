import { Deliveries } from "../../../entities/Deliveries";

import { CreateDeliveryDTO } from "../dto/createDeliveryDTO";

export interface IUpdateDelivery {
  id_delivery: string;
  id_deliveryman: string;
}

export interface IDeliveriesRepository {
  create({
    id_client,
    item_name,
    created_at,
  }: CreateDeliveryDTO): Promise<Deliveries>;

  update({ id_delivery, id_deliveryman }: IUpdateDelivery): Promise<Deliveries>;
}
