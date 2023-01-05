import { v4 as uuid } from "uuid";

export class Client {
  public readonly id?: string;
  public username: string;
  public password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;

    if (!this.id) {
      this.id = uuid();
    }
  }
}
