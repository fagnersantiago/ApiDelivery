import { CreateDeliveries } from "../prisma/createDeliveriesPrisama";
import { CreateDeliveriesController } from "./createDeliveriesController";
import { CreateDeliveriesUseCase } from "./createDeliveriesUseCase";

export const createDeliveryFactory = () => {
  const createDeliveryInPrisma = new CreateDeliveries();
  const createDeliveryUseCase = new CreateDeliveriesUseCase(
    createDeliveryInPrisma
  );
  const createDeliveryController = new CreateDeliveriesController(
    createDeliveryUseCase
  );

  return createDeliveryController;
};
