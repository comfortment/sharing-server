import dotenv from "dotenv";

import App from "./app";
import { IncorrectEnvError } from "./exception";
import { env } from "./utils/commanlineOptions";
import MongoConnection from "./data/mongo";

const app = new App();

(async function (env: string, app: App) {
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
