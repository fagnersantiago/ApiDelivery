import { prisma } from "../../../databases/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}
export class AuthenticateDeliveryman {
  async execute({ username, password }: IAuthenticateDeliveryman) {
    // verifcar se o usário existe
    const deliveryman = await prisma.clients.findFirst({
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
      deliveryman ? deliveryman.password : password
    );

    if (!passwordMatch) {
      throw Error("deliverymen or password invalid");
    }
    //gerar token de authenticação
    const token = sign({ username }, String(process.env.DELIVERYMAN_TOKEN), {
      subject: deliveryman?.id,
      expiresIn: "1d",
    });

    return token;
  }
}
