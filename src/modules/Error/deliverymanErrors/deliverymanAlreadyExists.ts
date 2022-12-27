import { AppError } from "../appError";

export class DeliverymanAlreadyExists extends AppError {
  constructor() {
    super("Deliveryman Already exists", 400);
  }
}
