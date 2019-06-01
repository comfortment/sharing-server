import { Router } from "express";

import getNanumListHandler from "./getNanumList";
import getNanumDetailHandler from "./getNanumDetail";
import changeStarState from "./changeStarState";
import getStaredNanumList from "./getStaredNanumList";
import createNanum from "./createNanum";
import getOwnedNanumList from "./getOwnedNanumList";
import getJoinedNanumList from "./getJoinedNanumList";
import joinNanum from "./joinNanum";
import changeNanumState from "./changeNanumState";


const NanumRouter = Router();

NanumRouter.get('/', getNanumListHandler);
NanumRouter.post('/', createNanum);
NanumRouter.get('/:nanumId', getNanumDetailHandler);
NanumRouter.patch('/stared/:postId/:userId', changeStarState);
NanumRouter.get('/stared/:userId', getStaredNanumList);
NanumRouter.get('/raised/:userId', getOwnedNanumList);
NanumRouter.get('/joined/:userId', getJoinedNanumList);
NanumRouter.patch('/joined/:postId/:userId', joinNanum);
NanumRouter.patch('/raised/:userId/state', changeNanumState);

export default NanumRouter;
