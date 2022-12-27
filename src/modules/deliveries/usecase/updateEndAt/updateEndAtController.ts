import { Request, Response } from "express";
import { UpdateEndAtUseCase } from "./updateEndAtUseCase";

export class UpdateEndAtController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params;

    const updateEndAtUseCase = new UpdateEndAtUseCase();

    const deliveriesEndAt = await updateEndAtUseCase.execute({
      id_deliveryman,
      id_delivery,
    });

    return response.status(200).json(deliveriesEndAt);
  }
}
