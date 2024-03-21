import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col overflow-hidden  ">{children}</main>
      <Footer />
    </>
  );
}
