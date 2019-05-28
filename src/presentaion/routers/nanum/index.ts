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


class NanumRouter {
  private router: Router;

  public constructor() {
    this.router = Router();
    this.addResource();
  }

  public getExpressRouter() {
    return this.router;
  }

  private addResource() {
    this.router.get('/nanum', getNanumList);
    this.router.post('/nanum', createNanum);
    this.router.get('/nanum/:nanum_id', getNanumDetail);
    this.router.patch('/nanum/stared/:post_id/:user_id', changeStarState);
    this.router.get('/namum/stared/:user_id', getStaredNanumList);
    this.router.get('/nanum/raised/:user_id', getOwnedNanumList);
    this.router.get('/nanum/joined/:user_id', getJoinedNanumList);
    this.router.patch('/nanum/joined/:post_id/:user_id', joinNanum);
    this.router.patch('/nanum/raised/:user_id/state', changeNanumState);
  }

}

export default NanumRouter;
