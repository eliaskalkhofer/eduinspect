'use server';

import {
  fetchFilteredInvoices,
  fetchAvailableHospitations
} from '@/app/lib/data'

  export async function testfunction() {
  
    try {
      const invoices = await fetchFilteredInvoices("", 1);
      const hospitations = await fetchAvailableHospitations();

      console.log("testactions---invoices: " + JSON.stringify(invoices));
      if(hospitations && hospitations.length > 0) {
        console.log("testactions---hospitations: " + JSON.stringify(hospitations));
      }
    } 
    catch (error) {
      console.error('testactions---Error:', error);
      throw new Error('Error.');
    }
  }
