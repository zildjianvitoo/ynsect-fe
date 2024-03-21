"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CiShoppingBasket } from "react-icons/ci";
import { GoPlus } from "react-icons/go";

const links = [
  { name: "Product", route: "/product" },
  { name: "About Us", route: "/about" },
  { name: "Service", route: "/service" },
  { name: "Forum", route: "/forum" },
];

export default function Navbar() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 flex w-full  items-center justify-between px-20 py-6 ${isScroll && "glass"}`}
    >
      <div className="">
        <Image
          src="/images/logo-white.png"
          alt="Ynsect Logo"
          width={110}
          height={55}
        />
      </div>
      <div className="">
        <ul className="flex gap-16">
          {links.map((link, i) => (
            <li key={i} className="text-xl font-thin text-white">
              <a href={link.route}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-6">
        <div className="rounded-lg border border-primary bg-[#eafff6]  p-3 text-3xl">
          <CiShoppingBasket />
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-white ">
          <span className="text-xl">Join Us</span>
          <span className="text-2xl">
            <GoPlus />
          </span>
        </div>
      </div>
    </nav>
  );
}
