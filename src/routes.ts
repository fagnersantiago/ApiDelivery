import { Router } from "express";
import { AuthenticateClientController } from "./modules/AuthenticateClient/usecase/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/AthenticateDeliveryman/usercase/authenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/usecase/createClientsController";
import { CreateDeliverymanController } from "./modules/deliveryman/usecase/createDeliverymanController";
import { CreateDeliverieController } from "./modules/deliveries/usecase/createDeliveriesController";
import { ensureAuthentication } from "./modules/middlewares/ensureAuthenticate";

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const authentticateDeliveryman = new AuthenticateDeliverymanController();
const createclientCrontroller = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const createDeliveryController = new CreateDeliverieController();

routes.post("/auth/client", authenticateClientController.handle);
routes.post("/auth/deliveryman", authentticateDeliveryman.handle);
routes.post("/client/", createclientCrontroller.handle);
routes.post("/deliveryman/", createDeliverymanController.handle);
routes.post(
  "/delivery/",
  ensureAuthentication,
  createDeliveryController.handle
);

export { routes };
