import { Request, Response } from "express";
import { FindAllDeliveriesByClientUseCase } from "./findAllDeliveriesByClientUseCase";

export class FindAllDeliveriesByClientController {
  constructor(private findAllDelivry: FindAllDeliveriesByClientUseCase) {}

  async handle(request: Request, response: Response) {
    const { id_client } = request;

    const allDeliveries = await this.findAllDelivry.execute(id_client);

    return response.status(200).json(allDeliveries);
  }
}
