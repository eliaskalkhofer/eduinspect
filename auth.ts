import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
import { execute } from '@/app/lib/db';
import { Document, ObjectId } from 'mongodb';

async function getUser(username: string): Promise<User | undefined> {
  try {
    const results = await execute("users", { username: username });

    if (results && results.length > 0) {
      const user: Document = results[0];

      // Assuming `User` has properties like `id`, `name`, `email`, `password`
      const formattedUser: User = {
        id: user._id.toString(),
        name: user.username,
        email: user.email,
        password: user.password,
      };

      console.log(formattedUser);

      return formattedUser;
    }
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ username: z.string(), password: z.string().min(4) })
          .safeParse(credentials);
 
        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data;
          const user = await getUser(username);
          if (!user) return null;
          if(password == user.password) {
            return user;
          }
        }
 
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});