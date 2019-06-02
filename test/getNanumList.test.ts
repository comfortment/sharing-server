import getNanumList from "../src/services/nanum/getNanumList";
import { GetNanumListCondition } from "../src/types/getNanumTypes";
import { expiryToComparable, MockNanumRepository, ELEMENT_COUNT } from "./MockNanumRepository";

const TEST_EXPIRY = "01d";

describe("getNanumList", () => {
  const mockRepository = new MockNanumRepository();

  async function runWithInjectedRepository(query: GetNanumListCondition) {
    return await getNanumList(mockRepository, query);
  }

  it(`will return list of products with empty query, with ${ELEMENT_COUNT} elements`, async cb => {
    const query = {};
    const result = await runWithInjectedRepository(query);

    expect(result.length).toBe(ELEMENT_COUNT);
    cb();
  });

  it("can filter with type bundle", async cb => {
    const query: GetNanumListCondition = {
      type: "bundle",
    };
    const result = await runWithInjectedRepository(query);

    for (const element of result) {
      expect(element).toHaveProperty("type", "bundle");
    }

    cb();
  });

  it(`can filter with expiry date ${TEST_EXPIRY}`, async cb => {
    const query: GetNanumListCondition = {
      expiry: TEST_EXPIRY,
    };
    const result = await runWithInjectedRepository(query);
    const comparableTestExpiry = expiryToComparable(TEST_EXPIRY);

    for (const element of result) {
      expect(expiryToComparable(element.expiry)).toBeGreaterThan(comparableTestExpiry);
    }

    cb();
  });

  it("will throw error with bad expiry date", async cb => {
    const query: GetNanumListCondition = {
      expiry: "32d",
    };

    await expect(runWithInjectedRepository(query)).rejects.toThrow();
    cb();
  });

  it("will throw error with bad type", async cb => {
    const query = {
      type: "rummage_sael",
    };

    await expect(runWithInjectedRepository(query as GetNanumListCondition)).rejects.toThrow();
    cb();
  });
});
