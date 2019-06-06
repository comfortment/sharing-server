import { MockNanumRepository } from "./mock/MockNanumRepository";
import { MockApartmentRepository } from "./mock/MockApartmentRepository";
import { NanumModel } from "../src/data/models/nanum";
import getRaisedNanumList from "../src/services/nanum/getRaisedNanumList";

describe("getRaisedNanumList", () => {
  const mockNanumRepository = new MockNanumRepository("");
  const mockApartmentRepository = new MockApartmentRepository();

  const TEST_NANUM_ID = "test_nanum_xyz";
  const TEST_APARTMENT_ID = "test_apartment_xyz";

  const nanumMockObject: NanumModel = {
    nanumId: TEST_NANUM_ID,
    apartmentId: TEST_APARTMENT_ID,
    expiry: 25,
    price: 34000,
    title: "Restful API",
    type: "bundle",
    currentState: "processing",
  };
  mockNanumRepository.pushMockObject(nanumMockObject);

  const apartmentMockObject = {
    apartmentId: TEST_APARTMENT_ID,
    ownerName: "Kim",
    phoneNumber: "01012345678",
    roomNumber: 304,
  };
  mockApartmentRepository.pushMockObject(apartmentMockObject);

  it("throw error with unknown apartment id", async cb => {
    const resultPromise = getRaisedNanumList(
      mockNanumRepository,
      mockApartmentRepository,
      "illegal id"
    );

    await expect(resultPromise).rejects.toThrow();
    cb();
  });

  it("return Nanum object with known apartment id", async cb => {
    const result = await getRaisedNanumList(
      mockNanumRepository,
      mockApartmentRepository,
      TEST_APARTMENT_ID
    );

    const raisedNanum = result[0];

    expect(raisedNanum).toStrictEqual({ ...nanumMockObject, ...apartmentMockObject });
    cb();
  });
});
