import { DeliverymanRepositoriesPrisma } from "../../repositories/prisma/deliveyrmanPrismaRepositories";
import { CreateDeliverymanController } from "./createDeliverymanController";
import { CreateDeliverymanUseCase } from "./createDeliverymanUseCase";

export const createDeliverymanFactory = () => {
  const createDeliverymanRepository = new DeliverymanRepositoriesPrisma();
  const createDeliveryman = new CreateDeliverymanUseCase(
    createDeliverymanRepository
  );
  const createDeliverymanController = new CreateDeliverymanController(
    createDeliveryman
  );
  return createDeliverymanController;
};
