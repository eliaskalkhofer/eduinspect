
import { mongoExecute } from "./dbConnection";
import type { User } from '@/app/lib/definitions';
import { Document } from 'mongodb';

export async function getUser(username: string): Promise<User | undefined> {
    try {
        const colelctionString = `users`;
        const queryString = `{"username": "${username}"}`;
        const results = await mongoExecute(colelctionString, queryString);

        if (results && results.length > 0) {
            const user: Document = results[0];

            const formattedUser: User = {
                id: user._id.toString(),
                name: user.username,
                email: user.email,
                password: user.password,
            };

            console.log("dbactions---Benutzer erhalten und formatiet: " + JSON.stringify(formattedUser));

            return formattedUser;
        }
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}