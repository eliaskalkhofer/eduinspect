"use server"
import { z } from 'zod';
import { ObjectId } from 'mongodb';
import { connectToDatabase, closeDatabaseConnection, getDatabaseClient } from '@/app/lib/mongodb/clientbasic';
import { revalidatePath } from 'next/cache';
import { Hospitation } from '@/app/lib/data/definitions';
import { fetchUser } from '@/app/lib/data/datafetching';
import { redirect } from 'next/navigation';
import { User } from '@/app/lib/data/definitions';

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

const FormSchemaComplete = z.object({
    id: z.string(),
    feedback: z.string()
});

const CreateHospitation = FormSchema.omit({ id: true });
const UpdateHospitation = FormSchema.omit({ id: true });
const CompleteHospitation = FormSchemaComplete.omit({ id: true });

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
        
        revalidatePath('/dashboard/offerlesson');
        console.log("dbActions---Hospitation erfolgreich erstellt");
        return undefined;
    }
    catch (err) {
        console.log("dbActions---Fehler: " + err);
    }
    finally {
        await closeDatabaseConnection();
        redirect('/dashboard/offerlesson');
    }
}

export async function completeHospitation(id: string, formData: FormData) {
    console.log("dbActions---completeHospitation aufgerufen")
    const { feedback } = CompleteHospitation.parse({
        feedback: formData.get('feedback'),
    });

    try {
        await connectToDatabase();

        const databaseClient = getDatabaseClient();
        const databaseObj = databaseClient.db(db);
        const collectionObj = databaseObj.collection("hospitations");

        console.log("dbactions---feedback= " + feedback);
        console.log("dbactions---id= " + id);
        const objectId = new ObjectId(id);
        await collectionObj.updateOne(
            { _id: objectId },
            { $set: { status: "abgeschlossen", feedback: feedback } }
        );

        console.log("dbactions---Hospitation mit id: " + id + " abgeschlossen");
        revalidatePath('/dashboard/hospitationlist');
        return { message: 'Hospitation abgeschlossen' };
    }
    catch (error) {
        console.log("dbactions---Fehler: " + error);
        return { message: 'Datenbank Fehler: Hospitation abschlie fehlgeschlagen' };
    }
    finally {
        await closeDatabaseConnection();
        redirect('/dashboard/hospitationlist');
    }
}

export async function assginHospitation(id: string, implementingTeacherPar: string) {
    try {
        await connectToDatabase();

        const databaseClient = getDatabaseClient();
        const databaseObj = databaseClient.db(db);
        const collectionObj = databaseObj.collection("hospitations");

        const objectId = new ObjectId(id);
        var impteacher: User = {
            username: "",
            firstname: "",
            lastname: "",
            password: "",
        }
        const fetcheduser = await fetchUser(implementingTeacherPar);
        if(fetcheduser) {
            console.log("dbActions---fetcheduser: " + JSON.stringify(fetcheduser));
            impteacher.username = fetcheduser.username;
            impteacher.firstname = fetcheduser.firstname;
            impteacher.lastname = fetcheduser.lastname;
        }

        console.log("dbActions---Nachname: " + impteacher.lastname);
        console.log("dbActions---Vorname: " + impteacher.firstname);
        await collectionObj.updateOne(
            { _id: objectId },
            { $set: { status: 'vergeben', impteacherUsername: implementingTeacherPar, impteacherFirstname: impteacher.firstname, impteacherLastname: impteacher.lastname} }
        );

    } catch (err) {
        console.log("dbActions---Fehler: " + err);
    } finally {
        await closeDatabaseConnection();
        revalidatePath('/dashboard/hospitation');
    }
    console.log("Redirect...")
}

export async function updateHospitation(id: string, formData: FormData) {
    console.log("dbActions---updateHospitation aufgerufen")
    const { date, starttime, endtime, room, subject, information } = UpdateHospitation.parse({
        date: formData.get('date'),
        starttime: formData.get('starttime'),
        endtime: formData.get('endtime'),
        room: formData.get('room'),
        subject: formData.get('subject'),
        information: formData.get('information')
    });

    try {
        await connectToDatabase();

        const databaseClient = getDatabaseClient();
        const databaseObj = databaseClient.db(db);
        const collectionObj = databaseObj.collection("hospitations");

        const objectId = new ObjectId(id);
        await collectionObj.updateOne(
            { _id: objectId },
            { $set: { date: date, starttime: starttime, endtime: endtime, room: room, subject: subject, information: information } }
        );

        console.log("dbactions---Hospitation mit id: " + id + " bearbeitet");
        revalidatePath('/dashboard/offerlesson');
        return { message: 'Hospitation gelöscht' };
    }
    catch (error) {
        return { message: 'Datenbank Fehler: Hospitation löschen fehlgeschlagen' };
    }
    finally {
        await closeDatabaseConnection();
        redirect('/dashboard/offerlesson');
    }
}

export async function deleteHospitation(id: string) {

    try {
        await connectToDatabase();

        const databaseClient = getDatabaseClient();
        const databaseObj = databaseClient.db(db);
        const collectionObj = databaseObj.collection("hospitations");

        const objectId = new ObjectId(id);
        await collectionObj.deleteOne({ "_id": objectId });
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