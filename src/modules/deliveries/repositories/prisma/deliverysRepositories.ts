import { prisma } from "../../../../databases/prismaClient";
import { Deliveries } from "../../../../entities/Deliveries";
import { CreateDeliveryDTO } from "../../dto/createDeliveryDTO";
import {
  IDeliveriesRepository,
  IUpdateDelivery,
} from "../IDeliveriesRepositories";

export class DeliveriesRepositories implements IDeliveriesRepository {
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

  async update({ id, id_deliveryman }: IUpdateDelivery): Promise<Deliveries> {
    const updatedDelivery = await prisma.deliveries.update({
      data: { id_deliveryman },
      where: {
        id: id,
      },
    });
    return updatedDelivery as Deliveries;
  }
}
