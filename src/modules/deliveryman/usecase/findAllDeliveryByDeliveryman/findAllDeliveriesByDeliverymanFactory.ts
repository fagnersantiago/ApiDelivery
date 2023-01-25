import { FindAllDeliveriesByDeliverymanUseCase } from "./findAllDeliveriesByDeliverymanUseCase";
import { FindAllDeliveriesByDeliverymanController } from "./findAllDeliveriesByDeliverymanController";
import { DeliverymanRepositoriesPrisma } from "../../repositories/prisma/deliveyrmanPrismaRepositories";

export const findAllDeliveriesByDeliverymanFactory = () => {
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
};
