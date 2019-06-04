import { Request, Response } from "express";
import uploadImage from "../../../services/nanum/uploadImage";
import { s3 } from "../../../aws/index";

const uploadImageHandler = async (req: Request, res: Response) => {
  const { file } = req;
  const { buffer: image } = file;

  try {
    const path = await uploadImage(image, s3);

    res.status(201).send(path);
  } catch (e) {
    res.status(500).send();
  }
};

export default uploadImageHandler;
