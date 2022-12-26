import { prisma } from "../../../../databases/prismaClient";

export class FindAllDeliveriesByDeliverymanUseCase {
  async execute(id_deliveryman: string) {
    return await prisma.deliveryman.findMany({
      where: {
        id: id_deliveryman,
      },
      select: {
        id: true,
        username: true,
        deliveries: true,
      },
    });
  }
}
