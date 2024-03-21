import { IoGridOutline } from "react-icons/io5";
import ProductCard from "../Product/ProductCard";

const dummyData = [
  {
    image: "/images/logo.png",
    title: "Larva BSF Kering",
    description:
      "Sumber protein yang sempurna untuk ternak dan hewan peliharaan Anda.",
  },
  {
    image: "/images/logo.png",
    title: "Larva BSF Kering",
    description:
      "Sumber protein yang sempurna untuk ternak dan hewan peliharaan Anda.",
  },
  {
    image: "/images/logo.png",
    title: "Larva BSF Kering",
    description:
      "Sumber protein yang sempurna untuk ternak dan hewan peliharaan Anda.",
  },
  {
    image: "/images/logo.png",
    title: "Larva BSF Kering",
    description:
      "Sumber protein yang sempurna untuk ternak dan hewan peliharaan Anda.",
  },
  {
    image: "/images/logo.png",
    title: "Larva BSF Kering",
    description:
      "Sumber protein yang sempurna untuk ternak dan hewan peliharaan Anda.",
  },
  {
    image: "/images/logo.png",
    title: "Larva BSF Kering",
    description:
      "Sumber protein yang sempurna untuk ternak dan hewan peliharaan Anda.",
  },
];

export default function ProductList() {
  return (
    <div className="flex flex-col gap-6 ">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className=" flex flex-col gap-2">
          <p className="text-lg text-slate-500 lg:text-xl">
            The Best of The Best
          </p>
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Our Product
          </h1>
        </div>
        <div className="mt-2 flex gap-4 md:mt-0">
          <div className="hidden rounded-lg border border-primary bg-secondary p-4 text-2xl md:block">
            <IoGridOutline />
          </div>
          <div className="rounded-lg bg-primary px-4 py-2 text-lg text-white md:px-6 md:py-3 md:text-xl ">
            Lihat Semua
          </div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dummyData.map((item, index) => (
          <ProductCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
