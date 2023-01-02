import { Request, Response } from "express";
import { CreateClientRepository } from "../../repository/IclientRepository";
import { CreateClientUseCase } from "./createClientsUseCase";

export class CreateClientController {
  private clientRepository: CreateClientRepository;
  constructor(clientRepository: CreateClientRepository) {
    this.clientRepository = clientRepository;
  }
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const createClient = new CreateClientUseCase(this.clientRepository);

    const clientCreated = await createClient.execute({
      username,
      password,
    });

    return response.json(clientCreated);
  }
}
