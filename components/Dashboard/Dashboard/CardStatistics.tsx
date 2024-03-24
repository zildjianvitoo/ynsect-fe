import { cn } from "@/lib/utils";
import React, { Dispatch, SetStateAction } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

type Props = {
  title: string;
  rangeMonth: string;
  weight: number;
  activeCardStats: string;
  setActiveCardStats: Dispatch<SetStateAction<string>>;
};

export default function CardStatistics({
  rangeMonth,
  title,
  weight,
  activeCardStats,
  setActiveCardStats,
}: Props) {
  return (
    <div
      className={cn(
        "flex cursor-pointer flex-col gap-5 rounded-xl px-4 py-6 hover:bg-primary hover:text-secondary",
        {
          "bg-primary text-secondary": activeCardStats === title,
        },
        {
          "border border-[#E8E8E8] text-[#03201E]": activeCardStats !== title,
        },
      )}
      onClick={() => setActiveCardStats(title)}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold md:text-2xl">{title}</h3>
        <MdOutlineArrowForwardIos className="text-sm" />
      </div>
      <div className="flex items-center justify-between">
        <p>{rangeMonth}</p>
        <p>
          <span className="mr-1 text-xl font-bold md:text-2xl">{weight}</span>Kg
        </p>
      </div>
    </div>
  );
}
