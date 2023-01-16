import { prisma } from "../../../../databases/prismaClient";
import { CreateDeliveryDTO } from "../../dto/createDeliveryDTO";

export class CreateDeliveries {
  execute({ id_client, item_name, created_at }: CreateDeliveryDTO) {
    const deliveries = prisma.deliveries.create({
      data: {
        id_client,
        item_name,
        created_at,
      },
    });

    return deliveries;
  }
}
