import { prisma } from "../../../../databases/prismaClient";
import { Deliveries } from "../../../../entities/Deliveries";
import { CreateDeliveryDTO } from "../../dto/createDeliveryDTO";
import { ICreateDeliveries } from "../IcreateDeliveries";

export class CreateDeliveries implements ICreateDeliveries {
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
}
