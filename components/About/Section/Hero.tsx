import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden py-64 sm:px-10 md:px-6 lg:px-20">
      <Image
        src="/images/about-page.jpg"
        alt="Maggots"
        fill
        className="object-cover"
      />
      <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/75 " />
      <div className="absolute z-20 flex h-full w-full flex-col gap-6  px-6 text-white md:px-0">
        <p className="text-center text-lg tracking-wide text-white md:text-left md:text-xl lg:text-2xl">
          Ynsect, Cultivating a Sustainable Future with Maggot Farming.
        </p>
        <h1 className="max-w-3xl  text-center text-4xl/snug font-bold tracking-wide text-[#D1F6E6] md:text-left lg:text-6xl/normal">
          Empowering Change: Maggot Farming for a Sustainable World Ahead
        </h1>
      </div>
    </div>
  );
}
