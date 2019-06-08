import { Request, Response } from "express";

import { MongoNanumRepository } from "../../../data/repositories/nanum";
import getNanumList from "../../../services/nanum/getNanumList";
import { NanumType } from "../../../entities/Nanum";

const getNanumListHandler = async (req: Request, res: Response) => {
  const rawType: NanumType | undefined = req.body.type;
  const rawExpiry: string | undefined = req.body.expiry;

  const type = rawType;
  const expiry = Number(rawExpiry) || undefined;

  const nanumRepository = new MongoNanumRepository();

  try {
    const nanumList = await getNanumList(nanumRepository, type, expiry);
    res.status(200).json({ data: nanumList });
  } catch (e) {
    res.status(500).send();
  }
};

export default getNanumListHandler;
