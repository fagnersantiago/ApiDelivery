import { prisma } from "../../../../databases/prismaClient";

interface IUpdateDelivery {
  id_delivery: string;
  id_deliveryman: string;
}
export class UpadateDeliverymanUseCase {
  async execute({ id_delivery, id_deliveryman }: IUpdateDelivery) {
    return await prisma.deliveries.update({
      data: { id_deliveryman },
      where: {
        id: id_delivery,
      },
    });
  }
}
