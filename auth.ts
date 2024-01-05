import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
//import { sql } from '@vercel/postgres';
import type { User } from '@/app/lib/definitions';
//import bcrypt from 'bcrypt';

import fs from 'fs/promises';
import path from 'path';
 
const logindataPath = path.join(process.cwd(), 'app/lib/logindata.json');

async function getUserFromJson(username: string): Promise<User | null> {
  try {
    const logindata = await fs.readFile(logindataPath, 'utf-8');
    const users: User[] = JSON.parse(logindata);

    const user = users.find((user) => user.username === username);

    return user || null;
  } catch (error) {
    console.error('Fehler beim Lesen der Datei oder Parsing der JSON-Daten:', error);
    return null;
  }
}
/*
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ username: z.string(), password: z.number() })
          .safeParse(credentials);
 
        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data;
          const user = await getUserFromJson(username);
          if (!user) return null;
          if (user.password == password) 
          return user;
        }
 
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});
*/