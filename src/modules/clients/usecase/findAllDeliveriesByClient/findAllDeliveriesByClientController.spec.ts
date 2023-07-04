import { CreateDeliveriesInMemory } from "../../../deliveries/repositories/inMemory/deliveriesRepositriesInMemory";
import { CreateDeliveriesUseCase } from "../../../deliveries/usecase/createDelivery/createDeliveriesUseCase";

import { DeliveriesNotFound } from "../../../Error/deliveries/deliveriesError";

import { FindAllDeliveriesByClientUseCase } from "./findAllDeliveriesByClientUseCase";
import { CreateClientInMemory } from "../../repositories/inMemory/createClientInMemory";

let createDeliveriesInMemory: CreateDeliveriesInMemory;
let createDeliveriesUseCase: CreateDeliveriesUseCase;

let createClientInMemory: CreateClientInMemory;
let findAllDeliveriesByClientUseCase: FindAllDeliveriesByClientUseCase;

describe("findAllDeliveriesByClient", () => {
  createDeliveriesInMemory = new CreateDeliveriesInMemory();
  createDeliveriesUseCase = new CreateDeliveriesUseCase(
    createDeliveriesInMemory
  );

  createClientInMemory = new CreateClientInMemory();
  findAllDeliveriesByClientUseCase = new FindAllDeliveriesByClientUseCase(
    createClientInMemory
  );
});

it("should be albe find all deliveries by client", async () => {
  const deliveries = await createDeliveriesInMemory.create({
    id_client: "1231313",
    item_name: "hot dog",
    created_at: new Date(),
  });

  const allDeliverByclient = await findAllDeliveriesByClientUseCase.execute(
    deliveries.id_client
  );
  console.log(deliveries);

  expect(allDeliverByclient).toHaveProperty("id_client");
});

it("should not be albe find all deliveries by client if it not exists", async () => {
  expect(async () => {
    const deliveries = await createDeliveriesInMemory.create({
      id_client: "1231310",
      item_name: "hot dog",
      created_at: new Date(),
    });

    await findAllDeliveriesByClientUseCase.execute(deliveries.id_client);
  }).rejects.toBeInstanceOf(DeliveriesNotFound);
});
