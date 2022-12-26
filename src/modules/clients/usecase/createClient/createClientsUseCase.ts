import { prisma } from "../../../../databases/prismaClient";
import { hash } from "bcrypt";

interface IUserClient {
  username: string;
  password: string;
}

export class CreateClient {
  async execute({ username, password }: IUserClient) {
    const clientExist = await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });

    if (clientExist) {
      throw Error("User alredy exists");
    }
    const hashPassword = await hash(password, 10);

    const client = await prisma.clients.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return client;
  }
}
