import { Request, Response } from "express";
import { ApartmentId } from "../../../types/nanum";
import { NanumId } from "../../../entities/Nanum";
import { MongoOwnApartmentRepository } from "../../../data/repositories/mongoOwnApartment";
import joinNanum from "../../../services/nanum/joinNanum";


const joinNanumHandler = async (req: Request, res: Response) => {
  const apartmentId: ApartmentId = req.params.apartmentId;
  const nanumId: NanumId = req.params.nanumId;
  const mongoOwnApartmentRepository = new MongoOwnApartmentRepository();
  
  try {
    await joinNanum(mongoOwnApartmentRepository, nanumId, apartmentId);

    res.status(200).send();
  } catch (e) {
    res.status(500).send();
  }
};

export default joinNanumHandler;
