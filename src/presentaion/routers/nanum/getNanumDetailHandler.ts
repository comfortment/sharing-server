import {Request, Response} from "express";``

import { MongoNanumRepository } from "../../../data/repositories/nanum";
import getNanumDetail from "../../../services/nanum/getNanumDetail";
import { Nanum } from "../../../entities/Nanum";
import { NonExistNanumError, NonExistApartmentError } from "../../../exception";


const getNanumDetailHandler = async (req: Request, res: Response) => {
  const nanumId: string = req.params.nanumId;
  const repository = new MongoNanumRepository();

  try {
    const nanumDetail: Nanum = await getNanumDetail(repository, nanumId);
    return res.status(200).json({data: nanumDetail});
  } catch (e) {
    if (e instanceof NonExistNanumError || e instanceof NonExistApartmentError) {
      res.status(404).send();
    } else {
      res.status(500).send();
    }
  }
};

export default getNanumDetailHandler;
