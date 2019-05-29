import dotenv from "dotenv";

import App from "./app";
import { IncorrectEnvError } from "./exception";
import { env } from "./utils/commanlineOptions";

const app = new App();

const runApp = (env: string, app: App) => {
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
  app.listen(Number(process.env.APPLICATION_PORT), process.env.APPLICATION_HOST);
}

runApp(env, app);
