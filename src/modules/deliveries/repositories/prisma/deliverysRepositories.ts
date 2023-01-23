import { prisma } from "../../../../databases/prismaClient";
import { Deliveries } from "../../../../entities/Deliveries";
import { CreateDeliveryDTO } from "../../dto/createDeliveryDTO";

interface IUpdateDelivery {
  id_delivery: string;
  id_deliveryman: string;
}

export class DeliveriesRepositories {
  async create({
    id_client,
    item_name,
    created_at,
  }: CreateDeliveryDTO): Promise<Deliveries> {
    const deliveries = await prisma.deliveries.create({
      data: {
        item_name,
        id_client,
        created_at,
      },
    });

    return deliveries as Deliveries;
  }
  async update({ id_delivery, id_deliveryman }: IUpdateDelivery) {
    return await prisma.deliveries.update({
      data: { id_deliveryman },
      where: {
        id: id_delivery,
      },
    });
  }
}
