import { Request, Response } from "express";
import { ApartmentId, ModifyNanumStateRequest } from "../../../types/nanum";
import { NanumId } from "../../../entities/Nanum";
import { MongoNanumRepository } from "../../../data/repositories/nanum";
import modifyNanumState from "../../../services/nanum/modifyNanumState";
import { NonExistNanumError, NoPermissionError } from "../../../exception";


const modifyNanumStateHandler = async (req: Request, res: Response) => {
  const apartmentId: ApartmentId = req.params.apartmentId;
  const nanumId: NanumId = req.params.nanumId;
  const repository = new MongoNanumRepository();
  const payload: ModifyNanumStateRequest = req.body;

  try {
    await modifyNanumState(repository, apartmentId, nanumId, payload);
  } catch (e) {
    if (e instanceof NonExistNanumError) {
      res.status(404).send();
    } else if (e instanceof NoPermissionError) {
      res.status(403).send();
    } else {
      res.status(500).send();
    }
  }
  
  return res.status(200).send();
};

export default modifyNanumStateHandler;
