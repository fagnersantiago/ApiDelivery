import { Request, response, Response } from "express";
import { FindAllDeliveriesByDeliverymanUseCase } from "./findAllDeliveryUseCase";

export class FindAllDeliveriesByDeliverymanController {
  constructor(
    private findAllDelveriesByDeliverymanUseCase: FindAllDeliveriesByDeliverymanUseCase
  ) {}
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;

    const deliveries = await this.findAllDelveriesByDeliverymanUseCase.execute(
      id_deliveryman
    );

    return response.status(200).json(deliveries);
  }
}
