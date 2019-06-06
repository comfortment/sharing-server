import { Request, Response } from "express";
import { MongoNanumRepository } from "../../../data/repositories/nanum";
import { MongoOwnApartmentRepository } from "../../../data/repositories/mongoOwnApartment";
import getStaredNanumList from "../../../services/nanum/getStaredNanumList";
import { NonExistApartmentError } from "../../../exception";

const getStaredNanumListHandler = async (req: Request, res: Response) => {
  const apartmentId: string = req.params.apartmentId;
  const nanumRepository = new MongoNanumRepository();
  const ownApartmentRepository = new MongoOwnApartmentRepository();

  try {
    const staredNanumList = await getStaredNanumList(
      ownApartmentRepository,
      nanumRepository,
      apartmentId
    );

    res.status(200).json({ data: staredNanumList });
  } catch (e) {
    if (e instanceof NonExistApartmentError) {
      res.status(404).send();
    } else {
      res.status(500).send();
    }
  }
};

export default getStaredNanumListHandler;
