import { Db, MongoClient } from "mongodb";

class MongoConnection {
  private static client: MongoClient;
  private static dbUrl: string;
  private static dbName: string;
  private static dbConnection: Db;

  public static async initialize() {
    this.dbUrl = process.env.DB_URL!;
    this.dbName = process.env.DB_NAME!;
    this.client = new MongoClient(this.dbUrl);
    this.dbConnection = await this.createConnection();
  }

  private static async createConnection(): Promise<Db> {
    await this.client.connect();
    return this.client.db(this.dbName);
  }

  public static get(): Db {
    return this.dbConnection;
  }

  public static close() {
    this.client.close();
  }
}

export default MongoConnection;
