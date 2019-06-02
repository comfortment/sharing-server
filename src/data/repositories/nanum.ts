import { Collection } from "mongodb";

import { NanumModel } from "../models/nanum";
import { NanumRepository } from "../../services/repositoryInterfaces/nanum";
import MongoConnection from "../mongo";
import { GetNanumListCondition } from "../../types/getNanumTypes";
import { PatchOwnNanumCondition } from "../../types/patchNanumTypes";
import { MONGODB_NANUM_COLLECTION } from "../../constant/mongo";


export class MongoNanumRepository implements NanumRepository {
  private collection: Collection;

  public constructor() {
    this.collection = MongoConnection.getCollection(MONGODB_NANUM_COLLECTION);
  }
  
  public async find(condition: GetNanumListCondition): Promise<NanumModel[]> {
    return await this.collection.find(condition).toArray();
  }

  public async findOne(id: string): Promise<NanumModel | undefined> {
    return (await this.collection.find({id}).toArray())[0];
  }

  public async updateOne(id: string, apartmentId: string, target: object): Promise<void> {
    const condition: PatchOwnNanumCondition = {id, apartmentId}
    await this.collection.findOneAndUpdate(condition, {$set: target});
  }
}
