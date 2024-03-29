'use server';
import { MongoClient} from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
    throw new Error('MONGODB_URI is not defined in the environment variables.');
}

const client = new MongoClient(uri);

export const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log('db---Erfolgreich mit der Datenbank verbunden');
    } catch (error) {
        console.error('db---Fehler beim Verbindungsaufbau zur Datenbank:', error);
    }
};

export const closeDatabaseConnection = async () => {
    try {
        await client.close();
        console.log('db---Verbindung zur Datenbank erfolgreich geschlossen');
    } catch (error) {
        console.error('db---Fehler beim Schließen der Datenbankverbindung:', error);
    }
};

export const getDatabaseClient = () => client;