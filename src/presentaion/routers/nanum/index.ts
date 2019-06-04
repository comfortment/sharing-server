import { Router } from "express";

import createNanumHandler from "./createNanumHandler";
import getNanumDetailHandler from "./getNanumDetailHandler";
import getRaisedNanumListHandler from "./getRaisedNanumListHandler";


const NanumRouter: Router = Router();

NanumRouter.get("/:apartmentId/raised", getRaisedNanumListHandler);
NanumRouter.post("/:apartmentId/raised", createNanumHandler);
NanumRouter.get("/:nanumId", getNanumDetailHandler);

export default NanumRouter;
