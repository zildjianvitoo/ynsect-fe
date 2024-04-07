import ProductList from "@/components/Root/Product/ProductList";
import { getAllProducts } from "@/lib/network-data/product";

export default async function Product() {
  const { data: products } = await getAllProducts();

  if (products) {
    return (
      <section className="container mt-36 py-6">
        <ProductList products={products} />
      </section>
    );
  }
}
