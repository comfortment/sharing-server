import express from "express";
import helmet from "helmet";
import http from "http";

import NanumRouter from "./presentaion/routers/nanum";


class App {
  private app: express.Express;
  private server: http.Server;
  
  public constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    
    this.app.use(express.json());
    this.app.use(helmet());

    this.app.use("/nanum", NanumRouter);
  }

  public listen(port?: number, hostname?: string) {
    this.server.listen(port, hostname);
  }
}

export default App;
