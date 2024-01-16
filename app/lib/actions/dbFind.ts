'use server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const db = process.env.MONGODB_DB;

if (!uri) {
    throw new Error('MONGODB_URI is not defined in the environment variables.');
}

const client = new MongoClient(uri);

export const mongoFind = async (collection: string, query: string) => {
    try {
        await client.connect();
        console.log('dbFind---Clientverbindung erfolgreich aufgebaut');

        const databaseObj = await client.db(db);
        const collectionObj = await databaseObj.collection(collection);

        const queryParsed = JSON.parse(query);
        
        console.log("dbFind---Suche in " + db + "/" + collection + " nach: " + query);
        const result = await collectionObj.find(queryParsed).toArray();
        return result;
    } 
    catch (error) {
        console.error('dbFind---Fehler beim Verbindungsaufbau zur Datenbank: ', error);
    } 
    finally {
        if (client) {
          await client.close();
          console.log('dbFind---Client erfolgreich geschlossen');
        }
      }
}