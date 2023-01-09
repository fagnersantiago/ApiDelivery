import { Deliveryman } from "../../../../../../entities/Deliveryman";
import { DeliverymanDto } from "../../../../dto/deliverymanDto";
import { IDeliverymanRepository } from "../IdelivermanRepositrory";

export class DeliverymanRepository implements IDeliverymanRepository {
  constructor(private deliverymanRepository: Deliveryman[] = []) {}
  async findByUserName(username: string): Promise<Deliveryman> {
    const userNameExists = await this.deliverymanRepository.find(
      (item) => item.username === username
    );
    return userNameExists as Deliveryman;
  }
  async create({ username, password }: DeliverymanDto): Promise<Deliveryman> {
    const deliveryman = await Object.assign({
      username,
      password,
    });
    this.deliverymanRepository.push(deliveryman);

    return deliveryman;
  }
}
