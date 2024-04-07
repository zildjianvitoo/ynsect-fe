import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions, getServerSession } from "next-auth";
import { axiosInstance } from "../axiosInstance";

import axios from "axios";

type CredentialsType = {
  name: string;
  email: string;
  password: string;
};

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
    newUser: "/register",
  },
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
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: CredentialsType): Promise<any> {
        if (credentials.email && credentials.password) {
          console.log(credentials);
          axios
            .post("http://localhost:8000/user/login", credentials)
            .then((response) => {
              const data = response.data;
              console.log("Response:", data);
              return response.data;
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user = token.name;
        return session;
      }
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
