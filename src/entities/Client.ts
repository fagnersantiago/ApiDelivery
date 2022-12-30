import { uuid } from "uuidv4";

export class Client {
  public readonly id: string;
  public username: string;
  public password: string;

  constructor(props: Omit<Client, "id">, id: string) {
    this.id = id;
    (this.username = props.username), (this.password = props.password);

    Object.assign(this);

    if (!id) {
      this.id = uuid();
    }
  }
}
