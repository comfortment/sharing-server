import { Request, Response } from "express";

import { MongoNanumRepository } from "../../../data/repositories/nanum";
import createNanum from "../../../services/nanum/createNanum";
import { ApartmentId } from "../../../types/nanum";
import { NanumId } from "../../../entities/Nanum";


const createNanumHandler = async (req: Request, res: Response) => {
  const apartmentId: ApartmentId = req.params.apartmentId;
  const repository = new MongoNanumRepository();

  const nanumId: NanumId = await createNanum(repository, {...req.body, apartmentId});

  return res.status(201).json({nanumId});
};

export default createNanumHandler;
