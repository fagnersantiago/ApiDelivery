import { prisma } from "../../../../databases/prismaClient";
import { hash } from "bcrypt";
import { DeliverymanAlreadyExists } from "../../../Error/deliverymanErrors/deliverymanAlreadyExists";

interface IDeliveryman {
  username: string;
  password: string;
}

export class CreateDeliveryman {
  async execute({ username, password }: IDeliveryman) {
    const deliverymanExist = await prisma.deliveryman.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });

    if (deliverymanExist) {
      throw new DeliverymanAlreadyExists();
    }
    const hashPassword = await hash(password, 10);

    const client = await prisma.deliveryman.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return client;
  }
}
