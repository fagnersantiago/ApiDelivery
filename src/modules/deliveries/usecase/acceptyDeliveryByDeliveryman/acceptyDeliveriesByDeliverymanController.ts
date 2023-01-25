import { Request, Response } from "express";
import { AcceptyDeliveriesByDeliverymanUseCase } from "./acceptyDeliveriesByDeliverymanUseCase";

export class AcceptyDeliveriesByDeliverymanController {
  constructor(
    private acceptyDeliveryUseCase: AcceptyDeliveriesByDeliverymanUseCase
  ) {}
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const { id } = request.params;

    const delivery = await this.acceptyDeliveryUseCase.execute({
      id_deliveryman,
      id,
    });

    return response.status(200).json(delivery);
  }
}
