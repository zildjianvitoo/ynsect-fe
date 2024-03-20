"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { GoPlus } from "react-icons/go";

type Props = {};

export default function TotalBox({}: Props) {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-2 rounded-lg border border-slate-300 p-6">
      <h3 className=" text-xl font-bold lg:text-2xl">
        Atur jumlah dan catatan
      </h3>
      <p className="text-slate-500 ">Stok total: 300 kg</p>
      <div className="mt-2 flex items-center gap-5">
        <Button
          variant={"secondary"}
          size={"icon"}
          className="border border-primary"
          onClick={() => count !== 0 && setCount((prev) => prev - 1)}
        >
          <AiOutlineMinus size={24} />
        </Button>
        <span className="flex w-4  text-lg font-medium">{count}</span>
        <Button size={"icon"} onClick={() => setCount((prev) => prev + 1)}>
          <GoPlus size={24} />
        </Button>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <p className="text-slate-500">Subtotal</p>
        <h3 className=" text-xl font-bold lg:text-2xl">IDR 32,000</h3>
      </div>
      <Button className="mt-2 h-12 text-lg font-medium">
        Keranjang <GoPlus size={24} className="ml-2 " />
      </Button>
      <Button
        variant={"secondary"}
        className="mt-2 h-12 border border-primary text-lg font-medium"
      >
        Beli
      </Button>
    </div>
  );
}
