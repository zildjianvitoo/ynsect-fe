"use client";
import { PiFlagPennant } from "react-icons/pi";
import { LiaComment } from "react-icons/lia";
import { RiShareBoxLine } from "react-icons/ri";
import { useState } from "react";

type Props = {
  toggleOpen: () => void;
};

export default function Reaction({ toggleOpen }: Props) {
  const [isHelped, setIsHelped] = useState(false);
  return (
    <div className="flex gap-8">
      <div
        onClick={() => setIsHelped(!isHelped)}
        className={`flex cursor-pointer items-center gap-3 ${isHelped ? "text-green-700" : "text-slate-500"} `}
      >
        <PiFlagPennant className="text-2xl" />
        <div className="text-lg">Membantu?</div>
      </div>
      <div
        onClick={toggleOpen}
        className="flex cursor-pointer items-center gap-3 text-slate-500"
      >
        <LiaComment className="text-2xl" />
        <div className="text-lg">
          77 <span>Komentar</span>
        </div>
      </div>
      <div className="flex cursor-pointer items-center gap-3 text-slate-500">
        <RiShareBoxLine className="text-2xl" />
        <div className="text-lg">Bagikan?</div>
      </div>
    </div>
  );
}
