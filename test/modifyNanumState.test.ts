import modifyNanumState from "../src/services/nanum/modifyNanumState";
import { MockNanumRepository, MOCK_NANUM_APARTMENT_ID } from "./mock/MockNanumRepository";
import { NoPermissionError } from "../src/exception";

describe("modifyNanumState", () => {
  const mockNanumRepository = new MockNanumRepository("testNanumId");

  it("throw error with unknown nanum id", async cb => {
    const resultPromise = modifyNanumState(mockNanumRepository, "", "", { currentState: "paid" });

    await expect(resultPromise).rejects.toThrow();
    cb();
  });

  it("throw error with not owned nanum id", async cb => {
    const resultPromise = modifyNanumState(mockNanumRepository, "faking", "testNanumId", {
      currentState: "paid",
    });

    await expect(resultPromise).rejects.toThrow(NoPermissionError);
    cb();
  });

  it("change nanum state with legal query", async cb => {
    const TEST_NANUM_ID = "testNanumId";

    await modifyNanumState(mockNanumRepository, MOCK_NANUM_APARTMENT_ID, TEST_NANUM_ID, {
      currentState: "done",
    });

    const modified = (await mockNanumRepository.findOne(TEST_NANUM_ID))!;

    expect(modified.currentState).toEqual("done");
    cb();
  });
});
