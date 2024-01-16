"use server"
import { mongoFind } from "../mongodb/dbFind";
import type { User } from '@/app/lib/data/definitions';
import { Document } from 'mongodb';

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