import { Request, Response } from "express";
import { CreateClientRepository } from "../../repository/clientRepository";
import { CreateClientUseCase } from "./createClientsUseCase";

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const createClient = new CreateClientUseCase(new CreateClientRepository());

    const clientCreated = await createClient.execute({
      username,
      password,
    });

    return response.json(clientCreated);
  }
}
