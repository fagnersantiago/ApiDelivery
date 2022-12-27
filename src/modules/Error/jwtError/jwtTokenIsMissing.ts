import { AppError } from "../appError";

export class TokenIsMissing extends AppError {
  constructor() {
    super("Token is Missing", 401);
  }
}
