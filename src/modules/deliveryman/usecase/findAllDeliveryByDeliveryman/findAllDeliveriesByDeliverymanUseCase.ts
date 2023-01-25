import { prisma } from "../../../../databases/prismaClient";
import { Deliveries } from "../../../../entities/Deliveries";
import { IDeliverymanRepository } from "../../repositories/IdelivermanRepositrory";

export class FindAllDeliveriesByDeliverymanUseCase {
  constructor(private deliveriesRepository: IDeliverymanRepository) {}
  async execute(id_deliveryman: string): Promise<Deliveries[]> {
    return await this.deliveriesRepository.findAllDeliveriesByIdDeliveryman(
      id_deliveryman
    );
  }
}
