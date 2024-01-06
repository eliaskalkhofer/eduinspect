import {Teacher, Hospitation} from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchTeacher(t_id: number) {
  
  noStore();
  try {
    console.log("Try...")
  }
  catch (err) {
    console.log("Error");
  }
}