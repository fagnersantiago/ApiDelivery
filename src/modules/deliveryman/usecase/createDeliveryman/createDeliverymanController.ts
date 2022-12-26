import { Request, Response } from "express";
import { CreateDeliveryman } from "./createDeliverymanUseCase";

export class CreateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const deliveryman = new CreateDeliveryman();

    const deliverymanCreated = await deliveryman.execute({
      username,
      password,
    });

    return response.json(deliverymanCreated);
  }
}
