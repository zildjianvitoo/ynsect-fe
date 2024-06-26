import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions, getServerSession } from "next-auth";
import { axiosInstance } from "./axiosInstance";
import { toast } from "sonner";
import { AxiosError } from "axios";

type CredentialsType = {
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
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: CredentialsType): Promise<any> {
        try {
          if (credentials.email && credentials.password) {
            const { data } = await axiosInstance.post("/users/login", {
              email: credentials.email,
              password: credentials.password,
            });
            console.log("Response:", data);
            const user = data.data;
            if (user) {
              return user;
            } else {
              return null;
            }
          }
        } catch (error) {
          if (error instanceof AxiosError) {
            console.log(error.response);
            throw new Error(error?.response?.data.message);
          }
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
      if (user) {
        token = { ...token, ...user };
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
