import { MongoClient, Db } from 'mongodb';

let cachedClient: MongoClient;
let cachedDb: Db;

async function connectToDatabase(uri: string): Promise<{ client: MongoClient; db: Db }> {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(uri, { useNewUrlParser: true } as any);

  await client.connect();
  const db = client.db();

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export default connectToDatabase;