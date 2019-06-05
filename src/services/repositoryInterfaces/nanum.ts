import { NanumModel, NanumModelUpdateQuery } from "../../data/models/nanum";
import { GetNanumFilter } from "../../types/nanum";

export interface NanumRepository {
  find(filter: GetNanumFilter): Promise<NanumModel[]>;
  findOne(id: string): Promise<NanumModel | null>;
  updateOne(id: string, query: NanumModelUpdateQuery): Promise<void>;
  createOne(data: NanumModel): Promise<void>;
}
