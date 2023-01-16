import { uuid } from "uuidv4";

export class Deliveries {
  public readonly id?: string;
  public id_client: string;
  public id_deliveryman?: string;
  public item_name: string;
  public created_at: Date;
  public end_at?: Date;
  constructor(
    id_client: string,
    id_deliveryman: string,
    item_name: string,
    created_at: Date,
    end_at?: Date
  ) {
    (this.id_client = id_client),
      (this.id_deliveryman = id_deliveryman),
      (this.item_name = item_name),
      (this.created_at = created_at),
      (this.end_at = end_at);

    if (!this.id) {
      this.id = uuid();
    }
  }
}
