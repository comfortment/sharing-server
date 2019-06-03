import { Omit } from "../../types/Omit";
import { Nanum } from "../../entities/Nanum";

// MongoDb Collection

export type NanumWithoutApartment = Omit<Nanum, "roomNumber" | "ownerName" | "phoneNumber">;

export type ApartmentId = string;

export interface MongoNanumModel extends NanumWithoutApartment {
  apartmentId: ApartmentId;
}