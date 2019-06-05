import { Router } from "express";
import multer from "multer";

import createNanumHandler from "./createNanumHandler";
import getNanumDetailHandler from "./getNanumDetailHandler";
import getRaisedNanumListHandler from "./getRaisedNanumListHandler";
import uploadImageHandler from "./uploadImage";
import modifyRaisedNanumHandler from "./modifyRaisedNanumHandler";
import starNanumHandler from "./starNanumHandler";

const NanumRouter: Router = Router();
const multerStorage = multer.memoryStorage();

NanumRouter.get("/:apartmentId/raised", getRaisedNanumListHandler);
NanumRouter.post("/:apartmentId/raised", createNanumHandler);
NanumRouter.patch("/:apartmentId/raised/:nanumId", modifyRaisedNanumHandler);
NanumRouter.get("/:nanumId", getNanumDetailHandler);
NanumRouter.post("/image", multer({ storage: multerStorage }).single(), uploadImageHandler);
NanumRouter.patch("/nanum/:apartmentId/stared/:nanumId", starNanumHandler);

export default NanumRouter;
