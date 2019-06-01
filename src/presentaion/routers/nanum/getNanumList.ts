import { Request, Response } from "express";

import { MongoNanumRepository } from "../../../data/repositories/nanum";
import getNanumList from "../../../services/nanum/getNanumList";
import { GetNanumListCondition } from "../../../types/getNanumTypes";
import { BaseProduct } from "../../../entities/Nanum";
import { BadConditionError } from "../../../exception";


const getNanumListHandler = async (req: Request, res: Response) => {
  const condition: GetNanumListCondition = req.query
  const repository: MongoNanumRepository = new MongoNanumRepository();

  try {
    const broughtNanumList: BaseProduct[] = await getNanumList(repository, condition);
    return res.status(200).json({data: broughtNanumList});
  } catch (e) {
    if (e instanceof BadConditionError) {
      res.status(400).send();
    } else {
      res.status(500).send();
    }
  }
};

export default getNanumListHandler;
