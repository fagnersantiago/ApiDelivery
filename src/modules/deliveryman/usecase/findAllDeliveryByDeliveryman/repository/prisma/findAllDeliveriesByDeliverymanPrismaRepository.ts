import { prisma } from "../../../../../../databases/prismaClient";

export class FindAllDeliveriesByDeliverymanRepository {
  async execute(id_deliveryman: string) {
    return await prisma.deliveries.findMany({
      where: {
        id: id_deliveryman,
      },

      select: {
        id: true,
        id_client: true,
        id_deliveryman: true,
      },
    });
  }
}
