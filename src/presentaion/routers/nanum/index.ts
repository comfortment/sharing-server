import { Router } from "express";
import multer from "multer";

import createNanumHandler from "./createNanumHandler";
import getNanumDetailHandler from "./getNanumDetailHandler";
import getRaisedNanumListHandler from "./getRaisedNanumListHandler";
import uploadImageHandler from "./uploadImage";
import modifyRaisedNanumHandler from "./modifyRaisedNanumHandler";
import starNanumHandler from "./starNanumHandler";
import getStaredNanumListHandler from "./getStaredNanumListHandler";

const NanumRouter: Router = Router();
const multerStorage = multer.memoryStorage();

NanumRouter.get("/:apartmentId/raised", getRaisedNanumListHandler);
NanumRouter.post("/:apartmentId/raised", createNanumHandler);
NanumRouter.patch("/:apartmentId/raised/:nanumId", modifyRaisedNanumHandler);
NanumRouter.get("/:nanumId", getNanumDetailHandler);
NanumRouter.post("/image", multer({ storage: multerStorage }).single(), uploadImageHandler);
NanumRouter.patch("/:apartmentId/stared/:nanumId", starNanumHandler);
NanumRouter.get("/:apartmentId/stared", getStaredNanumListHandler);

export default NanumRouter;
