"use client";

import { useCartStore } from "@/store/CartStore";

type Props = {};

export default function Subtotal({}: Props) {
  const [subtotal] = useCartStore((state) => [state.subtotal]);

  return (
    <div className="mt-2 flex items-center justify-between">
      <p className="text-slate-500">Subtotal</p>
      <h3 className=" text-xl font-bold lg:text-2xl">
        IDR {subtotal.toLocaleString("id-ID")}
      </h3>
    </div>
  );
}
