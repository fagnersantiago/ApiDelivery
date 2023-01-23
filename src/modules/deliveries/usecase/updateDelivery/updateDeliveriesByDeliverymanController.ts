import { Request, Response } from "express";
import { UpadateDeliveriesByDeliverymanUseCase } from "./updateDeliverisByDeliverymanUseCase";

export class UpdateDeliverymanController {
  constructor(
    private updateDeliveryUseCase: UpadateDeliveriesByDeliverymanUseCase
  ) {}
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params;

    const delivery = await this.updateDeliveryUseCase.execute({
      id_deliveryman,
      id_delivery,
    });

    return response.status(200).json(delivery);
  }
}
