"use client";
import { PiFlagPennant } from "react-icons/pi";
import { LiaComment } from "react-icons/lia";
import { useState } from "react";
import Link from "next/link";

type Props = {
  toggleOpen: () => void;
  isDetail?: boolean;
  forumId: string;
};

export default function Reaction({ toggleOpen, isDetail, forumId }: Props) {
  const [isHelped, setIsHelped] = useState(false);
  return (
    <div className="flex gap-4 lg:gap-8">
      <div
        onClick={() => setIsHelped(!isHelped)}
        className={`flex cursor-pointer items-center gap-3 ${isHelped ? "text-green-700" : "text-slate-500"} `}
      >
        <PiFlagPennant className="text-lg lg:text-2xl " />
        <div className="hidden text-lg lg:block">Membantu?</div>
      </div>
      {isDetail ? (
        <div
          onClick={toggleOpen}
          className="flex cursor-pointer items-center gap-3 text-slate-500"
        >
          <LiaComment className="text-lg lg:text-2xl " />
          <div className="flex gap-1 lg:text-lg">
            77 <span className="hidden text-lg lg:block">Komentar</span>
          </div>
        </div>
      ) : (
        <Link
          href={"/forum/" + forumId}
          className="flex cursor-pointer items-center gap-3 text-slate-500"
        >
          <LiaComment className="text-lg lg:text-2xl " />
          <div className="flex gap-1 lg:text-lg">
            77 <span className="hidden text-lg lg:block">Komentar</span>
          </div>
        </Link>
      )}
    </div>
  );
}
