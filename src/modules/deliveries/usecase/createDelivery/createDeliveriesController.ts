import { Request, Response } from "express";
import { CreateDeliveriesUseCase } from "./createDeliveriesUseCase";

export class CreateDeliverieController {
  async handle(request: Request, response: Response) {
    const { item_name } = request.body;
    const { id_client } = request;

    const createDeliveriesUseCase = new CreateDeliveriesUseCase();

    const delivery = await createDeliveriesUseCase.execute({
      id_client,
      item_name,
    });

    return response.json(delivery);
  }
}
