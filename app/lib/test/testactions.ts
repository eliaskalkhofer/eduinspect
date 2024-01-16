'use server';
import DatabaseClient from '@/app/lib/mongodb/client';

export async function testfunction() {

  const client = new DatabaseClient();

  console.log("Testaction called by Button");
  try {
    console.log("Try ...");
    await client.connectToDatabase();

    const result = await client.find("users", {"username": "WINJ"});
    console.log("testactions---Result: " + JSON.stringify(result));

  }
  catch (error) {
    console.error('Catch---', error);
  }
  finally {
    console.log("Finally...");
    client.closeDatabaseConnection();
  }
}
