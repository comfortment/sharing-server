import { BaseProduct, Path, ProductType } from "../entities/Nanum";


export interface GetNanumListCondition {
  type?: ProductType,
  expiry?: string
}

export interface BroughtNanum extends BaseProduct {
  referTo: Path;
}
