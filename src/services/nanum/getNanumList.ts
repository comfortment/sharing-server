import { NanumRepository } from "../repositoryInterfaces/nanum";
import { GetNanumListCondition } from "../../types/getNanumTypes";
import { BaseProduct, ProductType } from "../../entities/Nanum";
import { BadConditionError } from "../../exception";


const getNanumList = async (
  repository: NanumRepository, condition: GetNanumListCondition
): Promise<BaseProduct[]> => {
  const allowCondition: (ProductType | undefined)[] = [
    "bundle", "joint", "rummage_sale", "worker" , undefined
  ];
  
  if (allowCondition.includes(condition.type)) {
    return await repository.find(condition);
  } else {
    throw new BadConditionError();
  }
};

export default getNanumList;
