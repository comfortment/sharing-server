import { Router } from "express";

import getNanumListHandler from "./getNanumList";
import getNanumDetailHandler from "./getNanumDetail";
import changeStarStateHandler from "./changeStarState";
import getStaredNanumListHandler from "./getStaredNanumList";
import createNanum from "./createNanum";
import getOwnedNanumList from "./getOwnedNanumList";
import getJoinedNanumList from "./getJoinedNanumList";
import joinNanum from "./joinNanum";
import changeNanumState from "./changeNanumState";


const NanumRouter = Router();

NanumRouter.get('/', getNanumListHandler);
NanumRouter.post('/', createNanum);
NanumRouter.get('/:nanumId', getNanumDetailHandler);
NanumRouter.patch('/stared/:nanumId/:apartmentId', changeStarStateHandler);
NanumRouter.get('/stared/:apartmentId', getStaredNanumListHandler);
NanumRouter.get('/raised/:apartmentId', getOwnedNanumList);
NanumRouter.get('/joined/:apartmentId', getJoinedNanumList);
NanumRouter.patch('/joined/:nanumId/:apartmentId', joinNanum);
NanumRouter.patch('/raised/:apartmentId/state', changeNanumState);

export default NanumRouter;
