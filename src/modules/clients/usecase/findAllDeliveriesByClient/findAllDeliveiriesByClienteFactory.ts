import { ClientPrismaRepository } from "../../repositories/prisma/createClientPrisma";
import { FindAllDeliveriesByClientUseCase } from "./findAllDeliveriesByClientUseCase";
import { FindAllDeliveriesByClientController } from "./findAllDeliveriesByClientController";

export const findAllDeliveriesByClientFactory = () => {
  const findAllDeliveriesByClientInPrisma = new ClientPrismaRepository();
  const findAllDeliveriesByClientUseCase = new FindAllDeliveriesByClientUseCase(
    findAllDeliveriesByClientInPrisma
  );

  const findAllDeliveriesByCLientController =
    new FindAllDeliveriesByClientController(findAllDeliveriesByClientUseCase);
  return findAllDeliveriesByCLientController;
};
