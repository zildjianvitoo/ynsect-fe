import TestiCard from "../TestiCard";

export default function Testimonial() {
  return (
    <section id="service" className="container mt-12 flex flex-col gap-8 py-6">
      <div className="flex flex-col gap-2">
        <p className="text-lg text-slate-500 lg:text-xl">Brought to You</p>
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          Testimonial
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <TestiCard
          title="Mengesankan!"
          desc={`"Saya sangat terkesan dengan kontribusi yang dilakukan Ynsect dalam mengatasi masalah limbah organik melalui penggunaan larva.  Terbaik!”`}
          image="/images/testi-1.jpg"
          name="Budi Hartono"
          job="Pemilik Peternakan"
        />
        <TestiCard
          title="Inovatif!"
          desc={`“Setelah mendapatkan edukasi, saya memanfaatkan website ini untuk melakukan pemantauan proses dalam membudidaya maggot.”`}
          image="/images/testi-2.jpg"
          name="Siti Aisyah"
          job="Pemilik Restoran"
        />
      </div>
    </section>
  );
}
