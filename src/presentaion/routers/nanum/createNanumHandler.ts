import { Request, Response } from "express";

import { MongoNanumRepository } from "../../../data/repositories/nanum";
import createNanum from "../../../services/nanum/createNanum";


const createNanumHandler = async (req: Request, res: Response) => {
  const apartmentId: string = req.params.apartmentId;
  const repository = new MongoNanumRepository();

  await createNanum(repository, {...req.body, apartmentId});

  return res.status(201).send();
};

export default createNanumHandler;
