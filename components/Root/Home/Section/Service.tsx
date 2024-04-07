import ServiceCard from "../ServiceCard";

export default function Service() {
  return (
    <section id="service" className="container mt-12 flex flex-col gap-8 py-6">
      <div className="flex flex-col gap-2">
        <p className="text-lg text-slate-500 lg:text-xl">Present at any time</p>
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          Our Services
        </h1>
      </div>
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex w-full flex-col gap-6 lg:w-5/12">
          <ServiceCard
            title="Biobox"
            desc="Olah sampah dari rumah dengan Biobox"
            link="/services/biobox"
            image="/images/biobox.jpg"
          />
          <ServiceCard
            title="Waste Management"
            desc="Kami hadir siap mengolah limbah organik anda"
            link="/services/waste-management"
            image="/images/waste-management.jpg"
          />
        </div>
        <div className="w-full lg:w-7/12">
          <ServiceCard
            title="Setor Sampah"
            desc="Hubungi kami dan petugas akan tiba dirumahmu segera"
            link="/services/setor-sampah"
            image="/images/setor-sampah.jpg"
            isJumbo
          />
        </div>
      </div>
    </section>
  );
}
