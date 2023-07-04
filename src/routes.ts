import { Router } from "express";
import { AuthenticateDeliverymanController } from "./modules/Account/AthenticateDeliveryman/usecase/authenticateDeliverymanController";

import { ensureAuthentication } from "./modules/middlewares/ensureAuthenticate";
import { FindAllDeliveryAvailableController } from "./modules/deliveries/usecase/findAllAvailableDelivery/findAllAvailableDeliveryController";
import { ensureAtuhenticateDeliveryman } from "./modules/middlewares/ensureAtuhenticateDeliveryman";

import { UpdateEndAtController } from "./modules/deliveries/usecase/updateEndAt/updateEndAtController";
import { Factory } from "./shared/factory";

const routes = Router();

const authentticateDeliveryman = new AuthenticateDeliverymanController();
const findaAllAvailableDelivery = new FindAllDeliveryAvailableController();

const updateEndAt = new UpdateEndAtController();

routes.post("/auth/client", (request, response) =>
  new Factory().authenticateClientFactory().handle(request, response)
);
routes.post("/auth/deliveryman", authentticateDeliveryman.handle);
routes.post("/client/", (request, response) =>
  new Factory().createDeliverymanFactory().handle(request, response)
);

routes.post("/deliveryman/", (request, response) =>
  new Factory().createDeliverymanFactory().handle(request, response)
);
routes.post("/delivery/", ensureAuthentication, (request, response) =>
  new Factory().createDeliveryFactory().handle(request, response)
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
    new Factory()
      .findAllDeliveriesByDeliverymanFactory()
      .handle(request, response)
);

routes.put(
  "/delivery/acceptyDeliveryByDeliveryman/:id",
  ensureAtuhenticateDeliveryman,
  (request, response) => {
    new Factory()
      .acceptyDeliveryByDeliverymanFactory()
      .handle(request, response);
  }
);
routes.put(
  "/deliveryman/updateDeliveryman/:id",
  ensureAtuhenticateDeliveryman,
  updateEndAt.handle
);

export { routes };
