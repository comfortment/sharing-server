import { NanumType } from "../entities/Nanum";


export interface GetNanumListCondition {
  type?: NanumType,
  expiry?: string
}
