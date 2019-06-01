import { Collection } from "mongodb";

import { Nanum } from "../../entities/Nanum";
import { NanumRepository } from "../../services/repositoryInterfaces/nanum";
import MongoConnection from "../mongo";
import { GetNanumListCondition } from "../../types/getNanumTypes";
import { MONGODB_NANUM_COLLECTION } from "../../constant/mongo";


export class MongoNanumRepository implements NanumRepository {
  private collection: Collection;

  public constructor() {
    this.collection = MongoConnection.getCollection(MONGODB_NANUM_COLLECTION);
  }
  
  public async find(condition: GetNanumListCondition): Promise<Nanum[]> {
    return await this.collection.find(condition).toArray();
  }

  public async findOne(id: string): Promise<Nanum | undefined> {
    return (await this.collection.find({id}).toArray())[0];
  }
}
