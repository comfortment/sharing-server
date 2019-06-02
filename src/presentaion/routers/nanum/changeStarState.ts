import { Request, Response } from "express";

import { MongoNanumRepository } from "../../../data/repositories/nanum";
import changeStarState from "../../../services/nanum/changeStarState";


const changeStarStateHandler = async (req: Request, res: Response) => {
  const nanumId: string = req.params.nanumId;
  const apartmentId: string = req.params.apartmentId;
  const repository = new MongoNanumRepository();

  await changeStarState(repository, nanumId, apartmentId);
};

export default changeStarStateHandler;
