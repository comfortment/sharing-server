import { Nanum, NanumId, NanumType } from "../entities/Nanum";
import { Omit } from "./Omit";

export type NanumWithoutApartment = Omit<
  Nanum,
  "roomNumber" | "ownerName" | "phoneNumber" | "nanumId"
>;

export type ApartmentId = string;

export interface CreateNanumRequest extends NanumWithoutApartment {
  apartmentId: ApartmentId;
}

export interface GetNanumFilter {
  nanumId?: NanumId;
  apartmentId?: ApartmentId;
  type?: NanumType;
}

export type ModifyNanumRequest = Partial<NanumWithoutApartment>;

export type ModifyNanumStateRequest = Pick<NanumWithoutApartment, "currentState">
