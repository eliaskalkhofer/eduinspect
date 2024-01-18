'use server';
import { Hospitation } from '@/app/lib/data/definitions';
import { createHospitation } from '@/app/lib/actions/dbActions';

export async function testfunction() {

  console.log("Testaction called by Button");
  try {
    console.log("Try ...");

  }
  catch (error) {
    console.error('testactions---Fehler: ', error);
  }
  finally {
    console.log("testactions---Finally");
  }
}
