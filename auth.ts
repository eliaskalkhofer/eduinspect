import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { getUser } from './app/lib/actions/dbActions';
import bcrypt from 'bcrypt';

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

          if (!user) {
            console.log("auth---User ist null!")
            return Promise.resolve(null);
          }
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (user && passwordsMatch) {
            // Speichern des Benutzernamens in der Session
            //const session = { id: 123, username: 'example_user' };
            const session = { id: user.id, username: user.username };
            console.log('Session Object:', session);
            return Promise.resolve(session);
          }
        }
        console.log('Invalid credentials');
        return Promise.resolve(null);

      }
    }),
  ],
});