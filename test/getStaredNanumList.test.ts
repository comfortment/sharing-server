import {
  MockOwnApartmentRepository,
  OWN_APARTMENT_TEST_STAR_ID,
  OWN_APARTMENT_TEST_APARTMENT_ID,
} from "./mock/MockOwnApartmentRepository";
import { MockNanumRepository } from "./mock/MockNanumRepository";
import getStaredNanumList from "../src/services/nanum/getStaredNanumList";

describe("getStaredNanumList", () => {
  const mockOwnApartmentRepository = new MockOwnApartmentRepository();
  const mockNanumRepository = new MockNanumRepository(OWN_APARTMENT_TEST_STAR_ID);

  it("throw error with unknown apartment id", async cb => {
    const UNKNOWN_APARTMENT_ID = "8tf8hregh";
    const resultPromise = getStaredNanumList(
      mockOwnApartmentRepository,
      mockNanumRepository,
      UNKNOWN_APARTMENT_ID
    );

    await expect(resultPromise).rejects.toThrow();
    cb();
  });

  it("return stared nanum list", async cb => {
    const result = await getStaredNanumList(
      mockOwnApartmentRepository,
      mockNanumRepository,
      OWN_APARTMENT_TEST_APARTMENT_ID
    );

    expect(result[0].nanumId).toEqual(OWN_APARTMENT_TEST_STAR_ID);
    cb();
  });
});
