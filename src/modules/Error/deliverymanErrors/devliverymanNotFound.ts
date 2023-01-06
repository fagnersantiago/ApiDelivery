import { AppError } from "../appError";

export class UserNotFound extends AppError {
  constructor() {
    super("Deliveryman not found", 404);
  }
}
