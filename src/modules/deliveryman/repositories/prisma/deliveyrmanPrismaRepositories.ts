import { Deliveryman } from "../../../../entities/Deliveryman";
import { prisma } from "../../../../databases/prismaClient";
import { IDeliverymanRepository } from "../IdelivermanRepositrory";
import { DeliverymanDto } from "../../dto/deliverymanDto";
import { Deliveries } from "../../../../entities/Deliveries";

export class DeliverymanRepositoriesPrisma implements IDeliverymanRepository {
  async findAllDeliveriesByIdDeliveryman(
    id_deliveryman: string
  ): Promise<Deliveries[]> {
    const findAll = await prisma.deliveries.findMany({
      where: {
        id: id_deliveryman,
      },

      select: {
        id: true,
        id_client: true,
        id_deliveryman: true,
      },
    });
    console.log(findAll);

    return findAll as Deliveries[];
  }

  async findByUserName(username: string): Promise<Deliveryman> {
    const deliverimanExists = await prisma.deliveryman.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });

    return deliverimanExists as Deliveryman;
  }

  async create({ username, password }: DeliverymanDto): Promise<Deliveryman> {
    const deleveryman = await prisma.deliveryman.create({
      data: {
        username,
        password,
      },
    });

    return deleveryman;
  }
}
