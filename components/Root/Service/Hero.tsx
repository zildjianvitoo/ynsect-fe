import Image from "next/image";
import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden ">
      <Image
        src="/images/about-page.jpg"
        alt="Maggots"
        fill
        className="object-cover"
      />
      <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/75 " />
      <div className="relative z-20 flex flex-col items-center justify-center gap-6  px-6 text-white md:px-0">
        <h1 className="  text-center text-4xl/snug font-bold tracking-wide text-[#D1F6E6] md:text-left md:text-5xl lg:text-6xl/normal">
          Number One Solution!
        </h1>
      </div>
    </section>
  );
}
