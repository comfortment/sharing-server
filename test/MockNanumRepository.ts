import faker from "faker";
import uuid from "uuid/v4";
import { random } from "lodash";

import { NanumRepository } from "../src/services/repositoryInterfaces/nanum";
import { GetNanumListCondition } from "../src/types/getNanumTypes";
import { Nanum, NanumType } from "../src/entities/Nanum";

export const ELEMENT_COUNT = 1000;

export function expiryToComparable(expiry: string): number {
  const isDateExpiry = expiry[2] === "d";
  const numberPart = expiry.slice(0, 2);

  function hourToDateScale(hour: number) {
    return 24 / hour;
  }

  if (isDateExpiry) {
    return Number(numberPart);
  } else {
    return hourToDateScale(Number(numberPart));
  }
}

export class MockNanumRepository implements NanumRepository {
  private data: Nanum[] = [];

  public constructor() {
    const types: NanumType[] = ["bundle", "joint", "rummage_sale", "worker"];
    for (let i = 0; i < ELEMENT_COUNT; i++) {
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
  public findOne(_: string) {
    return {} as any;
  }
}
