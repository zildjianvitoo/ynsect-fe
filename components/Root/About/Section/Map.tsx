import Image from "next/image";

export default function Map() {
  return (
    <section id="map" className="container mt-8 py-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className=" flex flex-col gap-2">
          <p className="text-lg text-slate-500 lg:text-xl">
            Anywhere, Everywhere
          </p>
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Find Us!
          </h1>
        </div>
        <div className="mt-2 flex gap-4 md:mt-0">
          <div className="rounded-lg bg-primary px-4 py-2 text-lg text-white md:px-6 md:py-3 md:text-xl ">
            Lihat Maps
          </div>
        </div>
      </div>
      <div className="relative mt-8 h-96 w-full overflow-hidden rounded-xl">
        <a href="https://www.google.com/maps/place/Fasilkom+Universitas+Sriwijaya+-+Kampus+Palembang/@-2.9845264,104.7334016,17z/data=!4m6!3m5!1s0x2e3b75ed9f44e9c5:0x30db735107f3611d!8m2!3d-2.9849001!4d104.7322375!16s%2Fg%2F11b6pzmsn2?entry=ttu">
          <Image
            src="/images/maps.png"
            alt="Map"
            fill
            className="object-cover"
          />
        </a>
      </div>
    </section>
  );
}
