'use server';
import DatabaseClient from '@/app/lib/mongodb/client';

export async function testfunction() {

  const client = new DatabaseClient();

  console.log("Testaction called by Button");
  try {
    console.log("Try ...");

    await client.connectToDatabase();

    const database1 = client.getDatabase();
    const collection1 = database1.collection("users");
    const result1 = await collection1.find({"username": "WINJ"});

    const collection2 = client.getCollection("users");
    const result2 = await collection2.find({"username": "WINJ"});

    
    //console.log("testactions---Result: " + JSON.stringify(result));

  }
  catch (error) {
    console.error('Catch---', error);
  }
  finally {
    console.log("Finally...");
    await client.closeDatabaseConnection();
  }
}
