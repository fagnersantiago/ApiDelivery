import { Deliveryman } from "../../../../../../entities/Deliveryman";
import { prisma } from "../../../../../../databases/prismaClient";
import { IDeliverymanRepository } from "../IdelivermanRepositrory";
import { DeliverymanDto } from "../../../../dto/deliverymanDto";

export class CreateDeliverymanPrisma implements IDeliverymanRepository {
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
