import Image from "next/image";
import { GoPlus } from "react-icons/go";

export default function CTA() {
  return (
    <section
      id="CTA"
      className="relative mx-8 mt-12 flex h-80 flex-col justify-center overflow-hidden rounded-xl py-6 md:mx-[76px] md:mt-24 md:h-[500px] "
    >
      <Image
        src="/images/cta.jpg"
        alt="Join Us"
        fill
        className="absolute top-0 -z-10 object-cover"
      />
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-black/75" />

      <div className="flex flex-col items-center gap-4 p-6 text-white md:items-start ">
        <p className="text-center text-4xl font-bold  leading-snug md:text-start md:text-6xl">
          Mari Bergabung <br /> Bersama Menjaga Indonesia
        </p>
        <p className="md:text-xl">Dengan ynsect Kita Bisa</p>
        <div className="flex max-w-fit items-center gap-2 rounded-lg bg-primary px-4 py-2 text-lg text-white md:px-7 md:py-3 md:text-xl">
          <div className="">Join Us</div>
          <GoPlus className="text-xl" />
        </div>
      </div>
    </section>
  );
}
