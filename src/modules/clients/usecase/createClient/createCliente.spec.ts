// import { CreateClientInMemory } from "../../inMemory/createClientInMemory";
// import { CreateClientUseCase } from "./createClientsUseCase";

// describe("Create Client", () => {
//   it("Should be able create a new client", async () => {
//     const createClientInMemory = new CreateClientInMemory();
//     const createClientUsecase =  new CreateClientUseCase(createClientInMemory);

//     const { id, username, password } = await createClientUseCase.execute({
//       username: "John does",
//       password: "12345",
//     });

//     const client = await createClientInMemory.create({
//       username,
//       password,
//       id: "123456",
//     });
//     expect(client).toBe(id);
//   });
// });
