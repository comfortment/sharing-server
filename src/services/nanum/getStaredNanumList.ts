import { NanumRepository } from "../repositoryInterfaces/nanum";
import { ApartmentId } from "../../types/nanum";
import { OwnApartmentRepository } from "../../data/models/ownApartment";
import { NonExistApartmentError } from "../../exception";

const getStaredNanumList = async (
  apartmentRepository: OwnApartmentRepository,
  nanumRepository: NanumRepository,
  apartmentId: ApartmentId,
) => {
  const ownApartment = await apartmentRepository.findOne(apartmentId);
  if (!ownApartment) {
    throw new NonExistApartmentError();
  }

  const { starList } = ownApartment;
  const staredNanumList = [];

  for (const staredNanumId of starList) {
    const maybeStaredNanum = await nanumRepository.findOne(staredNanumId);
    if (maybeStaredNanum) {
      staredNanumList.push(maybeStaredNanum);
    }
  }

  return staredNanumList;
};

export default getStaredNanumList;
