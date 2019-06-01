import { Nanum } from "../../entities/Nanum";
import { GetNanumListCondition } from "../../types/getNanumTypes"


export interface NanumRepository {
  find(condition: GetNanumListCondition): Promise<Nanum[]>;
  findOne(id: string): Promise<Nanum | undefined>;
}
