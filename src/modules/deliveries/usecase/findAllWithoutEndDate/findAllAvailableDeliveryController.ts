import { Request, Response } from "express";
import { FindAllAvailableDeliveryUseCase } from "./findAllAvailableDeliveryUseCase";

export class FindAllDeliveryAvailableController {
  async handle(request: Request, response: Response) {
    const findAllAvailableDeliveryUseCase =
      new FindAllAvailableDeliveryUseCase();

    const deliveries = await findAllAvailableDeliveryUseCase.execute();

    return response.status(200).json(deliveries);
  }
}
