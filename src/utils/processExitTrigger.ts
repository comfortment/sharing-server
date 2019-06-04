import MongoConnection from "../data/mongo";


const onExit = () => {
  MongoConnection.close();
};

export default onExit;