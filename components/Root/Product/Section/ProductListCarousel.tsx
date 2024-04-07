"use client";
import React, { useEffect, useState } from "react";

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
import { getAllProducts } from "@/lib/network-data/product";
import { Product } from "@/types/product";

export default function ProductListCarousel() {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await getAllProducts();
        setProductList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

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
              {productList.map((product, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-[30%]"
                >
                  <ProductCard product={product} />
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
