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

type Props = {
  image: string;
};

export default function Hero({ image }: Props) {
  return (
    <section>
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="cursor-grab"
      >
        <CarouselContent>
          <CarouselItem className="relative">
            <div className="absolute left-0 top-0 z-[1]  h-full w-full bg-black/60" />
            <figure className="relative h-80 w-full">
              <Image
                src={image}
                alt="Larva bsf"
                fill
                className="object-cover"
              />
            </figure>
          </CarouselItem>
          <CarouselItem className="relative">
            <div className=" absolute left-0 top-0 z-[1] h-full w-full bg-black/60" />
            <figure className="relative h-80 w-full">
              <Image
                src={image}
                alt="Larva bsf"
                fill
                className="object-cover"
              />
            </figure>
          </CarouselItem>
          <CarouselItem className="relative">
            <div className=" absolute left-0 top-0 z-[1] h-full w-full bg-black/60" />
            <figure className="h-80 w-full">
              <Image
                src={image}
                alt="Larva bsf"
                fill
                className="object-cover"
              />
            </figure>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="max-sm:hidden" />
        <CarouselNext className="max-sm:hidden" />
      </Carousel>
    </section>
  );
}
