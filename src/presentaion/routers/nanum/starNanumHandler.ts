import { Request, Response } from "express";
import starNanum from "../../../services/nanum/starNanum";
import { MongoOwnApartmentRepository } from "../../../data/repositories/mongoOwnApartment";

const starNanumHandler = async (req: Request, res: Response) => {
  const { apartmentId, nanumId } = req.params;
  const mongoOwnApartmentRepository = new MongoOwnApartmentRepository();

  try {
    await starNanum(mongoOwnApartmentRepository, nanumId, apartmentId);

    res.status(200).send();
  } catch (e) {
    res.status(500).send();
  }
};

export default starNanumHandler;
