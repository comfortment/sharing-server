import {Request, Response} from "express";

import { MongoNanumRepository } from "../../../data/repositories/nanum";


const getNanumDetailHandler = async (req: Request, res: Response) => {
  const nanumId: string = req.params.nanumId;
  const repository = new MongoNanumRepository();

  
};

export default getNanumDetailHandler;
