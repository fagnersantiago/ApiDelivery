import { Request, Response } from "express";
import { CreateClient } from "./createClientsUseCase";

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const createClient = new CreateClient();

    const clientCreated = await createClient.execute({
      username,
      password,
    });

    return response.json(clientCreated);
  }
}
