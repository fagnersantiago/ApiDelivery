import { AppError } from "../appError";

export class ClientOrEmailInvalid extends AppError {
  constructor() {
    super("Client or email invalid", 400);
  }
}
