import ProductList from "@/components/Product/ProductList";
import React from "react";

type Props = {};

export default function Product({}: Props) {
  return (
    <section className="mt-36">
      <ProductList />
    </section>
  );
}
