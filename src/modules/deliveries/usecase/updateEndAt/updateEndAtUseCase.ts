import { prisma } from "../../../../databases/prismaClient";

interface IUpdate {
  id_delivery: string;
  id_deliveryman: string;
}

export class UpdateEndAtUseCase {
  async execute({ id_delivery, id_deliveryman }: IUpdate) {
    const deleveries = await prisma.deliveries.updateMany({
      data: {
        end_at: new Date(),
      },
      where: {
        id: id_delivery,
        id_deliveryman,
      },
    });

    return deleveries;
  }
}
