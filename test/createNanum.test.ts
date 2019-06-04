import createNanum from "../src/services/nanum/createNanum";
import { MockNanumRepository } from "./MockNanumRepository";
import { CreateNanumRequest } from "../src/types/nanum";

describe("createNanum", () => {
  const mockNanumRepository = new MockNanumRepository();

  it("will create nanum by given data", async cb => {
    const nanum: CreateNanumRequest = {
      apartmentId: "test-apartment-001",
      expiry: 24,
      price: 40000,
      title: "당근",
      type: "bundle",
    };
    const nanumId = await createNanum(mockNanumRepository, nanum);

    expect(nanumId).toEqual((await mockNanumRepository.findOne(nanumId))!.nanumId);
    cb();
  });
});
