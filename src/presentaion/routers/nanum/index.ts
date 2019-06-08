import { Router } from "express";
import multer from "multer";

import createNanumHandler from "./createNanumHandler";
import getNanumDetailHandler from "./getNanumDetailHandler";
import getRaisedNanumListHandler from "./getRaisedNanumListHandler";
import uploadImageHandler from "./uploadImage";
import modifyRaisedNanumHandler from "./modifyRaisedNanumHandler";
import starNanumHandler from "./starNanumHandler";
import getStaredNanumListHandler from "./getStaredNanumListHandler";
import modifyNanumState from "./modifyNanumStateHandler";
import joinNanumHandler from "./joinNanumHandler";
import getJoinedNanumListHandler from "./getJoinedNanumListHandler";
import getNanumListHandler from "./getNanumListHandler";

const NanumRouter: Router = Router();
const multerStorage = multer.memoryStorage();

NanumRouter.get("/", getNanumListHandler);
NanumRouter.get("/:apartmentId/raised", getRaisedNanumListHandler);
NanumRouter.post("/:apartmentId/raised", createNanumHandler);
NanumRouter.patch("/:apartmentId/raised/:nanumId", modifyRaisedNanumHandler);
NanumRouter.patch("/:apartmentId/raised/:nanumId/state", modifyNanumState);
NanumRouter.get("/:nanumId", getNanumDetailHandler);
NanumRouter.post("/image", multer({ storage: multerStorage }).single("file"), uploadImageHandler);
NanumRouter.patch("/:apartmentId/stared/:nanumId", starNanumHandler);
NanumRouter.get("/:apartmentId/stared", getStaredNanumListHandler);
NanumRouter.patch("/:apartmentId/joined/:nanumId", joinNanumHandler);
NanumRouter.get("/:apartmentId/joined", getJoinedNanumListHandler);

export default NanumRouter;
