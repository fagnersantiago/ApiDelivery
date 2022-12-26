import { Request, Response } from "express";
import { UpdateEndAtUseCase } from "./updateEndAtUseCase";

export class UpdateEndAtController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const { id_delivery } = request.params;

    const updateEndAtUseCase = new UpdateEndAtUseCase();

    const deliveriesEndAt = updateEndAtUseCase.execute({
      id_deliveryman,
      id_delivery,
    });

    return response.status(204).json(deliveriesEndAt);
  }
}
