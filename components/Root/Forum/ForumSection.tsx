"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sectionList = [
  {
    name: "Beranda",
    route: "/forum",
  },
  {
    name: "Pertanyaan Anda",
    route: "/forum/#",
  },
  {
    name: "Tersimpan",
    route: "/forum/#",
  },
];

export default function ForumSection() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-6">
      {sectionList.map((section) => (
        <div
          key={section.name}
          className={`flex h-14 items-center ${pathname === section.route ? "rounded-lg bg-primary font-light text-white" : "border-b font-normal text-primary"}  px-4 text-xl  md:w-80`}
        >
          <Link href={section.route}>{section.name}</Link>
        </div>
      ))}
    </div>
  );
}
