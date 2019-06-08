import { NanumRepository } from "../services/repositoryInterfaces/nanum";
import { NanumModel, NanumModelUpdateQuery } from "../data/models/nanum";
import { Nanum, NanumType, CurrentState } from "../entities/Nanum";
import { random, assignIn } from "lodash";
import uuid from "uuid/v4";
import faker from "faker";
import { GetNanumFilter } from "../types/nanum";

export const MOCK_NANUM_COUNT = 1000;

export const MOCK_NANUM_APARTMENT_ID = "testApartmentId";

export class MockNanumRepository implements NanumRepository {
  private data: NanumModel[];

  public constructor(nanumId: string) {
    this.data = [];

    for (let i = 0; i < MOCK_NANUM_COUNT - 1; i++) {
      this.data.push({
        apartmentId: faker.internet.ip(),
        expiry: random(1, 30 * 24),
        nanumId: uuid(),
        price: random(100, 1000) * 100,
        title: faker.name.title(),
        type: ["bundle", "joint", "rummage_sale", "worker"][random(0, 3)] as NanumType,
        currentState: ["done", "paid", "processing", "recruiting"][random(0, 3)] as CurrentState,
      });
    }

    this.data.push({
      apartmentId: MOCK_NANUM_APARTMENT_ID,
      expiry: 24,
      nanumId,
      price: 35000,
      title: "hi hello",
      type: "bundle",
      currentState: "paid",
    });
  }

  public async find(filter: GetNanumFilter): Promise<NanumModel[]> {
    let filtered1;
    if (filter.apartmentId) {
      filtered1 = this.data.filter(value => {
        return value.apartmentId === filter.apartmentId;
      });
    } else {
      filtered1 = this.data;
    }

    let filtered2;
    if (filter.nanumId) {
      filtered2 = filtered1.filter(value => {
        return value.nanumId === filter.nanumId;
      });
    } else {
      filtered2 = filtered1;
    }

    let filtered3;
    if (filter.type) {
      filtered3 = filtered2.filter(value => {
        return value.type === filter.type;
      });
    } else {
      filtered3 = filtered2;
    }

    return filtered3;
  }

  public async findOne(id: string): Promise<NanumModel | null> {
    return this.data.find(value => value.nanumId === id)! || null;
  }

  public async updateOne(id: string, query: NanumModelUpdateQuery): Promise<void> {
    const index = this.data.findIndex(value => value.nanumId === id);
    assignIn(this.data[index], query);
  }

  public async createOne(data: NanumModel): Promise<void> {
    this.data.push(data);
  }

  public pushMockObject(nanum: NanumModel) {
    this.data.push(nanum);
  }
}
