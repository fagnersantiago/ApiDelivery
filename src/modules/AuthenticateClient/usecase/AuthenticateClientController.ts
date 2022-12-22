import { Request, Response } from "express";
import { AuthenticateClient } from "./AuthenticateClientUseCase";

export class AuthenticateClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const authenticateClient = new AuthenticateClient();

    const authenticate = await authenticateClient.execute({
      username,
      password,
    });

    return response.json(authenticate);
  }
}
