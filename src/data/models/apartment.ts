import { NanumId, Nanum } from "../../entities/Nanum";
import { ApartmentId } from "../../types/nanum";


export type ApartmentWithoutNanum = Pick<Nanum, "roomNumber" | "ownerName" | "phoneNumber">;

// A.I Lambda
export interface LambdaApartmentModel extends ApartmentWithoutNanum {
  apartmentId: ApartmentId;
}

// MongoDb Collection
export interface MongoOwnNanumModel {
  apartmentId: ApartmentId;
  starList: NanumId[];
  joinList: NanumId[];
}
