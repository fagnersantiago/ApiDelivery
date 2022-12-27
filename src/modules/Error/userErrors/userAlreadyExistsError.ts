import { AppError } from "../appError";

export class UserAlreadyExists extends AppError {
  constructor() {
    super("User Already exists", 400);
  }
}
