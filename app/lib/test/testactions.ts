'use server';
import { Hospitation } from '@/app/lib/data/definitions';
import { createHospitation } from '@/app/lib/actions/dbActions';
import { fetchHospitationById } from '@/app/lib/data/datafetching';
import { ObjectId } from 'mongodb';
import { fetchUser } from '@/app/lib/data/datafetching';

export async function testfunction() {

  console.log("Testaction called by Button");
  try {
    console.log("Try ...");
    
    const test = await fetchUser("KRAM");
    if(test) {
      console.log("testactions---User: " + JSON.stringify(test));
    }
    
  }
  catch (error) {
    console.error('testactions---Fehler: ', error);
  }
  finally {
    console.log("testactions---Finally");
  }
}
