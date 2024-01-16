'use server';
import { useRouter } from 'next/navigation';
import { NextResponse } from 'next/server';

import {
  fetchAvailableHospitations
} from '@/app/lib/data'
import { redirect } from 'next/navigation';

  export async function testfunction() {
  
    console.log("testaction");
    try {
      console.log("Redirecting ...");
    } 
    catch (error) {
      console.error('testactions---', error);
    }
  }
