"use client";

import { GoBell, GoClock, GoGear } from "react-icons/go";
import SearchInput from "./SearchInput";
import Image from "next/image";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { PiKeyboard } from "react-icons/pi";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { RiQuestionnaireLine } from "react-icons/ri";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { TbLogout2 } from "react-icons/tb";
const links = [
  { name: "Beranda", icon: <PiKeyboard />, route: "/dashboard" },
  { name: "Agenda", icon: <GoClock />, route: "/agenda" },
  {
    name: "Waste Database",
    icon: <HiOutlinePresentationChartLine />,
    route: "/waste-database",
  },
  { name: "Ask The Pro", icon: <RiQuestionnaireLine />, route: "/ask-the-pro" },
  { name: "Pengaturan", icon: <GoGear />, route: "/pengaturan" },
];

export default function Navbar() {
  const { data } = useSession();
  const router = useRouter();

  async function handleLogout() {
    await signOut({ redirect: false, callbackUrl: "/" });
    return router.push("/");
  }

  return (
    <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between lg:p-6">
      <div className="flex items-center justify-between p-3 px-6 lg:block lg:p-0">
        <div className="flex flex-col lg:gap-2">
          <h3 className="text-2xl font-bold text-primary lg:text-3xl">
            Halo, {data?.user?.name}
          </h3>
          <p className=" text-slate-500 lg:text-xl">
            Yuk Cek dashboard kamu hari ini!
          </p>
        </div>
        <div className="flex size-10 items-center justify-center rounded-lg border text-xl text-black lg:hidden">
          <GoBell />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 border-b p-3 px-6 lg:justify-normal lg:border-none lg:p-0">
        <Sheet>
          <SheetTrigger>
            <Menu size={28} className="lg:hidden" />
          </SheetTrigger>
          <SheetContent side="left">
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
            <ul className="mt-10 flex flex-col gap-8">
              {links.map((link, i) => (
                <li
                  key={i}
                  className="link-hover-dark max-w-fit list-none text-xl font-light"
                >
                  <SheetClose asChild>
                    <Link href={link.route} className="flex items-center gap-4">
                      <i className="text-2xl">{link.icon}</i>

                      {link.name}
                    </Link>
                  </SheetClose>
                </li>
              ))}
              <li
                onClick={handleLogout}
                className="link-hover-dark max-w-fit list-none text-xl font-light"
              >
                <SheetClose asChild>
                  <div className="flex items-center gap-4">
                    <TbLogout2 />
                    Log Out
                  </div>
                </SheetClose>
              </li>
            </ul>
            <SheetFooter>
              <SheetClose asChild></SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>

        <div className="w-4/6">
          <SearchInput />
        </div>

        <div className="hidden size-14 items-center justify-center rounded-lg border text-2xl text-black lg:flex">
          <GoBell />
        </div>
        <div className="relative size-10 overflow-hidden rounded-full lg:size-14">
          <Image
            src="/images/user-1.jpg"
            alt="User-1 profile picture"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
