import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
    throw new Error('MONGODB_URI is not defined in the environment variables.');
}

const client = new MongoClient(uri);

export const execute = async (collection: string, query: { username: string }) => {
    try {
        await client.connect();
        console.log('Erfolgreich mit der Datenbank verbunden');
        const databaseObj = client.db("eduinspect");
        const collectionObj = databaseObj.collection(collection);
        const result = await collectionObj.find(query).toArray();
        return result;
    } 
    catch (error) {
        console.error('Fehler beim Verbindungsaufbau zur Datenbank:', error);
    } 
    finally {
        if (client) {
          await client.close();
          console.log('Client erfolgreich geschlossen');
        }
      }
}
