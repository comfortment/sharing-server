import getNanumList from "../src/services/nanum/getNanumList";
import { MockNanumRepository, MOCK_NANUM_COUNT } from "./mock/MockNanumRepository";

describe("getNanumList", () => {
  const mockNanumRepository = new MockNanumRepository("");

  it("return all of nanum list without query", async cb => {
    const result = await getNanumList(mockNanumRepository);

    expect(result.length).toBe(MOCK_NANUM_COUNT);
    cb();
  });

  it("return all of bundle list with type argument 'bundle'", async cb => {
    const result = await getNanumList(mockNanumRepository, "bundle");

    for (const element of result) {
      expect(element.type).toEqual("bundle");
    }

    cb();
  });

  it("return all of alive list with expiry argument", async cb => {
    const MIN_EXPIRY = 12;
    const result = await getNanumList(mockNanumRepository, undefined, MIN_EXPIRY);

    for (const element of result) {
      expect(element.expiry > MIN_EXPIRY).toBe(true);
    }

    cb();
  });
});
