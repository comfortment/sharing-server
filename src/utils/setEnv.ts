import dotenv from "dotenv";
import { IncorrectEnvError } from "../exception";
import { env } from "./commanlineOptions";


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
