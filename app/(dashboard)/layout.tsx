"use client";

import Navigation from "@/components/Dashboard/Navigation";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  const { status } = useSession();
  if (status === "unauthenticated") {
    return redirect("/login");
  }
  return (
    <>
      <Navigation />
      <main className="overflow-hidden tracking-wide lg:ml-80 ">
        {children}
      </main>
    </>
  );
}
