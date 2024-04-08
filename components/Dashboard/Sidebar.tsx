"use client";

import Image from "next/image";
import Link from "next/link";
import { GoClock, GoGear } from "react-icons/go";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { PiKeyboard } from "react-icons/pi";
import { RiQuestionnaireLine } from "react-icons/ri";
import { useRouter, usePathname } from "next/navigation";
import { TbLogout2 } from "react-icons/tb";
import { signOut } from "next-auth/react";

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

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  async function handleLogout() {
    await signOut({ redirect: false, callbackUrl: "/" });
    return router.push("/");
  }
  return (
    <aside className="fixed hidden h-screen w-80 flex-col gap-14 border-r bg-secondary py-8 pl-6 lg:flex ">
      <Image
        src="/images/logo-dark.png"
        alt="Ynsect Logo"
        width={120}
        height={65}
      />
      <ul className="flex flex-col gap-6">
        {links.map((link) => (
          <Link
            className={`flex items-center gap-4 rounded-l-lg p-4 transition-all  duration-300 ${pathname.includes(link.route) ? "bg-primary text-white" : "text-slate-500 hover:bg-green-200"}`}
            key={link.name}
            href={link.route}
          >
            <div className="text-2xl">{link.icon}</div>
            <div className="text-xl">{link.name}</div>
          </Link>
        ))}
        <div
          className={`flex cursor-pointer items-center gap-4 rounded-l-lg p-4 text-slate-500  transition-all duration-300 hover:bg-green-200`}
          onClick={handleLogout}
        >
          <div className="text-2xl">
            <TbLogout2 />
          </div>
          <p className="text-xl">Log Out</p>
        </div>
      </ul>
    </aside>
  );
}
