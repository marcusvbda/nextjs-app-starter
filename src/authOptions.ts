import { NextAuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER,
      authorization: {
        params: {
          prompt: "login",
        },
      },
    } as any),
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
};
