import dotenv from "dotenv";

import App from "./app";
import { IncorrectEnvError } from "./exception";
import { env } from "./utils/commanlineOptions";
import MongoConnection from "./data/mongo";
import onExit from "./utils/processExitTrigger";


const app = new App();

(async (env: string, app: App) => {
  switch (env) {
    case "production":
      dotenv.config();
      break;
    case "development":
      dotenv.config({path: '.env.test'});
      break;
    default:
      throw new IncorrectEnvError();
  }
  await MongoConnection.initialize();
  app.listen(Number(process.env.APPLICATION_PORT), process.env.APPLICATION_HOST);
}
)(env, app);

process.on("exit", onExit);
