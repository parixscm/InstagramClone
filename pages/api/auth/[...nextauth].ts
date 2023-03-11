import NextAuth, { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      session.user.username = session.user
        ?.name!.split(" ")
        .join("")
        .toLocaleLowerCase();
      session.user.uid = token.sub;
      return session;
    },
  },
};

export default NextAuth(authOptions);
