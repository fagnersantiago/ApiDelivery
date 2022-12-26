import { prisma } from "../../../../databases/prismaClient";

export class FindAllAvailableDeliveryUseCase {
  async execute() {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        end_at: null,
        deliveryman: null,
      },
    });

    return deliveries;
  }
}
