import {Teacher, Hospitation} from './definitions';
import { unstable_noStore as noStore } from 'next/cache';
import { mongoFind} from '@/app/lib/actions/dbFind'
import { sql } from '@vercel/postgres';
import { formatCurrency } from './utils';
import {
  CustomerField,
  CustomersTableType,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  User,
  Revenue,
} from './definitions';

export async function fetchAvailableHospitations() {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();

  try {
    const availableHospitations = await mongoFind("hospitations", '{"status":"verfügbar"}');
    
    //Print the id of a example
    /*
    if(availableHospitations) {
      const hosp = availableHospitations[0];
      console.log("data---ID: " + hosp._id)
    }    
    */

    return availableHospitations;
  } 
  catch (error) {
    console.error('data---Database Error:', error);
    throw new Error('data---Failed to fetch revenue data.');
  }
}

const ITEMS_PER_PAGE = 10;
export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {

    const invoices = await sql<InvoicesTable>`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        invoices.amount::text ILIKE ${`%${query}%`} OR
        invoices.date::text ILIKE ${`%${query}%`} OR
        invoices.status ILIKE ${`%${query}%`}
      ORDER BY invoices.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return invoices.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}