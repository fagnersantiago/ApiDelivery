import { AppError } from "../appError";

export class DeliveriesNotFound extends AppError {
  constructor() {
    super("Deliveries not found", 404);
  }
}
