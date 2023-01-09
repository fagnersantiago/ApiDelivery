import { Request, Response } from "express";
import { CreateDeliverymanUseCase } from "./createDeliverymanUseCase";
import { DeliverymanRepository } from "./repository/inMemory/deliverymanInMemoryRepository";

export class CreateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    CreateDeliverymanUseCase;
    const deliveryman = new CreateDeliverymanUseCase(
      new DeliverymanRepository()
    );

    const deliverymanCreated = await deliveryman.execute({
      username,
      password,
    });

    return response.json(deliverymanCreated);
  }
}
