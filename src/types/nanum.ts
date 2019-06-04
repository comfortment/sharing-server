import { Nanum } from "../entities/Nanum";
import { Omit } from "./Omit";


export type NanumWithoutApartment = Omit<
  Nanum, "roomNumber" | "ownerName" | "phoneNumber" | "nanumId"
>;

export type ApartmentId = string;

export interface CreateNanumRequest extends NanumWithoutApartment{
  apartmentId: ApartmentId;
}
