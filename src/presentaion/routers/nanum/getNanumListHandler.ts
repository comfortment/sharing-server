import {Request, Response} from "express";

import { MongoNanumRepository } from "../../../data/repositories/nanum";
import { LambdaApartmentRepository } from "../../../data/repositories/apartment";


const getNanumListHandler = async (req: Request, res: Response) => {
  const nanumRepository = new MongoNanumRepository();
  const apartmentRepository = new LambdaApartmentRepository();
};

export default getNanumListHandler;
