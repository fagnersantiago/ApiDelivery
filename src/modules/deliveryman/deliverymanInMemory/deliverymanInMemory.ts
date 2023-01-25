import { Deliveries } from "../../../entities/Deliveries";
import { Deliveryman } from "../../../entities/Deliveryman";
import { DeliverymanDto } from "../dto/deliverymanDto";
import { IDeliverymanRepository } from "../repositories/IdelivermanRepositrory";

export class DelverymanInMemory implements IDeliverymanRepository {
  private deleverynamInMemory: Deliveryman[] = [];
  private deliveriesInMemory: Deliveries[] = [];

  async findByUserName(username: string): Promise<Deliveryman> {
    const userNameExists = await this.deleverynamInMemory.find(
      (item) => item.username === username
    );

    return userNameExists as Deliveryman;
  }
  async create({ username, password }: DeliverymanDto): Promise<Deliveryman> {
    const deleveryman = new Deliveryman(username, password);
    await Object.assign(deleveryman, {
      username,
      password,
    });

    this.deleverynamInMemory.push(deleveryman);
    return deleveryman;
  }
  async findAllDeliveriesByIdDeliveryman(
    id_deliveryman: string
  ): Promise<Deliveries[]> {
    const findAll = this.deliveriesInMemory.filter(
      (item) => item.id_deliveryman === id_deliveryman
    );

    return findAll as Deliveries[];
  }
}
