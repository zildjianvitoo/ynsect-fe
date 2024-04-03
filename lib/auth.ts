import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions, getServerSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./connect";
import bcrypt from "bcrypt";
import axios from "axios";

type CredentialsType = {
  name: string;
  email: string;
  password: string;
};

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        name: { label: "Name", type: "text" },
        email: { label: " Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: CredentialsType) {
        if (!credentials.email || !credentials?.password) {
          return null;
        }

        axios
          .post("localhost:3000/users/create", credentials)
          .then((response) => {
            const data = response.data;
            console.log("Response:", data);
            return response.data;
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const getAuthSession = () => getServerSession(authOptions);
