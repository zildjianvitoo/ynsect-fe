"use client";
import CountButton from "@/components/Button/CountButton";
import { Button } from "@/components/ui/button";
import { addProductToCart } from "@/lib/network-data/cart";
import { useSession } from "next-auth/react";

import { GoPlus } from "react-icons/go";
import { toast } from "sonner";

type Props = {
  productId: number;
};

export default function TotalBox({ productId }: Props) {
  const { data } = useSession();

  const onAddProductToCart = async () => {
    try {
      await addProductToCart({
        userId: data!.user.id,
        productId: productId,
      });
      toast.success("Berhasil menambahkan produk ke keranjang");
    } catch (error) {
      console.log(error);
      toast.error("Terjadi kesalahan saat menambahkan produk ke keranjang");
    }
  };

  return (
    <div className="flex flex-col gap-2 rounded-lg border border-slate-300 p-6">
      <h3 className=" text-xl font-bold lg:text-2xl">
        Atur jumlah dan catatan
      </h3>
      <p className="text-slate-500 ">Stok total: 300 kg</p>
      <CountButton intialCount={1} cartPage={false} />
      <div className="mt-2 flex items-center justify-between">
        <p className="text-slate-500">Subtotal</p>
        <h3 className=" text-xl font-bold lg:text-2xl">IDR 32,000</h3>
      </div>
      <Button
        className="mt-2 h-12 text-lg font-medium"
        onClick={onAddProductToCart}
      >
        Keranjang <GoPlus size={24} className="ml-2 " />
      </Button>
      <Button
        variant={"secondary"}
        className="mt-2 h-12 border border-primary text-lg font-medium"
        onClick={onAddProductToCart}
      >
        Beli
      </Button>
    </div>
  );
}
