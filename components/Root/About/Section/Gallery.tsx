import GalleryCard from "../GalleryCard";
import GalleryCardReverse from "../GalleryCardReverse";

export default function Gallery() {
  return (
    <section id="gallery" className="container mt-8 flex flex-col gap-8 py-6">
      <div>
        <GalleryCard />
        <div className="mt-4 flex flex-col items-end gap-4 text-center md:text-right">
          <h2 className="text-xl/snug font-bold tracking-wide text-primary  md:text-4xl/normal">
            Effortless Maggot Cultivation:
            <br />A Simple Solution for Environmental Conservation
          </h2>
          <p className="tracking-wide text-slate-500 md:text-xl">
            Temukan kemudahan dan efektivitas budidaya maggot sebagai praktik
            <br />
            berkelanjutan untuk pelestarian lingkungan.
          </p>
        </div>
      </div>

      <div className="mt-4">
        <GalleryCardReverse />
        <div className="mt-4 flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-xl/snug font-bold tracking-wide text-primary md:text-4xl/normal">
            Experience the transformative power of technology
            <br /> in revolutionizing maggot farming.
          </h2>
          <p className="tracking-wide text-slate-500 md:text-xl">
            Rasakan keajaiban teknologi dalam merevolusi budidaya maggot.
            <br /> Dengan mengintegrasikan alat dan metode inovatif secara
            menyeluruh
          </p>
        </div>
      </div>
    </section>
  );
}
