import { Router } from "express";

import getNanumList from "./getNanumList";
import getNanumDetail from "./getNanumDetail";
import changeStarState from "./changeStarState";
import getStaredNanumList from "./getStaredNanumList";
import createNanum from "./createNanum";
import getOwnedNanumList from "./getOwnedNanumList";
import getJoinedNanumList from "./getJoinedNanumList";
import joinNanum from "./joinNanum";
import changeNanumState from "./changeNanumState";


const NanumRouter = Router();

NanumRouter.get('/', getNanumList);
NanumRouter.post('/', createNanum);
NanumRouter.get('/:nanum_id', getNanumDetail);
NanumRouter.patch('/stared/:post_id/:user_id', changeStarState);
NanumRouter.get('/stared/:user_id', getStaredNanumList);
NanumRouter.get('/raised/:user_id', getOwnedNanumList);
NanumRouter.get('/joined/:user_id', getJoinedNanumList);
NanumRouter.patch('/joined/:post_id/:user_id', joinNanum);
NanumRouter.patch('/raised/:user_id/state', changeNanumState);


export default NanumRouter;
