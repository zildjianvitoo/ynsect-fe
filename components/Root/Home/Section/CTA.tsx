import Image from "next/image";
import { GoPlus } from "react-icons/go";

export default function CTA() {
  return (
    <section id="CTA" className="container py-6 md:mt-24 md:h-80 lg:h-[500px] ">
      <div className="relative flex h-full w-full flex-col justify-center overflow-hidden rounded-xl">
        <Image
          src="/images/cta.jpg"
          alt="Join Us"
          fill
          className="absolute top-0 -z-10 object-cover"
        />
        <div className="absolute left-0 top-0 -z-10 h-full w-full bg-black/75" />

        <div className="flex flex-col items-center gap-4 p-6 text-white md:items-start ">
          <p className="text-center text-4xl font-bold  leading-snug md:text-start lg:text-6xl">
            Mari Bergabung <br /> Bersama Menjaga Indonesia
          </p>
          <p className="text-lg lg:text-xl">Dengan ynsect Kita Bisa</p>
          <div className="flex max-w-fit items-center gap-2 rounded-lg bg-primary px-4 py-2 text-lg text-white md:px-7 md:py-3 md:text-xl">
            <div className="">Join Us</div>
            <GoPlus className="text-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
