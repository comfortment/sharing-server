import { Nanum } from "../../entities/Nanum";
import { NanumRepository } from "../repositoryInterfaces/nanum";
import { NonExistNanumError } from "../../exception";


const getNanumDetail = async (repository: NanumRepository, nanumId: string): Promise<Nanum> => {
  const broughtNanum: Nanum | undefined= await repository.findOne(nanumId);

  if (!broughtNanum) {
    throw new NonExistNanumError();
  }

  return broughtNanum;
}

export default getNanumDetail;
