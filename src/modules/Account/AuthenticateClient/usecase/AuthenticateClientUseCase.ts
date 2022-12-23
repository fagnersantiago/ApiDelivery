import { prisma } from "../../../../databases/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IClientAuthenticate {
  username: string;
  password: string;
}
export class AuthenticateClient {
  async execute({ username, password }: IClientAuthenticate) {
    // verifcar se o usário existe
    const client = await prisma.clients.findFirst({
      where: {
        username,
      },
    });

    if (!username) {
      throw Error("deliveryman or password invalid");
    }

    // verificar se senha existe

    const passwordMatch = await compare(
      password,
      client ? client.password : password
    );

    if (!passwordMatch) {
      throw Error("deliveryman or password invalid");
    }
    //gerar token de authenticação
    const token = sign({ username }, String(process.env.CLIENT_TOKEN), {
      subject: client?.id,
      expiresIn: "1d",
    });

    return token;
  }
}
