import { AppError } from "../../../Error/appError";
import { DeliverymanAlreadyExists } from "../../../Error/deliverymanErrors/deliverymanAlreadyExists";
import { DelverymanInMemory } from "../../deliverymanInMemory/deliverymanInMemory";
import { CreateDeliverymanUseCase } from "./createDeliverymanUseCase";

let createDeliverymanInMemory: DelverymanInMemory;
let createDeliverymanUseCase: CreateDeliverymanUseCase;

describe("Create Deliveryman", () => {
  beforeEach(() => {
    createDeliverymanInMemory = new DelverymanInMemory();
    createDeliverymanUseCase = new CreateDeliverymanUseCase(
      createDeliverymanInMemory
    );
  });

  it("Should be able create a deliveryman", async () => {
    const { username, password } = await createDeliverymanUseCase.execute({
      username: "John doe",
      password: "123456",
    });
    const deliveriman = await createDeliverymanInMemory.create({
      username,
      password,
    });

    await createDeliverymanInMemory.findByUserName(deliveriman.username);
    expect(deliveriman).toHaveProperty("id");
  });

  it("Should not be able to create an existing deliveryman", async () => {
    expect(async () => {
      const { username, password } = await createDeliverymanUseCase.execute({
        username: "John doe",
        password: "123",
      });

      await createDeliverymanUseCase.execute({
        username,
        password,
      });

      await createDeliverymanUseCase.execute({
        username,
        password,
      });
    }).rejects.toBeInstanceOf(DeliverymanAlreadyExists);
  });
});
