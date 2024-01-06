'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { MongoClient } from 'mongodb';
import { connectToDatabase, closeDatabaseConnection, getDatabaseClient } from '@/app/lib/dbmongo';

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});


const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  try {
    await sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
      `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  const amountInCents = amount * 100;

  try {
    await sql`
          UPDATE invoices
          SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
          WHERE id = ${id}
        `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  throw new Error('Failed to Delete Invoice');

  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
    return { message: 'Deleted Invoice.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function testfunction2() {
  try {
    await connectToDatabase();
    const client = getDatabaseClient();
    const database = client.db('eduinspect');
    const collection = database.collection('users'); // Verwende deinen Sammlungsnamen

    const result = await collection.find({ username: "LOIS" }).toArray();
    console.log('Abfrageergebnis:', result);
  }
  catch (error) {
    console.error('Fehler bei der Ausführung der Abfrage:', error);
  }
  finally {
    // Verbindung zur Datenbank schließen
    await closeDatabaseConnection();
  }
}

export async function testfunction() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error('MONGODB_URI is not defined in the environment variables.');
  }

  let client;

  try {
    client = new MongoClient(uri);
    await client.connect();
    console.log('Connected to MongoDB');

    const database = client.db("eduinspect");
    const collection = database.collection("users");

    const result = await collection.find({ username: "LOIS" }).toArray();

  
    console.log('Data: ' + JSON.stringify(result, null, 2));
    console.log('Der Benutzername lautet: ' + result[0].username);
    
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } 
  finally {
    if (client) {
      await client.close();
      console.log('Client closed successfully');
    }

  }
}