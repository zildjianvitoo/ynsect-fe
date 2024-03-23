"use client";

import Image from "next/image";
import Link from "next/link";
import { GoClock, GoGear } from "react-icons/go";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { PiKeyboard } from "react-icons/pi";
import { RiQuestionnaireLine } from "react-icons/ri";
import { usePathname } from "next/navigation";

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
  return (
    <aside className="fixed flex h-screen w-80 flex-col gap-14 border-r bg-secondary py-8 pl-6">
      <Image
        src="/images/logo-dark.png"
        alt="Ynsect Logo"
        width={120}
        height={65}
      />
      <ul className="flex flex-col gap-6">
        {links.map((link) => (
          <Link
            className={`flex items-center gap-4 rounded-l-lg p-4 transition-all  duration-300 ${pathname == link.route ? "bg-primary text-white" : "text-slate-500 hover:bg-green-200"}`}
            key={link.name}
            href={link.route}
          >
            <div className="text-2xl">{link.icon}</div>
            <div className="text-xl">{link.name}</div>
          </Link>
        ))}
      </ul>
    </aside>
  );
}
