import NextAuth from 'next-auth';
import GitlabProvider from 'next-auth/providers/gitlab';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GitlabProvider({
      clientId: process.env.GITLAB_CLIENT_ID,
      clientSecret: process.env.GITLAB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    session({ session, token, user }) {
      return session; // The return type will match the one returned in `useSession()`
    },
  },
});
