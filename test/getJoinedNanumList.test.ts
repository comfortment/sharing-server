import getJoinedNanumList from "../src/services/nanum/getJoinedNanumList";
import {
  MockOwnApartmentRepository,
  OWN_APARTMENT_TEST_STAR_ID,
  OWN_APARTMENT_TEST_APARTMENT_ID,
} from "./mock/MockOwnApartmentRepository";
import { MockNanumRepository } from "./mock/MockNanumRepository";

describe("getJoinedNanumList", () => {
  const mockOwnApartmentRepository = new MockOwnApartmentRepository();
  const mockNanumRepository = new MockNanumRepository(OWN_APARTMENT_TEST_STAR_ID);

  it("throw error with unknown apartment id", async cb => {
    const UNKNOWN_APARTMENT_ID = "3294gq";
    const resultPromise = getJoinedNanumList(
      mockOwnApartmentRepository,
      mockNanumRepository,
      UNKNOWN_APARTMENT_ID
    );

    await expect(resultPromise).rejects.toThrow();
    cb();
  });

  it("return stared nanum list", async cb => {
    const result = await getJoinedNanumList(
      mockOwnApartmentRepository,
      mockNanumRepository,
      OWN_APARTMENT_TEST_APARTMENT_ID
    );

    expect(result[0].nanumId).toEqual(OWN_APARTMENT_TEST_STAR_ID);
    cb();
  });
});
