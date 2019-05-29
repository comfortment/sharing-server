import dotenv from "dotenv";
import nopt from "nopt";

import App from "./app";
import { IncorrectEnvError } from "./exception";


const longOpts = {
  "environment": String
}

const shortOpts = {
  "env": ["--environment"]
}

const parsed = nopt(longOpts, shortOpts, process.argv, 2);
const app = new App();
const env: string = parsed.argv.original[0];

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
