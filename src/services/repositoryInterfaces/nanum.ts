import { Nanum } from "../../entities/Nanum";
import { MongoNanumModel } from "../../data/models/nanum";

export interface NanumRepository {
  find(): Promise<Nanum[]>;
  findOne(): Promise<Nanum | undefined>;
  updateOne(): Promise<void>;
  createOne(data: MongoNanumModel): Promise<void>;
}