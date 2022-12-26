import { prisma } from "../../../../databases/prismaClient";

interface IUpdate {
  id_delivery: string;
  id_deliveryman: string;
}

export class UpdateEndAtUseCase {
  async execute({ id_delivery, id_deliveryman }: IUpdate) {
    const deleveries = await prisma.deliveries.updateMany({
      where: {
        id: id_delivery,
        id_deliveryman,
      },
      data: {
        end_at: new Date(),
      },
    });

    return deleveries;
  }
}
