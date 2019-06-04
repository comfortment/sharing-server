import uuid4 from "uuid/v4";

import { NanumRepository } from "../repositoryInterfaces/nanum";
import { CreateNanumRequest } from "../../types/nanum";
import { NanumId } from "../../entities/Nanum";


const createNanum = async (
  repository: NanumRepository, data: CreateNanumRequest
): Promise<NanumId> => {
  const nanumId: NanumId = uuid4()

  await repository.createOne({...data, nanumId});

  return nanumId;
};

export default createNanum;
