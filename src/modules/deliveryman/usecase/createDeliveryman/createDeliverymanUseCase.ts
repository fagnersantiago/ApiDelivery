import { prisma } from "../../../../databases/prismaClient";
import { hash } from "bcrypt";
import { DeliverymanAlreadyExists } from "../../../Error/deliverymanErrors/deliverymanAlreadyExists";
import { Deliveryman } from "../../../../entities/Deliveryman";
import { DeliverymanRepository } from "./repository/inMemory/deliverymanInMemoryRepository";
import { IDeliverymanRepository } from "./repository/IdelivermanRepositrory";

interface IDeliveryman {
  username: string;
  password: string;
}

export class CreateDeliverymanUseCase {
  constructor(private deleverymanRespository: IDeliverymanRepository) {}

  async execute({ username, password }: IDeliveryman) {
    const deliverymanExist = await this.deleverymanRespository.findByUserName(
      username
    );

    if (deliverymanExist) {
      throw new DeliverymanAlreadyExists();
    }
    const hashPassword = await hash(password, 10);

    const deliveryman = await this.deleverymanRespository.create({
      username,
      password: hashPassword,
    });
    return deliveryman;
  }
}
