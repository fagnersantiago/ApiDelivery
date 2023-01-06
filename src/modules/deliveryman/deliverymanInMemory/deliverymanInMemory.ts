import { Deliveryman } from "../../../entities/Deliveryman";
import { DeliverymanDto } from "../dto/deliverymanDto";
import { IDeliverymanRepository } from "../usecase/createDeliveryman/repository/IdelivermanRepositrory";

export class DelverymanInMemory implements IDeliverymanRepository {
  private deleverynamInMemory: Deliveryman[] = [];

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
}
