import { AppError } from "../../../Error/appError";
import { CreateClientInMemory } from "../../inMemory/createClientInMemory";
import { CreateClientUseCase } from "./createClientsUseCase";

let createClientInMemory: CreateClientInMemory;
let createClientUsecase: CreateClientUseCase;

describe("Create Client", () => {
  beforeEach(() => {
    createClientInMemory = new CreateClientInMemory();
    createClientUsecase = new CreateClientUseCase(createClientInMemory);
  });

  it("Should be able create a new client", async () => {
    const { id, username, password } = await createClientUsecase.execute({
      username: "jhon doe",
      password: "12345",
    });

    const client = await createClientInMemory.create({
      username,
      password,
    });

    await createClientInMemory.findByUsername(username);

    expect(client).toHaveProperty("id");
  });

  it("Should not be able create an existing client", async () => {
    expect(async () => {
      const { username, password } = await createClientUsecase.execute({
        username: "John doe",
        password: "12345",
      });

      await createClientInMemory.create({
        username,
        password,
      });

      await createClientInMemory.create({
        username,
        password,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
