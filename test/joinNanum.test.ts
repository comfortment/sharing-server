import {
  MockOwnApartmentRepository,
  OWN_APARTMENT_TEST_STAR_ID,
  OWN_APARTMENT_TEST_APARTMENT_ID,
} from "./mock/MockOwnApartmentRepository";
import joinNanum from "../src/services/nanum/joinNanum";

describe("joinNanum", () => {
  const mockOwnApartmentRepository = new MockOwnApartmentRepository();

  it("throw error with illegal apartment id", async cb => {
    const resultPromise = joinNanum(mockOwnApartmentRepository, "", "");

    await expect(resultPromise).rejects.toThrow();
    cb();
  });

  it("leave nanum with already joined nanum id", async cb => {
    await joinNanum(
      mockOwnApartmentRepository,
      OWN_APARTMENT_TEST_STAR_ID,
      OWN_APARTMENT_TEST_APARTMENT_ID
    );

    const joined = (await mockOwnApartmentRepository.findOne(OWN_APARTMENT_TEST_APARTMENT_ID))!;
    expect(joined.joinList).not.toContain(OWN_APARTMENT_TEST_STAR_ID);

    cb();
  });
});
