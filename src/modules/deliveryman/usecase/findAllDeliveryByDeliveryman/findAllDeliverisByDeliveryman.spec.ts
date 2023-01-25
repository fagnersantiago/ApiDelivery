// import { CreateDeliveriesUseCase } from "../../../deliveries/usecase/createDelivery/createDeliveriesUseCase";
// import { CreateDeliveriesInMemory } from "../../../deliveries/repositories/inMemory/deliveriesRepositriesInMemory";

// import { CreateDeliverymanUseCase } from "../createDeliveryman/createDeliverymanUseCase";

// import { FindAllDeliveriesByDeliverymanUseCase } from "./findAllDeliveriesByDeliverymanUseCase";

// let findAllDeliveriesInMenmory: FindAllDeliveriesByDeliverymanRepositoryInMenory;
// let finAllDeliveriesUseCase: FindAllDeliveriesByDeliverymanUseCase;
// let createDelivery: CreateDeliveriesUseCase;
// let createDeliveryInMemory: CreateDeliveriesInMemory;
// let createDeliverymanInMemory: DeliverymanRepository;
// let createDeliverymanUseCase: CreateDeliverymanUseCase;

// describe("Find All Deliveries", () => {
//   beforeAll(() => {
//     findAllDeliveriesInMenmory =
//       new FindAllDeliveriesByDeliverymanRepositoryInMenory();
//     finAllDeliveriesUseCase = new FindAllDeliveriesByDeliverymanUseCase(
//       findAllDeliveriesInMenmory
//     );
//     createDeliveryInMemory = new CreateDeliveriesInMemory();
//     createDelivery = new CreateDeliveriesUseCase(createDeliveryInMemory);

//     createDeliverymanInMemory = new DeliverymanRepository();
//     createDeliverymanUseCase = new CreateDeliverymanUseCase(
//       createDeliverymanInMemory
//     );
//   });

//   it("Should be able to find all deliveries by deliveryman", async () => {
//     await createDeliverymanInMemory.create({
//       username: "john doe",
//       password: "123456",
//     });

//     await createDeliveryInMemory.create({
//       id_client: "123",
//       item_name: "Hot dog",
//       created_at: new Date(),
//     });

//     //   await await finAllDeliveriesUseCase.execute();
//     //   //  id_deliveryman = '123
//   });
// });
