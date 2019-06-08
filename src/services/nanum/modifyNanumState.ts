import { NanumRepository } from "../repositoryInterfaces/nanum";
import { ApartmentId, ModifyNanumStateRequest } from "../../types/nanum";
import { NanumId } from "../../entities/Nanum";
import { NonExistNanumError, NoPermissionError } from "../../exception";


const modifyNanumState = async (
  repository: NanumRepository,
  apartmentId: ApartmentId,
  nanumId: NanumId,
  correction: ModifyNanumStateRequest,
): Promise<void> => {
  const broughtNanum = await repository.findOne(nanumId);
  if (!broughtNanum) {
    throw new NonExistNanumError();
  }

  if(broughtNanum.apartmentId != apartmentId) {
    throw new NoPermissionError();
  }

  await repository.updateOne(nanumId, correction);
};

export default modifyNanumState;
