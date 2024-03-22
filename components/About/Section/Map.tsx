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
      <div className="mt-8 h-96 w-full rounded-xl bg-green-200">
        <div className=""></div>
      </div>
    </section>
  );
}
