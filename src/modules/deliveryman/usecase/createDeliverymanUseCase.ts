import { prisma } from "../../../databases/prismaClient";
import { hash } from "bcrypt";

interface IDeliveryman {
  username: string;
  password: string;
}

export class CreateDeliveryman {
  async execute({ username, password }: IDeliveryman) {
    const clientExist = await prisma.deliveryman.findFirst({
      where: {
        username: {
          mode: "insensitive",
        },
      },
    });

    if (clientExist) {
      throw Error("deliveryman already exists");
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
