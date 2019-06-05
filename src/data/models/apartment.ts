import { NanumId, Nanum } from "../../entities/Nanum";
import { ApartmentId } from "../../types/nanum";
import { Omit } from "../../types/Omit";

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

export type MongoOwnNanumModelQuery = Partial<Omit<MongoOwnNanumModel, "apartmentId">>;
