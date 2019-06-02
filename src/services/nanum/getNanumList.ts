import { inRange } from "lodash";

import { NanumRepository } from "../repositoryInterfaces/nanum";
import { GetNanumListCondition } from "../../types/getNanumTypes";
import { Nanum, NanumType } from "../../entities/Nanum";
import { BadConditionError } from "../../exception";

const getNanumList = async (
  repository: NanumRepository,
  condition: GetNanumListCondition
): Promise<Nanum[]> => {
  const allowCondition: (NanumType | undefined)[] = [
    "bundle",
    "joint",
    "rummage_sale",
    "worker",
    undefined,
  ];
  const { expiry } = condition;

  if (expiry) {
    const time: number = Number(getDateOrHour(expiry));
    const kind: string = getKindOfExpiry(expiry);

    const isDateExpiry = kind === "d" && inDateRange(time);
    const isHourExpiry = kind === "h" && inHourRange(time);

    if (!isDateExpiry && !isHourExpiry) {
      throw new BadConditionError();
    }
  }

  if (allowCondition.includes(condition.type)) {
    return await repository.find(condition);
  } else {
    throw new BadConditionError();
  }
};

const getDateOrHour = (expiry: string): string => expiry.slice(0, 2);
const getKindOfExpiry = (expiry: string): string => expiry.slice(2, 3);
const inDateRange = (time: number): boolean => inRange(time, 1, 31);
const inHourRange = (time: number): boolean => inRange(time, 1, 25);

export default getNanumList;
