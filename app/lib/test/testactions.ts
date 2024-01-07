'use server';

import { mongoExecute } from '@/app/lib/actions/dbConnection';
import { User } from '@/app/lib/definitions';
import { MongoClient } from 'mongodb';
  
  export async function testfunction1() {
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
  
  export async function testfunction2() {
  
    try {
      const result = await mongoExecute("users", "{ username: 'LOIS' }");
      
      if(result) {
        //const formatedresult = result[0];
        //console.log(formatedresult);
      }
    }
    catch (error) {
      console.error('Error:', error);
    }
  }
  
  export async function testfunction3(email: string) {
  
    try {
      /*const user = await sql`SELECT * FROM users WHERE name = 'User'`;
      const testuser = user.rows[0];
      console.log(testuser);
  
      const user2 = await sql<User>`SELECT * FROM users WHERE name='User'`;
      const testuser2 = user2.rows[0];
      console.log(testuser2);*/
  
      /* Ergebnis: 
      {
        id: '410544b2-4001-4271-9855-fec4b6a6442a',
        name: 'User',
        email: 'user@nextmail.com',
        password: '$2b$10$BbpfiHgsHULF3bDbkpLIwOqA6EXpP4WQfJ0EJf.2ystonOke2sN6a'
      }
      */
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
  }