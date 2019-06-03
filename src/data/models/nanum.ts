import { ApartmentId, NanumWithoutApartment } from "../../types/nanum";
import { NanumId } from "../../entities/Nanum";


// MongoDb Collection _ "nanum"
export interface MongoNanumModel extends NanumWithoutApartment {
  apartmentId: ApartmentId;
  nanumId: NanumId;
}