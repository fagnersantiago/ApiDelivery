import { Deliveryman } from "../../../entities/Deliveryman";
import { DeliverymanDto } from "../dto/deliverymanDto";
import { Deliveries } from "../../../entities/Deliveries";

export interface IDeliverymanRepository {
  findByUserName(username: string): Promise<Deliveryman>;
  create(data: DeliverymanDto): Promise<Deliveryman>;
  findAllDeliveriesByIdDeliveryman(
    id_deliveryman: string
  ): Promise<Deliveries[]>;
}
