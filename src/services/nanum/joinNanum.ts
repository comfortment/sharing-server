import { OwnApartmentRepository } from "../../data/models/ownApartment";
import { NanumId } from "../../entities/Nanum";
import { ApartmentId } from "../../types/nanum";
import { NonExistApartmentError } from "../../exception";

const joinNanum = async (
  apartmentRepository: OwnApartmentRepository,
  nanumId: NanumId,
  apartmentId: ApartmentId
) => {
  let broughtApartment = await apartmentRepository.findOne(apartmentId);

  if (!broughtApartment) {
    await apartmentRepository.update(apartmentId, { starList: [], joinList: [] });
    broughtApartment = await apartmentRepository.findOne(apartmentId);
  }

  if (!broughtApartment) {
    throw new NonExistApartmentError();
  }

  const joinedNanumId = broughtApartment.joinList.find(value => value === nanumId);

  if (joinedNanumId) {
    broughtApartment.joinList = broughtApartment.joinList.filter(value => value !== joinedNanumId);
  } else {
    broughtApartment.joinList.push(nanumId);
  }

  await apartmentRepository.update(apartmentId, { joinList: broughtApartment.joinList });
};

export default joinNanum;
