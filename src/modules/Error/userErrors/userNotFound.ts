import { AppError } from "../appError";

export class UserNotFound extends AppError {
  constructor() {
    super("User not found", 404);
  }
}
