import { ApartmentId, NanumWithoutApartment } from "../../types/nanum";
import { NanumId } from "../../entities/Nanum";
import { Omit } from "../../types/Omit";

// MongoDb Collection _ "nanum"
export interface NanumModel extends NanumWithoutApartment {
  apartmentId: ApartmentId;
  nanumId: NanumId;
}

export type NanumModelUpdateQuery = Partial<Omit<NanumModel, "apartmentId">>;
