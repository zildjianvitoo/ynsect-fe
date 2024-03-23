"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiShoppingBasket } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { RiMenu3Fill } from "react-icons/ri";

const links = [
  { name: "Product", route: "/products" },
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
    <nav className={`fixed top-0 z-50  w-full  ${isScroll && "glass"}`}>
      <div className="container hidden items-center justify-between py-6 lg:flex">
        <Link href={"/"} className="">
          <Image
            src="/images/logo-white.png"
            alt="Ynsect Logo"
            width={110}
            height={55}
          />
        </Link>
        <div className="md:block">
          <ul className="flex gap-16">
            {links.map((link, i) => (
              <li
                key={i}
                className="link-hover-light text-xl font-thin text-white"
              >
                <Link href={link.route}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-6">
          <div className="rounded-lg border border-primary bg-[#eafff6] p-3 text-3xl transition-all duration-300 hover:border-primary hover:bg-transparent hover:text-primary">
            <Link href="/cart">
              <CiShoppingBasket />
            </Link>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-transparent bg-primary px-8 py-3 text-white transition-all duration-300 hover:border-primary hover:bg-transparent hover:text-primary">
            <span className="text-xl">Join Us</span>
            <span className="text-2xl">
              <GoPlus />
            </span>
          </div>
        </div>
      </div>

      <div className="container flex w-full items-center justify-between py-4 lg:hidden">
        <div className="">
          <Link href={"/"} className="">
            <Image
              src="/images/logo-white.png"
              alt="Ynsect Logo"
              width={80}
              height={40}
            />
          </Link>
        </div>

        <div className="">
          <Sheet>
            <SheetTrigger asChild>
              <RiMenu3Fill className="p-0 text-2xl text-white" />
            </SheetTrigger>
            <SheetContent side="left" className="w-[80%]">
              <SheetHeader>
                <SheetTitle className="">
                  <Image
                    src="/images/logo-dark.png"
                    alt="Ynsect Logo"
                    width={110}
                    height={55}
                  />
                </SheetTitle>
              </SheetHeader>
              <div className="mt-10 flex flex-col gap-6">
                {links.map((link, i) => (
                  <li
                    key={i}
                    className="link-hover-dark max-w-fit list-none text-xl font-light"
                  >
                    <Link href={link.route}>{link.name}</Link>
                  </li>
                ))}
              </div>

              <div className="mt-6 flex w-full justify-center gap-2 rounded-lg border border-primary py-2  text-xl font-semibold text-primary duration-300 hover:bg-primary hover:text-white">
                Join Us
              </div>
              <SheetFooter>
                <SheetClose asChild></SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
