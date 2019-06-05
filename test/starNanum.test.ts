import {
  MockOwnApartmentRepository,
  OWN_APARTMENT_TEST_APARTMENT_ID,
  OWN_APARTMENT_TEST_STAR_ID,
} from "./MockOwnApartmentRepository";
import starNanum from "../src/services/nanum/starNanum";

describe("starNanum", () => {
  const mockOwnApartmentRepository = new MockOwnApartmentRepository();

  it("remove star from existing star list", async cb => {
    await starNanum(
      mockOwnApartmentRepository,
      OWN_APARTMENT_TEST_STAR_ID,
      OWN_APARTMENT_TEST_APARTMENT_ID
    );

    const stared = (await mockOwnApartmentRepository.findOne(OWN_APARTMENT_TEST_APARTMENT_ID))!;
    expect(stared.starList).not.toContain(OWN_APARTMENT_TEST_STAR_ID);

    cb();
  });

  it("throw error with unknown apartment id", async cb => {
    const resultPromise = starNanum(mockOwnApartmentRepository, "illegal", "illegal");

    await expect(resultPromise).rejects.toThrow();

    cb();
  });
});
