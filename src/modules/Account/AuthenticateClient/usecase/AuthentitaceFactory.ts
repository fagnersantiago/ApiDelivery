import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";
import { AuthenticateClientController } from "./AuthenticateClientController";
import { ClientPrismaRepository } from "../../../clients/repository/prisma/createClientPrisma";

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
