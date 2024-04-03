"use client";

import Navigation from "@/components/Dashboard/Navigation";

import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";

import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  // Todo: make Middleware
  return (
    <>
      <Navigation />
      <main className="overflow-hidden tracking-wide lg:ml-80 ">
        {children}
      </main>
    </>
  );
}
