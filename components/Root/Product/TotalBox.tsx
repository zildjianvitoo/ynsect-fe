import CountButton from "@/components/Button/CountButton";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { GoPlus } from "react-icons/go";

type Props = {};

export default function TotalBox({}: Props) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-slate-300 p-6">
      <h3 className=" text-xl font-bold lg:text-2xl">
        Atur jumlah dan catatan
      </h3>
      <p className="text-slate-500 ">Stok total: 300 kg</p>
      <CountButton intialCount={1} />
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
