import { Request, Response } from "express";
import { CreateDeliverymanUseCase } from "./createDeliverymanUseCase";

export class CreateDeliverymanController {
  constructor(private createDeliverymanUseCase: CreateDeliverymanUseCase) {}
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const deliverymanCreated = await this.createDeliverymanUseCase.execute({
      username,
      password,
    });

    return response.json(deliverymanCreated);
  }
}
