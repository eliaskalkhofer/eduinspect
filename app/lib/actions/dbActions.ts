"use server"
import { ObjectId } from 'mongodb';
import {connectToDatabase,closeDatabaseConnection,getDatabaseClient} from '@/app/lib/mongodb/clientbasic';

const db = process.env.MONGODB_DB;

export async function assginHospitation(id: string, implementingTeacherVar: string) {
    try {
        await connectToDatabase();
        //console.log("dbActions---Clientverbindung erfolgreich aufgebaut");

        const databaseClient = getDatabaseClient();
        const databaseObj = databaseClient.db(db);
        const collectionObj = databaseObj.collection("hospitations");

        //console.log("dbActions---id: " + id);
        const objectId = new ObjectId(id);

        await collectionObj.updateOne(
            { _id: objectId },
            { $set: { status: 'vergeben', implementingTeacher: implementingTeacherVar } }
        );
        
    } catch (err) {
        console.log("dbActions---Fehler: " + err);
    } finally {
        //console.log("dbActions---Finally");
        await closeDatabaseConnection();
        //console.log("dbActions---Clientverbindung erfolgreich geschlossen");
        //await revalidatePath('/dashboard/hospitation');
        //await revalidatePath('/dashboard/hospitationlist');
    
    }
    console.log("Redirect...")
    //redirect('/dashboard/hospitationlist');
}

