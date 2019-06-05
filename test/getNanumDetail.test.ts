import { MockNanumRepository } from "./MockNanumRepository";
import getNanumDetail from "../src/services/nanum/getNanumDetail";
import uuid from "uuid/v4";
import { MockApartmentRepository } from "./MockApartmentRepository";

describe("getNanumDetail", () => {
  const nanumId = uuid();
  const mockNanumRepository = new MockNanumRepository(nanumId);
  const mockApartmentRepository = new MockApartmentRepository();

  mockApartmentRepository.pushMockObject({
    apartmentId: "test",
    ownerName: "손승용",
    phoneNumber: "01012345678",
    roomNumber: 313,
  });

  it("will return nanum detail with legal id", async cb => {
    const nanumDetail = await getNanumDetail(mockNanumRepository, mockApartmentRepository, nanumId);

    expect(nanumDetail.nanumId).toEqual(nanumId);
    cb();
  });

  it("will throw error with illegal id", async cb => {
    const nanumDetailPromise = getNanumDetail(
      mockNanumRepository,
      mockApartmentRepository,
      "some illegal nanum id"
    );

    await expect(nanumDetailPromise).rejects.toThrow();
    cb();
  });
});
