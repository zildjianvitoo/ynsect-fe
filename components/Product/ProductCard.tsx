import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { CiShoppingBasket } from "react-icons/ci";

type Props = {
  image: string;
  title: string;
  description: string;
};

export default function ProductCard({ description, image, title }: Props) {
  return (
    <div className="flex flex-col rounded-md border border-slate-300 bg-[#F4FFFE] px-4 py-6">
      <figure className="relative mx-auto size-40 lg:size-52 xl:size-64">
        <Image src={image} alt={title} fill className="object-cover " />
      </figure>
      <h3 className="mt-5 text-xl font-bold md:text-2xl lg:text-3xl">
        {title}
      </h3>
      <p className="mt-1 text-sm text-slate-500 md:text-base lg:mt-3">
        {description}
      </p>
      <div className="flex gap-2">
        <Button className="mt-3 w-full text-lg font-medium tracking-wide">
          Buy
        </Button>
        <Button className="group mt-3 border border-primary bg-transparent px-3">
          <CiShoppingBasket className="size-6 text-primary group-hover:text-white" />
        </Button>
      </div>
    </div>
  );
}
