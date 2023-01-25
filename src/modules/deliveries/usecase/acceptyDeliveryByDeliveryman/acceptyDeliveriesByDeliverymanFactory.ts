import { DeliveriesRepositories } from "../../repositories/prisma/deliverysRepositories";
import { AcceptyDeliveriesByDeliverymanUseCase } from "./acceptyDeliveriesByDeliverymanUseCase";
import { AcceptyDeliveriesByDeliverymanController } from "./acceptyDeliveriesByDeliverymanController";

export const acceptyDeliveryByDeliverymanFactory = () => {
  const acceptyDeliveryInPrisma = new DeliveriesRepositories();
  const acceptyDeliviriesUseCase = new AcceptyDeliveriesByDeliverymanUseCase(
    acceptyDeliveryInPrisma
  );

  const acceptyDeliveryController =
    new AcceptyDeliveriesByDeliverymanController(acceptyDeliviriesUseCase);
  return acceptyDeliveryController;
};
