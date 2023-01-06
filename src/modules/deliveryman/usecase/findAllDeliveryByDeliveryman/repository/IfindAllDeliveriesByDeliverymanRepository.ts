import { Deliveryman } from "../../../../../entities/Deliveryman";

export interface IFindDeliveriesByDeliveryman {
  findById(id_deliveryman: string): Promise<Deliveryman>;
}
