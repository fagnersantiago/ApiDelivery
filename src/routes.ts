import { Router } from "express";
import { AuthenticateDeliverymanController } from "./modules/Account/AthenticateDeliveryman/usecase/authenticateDeliverymanController";

import { ensureAuthentication } from "./modules/middlewares/ensureAuthenticate";
import { FindAllDeliveryAvailableController } from "./modules/deliveries/usecase/findAllAvailableDelivery/findAllAvailableDeliveryController";
import { ensureAtuhenticateDeliveryman } from "./modules/middlewares/ensureAtuhenticateDeliveryman";

import { UpdateEndAtController } from "./modules/deliveries/usecase/updateEndAt/updateEndAtController";
import { createClientFactoy } from "./modules/clients/usecase/createClient/createClientFactory";
import { acceptyDeliveryByDeliverymanFactory } from "./modules/deliveries/usecase/acceptyDeliveryByDeliveryman/acceptyDeliveriesByDeliverymanFactory";
import { authenticateClientFactory } from "./modules/Account/AuthenticateClient/usecase/AuthentitaceFactory";
import { createDeliveryFactory } from "./modules/deliveries/usecase/createDelivery/createDeliveriesFactory";
import { findAllDeliveriesByDeliverymanFactory } from "./modules/deliveryman/usecase/findAllDeliveryByDeliveryman/findAllDeliveriesByDeliverymanFactory";

const routes = Router();

const authentticateDeliveryman = new AuthenticateDeliverymanController();
const findaAllAvailableDelivery = new FindAllDeliveryAvailableController();

const updateEndAt = new UpdateEndAtController();

routes.post("/auth/client", (request, response) =>
  authenticateClientFactory().handle(request, response)
);
routes.post("/auth/deliveryman", authentticateDeliveryman.handle);
routes.post("/client/", (request, response) =>
  createClientFactoy().handle(request, response)
);
//routes.post("/deliveryman/", createDeliverymanController.handle);
routes.post("/delivery/", ensureAuthentication, (request, response) =>
  createDeliveryFactory().handle(request, response)
);

routes.get(
  "/delivery/available",
  ensureAtuhenticateDeliveryman,
  findaAllAvailableDelivery.handle
);

routes.get("/client/deliveries", ensureAuthentication);

routes.get(
  "/deliveryman/deliveries",
  ensureAtuhenticateDeliveryman,
  (request, response) =>
    findAllDeliveriesByDeliverymanFactory().handle(request, response)
);

routes.put(
  "/delivery/acceptyDeliveryByDeliveryman/:id",
  ensureAtuhenticateDeliveryman,
  (request, response) => {
    acceptyDeliveryByDeliverymanFactory().handle(request, response);
  }
);
routes.put(
  "/deliveryman/updateDeliveryman/:id",
  ensureAtuhenticateDeliveryman,
  updateEndAt.handle
);

export { routes };
