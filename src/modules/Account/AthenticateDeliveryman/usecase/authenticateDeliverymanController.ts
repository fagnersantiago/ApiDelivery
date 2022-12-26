import { Request, Response } from "express";
import { AuthenticateDeliveryman } from "./authenticateDeliverymanUseCase";

export class AuthenticateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const authenticateDeliveryman = new AuthenticateDeliveryman();

    const authenticate = await authenticateDeliveryman.execute({
      username,
      password,
    });

    return response.json(authenticate);
  }
}
