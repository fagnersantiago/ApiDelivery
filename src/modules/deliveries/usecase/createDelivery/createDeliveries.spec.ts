import { CreateClientInMemory } from "../../../clients/repository/inMemory/createClientInMemory";
import { CreateDeliveriesInMemory } from "../../repositories/inMemory/createDeliveriesInMemory";
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
    const { item_name, id_client, created_at } =
      await createDeliveriesUsecase.execute({
        item_name: "hot dog",
        id_client: "1231313",
        created_at: new Date(),
      });

    const deliveries = await createDeliveriesInMemory.create({
      item_name,
      id_client,
      created_at,
    });

    expect(deliveries).toHaveProperty("id");
  });
});
