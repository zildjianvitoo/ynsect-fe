"use client";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import ProductCard from "../ProductCard";

const dummyData = [
  {
    image: "/images/logo.png",
    title: "Larva BSF Kering",
    description:
      "Sumber protein yang sempurna untuk ternak dan hewan peliharaan Anda.",
  },
  {
    image: "/images/logo.png",
    title: "Larva BSF Kering",
    description:
      "Sumber protein yang sempurna untuk ternak dan hewan peliharaan Anda.",
  },
  {
    image: "/images/logo.png",
    title: "Larva BSF Kering",
    description:
      "Sumber protein yang sempurna untuk ternak dan hewan peliharaan Anda.",
  },
  {
    image: "/images/logo.png",
    title: "Larva BSF Kering",
    description:
      "Sumber protein yang sempurna untuk ternak dan hewan peliharaan Anda.",
  },
  {
    image: "/images/logo.png",
    title: "Larva BSF Kering",
    description:
      "Sumber protein yang sempurna untuk ternak dan hewan peliharaan Anda.",
  },
  {
    image: "/images/logo.png",
    title: "Larva BSF Kering",
    description:
      "Sumber protein yang sempurna untuk ternak dan hewan peliharaan Anda.",
  },
];

type Props = {};

export default function ProductListCarousel({}: Props) {
  return (
    <section className="mt-8 ">
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-slate-500">Lihat lebih</p>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl lg:text-6xl">
            Produk Lainnya
          </h1>
        </div>
        <div className="">
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="cursor-grab"
          >
            <CarouselContent>
              {dummyData.map((product, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-[30%]"
                >
                  <ProductCard
                    title={product.title}
                    image={product.image}
                    description={product.description}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="max-sm:hidden" />
            <CarouselNext className="max-sm:hidden" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
