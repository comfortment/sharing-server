import { NanumRepository } from "../repositoryInterfaces/nanum";
import { NonExistNanumError, NonExistApartmentError } from "../../exception";
import { ApartmentId } from "../../types/nanum";
import { Nanum } from "../../entities/Nanum";
import { ApartmentRepository } from "../repositoryInterfaces/apartment";


const getNanumDetail = async (
  nanumRepository: NanumRepository, apartmentRepository: ApartmentRepository, nanumId: string
): Promise<Nanum> => {
  let nanumDetail: Nanum;
  const broughtNanum = await nanumRepository.findOne(nanumId);
  if (!broughtNanum) {
    throw new NonExistNanumError();
  }

  const apartmentId: ApartmentId = broughtNanum.apartmentId;

  try {
    const broughtApartment = await apartmentRepository.findOne(apartmentId);
    nanumDetail = {...broughtNanum, ...broughtApartment};
  } catch (e) {
    throw new NonExistApartmentError();
  }

  return nanumDetail;
};

export default getNanumDetail;
