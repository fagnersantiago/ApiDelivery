import { prisma } from "../../../../databases/prismaClient";

interface IUpdateDelivery {
  id_delivery: string;
  id_deliveryman: string;
}
export class UpadateDeliverymanUseCase {
  async execute({ id_delivery, id_deliveryman }: IUpdateDelivery) {
    const deliveries = await prisma.deliveries.update({
      where: {
        id: id_delivery,
      },
      data: {
        id_deliveryman,
      },
    });
    return deliveries;
  }
}
