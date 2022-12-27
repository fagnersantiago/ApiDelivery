import { prisma } from "../../../../databases/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../Error/appError";
import { DeliverymanAlreadyExists } from "../../../Error/deliverymanErrors/deliverymanAlreadyExists";
import { PasswordOrEmailInvalid } from "../../../Error/deliverymanErrors/clientOrpasswordInvalid";

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}
export class AuthenticateDeliveryman {
  async execute({ username, password }: IAuthenticateDeliveryman) {
    // verifcar se o usário existe
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });

    if (!username) {
      throw new DeliverymanAlreadyExists();
    }

    // verificar se senha existe

    const passwordMatch = await compare(
      password,
      deliveryman ? deliveryman.password : password
    );

    if (!passwordMatch) {
      throw new PasswordOrEmailInvalid();
    }
    //gerar token de authenticação
    const token = sign({ username }, String(process.env.DELIVERYMAN_TOKEN), {
      subject: deliveryman?.id,
      expiresIn: "1d",
    });

    return token;
  }
}
