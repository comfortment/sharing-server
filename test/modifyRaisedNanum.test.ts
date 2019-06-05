import modifyRaisedNanum from "../src/services/nanum/modifyRaisedNanum";
import { MockNanumRepository, MOCK_NANUM_APARTMENT_ID } from "./MockNanumRepository";
import { NoPermissionError } from "../src/exception";

describe("modifyRaisedNanum", () => {
  const mockNanumRepository = new MockNanumRepository("testNanumId");

  it("throw error with unknown nanum id", async cb => {
    const resultPromise = modifyRaisedNanum(mockNanumRepository, "faking", "illegal...", {});

    await expect(resultPromise).rejects.toThrow();
    cb();
  });

  it("throw error with not owned nanum id", async cb => {
    const resultPromise = modifyRaisedNanum(mockNanumRepository, "faking", "testNanumId", {});

    await expect(resultPromise).rejects.toThrow(NoPermissionError);
    cb();
  });

  it("change nanum state with legal query", async cb => {
    await modifyRaisedNanum(mockNanumRepository, MOCK_NANUM_APARTMENT_ID, "testNanumId", {
      bank: "NH",
    });

    const modified = (await mockNanumRepository.findOne("testNanumId"))!;

    expect(modified.bank).toEqual("NH");
    cb();
  });
});
