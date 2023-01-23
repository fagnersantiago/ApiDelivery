import { DeliveriesRepositories } from "../../repositories/prisma/deliverysRepositories";
import { CreateDeliveriesController } from "./createDeliveriesController";
import { CreateDeliveriesUseCase } from "./createDeliveriesUseCase";

export const createDeliveryFactory = () => {
  const createDeliveryInPrisma = new DeliveriesRepositories();
  const createDeliveryUseCase = new CreateDeliveriesUseCase(
    createDeliveryInPrisma
  );
  const createDeliveryController = new CreateDeliveriesController(
    createDeliveryUseCase
  );

  return createDeliveryController;
};
