import { NanumRepository } from "../repositoryInterfaces/nanum";
import { ApartmentRepository } from "../repositoryInterfaces/apartment";
import { ApartmentId } from "../../types/nanum";
import { Nanum } from "../../entities/Nanum";
import { NonExistNanumError } from "../../exception";


const getRaisedNanumList = async (
  nanumRepository: NanumRepository,
  apartmentRepository: ApartmentRepository,
  apartmentId: ApartmentId,
): Promise<Nanum[]> => {
  const broughtNanumList = await nanumRepository.find({apartmentId});

  if (!broughtNanumList.length) {
    throw new NonExistNanumError();
  }

  const broughtApartment = await apartmentRepository.findOne(apartmentId);

  const raisedNanumList: Nanum[] = broughtNanumList.map(data => ({...data, ...broughtApartment}));
  
  return raisedNanumList;
};

export default getRaisedNanumList;
