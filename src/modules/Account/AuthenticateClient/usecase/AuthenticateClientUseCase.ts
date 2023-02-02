import { prisma } from "../../../../databases/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { ClientOrEmailInvalid } from "../../../Error/userErrors/passwordOrEmailInvalid";
import { UserAlreadyExists } from "../../../Error/userErrors/userAlreadyExistsError";
import { UserNotFound } from "../../../Error/userErrors/userNotFound";
import { IClientRepository } from "../../../clients/repositories/IclientRepository";

interface IClientAuthenticate {
  username: string;
  password: string;
}
export class AuthenticateClientUseCase {
  constructor(private authenticateClientRepository: IClientRepository) {}
  async execute({ username, password }: IClientAuthenticate) {
    // verifcar se o usário existe
    const client = await this.authenticateClientRepository.findByUsername(
      username
    );

    if (!client) {
      throw new UserNotFound();
    }

    // verificar se senha existe

    const passwordMatch = await compare(
      password,
      client ? client.password : password
    );

    if (!passwordMatch) {
      throw new ClientOrEmailInvalid();
    }
    //gerar token de authenticação
    const token = sign({ username }, String(process.env.CLIENT_TOKEN), {
      subject: client?.id,
      expiresIn: "1d",
    });

    return token;
  }
}
