import { Router } from "express";

import getNanumListHandler from "../../routers/nanum/getNanumListHandler";
import createNanumHandler from "./createNanumHandler";


const NanumRouter: Router = Router();

NanumRouter.post("/:apartmentId/raised", createNanumHandler);
NanumRouter.get("/", getNanumListHandler);

export default NanumRouter;
