"use server"
import { mongoFind } from "./dbFind";
import type { User } from '@/app/lib/definitions';
import { Document, ObjectId } from 'mongodb';
import { revalidatePath } from 'next/cache';
import {
    connectToDatabase,
    closeDatabaseConnection,
    getDatabaseClient
} from '@/app/lib/actions/db';

const db = process.env.MONGODB_DB;


export async function getUser(username: string): Promise<User | undefined> {
    try {
        const collectionString = `users`;
        const queryString = `{"username": "${username}"}`;
        console.log("dbactions---Suche nach: " + queryString);
        const results = await mongoFind(collectionString, queryString);

        const logResultsString = JSON.stringify(results);
        const truncatedString = logResultsString.substring(0, 60);
        console.log("dbactions---Results: " + truncatedString + "...");

        if (results && results.length > 0) {
            const user: Document = results[0];

            const formattedUser: User = {
                id: user._id.toString(),
                username: user.username,
                firstname: user.firstname,
                lastname: user.lastname,
                password: user.password,
            };

            console.log("dbactions---Benutzer erhalten und formatiert");
            //console.log(JSON.stringify(formattedUser)); Benutzer ausgeben

            return formattedUser;
        }
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}

export async function assginHospitation(id: string) {

    try {
        await connectToDatabase();
        //console.log("dbActions---Clientverbindung erfolgreich aufgebaut");

        const databaseClient = getDatabaseClient();
        const databaseObj = databaseClient.db(db);
        const collectionObj = databaseObj.collection("hospitations");

        //console.log("dbActions---id: " + id);
        const objectId = new ObjectId(id);

        const result = await collectionObj.updateOne(
            { _id: objectId },
            { $set: { status: 'vergeben' } }
        );

        if (result.modifiedCount === 1) {
            console.log('dbActions---Status erfolgreich auf "vergeben" geändert');
            revalidatePath('/dashboard/invoices');
        } else {
            console.log('dbActions---Objekt mit der angegebenen ID nicht gefunden oder der Status wurde nicht geändert');
        }
    }
    catch (err) {
        console.log("dbActions---Fehler: " + err);
    }
    finally {
        //console.log("dbActions---Finally");
        await closeDatabaseConnection();
        //console.log("dbActions---Clientverbindung erfolgreich geschlossen");
    }
}

