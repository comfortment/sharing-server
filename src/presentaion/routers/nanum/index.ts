import { Router } from "express";
import multer from "multer";

import createNanumHandler from "./createNanumHandler";
import getNanumDetailHandler from "./getNanumDetailHandler";
import getRaisedNanumListHandler from "./getRaisedNanumListHandler";
import uploadImageHandler from "./uploadImage";

const NanumRouter: Router = Router();
const multerStorage = multer.memoryStorage();

NanumRouter.get("/:apartmentId/raised", getRaisedNanumListHandler);
NanumRouter.post("/:apartmentId/raised", createNanumHandler);
NanumRouter.get("/:nanumId", getNanumDetailHandler);
NanumRouter.post("/image", multer({ storage: multerStorage }).single(), uploadImageHandler);

export default NanumRouter;
