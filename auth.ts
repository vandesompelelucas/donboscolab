import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { prisma } from "./prisma";
import Google from "next-auth/providers/google";
import Resend from "next-auth/providers/resend";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google,
    Resend({
      from: "boekingen@lordimmaculate.dev"
    })
  ],
  pages: {
    signIn: "/auth/sign-in"
    // signOut: "/auth/sign-out"
  }
});
