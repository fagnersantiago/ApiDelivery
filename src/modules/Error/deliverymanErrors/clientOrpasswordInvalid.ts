import { AppError } from "../appError";

export class PasswordOrEmailInvalid extends AppError {
  constructor() {
    super("Passoword or email invalid", 400);
  }
}
