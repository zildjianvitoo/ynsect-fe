"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LayoutDashboard } from "lucide-react";
import { useSession } from "next-auth/react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CiShoppingBasket } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { RiMenu3Fill } from "react-icons/ri";

const links = [
  { name: "Product", route: "/products" },
  { name: "About Us", route: "/about" },
  { name: "Service", route: "/services" },
  { name: "Forum", route: "/forum" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { data } = useSession();
  const [isScroll, setIsScroll] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const defaultDarkNav =
    pathname.startsWith("/forum") ||
    pathname.startsWith("/products") ||
    pathname.startsWith("/services/") ||
    pathname == "/cart";

  useEffect(() => {
    const handleScroll = () => {
      if (defaultDarkNav) {
        setIsDark(true);
        setIsScroll(false);
      } else if (window.scrollY > 30 && window.scrollY < window.innerHeight) {
        setIsScroll(true);
        setIsDark(false);
      } else if (window.scrollY > window.innerHeight) {
        setIsDark(true);
        setIsScroll(false);
      } else {
        setIsScroll(false);
        setIsDark(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [defaultDarkNav]);

  return (
    <nav
      className={`fixed top-0 z-50  w-full transition-all duration-100  ${isScroll && "glass-nav"}  ${isDark && "dark-nav"}`}
    >
      <div className="container hidden items-center justify-between py-6 lg:flex">
        <Link href="/" className="">
          <Image
            src={
              isDark || defaultDarkNav
                ? "/images/logo-dark.png"
                : "/images/logo-white.png"
            }
            alt="Ynsect Logo"
            width={110}
            height={55}
          />
        </Link>
        <div
          className={`md:block ${isDark || defaultDarkNav ? " text-primary" : "text-white"}`}
        >
          <ul className="flex gap-16">
            {links.map((link, i) => (
              <li
                key={i}
                className={`${pathname.includes(link.route) ? "underline" : "link-hover-light"} text-xl font-light `}
              >
                <Link href={link.route}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-6">
          <Link
            href={"/cart"}
            className="rounded-lg border border-primary bg-white p-3 text-3xl text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
          >
            <CiShoppingBasket />
          </Link>
          {data?.user ? (
            <Link
              href={"/dashboard"}
              className="flex items-center gap-2 rounded-lg border border-transparent bg-primary px-8 py-3 text-white  transition-all duration-300 hover:border-primary hover:bg-transparent hover:text-primary"
            >
              <span className="text-xl">Dashboard</span>
              <span className="text-xl">
                <LayoutDashboard />
              </span>
            </Link>
          ) : (
            <Link
              href={"/login"}
              className="flex items-center gap-2 rounded-lg border border-transparent bg-primary px-8 py-3 text-white  transition-all duration-300 hover:border-primary hover:bg-transparent hover:text-primary"
            >
              <span className="text-xl">Join Us</span>
              <span className="text-2xl">
                <GoPlus />
              </span>
            </Link>
          )}
        </div>
      </div>

      <div className="container flex w-full items-center justify-between py-4 lg:hidden">
        <div className="">
          <Link href={"/"} className="">
            <Image
              src={
                isDark || defaultDarkNav
                  ? "/images/logo-dark.png"
                  : "/images/logo-white.png"
              }
              alt="Ynsect Logo"
              width={80}
              height={40}
            />
          </Link>
        </div>

        <div className="">
          <Sheet>
            <SheetTrigger asChild>
              <RiMenu3Fill
                className={`${isDark || defaultDarkNav ? " text-primary" : "text-white"} p-0 text-2xl`}
              />
            </SheetTrigger>
            <SheetContent side="left" className="w-[80%]">
              <SheetHeader>
                <SheetTitle className="">
                  <Link href="/" className="">
                    <Image
                      src="/images/logo-dark.png"
                      alt="Ynsect Logo"
                      width={110}
                      height={55}
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-10 flex flex-col gap-6">
                {links.map((link, i) => (
                  <li
                    key={i}
                    className={`${pathname.includes(link.route) ? "underline" : "link-hover-dark"} max-w-fit list-none text-xl font-light`}
                  >
                    <SheetClose asChild>
                      <Link href={link.route}>{link.name}</Link>
                    </SheetClose>
                  </li>
                ))}
              </div>

              <div className="mt-12 flex gap-2">
                <Link
                  href={"/cart"}
                  className="flex w-full justify-center gap-2 rounded-lg border border-primary py-2  text-xl font-semibold text-primary duration-300 hover:bg-primary hover:text-white"
                >
                  Cart
                </Link>
                {data?.user ? (
                  <Link
                    href={"/dashboard"}
                    className="flex w-full justify-center gap-2 rounded-lg border border-primary bg-primary  py-2 text-xl font-semibold text-white duration-300 hover:bg-white hover:text-primary"
                  >
                    Dashboard
                  </Link>
                ) : (
                  <Link
                    href={"/login"}
                    className="flex w-full justify-center gap-2 rounded-lg border border-primary bg-primary  py-2 text-xl font-semibold text-white duration-300 hover:bg-white hover:text-primary"
                  >
                    Join Us
                  </Link>
                )}
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
