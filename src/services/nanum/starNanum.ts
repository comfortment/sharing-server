import { NanumId } from "../../entities/Nanum";
import { ApartmentId } from "../../types/nanum";
import { NonExistApartmentError } from "../../exception";
import { OwnApartmentRepository } from "../../data/models/ownApartment";

const starNanum = async (
  apartmentRepository: OwnApartmentRepository,
  nanumId: NanumId,
  apartmentId: ApartmentId
) => {
  const updatingApartment = await apartmentRepository.findOne(apartmentId);

  if (!updatingApartment) {
    throw new NonExistApartmentError();
  }

  const staredNanumId = updatingApartment.starList.find(value => value === nanumId);

  if (staredNanumId) {
    updatingApartment.starList = updatingApartment.starList.filter(
      value => value !== staredNanumId
    );
  } else {
    updatingApartment.starList.push(nanumId);
  }

  await apartmentRepository.update(apartmentId, { starList: updatingApartment.starList });
};

export default starNanum;
