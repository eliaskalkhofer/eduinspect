'use server';
import { Hospitation } from '@/app/lib/data/definitions';
import { createHospitation } from '@/app/lib/actions/dbActions';
import { fetchHospitationById } from '@/app/lib/data/datafetching';
import { ObjectId } from 'mongodb';

export async function testfunction() {

  console.log("Testaction called by Button");
  try {
    console.log("Try ...");
    const id = new ObjectId("65a7dd75abb1944ca3aff934");
    const hospitation = await fetchHospitationById(id);
    
    if(hospitation) {
      console.log("testactions---Hospitation id: " + hospitation._id);
    }
    else {
      console.log("testactions---Keine Hospitation");
    }
    
  }
  catch (error) {
    console.error('testactions---Fehler: ', error);
  }
  finally {
    console.log("testactions---Finally");
  }
}
