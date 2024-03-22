"use client";
import React, { Dispatch, useState } from "react";
import { Button } from "../ui/button";
import { AiOutlineMinus } from "react-icons/ai";
import { GoPlus } from "react-icons/go";

type Props = {
  intialCount: number;
};

export default function CountButton({ intialCount }: Props) {
  const [count, setCount] = useState(intialCount || 0);

  return (
    <div className="mt-2 flex items-center gap-5">
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
