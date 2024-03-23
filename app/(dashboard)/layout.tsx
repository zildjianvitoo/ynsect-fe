import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Sidebar />
      <main className="flex flex-col overflow-hidden tracking-wide">
        {children}
      </main>
    </>
  );
}
