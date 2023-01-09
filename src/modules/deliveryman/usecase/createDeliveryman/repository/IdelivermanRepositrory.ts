import { Deliveryman } from "../../../../../entities/Deliveryman";
import { DeliverymanDto } from "../../../dto/deliverymanDto";

export interface IDeliverymanRepository {
  findByUserName(username: string): Promise<Deliveryman>;
  create(data: DeliverymanDto): Promise<Deliveryman>;
}
