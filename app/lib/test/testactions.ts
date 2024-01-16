'use server';
import DatabaseClient from '@/app/lib/mongodb/client';
import { fetchAvailableHospitationsPages } from '@/app/lib/data/datafetching';

export async function testfunction() {

  const client = new DatabaseClient();

  console.log("Testaction called by Button");
  try {
    console.log("Try ...");

    const test = await fetchAvailableHospitationsPages("");
    console.log("testactions---Pages: " + test);
  }
  catch (error) {
    console.error('Catch---', error);
  }
  finally {
    console.log("Finally...");
    await client.closeDatabaseConnection();
  }
}
