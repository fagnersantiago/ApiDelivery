import { Router } from "express";
import { AuthenticateClientController } from "./modules/Account/AuthenticateClient/usecase/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/Account/AthenticateDeliveryman/usercase/authenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/usecase/createClientsController";
import { CreateDeliverymanController } from "./modules/deliveryman/usecase/createDeliverymanController";
import { CreateDeliverieController } from "./modules/deliveries/usecase/createDelivery/createDeliveriesController";
import { ensureAuthentication } from "./modules/middlewares/ensureAuthenticate";
import { FindAllDeliveryAvailableController } from "./modules/deliveries/usecase/findAllWithoutEndDate/findAllAvailableDeliveryController";
import { ensureAtuhenticateDeliveryman } from "./modules/middlewares/ensureAtuhenticateDeliveryman";

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const authentticateDeliveryman = new AuthenticateDeliverymanController();
const createclientCrontroller = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const createDeliveryController = new CreateDeliverieController();
const findaAllAvailableDelivery = new FindAllDeliveryAvailableController();

routes.post("/auth/client", authenticateClientController.handle);
routes.post("/auth/deliveryman", authentticateDeliveryman.handle);
routes.post("/client/", createclientCrontroller.handle);
routes.post("/deliveryman/", createDeliverymanController.handle);
routes.post(
  "/delivery/",
  ensureAuthentication,
  createDeliveryController.handle
);

routes.get(
  "/delivery/available",
  ensureAtuhenticateDeliveryman,
  findaAllAvailableDelivery.handle
);

export { routes };
