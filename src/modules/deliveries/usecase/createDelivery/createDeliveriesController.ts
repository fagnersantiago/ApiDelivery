import { Request, Response } from "express";
import { CreateDeliveriesUseCase } from "./createDeliveriesUseCase";

export class CreateDeliveriesController {
  constructor(private createDeliveriesUseCase: CreateDeliveriesUseCase) {}
  async handle(request: Request, response: Response) {
    const { item_name, created_at } = request.body;
    const { id_client } = request;

    const delivery = await this.createDeliveriesUseCase.execute({
      item_name,
      id_client,
      created_at,
    });
    return response.json(delivery);
  }
}
