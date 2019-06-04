import { Nanum } from "../../entities/Nanum";
import { NanumModel } from "../../data/models/nanum";

export interface NanumRepository {
  find(): Promise<Nanum[]>;
  findOne(id: string): Promise<NanumModel | null>;
  updateOne(): Promise<void>;
  createOne(data: NanumModel): Promise<void>;
}