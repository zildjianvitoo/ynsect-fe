"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";
import { TbUserQuestion } from "react-icons/tb";

const sectionList = [
  {
    name: "Beranda",
    route: "/forum",
    icon: <AiOutlineHome />,
  },
  {
    name: "Pertanyaan Anda",
    route: "/forum/#",
    icon: <TbUserQuestion />,
  },
  {
    name: "Tersimpan",
    route: "/forum/#",
    icon: <FaRegBookmark />,
  },
];

export default function ForumSection() {
  const pathname = usePathname();
  return (
    <div className=" flex flex-col gap-3 lg:gap-6">
      {sectionList.map((section) => (
        <>
          <div
            key={section.name}
            className={`hidden h-14 items-center px-4 text-xl md:w-80  lg:flex ${pathname === section.route ? "rounded-lg bg-primary font-light text-white" : "border-b font-normal text-primary"} `}
          >
            <Link href={section.route}>{section.name}</Link>
          </div>
          <div className="flex size-10 items-center justify-center rounded-md  text-2xl text-primary lg:hidden">
            {section.icon}
          </div>
        </>
      ))}
    </div>
  );
}
