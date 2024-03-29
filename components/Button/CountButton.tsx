"use client";
import React, { Dispatch, useState } from "react";
import { Button } from "../ui/button";
import { AiOutlineMinus } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { cn } from "@/lib/utils";

type Props = {
  intialCount: number;
  cartPage: boolean;
};

export default function CountButton({ intialCount, cartPage }: Props) {
  const [count, setCount] = useState(intialCount || 0);

  return (
    <div
      className={cn("mt-2 flex items-center gap-5 ", {
        "max-[460px]:flex-col": cartPage,
      })}
    >
      <Button
        variant={"secondary"}
        size={"icon"}
        className="border border-primary"
        onClick={() => count !== 0 && setCount(count - 1)}
      >
        <AiOutlineMinus size={24} />
      </Button>
      <span className="flex w-4  text-lg font-medium">{count}</span>
      <Button size={"icon"} onClick={() => setCount(count + 1)}>
        <GoPlus size={24} />
      </Button>
    </div>
  );
}
