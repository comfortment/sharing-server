import { Request, Response } from "express";
import { MongoNanumRepository } from "../../../data/repositories/nanum";
import { MongoOwnApartmentRepository } from "../../../data/repositories/mongoOwnApartment";
import getJoinedNanumList from "../../../services/nanum/getJoinedNanumList";
import { NonExistApartmentError } from "../../../exception";


const getJoinedNanumListHandler = async (req: Request, res: Response) => {
  const apartmentId: string = req.params.apartmentId;
  const nanumRepository = new MongoNanumRepository();
  const ownApartmentRepository = new MongoOwnApartmentRepository();

  try {
    const joinedNanumList = await getJoinedNanumList(
      ownApartmentRepository,
      nanumRepository,
      apartmentId,
    );
    res.status(200).json({ data: joinedNanumList });
  } catch (e) {
    if (e instanceof NonExistApartmentError) {
      res.status(404).send();
    } else {
      res.status(500).send();
    }
  }
};

export default getJoinedNanumListHandler;
