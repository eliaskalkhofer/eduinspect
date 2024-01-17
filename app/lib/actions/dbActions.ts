"use server"
import { ObjectId } from 'mongodb';
import {connectToDatabase,closeDatabaseConnection,getDatabaseClient} from '@/app/lib/mongodb/clientbasic';
import { revalidatePath } from 'next/cache';

const db = process.env.MONGODB_DB;

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

