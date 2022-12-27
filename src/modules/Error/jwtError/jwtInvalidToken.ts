import { AppError } from "../appError";

export class InvalidToken extends AppError {
  constructor() {
    super("Invalid Token", 401);
  }
}
