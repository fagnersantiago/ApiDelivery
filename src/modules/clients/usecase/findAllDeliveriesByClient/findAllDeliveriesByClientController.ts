import { Request, Response } from "express";
import { FindAllDeliveriesByClientUseCase } from "./findAllDeliveriesByClientUseCase";

export class FindAllDeliveriesByClientController {
  async handle(request: Request, response: Response) {
    const { id_client } = request;

    const findAllDeliveriesByClient = new FindAllDeliveriesByClientUseCase();
    const allDeliveries = await findAllDeliveriesByClient.execute(id_client);

    return response.status(200).json(allDeliveries);
  }
}
