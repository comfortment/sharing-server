import faker from "faker";
import uuid from "uuid/v4";
import { random } from "lodash";

import { NanumRepository } from "../src/services/repositoryInterfaces/nanum";
import { GetNanumListCondition } from "../src/types/getNanumTypes";
import { Nanum, NanumType } from "../src/entities/Nanum";
import { NanumTypeNames } from "../src/constant/nanum";

export const ELEMENT_COUNT = 1000;

export const SPECIFIC_TEST_ID = uuid();

export function expiryToComparable(expiry: string): number {
  const isDateExpiry = expiry[2] === "d";
  const numberPart = expiry.slice(0, 2);

  function dateToHourScale(date: number) {
    return 24 * date;
  }

  if (isDateExpiry) {
    return dateToHourScale(Number(numberPart));
  } else {
    return Number(numberPart);
  }
}

export class MockNanumRepository implements NanumRepository {
  private data: Nanum[] = [];

  public constructor() {
    const types: NanumType[] = [
      NanumTypeNames.bundle,
      NanumTypeNames.joint,
      NanumTypeNames.rummage_sale,
      NanumTypeNames.worker,
    ];
    for (let i = 0; i < ELEMENT_COUNT - 1; i++) {
      const expiry = [random(1, 25).toString() + "h", random(1, 31).toString() + "d"][random(0, 1)];
      this.data.push({
        id: uuid(),
        type: types[random(0, 3)],
        price: Number(faker.commerce.price(1000, 100000)),
        expiry,
        payAt: ["advanced", "deferred"][random(0, 1)] as ("advanced" | "deferred"),
        title: faker.name.title(),
        star: [true, false][random(0, 1)],
        processState: "recruiting",
      });
    }
    this.data.push({
      id: SPECIFIC_TEST_ID,
      type: "joint",
      price: 38000,
      expiry: "12d",
      payAt: "advanced",
      title: "당근",
      star: false,
      processState: "recruiting",
    });
  }

  public async find(condition: GetNanumListCondition): Promise<Nanum[]> {
    function filterWithExpiry(data: Nanum[]) {
      return data.filter(element => {
        const conditionExpiry = expiryToComparable(condition.expiry!);
        const elementExpiry = expiryToComparable(element.expiry);

        return elementExpiry > conditionExpiry;
      });
    }

    function filterWithType(data: Nanum[]) {
      return data.filter(element => {
        const conditionType = condition.type!;
        const elementType = element.type;

        return conditionType === elementType;
      });
    }

    if (condition.expiry && condition.type) {
      return filterWithExpiry(filterWithType(this.data));
    } else if (condition.expiry) {
      return filterWithExpiry(this.data);
    } else if (condition.type) {
      return filterWithType(this.data);
    } else {
      return this.data;
    }
  }

  // Fake
  public async findOne(id: string) {
    return this.data.find(value => value.id === id)!;
  }

  public async updateOne(id: string, apartmentId: string, target: object): Promise<void> {
    return;
  }
}
