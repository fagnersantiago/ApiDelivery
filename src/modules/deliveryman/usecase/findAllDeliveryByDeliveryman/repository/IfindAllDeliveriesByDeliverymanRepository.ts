import { Deliveries } from "../../../../../entities/Deliveries";

export interface IFindDeliveriesByDeliveryman {
  findById(id_deliveryman: string): Promise<Deliveries[]>;
}
