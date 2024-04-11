"use client";
import { Button } from "@/components/ui/button";
import { addProductToCart } from "@/lib/network-data/cart";
import { Product } from "@/types/product";
import { useSession } from "next-auth/react";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { CiShoppingBasket } from "react-icons/ci";
import { toast } from "sonner";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { data } = useSession();

  const onAddProductToCart = async () => {
    try {
      await addProductToCart({
        userId: data!.user.id,
        productId: product.id,
      });
      toast.success("Berhasil menambahkan produk ke keranjang");
    } catch (error) {
      console.log(error);
      toast.error("Terjadi kesalahan saat menambahkan produk ke keranjang");
    }
  };

  return (
    <div className="flex flex-col rounded-md border border-slate-300 bg-[#F4FFFE] px-4 py-6">
      <Link href={`/products/${product.id}`}>
        <figure className="relative mx-auto size-40 lg:size-52 xl:size-64">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover "
          />
        </figure>
      </Link>
      <h3 className="mt-5 text-xl font-bold md:text-2xl lg:text-3xl">
        {product.name}
      </h3>
      <p className="mt-1 text-sm text-slate-500 md:text-base lg:mt-3">
        {product.description}
      </p>
      <div className="flex gap-2">
        <Button
          className="mt-3 w-full text-lg font-medium "
          onClick={onAddProductToCart}
        >
          Buy
        </Button>
        <Button
          className="group mt-3 border border-primary bg-transparent px-3"
          onClick={onAddProductToCart}
        >
          <CiShoppingBasket className="size-6 text-primary group-hover:text-white" />
        </Button>
      </div>
    </div>
  );
}
