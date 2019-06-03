import { Nanum } from "../../entities/Nanum";


export interface NanumRepository {
  find(condition: object): Promise<Nanum[]>;
  findOne(id: string): Promise<Nanum | undefined>;
  updateOne(id: string, apartmentId: string, target: object): Promise<void>;
}
