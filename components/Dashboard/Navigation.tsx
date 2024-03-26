"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Navigation() {
  return (
    <section>
      <Sidebar />

      <nav className="border-b lg:ml-80 ">
        <Navbar />
      </nav>
    </section>
  );
}
