import { NanumRepository } from "../../services/repositoryInterfaces/nanum";
import MongoConnection from "../mongo";
import { Collection } from "mongodb";
import { MONGO_COLLECTION_NANUM } from "../../constant/mongo";
import { Nanum } from "../../entities/Nanum";
import { NanumModel } from "../models/nanum";
import { GetNanumFilter } from "../../types/nanum";


export class MongoNanumRepository implements NanumRepository{
  private collection: Collection;

  public constructor (collectionName: string = MONGO_COLLECTION_NANUM) {
    this.collection = MongoConnection.getCollection(collectionName);
  }

  public async find(filter: GetNanumFilter): Promise<NanumModel[]> {
    return await this.collection.find(filter).toArray();
  }

  public async findOne(nanumId: string): Promise<NanumModel | null> {
    return await this.collection.findOne({nanumId});
  }

  public async updateOne() {

  }

  public async createOne(data: NanumModel): Promise<void> {
    await this.collection.insertOne(data);
  }

}