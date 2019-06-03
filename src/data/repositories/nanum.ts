import { NanumRepository } from "../../services/repositoryInterfaces/nanum";
import MongoConnection from "../mongo";
import { Collection } from "mongodb";
import { MONGO_COLLECTION_NANUM } from "../../constant/mongo";
import { Nanum } from "../../entities/Nanum";
import { MongoNanumModel } from "../models/nanum";


export class MongoNanumRepository implements NanumRepository{
  private collection: Collection;

  public constructor (collectionName: string = MONGO_COLLECTION_NANUM) {
    this.collection = MongoConnection.getCollection(collectionName);
  }

  public async find(): Promise<Nanum[]> {
    return []
  }

  public async findOne(): Promise<Nanum | undefined> {
    return
  }

  public async updateOne() {

  }

  public async createOne(data: MongoNanumModel): Promise<void> {
    await this.collection.insertOne(data);
  }

}