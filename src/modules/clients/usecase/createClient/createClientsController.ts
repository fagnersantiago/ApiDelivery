import { Request, Response } from "express";
import { CreateClientUseCase } from "./createClientsUseCase";

export class CreateClientController {
  constructor(private createClient: CreateClientUseCase) {}
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const clientCreated = await this.createClient.execute({
      username,
      password,
    });

    return response.json(clientCreated);
  }
}
