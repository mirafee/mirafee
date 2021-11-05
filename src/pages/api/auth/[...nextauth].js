import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    }),
  ],
  adapter: PrismaAdapter(prisma),
  redirect: async (url, _baseUrl) => {
      if (url === 'http://localhost:3000/api/auth/callback/google') {
        return Promise.resolve('/');
      }
      return Promise.resolve('/');
    },
    debug: true,
  database: process.env.DATABASE_URL,
  jwt: {
    secret: 'alabhola',
    encryption: true,
  },
  secret: process.env.SECRET,
  callbacks: {
    async jwt(token, account) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      return token;
    },
    
  },
})