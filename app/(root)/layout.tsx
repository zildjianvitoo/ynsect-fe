import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      {/* <Navbar /> */}
      <div className="flex flex-col overflow-hidden px-6  sm:px-10 lg:px-16 ">
        {children}
      </div>
      <Footer />
    </>
  );
}
