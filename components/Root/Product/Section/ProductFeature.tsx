import { Product } from "@/types/product";
import ShipmentBox from "../ShipmentBox";
import TotalBox from "../TotalBox";

type Props = {
  product: Product;
};

export default function ProductFeature({ product }: Props) {
  console.log(product.description);
  return (
    <section className="mt-9 flex w-full flex-col gap-8 lg:flex-row">
      <div className="flex   w-full flex-grow flex-col gap-3 ">
        <h1 className="text-3xl font-bold  md:text-4xl lg:text-5xl">
          {product.name}
        </h1>
        <p className="text-xl">{product.summary}</p>
        <div className="flex items-center gap-1">
          <h1 className="text-3xl font-bold  md:text-4xl lg:text-5xl">
            IDR {product.price.toLocaleString("id-ID")}
          </h1>
          <p className="text-xl text-slate-500 md:text-2xl lg:text-3xl">/kg</p>
        </div>
        <h3 className="mt-4 text-xl font-bold lg:text-2xl">Deskripsi</h3>
        <div
          className="summary flex w-full flex-col text-lg tracking-wide text-slate-500 "
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></div>
      </div>
      <div className="flex w-1/2 flex-col gap-8">
        <TotalBox productId={product.id} />
        <ShipmentBox />
      </div>
    </section>
  );
}
