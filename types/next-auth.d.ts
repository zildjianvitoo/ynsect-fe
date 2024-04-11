import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      phone: string;
      address: string;
      token: string;
    } & DefaultSession["user"];
  }
}
