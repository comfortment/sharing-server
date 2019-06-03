import { Router } from "express";

import getNanumListHandler from "../../routers/nanum/getNanumListHandler";
import createNanumHandler from "./createNanumHandler";
import getNanumDetailHandler from "./getNanumDetailHandler";


const NanumRouter: Router = Router();

NanumRouter.post("/:apartmentId/raised", createNanumHandler);
NanumRouter.get("/:nanumId", getNanumDetailHandler);

NanumRouter.get("/", getNanumListHandler);

export default NanumRouter;
