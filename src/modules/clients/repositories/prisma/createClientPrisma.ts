import { prisma } from "../../../../databases/prismaClient";
import { Client } from "../../../../entities/Client";
import { Deliveries } from "../../../../entities/Deliveries";
import { IClientDTO } from "../../dto/IclientDTO";
import { IClientRepository } from "../IclientRepository";

export class ClientPrismaRepository implements IClientRepository {
  async findByUsername(username: string): Promise<Client> {
    const clientExist = await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });
    return clientExist as Client;
  }

  async create({ username, password }: IClientDTO): Promise<Client> {
    const client = await prisma.clients.create({
      data: {
        username,
        password,
      },
    });

    return client;
  }

  async findAllDeliveries(id_client: string) {
    const find = await prisma.clients.findMany({
      where: {
        id: id_client,
      },
      select: {
        username: true,
        id: true,
        deliveries: true,
      },
    });

    return find;
  }
}
