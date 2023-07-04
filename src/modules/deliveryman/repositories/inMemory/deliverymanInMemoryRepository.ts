import { Deliveryman } from "../../../../entities/Deliveryman";
import { DeliverymanDto } from "../../dto/deliverymanDto";
import { IDeliverymanRepository } from "../IdelivermanRepositrory";
import { Deliveries } from "../../../../entities/Deliveries";

export class DeliverymanRepository implements IDeliverymanRepository {
  constructor(
    private deliverymanRepository: Deliveryman[] = [],
    private deliveriesRepository: Deliveries[] = []
  ) {}
  async findByUserName(username: string): Promise<Deliveryman> {
    const userNameExists = this.deliverymanRepository.find(
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
  async findAllDeliveriesByIdDeliveryman(id_deliveryman: string) {
    return this.deliveriesRepository.filter(
      (item) => item.id_deliveryman === id_deliveryman
    );
  }
}
