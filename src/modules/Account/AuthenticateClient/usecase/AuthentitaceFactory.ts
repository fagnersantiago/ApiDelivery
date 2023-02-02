import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";
import { AuthenticateClientController } from "./AuthenticateClientController";
import { ClientPrismaRepository } from "../../../clients/repositories/prisma/createClientPrisma";

export const authenticateClientFactory = () => {
  const createClientRepository = new ClientPrismaRepository();
  const authenticateClient = new AuthenticateClientUseCase(
    createClientRepository
  );
  const authenticateClientController = new AuthenticateClientController(
    authenticateClient
  );

  return authenticateClientController;
};
