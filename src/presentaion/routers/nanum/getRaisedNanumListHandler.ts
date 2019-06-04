import { Request, Response } from "express";

import { ApartmentId } from "../../../types/nanum";
import { MongoNanumRepository } from "../../../data/repositories/nanum";
import { LambdaApartmentRepository } from "../../../data/repositories/apartment";
import getRaisedNanumList from "../../../services/nanum/getRaisedNanumList";
import { NonExistNanumError, NonExistApartmentError } from "../../../exception";
import { Nanum } from "../../../entities/Nanum";


const getRaisedNanumListHandler = async (req: Request, res: Response) => {
  const apartmentId: ApartmentId = req.params.apartmentId;
  const nanumRepository = new MongoNanumRepository();
  const apartmentRepository = new LambdaApartmentRepository();


  try {
    const raisedNanumList: Nanum[] = await getRaisedNanumList(
      nanumRepository, apartmentRepository, apartmentId
    );
    return res.status(200).json({data: raisedNanumList});
  } catch (e) {
    if (e instanceof NonExistNanumError || e instanceof NonExistApartmentError) {
      res.status(404).send();
    } else {
      res.status(500).send();
    }
  }
};

export default getRaisedNanumListHandler;
