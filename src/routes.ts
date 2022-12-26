import { Router } from "express";
import { AuthenticateClientController } from "./modules/Account/AuthenticateClient/usecase/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/Account/AthenticateDeliveryman/usecase/authenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/usecase/createClient/createClientsController";
import { CreateDeliverymanController } from "./modules/deliveryman/usecase/createDeliveryman/createDeliverymanController";
import { CreateDeliverieController } from "./modules/deliveries/usecase/createDelivery/createDeliveriesController";
import { ensureAuthentication } from "./modules/middlewares/ensureAuthenticate";
import { FindAllDeliveryAvailableController } from "./modules/deliveries/usecase/findAllAvailableDelivery/findAllAvailableDeliveryController";
import { ensureAtuhenticateDeliveryman } from "./modules/middlewares/ensureAtuhenticateDeliveryman";
import { UpdateDeliverymanController } from "./modules/deliveries/usecase/updateDelivery/updateDeliverymanController";
import { FindAllDeliveriesByClientController } from "./modules/clients/usecase/findAllDeliveriesByClient/findAllDeliveriesByClientController";
import { FindAllDeliveriesByDeliverymanController } from "./modules/deliveryman/usecase/findAllDeliveryByDeliveryman/findAllDeliveryController";
import { UpdateEndAtController } from "./modules/deliveries/usecase/updateEndAt/updateEndAtController";

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const authentticateDeliveryman = new AuthenticateDeliverymanController();
const createclientCrontroller = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const createDeliveryController = new CreateDeliverieController();
const findaAllAvailableDelivery = new FindAllDeliveryAvailableController();
const updateDaliveryman = new UpdateDeliverymanController();
const findAllDeliveriesByClientController =
  new FindAllDeliveriesByClientController();
const findAllDeliveriesByDeliverymanController =
  new FindAllDeliveriesByDeliverymanController();

const updateEndAt = new UpdateEndAtController();

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

routes.get(
  "/client/deliveries",
  ensureAuthentication,
  findAllDeliveriesByClientController.handle
);

routes.get(
  "/deliveryman/deliveries",
  ensureAtuhenticateDeliveryman,
  findAllDeliveriesByDeliverymanController.handle
);

routes.put(
  "/delivery/updateDeliveryman/:id",
  ensureAtuhenticateDeliveryman,
  updateDaliveryman.handle
);
routes.put(
  "/deliveryman/updateDeliveryman/:id",
  ensureAtuhenticateDeliveryman,
  updateEndAt.handle
);

export { routes };
