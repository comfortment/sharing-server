import { OwnApartmentRepository } from "../src/data/models/ownApartment";
import { MongoOwnNanumModel, MongoOwnNanumModelQuery } from "./data/models/apartment";

export const OWN_APARTMENT_TEST_APARTMENT_ID = "test_apartment_1";

export const OWN_APARTMENT_TEST_STAR_ID = "test_nanum_1";

export class MockOwnApartmentRepository implements OwnApartmentRepository {
  private data: MongoOwnNanumModel[] = [];

  public constructor() {
    this.data.push({
      apartmentId: OWN_APARTMENT_TEST_APARTMENT_ID,
      joinList: [],
      starList: [OWN_APARTMENT_TEST_STAR_ID],
    });
  }

  public async findOne(id: string): Promise<MongoOwnNanumModel | null> {
    return this.data.find(value => value.apartmentId === id) || null;
  }

  public async update(id: string, query: MongoOwnNanumModelQuery): Promise<void> {
    const own = (await this.findOne(id))!;

    own.joinList = query.joinList || own.joinList;
    own.starList = query.starList || own.starList;
  }
}
