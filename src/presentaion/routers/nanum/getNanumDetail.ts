import { Request, Response } from "express";

import getNanumDetail from "../../../services/nanum/getNanumDetail";
import { MongoNanumRepository } from "../../../data/repositories/nanum" 
import { NonExistNanumError } from "../../../exception";
import { Nanum } from "../../../entities/Nanum";


const getNanumDetailHandler = async (req: Request, res: Response) => {
  const nanumId: string = req.params.nanumId;
  const repository: MongoNanumRepository = new MongoNanumRepository();

  try {
    const broughtNanum: Nanum = await getNanumDetail(repository, nanumId);
    return res.status(200).json({data: broughtNanum});
  } catch (e) {
    if (e instanceof NonExistNanumError) {
      res.status(404).send();
    } else {
      res.status(500).send();
    }
  }

};

export default getNanumDetailHandler;
