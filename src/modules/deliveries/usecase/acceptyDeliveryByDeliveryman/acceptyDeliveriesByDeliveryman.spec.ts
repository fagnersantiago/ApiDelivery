import { DeliverymanRepository } from "../../../deliveryman/repositories/inMemory/deliverymanInMemoryRepository";
import { CreateDeliverymanUseCase } from "../../../deliveryman/usecase/createDeliveryman/createDeliverymanUseCase";
import { IUpdateDelivery } from "../../repositories/IDeliveriesRepositories";
import { CreateDeliveriesInMemory } from "../../repositories/inMemory/deliveriesRepositriesInMemory";
import { CreateDeliveriesUseCase } from "../createDelivery/createDeliveriesUseCase";
import { AcceptyDeliveriesByDeliverymanUseCase } from "./acceptyDeliveriesByDeliverymanUseCase";

let acceptDeliveryInMemory: CreateDeliveriesInMemory;
let acceptDeliveryUseCase: AcceptyDeliveriesByDeliverymanUseCase;
let createDeliveriesInMemory: CreateDeliveriesInMemory;
let createDeliveryUseCase: CreateDeliveriesUseCase;
let deliverymanInMemory: DeliverymanRepository;
let deliverymanUseCase: CreateDeliverymanUseCase;

describe("Accept Delivery by Deliveryman", () => {
  beforeAll(() => {
    createDeliveriesInMemory = new CreateDeliveriesInMemory();
    createDeliveryUseCase = new CreateDeliveriesUseCase(
      createDeliveriesInMemory
    );
    acceptDeliveryInMemory = new CreateDeliveriesInMemory();
    acceptDeliveryUseCase = new AcceptyDeliveriesByDeliverymanUseCase(
      acceptDeliveryInMemory
    );

    deliverymanInMemory = new DeliverymanRepository();
    deliverymanUseCase = new CreateDeliverymanUseCase(deliverymanInMemory);
  });

  it("Should be able accept delivery by deliveryman", async () => {
    const createDelivery = await createDeliveryUseCase.execute({
      item_name: "hot dog",
      id_client: "1231313",
      created_at: new Date(),
    });

    await createDeliveriesInMemory.create(createDelivery);

    const acceptedDelivery = await acceptDeliveryUseCase.execute({
      id: createDelivery.id as string,
      id_deliveryman: "12345654",
    });

    expect(acceptedDelivery).toHaveProperty("id_deliveryman");
  });
});
