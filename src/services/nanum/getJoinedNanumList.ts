import { OwnApartmentRepository } from "../../data/models/ownApartment";
import { NanumRepository } from "../repositoryInterfaces/nanum";
import { ApartmentId } from "../../types/nanum";
import { NonExistApartmentError } from "../../exception";
import { NanumModel } from "../../data/models/nanum";


const getJoinedNanumList = async (
  apartmentRepository: OwnApartmentRepository,
  nanumRepository: NanumRepository,
  apartmentId: ApartmentId,
) => {
  const broughtApartment = await apartmentRepository.findOne(apartmentId);
  if (!broughtApartment) {
    throw new NonExistApartmentError();
  }

  const { joinList } = broughtApartment;
  const joinedNanumList: NanumModel[] = [];

  for (const joinedNanumId of joinList) {
    const maybeJoinedNanum = await nanumRepository.findOne(joinedNanumId);
    if (maybeJoinedNanum) {
      joinedNanumList.push(maybeJoinedNanum);
    }
  }

  return joinedNanumList;
};

export default getJoinedNanumList;
