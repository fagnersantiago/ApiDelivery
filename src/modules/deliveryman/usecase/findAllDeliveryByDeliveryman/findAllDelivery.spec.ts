import { CreateDeliveriesUseCase } from "../../../deliveries/usecase/createDelivery/createDeliveriesUseCase";
import { CreateDeliveriesInMemory } from "../../../deliveries/usecase/inMemory/createDeliveriesInMemory";
import { CreateDeliverymanUseCase } from "../createDeliveryman/createDeliverymanUseCase";
import { DeliverymanRepository } from "../createDeliveryman/repository/inMemory/deliverymanInMemoryRepository";
import { FindAllDeliveriesByDeliverymanUseCase } from "./findAllDeliveryUseCase";
import { FindAllDeliveriesByDeliverymanRepositoryInMenory } from "./repository/inMemory/findAllDeliveriesByDeliverymanRepositoryInMenory";

let findAllDeliveriesInMenmory: FindAllDeliveriesByDeliverymanRepositoryInMenory;
let finAllDeliveriesUseCase: FindAllDeliveriesByDeliverymanUseCase;
let createDelivery: CreateDeliveriesUseCase;
let createDeliveryInMemory: CreateDeliveriesInMemory;
let createDeliverymanInMemory: DeliverymanRepository;
let createDeliverymanUseCase: CreateDeliverymanUseCase;

describe("Find All Deliveries", () => {
  beforeAll(() => {
    findAllDeliveriesInMenmory =
      new FindAllDeliveriesByDeliverymanRepositoryInMenory();
    finAllDeliveriesUseCase = new FindAllDeliveriesByDeliverymanUseCase(
      findAllDeliveriesInMenmory
    );
    createDeliveryInMemory = new CreateDeliveriesInMemory();
    createDelivery = new CreateDeliveriesUseCase(createDeliveryInMemory);
    createDeliverymanInMemory = new DeliverymanRepository()
    createDeliverymanUseCase = new CreateDeliverymanUseCase(createDeliverymanInMemory)

  });

  it("Should be able to find all deliveries by deliveryman", async () => {
    const { item_name, id_client, created_at, id_deliveryman } = await createDelivery.execute({
    
      item_name: "hot dog",
      id_client: "123",
      created_at: new Date(),
    });
    await createDelivery.execute({
      item_name: "hot dog",
      id_client: "1234",
      created_at: new Date(),
    });

    await createDelivery.execute({
      item_name: "hot dog",
      id_client: "1235",
      created_at: new Date(),
    });

    await createDeliveryInMemory.create({
      item_name,
      id_client,
      created_at,
    });
    
  //  id_deliveryman = '123'
  //   const find = await findAllDeliveriesInMenmory.findById(id_deliveryman);
  // });
});
