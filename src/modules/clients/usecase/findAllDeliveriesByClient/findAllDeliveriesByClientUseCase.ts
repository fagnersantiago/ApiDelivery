import { prisma } from "../../../../databases/prismaClient";

export class FindAllDeliveriesByClientUseCase {
  async execute(id_client: string) {
    return await prisma.clients.findMany({
      where: {
        id: id_client,
      },
      select: {
        username: true,
        id: true,
        deliveries: true,
      },
    });
  }
}
