import { v4 as uuid } from "uuid";

export class Deliveryman {
  private readonly id_deliveryman?: string;
  public username: string;
  public password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;

    if (!this.id_deliveryman) {
      this.id_deliveryman = uuid();
    }
  }
}
