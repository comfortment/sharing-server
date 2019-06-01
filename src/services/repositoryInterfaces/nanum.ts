import { GetNanumListCondition } from "../../types/getNanumTypes"


export interface NanumRepository {
  find(condition: GetNanumListCondition): any;
}
