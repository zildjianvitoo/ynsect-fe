import ShipmentBox from "../ShipmentBox";
import TotalBox from "../TotalBox";

export default function ProductFeature() {
  return (
    <section className="mt-9 flex flex-col gap-8 lg:flex-row">
      <div className="flex   flex-col gap-3">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          Larva BSF Kering
        </h1>
        <p className="">
          Larva kering adalah sumber protein yang sangat baik dan dapat menjadi
          alternatif yang bagus untuk memenuhi kebutuhan nutrisi hewan
          peliharaan Anda.
        </p>
        <div className="flex items-center gap-1">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            IDR 32,000
          </h1>
          <p className="text-xl text-slate-500 md:text-2xl lg:text-3xl">/kg</p>
        </div>
        <h3 className="mt-4 text-xl font-bold lg:text-2xl">Deskripsi</h3>
        <div className="flex flex-col text-lg text-slate-500">
          <p>
            Larva BSF kering yang bervitamin dan bagus untuk kesehatan pakan:
          </p>
          <p>
            1. Kualitas Unggulan: Produk larva kering yang kami jual adalah
            pilihan premium yang terjamin kualitasnya. Kami memastikan larva
            kami berasal dari sumber yang terpercaya dan diproses dengan standar
            kualitas tertinggi untuk memberikan produk terbaik kepada pelanggan.
          </p>
          <p>
            1. Kualitas Unggulan: Produk larva kering yang kami jual adalah
            pilihan premium yang terjamin kualitasnya. Kami memastikan larva
            kami berasal dari sumber yang terpercaya dan diproses dengan standar
            kualitas tertinggi untuk memberikan produk terbaik kepada pelanggan.
          </p>
          <p>
            1. Kualitas Unggulan: Produk larva kering yang kami jual adalah
            pilihan premium yang terjamin kualitasnya. Kami memastikan larva
            kami berasal dari sumber yang terpercaya dan diproses dengan standar
            kualitas tertinggi untuk memberikan produk terbaik kepada pelanggan.
          </p>
          <p>
            1. Kualitas Unggulan: Produk larva kering yang kami jual adalah
            pilihan premium yang terjamin kualitasnya. Kami memastikan larva
            kami berasal dari sumber yang terpercaya dan diproses dengan standar
            kualitas tertinggi untuk memberikan produk terbaik kepada pelanggan.
          </p>
          <p>
            1. Kualitas Unggulan: Produk larva kering yang kami jual adalah
            pilihan premium yang terjamin kualitasnya. Kami memastikan larva
            kami berasal dari sumber yang terpercaya dan diproses dengan standar
            kualitas tertinggi untuk memberikan produk terbaik kepada pelanggan.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-grow flex-col gap-8">
        <TotalBox />
        <ShipmentBox />
      </div>
    </section>
  );
}
