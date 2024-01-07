'use server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const db = process.env.MONGODB_DB;

if (!uri) {
    throw new Error('MONGODB_URI is not defined in the environment variables.');
}

const client = new MongoClient(uri);

export const mongoExecute = async (collection: string, query: string) => {
    try {
        await client.connect();
        console.log('db---Erfolgreich mit der Datenbank verbunden!');

        const databaseObj = client.db(db);
        const collectionObj = databaseObj.collection(collection);

        const queryParsed = JSON.parse(query);

        const result = await collectionObj.find(queryParsed).toArray();
        console.log("db---Ergebnis der Datenbankabfrage: "+ JSON.stringify(result));
        return result;
    } 
    catch (error) {
        console.error('db---Fehler beim Verbindungsaufbau zur Datenbank: ', error);
    } 
    finally {
        if (client) {
          await client.close();
          console.log('db---Client erfolgreich geschlossen!');
        }
      }
}