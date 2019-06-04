import { ApartmentId, NanumWithoutApartment } from "../../types/nanum";
import { NanumId } from "../../entities/Nanum";


// MongoDb Collection _ "nanum"
export interface NanumModel extends NanumWithoutApartment {
  apartmentId: ApartmentId;
  nanumId: NanumId;
}