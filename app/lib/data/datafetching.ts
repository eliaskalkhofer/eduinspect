
import { unstable_noStore as noStore } from 'next/cache';
import { mongoFind } from '@/app/lib/mongodb/dbFind';
import DatabaseClient from '@/app/lib/mongodb/client';
import { ObjectId } from 'mongodb';

const client = new DatabaseClient();
const ITEMS_PER_PAGE = 5;

export async function fetchAvailableHospitations() {
  noStore();

  try {
    const availableHospitations = await mongoFind("hospitations", '{"status":"verfügbar"}');
    return availableHospitations;
  }
  catch (error) {
    console.error('data---Database Fehler:', error);
  }
}

export async function fetchFilteredAvailableHospitations(
  query: string,
  currentPage: number,
  username: string
) {

  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    await client.connectToDatabase();
    const collection = client.getCollection("hospitations");
    console.log("********************" + username);
    const result = await collection.aggregate([
      {
        $match: {
          $and: [
            { "status": "verfügbar" },
            { "teacherUsername": { $ne: username } },
            {
              $or: [
                { "teacherUsername": { $regex: new RegExp(query, "i") } },
                { "teacherFirstname": { $regex: new RegExp(query, "i") } },
                { "teacherLastname": { $regex: new RegExp(query, "i") } },
                { "starttime": { $regex: new RegExp(query, "i") } },
                { "endtime": { $regex: new RegExp(query, "i") } },
                { "subject": { $regex: new RegExp(query, "i") } },
                { "date": { $regex: new RegExp(query, "i") } }
              ]
            }
          ]
        }
      },
      {
        $sort: { date: -1 }
      },
      {
        $skip: offset
      },
      {
        $limit: ITEMS_PER_PAGE
      }
    ]).toArray();
    return result;
  }
  catch (error) {
    console.error('datafetching---Datenbankfehler:', error);
  }
  finally {
    await client.closeDatabaseConnection();
    console.log('datafetching---Finally---Verbindung geschlossen')
  }
}

export async function fetchAvailableHospitationsPages(query: string) {

  noStore();

  try {
    await client.connectToDatabase();
    const collection = client.getCollection("hospitations");

    const countResult = await collection.aggregate([
      {
        $match: {
          $and: [
            { "status": "verfügbar" },
            {
              $or: [
                { "teacherFirstname": { $regex: new RegExp(query, "i") } },
                { "teacherLastname": { $regex: new RegExp(query, "i") } },
                { "starttime": { $regex: new RegExp(query, "i") } },
                { "endtime": { $regex: new RegExp(query, "i") } },
                { "subject": { $regex: new RegExp(query, "i") } },
                { "date": { $regex: new RegExp(query, "i") } }
              ]
            }
          ]
        }
      },
      {
        $count: "totalCount"
      }
    ]).toArray();
    const result = countResult.length > 0 ? countResult[0].totalCount : 0;

    const resultFormatted = Math.ceil(Number(result / ITEMS_PER_PAGE));

    return resultFormatted;
  }
  catch (error) {
    console.error('datafetching---Datenbankfehler:', error);
  }
  finally {
    await client.closeDatabaseConnection();
    console.log('datafetching---Verbindung geschlossen')
  }
}

export async function fetchAssignedHospitations(impteacherUsername: String) {
  noStore();

  try {
    const status = "vergeben";
    const query = {
      "status": status,
      "impteacherUsername": impteacherUsername
    };

    console.log("data---Query: " + JSON.stringify(query));
    const assignedHospitations = await mongoFind("hospitations", JSON.stringify(query));
    
    if (assignedHospitations && assignedHospitations.length > 0) {
      return assignedHospitations;
    } else {
      console.log("data---Keine zugeordneten Hospitationen gefunden.");
      return []; // Rückgabe eines leeren Arrays, wenn keine Ergebnisse vorhanden sind
    }
  } catch (error) {
    console.error('data---Datenbankfehler:', error);
  }
}

export async function fetchOwnHospitations(usersname: string) {

  try {
    const user = {"teacherUsername": usersname};
    const ownHospitations = await mongoFind("hospitations", JSON.stringify(user));
    return ownHospitations;
  }
  catch (error) {
    console.error('data---Database Error:', error);
  }
}

export async function fetchOwnAssignedHospitations(username: string) {
  noStore();

  try {
    const status = "vergeben";
    const query = {
      "status": status,
      "teacherUsername": username
    };

    console.log("data---Query: " + JSON.stringify(query));
    const ownAssignedHospitations = await mongoFind("hospitations", JSON.stringify(query));

    if (ownAssignedHospitations && ownAssignedHospitations.length > 0) {
      return ownAssignedHospitations;
    } 
    else {
      console.log("data---Keine zugeordneten Hospitationen gefunden.");
      return []; // Rückgabe eines leeren Arrays, wenn keine Ergebnisse vorhanden sind
    }
  } catch (error) {
    console.error('data---Datenbankfehler:', error);

  }
}

export async function fetchOwnCompletedHospitations(username: string) {
  noStore();

  try {
    const status = "abgeschlossen";
    const query = {
      "status": status,
      "teacherUsername": username
    };

    console.log("data---Query: " + JSON.stringify(query));
    const ownCompletedHospitations = await mongoFind("hospitations", JSON.stringify(query));

    if (ownCompletedHospitations && ownCompletedHospitations.length > 0) {
      return ownCompletedHospitations;
    } 
    else {
      console.log("data---Keine zugeordneten Hospitationen gefunden.");
      return []; // Rückgabe eines leeren Arrays, wenn keine Ergebnisse vorhanden sind
    }
  } catch (error) {
    console.error('data---Datenbankfehler:', error);

  }
}

export async function fetchUser(usersname: string) {
  noStore();

  try {
    const usernameObj = JSON.stringify({"username": usersname});
    const users = await mongoFind("users", usernameObj);

    if (users && users.length > 0) {
      return users[0];
  }
    return undefined;
  }
  catch (error) {
    console.error('data---Database Error:', error);
  }
}

export async function fetchHospitationById(id: ObjectId) {

  noStore();

  try {
    await client.connectToDatabase();
    const collection = client.getCollection("hospitations");

    const hospitation = await collection.findOne({"_id" : id});
    
    return hospitation;
  }
  catch (error) {
    console.error('datafetching---Datenbankfehler:', error);
  }
  finally {
    await client.closeDatabaseConnection();
    console.log('datafetching---Verbindung geschlossen')
  }
}