import { prisma } from "../../../databases/prismaClient";

interface IDeliveries {
  item_name: string;
  id_client: string;
}

export class CreateDeliveriesUseCase {
  async execute({ item_name, id_client }: IDeliveries) {
    const delivery = await prisma.deliveries.create({
      data: {
        item_name,
        id_client,
      },
    });
    return delivery;
  }
}
