import { NanumRepository } from "./services/repositoryInterfaces/nanum";
import { NanumModel } from "./data/models/nanum";
import { Nanum, NanumType } from "./entities/Nanum";
import { random } from "lodash";
import uuid from "uuid/v4";
import faker from "faker";

export const MOCK_NANUM_COUNT = 1000;

export class MockNanumRepository implements NanumRepository {
  private data: NanumModel[];

  public constructor(nanumId: string) {
    this.data = [];

    for (let i = 0; i < MOCK_NANUM_COUNT - 2; i++) {
      this.data.push({
        apartmentId: faker.internet.ip(),
        expiry: random(1, 30 * 24),
        nanumId: uuid(),
        price: random(100, 1000) * 100,
        title: faker.name.title(),
        type: ["bundle", "joint", "rummage_sale", "worker"][random(0, 3)] as NanumType,
      });
    }

    this.data.push({
      apartmentId: faker.internet.ip(),
      expiry: 24,
      nanumId,
      price: 35000,
      title: "hi hello",
      type: "bundle",
    });
  }

  public async find(): Promise<Nanum[]> {
    return [];
  }

  public async findOne(id: string): Promise<NanumModel | null> {
    return this.data.find(value => value.nanumId === id)! || null;
  }

  public async updateOne(): Promise<void> {}

  public async createOne(data: NanumModel): Promise<void> {
    this.data.push(data);
  }
}
