import { CreateClientInMemory } from "../../../clients/repositories/inMemory/createClientInMemory";
import { CreateDeliveriesInMemory } from "../../repositories/inMemory/deliveriesRepositriesInMemory";
import { CreateDeliveriesUseCase } from "./createDeliveriesUseCase";

let createDeliveriesInMemory: CreateDeliveriesInMemory;
let createDeliveriesUsecase: CreateDeliveriesUseCase;

describe("Create Deliverys", () => {
  beforeEach(() => {
    createDeliveriesInMemory = new CreateDeliveriesInMemory();
    createDeliveriesUsecase = new CreateDeliveriesUseCase(
      createDeliveriesInMemory
    );
  });

  it("Should be able create a new delivery", async () => {
    await createDeliveriesUsecase.execute({
      item_name: "hot dog",
      id_client: "1231313",
      created_at: new Date(),
    });

    const deliveries = await createDeliveriesInMemory.create({
      item_name: "coca-cola",
      id_client: "assdf12sdfsggww",
      created_at: new Date(),
    });

    expect(deliveries).toHaveProperty("created_at");
  });
});
