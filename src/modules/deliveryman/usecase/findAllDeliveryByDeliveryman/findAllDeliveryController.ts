import { Request, response, Response } from "express";
import { FindAllDeliveriesByDeliverymanUseCase } from "./findAllDeliveryUseCase";

export class FindAllDeliveriesByDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;

    const findAllDeliveries = new FindAllDeliveriesByDeliverymanUseCase();

    const deliveries = await findAllDeliveries.execute(id_deliveryman);

    return response.status(200).json(deliveries);
  }
}
