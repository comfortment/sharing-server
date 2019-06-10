import { OwnApartmentRepository } from "../models/ownApartment";
import { MongoOwnNanumModel, MongoOwnNanumModelQuery } from "../models/apartment";
import { MONGO_COLLECTION_MONGO_OWN_APARTMENT } from "../../constant/mongo";
import MongoConnection from "../mongo";
import { Collection } from "mongodb";

export class MongoOwnApartmentRepository implements OwnApartmentRepository {
  private collection: Collection;

  public constructor(collectionName: string = MONGO_COLLECTION_MONGO_OWN_APARTMENT) {
    this.collection = MongoConnection.getCollection(collectionName);
  }

  public async findOne(id: string): Promise<MongoOwnNanumModel | null> {
    return await this.collection.findOne({ apartmentId: id });
  }

  public async update(id: string, query: MongoOwnNanumModelQuery): Promise<void> {
    await this.collection.updateOne({ apartmentId: id }, { $set: query });
  }

  public async insert(data: MongoOwnNanumModel): Promise<void> {
    await this.collection.insert(data);
  }
}
