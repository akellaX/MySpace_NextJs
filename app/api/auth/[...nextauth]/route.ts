import NextAuth, { NextAuthOptions } from 'next-auth';
import Github from 'next-auth/providers/github';

export const authOptions: NextAuthOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
  debug: true,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
