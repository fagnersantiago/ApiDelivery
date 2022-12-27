import { Request, Response } from "express";
import { UpadateDeliverymanUseCase } from "./updateDeliverymanUseCase";

export class UpdateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params;

    const updateDeliveryUsecase = new UpadateDeliverymanUseCase();

    const delivery = await updateDeliveryUsecase.execute({
      id_deliveryman,
      id_delivery,
    });

    return response.status(200).json(delivery);
  }
}
