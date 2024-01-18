"use server"
import { z } from 'zod';
import { ObjectId } from 'mongodb';
import { connectToDatabase, closeDatabaseConnection, getDatabaseClient } from '@/app/lib/mongodb/clientbasic';
import { revalidatePath } from 'next/cache';
import { Hospitation } from '@/app/lib/data/definitions';
import { fetchUser } from '@/app/lib/data/datafetching';

const db = process.env.MONGODB_DB;

const FormSchema = z.object({
    id: z.string(),

    date: z.string(),
    starttime: z.string(),
    endtime: z.string(),

    room: z.string(),
    subject: z.string(),
    information: z.string()
});

const CreateHospitation = FormSchema.omit({ id: true });

export async function createHospitation(username: string, formData: FormData) {
    const { date, starttime, endtime, room, subject, information } = CreateHospitation.parse({
        date: formData.get('date'),
        starttime: formData.get('starttime'),
        endtime: formData.get('endtime'),
        room: formData.get('room'),
        subject: formData.get('subject'),
        information: formData.get('information')
    });

    const user = await fetchUser(username);
    var hospitation: Hospitation | undefined = undefined;
    if (user) {
        hospitation = {
            teacherUsername: user.username,
            teacherFirstname: user.firstname,
            teacherLastname: user.lastname,
            date: date,
            starttime: starttime,
            endtime: endtime,
            room: room,
            subject: subject,
            information: information,
            status: "verfügbar",
        };
    }

    try {
        await connectToDatabase();

        const databaseClient = getDatabaseClient();
        const databaseObj = databaseClient.db(db);
        const collectionObj = databaseObj.collection("hospitations");
        if (hospitation) {
            const result = await collectionObj.insertOne(hospitation);
            return result;
        }


        console.log("dbActions---Hospitation erfolgreich erstellt");
        return undefined;
    }
    catch (err) {
        console.log("dbActions---Fehler: " + err);
    }
    finally {
        await closeDatabaseConnection();
    }
}

export async function assginHospitation(id: string, implementingTeacherPar: string) {
    try {
        await connectToDatabase();

        const databaseClient = getDatabaseClient();
        const databaseObj = databaseClient.db(db);
        const collectionObj = databaseObj.collection("hospitations");

        const objectId = new ObjectId(id);

        await collectionObj.updateOne(
            { _id: objectId },
            { $set: { status: 'vergeben', impteacherUsername: implementingTeacherPar } }
        );

    } catch (err) {
        console.log("dbActions---Fehler: " + err);
    } finally {
        await closeDatabaseConnection();
        revalidatePath('/dashboard/hospitation');
    }
    console.log("Redirect...")
}

export async function deleteHospitation(id: string) {
    
    try {
        await connectToDatabase();

        const databaseClient = getDatabaseClient();
        const databaseObj = databaseClient.db(db);
        const collectionObj = databaseObj.collection("hospitations");

        const objectId = new ObjectId(id);
        await collectionObj.deleteOne({"_id" : objectId});
        console.log("dbactions---Hospitation mit id: " + id + " gelöscht");
        revalidatePath('/dashboard/offerlesson');

        return { message: 'Hospitation gelöscht' };
    }
    catch (error) {
        return { message: 'Datenbank Fehler: Hospitation löschen fehlgeschlagen' };
    } 
    finally {
        await closeDatabaseConnection();
    }
}