import { MockNanumRepository, SPECIFIC_TEST_ID } from "./MockNanumRepository";
import getNanumDetail from "../src/services/nanum/getNanumDetail";

describe("getNanumDetail", () => {
  const mockNanumRepository = new MockNanumRepository();

  async function runWithInjectedRepository(nanumId: string) {
    return await getNanumDetail(mockNanumRepository, nanumId);
  }

  it("will return with specific nanum id", async cb => {
    const id = SPECIFIC_TEST_ID;
    const resultPromise = runWithInjectedRepository(id);

    await expect(resultPromise).resolves.toHaveProperty("id", id);
    cb();
  });

  it("will throw error with non-existing nanum id", async cb => {
    const id = "loremIpsumDolorSit";
    const resultPromise = runWithInjectedRepository(id);

    await expect(resultPromise).rejects.toThrowError();
    cb();
  });
});
