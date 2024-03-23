import Navbar from "@/components/Dashboard/Navbar";
import Sidebar from "@/components/Dashboard/Sidebar";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Sidebar />

      <main className="ml-80 overflow-hidden tracking-wide">
        <Navbar />
        {children}
      </main>
    </>
  );
}
