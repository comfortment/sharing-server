import uuid4 from "uuid/v4";

import { NanumRepository } from "../repositoryInterfaces/nanum";
import { CreateNanumRequest } from "../../types/nanum";


const createNanum = async (repository: NanumRepository, data: CreateNanumRequest) => {
  await repository.createOne({...data, nanumId: uuid4()});
};

export default createNanum;
