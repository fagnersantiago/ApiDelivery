import { ClientPrismaRepository } from "../modules/clients/repositories/prisma/createClientPrisma";
import { FindAllDeliveriesByClientUseCase } from "../modules/clients/usecase/findAllDeliveriesByClient/findAllDeliveriesByClientUseCase";
import { FindAllDeliveriesByClientController } from "../modules/clients/usecase/findAllDeliveriesByClient/findAllDeliveriesByClientController";

import { CreateClientController } from "../modules/clients/usecase/createClient/createClientsController";
import { CreateClientUseCase } from "../modules/clients/usecase/createClient/createClientsUseCase";

import { DeliveriesRepositories } from "../modules/deliveries/repositories/prisma/deliverysRepositories";
import { AcceptyDeliveriesByDeliverymanUseCase } from "../modules/deliveries/usecase/acceptyDeliveryByDeliveryman/acceptyDeliveriesByDeliverymanUseCase";
import { AcceptyDeliveriesByDeliverymanController } from "../modules/deliveries/usecase/acceptyDeliveryByDeliveryman/acceptyDeliveriesByDeliverymanController";

import { FindAllDeliveriesByDeliverymanUseCase } from "../modules/deliveryman/usecase/findAllDeliveryByDeliveryman/findAllDeliveriesByDeliverymanUseCase";
import { FindAllDeliveriesByDeliverymanController } from "../modules/deliveryman/usecase/findAllDeliveryByDeliveryman/findAllDeliveriesByDeliverymanController";
import { DeliverymanRepositoriesPrisma } from "../modules/deliveryman/repositories/prisma/deliveyrmanPrismaRepositories";
import { CreateDeliverymanController } from "../modules/deliveryman/usecase/createDeliveryman/createDeliverymanController";
import { CreateDeliverymanUseCase } from "../modules/deliveryman/usecase/createDeliveryman/createDeliverymanUseCase";

import { AuthenticateClientUseCase } from "../modules/Account/AuthenticateClient/usecase/AuthenticateClientUseCase";
import { AuthenticateClientController } from "../modules/Account/AuthenticateClient/usecase/AuthenticateClientController";

export class Factory {
  public findAllDeliveriesByClientFactory() {
    const findAllDeliveriesByClientInPrisma = new ClientPrismaRepository();
    const findAllDeliveriesByClientUseCase =
      new FindAllDeliveriesByClientUseCase(findAllDeliveriesByClientInPrisma);

    const findAllDeliveriesByCLientController =
      new FindAllDeliveriesByClientController(findAllDeliveriesByClientUseCase);
    return findAllDeliveriesByCLientController;
  }

  public createClientFactoy() {
    const createClientRepository = new ClientPrismaRepository();
    const createClient = new CreateClientUseCase(createClientRepository);
    const createClientController = new CreateClientController(createClient);

    return createClientController;
  }

  public acceptyDeliveryByDeliverymanFactory() {
    const acceptyDeliveryInPrisma = new DeliveriesRepositories();
    const acceptyDeliviriesUseCase = new AcceptyDeliveriesByDeliverymanUseCase(
      acceptyDeliveryInPrisma
    );

    const acceptyDeliveryController =
      new AcceptyDeliveriesByDeliverymanController(acceptyDeliviriesUseCase);
    return acceptyDeliveryController;
  }

  public findAllDeliveriesByDeliverymanFactory() {
    const findAllDeliverymanrRepositoriesPrisma =
      new DeliverymanRepositoriesPrisma();
    const findAllDeliveriesByDeliverymanUseCase =
      new FindAllDeliveriesByDeliverymanUseCase(
        findAllDeliverymanrRepositoriesPrisma
      );

    const findAllDeliveriesByDeliverymanController =
      new FindAllDeliveriesByDeliverymanController(
        findAllDeliveriesByDeliverymanUseCase
      );
    return findAllDeliveriesByDeliverymanController;
  }

  public createDeliverymanFactory() {
    const createDeliverymanRepository = new DeliverymanRepositoriesPrisma();
    const createDeliveryman = new CreateDeliverymanUseCase(
      createDeliverymanRepository
    );
    const createDeliverymanController = new CreateDeliverymanController(
      createDeliveryman
    );
    return createDeliverymanController;
  }
  public authenticateClientFactory() {
    const createClientRepository = new ClientPrismaRepository();
    const authenticateClient = new AuthenticateClientUseCase(
      createClientRepository
    );
    const authenticateClientController = new AuthenticateClientController(
      authenticateClient
    );

    return authenticateClientController;
  }
}
