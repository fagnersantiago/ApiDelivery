import { Request, Response } from "express";
import { Client } from "../../../../entities/Client";
import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";

export class AuthenticateClientController {
  constructor(private authenticateClientUseCase: AuthenticateClientUseCase) {}
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const authenticate = await this.authenticateClientUseCase.execute({
      username,
      password,
    });

    return response.json(authenticate);
  }
}
