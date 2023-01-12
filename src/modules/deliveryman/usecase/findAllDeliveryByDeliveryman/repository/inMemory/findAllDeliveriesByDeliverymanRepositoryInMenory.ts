import { Deliveries } from "../../../../../../entities/Deliveries";
import { IFindDeliveriesByDeliveryman } from "../IfindAllDeliveriesByDeliverymanRepository";

export class FindAllDeliveriesByDeliverymanRepositoryInMenory
  implements IFindDeliveriesByDeliveryman
{
  constructor(private deliveriesRepository: Deliveries[] = []) {}
  async findById(id_deliveryman: string): Promise<Deliveries[]> {
    return await this.deliveriesRepository.filter(
      (item) => item.id_deliveryman === id_deliveryman
    );
  }
}
