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
    const TEST_NANUM_ID = "testNanumId";
    const TEST_BANK = "NH";

    await modifyRaisedNanum(mockNanumRepository, MOCK_NANUM_APARTMENT_ID, TEST_NANUM_ID, {
      bank: TEST_BANK,
    });

    const modified = (await mockNanumRepository.findOne(TEST_NANUM_ID))!;

    expect(modified.bank).toEqual(TEST_BANK);
    cb();
  });
});
