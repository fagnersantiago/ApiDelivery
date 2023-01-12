import { prisma } from "../../../../databases/prismaClient";
import { IFindDeliveriesByDeliveryman } from "./repository/IfindAllDeliveriesByDeliverymanRepository";

export class FindAllDeliveriesByDeliverymanUseCase {
  constructor(private deliveriesRepository: IFindDeliveriesByDeliveryman) {}
  async execute(id_deliveryman: string) {
    return await this.deliveriesRepository.findById(id_deliveryman);
  }
}
