import "./utils/setEnv";
import App from "./app";
import MongoConnection from "./data/mongo";
import onExit from "./utils/processExitTrigger";

const app = new App();

(async (app: App) => {
  await MongoConnection.initialize();
  app.listen(Number(process.env.APPLICATION_PORT), process.env.APPLICATION_HOST);
}
)(app);

process.on("exit", onExit);
