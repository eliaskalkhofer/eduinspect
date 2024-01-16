import { unstable_noStore as noStore } from 'next/cache';
import { mongoFind } from '@/app/lib/mongodb/dbFind'


export async function fetchAvailableHospitations() {
  noStore();

  try {
    const availableHospitations = await mongoFind("hospitations", '{"status":"verfügbar"}');

    //Print the id of a example
    /*if(availableHospitations) {
      const hosp = availableHospitations[0];
      console.log("data---ID: " + hosp._id)
    }    */

    return availableHospitations;
  }
  catch (error) {
    console.error('data---Database Error:', error);
    throw new Error('data---Failed to fetch revenue data.');
  }
}

export async function fetchAssignedHospitations(implementingTeacher: String) {
  noStore();

  try {
    const status = "vergeben";
    const query = {
      "status": status,
      "implementingTeacher": implementingTeacher
    };

    console.log("data---Query: " + JSON.stringify(query));
    const assignedHospitations = await mongoFind("hospitations", JSON.stringify(query));

    // Überprüfen, ob assignedHospitations definiert ist und mindestens ein Element enthält
    if (assignedHospitations && assignedHospitations.length > 0) {
      const hosp = assignedHospitations[0];
      console.log("data---ID: " + hosp.teacherUsername);
      return assignedHospitations;
    } else {
      console.log("data---Keine zugeordneten Hospitationen gefunden.");
      return []; // Rückgabe eines leeren Arrays, wenn keine Ergebnisse vorhanden sind
    }
  } catch (error) {
    console.error('data---Datenbankfehler:', error);
    throw new Error('data---Daten fetching fehlgeschlagen!');
  }
}
