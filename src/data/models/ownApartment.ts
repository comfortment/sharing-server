import { MongoOwnNanumModel, MongoOwnNanumModelQuery } from "./apartment";

export interface OwnApartmentRepository {
  findOne(id: string): Promise<MongoOwnNanumModel | null>;
  update(id: string, query: MongoOwnNanumModelQuery): Promise<void>;
  insert(data: MongoOwnNanumModel): Promise<void>;
}
