import { ClientPrismaRepository } from "../../repositories/prisma/createClientPrisma";
import { CreateClientController } from "./createClientsController";
import { CreateClientUseCase } from "./createClientsUseCase";

export const createClientFactoy = () => {
  const createClientRepository = new ClientPrismaRepository();
  const createClient = new CreateClientUseCase(createClientRepository);
  const createClientController = new CreateClientController(createClient);

  return createClientController;
};
