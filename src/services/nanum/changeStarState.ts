import { Nanum } from "../../entities/Nanum";
import { NanumRepository } from "../repositoryInterfaces/nanum";


const changeStarState = async (
  repository: NanumRepository, nanumId: string, apartmentId: string
) => {
  const broghtNanum = await repository.findOne(nanumId) as Nanum;
  const starState: boolean = broghtNanum.star;

  await repository.updateOne(nanumId, apartmentId, {star: !starState});
};

export default changeStarState;
