import { CreateDeliverymanPrisma } from "./repository/prisma/createPrismaDeliveryman";
import { CreateDeliverymanController } from "./createDeliverymanController";
import { CreateDeliverymanUseCase } from "./createDeliverymanUseCase";

export const createDeliverymanFactory = () => {
  const createDeliverymanRepository = new CreateDeliverymanPrisma();
  const createDeliveryman = new CreateDeliverymanUseCase(
    createDeliverymanRepository
  );
  const createDeliverymanController = new CreateDeliverymanController(
    createDeliveryman
  );
  return createDeliverymanController;
};
