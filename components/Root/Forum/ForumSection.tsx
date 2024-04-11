"use client";

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";
import { TbUserQuestion } from "react-icons/tb";

export default function ForumSection() {
  const { data } = useSession();
  const userId = data?.user.id;
  const pathname = usePathname();
  return (
    <>
      <div className="hidden gap-2 lg:flex lg:flex-col lg:gap-6">
        <div
          className={`flex h-14 items-center text-xl md:w-80  lg:px-4 ${pathname === "/forum" ? "rounded-lg bg-primary font-light text-white" : "border-b font-normal text-primary"} `}
        >
          <Link href="/forum">Beranda</Link>
        </div>
        <div
          className={`flex h-14 items-center text-xl md:w-80  lg:px-4 ${pathname.includes("/forum/user/") ? "rounded-lg bg-primary font-light text-white" : "border-b font-normal text-primary"} `}
        >
          <Link href={`/forum/user/${userId}`}>Pertanyaan Anda</Link>
        </div>
        <div
          className={`flex h-14 items-center text-xl md:w-80  lg:px-4 ${pathname.includes("/forum/saved/") ? "rounded-lg bg-primary font-light text-white" : "border-b font-normal text-primary"} `}
        >
          <Link href={`/forum/saved/${userId}`}>Tersimpan</Link>
        </div>
      </div>

      <div className="flex gap-2 lg:hidden lg:flex-col lg:gap-6">
        <div
          className={`flex size-10 items-center justify-center text-2xl text-primary  ${pathname === "/forum" ? "rounded-lg bg-primary font-light text-white" : "font-normal text-primary"}`}
        >
          <Link href="/forum">
            <AiOutlineHome />
          </Link>
        </div>
        <div
          className={`flex size-10 items-center justify-center text-2xl text-primary  ${pathname.includes("/forum/user/") ? "rounded-lg bg-primary font-light text-white" : "font-normal text-primary"}`}
        >
          <Link href={`/forum/user/${userId}`}>
            <TbUserQuestion />
          </Link>
        </div>
        <div
          className={`flex size-10 items-center justify-center text-2xl text-primary  ${pathname.includes("/forum/saved/") ? "rounded-lg bg-primary font-light text-white" : "font-normal text-primary"}`}
        >
          <Link href={`/forum/saved/${userId}`}>
            <FaRegBookmark />
          </Link>
        </div>
      </div>
    </>
  );
}
